import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import { Element } from "react-scroll";

const App = () => {
  return (
    <div className="snap-y snap-mandatory h-screen  scrollbar-track-black/70 scrollbar scrollbar-thumb-gray-400/80">
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default App;
