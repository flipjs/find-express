import mongoose from 'mongoose'

const Schema = mongoose.Schema

const formatSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

export default mongoose.model('Format', formatSchema)
