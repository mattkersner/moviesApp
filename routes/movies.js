
var express = require('express');
var router = express.Router();
var models = require('../db/models/index');

router.get('/', function(req, res, next) {
  models.Movie.findAll({}).then(function(movies) {
    res.render('movies/movies', {
      movies: movies
    });
  });
});

router.get('/new', function(req, res, next) {
  res.render('movies/new', {

  });
});

router.post('/', function(req, res, next) {
  models.Movie.create({
    title: req.body.title,
    synopsis: req.body.synopsis
  }).then(function() {
    res.redirect('/movies');
  });
});

router.delete('/:id', function(req, res, next) {
  models.Movie.destroy({
    where: { id: req.params.id }
  }).then(function(movie) {
    res.redirect('/movies')
  });
});

router.get('/:id', function(req, res, next) {
  models.Movie.findById(req.params.id).then(function(movie) {
    res.render('movies/details', { movie: movie });
  });
});

router.get('/:id/edit', function(req, res, next) {
  models.Movie.findById(req.params.id).then(function(movie) {
    res.render('movies/edit', { movie: movie });
  });
});

router.put('/:id', function(req, res, next) {
  models.Movie.update({
    title: req.body.title,
    synopsis: req.body.synopsis
  }, { where: { id: req.params.id} }).then(function() {
    res.redirect('/movies/' + req.params.id);
  });
});



module.exports = router;
