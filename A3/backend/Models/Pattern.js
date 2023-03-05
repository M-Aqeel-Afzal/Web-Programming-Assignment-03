const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let pointSchema = new Schema({
  seq: {
    type: Number
  },
  lat: {
    type: String
  },
  lon: {
    type: String
  },
  typ: {
    type: String
  },
  stpid: {
    type: String
  },
  stpnm: {
    type: String
  },
  pdist: {
    type: String
  }
})


let patternSchema = new Schema({
  pid: {
    type: String
  },
  ln: {
    type: String
  },
  rtdir: {
    type: String
  },
  pt: {
    type: pointSchema
  }
}, {
    collection: 'Pattern',
    versionKey: false //here
  })
module.exports = mongoose.model('Pattern', patternSchema)