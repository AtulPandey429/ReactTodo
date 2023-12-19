import React, { useState, useEffect } from "react";
import { FaEdit, FaFilter, FaSave, FaTrash } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editMode, setEditMode] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTodoData();
  }, []); // Fetch data when the component mounts

  const fetchTodoData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos'); // Replace 'https://your-api-url' with your API endpoint
      const data = await response.json();

      const extractedTodos = data.map(item => ({
        id: item.id,
        taskName: item.title,
        completed: item.completed
      }));

      setTodos(extractedTodos);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAdd = () => {
    if (newTodo.trim() !== "") {
      setTodos([{ id: Date.now(), taskName: newTodo, completed: false }, ...todos]);
      setNewTodo("");
    }
  };

  const handleInput = (e) => {
    setNewTodo(e.target.value);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditMode(true);
    setNewTodo(todos[index].taskName);
  };

  const handleSave = () => {
    if (editIndex !== -1 && newTodo.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[editIndex].taskName = newTodo;
      setTodos(updatedTodos);
      setEditIndex(-1);
      setEditMode(false);
      setNewTodo("");
    }
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    setEditIndex(-1);
    setEditMode(false);
  };

  useEffect(() => {
    sessionStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filteredTodo = () => {
    if (filter === 'done') {
      return todos.filter(task => task.completed);
    } else if (filter === 'inProgress') {
      return todos.filter(task => !task.completed);
    }
    return todos;
  };

  return (
    <center>
      <div className="container">
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
              <tr key={task.id}>
                <td>
                  {editIndex === index && editMode ? (
                    <input
                      type="text"
                      value={newTodo}
                      onChange={handleInput}
                      className="form-control"
                    />
                  ) : (
                    <span >{task.taskName}</span>
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
                    onClick={() => handleDelete(task.id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => {
                      const updatedTodos = [...todos];
                      updatedTodos[index].completed = !task.completed;
                      setTodos(updatedTodos);
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
