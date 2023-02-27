const mongoose = require("mongoose");

const CreatorSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Types.ObjectId,
      ref: "post",
    },
    profile: {
      type: mongoose.Types.ObjectId,
      ref: "profile",
    },
  },
  {
    query: {
      ofPost(post) {
        return this.where({ post });
      },
    },
  }
);

module.exports = CreatorSchema;
