import React from 'react'
import './Rooms.css';

export default function RoomPics(props) {
  return (
    <div className="border">
      <img src={props.pics} alt="room"></img>
      <div className='bod'>
        <h3>{props.title}</h3>
        <p>{props.amount}</p>
      </div>
    </div>
  );
}