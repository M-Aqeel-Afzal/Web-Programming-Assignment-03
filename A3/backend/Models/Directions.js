const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let directionsSchema = new Schema({
  dir: {
    type: String
  }
}, {
    collection: 'Directions',
    versionKey: false //here
  })
module.exports = mongoose.model('Directions', directionsSchema)