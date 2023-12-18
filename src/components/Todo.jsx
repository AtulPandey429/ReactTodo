import React, { useState, useEffect } from "react";
import { FaEdit, FaFilter, FaSave, FaTrash } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Todo.css";
const Todo = () => {
  const initialTodo = JSON.parse(sessionStorage.getItem("todo")) || [];
  const initialProgress = JSON.parse(sessionStorage.getItem("progress")) || [];
  const [todo, setTodo] = useState(initialTodo);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editMode, setEditMode] = useState(false);
  const [progress, setProgress] = useState(initialProgress);
  const [filter, setFilter] = useState('all');

  const handleAdd = () => {
    if (newTodo.trim() !== "") {
      setTodo([newTodo, ...todo]);
      setProgress([false, ...progress]);
      setNewTodo("");
    }
  };

  const handleInput = (e) => {
    setNewTodo(e.target.value);
  };

  const handleDelete = (index) => {
    const updatedTodo = todo.filter((_, i) => i !== index);
    const updatedProgress = progress.filter((_, i) => i !== index);
    setTodo(updatedTodo);
    setProgress(updatedProgress);
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

  useEffect(() => {
    sessionStorage.setItem("todo", JSON.stringify(todo));
    sessionStorage.setItem("progress", JSON.stringify(progress));
  }, [todo, progress]);

  const filteredTodo = () => {
    if (filter === 'done') {
      return todo.filter((_, index) => progress[index]);
    } else if (filter === 'inProgress') {
      return todo.filter((_, index) => !progress[index]);
    }
    return todo;
  };

  return (
    <center>
    <div className="container  ">
      <h1 className="text-center mb-5">Todo App</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task"
          value={newTodo}
          onChange={handleInput}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Task
        </button>
      </div>
      <div className="dropdown mb-3">
      <button
    className="btn btn-secondary dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <FaFilter className="me-2" /> Filter Tasks
  </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <button
              className={`dropdown-item ${filter === 'all' && 'active'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={`dropdown-item ${filter === 'done' && 'active'}`}
              onClick={() => setFilter('done')}
            >
              Done
            </button>
          </li>
          <li>
            <button
              className={`dropdown-item ${filter === 'inProgress' && 'active'}`}
              onClick={() => setFilter('inProgress')}
            >
              In Progress
            </button>
          </li>
        </ul>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Edit/Save</th>
            <th>Delete</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodo().map((task, index) => (
            <tr key={index}>
              <td>
                {editIndex === index && editMode ? (
                  <input
                    type="text"
                    value={newTodo}
                    onChange={handleInput}
                    className="form-control"
                  />
                ) : (
                  task
                )}
              </td>
              <td>
                {editIndex === index && editMode ? (
                  <button className="btn btn-danger" onClick={handleSave}>
                    <FaSave /> Save
                  </button>
                ) : (
                  <button
                    className="btn btn-warning"
                    onClick={() => handleEdit(index)}
                  >
                    <FaEdit /> Edit
                  </button>
                )}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  <FaTrash /> Delete
                </button>
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={progress[index]}
                  onChange={() => {
                    const newProgress = [...progress];
                    newProgress[index] = !newProgress[index];
                    setProgress(newProgress);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </center>
  );
};

export default Todo;
