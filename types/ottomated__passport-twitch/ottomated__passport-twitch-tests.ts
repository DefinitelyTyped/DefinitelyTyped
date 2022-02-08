import passport = require('passport');
import twitch = require('@ottomated/passport-twitch');
import { Request } from 'express';

// just some test model

declare const User: { findOrCreate(twitchId: any, callback: (err: any, user: any) => void): void; };

passport.use(new twitch.Strategy(
    {
        clientID: 'clientID',
        clientSecret: 'clientSecret',
        callbackURL: 'callbackURL'
    },
    (accessToken: string, refreshToken: string, profile, cb) => {
        profile; // $ExpectType Profile
        cb; // $ExpectType VerifyCallback
        User.findOrCreate({ twitchId: profile.id }, cb);
    }
));

passport.use(new twitch.Strategy(
    {
        clientID: 'clientID',
        clientSecret: 'clientSecret',
        callbackURL: 'callbackURL',
        passReqToCallback: true
    },
    (req: Request, accessToken: string, refreshToken: string, profile, cb) => {
        profile; // $ExpectType Profile
        cb; // $ExpectType VerifyCallback
        User.findOrCreate({ twitchId: profile.id }, cb);
    }
));
