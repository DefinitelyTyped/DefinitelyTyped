/**
 * Created by sagar7993 on 03/31/2020.
 */
import express = require("express");
import passport = require('passport');
import instagram = require('passport-instagram');

// just some test model
const User = {
    findOrCreate(id: string, provider: string, callback: (err: any, user: any) => void): void {
        callback(null, { username: 'sagar' });
    }
};

passport.use(new instagram.Strategy({
    consumerKey: process.env.PASSPORT_TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.PASSPORT_TWITTER_CONSUMER_SECRET,
    callbackURL: process.env.PASSPORT_TWITTER_CALLBACK_URL
},
    function(accessToken: string, refreshToken: string, profile: instagram.Profile, done: (error: any, user?: any) => void) {
        User.findOrCreate(profile.id, profile.provider, function(err, user) {
            if (err) { return done(err); }
            done(null, user);
        });
    })
);

passport.use(new instagram.Strategy({
    consumerKey: process.env.PASSPORT_TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.PASSPORT_TWITTER_CONSUMER_SECRET,
    callbackURL: process.env.PASSPORT_TWITTER_CALLBACK_URL,
    passReqToCallback: false
},
    function(accessToken: string, refreshToken: string, profile: instagram.Profile, done: (error: any, user?: any) => void) {
        User.findOrCreate(profile.id, profile.provider, function(err, user) {
            if (err) { return done(err); }
            done(null, user);
        });
    })
);

passport.use(new instagram.Strategy({
    consumerKey: process.env.PASSPORT_TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.PASSPORT_TWITTER_CONSUMER_SECRET,
    callbackURL: process.env.PASSPORT_TWITTER_CALLBACK_URL,
    passReqToCallback: true,
    includeEmail: true
},
    function(req: express.Request, accessToken: string, refreshToken: string, profile: instagram.Profile, done: (error: any, user?: any) => void) {
        User.findOrCreate(profile.id, profile.provider, function(err, user) {
            if (err) { return done(err); }
            done(null, user);
        });
    })
);
