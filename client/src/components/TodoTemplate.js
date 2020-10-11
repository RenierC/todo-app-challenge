import React from "react";
import { useForm } from "react-hook-form";
import "./TodoTemplate.css";

function TodoTemplate({ todo, onSubmit }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      text: todo ? todo.text : "",
      completed: todo ? todo.completed : "",
    },
  });

  const submitTodo = handleSubmit((data) => {
    onSubmit(data);
  });
  // Shared form to create or edit
  return (
    <div className="todo-template">
      <form onSubmit={submitTodo}>
        <div className="form-input">
          <input
            placeholder="Add todo here..."
            ref={register}
            type="text"
            name="text"
            id="text"
          />
        </div>
        <div className="form-btn">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default TodoTemplate;
