// Interface to talk to the server
export const getTodos = () =>
  fetch("https://todo-app-challenge.herokuapp.com/").then((res) => res.json());

export const createTodo = (todo) =>
  fetch("https://todo-app-challenge.herokuapp.com/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

export const getSingleTodo = (id) =>
  fetch(`https://todo-app-challenge.herokuapp.com/${id}`).then((res) =>
    res.json()
  );

export const updateTodo = (todo, id) =>
  fetch(`https://todo-app-challenge.herokuapp.com/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

export const deleteTodo = (id) =>
  fetch(`http://localhost:4000/${id}`, {
    method: "DELETE",
  });
