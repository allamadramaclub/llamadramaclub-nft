import { DiscordIcon, TwitterIcon, YoutubeIcon } from "./Icons";

const Footer = () => {
  return (
    <>
      <div className="footer-section overflow-hidden position-relative">
        <div className="d-flex social-icons">
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCWbjIu44mFe536Mf76jGjlg"
          >
            <YoutubeIcon />
          </a>
          <a
            target="_blank"
            href="http://discord.gg/sKqHppcsXz"
            className="mx-3 mx-sm-4"
          >
            <DiscordIcon />
          </a>
          <a target="_blank" href="https://twitter.com/llamadramaclub">
            <TwitterIcon />
          </a>
        </div>

        <span className="pt-4">llamadramaclub © 2021</span>
      </div>
    </>
  );
};

export default Footer;
