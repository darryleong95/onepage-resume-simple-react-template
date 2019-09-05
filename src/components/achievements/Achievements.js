import React from "react";

import ach1 from "../../assets/img/ach1.jpg";
import ach2 from "../../assets/img/ach2.jpg";
import ach3 from "../../assets/img/ach3.png";

import SectionHeader from "../sectionheader/SectionHeader";

import "./Achievements.css";

function Achievements() {
  return (
    <div className="achievements-container">
      <SectionHeader title="HACKS & SUCH" bgcolor="rgb(251, 202, 200)" seperatorcolor="white"/>
      <div className="ach-wrapper">
        <div className="ach-block">
          <div className="ach-logo-wrapper">
            <img className="ach-img" src={ach1} />
          </div>
          <div className="ach-info-wrapper">
            <p className="ach-title">Captora Hackathon 2015</p>
            <p className="ach-info">Lorem ipsum dolor sit amet</p>
            <p className="ach-write-up">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              scelerisque purus ut arcu tristique, eu pharetra ligula tristique.
              Morbi nec condimentum velit, a sollicitudin libero. Ut felis
              neque, suscipit id elit at, vestibulum finibus ipsum.
            </p>
          </div>
        </div>
        <div className="ach-block">
          <div className="ach-logo-wrapper">
            <img className="ach-img" src={ach2} />
          </div>
          <div className="ach-info-wrapper">
            <p className="ach-title">Cebu Open Hackathon 2016</p>
            <p className="ach-info">Lorem ipsum dolor sit amet</p>
            <p className="ach-write-up">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              scelerisque purus ut arcu tristique, eu pharetra ligula tristique.
              Morbi nec condimentum velit, a sollicitudin libero. Ut felis
              neque, suscipit id elit at, vestibulum finibus ipsum.
            </p>
          </div>
        </div>
        <div className="ach-block">
          <div className="ach-logo-wrapper">
            <img className="ach-img" src={ach3} />
          </div>
          <div className="ach-info-wrapper">
            <p className="ach-title">JU Hackathon 2018</p>
            <p className="ach-info">Lorem ipsum dolor sit amet</p>
            <p className="ach-write-up">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              scelerisque purus ut arcu tristique, eu pharetra ligula tristique.
              Morbi nec condimentum velit, a sollicitudin libero. Ut felis
              neque, suscipit id elit at, vestibulum finibus ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
