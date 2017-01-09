'use strict';
/* eslint-disable new-cap */

const router = require('express').Router();
module.exports = router;

router.use('/segs', require('./segs'));
router.use('/signup', require('./signup'));
router.use('/login', require('./login'));

router.use(function (req, res) {
  res.status(404).end();
});