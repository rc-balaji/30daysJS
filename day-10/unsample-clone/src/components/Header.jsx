import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header" style={{ border: "1px solid black" }}>
      <h3 className="head">Unsample</h3>

      <p id="para">Download zipped free to use sample images instantly!</p>

      <p style={{ color: "rgb(168 162 158)" }}>
        Powered by{" "}
        <a id="link" href="https://picsum.photos/">
          Lorem Picsum!
        </a>
      </p>
    </div>
  );
};
