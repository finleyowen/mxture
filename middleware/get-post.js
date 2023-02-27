const { Post, Creator } = require("../service/mongo");

module.exports = async function getPost(req, res, next) {
  var { url_path } = req.params;
  Post.findOne({ url_path })
    .then((post) => {
      if (!post) return console.log("Post not found");
      res.locals.post = post;
      Creator.find({ post })
        .populate("profile")
        .exec((err, results) => {
          if (err) return console.log(err);
          res.locals.creators = results.map((creator) => {
            var { username, display_name } = creator.profile;
            return { username, display_name };
          });
          console.log(res.locals);
          next();
        });
    })
    .catch(console.log);
};
