/**
 * Create by AylaJK on 05/05/2018
 */
import express = require('express');
import passport = require('passport');
import rememberme = require('passport-remember-me-extended');

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

passport.use(new rememberme.Strategy({
        key: 'remember-me',
        cookie: {
            path: '/',
            httpOnly: true,
            maxAge: 604800000,
        },
        passReqToCallback: true,
    },
    (req: express.Request, token: any, done: (err: any, user?: any) => void) => {
        Token.consume(token, (err, user) => {
            if (err) done(err);
            else if (!user) done(null, false);
            else done(null, user);
        });
    },
    (req: express.Request, user: any, done: (err: any, token?: any) => void) => {
        const token = { id: 'token' };
        Token.save(token, { userId: user.id }, (err) => {
            if (err) done(err);
            else done(null, token);
        });
    }
));

const app = express();
app.use(passport.authenticate('remember-me'));
