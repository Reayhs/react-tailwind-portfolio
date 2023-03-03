import React from "react";

function Footer() {
  return (
    <>
      <div className="footer bg-[#171717]">
        <div className="wrap flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4 ">
          <h1 className="text-3xl">Hackmack</h1>
          <div className="icon text-lg flex gap-4  lg:gap-8 lg:my-10">
            <a href="https://twitter.com/CRew4772" target="_blank">
              <i className="fa-brands fa-twitter border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>

            <a href="https://www.instagram.com/aamir_saleem_lone/" target="_blank">
              <i className="fa-brands fa-instagram border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a
              href="https://github.com/hackmack4772"
              target="_blank"
            >
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
