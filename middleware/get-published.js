const { Post, Creator } = require("../service/mongo");

module.exports = async function getPublished(req, res, next) {
  Post.find({ publication_date: { $ne: null } }, "headline byline url_path")
    .then((posts) => {
      console.log(posts);
      res.locals.posts = posts;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
};
