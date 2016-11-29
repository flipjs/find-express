import mongoose from 'mongoose'

const Schema = mongoose.Schema

const typeSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

export default mongoose.model('Type', typeSchema)
