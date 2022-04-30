import React from 'react';
import './Gallery.css';

function GalleryPix(props) {
  return (
    <div className="yule">
      <img src={props.rooms} alt="room"></img>
    </div>
  );
}

export default GalleryPix