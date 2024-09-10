import React, { useState } from "react";
import Add from "../assets/add.png";
import "./Body.css";

export const Body = () => {
  const [count, setCount] = useState(5);
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(1080);

  function download() {
    fetch(
      `https://unsample.net/archive?count=${count}&width=${width}&height=${height}`
    );
  }
  //https://unsample.net/archive?count=55&width=1820&height=1280
  return (
    <div className="bodyContainer">
      <h2>Download Settings</h2>
      <p id="bodypara">
        Specify how many images you want and with what width and height
        dimensions, hit the download button, and you'll get a ZIP archive, ready
        to fill your new project with placeholder images!
      </p>

      <div className="big">
        <div className="small-container">
          <h5>Count</h5>
          <input
            value={count}
            onChange={(event) => {
              setCount(event.target.value);
            }}
            type="text"
          />
        </div>

        <div className="small-container">
          <h5>Width</h5>
          <input
            value={width}
            onChange={(event) => {
              setWidth(event.target.value);
            }}
            type="text"
          />
        </div>

        <div className="small-container">
          <h5>Height</h5>
          <input
            value={height}
            onChange={(event) => {
              setHeight(event.target.value);
            }}
            type="text"
          />
        </div>
      </div>

      <img
        id="img"
        // style={{ width: "300px", height: "300px" }}
        src={Add}
        alt="Ads"
      />

      <button id="btn1" onClick={download}>
        DOWNLOAD
      </button>
    </div>
  );
};
