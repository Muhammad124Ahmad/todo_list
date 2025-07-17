import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState("");
  const [listInputs, setListInputs] = useState({});
  const handleAddTodo = () => {
    if (headingInput.trim() != "") {
      setTodos([...todos, { heading: headingInput, list: [] }]);
      setHeadingInput("");
    }
  };
  const handleAddList = (index) => {
    if (listInputs[index] && listInputs[index].trim() != "") {
      const newTodos = [...todos];
      newTodos[index].list.push(listInputs[index]);
      setTodos(newTodos);
      setListInputs({ ...listInputs, [index]: "" });
    }
  };
  const handleListInputChange = (index, value) => {
    setListInputs({ ...listInputs, [index]: value }); // Update the listInputs state for the corresponding index
  };
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => {
              setHeadingInput(e.target.value);
            }}
          />
          <button className="add-list-button" onClick={handleAddTodo}>
            Add Heading
          </button>
        </div>
      </div>
      <div className="todo_main">
        {todos.map((todo, index) => {
          return (
            <div className="todo-card" key={index}>
              <div className="heading-todo">
                <h3>{todo.heading}</h3>

                <button
                  className="delete-button-heading"
                  onClick={() => handleDeleteTodo(index)}
                >
                  Delete Heading
                </button>
              </div>
              <ul>
                {todo.list.map((list, listIndex) => {
                  return (
                    <li key={listIndex} className="todo_inside_list">
                      <p>{list}</p>
                    </li>
                  );
                })}
              </ul>
              <div className="add_list">
                <input
                  type="text"
                  className="list-input"
                  placeholder="Add list"
                  value={listInputs[index] || ""}
                  onChange={(e) => handleListInputChange(index, e.target.value)}
                />
                <button
                  className="add-list-button"
                  onClick={() => {
                    return handleAddList(index);
                  }}
                >
                  Add List
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
