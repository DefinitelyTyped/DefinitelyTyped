/**
 * Created by jcabresos on 4/19/2014.
 */
import express = require('express');
import passport = require('passport');
import google = require('passport-google-oauth');

// just some test model
var User = {
    findOrCreate(
        id: string,
        provider: string,
        callback: (err: any, user: any) => void
    ): void {
        callback(null, { username: 'james' });
    }
};

passport.use(
    new google.OAuthStrategy(
        {
            consumerKey: process.env.GOOGLE_CONSUMER_KEY,
            consumerSecret: process.env.GOOGLE_CONSUMER_SECRET,
            callbackURL: process.env.PASSPORT_GOOGLE_CALLBACK_URL
        },
        function(
            accessToken: string,
            refreshToken: string,
            profile: google.Profile,
            done: (error: any, user?: any, msg?: google.VerifyOptions) => void
        ) {
            User.findOrCreate(profile.id, profile.provider, function(
                err,
                user
            ) {
                if (err) {
                    return done(err);
                } else if (!user)
                    return done(null, false, { message: 'not found user' });
                return done(null, user);
            });
        }
    )
);

passport.use(
    new google.OAuth2Strategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.PASSPORT_GOOGLE_CALLBACK_URL
        },
        function(
            accessToken: string,
            refreshToken: string,
            profile: google.Profile,
            done: (error: any, user?: any) => void
        ) {
            User.findOrCreate(profile.id, profile.provider, function(
                err,
                user
            ) {
                if (err) {
                    return done(err);
                }
                done(null, user);
            });
        }
    )
);

passport.use(
    new google.OAuth2Strategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.PASSPORT_GOOGLE_CALLBACK_URL,
            passReqToCallback: true
        },
        function(
            req: express.Request,
            accessToken: string,
            refreshToken: string,
            profile: google.Profile,
            done: (error: any, user?: any) => void
        ) {
            User.findOrCreate(profile.id, profile.provider, function(
                err,
                user
            ) {
                if (err) {
                    return done(err);
                }
                done(null, user);
            });
        }
    )
);
