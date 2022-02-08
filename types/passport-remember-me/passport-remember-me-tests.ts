/**
 * Created by AylaJK for passport-remember-me-extended on 05/05/2018
 * Modified by gristow for passport-remember-me on 1/27/2022
 */
import express = require('express');
import passport = require('passport');
import rememberme = require('passport-remember-me');

// just some test model
const Token = {
    consume(token: any, callback: (err: any, user?: any) => void): void {
        callback(null, { id: '1234', username: 'james' });
    },
    save(token: any, user: any, callback: (err: any) => void): void {
        callback(null);
    }
};

passport.use(new rememberme.Strategy(
    (token: any, done: (err: any, user?: any) => void) => {
        Token.consume(token, (err, user) => {
            if (err) done(err);
            else if (!user) done(null, false);
            else done(null, user);
        });
    },
    (user: any, done: (err: any, token?: any) => void) => {
        const token = { id: 'token' };
        Token.save(token, { userId: user.id }, (err) => {
            if (err) done(err);
            else done(null, token);
        });
    }
));

passport.use(new rememberme.Strategy({
        key: 'remember-me',
        cookie: {
            path: '/',
            httpOnly: true,
            maxAge: 604800000,
        },
    },
    (token: any, done: (err: any, user?: any) => void) => {
        Token.consume(token, (err, user) => {
            if (err) done(err);
            else if (!user) done(null, false);
            else done(null, user);
        });
    },
    (user: any, done: (err: any, token?: any) => void) => {
        const token = { id: 'token' };
        Token.save(token, { userId: user.id }, (err) => {
            if (err) done(err);
            else done(null, token);
        });
    }
));

const app = express();
app.use(passport.authenticate('remember-me'));
