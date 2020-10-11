import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import "./App.css";
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="navbar">
          <nav>
            <ul>
              {/* navbar home button */}
              <li className="link-btn">
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    border: "2px solid black",
                    borderRadius: 30,
                    padding: 10,
                  }}
                >
                  Todo List
                </Link>
              </li>
              {/* navbar create/edit button */}
              <li className="link-btn">
                <Link
                  to="/create"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    border: "2px solid black",
                    borderRadius: 30,
                    padding: 10,
                  }}
                >
                  Create
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/create" component={CreateTodo} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/" component={TodoList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
