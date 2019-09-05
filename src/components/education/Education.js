import React, { useState } from "react";

import InfoBlock from "../infoblock/InfoBlock";
import SectionHeader from "../sectionheader/SectionHeader";

import { education } from "../../constants";
import "./Education.css";

function Education() {
  return (
    <div className="education-container">
      <SectionHeader title="EDUCATION" bgcolor="rgb(251, 202, 200)" seperatorcolor="white"/>
      {education.map((val) => {
        return (
          <InfoBlock
            img={val.img}
            header1={val.header1}
            header2={val.header2}
            header3={val.header3}
            writeup={val.writeup}
          />
        );
      })}
    </div>
  );
}

export default Education;
