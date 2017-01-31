var express = require('express');
var router = express.Router();
var models = require('../db/models/index');

router.get('/', function(req, res, next) {
  models.Movie.findAll({}).then(function(movies) {
    res.render('movies', {
      title: movies
    });
  });
});

module.exports = router;
