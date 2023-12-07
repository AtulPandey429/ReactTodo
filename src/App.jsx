import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/todo";
import Topics from "./components/Topics";
// import "./components/global.css"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="parent">
      <Topics/>
      {/* <Todo/> */}
    </div>
    </>
  );
}

export default App;
