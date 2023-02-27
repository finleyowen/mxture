const { Profile, Post, Creator } = require("../service/mongo");

const profile = require("express").Router();

profile.use(async (req, res, next) => {
  if (!req.isAuthenticated()) return res.redirect("/auth");
  const { username } = req.user;
  Profile.findOne({ username }).then((profile) => {
    res.locals.profile = profile;
    next();
  });
});

profile.get("/", (req, res) => {
  res.render("profile/dashboard");
});

profile.get("/edit", (req, res) => {
  res.render("profile/edit");
});
profile.post("/edit", (req, res) => {
  res.locals.profile.updateOne({ ...req.body }).then((updatedProfile) => {
    req.user = { ...updatedProfile };
    res.locals.profile = updatedProfile;
    res.redirect("/profile");
  });
});

profile.get("/submit-post", (req, res) => {
  res.render("profile/submit-post");
});
profile.post("/submit-post", (req, res) => {
  const { headline, byline, trigger_warnings, content_src } = req.body;
  new Post({ headline, byline, trigger_warnings, content_src })
    .save()
    .then((post) => {
      var { profile } = res.locals;
      new Creator({ post, profile }).save().then(() => {
        res.json({ success: true });
      });
    });
});

module.exports = profile;
