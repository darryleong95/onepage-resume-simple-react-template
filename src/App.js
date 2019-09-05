import React from "react";

import Banner from "./components/banner/Banner"
import AboutMe from "./components/aboutme/AboutMe";
import Education from "./components/education/Education";
import WorkExperience from "./components/workexperience/WorkExperience";
import Skills from "./components/skills/Skills";
import Involvements from "./components/involvements/Involvements";
import Achievements from "./components/achievements/Achievements";
import Badges from "./components/badges/Badges";
import Footer from "./components/footer/Footer";

// import Interest from "./components/interests/Interest";

import "./App.css";

function App() {
  return (
    <div className="body">
      <div className="header">
        <Banner />
      </div>
      <div className="body">
        <AboutMe />
        <Education />
        <WorkExperience />
        <Skills />
        <Involvements />
        <Achievements />
        <Badges />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
