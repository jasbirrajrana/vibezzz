import express from 'express'
import dotenv from 'dotenv'
import chalk from 'chalk'
import cors from 'cors'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { addUser, getUser, getUserInRoom, removeUser, users } from './user.js'
import router from './router.js'

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)
app.use(cors())
app.use(router)
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
