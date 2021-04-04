import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';
import cors from 'cors';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import router from './router';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
app.use(cors());
app.use(router);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
// server side event
io.on('connect', (socket: Socket) => {
  socket.on('join', (userInfo: { name: string; room: string }, callback) => {
    console.log(userInfo);
    const error = true;
    if (error) {
      callback({ error: 'error' });
    }
  });
  console.log('we have a new connection');
  socket.on('error', (error) => {
    console.log(error);
  });
});
httpServer.listen(PORT, () => {
  console.log(chalk.yellow.bold(`⚡️ app is in ${process.env.NODE_ENV} mode up on ${PORT} `));
});
