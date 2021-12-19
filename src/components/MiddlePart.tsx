import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/middlePart.css";

const MiddlePart = () => {
  return (
    <div id="middlePartDiv">
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
          <div className="middleImgContainer">
            <div className="middleImage"></div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
          <div id="middleText">
            <h1>Middle part </h1>
            <h1>
              There's not enough text for this part. Do you want to keep or
              remove it?
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id,
              similique aut? Numquam sed voluptates in! Quisquam porro culpa
              eaque, commodi architecto voluptate, beatae laboriosam earum
              impedit odit dolorem adipisci facere.
            </p>
            <Button id="followUsBtn" variant="dark">
              Follow us on Twitter
            </Button>{" "}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MiddlePart;
