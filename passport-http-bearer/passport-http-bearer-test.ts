/// <reference path="./passport-http-bearer.d.ts"/>

/**
 * Created by Isman Usoh <https://github.com/isman-usoh>.
 */

import express = require("express");
import passport = require('passport');
import httpBearer = require('passport-http-bearer');

//#region Test Models
interface IUser {
    token: string;
}

class User implements IUser {
    public token: string;

    static findOne(user: IUser, callback: (err: Error, user: User) => void): void {
        callback(null, new User());
    }
}
//#endregion

passport.use(new httpBearer.Strategy((token: string, done: any) => {
    User.findOne({ token: token }, function (err, user) {
        if (err) {
            return done(err);
        }

        if (!user) {
            return done(null, false);
        }

        return done(null, user);
    });
}));

passport.use(new httpBearer.Strategy({
    passReqToCallback: true
}, function (req, token, done) {
    User.findOne({ token: token }, function (err, user) {
        if (err) {
            return done(err);
        }

        if (!user) {
            return done(null, false);
        }

        return done(null, user);
    });
}));

var app = express();
app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function (req, res) {
  res.redirect('/');
});
