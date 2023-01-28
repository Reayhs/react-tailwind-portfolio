import React from 'react'

function ProjectCard({item}) {
  return (
    <>
      <div className="img-box flex justify-center relative overflow-hidden">
              <img src={item.img} alt="" />
              <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-20">
                <h1 className="font-bold text-3xl">{item.title}</h1>
                <p className="font-bold">{item.description}</p>
              </div>
            </div>
    </>
  )
}

export default ProjectCard