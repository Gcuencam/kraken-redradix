const express = require('express');
const api = express.Router();

const common = require('../../common/routes');

api.route('/api/v1/hello').get((req, res) => {
  res.send('Hello Admin!');
});

api.route('/api/v1/manazas').get((req, res) => {
  /* Force to break. */
  setTimeout(() => {
    console.log(`I'M THE PROCESS NUMBER ${process.env.pm_id}.`);
    console.log(y.hola);
  }, Math.floor(Math.random() * 10000));
  res.send("La voy a joder...");
});

api.use(common);

module.exports = api;