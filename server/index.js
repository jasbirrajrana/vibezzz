import express from 'express'
import dotenv from 'dotenv'
import chalk from 'chalk'
import cors from 'cors'
import passport from 'passport'
import { createServer } from 'http'
import { Server } from 'socket.io'
import redis from 'redis'
import connectRedis from 'connect-redis'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import './auth/github-auth.js'
import './auth/facebook-auth.js'
import { addUser, getUser, getUserInRoom, removeUser, users } from './user.js'
import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRoutes.js'
dotenv.config()

const PORT = process.env.PORT || 5000
let redisClient = redis.createClient(
  process.env.REDISCACHEPORT,
  process.env.REDISCACHEHOSTNAME,
  {
    auth_pass: process.env.REDISCACHEKEY,
    tls: process.env.REDISCACHEHOSTNAME,
  },
)
let RedisStore = connectRedis(session)
const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

app.use(
  session({
    name: 'oauth-session',
    store: new RedisStore({
      client: redisClient,
      disableTouch: true,
    }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 * 10 },
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    saveUninitialized: false,
    resave: false,
    secret: process.env.SESSION_SECRET,
  }),
)

app.use(passport.initialize())
app.use(passport.session())
app.use(authRouter)
app.use(userRouter)
app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

// server side event
io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, cb) => {
    const { error, user } = addUser({
      id: socket.id,
      name,
      room,
    })
    if (error) return cb(error)
    socket.emit('message', {
      user: 'Admin',
      text: `${user.name} welcome inside ${user.room}'s room`,
    })
    socket.broadcast
      .to(user.room)
      .emit('message', { user: 'Admin', text: `${user.name} has joined!` })

    socket.join(user.room)
    cb()
  })
  socket.on('sendMessage', (message, cb) => {
    const user = getUser(socket.id)
    io.to(user.room).emit('message', { user: user.name, text: message })
    cb()
  })

  console.log('we have a new connection')

  socket.on('error', (error) => {
    console.log(error)
  })
  socket.on('disconnect', () => {
    console.log('user has left')
  })
})
httpServer.listen(PORT, () => {
  console.log(
    chalk.yellow.bold(
      `⚡️ app is in ${process.env.NODE_ENV} mode up on ${PORT} `,
    ),
  )
})
