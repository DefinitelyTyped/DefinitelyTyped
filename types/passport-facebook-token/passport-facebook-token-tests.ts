import * as express from 'express';
import * as passport from 'passport';
import PassportFacebookToken = require('passport-facebook-token');

const User = {
    findOrCreate(id: string, provider: string, callback: (err: any, user: any) => void): void {
        callback(null, { username: 'ray' });
    }
};

const options: PassportFacebookToken.StrategyOptions = {
    clientID: 'TEST_CLIENT_ID',
    clientSecret: 'TEST_CLIENT_SECRET'
};

const optionsWithFbGraphVersion: PassportFacebookToken.StrategyOptions = {
    clientID: 'TEST_CLIENT_ID',
    clientSecret: 'TEST_CLIENT_SECRET',
    fbGraphVersion: 'v3'
};

const optionsWithRequest: PassportFacebookToken.StrategyOptionsWithRequest = {
    clientID: 'TEST_CLIENT_ID',
    clientSecret: 'TEST_CLIENT_SECRET',
    passReqToCallback: true
};

const verify: PassportFacebookToken.VerifyFunction =
    (accessToken: string, refreshToken: string, profile: PassportFacebookToken.Profile, done: (err: any, user?: any, info?: any) => void) => {
    User.findOrCreate(profile.id, profile.provider, (err, user) => {
        if (err) {
            done(err);
        }
        done(null, user);
    });
};

const verifyWithRequest: PassportFacebookToken.VerifyFunctionWithRequest =
    (req: express.Request, accessToken: string, refreshToken: string, profile: PassportFacebookToken.Profile, done: (err: any, user?: any, info?: any) => void) => {
    User.findOrCreate(profile.id, profile.provider, (err, user) => {
        if (err) {
            done(err);
        }
        done(null, user);
    });
};

passport.use(new PassportFacebookToken(options, verify));
passport.use(new PassportFacebookToken(optionsWithFbGraphVersion, verify));
passport.use(new PassportFacebookToken(optionsWithRequest, verifyWithRequest));
