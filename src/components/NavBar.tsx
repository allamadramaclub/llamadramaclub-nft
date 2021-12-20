import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../styles/navbar.css";
import Logo from "../assets/headerLogo.png";
//import react responsive
import { useMediaQuery } from "react-responsive";
//import logos
import twitterLogo from "../assets/MdiTwitter.svg";
import youtubeLogo from "../assets/MdiYoutube.svg";
// import Logo from "../assets/logo.png";

const NavBar = () => {
  //Off canbas config
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  //react responsive config
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  //enable offcanvas scrolling
  const handleShow = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setShow(true);
  };
  return (
    <>
      <section className="bg-black-600 py-3 club-header">
        <div className="container">
          <nav className="navbar navbar-expand-xl navbar-light text-white ">
            <div className="container-fluid">
              <a className="navbar-brand logo text-white" href="#">
                <img src={Logo} alt="" className="me-sm-3 me-1" />
                llamadramaclub
              </a>
              {/* <button
                className="navbar-toggler bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button> */}
              <button
                className="menu-toggle navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span className="second"></span>
                <span></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav align-items-xl-center ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active text-white"
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#roadmap" className="nav-link text-white">
                      Roadmap
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#faq-section">
                      FAQ
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
                  <li className=" nav-item mt-3 mt-xl-0">
                    <a
                      href="https://discord.gg/pZbPMA3r"
                      target="_blank"
                      className="ms-3 d-flex justify-content-center align-items-center text-white discord-btn"
                    >
                      {" "}
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
      {/* <Navbar id="navbarDiv" bg="dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#landingPage" id="navbarTitle">
            <img id="realLogo" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#roadmapComponent">
                <p className="canvasLink">ROADMAP</p>
              </Nav.Link>
              <Nav.Link href="#aboutPage">
                {" "}
                <p className="canvasLink">ABOUT</p>
              </Nav.Link>
              <Nav.Link href="#faqComponent">
                {" "}
                <p className="canvasLink">FAQ</p>
              </Nav.Link>
              <Nav.Link
                href="https://twitter.com/llamadramaclub"
                target="_blank"
              >
                {" "}
                <p className="canvasLink">Twitter</p>
              </Nav.Link>{" "}
              <Nav.Link
                href="https://www.youtube.com/channel/UCWbjIu44mFe536Mf76jGjlg"
                target="_blank"
              >
                {" "}
                <p className="canvasLink">Youtube</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  );
};

export default NavBar;
