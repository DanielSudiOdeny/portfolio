import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import tailwindcss from "../assets/tailwind.png";

const Experience = () => {
  const techstack = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-sky-600",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: python,
      title: "Python",
      style: "shadow-yellow-600",
    },
    {
      id: 5,
      src: react,
      title: "React",
      style: "shadow-blue-700",
    },

    {
      id: 6,
      src: tailwindcss,
      title: "Tailwindcss",
      style: "shadow-blue-400",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b flex from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techstack.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
