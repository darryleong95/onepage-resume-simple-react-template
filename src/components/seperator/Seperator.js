import React from "react";
import "./Seperator.css"

const Seperator = props => {
  return (
    <div style={{backgroundColor: props.color}} className="seperator">
      <div style={{backgroundColor: props.bgcolor}} className="seperator-diamond-wrapper">
        <div style={{backgroundColor: props.color}} className="seperator-diamond" />
        <div style={{backgroundColor: props.color}} className="seperator-diamond" />
      </div>
    </div>
  );
}

export default Seperator;
