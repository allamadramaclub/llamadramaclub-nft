import React from "react";
import Footer from "./components/Footer";
import Logo from "./assets/logo.png";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <>
      <div className="container">
        <ul className="welcome-page-links d-flex align-items-center justify-content-end pt-2">
          <li className=" nav-item">
            <a
              href="https://discord.com/invite/sKqHppcsXz"
              target="_blank"
              className="nav-link text-white"
            >
              {" "}
              Discord
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="https://twitter.com/llamadramaclub"
              target="_blank"
            >
              Twitter
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="https://www.youtube.com/channel/UCWbjIu44mFe536Mf76jGjlg"
              target="_blank"
            >
              Youtube
            </a>
          </li>
        </ul>

        <div className="row">
          <div className="col-12 px-0 px-sm-3">
            <div className="welcome-page">
              <div className="d-flex justify-content-center">
                <img src={Logo} alt="Logo" className="me-sm-3 me-1" />
              </div>

              <div className="col-12 col-lg-6 h-100">
                <div className="welcome-text-wrapper px-2 px-lg-3">
                  <h1 className="text-white fs-xxl fs-normal">
                    WELCOME TO THE LLAMADRAMACLUB!
                  </h1>

                  <p className="me-0 me-lg-4">
                    The first NFT project that plans to go fully mainstream with
                    animated short films and video games. One NFT allows you
                    access to the game world with freebies and early access to
                    animated short films.
                  </p>
                  <Link to={`/home`}>Enter</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WelcomePage;
