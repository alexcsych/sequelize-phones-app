const express = require('express');

const app = express();

app.use(express.json());

app.use((err, req, res, next) => {
  console.log('err :>> ', err);
  res.status(500).send('Server Error');
});

module.exports = app;
