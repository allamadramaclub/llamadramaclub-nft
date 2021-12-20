import dozerImage from "../assets/NFT1.png";
import rynImage from "../assets/NFT2.png";

const OurTeam = () => {
  return (
    <>
      <div className="our-team-section ">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-11 d-flex justify-content-center align-items-center flex-column  text-center">
              <h1 className="text-center text-white fs-xxl fs-normal">
                Our Team
              </h1>

              <p>
                llamadramaclub was created by a group of creatives with a
                passion for music, theater and animation. It is our goal to
                spearhead projects of various genres and collaborate with our
                favorite artists who dabble in art, short film animation and
                gaming.
              </p>
            </div>
          </div>

          <div className="row py-4 py-sm-5">
            <div className="col-12 col-md-6">
              <div className="team-card">
                <img src={dozerImage} alt="dozerImage" />

                <button className="border-0 bg-transparent">Dozer</button>
              </div>
            </div>

            <div className="col-12 col-md-6 pt-4 pt-sm-0">
              <div className="team-card">
                <img src={rynImage} alt="rynImage" />

                <button className="border-0 bg-transparent">Ryn</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
