require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { Submission } = require("./service/mongo");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/static", express.static("public"));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "pug/views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/submission-form", (req, res) => {
  res.render("submission-form");
});
app.post("/submission", (req, res) => {
  console.log(req.body);
  new Submission(req.body)
    .save()
    .then(function () {
      res.json({ success: true });
    })
    .catch(function () {
      res.json({ success: false });
    });
});

app.listen(port, () => console.log(`Listening on port ${port}.`));
