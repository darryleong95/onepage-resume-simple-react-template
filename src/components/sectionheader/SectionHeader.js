import React from "react";
import Seperator from "../seperator/Seperator";

import "./SectionHeader.css";

const SectionHeader = props => {
  return (
    <div className="section-header">
      <h2 className="section-header-text">{props.title}</h2>
      <Seperator bgcolor={props.bgcolor} color={props.seperatorcolor}/>
    </div>
  );
};

export default SectionHeader;
