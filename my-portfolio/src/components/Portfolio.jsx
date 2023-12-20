import React from "react";
import { TbExternalLink } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import PortfolioImage from "../assets/Portfolio.jpg";
import PortfolioImage2 from "../assets/Project2.png";
import PortfolioImage3 from "../assets/Project3.png";
import PortfolioImage4 from "../assets/bank-of-flatiron.png";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: PortfolioImage,
      title: "Job Seeking Application",
      liveDemo: "https://workwise-dugl.onrender.com/",
      codeLink: "https://github.com/DanielSudiOdeny/Job-Seeking-App",
      description:
        "The JobSeeker app is a dynamic platform designed to empower individuals in their quest for professional growth. Tailored for job seekers, the app streamlines the job search process, offering a user-friendly interface and a range of features to enhance the overall experience.",
    },
    {
      id: 2,
      src: PortfolioImage2,
      title: "Fitness Tracker Application",
      liveDemo: "",
      codeLink: "https://github.com/DanielSudiOdeny/Fitness-Tracker",
      description:
        "The Fitness Tracker App helps user to track they workout progress inorder to keep fit. It majorly provides the user with the necessary tools that allow them to customize their workout routine.",
    },
    {
      id: 3,
      src: PortfolioImage3,
      title: "Event Notifier application",
      liveDemo:
        "https://danielsudiodeny.github.io/event-notifier-application-project/",
      codeLink:
        "https://github.com/DanielSudiOdeny/event-notifier-application-project",
      description:
        "An Event notifier application that allows event planners to connect with their audience by allowing audience to book tickets for the specific event the event planners create online. It takes away the struggle for the audience having to physically purchase the tickets from the event planner.",
    },
    {
      id: 4,
      src: PortfolioImage4,
      title: "Banking Application",
      liveDemo: "https://bank-of-flatiron-application.vercel.app/",
      codeLink:
        "https://github.com/DanielSudiOdeny/bank-of-flatiron-application",
      description:
        "A banking application that allows you to see your recent transactions in an easy-to-read table. You can add new transactions using a form, making it simple to keep your records up to date. Plus, there is a search bar to help you quickly find specific transactions. It's all about making your banking experience straightforward and accountable!",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b snap-center from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "tween" }}
          className="pt-20 pb-4 text-center"
        >
          <p className="md:text-3xl text-3xl  tracking-[20px] font-bold inline text-gray-500">
            Projects
          </p>
          {/* <p className="py-2 tracking-[3px]">
            Check out some of my recent projects here
          </p> */}
        </motion.div>
        <div className="  shadow-md shadow-gray-600 p-4 ">
          <Slider {...settings}>
            {projects.map(
              ({ id, src, description, title, liveDemo, codeLink }) => (
                <div
                  key={id}
                  className=" grid md:w-[500px] shadow-md shadow-gray-600 h-full  md:opacity-80 md:hover:opacity-100 cursor-pointer transition-opacity duration-200"
                >
                  <div className="w-full flex flex-col justify-center items-center ">
                    <div className="w-11/12 mx-auto">
                      <div>
                        <img
                          src={src}
                          alt=""
                          className="rounded-md duration-200 w-full md:w-5/6 mx-auto  h-[180px] md:h-[400px]"
                        />
                      </div>
                    </div>

                    <div className="mx-auto w-5/6  text-center md:w-5/6 flex flex-col gap-4">
                      <h1 className="font-extrabold mt-6 text-gray-50 h-14 md:pb-2 tracking-[2px] text-xl md:text-2xl">
                        {title}
                      </h1>
                      <p className="text-gray-400 h-36 mb-6 md:h-14 text-center">
                        {description}
                      </p>
                      <div className="pt-20  md:py-4  flex items-center justify-around font-bold text-xl md:text-2xl">
                        <button className="   duration-200 hover:scale-105 hover:text-purple-500 flex gap-2 justify-center items-center ">
                          <span>
                            {" "}
                            <a href={codeLink} target="_blank">
                              Code
                            </a>
                          </span>{" "}
                          <span>
                            <TbBrandGithub size={22} />
                          </span>
                        </button>
                        <button className=" duration-200 hover:scale-105 hover:text-purple-500 flex gap-2">
                          <span>
                            {" "}
                            <a href={liveDemo} target="_blank">
                              Live Demo
                            </a>
                          </span>{" "}
                          <span>
                            <TbExternalLink size={22} />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
