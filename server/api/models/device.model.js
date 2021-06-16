const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  device: {
    type: String,
    required: 'Please enter your device',
  },
  buyingPrice: {
    type: Number,
    required: 'Please enter the price of your device',
  },
  averageLifespan: {
    type: Number,
    required: 'Please enter the expected lifespan of your device',
  },
  yearsInUse: {
    type: Number,
    required: 'Please enter the number of years your device has been in use',
  },
});

module.exports = mongoose.model('Device', deviceSchema);
