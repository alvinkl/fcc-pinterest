const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  userid: String,
  image_URI: String,
  likes: Number,
  text: String,
})

module.exports = mongoose.model('Post', PostSchema)