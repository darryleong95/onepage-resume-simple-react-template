import React from "react";

import InfoBlock from "../infoblock/InfoBlock";
import SectionHeader from "../sectionheader/SectionHeader";

import { workexperience } from "../../constants";
import "./WorkExperience.css";

function WorkExperience() {
  return (
    <div className="work-experience-container">
      <SectionHeader title="EXPERIENCE"/>
      {workexperience.map((val, index) => {
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

export default WorkExperience;
