const express = require('express');
var router = express.Router();
var models = require('../db/models/index');


// router.get('/', function(req, res) {
//   models.Movies.findById({})
// })

router.post('/', function(req, res, next) {
  models.Favorites.create({
    user_id: req.body.id,
    movie_id: req.body.movieId
  }).then(function() {
    res.redirect('../user');
  });
});

module.exports = router;
