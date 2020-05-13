const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const connect = (url) => mongoose.connect(url, {poolSize: 100,bufferMaxEntries: 10, reconnectTries: 5000, useNewUrlParser: true,useUnifiedTopology: true});

module.exports = connect
