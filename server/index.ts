import express from 'express'
import dotenv from 'dotenv'
import chalk from 'chalk'

dotenv.config()
const PORT = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world!!')
})
app.listen(PORT, () => {
  console.log(chalk.yellow.bold(`⚡️ app is in ${process.env.NODE_ENV} mode up on ${PORT} `))
})
