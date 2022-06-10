const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.render("./meStuff/home");
});
app.get("/aboutMe", (req, res) => {
  res.render("./meStuff/aboutMe");
});
app.get("/workDesire", (req, res) => {
  res.render("./meStuff/workDesire");
});

app.listen(3002, () => {
  console.log("listening on port 3002");
});
