import React from "react";
import { motion, useInView } from "framer-motion";
import mongodb from "/mongoDb.png";
import nodejs from "/nodeJS.png";
import express from "/express.png";
import jwt from "/jwt.png";
import mySQL from "/mySQL.png";
import ejs from "/ejs.png";
import Logo from "./Logo";
import html from "/html.png";
import css from "/css.png";
import canva from "/canva.png";
import git from "/git.png";
import github from "/github.png";
import js from "/js.png";
import postman from "/postman.png";
import redux from "/redux.png";
import tailwind from "/tailwind.png";
import react from "/react.png";

export default function () {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="">
      <div className="flex justify-center gap-5 items-center font-Anton text-white text-7xl mt-10 mb-16">
        Skills
      </div>
      <motion.div
        ref={ref}
        className="flex justify-center gap-5"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.4,
            },
          },
        }}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <div className="mb-16 p-14 flex flex-row border-2 gap-5 justify-center border-[#5e7aa0] rounded-2xl w-[900px] flex-wrap ">
          <Logo icon={nodejs} />
          <Logo icon={ejs} />
          <Logo icon={express} />
          <Logo icon={mongodb} />
          <Logo icon={mySQL} />
          <Logo icon={html} />
          <Logo icon={css} />
          <Logo icon={tailwind} />
          <Logo icon={js} />
          <Logo icon={react} />
          <Logo icon={redux} />
          <Logo icon={git} />
          <Logo icon={postman} />
          <Logo icon={github} />
          <Logo icon={canva} />
        </div>
      </motion.div>
    </div>
  );
}
