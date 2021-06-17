import mongoose from 'mongoose';
const { Schema } = mongoose;

// device schema to be used to create devices
const deviceSchema = new Schema({
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

export const Device = mongoose.model('Device', deviceSchema);
