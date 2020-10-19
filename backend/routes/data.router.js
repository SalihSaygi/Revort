const express = require('express')
const dataRouter = express.Router()

const userRouter = require('./user.route')
const reportRouter = require('./report.route')

dataRouter.use('/users', userRouter)
dataRouter.use('/reports', reportRouter)

module.exports = dataRouter