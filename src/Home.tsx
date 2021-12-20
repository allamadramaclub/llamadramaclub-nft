import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
//my imports
import "./styles/landing.css";
import "./styles/Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import MainImage from "./assets/13.png";
import MainImage from "./assets/mainGif.gif";
import DiscordImg from "./assets/discord.png";
import WalletImg from "./assets/connectWallet.png";
import { Container, Row, Col } from "react-bootstrap";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "./candy-machine";

const ConnectButton = styled(WalletDialogButton)``;

const CounterText = styled.span``; // add your styles here

const MintContainer = styled.div``; // add your styles here

const MintButton = styled(Button)``; // add your styles here
console.log(MintContainer, "mint Container");
export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      setItemsAvailable(itemsAvailable);
      setItemsRemaining(itemsRemaining);
      setItemsRedeemed(itemsRedeemed);

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  };

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);

  return (
    <main>
      <div id="landingPage" className="py-4 py-sm-5 mb-5">
        <Container id="landingContainer">
          <Row className="justify-content-between align-items-center">
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
              <div
                className="d-flex flex-column align-items-center align-items-lg-start"
                id=""
              >
                {/* <iframe
                  title="video"
                  id="landingImage"
                  src=" https://www.youtube.com/embed/l_1UmPnSEEs"
                /> */}
                <div className="leftHero">
                  <img src={DiscordImg} className="w-100" alt="" />
                  <h1 className="fs-semibold text-white  fs-xl text-center ">
                    Letting the llamas loose January 2022!
                  </h1>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
              <div
                className="      d-flex
                flex-column
                align-items-center
                "
                id="landingWelcomeGroup"
              >
                {/* Minting Section (Where the MINT button is):  */}
                {/* <div id="landingWelcomeText"> */}
                {/* <h2 className="welcomeTexts">
                  Thousands of loveable llamas from the{" "}
                </h2>
                <h1 className="welcomeTexts">llamadramaclub</h1>
                <h2 className="welcomeTexts">
                  are joining the NFT world January 2022.
                </h2> */}
                <div className="rightHero d-flex flex-column justify-content-center align-items-center">
                  <img
                    src={MainImage}
                    className="w-100 flip-horizontal"
                    alt=""
                  />

                  {/* </div> */}
                  {/* minting starts here */}
                  <div className="mint-container">
                    {wallet && (
                      <p>
                        Wallet{" "}
                        {shortenAddress(wallet.publicKey.toBase58() || "")}
                      </p>
                    )}

                    {wallet && (
                      <p className="mintingTexts">
                        Balance: {(balance || 0).toLocaleString()} SOL
                      </p>
                    )}

                    {wallet && (
                      <p className="mintingTexts">
                        Total Available: {itemsAvailable}
                      </p>
                    )}

                    {wallet && (
                      <p className="mintingTexts">Redeemed: {itemsRedeemed}</p>
                    )}

                    {wallet && (
                      <p className="mintingTexts">
                        Remaining: {itemsRemaining}
                      </p>
                    )}

                    <MintContainer>
                      {!wallet ? (
                        <ConnectButton
                          // className="walletBtnstyle"
                          id="connectButton"
                        >
                          <p id="connectBtnText" className="mb-0">
                            {" "}
                            Connect Wallet
                          </p>
                        </ConnectButton>
                      ) : (
                        <MintButton
                          disabled={isSoldOut || isMinting || !isActive}
                          onClick={onMint}
                          variant="contained"
                          id="mintingButton"
                        >
                          {isSoldOut ? (
                            "SOLD OUT"
                          ) : isActive ? (
                            isMinting ? (
                              <CircularProgress />
                            ) : (
                              "MINT"
                            )
                          ) : (
                            <Countdown
                              date={startDate}
                              onMount={({ completed }) =>
                                completed && setIsActive(true)
                              }
                              onComplete={() => setIsActive(true)}
                              renderer={renderCounter}
                            />
                          )}
                        </MintButton>
                      )}
                    </MintContainer>

                    <Snackbar
                      open={alertState.open}
                      autoHideDuration={6000}
                      onClose={() =>
                        setAlertState({ ...alertState, open: false })
                      }
                    >
                      <Alert
                        onClose={() =>
                          setAlertState({ ...alertState, open: false })
                        }
                        severity={alertState.severity}
                      >
                        {alertState.message}
                      </Alert>
                    </Snackbar>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {/* <Row>
            <Col>
              <div id="LandingFollows">
                <div id="followButtons">
                  <span className="followButton">
                    <a
                      className="linkButton"
                      href="https://twitter.com/llamadramaclub"
                      target="_blank"
                    >
                      <button id="twitterBtn">Twitter</button>
                    </a>
                  </span>
                  <span className="followButton">
                    <a
                      className="linkButton"
                      href="https://discord.gg/pZbPMA3r"
                      target="_blank"
                    >
                      <button id="discordBtn"> Discord</button>
                    </a>
                  </span>
                </div>
              </div>
            </Col>
          </Row> */}
        </Container>
      </div>
    </main>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default Home;
