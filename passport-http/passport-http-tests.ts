/// <reference path="./index.d.ts"/>

/**
 * Created by Christophe Vidal <https://github.com/krizalys>
 */

import passport = require("passport");
import http = require("passport-http");

interface IUser {
    username: string;
    password?: string;
}

class User {
    public password: string;

    static findOne(user: IUser, callback: (error: Error, user: User) => void): void {
        callback(null, new User());
    }
}

function validateNonce(nonce: string) {
}

function validateParams(nonce: string, cnonce: string, nc: number, opaque: string) {
}

passport.use(new http.BasicStrategy((username: string, password: string, done: any) => {
    User.findOne({
        username: username,
        password: password,
    }, (error, user) => {
        if (error) {
            return done(error);
        }

        if (!user) {
            return done(null, false);
        }

        done(null, user);
    });
}));

passport.use(new http.BasicStrategy({
    realm: "User",
    passReqToCallback: true,
}, (username: string, password: string, done: any) => {
    User.findOne({
        username: username,
        password: password,
    }, (error, user) => {
        if (error) {
            return done(error);
        }

        if (!user) {
            return done(null, false);
        }

        done(null, user);
    });
}));

passport.use(new http.DigestStrategy((username: string, done: any) => {
    User.findOne({username: username}, (error, user) => {
        if (error) {
            return done(error);
        }

        if (!user) {
            return done(null, false);
        }

        done(null, user, user.password);
    });
}));

passport.use(new http.DigestStrategy((username: string, done: any) => {
    User.findOne({username: username}, (error, user) => {
        if (error) {
            return done(error);
        }

        if (!user) {
            return done(null, false);
        }

        done(null, user, user.password);
    });
}, (params: http.DigestValidateOptions, done: any) => {
    validateParams(params.nonce, params.cnonce, params.nc, params.opaque);
    done(null, true);
}));

passport.use(new http.DigestStrategy({
    realm: "User",
    domain: "example.com",
    opaque: "OpAqUeStRiNg",
    algorithm: "MD5",
    qop: "auth",
}, (username: string, done: any) => {
    User.findOne({username: username}, (error, user) => {
        if (error) {
            return done(error);
        }

        if (!user) {
            return done(null, false);
        }

        done(null, user, user.password);
    });
}));

passport.use(new http.DigestStrategy({
    realm: "User",
    domain: "example.com",
    opaque: "OpAqUeStRiNg",
    algorithm: "MD5",
    qop: "auth",
}, (username: string, done: any) => {
    User.findOne({username: username}, (error, user) => {
        if (error) {
            return done(error);
        }

        if (!user) {
            return done(null, false);
        }

        done(null, user, user.password);
    });
}, (params: http.DigestValidateOptions, done: any) => {
    validateParams(params.nonce, params.cnonce, params.nc, params.opaque);
    done(null, true);
}));
