// eslint-disable-next-line no-unused-vars
import React from "react";
import img1 from "./images/image-1.jpg";
import img2 from "./images/image-2.jpg";
import img3 from "./images/image-3.jpg";
import img4 from "./images/image-4.jpg";
import img5 from "./images/image-5.jpg";
import "./App.css";

var data = [
  {
    imageurl: img1,
    
    name: "Sami - 1",
    url: "https://day-2222.netlify.app/",
  },
  {
    imageurl: img2,
    name: "Sami - 2",
    url: "Page3.html",
  },
  {
    imageurl: img3,
    name: "Sami - 4",
    url: "Page4.html",
  },
  {
    imageurl: img4,
    name: "Sami - 5",
    url: "Page5.html",
  },
  {
    imageurl: img5,
    name: "Sami - 5",
    url: "Page5.html",
  },
];

function Card({imageurl,name}) {
  return (
    <div className="container">
      <img src={imageurl} alt="" />
      <p>{name}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <div>
        {data.map((value, index) => {
          return <Card key={index} imageurl={value.imageurl} name={value.name} />;
        })}
      </div>
    </>
  );
}

export default App;
