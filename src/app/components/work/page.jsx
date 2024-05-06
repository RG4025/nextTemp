import React from "react";

function Work() {
  return (
    <>
      <div className="py-3 mt-3">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div>
            <h4 className="text-center">
              Check <p className="text-danger d-inline-block">Recent</p> Work
            </h4>
            <small>She'd earth that midst void creeping him above seas.</small>
          </div>
        </div>

        <div className="">
          <div className=" container align-left PY-3 mt-4">
            <ul className="nav">
              <li className="nav-item fs-6 mx-3 PX-2">
                {" "}
                <a href="#" className="text-decoration-none text-dark"> All</a>
              </li>
              <li className="nav-item fs-6 mx-3 PX-2">
                {" "}
                <a href="#" className="text-decoration-none text-dark"> WEDDING</a>
              </li>
              <li className="nav-item fs-6 mx-3 PX-2">
                {" "}
                <a href="#" className="text-decoration-none text-dark"> MOTION</a>
              </li>
              <li className="nav-item fs-6 mx-3 PX-2">
                {" "}
                <a href="#" className="text-decoration-none text-dark"> PORTRAIT</a>
              </li>
              <li className="nav-item fs-6 mx-3 PX-2">
                {" "}
                <a href="#" className="text-decoration-none text-dark"> FASHION</a>
              </li>
            </ul>
          </div>

          <div className="container my-3">
            <div className="row">
              <div className="col-12 col-lg-5">
                {/* <div className="workImage">
                  <img
                    src="https://preview.colorlib.com/theme/pentax/img/project/1.jpg.webp"
                    className="img-fluid object-fit-cover"
                    alt=""
                  />
                  <div className="workText">
                    <p>Fashion</p>
                    <small>Lorem ipsum dolor sit amet.</small>
                  </div>
                </div> */}
                <div className="workImage">
                  <img
                    src="https://preview.colorlib.com/theme/pentax/img/project/4.jpg.webp"
                    className="img-fluid object-fit-cover"
                    alt=""
                  />
                  <div className="workText">
                    <p>Fashion</p>
                    <small>Lorem ipsum dolor sit amet.</small>
                  </div>
                </div>
                <div className="workImage">
                  <img
                    src="https://preview.colorlib.com/theme/pentax/img/project/5.jpg.webp"
                    className="img-fluid object-fit-cover"
                    alt=""
                  />
                  <div className="workText">
                    <p>Fashion</p>
                    <small>Lorem ipsum dolor sit amet.</small>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="workImage">
                  <img
                    src="https://preview.colorlib.com/theme/pentax/img/project/2.jpg.webp"
                    className="img-fluid object-fit-cover"
                    alt=""
                  />
                  <div className="workText">
                    <p>Fashion</p>
                    <small>Lorem ipsum dolor sit amet.</small>
                  </div>
                </div>
                <div className="workImage">
                  <img
                    src="https://preview.colorlib.com/theme/pentax/img/project/6.jpg.webp"
                    className="img-fluid object-fit-cover"
                    alt=""
                  />
                  <div className="workText">
                    <p>Fashion</p>
                    <small>Lorem ipsum dolor sit amet.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
