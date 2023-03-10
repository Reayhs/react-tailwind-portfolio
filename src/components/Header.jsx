import React from 'react'
import bg from "../assets/images/bg.jpeg"
import Navbar from './Navbar'
import "../styles.css"
import AnchorLink from "react-anchor-link-smooth-scroll";


function Header() {
  return (
    <>
      <div id='home' style={{ backgroundImage: `url(${bg})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover" }} className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col '>
        <Navbar />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 pt-20 lg:justify-center lg:px-6">
          <div className="content lg:text-center">
            <div className="btn py-3">
              <button className=' border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl'>Welcome to my Portfolio</button>
            </div>
            <h1 className='text-white text-5xl font-bold'>Hi! <br />I'm Aamir Saleem Lone</h1>
            <p className='text-violet-900	 py-4 max-w-lg ' style={{
              lineHeight: "40px",
              textShadow: "1px 1px black",
              fontWeight:"800",
              fontSize: "15px"
            }}>I have experience working with both front-end and back-end technologies. I have developed web applications using a variety of programming languages, including HTML, CSS, JavaScript, PHP. Additionally, I have experience with popular frameworks such as React, Bootstrap, Cakephp, Laravel.</p>
            <AnchorLink href="#contact" className='  text-white text-2xl'>Let's Connect <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i> </AnchorLink>
          </div>


        </div>
      </div>
    </>
  )
}

export default Header