import passport = require('passport');
import streamlabs = require('@ottomated/passport-streamlabs');
import { Request } from 'express';

// just some test model

declare const User: { findOrCreate(streamlabsId: any, callback: (err: any, user: any) => void): void; };

passport.use(new streamlabs.Strategy(
    {
        clientID: 'clientID',
        clientSecret: 'clientSecret',
        callbackURL: 'callbackURL'
    },
    (accessToken: string, refreshToken: string, profile, cb) => {
        profile; // $ExpectType Profile
        cb; // $ExpectType VerifyCallback
        User.findOrCreate({ streamlabsId: profile.id }, cb);
    }
));

passport.use(new streamlabs.Strategy(
    {
        clientID: 'clientID',
        clientSecret: 'clientSecret',
        callbackURL: 'callbackURL',
        passReqToCallback: true
    },
    (req: Request, accessToken: string, refreshToken: string, profile, cb) => {
        profile; // $ExpectType Profile
        cb; // $ExpectType VerifyCallback
        User.findOrCreate({ streamlabsId: profile.id }, cb);
    }
));
