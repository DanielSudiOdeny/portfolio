import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-8 py-12 bg-black text-white fixed z-10">
      <div>
        <motion.h1
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "tween" }}
          className="text-3xl md:text-5xl font-signature ml-2 "
        >
          Daniel.dev
        </motion.h1>
      </div>

      <motion.ul
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "tween" }}
        className="md:flex hidden"
      >
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer  border-cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} spy={true} smooth={true} duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </motion.ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <motion.ul
          initial={{ opacity: 0, x: -200 }} // Adjusted the initial properties here
          animate={{ x: 0, opacity: 1 }} // Added opacity animation for a smoother transition
          transition={{ duration: 0.3, type: "tween" }}
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth={true}
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default Navbar;
