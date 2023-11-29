import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import tailwindcss from "../assets/tailwind.png";
import flask from "../assets/flask.svg";
import typescript from "../assets/typescript.png";
import postgress from "../assets/postgress.png";
const Experience = () => {
  const techstack = [
    {
      id: 1,
      src: html,
      // title: "HTML",
      style: "shadow-orange-500",
      textColor: "hover:text-orange-500",
    },
    {
      id: 2,
      src: css,
      // title: "CSS",
      style: "shadow-sky-600",
      textColor: "hover:text-sky-600",
    },
    {
      id: 3,
      src: javascript,
      // title: "Javascript",
      style: "shadow-yellow-500",
      textColor: "hover:text-yellow-500",
    },
    {
      id: 4,
      src: python,
      // title: "Python",
      style: "shadow-yellow-600",
      textColor: "hover:text-yellow-600",
    },
    {
      id: 5,
      src: react,
      // title: "React",
      style: "shadow-blue-700",
      textColor: "hover:text-blue-700",
    },

    {
      id: 6,
      src: tailwindcss,
      // title: "Tailwindcss",
      style: "shadow-blue-400",
      textColor: "hover:text-blue-400",
    },
    {
      id: 7,
      src: flask,
      // title: "Flask",
      style: "shadow-white",
      textColor: "hover:text-white",
    },
    {
      id: 8,
      src: typescript,
      // title: "Flask",
      style: "shadow-blue-900",
      textColor: "hover:text-white",
    },
    {
      id: 9,
      src: postgress,
      // title: "Flask",
      style: "shadow-cyan-500",
      textColor: "hover:text-white",
    },
  ];
  return (
    <div
      name="experience"
      className=" px-10 snap-center bg-gradient-to-b flex from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold tracking-[20px] text-gray-500 inline">
            Skills
          </p>
          {/* <p className="py-4 tracking-[3px]">
            These are the technologies I've worked with
          </p> */}
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center place-items-center py-8 px-12 sm:px-0">
          {techstack.map(({ id, src, title, style, textColor }) => (
            <div
              key={id}
              className={`shadow-md flex flex-col justify-center items-center rounded-full w-20 hover:scale-105 hover:bg-grey-100 duration-500 py-2 h-20 ${style} ${textColor}`}
            >
              <img src={src} alt="" className="w-10 mx-auto object-cover" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
