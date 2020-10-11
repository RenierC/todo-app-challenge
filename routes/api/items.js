const express = require("express");
const router = express.Router();

const Todo = require("../../models/Todo");

// Get all
router.get("/", (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

// Create
router.post("/create", (req, res) => {
  const todo = new Todo(req.body);
  todo
    .save()
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

// Get a single Todo
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    res.json(todo);
  });
});

// Update todo
router.post("/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if (!todo) {
      res.status(404).send("The todo was no found");
    } else {
      todo.text = req.body.text;
      todo.completed = req.body.completed;
      todo
        .save()
        .then((todo) => {
          res.json(todo);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
});

// Delete Todo
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Todo.findByIdAndRemove(id, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send("Success");
    }
  });
});

module.exports = router;
