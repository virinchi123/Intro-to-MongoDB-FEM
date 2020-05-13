const mongoose = require('mongoose')
const Project = require('./project')
const cdnUrl = 'https://cdn.adminapp.com'
const fs = require('fs')

const orgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  subscription: {
    status: {
      type: String,
      required: true,
      default: 'active',
      enum: ['active', 'trialing', 'overdue', 'canceled']
    },
    last4: {
      type: Number,
      min: 4,
      max: 4
    }
  }
})

orgSchema.post('remove',async function(doc,next){
  let data= await Project.find({org:doc._id}).exec();
  data=JSON.parse(JSON.stringify(data))
  let i=0;
  //fs.writeFileSync('/home/rao/Desktop/test',JSON.stringify(data))
  while(i<data.length){
    Project.findOneAndRemove({org:doc._id}).exec()
    fs.writeFileSync('/home/rao/Desktop/test',JSON.stringify(data))
    i++;
  }
  next()
})

module.exports = mongoose.model('org', orgSchema)
