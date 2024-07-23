import React, { useState } from "react";

export const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [res, setRes] = useState(0);

  function add() {
    var res = parseInt(num1) + parseInt(num2);

    setRes(res);

    setNum1("");
    setNum2("");
  }

  


  return (
    <div>
      <input
        id="inp1"
        type="number"
        placeholder="Enter number 1"
        onChange={(e) => {
          setNum1(e.target.value);
        }}
        value={num1}
      />
      <input
        id="inp2"
        type="number"
        placeholder="Enter number 2"
        onChange={(event) => {
          setNum2(event.target.value);
        }}
        value={num2}
      />
      <p>Hello world</p>
      <p>Total : {res}</p>

      <button onClick={add}>Add</button>
    </div>
  );
};
