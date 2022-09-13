/**
 * Created by kzaY on 07/09/2017.
 */
import express = require("express");
import passport = require('passport');
import steam = require('passport-steam');

// just some test model
const User = {
    findOrCreate(id: string, provider: string, callback: (err: any, user: any) => void): void {
        callback(null, { username: 'james' });
    }
};

passport.use(new steam.Strategy({
    returnURL: process.env.PASSPORT_RETURN_URL,
    realm: process.env.PASSPORT_REALM,
    apiKey: process.env.PASSPORT_API_KEY,
},
    (identifier: any, profile: any, done: (error: any, user?: any) => void) => {
        User.findOrCreate(profile.id, profile.provider, (err, user) => {
            if (err) { done(err); return; }
            done(null, user);
        });
    })
);
