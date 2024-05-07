import React, { Link } from "react";
// import * as icon from "bootstrap-icons";

import about from "../../about/page";

function Header() {
  const navItems = [
    {
      title: "Home",
      to: "#",
    },
    {
      title: "About",
      to: "/about",
    },
    {
      title: "Services",
      to: "/services",
    },
    {
      title: "Projects",
      to: "#",
    },
    {
      title: "Blog",
      to: "#",
    },
    {
      title: "Contact",
      to: "#",
    },
  ];

  return (
    <div className="container bg-transparent">
      <div className="d-flex justify-content-between align-items-center  py-3">
        <div className=" d-inline ">
          <img
            src="https://preview.colorlib.com/theme/pentax/img/logo.png.webp"
            alt="Logo Main"
            className=" object-fit-cover"
          />
        </div>

        <div className="">
          <div className=" d-none d-lg-block ">
            <ul className="nav">
              {navItems.map((item, index) => {
                return (
                  <li
                    className=" nav-item text-1xl fw-bold navLinks "
                    key={index}
                  >
                    <a href={item.to} className="nav-link ">
                      {item.title}
                    </a>{" "}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="d-flex justify-content-between align-items-center ">
            <div className="d-block d-lg-none">
              <i className="bi bi-justify text-xl"></i>
            </div>

            {/* <div className="d-block">
              <i className="bi bi-search text-xl"></i>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
