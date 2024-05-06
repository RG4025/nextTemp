import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-dark text-light p-5 mt-2 mt-md-5">
        <div className="row row-col">
          <div className="col-12 col-md-6 col-lg-5">
            <div className="d-flex flex-column gap-3">
              <h4 className="text-light">About Us</h4>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos provident dolore quo eaque quis qui vel voluptates
                eos.
              </p>
              <p className="text-secondary">Copyright 2024</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="d-flex flex-column gap-3">
              <h4 className="text-light">Newsletter</h4>

              <p className="text-secondary">
                Stay updates with out latest trends
              </p>
              <div className="d-flex justify-content-start align-items-center">
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="border border-1 border-light w-75 p-2 bg-transparent"
                />
                <button className="bg-danger p-2  border border-2 border-danger">
                  <i class="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-2">
            <div className="d-flex flex-column gap-3">
              <h4 className="text-light">About Us</h4>
              <p className="text-secondary">Let us be social</p>
              <p>
                <span className="mx-1 px-1">
                  <i class="bi bi-facebook"></i>
                </span>
                <span className="mx-1 px-1">
                  <i class="bi bi-whatsapp"></i>
                </span>
                <span className="mx-1 px-1">
                  <i class="bi bi-twitter-x"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
