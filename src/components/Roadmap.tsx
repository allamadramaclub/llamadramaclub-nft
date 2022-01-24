import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/roadmap.css";
import samurayImage from "../assets/samuray-image.png";
import Leave1 from "../assets/leaves-img/leave-1.png";
import Leave2 from "../assets/leaves-img/leave-2.png";
import Leave3 from "../assets/leaves-img/leave-3.png";
import Leave4 from "../assets/leaves-img/leave-4.png";
import Leave5 from "../assets/leaves-img/leave-5.png";
import Leave6 from "../assets/leaves-img/leave-6.png";
import Leave7 from "../assets/leaves-img/leave-7.png";
import Leave8 from "../assets/leaves-img/leave-8.png";
import Leave9 from "../assets/leaves-img/leave-9.png";
import Leave10 from "../assets/leaves-img/leave-10.png";
import Leave11 from "../assets/leaves-img/leave-11.png";
import Leave12 from "../assets/leaves-img/leave-12.png";

const Roadmap = () => {
  return (
    <>
      <section
        id="roadmap"
        className="roadmap-section  position-relative  py-4 py-sm-5"
      >
        {/* <div className="roadmap-leaves-image"></div> */}

        <div className="container pt-4 pb-5 mb-5 z-1 position-relative">
          <h1 className="text-center text-white fs-xxl fs-normal">Roadmap</h1>
          <div className="row  pt-5">
            <div className="col-12  order-3 col-sm-6 col-lg-4 mb-3 mb-sm-5"></div>

            <div className="col-12 col-sm-6 col-lg-4 mb-3 mb-sm-5">
              <div>
                <h3>Q1 2021</h3>
                <ul className="list-group">
                <li className="list-group-item list-group-item-action  list-group-item list-group-item-action list-group-item-dark-action list-group-item list-group-item-action list-group-item-dark-dark">
                Goal: Increase project awareness, Solidify a great community,
                  Run a successful launch, Expand online presence</li>
                  <li className="list-group-item list-group-item-action list-group-item-dark">
                  1. Secure
                  partnerships with 4 promoters to screen possible whitelisters
                  and attain 1,000 WL spots for Presale. 🤝
                  </li>
                  <li className="list-group-item list-group-item-action list-group-item-dark">
                  2. Release Q1 and Q2
                  roadmap. 📍
                  </li>
                  <li className="list-group-item list-group-item-action list-group-item-dark">
                  3. “Ask Me Anything” for members and investors to
                  get answers to questions they may have about the project,
                  founders, process, etc. 🎙 
                  </li>
                  <li className="list-group-item list-group-item-action list-group-item-dark">
                  4. Grow the community organically
                  with the help of influencers and members of community. Our
                  belief has always been to provide open access from any member
                  of LDC to any of the founders, moderators and alike to
                  increase camaraderie. Transparency, trust and passion are a
                  few things that will separate this project from most.This
                  first phase of the LDC universe will be about finding people
                  who believe in the entire universe we have conceived as much
                  as we do. 🌎
                  </li>
                  <li className="list-group-item list-group-item-action list-group-item-dark">
                  5. Launch Presale on 24th and 25th of January
                  tentatively. 🚀
                  </li> <li className="list-group-item list-group-item-action list-group-item-dark">
                  6. Secure parternships with 8-10 of the
                  biggest and best Verified promoters/influencers on January
                  25th to build hype for public sale. Goal is reach an audience
                  of close to 1MILLION to help sell out the project and start
                  work immediately on the next projects! 🤝
                  </li> <li className="list-group-item list-group-item-action list-group-item-dark">
                  7. Launch Public
                  sale on 27th of January. 🚀🚀
                  </li><li className="list-group-item list-group-item-action list-group-item-dark">
                  8. Game Dev has begun! We
                  promised we would start development at 75% but we couldn’t
                  help ourselves! So we are delivering sooner than later. 🎮 9.
                  LDCpresents 2 minute preview. LDCpresents is one of two
                  formidable branches of LDC brand. 📺 10. Merch announcements.
                  (Merch drop will be in Q2) 👕👚
                  </li>
                </ul>
                <p className="max-w-281">
               
                </p>
              </div>
            </div>

            <div className="col-12  col-sm-6 col-lg-4 mb-3 mb-sm-5">
              <div>
                <h3>Q2 2022 </h3>
                <ul className="list-group">
                <li className="list-group-item list-group-item-action  list-group-item list-group-item-action  list-group-item list-group-item-action list-group-item-dark-dark">
                Goal: Enter the metaverse, LDC proposal to Mainstream media
                  powerhouses, Release Merch 2. 6 Episodes of our LDCpresents
                  pilot project will be released for NFT holders to access
                  first. And then released on website for community to enjoy.📺</li>
                  <li className="list-group-item list-group-item-action list-group-item-dark">
                    1. 2nd Quarter will provide us with much more funding to
                    create our LDC space in the metaverse. We will open up
                    questions to LDC community for this segment as we want this
                    metaverse to be a space designed by the community and for
                    the community. 🌎
                  </li>
                  <li className="list-group-item list-group-item-action list-group-item-dark">
                    2. 6 Episodes of our LDCpresents pilot project will be
                    released for NFT holders to access first. And then released
                    on website for community to enjoy.📺
                  </li>
                  <li className="list-group-item list-group-item-action list-group-item-dark">
                    3. Release 2 batches of merch. 👕👚
                  </li>
                  <li className="list-group-item list-group-item-action list-group-item-dark">
                  4. Spin off: Goblin and Duck. Release preview for pilot
                  episode of both Goblins’ and ducks’ series. 🔥 5. Release 3
                  NFT projects: Game utility NFT, NFT collectible collection,
                  Goblin and Duck NFTs. 🚀📈🌎
                  </li>
                </ul>
                <p className="max-w-200">
                 
                
                </p>
              </div>
            </div>
          </div>
          <img
            className="samuray-roadmap-img "
            src={samurayImage}
            alt="samurayImage"
          />
        </div>
      </section>
    </>
    // <div id="roadmapComponent">
    //   <h1 id="roadmapCompTitle">RoadMap</h1>
    //   <div>
    //     <Container>
    //       <Row>
    //         <div data-aos="fade-down-right">
    //           <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
    //             <div className="roadmapTextContainer">
    //               <h2 className="roadmapTitle">Whitelist</h2>
    //               <p className="roadmapText">
    //                 250 collectors will be able to grab llamas at a special
    //                 discounted price with 10 Mint limit.
    //               </p>
    //               <p className="roadmapText">2,500 llamas will be released.</p>
    //             </div>
    //           </Col>{" "}
    //         </div>
    //         <div data-aos="fade-up-left">
    //           <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
    //             <div className="roadmapTextContainer">
    //               <h2 className="roadmapTitle">Launch day</h2>
    //               <p className="roadmapText">
    //                 If you missed out on the whitelist, don’t worry!
    //               </p>
    //               <p className="roadmapText">
    //                 7,000 more llamas will be released on launch day.
    //               </p>
    //             </div>
    //           </Col>{" "}
    //         </div>
    //         <div data-aos="fade-up-right">
    //           <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
    //             <div className="roadmapTextContainer">
    //               <h2 className="roadmapTitle">Videogame drop</h2>
    //               <p className="roadmapText">
    //                 At 75%, we plan on launching development of our game world.
    //                 We cannot express enough how diverse our game launches will
    //                 be. Our goal is to create something for everyone to enjoy
    //                 every quarter. NFT holders will instantly gain freebies in
    //                 games once launched.
    //               </p>
    //             </div>
    //           </Col>{" "}
    //         </div>
    //         <div data-aos="fade-up-left">
    //           <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
    //             <div className="roadmapTextContainer">
    //               <h2 className="roadmapTitle">Animated short films</h2>
    //               <p className="roadmapText">
    //                 We aren’t called the drama club for nothing. Llamadramaclub
    //                 plans on entertaining you with animated shorts that will
    //                 make you laugh, and hopefully leave you wanting more. NFT
    //                 holders will gain early access to each episode before
    //                 general public
    //               </p>
    //             </div>
    //           </Col>
    //         </div>
    //         <div data-aos="zoom-in-up">
    //           <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
    //             <div className="roadmapTextContainer">
    //               <h2 className="roadmapTitle"> TESLA GIVEAWAY!!!!!</h2>
    //               <div className="roadmapText">
    //                 <p>
    //                   {" "}
    //                   That’s right! At 100% We will be giving away a Tesla!
    //                 </p>
    //                 <h3>Follow us on:</h3>
    //                 <a
    //                   className="roadmapLinkButton"
    //                   href="https://twitter.com/llamadramaclub"
    //                   target="_blank"
    //                 >
    //                   <Button className="roadmapBtn" variant="warning">
    //                     Twitter
    //                   </Button>{" "}
    //                 </a>
    //               </div>
    //             </div>
    //           </Col>{" "}
    //         </div>
    //       </Row>{" "}
    //     </Container>
    //   </div>
    // </div>
  );
};

export default Roadmap;
