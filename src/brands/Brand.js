import mongoose from 'mongoose'

const Schema = mongoose.Schema

const brandSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  type: {
    type: Schema.ObjectId,
    ref: 'Type'
  },

  format: {
    type: Schema.ObjectId,
    ref: 'Format'
  }
})

export default mongoose.model('Brand', brandSchema)
