import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/roadmap.css";

const Roadmap = () => {
  return (
    <div id="roadmapComponent">
      <h1 id="roadmapCompTitle">RoadMap</h1>
      <div>
        <Container>
          <Row>
            <div data-aos="fade-down-right">
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <div className="roadmapTextContainer">
                  <h2 className="roadmapTitle">Whitelist</h2>
                  <p className="roadmapText">
                    250 collectors will be able to grab llamas at a special
                    discounted price with 10 Mint limit.
                  </p>
                  <p className="roadmapText">2,500 llamas will be released.</p>
                </div>
              </Col>{" "}
            </div>
            <div data-aos="fade-up-left">
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <div className="roadmapTextContainer">
                  <h2 className="roadmapTitle">Launch day</h2>
                  <p className="roadmapText">
                    If you missed out on the whitelist, don’t worry!
                  </p>
                  <p className="roadmapText">
                    7,000 more llamas will be released on launch day.
                  </p>
                </div>
              </Col>{" "}
            </div>
            <div data-aos="fade-up-right">
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <div className="roadmapTextContainer">
                  <h2 className="roadmapTitle">Videogame drop</h2>
                  <p className="roadmapText">
                    At 75%, we plan on launching development of our game world.
                    We cannot express enough how diverse our game launches will
                    be. Our goal is to create something for everyone to enjoy
                    every quarter. NFT holders will instantly gain freebies in
                    games once launched.
                  </p>
                </div>
              </Col>{" "}
            </div>
            <div data-aos="fade-up-left">
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <div className="roadmapTextContainer">
                  <h2 className="roadmapTitle">Animated short films</h2>
                  <p className="roadmapText">
                    We aren’t called the drama club for nothing. Llamadramaclub
                    plans on entertaining you with animated shorts that will
                    make you laugh, and hopefully leave you wanting more. NFT
                    holders will gain early access to each episode before
                    general public
                  </p>
                </div>
              </Col>
            </div>
            <div data-aos="zoom-in-up">
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <div className="roadmapTextContainer">
                  <h2 className="roadmapTitle"> TESLA GIVEAWAY!!!!!</h2>
                  <div className="roadmapText">
                    <p>
                      {" "}
                      That’s right! At 100% We will be giving away a Tesla!
                    </p>
                    <h3>Follow us on:</h3>
                    <a
                      className="roadmapLinkButton"
                      href="https://twitter.com/llamadramaclub"
                      target="_blank"
                    >
                      <Button className="roadmapBtn" variant="warning">
                        Twitter
                      </Button>{" "}
                    </a>
                  </div>
                </div>
              </Col>{" "}
            </div>
          </Row>{" "}
        </Container>
      </div>
    </div>
  );
};

export default Roadmap;
