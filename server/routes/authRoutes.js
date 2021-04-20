import express from 'express'
import passport from 'passport'

const authRouter = express.Router()

authRouter.route('/auth/github').get(passport.authenticate('github'))

authRouter.route('/auth/facebook').get(passport.authenticate('facebook'))

authRouter
  .route('/auth/github/callback')
  .get(
    passport.authenticate('github', { failureRedirect: '/auth/error' }),
    function (req, res) {
      res.redirect('/api/users/user')
    },
  )
authRouter
  .route('/auth/facebook/callback')
  .get(
    passport.authenticate('facebook', { failureRedirect: '/auth/error' }),
    function (req, res) {
      res.redirect('/api/users/user')
    },
  )
authRouter.route('/auth/error').get((req, res) => res.send('Unknown Error'))
export default authRouter
