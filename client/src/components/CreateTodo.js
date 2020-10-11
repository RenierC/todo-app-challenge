import React from "react";
import TodoTemplate from "./TodoTemplate";
import { createTodo } from "../api";
import { useHistory } from "react-router-dom";

function CreateTodo() {
  const history = useHistory();

  const onSubmit = async (data) => {
    await createTodo(data, (data.completed = false));
    history.push("/");
  };

  return (
    <div>
      <h1>Create todo</h1>
      <div className="create-container">
        <TodoTemplate onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default CreateTodo;
