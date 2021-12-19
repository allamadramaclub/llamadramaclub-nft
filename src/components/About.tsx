import React from "react";
import "../styles/about.css";
import AboutImg from "../assets/aboutMint.png";
const About = () => {
  return (
    <>
      <section id="about-section">
        <div className="container">
          <div className="d-flex justify-content-between about-us-layout gx-5 flex-lg-row flex-column align-items-center">
            <div className=" mb-5">
              <div className="aboutLeft">
                <img src={AboutImg} alt="" className="w-100" />
              </div>
            </div>
            <div className=" mb-5">
              <div className="aboutRight">
                <small className="text-orange-800">About Us</small>
                <h1 className="text-white fs-xxl  text-white">
                  Welcome to the llamadramaclub!
                </h1>
                <h6 className="fs-md fw-regular leading-30 text-grey-900">
                  The first NFT project that plans to go fully mainstream with
                  animated short films and video games. One NFT allows you
                  access to the game world with freebies and early access to
                  animated short films.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    // <div id="aboutPage">
    //   <img src={AboutImg} className="w-100" alt="" />
    //   <h1 id="aboutTitle">LLAMADRAMACLUB</h1>
    //   <p className="aboutText">
    //     was created by a group of creatives with a passion for music, theater
    //     and animation.
    //   </p>
    //   <p className="aboutText">
    //     It is our goal to spearhead projects of various genres and collaborate
    //     with our favorite artists who dabble in art, short film animation and
    //     gaming.
    //   </p>
    // </div>
  );
};

export default About;
