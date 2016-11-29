import mongoose from 'mongoose'

const Schema = mongoose.Schema

const filmSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  catalog: {
    type: String,
    required: true
  },

  brand: {
    type: Schema.ObjectId,
    ref: 'Brand'
  },

  camera: {
    type: Schema.ObjectId,
    ref: 'Camera'
  },

  lens: {
    type: Schema.ObjectId,
    ref: 'Lens'
  },

  start_date: {
    type: String
  },

  finish_date: {
    type: String
  },

  develop_date: {
    type: String
  },

  develop_notes: {
    type: String
  },

  scan_date: {
    type: String
  },

  scan_notes: {
    type: String
  }
})

export default mongoose.model('Film', filmSchema)
