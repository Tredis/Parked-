const express = require('express');
const router = express.Router();
const db = require('../../db/models');

router.get('/', function (req, res, next) {
  return db.Segment.findAll({offset: 160000, limit: 20000 })
  .then(segs => res.json(segs))
  .catch(next);
});

module.exports = router;