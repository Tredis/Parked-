const express = require('express');
const router = express.Router();
const db = require('../../db/models');

router.get('/', function (req, res, next) {
  db.User.findOne(req.body)
  .then(function (user) {
    if (!user) res.sendStatus(401)
    else {
      req.session.userId = user.id;
      res.json(user);
    }
  })
  .catch(next);
});


module.exports = router;