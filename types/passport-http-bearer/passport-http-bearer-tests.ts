/**
 * Created by Isman Usoh <https://github.com/isman-usoh>.
 */

import express = require("express");
import passport = require("passport");

import Koa = require("koa");
import koaPassport = require("koa-passport");

import httpBearer = require("passport-http-bearer");

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
    User.findOne({ token: token }, function(err, user) {
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
    scope: ["read", "write"],
    realm: "User",
    passReqToCallback: true
}, function(req: express.Request, token: string, done: any) {
    User.findOne({ token: token }, function(err, user) {
        if (err) {
            return done(err, null, { message: "Access Denied" });
        }

        if (!user) {
            return done(null, false, "Access Denied");
        }

        return done(null, user);
    });
}));

passport.use(
    new httpBearer.Strategy({}, (token: string, done: any) => {
        done(null, false);
    }),
);

let app = express();
app.post("/login", passport.authenticate("bearer", { failureRedirect: "/login" }), function(req, res) {
    res.redirect("/");
});

// Test compatibility with koa-passport
koaPassport.use(new httpBearer.Strategy({
    scope: ["read", "write"],
    realm: "User",
    passReqToCallback: true
}, function(req: { ctx: Koa.Context }, token: string, done: any) {
    User.findOne({ token: token }, function(err, user) {
        if (err) {
            return done(err, null, { message: "Access Denied" });
        }

        if (!user) {
            return done(null, false, "Access Denied");
        }

        return done(null, user);
    });
}));
