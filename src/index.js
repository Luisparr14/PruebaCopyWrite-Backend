const express = require('express')
const indexRouter = require('./routes')
const cors = require('cors')
const app = express()
const corsOptins = {
  origin: '*'
}

app.set('port', 3001)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', cors(corsOptins), indexRouter)

module.exports = app