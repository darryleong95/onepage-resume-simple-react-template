import React from "react";

import SectionHeader from "../sectionheader/SectionHeader";

import skills from "../../assets/img/skills.png";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <div className="skills-container">
        <SectionHeader title="TOOLKIT" bgcolor="rgb(251, 202, 200)" seperatorcolor="white" />
        <div className="skills-wrapper">
          <div>
            <img className="skills-img" src={skills} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
