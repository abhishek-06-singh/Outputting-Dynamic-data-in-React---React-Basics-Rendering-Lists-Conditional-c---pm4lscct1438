import React, { useState, useEffect } from "react";
import "./styles.css";
const App = () => {
  //code here
  const [name, setName] = useState("");
  function handleChange(event) {
    setName(event.target.value);
  }
  function handleClick() {
    document.getElementById(
      "text"
    ).innerHTML = ` Hello my name is ${name} and I study at Newton School`;
  }
  return (
    <div id="main">
      <input id="input" onChange={handleChange}></input>
      <button id="button" onClick={handleClick}>
        Click
      </button>
      <p id="text"> Hello my name is ____ and I study at Newton School</p>
    </div>
  );
};

export default App;
