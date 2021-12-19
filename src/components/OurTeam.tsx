import dozerImage from "../assets/dozer-img-team.png";
import rynImage from "../assets/ryn-team-img.png";

const OurTeam = () => {
  return (
    <>
      <div className="our-team-section ">
        <div className="container">
          <div className="row">
            <div className="col-11 d-flex justify-content-center align-items-center flex-column  text-center">
              <h1 className="text-center text-white fs-xxl fs-normal">
                Roadmap
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

          <div className="row py-5">
            <div className="col-12 col-md-6">
              <div className="team-card">
                <img src={dozerImage} alt="dozerImage" />

                <button>Dozer</button>
              </div>
            </div>

            <div className="col-12 col-md-6 py-3 my-sm-0">
              <div className="team-card">
                <img src={rynImage} alt="rynImage" />

                <button>Ryn</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
