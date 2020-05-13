const mongoose = require('mongoose')
const Author = require('./author')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  author:{
    type: mongoose.Schema.Types.ObjectId,
    ref: Author,
    required: true
  },
  content: {
    type: String,
    required: true, 
    minlength: 50,
    maxlength: 1200
  },
  contentLength: {
    type: Number,
    required: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  similarPosts:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'post'
  }]
}, {timestamps: true})

module.exports = mongoose.model('post', postSchema)
