/**
 * Created by sagar7993 on 05/29/2020.
 */
import express = require("express");
import passport = require('passport');
import instagram = require('passport-instagram-graph');

// just some test model
const User = {
    findOrCreate(id: string, provider: string, callback: (err: any, user: any) => void): void {
        callback(null, { username: 'sagar7993', displayName: 'Sagar Jain', name: { familyName: 'Jain', givenName: 'Sagar' } });
    }
};

passport.use(new instagram.Strategy({
    clientID: process.env.PASSPORT_INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.PASSPORT_INSTAGRAM_CLIENT_SECRET,
    callbackURL: process.env.PASSPORT_INSTAGRAM_CALLBACK_URL
},
    function(accessToken: string, refreshToken: string, profile: instagram.Profile, callback: (error: any, user?: any) => void) {
        User.findOrCreate(profile.id, profile.provider, function(err, user) {
            if (err) { return callback(err); }
            callback(null, user);
        });
    })
);

passport.use(new instagram.Strategy({
    clientID: process.env.PASSPORT_INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.PASSPORT_INSTAGRAM_CLIENT_SECRET,
    callbackURL: process.env.PASSPORT_INSTAGRAM_CALLBACK_URL,
    passReqToCallback: false
},
    function(accessToken: string, refreshToken: string, profile: instagram.Profile, callback: (error: any, user?: any) => void) {
        User.findOrCreate(profile.id, profile.provider, function(err, user) {
            if (err) { return callback(err); }
            callback(null, user);
        });
    })
);
