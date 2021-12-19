import React from "react";
import bannerPic from "../assets/banner.png";
import "../styles/banner.css";

const Banner = () => {
  return (
    <div id="bannerDiv">
      <img id="bannerImage" src={bannerPic} alt="" />
    </div>
  );
};

export default Banner;
