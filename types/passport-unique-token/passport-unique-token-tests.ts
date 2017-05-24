
/**
 * Created by briman0094 <https://github.com/briman0094>.
 * Based on passport-local tests by Maxime LUCE <https://github.com/SomaticIT>.
 */

import express = require("express");
import passport = require('passport');
import uniqueToken = require('passport-unique-token');

//#region Test Models
interface IUser {
    uniqueToken: string;
}

class User implements IUser {
    public uniqueToken: string;

    static findOne(user: IUser & any, callback: (err: Error, user: User) => void): void {
        callback(null, new User());
    }

    verifyPassword(password: string): boolean {
        return true;
    }
}
//#endregion

// Sample from https://github.com/Lughino/passport-unique-token
passport.use(new uniqueToken.Strategy((token: string, done: any) => {
    User.findOne({ uniqueToken: token, expireToken: { $gt: Date.now() } }, function (err, user) {
        if (err) {
            return done(err);
        }

        if (!user) {
            return done(null, false);
        }

        return done(null, user);
    });
}));

passport.use(new uniqueToken.Strategy({ tokenField: "q", passReqToCallback: true }, (req: express.Request, token: string, done: any) => {
    User.findOne({ uniqueToken: token }, function (err, user) {
        if (err) {
            return done(err);
        }

        if (!user) {
            return done(null, false);
        }

        return done(null, user);
    });
}));

// Sample from https://github.com/Lughino/passport-unique-token#authenticate
var app = express();

app.post('/login', authenticate, (req, res) => {
    res.redirect('/');
});

function authenticate(req, res, next) {
    passport.authenticate('token', function (err, user, info) {
        if (err) {
            return next(err);
        }

        if (!user) {
            res.status(401).json({message: "Incorrect token credentials"});
        }

        req.user = user;
        next();
    });
}