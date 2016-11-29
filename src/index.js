import bodyParser from 'body-parser'
import express from 'express'
import logger from 'morgan'
import mongoose from 'mongoose'

// local imports
import { PORT } from './config'
import cameras from './cameras'
import films from './films'
import lenses from './lenses'

// mongodb setup
mongoose.connect('mongodb://localhost/find_express')
mongoose.Promise = global.Promise

const app = express()

// middlewares
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// main
app.get('/', (req, res) => {
  const data = {hello: 'world'}
  res.json(data)
})

app.use('/api/cameras', cameras)
app.use('/api/films', films)
app.use('/api/lenses', lenses)

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}...`)
})
