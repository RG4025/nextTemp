import React from "react";

function Offer() {
  const offerData = [
    {
      icon: "bi bi-brilliance",
      text: "Nature Photography",
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto dolorum animi rerum laudantium odit aspernatur quo, eum",
    },
    {
      icon: "bi bi-telegram",
      text: "Property Tours",
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto dolorum animi rerum laudantium odit aspernatur quo, eum",
    },
    {
      icon: "bi bi-camera-reels",
      text: "Event Coverage",
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto dolorum animi rerum laudantium odit aspernatur quo, eum",
    },
    {
      icon: "bi bi-balloon",
      text: "Wedding Photoshoot",
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto dolorum animi rerum laudantium odit aspernatur quo, eum",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div className="">
            <h3 className="text-center">
              What <p className="text-danger d-inline-block">We</p> Offer
            </h3>
            <small>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
              at.
            </small>
          </div>
        </div>

        <div className="row row-cols1 row-cols-sm-2 row-cols-xl-4 my-5">
          {offerData.map((data, index) => {
            return (
              <div className="container my-3" key={index}>
                <div className="p-4 border rounded-2 bg-[#F7F7F7] hover:bg-[#fff] d-flex justify-content-center align-items-center flex-column gap-2">
                  <h1>
                    <i className={data.icon}></i>
                  </h1>
                  <h5 className="text-center">{data.text}</h5>
                  <p>{data.data}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Offer;
