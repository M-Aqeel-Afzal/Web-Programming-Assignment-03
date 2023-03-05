const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let stopSchema = new Schema({
  stpid: {
    type: String
  },
  stpnm: {
    type: String
  },
  lat: {
    type: String
  },
  lon: {
    type: String
  }
}, {
    collection: 'Stops',
    versionKey: false //here
  })
module.exports = mongoose.model('Stops', stopSchema)