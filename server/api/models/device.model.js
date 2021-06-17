const mongoose = require('mongoose');

// device schema to be used to create devices
const deviceSchema = new mongoose.Schema({
  device: {
    type: String,
    required: [true, 'Please enter your device'],
  },
  buyingPrice: {
    type: Number,
    required: [true, 'Please enter the price of your device'],
  },
  averageLifespan: {
    type: Number,
    required: [true, 'Please enter the expected lifespan of your device'],
  },
  yearsInUse: {
    type: Number,
    required: [true, 'Please enter the number of years your device has been in use'],
  },
});

module.exports = mongoose.model('Device', deviceSchema);
