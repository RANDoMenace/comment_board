var express = require('express');
var passport = require('passport');
var User = require('../models/User');
var router = express.Router();
var usersController = require('../controllers/usersController');
var sessionsController = require('../controllers/sessionsController');
var commentsController = require('../controllers/commentsController');

router.get('/', function (req, res) {
  res.render('index', {user: req.user});
});

router.get('/login', sessionsController.sessionNew);
router.post('/login', sessionsController.sessionCreate);
router.get('/logout', sessionsController.sessionDelete);
router.get('/secret', sessionsController.sessionShow);

router.get('/register', usersController.userNew);
router.post('/register', usersController.userCreate);
module.exports = router;

