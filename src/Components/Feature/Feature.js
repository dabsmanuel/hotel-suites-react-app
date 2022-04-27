import React from "react";
import './Feature.css';

function Feature(props) {
  return (
    <div className="cont">
      <img src={props.cont} alt="room"></img>
      <p>{props.text}</p>
    </div>
  );
}

export default Feature