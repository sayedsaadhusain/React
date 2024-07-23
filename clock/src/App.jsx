import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Setdate from "./components/date&time";

function App() {
  const [count, setCount] = useState(0);

  return <>
    <div className="container text-center">
    <h1>MY CLOCK</h1>
    <h2>It shows the times in India</h2>
    <Setdate />
    </div>
  </>;
}

export default App;
