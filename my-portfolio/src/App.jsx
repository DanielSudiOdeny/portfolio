import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="snap-y snap-mandatory scroll-smooth h-screen overflow-auto  scrollbar-track-black/70 scrollbar scrollbar-thumb-gray-400/80">
      <Navbar />

      <Home />

      <About />

      <Portfolio />

      <section>
        <Experience />
      </section>

      <section>
        <Contact />
      </section>
      {/* <SocialLinks /> */}
    </div>
  );
};

export default App;
