const express = require('express');
const api = express.Router();

api.route('/api/v1/hello').get((req, res) => {
  res.send('Hello Human!');
});

module.exports = api;