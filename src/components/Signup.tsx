import React from "react";
import { Button } from "react-bootstrap";
import "../styles/signup.css";

const Signup = () => {
  return (
    <div id="signUpDiv">
      <h1 id="signupTitle">Stay in touch</h1>
      <h2 className="signupText">
        Be the first to know about the exciting things to come for our
        Llamadramaclub Family.
      </h2>

      <div id="signupForm">
        <input
          style={{ padding: "10px" }}
          className="signupItem"
          type="text"
          placeholder="email address"
        />
        <Button id="signupBtn" className="signupItem" variant="warning">
          Send
        </Button>{" "}
      </div>
    </div>
  );
};

export default Signup;
