/**
 * Created by briman0094 <https://github.com/briman0094>.
 * Based on passport-local tests by Maxime LUCE <https://github.com/SomaticIT>.
 */

import express = require("express");
import passport = require("passport");
import uniqueToken = require("passport-unique-token");

//#region Test Models
interface BaseUser {
    uniqueToken: string;
}

class User implements BaseUser {
    uniqueToken: string;

    static findOne(user: BaseUser & any, callback: (err: Error | null, user: User) => void): void {
        callback(null, new User());
    }

    verifyPassword(password: string): boolean {
        return true;
    }
}
//#endregion

// Sample from https://github.com/Lughino/passport-unique-token
passport.use(new uniqueToken.Strategy((token: string, done: any) => {
    User.findOne({
        uniqueToken: token,
        expireToken: {
            $gt: Date.now()
        }
    }, (err, user) => {
        if (err) {
            return done(err);
        }

        if (!user) {
            return done(null, false);
        }

        return done(null, user);
    });
}));

passport.use(new uniqueToken.Strategy({
    tokenField: "q",
    passReqToCallback: true
}, (req: express.Request, token: string, done: any) => {
    User.findOne({
        uniqueToken: token
    }, (err, user) => {
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
const app = express();

app.post('/login', authenticate, (req, res) => {
    res.redirect('/');
});

function authenticate(req: express.Request, res: express.Response, next: express.NextFunction) {
    passport.authenticate('token', (err: any, user: any, info: any) => {
        if (err) {
           next(err);
           return;
        }

        if (!user) {
            res.status(401).json({
                message: "Incorrect token credentials"
            });
        }

        req.user = user;
        next();
    });
}
