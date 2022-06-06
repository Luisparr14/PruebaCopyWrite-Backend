const express = require('express')
const indexRouter = require('./routes')
const app = express()

app.set('port', 8080)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', indexRouter)

module.exports = app