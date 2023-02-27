require("dotenv").config();
const express = require("express");
const session = require('express-session')
const MongoStore = require('connect-mongo')
const passport = require('./service/passport')
const bodyParser = require("body-parser");
const path = require("path");

const auth = require('./middleware/auth-router')
const profile = require('./middleware/profile-router')
const getPost = require('./middleware/get-post')
const getProfile = require('./middleware/get-profile')
const getPublished = require('./middleware/get-published')

// Initialises the express server and defines the port it runs on
const app = express();
const port = process.env.PORT;

// Parses URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: false }));
// Stores user sessions in MongoDB
app.use(session({
  secret: process.env.EXPRESS_SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGODB_URL })
}))
// Enables passport.authenticate() method to be used within routes
app.use(passport.initialize())
app.use(passport.session())
// The server's "/static" path will serve this directorie's "public" folder statically.
app.use("/static", express.static("public"));
// See this repository's 'routes' directory
app.use('/auth', auth)
app.use('/profile', profile)
// See pug/views
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "pug/views"));
// See pug/views/home.pug
app.get("/", getPublished, (req, res) => {
  console.log(res.locals)
  res.render('home')
})
// See pug/views/about.pug
app.get("/about", (req, res) => {
  res.render("about");
});
app.get('/ts-and-cs', (req, res) => {
  res.render('ts-and-cs')
})
app.use('/~:url_path', getPost, (req, res, next) => {
  res.render('post-view')
})
app.use('/@:username', getProfile)

app.listen(port, () => console.log(`Listening on port ${port}.`));
