import React from "react";

function PricePlan() {
  const planData = [
    {
      title: "Weeding",
      text: "Attend only first day",
      price: "76.00",
    },
    {
      title: "Studio",
      text: "Attend only first day",
      price: "86.00",
    },
    {
      title: "Fashion",
      text: "Attend only first day",
      price: "96.00",
    },
  ];

  return (
    <>
      <div className="py-2 py-lg-5">
        <div className="bg-[#F7F7F7] py-5">
          <div className="py-2 py-md-5 d-flex justify-content-center align-items-center">
            <div className="">
              <h3 className="text-center">
                Perfect <p className="text-danger d-inline-block">Price</p> Plan
              </h3>
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Magnam, at.
              </small>
            </div>
          </div>
          <div className="container">
            <div className=" row row-cols-1 row-cols-lg-3">
              {planData.map((data, index) => {
                return (
                  <div className="container" key={index}>
                    <div className="bg-[#fff] p-4 ">
                      <div className="p-3 my-3 container d-flex flex-column gap-2 justify-content-center align-items-center bg-[#F7F7F7]">
                        <strong>{data.title}</strong>
                        <p>{data.text}</p>
                        <h1>${data.price}</h1>
                      </div>
                      <div className="p-3 container d-flex flex-column gap-2 justify-content-center align-items-center bg-[#F7F7F7]">
                        <ul>
                            <li><i className="bi bi-check2"></i> Unlimited Entrance</li>
                            <li><i className="bi bi-check2"></i> Comfirtable Seat</li>
                            <li><i className="bi bi-check2"></i> Paid Certificate</li>
                            <li><i className="bi bi-x"></i> Day One Workshop</li>
                            <li><i className="bi bi-x"></i> One Certificate</li>
                        </ul>

                        <a href="#" className=" text-light"><button className="text-uppercare fs-6 border rounded-2 bg-black hover:bg-[#fff] px-3 py-1">Book Now</button></a>
                      </div>


                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricePlan;
