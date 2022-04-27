import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './Rooms.css';

export default function RoomPics(props) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="border">
      <div className="image">
        <img src={props.pics} alt="room"></img>
      </div>
      <div className="bod">
        <h3>{props.title}</h3>
        <p>{props.amount}</p>
      </div>
    </div>
  );
}
