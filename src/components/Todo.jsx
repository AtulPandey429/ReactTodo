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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchTodoData();
  }, []); // Fetch data when the component mounts
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // You can perform other actions related to toggling dark mode here
  };
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

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleAdd = () => {
    if (newTodo.trim() !== "") {
      setTodos([{ id: Date.now(), taskName: newTodo, completed: false }, ...todos]);
      setNewTodo("");
    }
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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    sessionStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const renderTodos = (task, index) => (
    <tr key={task.id}>
      <td>
        {editIndex === index && editMode ? (
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="form-control"
          />
        ) : (
          <span>{task.taskName}</span>
        )}
      </td>
      <td>
        {editIndex === index && editMode ? (
          <button className="btn btn-danger" onClick={handleSave}>
            <FaSave /> Save
          </button>
        ) : (
          <button className="btn btn-warning" onClick={() => handleEdit(index)}>
            <FaEdit /> Edit
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => handleDelete(task.id)}>
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
  );

  const filteredTodo = () => {
    if (filter === 'done') {
      return todos.filter(task => task.completed);
    } else if (filter === 'inProgress') {
      return todos.filter(task => !task.completed);
    }
    return todos;
  };

  const totalPages = Math.ceil(filteredTodo().length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTodo().slice(indexOfFirstItem, indexOfLastItem);

  return (
    <center>
      <div className={`container ${darkMode ? 'night-mode' : ''}`}>
      <div className="d-flex justify-content-end mt-3">
        {/* Dark mode toggle button */}
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="darkModeToggle"
            checked={darkMode}
            onChange={handleDarkModeToggle}
          />
          <label className="form-check-label ms-2" htmlFor="darkModeToggle">
            Dark Mode
          </label>
        </div>
      </div>
        <h1 className="text-center mb-5">Todo App</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
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
            {currentItems.map((task, index) => renderTodos(task, index))}
          </tbody>
        </table>

       
  <div className="d-flex justify-content-center align-items-center mt-4">
          <button
            className="btn btn-primary me-2"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            className="btn btn-primary ms-2"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
       
      </div>
    </center>
  );
};

export default Todo;
