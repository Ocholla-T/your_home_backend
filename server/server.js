import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './api/routes/yourHome.routes.js';

dotenv.config();

global.Device = import('./api/models/device.model.js');
mongoose.connect('mongodb://localhost:27017/your_home_DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

routes(app);
