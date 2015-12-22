/**
 * Created by kimhsiao on 2015/12/23.
 */
'use strict';

const path = require('path');

function config() {
  const data = {
    /** time format **/
    time: {
      log       : 'DD/MMM/YYYY HH:mm:ss',  /** 06/Nov/2015 10:20:30 **/
      day       : 'YYYY-MM-DD',  /** 2015/11/06 **/
      human     : 'YYYY/MM/DD HH:mm:ss',  /** 2015/02/06 10:20:30 **/
      detail    : 'YYYY/MM/DD HH:mm:ss.SSS Z'  /** 2015/11/06 10:20:30.567 EST **/
    },

    server: {
      host: '0.0.0.0',
      port: 3040
    }
  };

  const root = path.join(__dirname, '..');

  data.dir = {
    root      : root,
    config    : path.join(root, 'config'),
    libs      : path.join(root, 'libs'),
    logs      : path.join(root, 'logs'),
    model     : path.join(root, 'model'),
    route     : path.join(root, 'route'),
    tools     : path.join(root, 'tools'),
    view      : path.join(root, 'view')
  };

  return data;
}

module.exports = config();
