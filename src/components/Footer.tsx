import React from "react";
import { DiscordIcon, TwitterIcon, YoutubeIcon } from "./Icons";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="d-flex">
          <span>
            <YoutubeIcon />
          </span>
          <span className="mx-3 mx-sm-4">
            <DiscordIcon />
          </span>
          <span>
            <TwitterIcon />
          </span>
        </div>

        <span className="pt-4">llamadramaclub © 2021</span>
      </div>
    </>
  );
};

export default Footer;
