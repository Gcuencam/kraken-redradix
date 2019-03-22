const express = require('express');
const _ = require('lodash');
const config = require('config');
const vhost = require('vhost');
const colors = require('colors');

const app = express();

const port = config.get('port');
const domain = config.get('domain');
const apps = _.keys(config.get('apps')) || [];

// const common = require('./common/routes');

for (let i = 0; i < apps.length; i++) {
  let pathApp = apps[i];
  let appValue = config.get(`apps.${pathApp}`);
  let host = `${appValue}.${domain}`;
  const subApp = require(`./apps/${pathApp}/app.js`);
  subApp.init(appValue, app);
  app.use(vhost(host, subApp.app))
}

// app.use(common);

app.listen(port, () => {
  for (let i = 0; i < apps.length; i++) {
    let pathApp = apps[i];
    let appValue = config.get(`apps.${pathApp}`);
    let host = `http://${appValue}.${domain}:3008`;
    console.log(`${host.green} is running in process number ${process.env.pm_id}!`);
  }
});

exports.default = app;