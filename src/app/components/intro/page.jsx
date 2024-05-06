import React from "react";

function Intro() {
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2">
          <div className="col position-relative my-3 my-md-4">
            <div className="">
              <img
                src="https://preview.colorlib.com/theme/pentax/img/background/about1.jpg.webp"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="introImage">
              <img
                src="https://preview.colorlib.com/theme/pentax/img/background/about2.jpg.webp"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col container my-5 my-md-4">
            <div className="d-flex text-start  flex-column gap-3">
              <h3 className="text-start fw-bolder">
                Let's <br /> Introduce About <br /> Myself
              </h3>
              <p>
                Beginning blessed second a creepeth. Darkness wherein fish years
                good air whose after seed appear midst evenin
              </p>
              <p>
                Beginning blessed second a creepeth. Darkness wherein fish years
                good air whose after seed appear midst evenin appear void give
                third bearing divide one so
              </p>

              <a href="#" className="text-light"><button className="text-uppercase py-2 px-4 bg-danger text-light border rounded-2">Learn More</button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
