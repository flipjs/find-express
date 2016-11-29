import mongoose from 'mongoose'

const Schema = mongoose.Schema

const cameraSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  fixed_lens: {
    type: Boolean,
    default: true
  },

  lenses: [{
    type: Schema.ObjectId,
    ref: 'Lens'
  }],

  active: {
    type: Boolean,
    default: true
  },

  notes: {
    type: String
  }
})

export default mongoose.model('Camera', cameraSchema)
