var express = require('express');
var passport = require('passport');
var User = require('../models/User');
var router = express.Router();

function sessionNew  (req, res) {
  res.render('auth/login', {user : req.user});
};

function sessionCreate (req,res) {passport.authenticate,
  'local'}
  {
    failureRedirect: '/login'
  }
  function sessionCreate (req, res, next) {
    req.session.save(function (err) {
      if (err) return next(err);
      res.redirect('/');
    });
  };

function sessionDelete  (req, res) {
  req.logout();
  res.redirect('/');
};

function sessionShow (req, res) {isLoggedIn,
  res.render('secret', {user: req.user});
};

function isLoggedIn (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
}

module.exports = {
  sessionsIndex: sessionNew,
  sessionsCreate: sessionCreate,
  sessionsShow:   sessionShow,
  sessionsIndex:  sessionDelete
};
