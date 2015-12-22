/**
 * Created by kimhsiao on 2015/12/23.
 */
'use strict';

const express    = require('express');
const router     = express.Router();

router
  .get('/', (req, res, next) => {
    res.send('Hello WWWWorld');
  });

app.use('/', router);
