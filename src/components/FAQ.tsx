import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/faq.css";

const FAQ = () => {
  return (
    <div id="faqComponent">
      <h1 id="faqCompTitle">FAQ</h1>
      <Container>
        <Row>
          <div data-aos="flip-up">
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <div className="faqTextContainer">
                <h2 className="faqTitle">How do I get an NFT?</h2>
                <p className="faqText">
                  Stay updated on all social media accounts. Whitelist and live
                  mint details will be announced with direct link to the action.
                </p>
              </div>
            </Col>{" "}
          </div>
          <div data-aos="flip-up">
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <div className="faqTextContainer">
                <h2 className="faqTitle">When will the llamas be available?</h2>
                <p className="faqText">January 2022</p>
              </div>
            </Col>{" "}
          </div>
          <div data-aos="flip-up">
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <div className="faqTextContainer">
                <h2 className="faqTitle">How many NFTs can I buy?</h2>
                <p className="faqText">
                  There is no limit during live mint. We believe that our
                  mission will attract the kind of investors that want to double
                  down on us. Our goal is to show investors they made the right
                  choice.
                </p>
              </div>
            </Col>{" "}
          </div>
          <div data-aos="flip-up">
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <div className="faqTextContainer">
                <h2 className="faqTitle">Why Sol?</h2>
                <p className="faqText">
                  Simple… Value. LDC is a project that will kick butt in the
                  video game, art, and animation realms. The fractional gas fees
                  allow us to give you more value for your investment.
                </p>
              </div>
            </Col>{" "}
          </div>
        </Row>{" "}
      </Container>
    </div>
  );
};

export default FAQ;
