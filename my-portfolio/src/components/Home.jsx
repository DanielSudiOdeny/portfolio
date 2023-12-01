import React from "react";
import HeroImage from "../assets/Hero9.jpg";
import { LuArrowRight } from "react-icons/lu";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";

const Home = () => {
  return (
    <div
      name="home"
      className="  h-screen snap-center w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse justify-center  sm:gap-10 items-center md:justify-around h-full px-4  md:flex-row">
        <div className="flex flex-col justify-center sm:gap-4 md:h-full">
          <p className="  text-xl md:text-left text-center py-2">Hello,</p>
          <h1 className="text-3xl md:text-left text-center sm:text-5xl font-bold">
            I'm <span className="text-purple-500">Daniel Odeny</span>
          </h1>
          <motion.h2
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 2, type: "tween", delay: 2 }}
            className="text-4xl sm:text-6xl text-center md:text-left font-bold text-white max-w-2xl"
          >
            Full-Stack Developer
          </motion.h2>
          <motion.p
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ delay: 4, duration: 2, type: "tween" }}
            className="text-purple-50 text-lg text-center md:text-left py-4 max-w-xl md:max-w-md"
          >
            I specialize in building scalable and responsive web applications.
          </motion.p>
          <div className="py-6 flex justify-center md:justify-start items-center gap-4">
            <span className="hover:text-purple-500 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/daniel-odeny-ab622b171/"
                target="_blank"
              >
                <TbBrandLinkedin size={30} />
              </a>
            </span>
            <span className="hover:text-purple-500 cursor-pointer">
              <a href="https://github.com/DanielSudiOdeny" target="_blank">
                {" "}
                <TbBrandGithub size={30} />
              </a>
            </span>
          </div>
          {/* <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ type: "tween", duration: 2, delay: 10 }}
            className="flex justify-center md:justify-start"
          >
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group w-fit font-bold px-6 py-2 my-2 flex items-center rounded-full bg-gradient-to-r from-purple-500 to-violet-800 cursor-pointer  hover:scale-110 duration-300 "
            >
              Projects
              <span className="group-hover:rotate-90 duration-300 ml-1">
                <LuArrowRight size={22} />
              </span>
            </Link>
          </motion.div> */}
        </div>
        <div>
          <motion.img
            // initial={{ opacity: 0, scale: 0.6 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ type: "tween", duration: 2, delay: 2 }}
            src={HeroImage}
            alt="my profile"
            className="profile-image opacity-80 hover:opacity-100 transition-opacity duration-300 border-4 border-gray-400 md:rounded-3xl rounded-full shadow-md  shadow-gray-800 md:mx-auto w-[14rem] sm:[20rem] md:w-[280px] flex-1 md:h-[310px] h-[14rem] mb-8 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
