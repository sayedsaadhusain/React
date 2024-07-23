import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let items = ["a", "b", "c", "d", "e", " f", "g", "h", "i"];
  return (
    <>
      <h1>this is dynamic list</h1>
      {items.length == [] && "their is empty list"} 
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
