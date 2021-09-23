const express = require('express')
const route = express.Router()
const userRouter = require('./user')
const historyRouter = require('./history')
route
  .use('/user', userRouter)
  .use('/history', historyRouter)

module.exports = route