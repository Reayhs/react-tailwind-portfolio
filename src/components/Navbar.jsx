import React, { useState } from 'react'
import "../styles.css"

function Navbar() {
   
    const [durum,setDurum] = useState(true)
    console.log(durum)

    
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          document.querySelector(".navbarcon").style.backgroundColor = "#000";
      } 
      else {
        document.querySelector(".navbarcon").style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.querySelector(".tl").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  }



  return (
    <>
    <div className="navbarcon flex justify-between items-center px-20 py-6 bg-transparent z-40 text-white lg:bg-black lg:px-6 fixed w-full">
    <h1 className='text-4xl  font-bold '>Reayhs</h1>
    
     <nav className={` flex justify-center items-center gap-x-10 ${durum && "lg:hidden"} lg:fixed lg:top-0 -z-20  lg:flex-col lg:bg-black lg:w-full lg:h-[450px] lg:left-0 h-full lg:items-start  lg:pl-6  cursor-pointer lg:pt-20`}  >
        <ul className=' flex gap-10 text-3xl mr-4 lg:flex-col lg:gap-6 '>
            <li className='bla'><a href="#home"></a>Home</li>
            <li className='bla'><a href="#skills"></a>Skills</li>
            <li className='bla'><a href="#projects"></a>Projects</li>
        </ul>
        <div className="icon text-lg flex gap-4  lg:gap-8 lg:my-10">
        <i className="fa-brands fa-twitter border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
        <i className="fa-brands fa-instagram  border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
        <i className="fa-brands fa-github  border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
        </div>
        <div className="btn">
            <button className='border-[1px] border-white border-solid py-2 px-4 hover:bg-white hover:text-black font-bold'>Let's Connect</button>
        </div>
     </nav>
     <i onClick={e => setDurum(!durum)} className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer" ></i>
    </div>
     
    </>
  )
}

export default Navbar