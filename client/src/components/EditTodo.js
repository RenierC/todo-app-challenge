import React, { useEffect, useState } from "react";
import TodoTemplate from "./TodoTemplate";
import { getSingleTodo, updateTodo } from "../api";
import { useHistory, useRouteMatch } from "react-router-dom";

function EditTodo() {
  const [todo, setTodo] = useState();
  const match = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    const fetchTodo = async () => {
      const dbTodo = await getSingleTodo(match.params.id);
      setTodo(dbTodo);
    };
    fetchTodo();
  }, [match]);

  const onSubmit = async (data) => {
    data.completed = todo.completed;
    await updateTodo(data, match.params.id);
    history.push("/");
  };
  return todo ? (
    <div>
      <h1 style={{ textAlign: "center" }}>Edit todo</h1>
      <TodoTemplate todo={todo} onSubmit={onSubmit} />
    </div>
  ) : (
    <div>
      <p>Loading...</p>
    </div>
  );
}

export default EditTodo;
