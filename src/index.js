import bodyParser from 'body-parser'
import express from 'express'
import logger from 'morgan'

// local imports
import { PORT } from './config'
import cameras from './cameras'
import films from './films'
import lenses from './lenses'

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

app.use('/cameras', cameras)
app.use('/films', films)
app.use('/lenses', lenses)

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}...`)
})
