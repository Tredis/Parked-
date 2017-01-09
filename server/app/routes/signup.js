const express = require('express');
const router = express.Router();
const db = require('../../db/models');

router.post('/', function (req, res, next) {
  db.User.create(req.body)
  .then(user => {
    if (!user) res.sendStatus(401)
    else {
      req.session.userId = user.id;
      res.json(user);
    }
  })
  .catch(next);
});


module.exports = router;