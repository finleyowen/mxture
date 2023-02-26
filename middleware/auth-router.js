const { Profile } = require('../service/mongo')
const passport = require('../service/passport')

const auth = require('express').Router()

auth.get('/', (req, res) => {
    res.render('auth/login')
})
auth.post('/', passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/auth/signup'
}))
auth.get('/signup', (req, res) => {
    res.render('auth/signup')
})
auth.post('/signup', (req, res) => {
    if (req.body.password !== req.body.confirm_password) {
        res.render('msg', {
            mainMsg: 'Passwords did not match',
            details: 'Please try again.'
        })
    } else {
        console.log(req.body)
        new Profile({...req.body})
            .save()
            .then(() => {
                res.render('msg', {
                    mainMsg: 'Sign up successful',
                    details: 'Please log in using your new credentials',
                    links: [['Log in', '/auth']]
                })
            })
            .catch(err => {
                console.log(err)
                if (err.code == 11000) {
                    if (err.keyPattern.username == 1) {
                        res.render('msg', {
                            mainMsg: 'Username taken',
                            details: 'Sorry. Please try another one'
                        })
                    } else if (err.keyPattern.contact_email == 1) {
                        res.render('msg', {
                            mainMsg: 'An account exists with that email',
                            details: 'If you already have an account, log in instead',
                        })
                    }
                }
            })
    }
})
auth.post('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err)
            res.render('msg', { mainMsg: 'Logout error', details: 'This may be an error on our end. Try again later.' })
        }
        res.redirect('/')
    })
})

module.exports = auth