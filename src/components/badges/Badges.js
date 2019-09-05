import React from "react";

import SectionHeader from "../sectionheader/SectionHeader";

import badge1 from "../../assets/img/badge1.png";
import badge2 from "../../assets/img/badge2.png";
import badge3 from "../../assets/img/badge3.png";
import "./Badges.css";

function Badges() {
  return (
    <div className="badges">
      <SectionHeader title="CERTIFICATIONS" color="white" />
      <div className="badges-wrapper">
        <div className="badges-blocks">
          <img className="badges-logoimg" src={badge1} />
          <p className="name">AWS Solution Architect Associate</p>
        </div>
        <div className="badges-blocks">
          <img className="badges-logoimg" src={badge2} />
          <p className="name">ICAgile Professional</p>
        </div>
        <div className="badges-blocks">
          <img className="badges-logoimg" src={badge3} />
          <p className="name">Oracle Certified Associate</p>
        </div>
      </div>
    </div>
  );
}

export default Badges;
