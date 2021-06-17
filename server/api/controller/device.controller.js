import { Device } from '../models/device.model';

export const listAllDevices = (req, res) => {
  const allDevices = await Device.find({}).catch((error) => console.error(error));

  res.json(allDevices);
};

export const readOneDevice = (req, res) => {
  const device = await Device.findById(id).catch((error) => console.error(error));

  res.json(device);
};

export const createDevice = (req, res) => {
  const device = new Device({
    device: req.body.device,
    buyingPrice: req.body.buyingPrice,
    averageLifespan: req.body.averageLifespan,
    yearsInUse: req.body.yearsInUse,
  });

  const newDevice = await device.save().catch((error) => console.error(error));
  res.json(newDevice);
};

export const deleteOneDevice = (req, res) => {
  await Device.deleteOne({ _id: req.body.device.id }).catch((error) => console.error(error));
};
