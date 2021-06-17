const mongoose = require('mongoose');
const Devices = mongoose.model('Devices');

exports.list_all_devices = (req, res) => {
  Devices.find(async (err, device) => {
    try {
      await res.json(device);
    } catch (error) {
      console.error('Error finding devices:', error);
      res.send(error);
    }
  });
};
