import React, { useEffect, useState } from "react";
import { getTodos } from "../api";
import TodoListActions from "./TodoListActions";

import "./TodoList.css";

function TodoList() {
  // State to load todos fetched from db
  const [todos, setTodos] = useState([]);

  // Fetches the todos saved in db
  useEffect(() => {
    const fetchTodos = async () => {
      const dbTodos = await getTodos();
      setTodos(dbTodos);
    };
    fetchTodos();
  }, []);

  // Delete from state
  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  // Toggle completed from state
  const onCompleted = (id) => {
    setTodos(
      todos.map((item) => {
        if (item._id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <div className="todoContainer">
        {todos.length ? (
          <table className="todo-table">
            <thead>
              <tr>
                <th>Description</th>
                <th className="action-header">Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo._id}>
                  <td
                    className={`todo-text ${
                      todo.completed ? "todo-text-completed" : ""
                    }`}
                  >
                    {todo.text}
                  </td>
                  <td>
                    <TodoListActions
                      todo={todo}
                      todoId={todo._id}
                      onDelete={onDelete}
                      onCompleted={onCompleted}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="empty-list">
            <h2>
              Press create{" "}
              <span role="img" aria-label="wink and point">
                ☝🏽😉
              </span>
              to add some todos
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoList;
