import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = () => {
    const initialtodo =JSON.parse(sessionStorage.getItem('todo')) || [];
  const [todo, settodo] = useState(initialtodo);
  const [newtodo, setnewtodo] = useState("");

  const handleAdd = () => {
    if (newtodo.trim() != "") {
      settodo([newtodo, ...todo]);
      console.log(todo);
      setnewtodo("");
    }
  };
  const handleinput = (e) => {
    setnewtodo(e.target.value);
  };
  const handledelet = (index) => {
    const updatedtodo = todo.filter((_, i) => i !== index);
    settodo(updatedtodo);
    console.log(todo);
  };
 
  //store
  useEffect(() => {
    sessionStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  return (
    <div>
      <h1>Todo-App</h1>
      <div className="container">
        <input
          type="text"
          name="todo"
          value={newtodo}
          id="todo"
          onChange={handleinput}
        />
        <button className="btn m-2 btn-success" onClick={handleAdd}>
          Add
        </button>
      </div>
      <div className="container1">
        {todo.map((e, i) => {
          return (
            <div className="row" key={i}>
              <div className="col m-2 text-start ">{e} </div>
              <div className="col m-2 ">
                <button
                  className=" btn btn-danger"
                  onClick={() => handledelet(i)}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
