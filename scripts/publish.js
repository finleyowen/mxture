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

publish(
  ['63fe8c1ad97c4e25afb09c84', `<p>The processes by which trans liberation can be achieved become apparent when we pause to seriously consider what &lsquo;liberation&rsquo; means in the first place, and how it applies in contemporary contexts for those within and surrounding the trans community. This is because public discourses and media narratives misrepresent trans issues and people intentionally and continuously, successfully disguising the true nature and extent of systematic inequality towards us and other marginalised groups living under the system, and often pushing inaccurate and hostile narratives about the community and members of it. This post aims to examine the economic and political landscape for Australian trans people in 2023, and how the trans liberation movement can move forward in the future.</p>

<p>It may be helpful to make a few distinctions before continuing. Let&rsquo;s assume that&nbsp;<em>trans liberation</em>&nbsp;is a range of personal freedoms and protections and that the&nbsp;****<em>trans liberation movement</em>&nbsp;involves the resolution of current trans issues. Then, we should be clear about what we mean by&nbsp;<em>trans issues</em>, which we&rsquo;ll define as&nbsp;societal and/or systematic injustices, difficulties, and discrimination that disproportionately or specifically target members of the trans community. Notably, this definition doesn&rsquo;t include issues, disagreements, or concerns that cisgender people have regarding trans people&rsquo;s lives, rights, and identities. These, we might call trans non-issues, though to imply that they don&rsquo;t affect trans people&rsquo;s lives negatively, or that they can&rsquo;t evolve into trans issues would be untrue. Some of the most popularised trans non-issues include trans people in bathrooms, trans people in sports, and the difficulty cis people face when learning new to use pronouns for trans people. Though it may seem bold to describe them this way,&nbsp;non-issues as defined above can be (and almost always are) harmful to trans people individually or collectively. The distinction I want to make lies in the origin of the discourses; all of these non-issue debates begin with cis people objecting to the existence and freedom of trans people.</p>

<p>Further analysing these examples of non-issues: public bathrooms, competitive sports, and pronouns, there&rsquo;s another commonality that&rsquo;s difficult to ignore. All three discourses are inherently ideological and infinitely semantic. They all boil down to the same essential question:&nbsp;<em>should trans people be regarded as the gender with which they identify, or the one they were assigned at birth?</em>&nbsp;As it turns out, the answer to this is more complicated, subjective and controversial than it ought to be, resulting in a trans discourse dominated by self-fulfilling prophecies and unanswerable questions formulated by political enemies of the trans community to trap, humiliate, and degrade trans people. You may not even realise how duplicitous this sort of representation is yet, so to help us understand, let&#39;s examine the other side of the distinction: the issues.</p>

<p>While media and political narratives surrounding people tend to focus on these individual and ideological non-issues, broader and further entrenched economic and societal issues need to be addressed. A recent study in Australia published by&nbsp;<a href="https://www.transresearch.org.au/peerreviewedpublications">Trans Health Research</a>&nbsp;(or THR) found 19% of the 928 participants reported unemployment at the time of the study (Bretherton et al., 2021), compared to 5.8% of the general population for the same period (<em>Labour Force, Australia,</em>&nbsp;2021). The study also found 33% of participants reported discrimination in employment, 26% in healthcare, and 16% in government services. Of those on or considering starting HRT, 14% have difficulty affording their prescriptions, 17% have difficulty affording appointments with medical practitioners, and 31% reported they found the pathway to accessing hormones too difficult. A more daunting finding of the study was the prevalence of a select few medical conditions within the sample group. A telling 73% of respondents reported depression diagnoses, 67% had anxiety, and a gut-wrenching 43% had attempted suicide at some point.</p>

<p>Another report published by THR, utilising the same data set, examines factors correlated with suicidal ideation and attempts across the same sample. It found higher odds for a lifetime history of suicide attempts for trans people who were also:</p>

<ul>
	<li>trying to access gender-affirming surgery (aOR* 1.71)</li>
	<li>unemployed (aOR 1.54)</li>
	<li>had experienced physical assault (aOR 2.00)</li>
	<li>had institutional trans discrimination (aOR 1.59)</li>
</ul>

<ul>
	<li>aOR = adjusted odds ratio: the higher the number, the more likely the outcome of lifetime suicide attempts in the intersection group than in the control group.</li>
</ul>

<p>This study concluded:</p>

<blockquote>
<p>Suicide attempts occur due to a complex interaction between socio-political, environmental, interpersonal and structural risk factors. Rather than suicidality perceived as inherent to the trans experience, trans people appear to exhibit higher rates of suicidality as a manifestation of social discrimination. Addressing these factors that contribute to suicidality and the mental health burden in the trans community must be made a priority. (Zwickl et al., 2021)</p>
</blockquote>

<p>This shows that not only are trans people more likely to be discriminated against in their everyday lives but that this discrimination is most likely a variable at play in the well-being of trans people. As we&rsquo;ve seen This is a revelation with implications for the importance of trans liberation, but addressing social taboo and discrimination on the individual level is only the beginning of the story.</p>

<p>In her 2022 debut extended essay&nbsp;<em>The Transgender Issue</em>**,**&nbsp;writer and advocate Shon Faye shows that trans liberation can only be achieved through major redistributions of power and economic resources, reformations and abolitions of government institutions and programs. Faye&rsquo;s work is outstanding, consisting of seven extensively researched and highly informative chapters about trans lives, justice and injustices; from the taboo surrounding pre-pubescent trans kids to intersections between culture, class, sexuality and transness; from sex work to woke brands, anti-trans legislation, prison and the police, from transmisogyny and trans-exclusive feminism to transfeminism and liberation.</p>

<p>You might recall the definition of&nbsp;<em>trans liberation</em>&nbsp;from the second paragraph of this post. We defined it as &lsquo;a range of personal freedoms and protections&hellip; [and] resolution of current trans issues&rsquo;. This description is simple and makes it easy to discuss, but Shon Faye would be critical of our attempt to isolate trans liberation into its components, arguing instead that the process by which trans liberation can be achieved is integral to and inseparable from the process of liberation for every other marginalised group. Her book concludes, among other things:</p>

<blockquote>
<p>There can be no trans liberation under capitalism. This is a fact. Yet it&rsquo;s not a popular view among liberal and centrist LGBTQ+ advocacy groups, who &hellip; talk about &lsquo;trans rights&rsquo; in isolation as a range of personal freedoms and protections; and who cling to corporations and brands as potential &lsquo;allies&rsquo; in the fight for social acceptance.</p>
</blockquote>

<p>Several factors make her conclusion logical to draw from the evidence she presents, like the disproportionate number of trans people experiencing homelessness in the UK at any given time: 24% according to both&nbsp;<em>The Transgender Issue</em>&nbsp;and the&nbsp;<a href="https://www.akt.org.uk/">akt</a>&rsquo;s website. In Australia, 22% of trans and gender-diverse young people have experienced homelessness at some point, according to the Trans Pathways study (Strauss 2020). The UK&rsquo;s trans homelessness population is significantly larger than that of Australia (note that the percentages are slightly different in what they measure), but Australia isn&rsquo;t far behind in terms of general levels of discrimination and equality.</p>

<p>To conclude, I think several points I&rsquo;ve raised in this post support Faye&rsquo;s supposition. I made a distinction between&nbsp;trans issues&nbsp;and&nbsp;trans non-issues&nbsp;in the second paragraph and mentioned that trans non-issues can evolve into trans issues. Considering Faye&rsquo;s evidence, it&rsquo;s clear the process by which this occurs involves the non-issue being upheld by someone with power over a trans person. Therefore, it will continue for as long as power and wealth are distributed by any sytem of a hierarchal nature since such structures allow trans discrimination to occur between the lines and behind the scenes. I believe Faye&rsquo;s holistic idea of trans liberation should aim for more than just retiring capitalism; abolishing prisons, defunding the police, demolishing the patriarchy, and dismantling the gender binary must, I think, all be central goals of the trans liberation movement as well. Finally, I&rsquo;d like to point out that I have not suggested an alternative system to capitalism in this post. This was intentional as it may be the subject of a future essay.</p>

<h2>References</h2>

<ol>
	<li>Bretherton, I., Thrower, E., Zwickl, S., Wong, A., Chetcuti, D., Grossmann, M., Zajac, J. D., &amp; Cheung, A. S. (2021). The Health and Well-Being of Transgender Australians: A National Community Survey.&nbsp;<em>LGBT Health</em>,&nbsp;<em>8</em>(1), 42&ndash;49.&nbsp;<a href="https://doi.org/10.1089/lgbt.2020.0178">https://doi.org/10.1089/lgbt.2020.0178</a></li>
	<li>Faye, S. (2022).&nbsp;<em>The Transgender Issue: An Argument for Justice</em>. Penguin Books.</li>
	<li><em>Labour Force, Australia, February 2021</em>. (2021, March 18). Australian Bureau of Statistics.&nbsp;<a href="https://www.abs.gov.au/statistics/labour/employment-and-unemployment/labour-force-australia/feb-2021#:~:text=Media">https://www.abs.gov.au/statistics/labour/employment-and-unemployment/labour-force-australia/feb-2021#:~:text=Media</a> releases-</li>
	<li>Strauss, P., Cook, A., Winter, S., Watson, V., Wright Toussaint, D., &amp; Lin, A. (2020). Associations between negative life experiences and the mental health of trans and gender diverse young people in Australia: Findings from Trans Pathways.&nbsp;<em>Psychological Medicine,</em>&nbsp;<em>50</em>&nbsp;(5), 808-817. doi:10.1017/S0033291719000643</li>
	<li>Zwickl, S., Wong, A. F. Q., Dowers, E., Leemaqz, S. Y.-L., Bretherton, I., Cook, T., Zajac, J. D., Yip, P. S. F., &amp; Cheung, A. S. (2021). Factors associated with suicide attempts among Australian transgender adults.&nbsp;<em>BMC Psychiatry</em>,&nbsp;<em>21</em>(1).&nbsp;<a href="https://doi.org/10.1186/s12888-021-03084-7">https://doi.org/10.1186/s12888-021-03084-7</a></li>
</ol>
  `]
)
