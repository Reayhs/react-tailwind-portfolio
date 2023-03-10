import React, { useState } from "react";
import img1 from "../assets/images/project-img1.png";
import img2 from "../assets/images/project-img2.png";
import img3 from "../assets/images/project-img3.png";
// import img5 from "../assets/images/project-img5.jpg";
import About from "./About";

// import { EducationCard } from "EducationCard";

import "../styles.css";
import ProjectCard from "./ProjectCard";
import EduCard from "./EduCard"


function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Informed.pro",
      description: "Backnend",
      img: img1,
    },
    {
      id: 2,
      title: "OneSource Backend",
      description: "Design & Development",
      img: img2,
    },
    {
      id: 3,
      title: "iCare",
      description: "Design & Development",
      img: img3,
    },
  ];
  const eductions = [
    {
      id: 1,
      title: "Bachelors in Computer Application",
      description: "Rimt University 2022",

    },
    {
      id: 2,
      title: "Higher Secondary School",
      description: "Government Higher Secondary School Handwara 2018",

    },
    {
      id: 3,
      title: "Matriculation",
      description: "Government High School Sanzipora 2016",

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
        <div className="grid grid-cols-3 p-10 gap-8 lg:grid-cols-2 tl:grid-cols-1 ">
          {durum === 2
            ? eductions.map((item, i) => <EduCard key={i} item={item} />)
            : null}
        </div>
        {durum === 3 ? (
          <div
            id="text1"
            className="tab-pane  text-center text-white py-5   lg:p-5">
           <About/>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
