import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../assets/hero10.png";
const About = () => {
  return (
    <div
      name="about"
      className="snap-center flex h-screen  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" md:max-w-screen-lg md:w-3/4 bg-gradient-to-b from-gray-800 to-black flex flex-col h-screen text-center md:flex  md:justify-center md:gap-20 md:items-center justify-center mx-auto">
        <div className=" px-14 md:w-full md:flex md:justify-around md:gap-4 md:items-center">
          <div className="flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity duration-300">
            <motion.img
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={AboutImage}
              className=" profile-img2 border-4 border-gray-400 opacity md:w-[280px] md:h-[310px] w-[14rem] h-[14rem] self-center object-cover md:rounded-3xl rounded-full mb-10 sm:mb-20 md:mb-0"
              alt=""
            />
          </div>

          <div className="md:space-y-8 space-y-10 px-0">
            <h4 className="text-3xl sm:text-4xl font-semibold">
              Here is a{" "}
              <span className="border-b-4 border-purple-500 ">little</span>{" "}
              background
            </h4>
            <p className="text-md md:max-w-xl text-gray-400">
              Hey, I'm Daniel Odeny, a tech enthusiast based in Nairobi, Kenya.
              I'm a software engineer who turns ideas into code, enjoying the
              creativity in every line. For me, tech is not just a job; it's a
              continuous journey of learning and building. Let's explore this
              exciting world together, whether it's collaborating on projects,
              keeping up with trends, or just sharing the love for tech. Ready
              to build awesome stuff? 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
