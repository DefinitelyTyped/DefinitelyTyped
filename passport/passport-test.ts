/// <reference path="passport.d.ts" />
/// <reference path="../express/express.d.ts" />

import express = require('express');
import passport = require('passport');

class TestStrategy implements passport.Strategy {
  public name: string = 'test';
  constructor() {}
  authenticate(req: passport.Request) {}
}

passport.use(new TestStrategy());
passport.framework('test');
passport.serializeUser((user, done) => {});
passport.deserializeUser((id, done) => {});

passport.use(new TestStrategy())
  .unuse('test')
  .use(new TestStrategy())
  .framework('test-fw');


var app = express();
app.configure(() => {
  app.use(passport.initialize());
  app.use(passport.session());
});

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
  function(req, res) {
    res.redirect('/');
  });

app.post('/login', function(req: passport.Request, res: passport.Response, next: (err?: any) => void) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err) }
    if (!user) {
      req.session.error = info.message;
      return res.redirect('/login')
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/users/' + user.username);
    });
  })(req, res, next);
});

app.get('/logout', function(req: passport.Request, res: passport.Response) {
  req.logout();
  res.redirect('/');
});

function ensureAuthenticated(req: passport.Request, res: passport.Response, next: (err?: any) => void) {
  if (req.isAuthenticated()) { return next(); }
  if (req.isUnauthenticated()) {
    res.redirect('/login');
  }
}

