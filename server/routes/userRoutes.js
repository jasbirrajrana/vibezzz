import express from 'express'

const userRouter = express.Router()
userRouter.route('/api/users/user').get((req, res) => {
  if (!req.user) {
    throw new Error('Auth first!')
  } else {
    res.json(req.user)
  }
})
export default userRouter
