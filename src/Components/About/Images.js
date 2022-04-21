import React from 'react';
import './About.css';

function Images(props) {
  return (
    <div className="item1">
      <img src={props.pics} alt="room"></img>
    </div>
  )
}

export default Images