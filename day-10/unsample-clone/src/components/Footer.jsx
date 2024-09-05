import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <p id="para1">
        This service is not affiliated with or maintained by{" "}
        <a className="link" href="https://unsplash.com/">
          Unsplash
        </a>
        .
      </p>

      <p id="para2">
        Created by{" "}
        <a className="link" href="https://dodov.dev/">
          Hristiyan Dodov
        </a>
      </p>
    </div>
  );
};

export default Footer;
