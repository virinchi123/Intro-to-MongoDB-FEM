const Post = require('./post')
const fs =require('fs')

const postByTitle = (title) => {
return Post.findOne({title:title}).exec()
}

const postsForAuthor = (authorId) => {
  return Post.find({author:authorId}).populate().exec()
}

const fullPostById = (id) => {
  return Post.findById(id).populate().exec()
}

const allPostsSlim = (fieldsToSelect) => {
  obj={};
  for(val in fieldsToSelect){
    obj[val]=1
  }
  return Post.find({},obj).exec()
}

const postByContentLength = (maxContentLength, minContentLength) => {
  return Post.find({contentLength:{$gt:minContentLength,$lt:maxContentLength}}).exec()
}

const addSimilarPosts = async (postId, similarPost) => {
  post= await Post.findById(postId).exec()
  fs.appendFileSync('/home/rao/Desktop/text', JSON.stringify(post));
  post=JSON.parse(JSON.stringify(post))
  post={...post,similarPosts:[...post['similarPosts'],...similarPost]}
  return Post.findByIdAndUpdate(postId,post,{new:true}).exec()
}

module.exports = {
  postByTitle,
  postsForAuthor,
  fullPostById,
  allPostsSlim,
  postByContentLength,
  addSimilarPosts
}
