import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/todo";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="parent">
    
      <Todo/>
    </div>
    </>
  );
}

export default App;
