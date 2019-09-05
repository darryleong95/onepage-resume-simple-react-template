import React from "react";

import InfoBlock from "../infoblock/InfoBlock";
import SectionHeader from "../sectionheader/SectionHeader";

import { involvements } from "../../constants";
import "./Involvements.css";

function Involvements() {
  return (
    <div className="involvement-container">
      <SectionHeader title="INVOLVEMENTS"/>
      {involvements.map((val, index) => {
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

export default Involvements;
