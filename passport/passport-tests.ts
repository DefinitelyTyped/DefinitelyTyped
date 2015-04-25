/// <reference path="passport.d.ts" />
/// <reference path="../express/express.d.ts" />
/// <reference path="../express-session/express-session.d.ts" />

import express = require('express');
import passport = require('passport');

class TestStrategy implements passport.Strategy {
  public name: string = 'test';
  constructor() {}
  authenticate(req: express.Request) {}
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

app.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err: any, user: { username: string; }, info: { message: string; }) {
    if (err) { return next(err) }
    if (!user) {
      req.session['error'] = info.message;
      return res.redirect('/login')
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/users/' + user.username);
    });
  })(req, res, next);
});

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

app.post('/auth/token', passport.authenticate(['basic', 'oauth2-client-password'], { session: false }));


function authSetting(): void {
  var authOption = {
    successRedirect: '/',
    failureRedirect: '/login',
  };
  var successCallback = (req: express.Request, res: express.Response) => {
    res.redirect('/');
  };

  app.get('/auth/facebook',
      passport.authenticate('facebook'));
  app.get('/auth/facebook/callback',
      passport.authenticate('facebook', authOption), successCallback);

  app.get('/auth/twitter',
      passport.authenticate('twitter'));
  app.get('/auth/twitter/callback',
      passport.authenticate('twitter', authOption));

  app.get('/auth/google',
      passport.authenticate('google', { scope:
        [ 'https://www.googleapis.com/auth/userinfo.profile' ] }));
  app.get('/auth/google/callback',
      passport.authenticate('google', authOption), successCallback);

}

function ensureAuthenticated(req: express.Request, res: express.Response, next: (err?: any) => void) {
  if (req.isAuthenticated()) { return next(); }
  if (req.isUnauthenticated()) {
    res.redirect('/login');
  }
}

