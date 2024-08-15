import React from "react";
import { PROJECTS } from "./pro";

export default function Projects() {
  return (
    <div className="">
      <div className="flex justify-center gap-5 items-center font-Anton text-white text-7xl mb-16">
        <p>Projects</p>
      </div>
      {PROJECTS.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-center gap-10 p-14 text-white"
        >
          <div className="flex flex-wrap md:flex-col lg:justify-center md:w-[400px] md:h-[200px] overflow-hidden">
            <img className="rounded-xl" src={project.image} alt="" />
          </div>
          <div className="md:w-[400px] flex gap-5 flex-col p-4">
            <p className="text-2xl">{project.title}</p>
            <p className="text-xl">{project.description}</p>
            <div className="flex gap-5 justify-evenly ">
              <a href={project.github} target="_blank" className="w-full ">
                <button className="w-full border-2  border-violet-950 hover:bg-violet-900 hover:border-x-white duration-200 rounded-3xl text-xl">
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
