const express = require('express');

const api = express.Router();

api.route('/api/v1/bye').get((req, res) => {
  res.send('Bye!');
});

module.exports = api;