/**
 * Created by kimhsiao on 2015/12/23.
 */
'use strict';

const express         = require('express');
const app             = express();
const moment = require('moment');
const errorhandler    = require('errorhandler');

const conf       = require('./config');

/** global variable **/
global.app     = app;
global.conf    = conf;

/** special handler **/
if ('development' === process.env.NODE_ENV) {
  app.use(errorhandler());
}

/** router handler **/
require('./route');

app.listen(conf.server.port, conf.server.host, (cb) => {
  console.log('Server is running and listen %s:%s', conf.server.host, conf.server.port);
});
