/**
 * Created by jcabresos on 4/19/2014.
 */
import passport = require('passport');
import facebook = require('passport-facebook');
import express = require('express');

// just some test model
const User = {
    findOrCreate(id: string, provider: string, callback: (err: any, user: any) => void): void {
        callback(null, { username: 'james' });
    }
};

passport.use(new facebook.Strategy({
            clientID: process.env.PASSPORT_FACEBOOK_CLIENT_ID,
            clientSecret: process.env.PASSPORT_FACEBOOK_CLIENT_SECRET,
            callbackURL: process.env.PASSPORT_FACEBOOK_CALLBACK_URL
    },
    (accessToken: string, refreshToken: string, profile: facebook.Profile, done: (error: any, user?: any) => void) => {
         User.findOrCreate(profile.id, profile.provider, (err, user) => {
             if (err) done(err);
             else done(null, user);
         });
    })
);

passport.use(new facebook.Strategy({
            clientID: process.env.PASSPORT_FACEBOOK_CLIENT_ID,
            clientSecret: process.env.PASSPORT_FACEBOOK_CLIENT_SECRET,
            callbackURL: process.env.PASSPORT_FACEBOOK_CALLBACK_URL,
            passReqToCallback: true
    },
    (req: express.Request, accessToken: string, refreshToken: string, profile: facebook.Profile, done: (error: any, user?: any) => void) => {
         User.findOrCreate(profile.id, profile.provider, (err, user) => {
             if (err) done(err);
             else done(null, user);
         });
    })
);

passport.use(new facebook.Strategy({
            clientID: process.env.PASSPORT_FACEBOOK_CLIENT_ID,
            clientSecret: process.env.PASSPORT_FACEBOOK_CLIENT_SECRET,
            callbackURL: process.env.PASSPORT_FACEBOOK_CALLBACK_URL
    },
    (accessToken: string, refreshToken: string, profile: facebook.Profile, done: (error: any, user?: any, info?: any) => void) => {
         done(null, false, { message: 'Some error.' });
    })
);
