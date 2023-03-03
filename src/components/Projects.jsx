import React, { useState } from "react";
import img1 from "../assets/images/project-img1.png";
import img2 from "../assets/images/project-img2.png";
import img3 from "../assets/images/project-img3.png";

import "../styles.css";
import ProjectCard from "./ProjectCard";
import EducationCard from "./EducationCard";


function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Business Startup",
      description: "Design & Development",
      img: img1,
    },
    {
      id: 2,
      title: "Business Startup",
      description: "Design & Development",
      img: img2,
    },
    {
      id: 3,
      title: "Business Startup",
      description: "Design & Development",
      img: img3,
    },
  ];
  const eductions = [
    {
      id: 1,
      title: "Bachelor's of  Computer Application",
      description: "Design & Development",
      img: img1,
    },
    {
      id: 2,
      title: "Higher Secondary School ",
      description: "Design & Development",
      img: img2,
    },
    {
      id: 3,
      title: "Matriculation ",
      description: "Design & Development",
      img: img3,
    },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Education & Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          Here's a summary of my academic background and some of the projects I've worked on:
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
              }`}
          >
            Project
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
              }  `}
          >
            Education
          </button>
          <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px]  ${durum === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
              }`}
          >
            About Me
          </button>
        </div>
        <div className="grid grid-cols-3 p-10 gap-8 lg:grid-cols-2 tl:grid-cols-1 ">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
        {durum === 2 ? (
          <div className="grid grid-cols-3 p-10 gap-8 lg:grid-cols-2 tl:grid-cols-1 ">
            {durum === 1
              ? educations.map((item, i) => <EducationCard key={i} item={item} />)
              : null}
          </div>

        ) : null}
        {durum === 3 ? (
          <div
            id="text1"
            className="tab-pane  text-center text-white py-5   lg:p-5"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nisi.
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
