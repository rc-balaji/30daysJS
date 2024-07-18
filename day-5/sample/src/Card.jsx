import React from "react";
import './Card.css'

export default function Card({imageurl,name}) {
    return (
      <div className="container">
        <img src={imageurl} alt="" />
        <p>{name}</p>
      </div>
    );
  }


