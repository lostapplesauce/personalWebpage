const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const catchAsync = require("./utils/catchAsync");
const Review = require("./models/review");
const { profile } = require("console");
const { default: mongoose } = require("mongoose");

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// Now it is connected to local database
mongoose.connect('mongodb://localhost:27017/personalWebpage', {

});

app.get("/", (req, res) => {
  res.render("./meStuff/home");
});
app.get("/aboutMe", (req, res) => {
  res.render("./meStuff/aboutMe");
});
app.get("/workDesire", (req, res) => {
  res.render("./meStuff/workDesire");
});

app.post('/comments', catchAsync(async (req, res) => {
  const review = new Review(req.body.review);
  review.reviews.push(review);
  await review.save();
  res.redirect('/');
}));

app.listen(3002, () => {
  console.log("listening on port 3002");
});
