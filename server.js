const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./models/Todo");
const path = require("path");

// Connect to local db
// mongoose.connect("mongodb://127.0.0.1:27017/todos", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongo DB atlas
// DB config
const db = require("./config/keys").mongoURI;
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;

// connnect to atlas db
mongoose
  .connect(process.env.MONGODB_URI || db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongo db connected..."))
  .catch((err) => console.log(err));

mongoose.connection.once("open", () => {
  console.log("Connection established successfully");
});

// middlewares

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// set the port
// const PORT = 4000;

// Routes
// Get all
app.get("/", (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

// Create
app.post("/create", (req, res) => {
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
app.get("/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    res.json(todo);
  });
});

// Update todo
app.post("/:id", (req, res) => {
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
app.delete("/:id", (req, res) => {
  const id = req.params.id;
  Todo.findByIdAndRemove(id, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send("Success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});
// app.listen(PORT, () => {
//   console.log("the server is running on port " + PORT);
// });
