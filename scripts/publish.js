require("dotenv").config();
const { Creator, Post } = require("../service/mongo");

// publish(['6s8d76sdfd2ty', '<p>Hello world</p>'], ...)
function publish(...posts) {
  posts.forEach((value, index) => {
    var post_id = value[0];
    var content_html = value[1];

    Post.findById(post_id)
      .then((post) => {
        if (!post) return console.log("Cannot find post with id " + post_id);
        post.content_html = content_html;
        post.publication_date = Date.now();
        post.save();
      })
      .catch((err) => {
        console.log("Error finding post: ", err);
      });
  });
}

publish(['63fe99806638da1884f0d524', `<p>you were the axe — but never think did you 
to handle, grip, and hack to layers deep
irrationale was justified and safe
with reasoning obtuse — you found some peace
deluded confidence in striking form
for forming axe, each shaping cut mundane
and though that tree would longer live
it tried to love such wanton pain </p>
<p>i was a crying sapling underfoot
trampled by productive lumberer mark
intending to uproot that unscathed wood
to frame, exploit, a robust hopeful bark
if i had not become some rusty plywood
i might have got to grow forever tall
if you had not been envious —
that i could grow at all</p>
<p>violation of the virgin embers
vilify, orange.
vibrant in virulence is a
vain, vain victor</p>
<p>wrung like toxic tapestry
torn tea towel stained with that stigmatic sin
the forest, quiet, droops upon a hill
expects the pattern of your return
in mornings, still, crepuscular and chill
your footsteps planted far within this anguish
my heart bleed fresh with rhythm from your path
you seek my ash — i’m prey — i pray unlikely
to wilt — without such stagnant charcoal scars</p>
`])