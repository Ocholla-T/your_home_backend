const express = require('express');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`tumereach`);
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
ckjasl;
