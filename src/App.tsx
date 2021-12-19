import "./MintApp.css";
import { useMemo } from "react";
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

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { createTheme, ThemeProvider } from "@material-ui/core";

const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

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
    <div id="">
      <NavBar />
      {/* <Banner /> */}

      <ThemeProvider theme={theme}>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect={true}>
            <WalletDialogProvider>
              <Home
                candyMachineId={candyMachineId}
                config={config}
                connection={connection}
                startDate={startDateSeed}
                treasury={treasury}
                txTimeout={txTimeout}
              />
            </WalletDialogProvider>
          </WalletProvider>
        </ConnectionProvider>
      </ThemeProvider>

      <About />
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
      {/* <Creator /> */}
      {/* <Signup /> */}
      {/* <FillerImages /> */}
    </div>
  );
};

export default App;
