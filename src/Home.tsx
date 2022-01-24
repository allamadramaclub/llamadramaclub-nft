import { useEffect, useMemo, useState, useCallback } from "react";
import * as anchor from "@project-serum/anchor";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Snackbar } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Alert from "@material-ui/lab/Alert";
//my imports
import "./styles/landing.css";
import "./styles/crossmint.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import {
  awaitTransactionSignatureConfirmation,
  CandyMachineAccount,
  CANDY_MACHINE_PROGRAM,
  getCandyMachineState,
  mintOneToken,
} from "./candy-machine-v2";
import { AlertState } from "./utils";
import { Header } from "./Header";
import { MintButton } from "./MintButton";
import { GatewayProvider } from "@civic/solana-gateway-react";
import { CrossMintButton } from "@crossmint/client-sdk-react-ui";
import MainImage from "./assets/mainGif.gif";
import DiscordImg from "./assets/discord.png";
import WalletImg from "./assets/connectWallet.png";
const ConnectButton = styled(WalletDialogButton)`
transition: 0.3s ease;
border: 2px solid #ff6900;
background: #ff6900 !important;
border-radius: 64px !important;
width: 289.85px !important;
height: 70.18px !important;
display: flex !important;
justify-content: center !important;
align-items: center !important;
font-weight: 600 !important;
font-size: 28.4867px !important;
font-family: "Montserrat" !important;
`;

const MintContainer = styled.div``; // add your owns styles here

export interface HomeProps {
  candyMachineId?: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  txTimeout: number;
  rpcHost: string;
}

const Home = (props: HomeProps) => {
  const [isUserMinting, setIsUserMinting] = useState(false);
  const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const rpcUrl = props.rpcHost;
  const wallet = useWallet();

  const anchorWallet = useMemo(() => {
    if (
      !wallet ||
      !wallet.publicKey ||
      !wallet.signAllTransactions ||
      !wallet.signTransaction
    ) {
      return;
    }

    return {
      publicKey: wallet.publicKey,
      signAllTransactions: wallet.signAllTransactions,
      signTransaction: wallet.signTransaction,
    } as anchor.Wallet;
  }, [wallet]);

  const refreshCandyMachineState = useCallback(async () => {
    if (!anchorWallet) {
      return;
    }

    if (props.candyMachineId) {
      try {
        const cndy = await getCandyMachineState(
          anchorWallet,
          props.candyMachineId,
          props.connection
        );
        setCandyMachine(cndy);
      } catch (e) {
        console.log("There was a problem fetching Candy Machine state");
        console.log(e);
      }
    }
  }, [anchorWallet, props.candyMachineId, props.connection]);

  const onMint = async () => {
    try {
      setIsUserMinting(true);
      document.getElementById("#identity")?.click();
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = (
          await mintOneToken(candyMachine, wallet.publicKey)
        )[0];

        let status: any = { err: true };
        if (mintTxId) {
          status = await awaitTransactionSignatureConfirmation(
            mintTxId,
            props.txTimeout,
            props.connection,
            true
          );
        }

        if (status && !status.err) {
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
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (!error.message) {
          message = "Transaction Timeout! Please try again.";
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          window.location.reload();
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
      setIsUserMinting(false);
    }
  };

  useEffect(() => {
    refreshCandyMachineState();
  }, [
    anchorWallet,
    props.candyMachineId,
    props.connection,
    refreshCandyMachineState,
  ]);

  return (
    <main className="flex-grow-1 d-flex flex-colum align-items-center">
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
                <div className="leftHero position-relative d-flex flex-column justify-content-center align-items-center">
                  <a
                    href=" http://discord.gg/sKqHppcsXz"
                    className=" position-absolute w-75 py-5"
                    target="_blank"
                  >
                    <div className="py-5"></div>
                  </a>
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
                    <Paper
                      style={{
                        padding: 24,
                        backgroundColor: "#151A1F",
                        borderRadius: 6,
                      }}
                    >
                      {!wallet.connected ? (
                        <ConnectButton>Connect Wallet</ConnectButton>
                      ) : (
                        <>
                          <Header candyMachine={candyMachine} />
                          <MintContainer>
                            {candyMachine?.state.isActive &&
                            candyMachine?.state.gatekeeper &&
                            wallet.publicKey &&
                            wallet.signTransaction ? (
                              <GatewayProvider
                                wallet={{
                                  publicKey:
                                    wallet.publicKey ||
                                    new PublicKey(CANDY_MACHINE_PROGRAM),
                                  //@ts-ignore
                                  signTransaction: wallet.signTransaction,
                                }}
                                gatekeeperNetwork={
                                  candyMachine?.state?.gatekeeper
                                    ?.gatekeeperNetwork
                                }
                                clusterUrl={rpcUrl}
                                options={{ autoShowModal: false }}
                              >
                                <MintButton
                                  candyMachine={candyMachine}
                                  isMinting={isUserMinting}
                                  onMint={onMint}
                                />
                              </GatewayProvider>
                            ) : (
                              <>
                                <MintButton
                                  candyMachine={candyMachine}
                                  isMinting={isUserMinting}
                                  onMint={onMint}
                                />
                              </>
                            )}
                          </MintContainer>
                        </>
                      )}<CrossMintButton
                      collectionTitle="<TITLE_FOR_YOUR_COLLECTION>"
                      collectionDescription="<DESCRIPTION_OF_YOUR_COLLECTION>"
                      collectionPhoto="<OPT_URL_TO_PHOTO_COVER>"
                      style={{margin: "auto"}}
                    
                  />
                      {/* <CrossMintButton
          collectionTitle="<TITLE_FOR_YOUR_COLLECTION>"
          collectionDescription="<DESCRIPTION_OF_YOUR_COLLECTION>"
          collectionPhoto="<OPT_URL_TO_PHOTO_COVER>"
          style={{margin: "auto"}}
      /> */}
                    </Paper>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default Home;
