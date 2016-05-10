
/// <reference types="express-session" />

import express = require('express');
import session = require('express-session');
import cookieParser = require('cookie-parser');
import easySession = require('easy-session'); // Require the module : line 1

var app = express();

app.use(cookieParser('secreet'));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use(easySession.main(session));

app.get('/login', function (req, res, next) {
    req.session.login('user', {email: 'email'}, function (err) {
        if(err) {
            res.send(500);
            return;
        }
        res.send(200);
    });
});

app.post('/logout', function (req, res, next) {
    req.session.logout(function (err) {
        if(err) {
            res.send(500);
            return;
        }
        res.send(200);
    });
});

app.get('/isloggedin', function (req, res, next) {
    res.send(req.session.isLoggedIn('user'));
});

app.get('/isfresh', function (req, res, next) {
    res.send(req.session.isFresh());
});

app.get('/hasrole', function (req, res, next) {
    res.send(req.session.hasRole('user'));
});

app.post('/setrole', function (req, res, next) {
    req.session.setRole(req.query.role);
    res.send(200);
});

app.get('/getrole', function (req, res, next) {
    res.send(req.session.getRole());
});

app.use(easySession.isLoggedIn());
app.use(easySession.isFresh());
app.use(easySession.checkRole('user'));