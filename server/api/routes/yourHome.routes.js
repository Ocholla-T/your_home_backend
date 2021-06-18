import {
  listAllDevices,
  readOneDevice,
  createDevice,
  deleteOneDevice,
} from '../controller/device.controller.js';

export default (app) => {
  app.route('/').get(listAllDevices).get(readOneDevice).post(createDevice).delete(deleteOneDevice);
};
