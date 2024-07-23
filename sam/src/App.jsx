import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);

  const [count, setCount] = useState(0);

  async function getData() {
    var response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/"
    );

    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <p> user id : {item.id} </p>
            <p> Title : {item.title} </p>
          </div>
        );
      })}
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        Get Data
      </button>
    </div>
  );
};

export default App;
