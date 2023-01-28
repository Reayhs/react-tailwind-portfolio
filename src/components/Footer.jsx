import React from 'react'

function Footer() {
  return (
    <>
    <div className="footer bg-[#171717]">
      <div className="wrap flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4 ">
        <h1 className='text-3xl'>Reayhs</h1>
        <div className='flex gap-4 cursor-pointer '>
        <i className="fa-brands fa-twitter border-2 border-white p-2 rounded-[100%]"></i>
        <i className="fa-brands fa-instagram  border-2 border-white p-2 rounded-[100%]"></i>
        <i className="fa-brands fa-github  border-2 border-white p-2 rounded-[100%]"></i>
        </div>
      
      </div>
    </div>
    </>
  )
}

export default Footer