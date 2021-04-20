import passport from 'passport'
import * as githubAuth from 'passport-github2'
import dotenv from 'dotenv'
dotenv.config()

const githubStrategy = githubAuth.Strategy

passport.serializeUser((user, done) => {
  done(null, user)
})
passport.deserializeUser((user, done) => {
  done(null, user)
})

passport.use(
  new githubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/auth/github/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, { profile, accessToken, refreshToken })
    },
  ),
)
