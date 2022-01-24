import "../styles/faq.css";
import CirclImage from "../assets/2-round-circles.png";
import AstroImg from "../assets/astronaut.png";
import StarsImg from "../assets/starsimg.png";
const FAQ = () => {
  return (
    <>
      <section
        id="faq-section"
        className="faq-section mt-0 mt-sm-5 py-5 position-relative"
      >
        <img className="circle-img" src={CirclImage} alt="CirclImage" />
        <div className="container ">
          <h1 className="text-center text-center text-white fs-xxl fs-normal">
            FAQs
          </h1>
          <div className="row mt-5 pt-0 pt-sm-4">
            {" "}
            <div className="col-3 mb-3 mb-sm-5 col-12 col-md-6 col-xl-3">
              <div>
                <h4>How do I get an NFT?</h4>
                <p>
                  Stay updated on all social media accounts. Whitelist and live
                  mint details will be announced with direct link to the action.
                </p>
              </div>
            </div>
            <div className="col-3 mb-3 mb-sm-5 col-12 col-md-6 col-xl-3">
              <div>
                <h4>When will the llamas be available?</h4>
                <p>January 2022</p>
              </div>
            </div>
            <div className="col-3 mb-3 mb-sm-5 col-12 col-md-6 col-xl-3">
              <div>
                <h4>How many NFTs can I buy?</h4>
                <p>
                During Presale, whitelisted wallets will have a limit of 4 to mint. During public sale, there will be no limit.
                </p>
              </div>
            </div>
            <div className="col-3 mb-3 mb-sm-5 col-12 col-md-6 col-xl-3">
              <div>
                <h4>Why Solana?</h4>
                <p>
                  Simple… Value. LDC is a project that will kick butt in the
                  video game, art, and animation realms. The fractional gas fees
                  allow us to give you more for less!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden position-relative astro">
        <div className="astro-section position-relative">
          <img
            className="position-absolute h-100 bottom-0 end-0 "
            src={AstroImg}
            alt="astronaut"
          />
          <img className="w-100" src={StarsImg} alt="stars" />
        </div>
      </section>
    </>
  );
};

export default FAQ;
