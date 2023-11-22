import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="max-w-screen-lg flex flex-col p-4 justify-center mx-auto h-full">
        <div className="pb-8 flex flex-col items-center justify-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/05961d0d-96e6-4819-93df-816c3a0546fa"
            className="flex flex-col w-full rounded-md md:w-1/2"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              id=""
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              id=""
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <textarea
              name="message"
              id=""
              rows="10"
              className="my-4 p-2 b bg-transparent border-2 rounded-md text-white focus:outline-none"
              cols="30"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-purple-500 to-violet-800 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
