import passport = require('passport');
import strava = require('riderize__passport-strava-oauth2');
import express = require('express');

// just some test model
const User = {
    findOrCreate(id: string, provider: string, callback: (err: any, user: any) => void): void {
        callback(null, { username: 'james' });
    }
};

passport.use(new strava.Strategy({
            clientID: process.env.PASSPORT_STRAVA_CLIENT_ID as string,
            clientSecret: process.env.PASSPORT_STRAVA_CLIENT_SECRET as string,
            callbackURL: process.env.PASSPORT_STRAVA_CALLBACK_URL as string
    },
    (accessToken: string, refreshToken: string, profile: strava.Profile, done: (error: any, user?: any) => void) => {
         User.findOrCreate(profile.id, profile.provider, (err, user) => {
             if (err) done(err);
             else done(null, user);
         });
    })
);

passport.use(new strava.Strategy({
            clientID: process.env.PASSPORT_STRAVA_CLIENT_ID as string,
            clientSecret: process.env.PASSPORT_STRAVA_CLIENT_SECRET as string,
            callbackURL: process.env.PASSPORT_STRAVA_CALLBACK_URL as string,
            passReqToCallback: true
    },
    (req: express.Request, accessToken: string, refreshToken: string, profile: strava.Profile, done: (error: any, user?: any) => void) => {
         User.findOrCreate(profile.id, profile.provider, (err, user) => {
             if (err) done(err);
             else done(null, user);
         });
    })
);

passport.use(new strava.Strategy({
            clientID: process.env.PASSPORT_STRAVA_CLIENT_ID as string,
            clientSecret: process.env.PASSPORT_STRAVA_CLIENT_SECRET as string,
            callbackURL: process.env.PASSPORT_STRAVA_CALLBACK_URL as string
    },
    (accessToken: string, refreshToken: string, profile: strava.Profile, done: (error: any, user?: any, info?: any) => void) => {
         done(null, false, { message: 'Some error.' });
    })
);
