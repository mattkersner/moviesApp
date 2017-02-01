const express = require('express');
const router = express.Router();
const moment = require('moment');

const authHelpers = require('../auth/auth-helpers');

router.get('/', authHelpers.loginRequired, (req, res, next) => {
  res.render('user/index', {
    user: req.user.dataValues,
    moment: moment
  });
});

module.exports = router;
