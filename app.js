const express = require("express");
const ejs = require("ejs");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running on port PORT");
});
