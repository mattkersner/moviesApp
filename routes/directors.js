const express = require('express');
const router = express.Router();
const models = require('../db/models/index');

/* GET directors listing. */
router.get('/', function(req, res, next) {
  models.Director.findAll({})
  .then(function(data) {
    res.render('directors/index', {
      title: 'Directors',
      directors: data
    });
  });
});

/* Render director profile */
router.get('/:id', function(req, res, next) {
  models.Director.findById(req.params.id).then(function(data) {
    res.render('directors/director', {
      title: 'Director Profile',
      director: data
    });
  });
});

/* Render edit profile */
router.get('/:id/edit', function(req, res, next) {
  models.Director.findById(req.params.id).then(function(data) {
    res.render('directors/edit', {
      title: 'Edit Director',
      director: data
    });
  });
});

/* PUT edit changes into directors model */
router.put('/:id', function(req, res, next) {
  models.Director.update({
    name: req.body.name
  }, { where: {id: req.params.id } }).then(function() {
    res.redirect('/directors/' + req.params.id);
  });
});


module.exports = router;
