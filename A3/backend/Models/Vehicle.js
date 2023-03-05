const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let vehicleSchema = new Schema({
  vid: {
    type: String
  },
  tmstmp: {
    type: String
  },
  lat: {
    type: String
  },
  lon: {
    type: String
  },
  hdg: {
    type: String
  },
  pid: {
    type: String
  },
  rt: {
    type: String
  },
  des: {
    type: String
  },
  pdist: {
    type: String
  },
  dly: {
    type: String
  },
  tatripid: {
    type: String
  },
  origtatripno: {
    type: String
  },
  tablockid: {
    type: String
  },
  zone: {
    type: String
  }
}, {
    collection: 'Vehicle',
    versionKey: false //here
  })
module.exports = mongoose.model('Vehicle', vehicleSchema)