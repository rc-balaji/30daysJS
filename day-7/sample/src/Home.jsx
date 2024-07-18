// eslint-disable-next-line no-unused-vars
import React from "react";
import img1 from "./images/image-1.jpg";
import img2 from "./images/image-2.jpg";
import img3 from "./images/image-3.jpg";
import img4 from "./images/image-4.jpg";
import img5 from "./images/image-5.jpg";
import "./App.css";
import Card from "./Card";

var data = [
  {
    imageurl: img1,

    name: "Sami - 1",
    pageurl: "/page1",
  },
  {
    imageurl: img2,
    name: "Sami - 2",
    pageurl: "/page2",
  },
  {
    imageurl: img3,
    name: "Sami - 3",
    pageurl: "/page3",
  },
  {
    imageurl: img4,
    name: "Sami - 4",
    pageurl: "/page4",
  },
  {
    imageurl: img5,
    name: "Sami - 5",
    pageurl: "/page5",
  },
];

function Home() {
  return (
    <>
      <div>
        {data.map((value, index) => {
          return (
            <Card
              key={index}
              imageurl={value.imageurl}
              name={value.name}
              pageurl={value.pageurl}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
