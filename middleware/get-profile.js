const { Profile } = require("../service/mongo")

module.exports = function (req, res, next) {
    var { username } = req.params
    Profile.findOne({ username }, 'display_name descriptors bio website username').then(profile => {
        console.log(profile)
        res.locals.profile = profile
        res.render('profile-view')
    })
}