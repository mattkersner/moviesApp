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

router.get('/:id', function(req, res, next) {
  models.Director.findById(req.params.id).then(function(data) {
    res.render('directors/director', {
      title: 'Director Profile',
      director: data
    });
  });
});



module.exports = router;
