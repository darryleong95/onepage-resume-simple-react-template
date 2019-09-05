import React from "react";

import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

import "./Banner.css"

function Banner() {
  return (
    <div className="header-wrapper">
      <h4 className="header-text-first">Hey, I'm</h4>
      <h4 className="header-text-second">Anne Marie</h4>
      <div className="sm-wrapper">
        <a
          className="sm-link"
          href=""
        >
          <FaGithub size="3em" className="sm-icon" />
        </a>
        <a
          className="sm-link"
          href=""
        >
          <FaInstagram size="3em" className="sm-icon" />
        </a>
        <a
          className="sm-link"
          href=""
        >
          <FaFacebook size="3em" className="sm-icon" />
        </a>
      </div>
    </div>
  );
}

export default Banner;
