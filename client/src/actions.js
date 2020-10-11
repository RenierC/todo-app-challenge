// Interface to talk to the server
export const getTodos = () => fetch("/api/items/").then((res) => res.json());

export const createTodo = (todo) =>
  fetch("/api/items/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

export const getSingleTodo = (id) =>
  fetch(`/api/items/${id}`).then((res) => res.json());

export const updateTodo = (todo, id) =>
  fetch(`/api/items/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

export const deleteTodo = (id) =>
  fetch(`/api/items/${id}`, {
    method: "DELETE",
  });
