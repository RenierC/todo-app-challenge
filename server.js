const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const items = require("./routes/api/items");
// Connect to local db
// mongoose.connect("mongodb://127.0.0.1:27017/todos", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongo DB atlas
// DB config
const db = require("./config/keys").mongoURI;
const app = express();
// app.use(cors());
app.use(bodyParser.json());

// connnect to atlas db
mongoose
  .connect(process.env.MONGODB_URI || db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongo db connected..."))
  .catch((err) => console.log(err));

app.use("/api/items", items);

mongoose.connection.once("open", () => {
  console.log("Connection established successfully");
});

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});
