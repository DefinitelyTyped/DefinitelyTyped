import * as express from 'express';
import * as passport from 'passport';
import * as FacebookStrategy from 'passport-facebook-token';
// tslint:disable-next-line:no-duplicate-imports
import { StrategyOptions, StrategyOptionsWithRequest, VerifyFunction, VerifyFunctionWithRequest, Profile } from 'passport-facebook-token';

const User = {
    findOrCreate(id: string, provider: string, callback: (err: any, user: any) => void): void {
        callback(null, { username: 'ray' });
    }
};

const options: StrategyOptions = {
    clientID: 'TEST_CLIENT_ID',
    clientSecret: 'TEST_CLIENT_SECRET'
};

const optionsWithRequest: StrategyOptionsWithRequest = {
    clientID: 'TEST_CLIENT_ID',
    clientSecret: 'TEST_CLIENT_SECRET',
    passReqToCallback: true
};

const verify: VerifyFunction = (accessToken: string, refreshToken: string, profile: Profile, done: (err: any, user?: any, info?: any) => void) => {
    User.findOrCreate(profile.id, profile.provider, (err, user) => {
        if (err) {
            done(err);
        }
        done(null, user);
    });
};

const verifyWithRequest: VerifyFunctionWithRequest = (req: express.Request, accessToken: string, refreshToken: string, profile: Profile, done: (err: any, user?: any, info?: any) => void) => {
    User.findOrCreate(profile.id, profile.provider, (err, user) => {
        if (err) {
            done(err);
        }
        done(null, user);
    });
};

passport.use(new FacebookStrategy(options, verify));
passport.use(new FacebookStrategy(optionsWithRequest, verifyWithRequest));
