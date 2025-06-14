import React from "react";

const TodoList = ({ sl, toData, check, onDelete, onCheck }) => {
  return (
    <li className="todo-item d-flex justify-content-between align-items-center py-2">
      <span className={`todo-text flex-grow-1 ${check ? "checked-item" : ""}`}>
        {sl + 1}. {toData}
      </span>
      <div className="btn-group ms-3">
        <button
          className="btn btn-sp-check btn-sm"
          onClick={() => onCheck(toData)}
        >
          ✓
        </button>
        <button
          className="btn btn-delete btn-sm ms-1"
          onClick={() => onDelete(toData)}
        >
          ✕
        </button>
      </div>
    </li>
  );
};

export default TodoList;
