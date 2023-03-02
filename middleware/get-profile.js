const { Profile, Creator } = require("../service/mongo");

module.exports = function (req, res, next) {
  var { username } = req.params;
  Profile.findOne({ username })
    .then((profile) => {
      if (!profile) return res.status(404);
      res.locals.profile = profile;
      next()
    })
    .catch((err) => {
      res.render("msg", {
        mainMsg: "An error occured",
        details: JSON.stringify(err),
      });
    });
};
