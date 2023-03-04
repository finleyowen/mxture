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

publish(['63fe99806638da1884f0d524', `<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">you were the axe &mdash; but never think did you&nbsp;</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">to handle, grip, and hack to layers deep</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">irrationale was justified and safe</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">with reasoning obtuse &mdash; you found some peace</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">deluded confidence in striking form</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">for forming axe, each shaping cut mundane</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">and though that tree would longer live</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">it tried to love such wanton pain&nbsp;</span></span></span></p>

<p>&nbsp;</p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">i was a crying sapling underfoot</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">trampled by productive lumberer mark</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">intending to uproot that unscathed wood</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">to frame, exploit, a robust hopeful bark</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">if i had not become some rusty plywood</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">i might have got to grow forever tall</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">if you had not been envious &mdash;</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">that i could grow at all</span></span></span></p>

<p>&nbsp;</p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">violation of the virgin embers</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">vilify, orange.</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">vibrant in virulence is a</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">vain, vain victor</span></span></span></p>

<p>&nbsp;</p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">wrung like toxic tapestry</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">torn tea towel stained with that stigmatic sin</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">the forest, quiet, droops upon a hill</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">expects the pattern of your return</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">in mornings, still, crepuscular and chill</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">your footsteps planted far within this anguish</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">my heart bleed fresh with rhythm from your path</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">you seek my ash &mdash; i&rsquo;m prey &mdash; i pray unlikely</span></span></span></p>

<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:'Times New Roman'"><span style="color:#000000">to wilt &mdash; without such stagnant charcoal scars</span></span></span></p>

<p>&nbsp;</p>
`])