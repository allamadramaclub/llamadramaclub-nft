import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/fillerImages.css";
const FillerImages = () => {
  return (
    <div id="fillerDiv">
      <Row>
        <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
          <div className="fillerImageContainer">
            <div className="fillerImage"></div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
          <div className="fillerImageContainer">
            <div className="fillerImage"></div>
          </div>
        </Col>{" "}
        <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
          <div className="fillerImageContainer">
            <div className="fillerImage"></div>
          </div>
        </Col>{" "}
      </Row>
    </div>
  );
};

export default FillerImages;
