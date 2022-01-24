import "./MintApp.css";
import { useMemo, useEffect } from "react";
import { CrossMintProvider } from "@crossmint/client-sdk-react-ui";
//my imports
import Button from "react-bootstrap/Button";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Examples from "./components/Examples";
import MiddlePart from "./components/MiddlePart";
import Roadmap from "./components/Roadmap";
import FillerImages from "./components/FillerImages";
import FAQ from "./components/FAQ";
import Creator from "./components/Creator";
import Signup from "./components/Signup";
import Banner from "./components/Banner";
import "./styles/app.css";
import firstPic from "./assets/0.png";
import secondPic from "./assets/1.png";
import thirdPic from "./assets/2.png";
import fourthPic from "./assets/3.png";
import fifthPic from "./assets/9.png";
import sixthPic from "./assets/11.png";
import seventhPic from "./assets/12.png";
import eighthPic from "./assets/2018.png";
import ninthPic from "./assets/92.png";
import tenthPic from "./assets/97.png";
import eleventhPic from "./assets/2016.png";
import twelvethPic from "./assets/2017.png";
import Home from "./Home";
import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import Leave1 from "./assets/leaves-img/leave-1.png";
import Leave2 from "./assets/leaves-img/leave-2.png";
import Leave3 from "./assets/leaves-img/leave-3.png";
import Leave4 from "./assets/leaves-img/leave-4.png";
import Leave5 from "./assets/leaves-img/leave-5.png";
import Leave6 from "./assets/leaves-img/leave-6.png";
import Leave7 from "./assets/leaves-img/leave-7.png";
import Leave8 from "./assets/leaves-img/leave-8.png";
import Leave9 from "./assets/leaves-img/leave-9.png";
import Leave10 from "./assets/leaves-img/leave-10.png";
import Leave11 from "./assets/leaves-img/leave-11.png";
import Leave12 from "./assets/leaves-img/leave-12.png";
import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { createTheme, ThemeProvider } from "@material-ui/core";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";
import Inevitable from "./components/Inevitable";

const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
  try {
    const candyMachineId = new anchor.web3.PublicKey(
      process.env.REACT_APP_CANDY_MACHINE_ID!,
    );

    return candyMachineId;
  } catch (e) {
    console.log('Failed to construct CandyMachineId', e);
    return undefined;
  }
};

const candyMachineId = getCandyMachineId();
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost
  ? rpcHost
  : anchor.web3.clusterApiUrl('devnet'));

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);
const txTimeoutInMilliseconds = 30000;
const theme = createTheme({
  palette: {
    type: "dark",
  },
  overrides: {
    MuiButtonBase: {
      root: {
        justifyContent: "flex-start",
      },
    },
    MuiButton: {
      root: {
        textTransform: undefined,
        padding: "12px 16px",
      },
      startIcon: {
        marginRight: 8,
      },
      endIcon: {
        marginLeft: 8,
      },
    },
  },
});
const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSlopeWallet(),
      getSolflareWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    []
  );
  return (
    <div className="position-relative">
      <div className="anim">
        <span className=" d-none d-lg-block">
          <img src={Leave1} alt="Leave1" />
        </span>
        <span className="">
          <img src={Leave2} alt="Leave2" />
        </span>
        <span className="">
          <img src={Leave3} alt="Leave3" />
        </span>
        <span className=" d-none d-lg-block">
          <img src={Leave1} alt="Leave1" />
        </span>{" "}
        <span className=" d-none d-lg-block">
          <img src={Leave1} alt="Leave1" />
        </span>
        <span className="">
          <img src={Leave4} alt="Leave4" />
        </span>
        <span className="">
          <img src={Leave4} alt="Leave4" />
        </span>
        <span className="">
          <img src={Leave5} alt="Leave5" />
        </span>
        <span className=" d-none d-lg-block">
          <img src={Leave1} alt="Leave1" />
        </span>
        <span className="">
          <img src={Leave2} alt="Leave2" />
        </span>
        <span className="">
          <img src={Leave3} alt="Leave3" />
        </span>
        <span className=" d-none d-lg-block">
          <img src={Leave1} alt="Leave1" />
        </span>{" "}
        <span className=" d-none d-lg-block">
          <img src={Leave1} alt="Leave1" />
        </span>
        <span className="">
          <img src={Leave4} alt="Leave4" />
        </span>
        <span className="">
          <img src={Leave4} alt="Leave4" />
        </span>
        <span className="">
          <img src={Leave5} alt="Leave5" />
        </span>{" "}
        <span className="">
          <img src={Leave3} alt="Leave3" />
        </span>
        <span className=" d-none d-lg-block">
          <img src={Leave1} alt="Leave1" />
        </span>{" "}
        <span className=" d-none d-lg-block">
          <img src={Leave1} alt="Leave1" />
        </span>
        <span className="">
          <img src={Leave4} alt="Leave4" />
        </span>
        <span className="">
          <img src={Leave4} alt="Leave4" />
        </span>
        <span className="">
          <img src={Leave5} alt="Leave5" />
        </span>
      </div>
      <div className="d-flex min-h-screen flex-column ">
        <NavBar />
        {/* <Banner /> */}
        <ThemeProvider theme={theme}>
          <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect={true}>
              <WalletDialogProvider>
              <CrossMintProvider clientId="f012ecdf-55c2-4dbd-b8f4-d2b5c5f95828">
                <Home
     candyMachineId={candyMachineId}
     connection={connection}
     startDate={startDateSeed}
     txTimeout={txTimeoutInMilliseconds}
     rpcHost={rpcHost}
                />
                 </CrossMintProvider>
              </WalletDialogProvider>
            </WalletProvider>
          </ConnectionProvider>
        </ThemeProvider>
      </div>
      {/* <About /> */}
      {/* <Examples
        firstPicture={firstPic}
        secondPicture={secondPic}
        thirdPicture={thirdPic}
        fourthPicture={fourthPic}
        fifthPicture={fifthPic}
        sixthPicture={sixthPic}
      /> */}
      {/* <MiddlePart /> */}
      <Roadmap />
      <Inevitable />
      <OurTeam />
      {/* <Examples
        firstPicture={seventhPic}
        secondPicture={eighthPic}
        thirdPicture={ninthPic}
        fourthPicture={tenthPic}
        fifthPicture={eleventhPic}
        sixthPicture={twelvethPic}
      /> */}
      {/* <FillerImages /> */}
      <FAQ />
      <Footer />
      {/* <Creator /> */}
      {/* <Signup /> */}
      {/* <FillerImages /> */}
    </div>
  );
};
export default App;
