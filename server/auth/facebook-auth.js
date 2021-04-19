import passport from 'passport'
import * as facebookAuth from 'passport-facebook'
import dotenv from 'dotenv'

dotenv.config()

const facebookStrategy = facebookAuth.Strategy

passport.use(
  new facebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/auth/facebook/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile)
    },
  ),
)
