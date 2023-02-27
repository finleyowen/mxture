const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const ProfileSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    contact_email: {
      type: String,
      unique: true,
    },
    password: String,
    display_name: String,
    descriptors: String,
    bio: String,
    website: String,
  },
  {
    comparePassword(data) {
      return bcrypt.compareSync(data, this.password);
    },
  }
);

ProfileSchema.pre("save", function (next) {
  var user = this;
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

module.exports = ProfileSchema;
