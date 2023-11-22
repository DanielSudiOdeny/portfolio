import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full  flex items-center h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8 flex justify-center flex-col items-center md:block ">
          <p className="text-4xl font-bold inline border-b-4">About</p>
          <p className="mt-10 text-center md:text-left text-xl max-w-xl md:max-w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            provident laboriosam illum dicta! Odit facilis dolorum architecto
            velit ducimus obcaecati asperiores nam adipisci voluptatem ab in
            accusamus, dolorem et saepe.
          </p>

          <br />

          <p className="text-xl text-center md:text-left max-w-xl md:max-w-6xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem a
            facere veniam aut repellendus consequuntur odit et, quos, ea omnis
            magni magnam adipisci animi fugiat? Atque ullam illum cum debitis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
