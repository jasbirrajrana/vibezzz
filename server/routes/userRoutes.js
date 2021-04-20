import express from 'express'
import passport from 'passport'

const userRouter = express.Router()
userRouter.route('/api/users/user').get((req, res) => res.json(req.user))
export default userRouter
