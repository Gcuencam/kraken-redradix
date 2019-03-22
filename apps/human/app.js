const express = require('express');
const subdomain = require('express-subdomain');

const appRoutes = require('./routes.js');

const app = express();

module.exports.init = (appName) => {
  app.use(subdomain(appName, appRoutes));
}

exports.app = app;