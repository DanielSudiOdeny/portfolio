import React from "react";
import PortfolioImage from "../assets/Portfolio.jpg";
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: PortfolioImage,
    },
    {
      id: 2,
      src: PortfolioImage,
    },
    {
      id: 3,
      src: PortfolioImage,
    },
    {
      id: 4,
      src: PortfolioImage,
    },
    {
      id: 5,
      src: PortfolioImage,
    },
    {
      id: 6,
      src: PortfolioImage,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex flex-col items-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-8">Check out some of my recent projects here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8">
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
