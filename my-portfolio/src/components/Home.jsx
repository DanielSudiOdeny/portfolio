import React from "react";
import HeroImage from "../assets/Hero8.jpg";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse justify-end py-32 items-center md:justify-between h-full px-4 md:gap-16 md:flex-row">
        <div className="flex flex-col justify-center gap-6 md:h-full">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, type: "tween", delay: 2 }}
            className="text-4xl sm:text-7xl text-center md:text-left font-bold text-white max-w-2xl"
          >
            Full-Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 2, type: "tween" }}
            className="text-gray-500 text-center md:text-left py-4 max-w-xl md:max-w-md"
          >
            I have 8 years of experience building and designing software.
            Currently, I love to work on web applications using tecknologies
            like, React, Tailwind, Next js and GraphQL.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", duration: 2, delay: 10 }}
            className="flex justify-center md:justify-start"
          >
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-violet-800 cursor-pointer  hover:scale-110 duration-300 "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-1">
                <LuArrowRight size={25} />
              </span>
            </Link>
          </motion.div>
        </div>
        <div>
          <motion.img
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 2, delay: 2 }}
            src={HeroImage}
            alt="my profile"
            className="md:rounded-2xl rounded-full shadow-md  shadow-gray-800 md:mx-auto w-72 md:w-2/3 md:h-3/4 h-72 mb-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
