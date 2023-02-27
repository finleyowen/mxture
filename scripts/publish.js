require("dotenv").config();
const { Creator, Post } = require("../service/mongo");

// publish(['6s8d76sdfd2ty', '<p>Hello world</p>'], ...)
function publish(...posts) {
  posts.forEach((value, index) => {
    var post_id = value[0];
    var content_html = value[1];

    console.log(post_id, content_html);

    Post.findById(post_id)
      .then((post) => {
        if (!post) return console.log("Cannot find post with id " + post_id);
        post.content_html = content_html;
        post.publication_date = Date.now();
        post.save();
      })
      .catch((err) => {
        console.log("Error finding post");
      });
  });
}

publish([
  "63fb309ab48f52cd9e3735ed",
  `
        <p>MXTURE is a community blog created and moderated by three queer teenagers in Australia. Our blog will focus on queer issues and discourse. It&rsquo;s a &lsquo;community blog&rsquo; because anyone, from anywhere, can submit a post via the submissions form, but posts may be rejected in the moderation process. This introduction will answer some questions you might have about how MXTURE works and why it&rsquo;s here.</p>

        <p>Also, feel free to contact us via the &lsquo;Contact&rsquo; link at the bottom of every page if you have questions, ideas, or other talking points directed towards MXTURE. We hope to see you enjoy and contribute to our blog!</p>

        <hr />
        <h2>How does the moderation process work?</h2>

        <p>MXTURE moderators will read your submission together and decide whether it should be published, or rejected. If a consensus is reached decide to publish your post, edits may be made to spelling, grammar, flow, or style. Then, the moderators will contact you directly via the email listed in your profile regarding your post and seek approval for edits and publication if necessary. If your post was rejected, we&rsquo;ll also state the exact reason(s) for its rejection.</p>

        <h2>Who is MXTURE for?</h2>

        <p>Though MXTURE considers queerness and gender diversity as central topics of our blog, this is by no means indicative of an exclusive target audience or desired user base. Anybody can read the blog, and anybody can submit a post, but should keep in mind that the moderation process is entirely at the discretion of the moderators. The moderators may reject your post if it doesn&rsquo;t uphold MXTURE&rsquo;s values, or if it isn&rsquo;t relevant to the blog.</p>

        <h2>What is &lsquo;relevant&rsquo;?</h2>

        <p>There currently aren&rsquo;t any hard-and-fast rules to what we consider relevant to our blog, and the type of content you can post on MXTURE may depend on your post history. For more information, check out our guidelines.</p>

        <h2>Doesn&rsquo;t this restrict free speech?</h2>

        <p>Yes and no. Yes because there are viewpoints and perspectives that MXTURE will refuse to publish, and no because your freedom of speech protects you from government persecution; it doesn&rsquo;t mean you have the right to post on our site.</p>`,
]);
