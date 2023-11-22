import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          LinkedIn <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/DanielSudiOdeny.com",
    },
    {
      id: 3,
      child: (
        <>
          LinkedIn <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-tr-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "ml-[-100px] hover:rounded-md flex justify-between items-center h-14 w-40 px-4 bg-gray-600 duration-300 hover:ml-[-10px]" +
              " " +
              style
            }
          >
            <a
              className="flex justify-between items-center w-full text-white"
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
