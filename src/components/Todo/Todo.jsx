import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./Todo.css";
import TodoList from "./TodoList";
import Clock from "./Clock";
import NewDate from "./NewDate";

const Todo = () => {
  const getData = JSON.parse(localStorage.getItem("newtodos"));
  const [input, setInput] = useState({});
  const [todo, setTodo] = useState(getData || []);

  const handleInput = (value) => {
    setInput({ id: Date.now(), content: value, check: false });
  };
  const handleClick = () => {
    if (input.content) {
      const match = todo.find((newData) => newData.content === input.content);
      if (!match) {
        setTodo([
          ...todo,
          {
            id: input.id,
            content: input.content,
            check: input.check,
          },
        ]);
        toast.success("Data Inserted Successfully 😀");
        setInput({ id: "", content: "", check: "" });
      } else {
        toast.warning("Duplicate Data 😡");
      }
    } else {
      toast.warning("Data Empty 🧐");
    }
  };

  localStorage.setItem("newtodos", JSON.stringify(todo));

  const handleDelete = (delData) => {
    const updatedTodo = todo.filter((curData) => curData.content !== delData);
    setTodo(updatedTodo);
    toast("🤯 Data Deleted Successfully");
  };
  const handleCheck = (chkData) => {
    const checkData = todo.map((task) => {
      if (task.content === chkData) {
        return { ...task, check: !task.check };
      } else {
        return task;
      }
    });
    setTodo(checkData);
  };

  return (
    <div className="sp-todo-app">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <NewDate />
              <h2 className="text-center flex-grow-1 m-0">My Todos</h2>
              <Clock />
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <div className="card p-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a new task..."
                  value={input.content}
                  onChange={(e) => handleInput(e.target.value)}
                />
                <button className="btnn btn-add" onClick={handleClick}>
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4 todo-list-pr">
          <div className="col-12">
            <ul className="list-unstyled m-0">
              {todo.map((nwData, i) => {
                return (
                  <TodoList
                    sl={i}
                    key={nwData.id}
                    toData={nwData.content}
                    check={nwData.check}
                    onDelete={handleDelete}
                    onCheck={handleCheck}
                  />
                );
              })}
            </ul>
          </div>
        </div>

        <div className="row clear-btn-pr">
          <div className="col-12 text-center">
            <button
              className="btn btn-clear"
              onClick={() => {
                setTodo([]);
                localStorage.removeItem("newtodos");
                toast.success("🧹 All tasks cleared");
              }}
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={1500} position="top-right" />
    </div>
  );
};

export default Todo;
