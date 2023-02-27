const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const { Profile } = require("../mongo");

passport.use(
  new LocalStrategy((username, password, next) => {
    Profile.findOne({ username })
      .then((profile) => {
        if (profile) {
          if (bcrypt.compareSync(password, profile.password))
            return next(null, profile);
          else
            return next(null, false, {
              message: "Incorrect credentials",
            });
        } else
          return next(null, false, {
            message: "Incorrect credentials",
          });
      })
      .catch((err) => {
        next(err);
      });
  })
);

passport.serializeUser((profile, next) => {
  console.log(profile);
  next(null, profile.username);
});

passport.deserializeUser((username, next) => {
  Profile.findOne({ username })
    .then((profile) => {
      if (profile) {
        return next(null, profile);
      } else {
        return next(null, false);
      }
    })
    .catch((err) => {
      return next(err);
    });
});

module.exports = passport;
