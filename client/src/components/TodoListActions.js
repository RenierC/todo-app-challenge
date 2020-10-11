import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteTodo, updateTodo } from "../actions";

import "./TodoListActions.css";
import editIcon from "../assets/edit-icon.svg";
import deleteIcon from "../assets/delete-icon.svg";

function TodoListActions({ todo, todoId, onDelete, onCompleted }) {
  // State to show if the input is checked or not
  const [checked, setChecked] = useState(todo.completed);

  // Delete from Db action
  const onDeleteDb = async () => {
    // Reflect changes in ui
    onDelete(todo._id);
    // Delete from Db
    await deleteTodo(todo._id);
  };

  // Toggle Todo completed/incompleted action
  const completedToggleDb = async () => {
    // do the operation
    let change = { ...todo, completed: !todo.completed };
    // push it to db
    setChecked(!checked);
    onCompleted(todo._id);
    await updateTodo(change, todo._id);
  };

  return (
    <div className="list-actions">
      <ul>
        <li>
          {/* Mark as completed/incompleted  */}
          <input
            type="checkbox"
            name="completed"
            id={todoId}
            checked={checked}
            onChange={() => completedToggleDb()}
          />
        </li>
        <li>
          {/* Edit a todo */}
          <Link to={`/edit/${todoId}`}>
            <img alt="edit button" src={editIcon} />
          </Link>
        </li>
        <li>
          {/* Delete a todo */}
          <button className="delete-btn" onClick={() => onDeleteDb()}>
            <img alt="edit button" src={deleteIcon} />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default TodoListActions;
