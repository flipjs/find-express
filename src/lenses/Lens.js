import mongoose from 'mongoose'

const Schema = mongoose.Schema

const lensSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  cameras: [{
    type: Schema.ObjectId,
    ref: 'Camera'
  }],

  active: {
    type: Boolean,
    default: true
  },

  notes: {
    type: String
  }
})

export default mongoose.model('Lens', lensSchema)
