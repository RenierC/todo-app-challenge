// Interface to talk to the server
export const getTodos = () => fetch("").then((res) => res.json());

export const createTodo = (todo) =>
  fetch("create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

export const getSingleTodo = (id) => fetch(`${id}`).then((res) => res.json());

export const updateTodo = (todo, id) =>
  fetch(`${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

export const deleteTodo = (id) =>
  fetch(`${id}`, {
    method: "DELETE",
  });
