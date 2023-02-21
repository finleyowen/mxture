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
  var { contact, pen_name, identifiers, headline, byline, trigger_warnings, content_src } = req.body
  new Submission({ contact, identifiers, pen_name, headline, byline, trigger_warnings, content_src })
    .save()
    .then(function () {
      res.json({ success: true });
    })
    .catch(function (err) {
      console.log(err)
      res.json({ success: false, err });
    });
});

app.listen(port, () => console.log(`Listening on port ${port}.`));
