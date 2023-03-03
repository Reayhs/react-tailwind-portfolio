import React from "react";
import logo from "../assets/images/astronout.png";
import logo1 from "../assets/images/astronout1.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

import bg from "../assets/images/bg.jpg";
import Navbar from "./Navbar";
import "../styles.css";

function Header() {
  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url(${bg})` }}
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col "
      >
        <Navbar />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content lg:text-center">
            <div className="btn py-3">
              <button className=" border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl">
                Welcome to my Portfolio
              </button>
            </div>
            <h1 className="text-white text-5xl font-bold">
              Hi! I'm Aamir Saleem Lone
            </h1>
            <p className="text-white py-4 max-w-lg ">
              I have experience working with both front-end and back-end technologies. I have developed web applications using a variety of programming languages, including HTML, CSS, JavaScript, PHP. Additionally, I have experience with popular frameworks such as React, Bootstrap, jQuery, Laravel.


            </p>
            <button className="  text-white text-2xl">
              Let's Connect{" "}


              <AnchorLink href="#contacts"><i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i>{" "}</AnchorLink>

            </button>
          </div>
          {/* <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo1} alt="" />
          </div>
          <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo} alt="" />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Header;
