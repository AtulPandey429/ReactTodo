import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const Todo = () => {
  const initialTodo = JSON.parse(sessionStorage.getItem('todo')) || [];
  const [todo, setTodo] = useState(initialTodo);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editMode, setEditMode] = useState(false);

  const handleAdd = () => {
    if (newTodo.trim() !== "") {
      setTodo([newTodo, ...todo]);
      setNewTodo("");
    }
  };

  const handleInput = (e) => {
    setNewTodo(e.target.value);
  };

  const handleDelete = (index) => {
    const updatedTodo = todo.filter((_, i) => i !== index);
    setTodo(updatedTodo);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditMode(true);
    setNewTodo(todo[index]);
  };

  const handleSave = () => {
    if (editIndex !== -1 && newTodo.trim() !== "") {
      const updatedTodo = [...todo];
      updatedTodo[editIndex] = newTodo;
      setTodo(updatedTodo);
      setEditIndex(-1);
      setEditMode(false);
      setNewTodo("");
    }
  };

  // Store todo list in sessionStorage
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
          value={newTodo}
          id="todo"
          onChange={handleInput}
        />
        <button className="btn m-2 btn-success" onClick={handleAdd}>
          Add
        </button>
      </div>
      <div className="container1">
        {todo.map((task, index) => (
          <div className="row" key={index}>
            {editIndex === index && editMode ? (
              <div className="col m-2">
                <input
                  type="text"
                  value={newTodo}
                  onChange={handleInput}
                />
              </div>
            ) : (
              <div className="col m-2 text-start">{task}</div>
            )}
            <div className="col m-2">
              {editIndex === index && editMode ? (
                <button className="btn btn-primary" onClick={handleSave}>
                  Save
                </button>
              ) : (
                <button className="btn btn-warning" onClick={() => handleEdit(index)}>
                  Edit
                </button>
              )}
              <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
