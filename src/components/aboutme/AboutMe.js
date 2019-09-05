import React from "react";

import SectionHeader from "../sectionheader/SectionHeader";


import profile from "../../assets/img/profile.jpg";
import profilemobile from "../../assets/img/profilemobile.jpg";

import cv from "../../assets/dummycv.pdf";
import "./AboutMe.css";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false //This is where I am having problems
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 768 });
  }

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <div className="aboutme">
        <SectionHeader title="ABOUT ME" color="white" />
        <div className="aboutme-container">
          <div className="img-wrapper">
            <div className="profile-img-wrapper">
              <img
                className="profile-img"
                src={isDesktop ? profile : profilemobile}
              />
            </div>
            <div className="bio-info-wrapper">
              <p className="bio-info">
                <b>Name</b>: Anee Marie
              </p>
              <p className="bio-info">
                <b>Major</b>: Computer Science
              </p>
              <p className="bio-info">
                <b>School</b>: University of Illinois
              </p>
              <p className="bio-info">
                <b>Loves</b>: Travel, Music, Games
              </p>
            </div>
          </div>
          <div className="aboutme-wrapper">
            <div className="aboutme-header">
              <h2 className="aboutme-header-text">
                <span>HEY EVERYONE</span>
              </h2>
            </div>
            <div className="section-body-wrapper">
              <div className="section-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  scelerisque purus ut arcu tristique, eu pharetra ligula
                  tristique. Morbi nec condimentum velit, a sollicitudin libero.
                  Ut felis neque, suscipit id elit at, vestibulum finibus ipsum.
                  Nullam ex dui, molestie eget nisl non, tempus pulvinar nisl.
                </p>
                <p>
                  Morbi eget volutpat tellus. Nunc mattis molestie orci, eu
                  vehicula nulla finibus ac. Nullam vel fringilla ex, non
                  suscipit ex. Aenean vestibulum lorem diam, nec vehicula metus
                  eleifend vel. Donec porttitor lacus est, ut tristique diam
                  efficitur at. Ut sit amet mollis ante, a efficitur ligula.
                  Maecenas dignissim eros quis eros feugiat, eu dignissim tortor
                  maximus. Vestibulum bibendum suscipit dignissim. Nulla
                  venenatis eros sed urna congue, non fringilla orci tempus.
                </p>
              </div>
            </div>
            <div className="cv-wrapper">
              <div className="cv-button-wrapper">
                <a href={cv} download="dummycv" className="cv-link">
                  DOWNLOAD MY CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
