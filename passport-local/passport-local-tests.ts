/**
 * Created by Maxime LUCE <https://github.com/SomaticIT>.
 */

import express = require("express");
import passport = require('passport');
import local = require('passport-local');

//#region Test Models
interface IUser {
    username: string;
}

class User implements IUser {
    public username: string;
    public password: string;

    static findOne(user: IUser, callback: (err: Error, user: User) => void): void {
        callback(null, new User());
    }

    verifyPassword(password: string): boolean {
        return true;
    }
}
//#endregion

// Sample from https://github.com/jaredhanson/passport-local#configure-strategy
passport.use(new local.Strategy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
        if (err) {
            return done(err);
        }

        if (!user) {
            return done(null, false);
        }

        if (!user.verifyPassword(password)) {
            return done(null, false);
        }

        return done(null, user);
    });
}));

// Sample from https://github.com/jaredhanson/passport-local#authenticate-requests
var app = express();
app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/');
    });
