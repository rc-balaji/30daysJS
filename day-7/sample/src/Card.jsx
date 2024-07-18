import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

export default function Card({ imageurl, name, pageurl }) {
  const navigate = useNavigate();

  function click() {
    const url = pageurl;
    navigate(url);
  }

  return (
    <div className="container">
      <img src={imageurl} alt="" />
      <p>{name}</p>
      <button type="button" onClick={click}>
        Click
      </button>
    </div>
  );
}
