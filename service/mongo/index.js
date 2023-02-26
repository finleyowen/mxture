const mongoose = require("mongoose");
const ProfileSchema = require('./schemas/profileSchema')
const PostSchema = require('./schemas/postSchema')
const CreatorSchema = require("./schemas/creatorSchema");

mongoose.set('strictQuery', false);
const Creator = mongoose.model("creator", CreatorSchema);
const Profile = mongoose.model('profile', ProfileSchema)
const Post = mongoose.model('post', PostSchema)

  mongoose.connect(process.env.MONGODB_URL, (err) => {
    if (err) console.log(err)
    else console.log("Connected to Mongo");
  });

module.exports = {
  Post,
  Creator,
  Profile,
};
