/**
 * Created by jcabresos on 4/19/2014.
 */
import passport = require('passport');
import auth0 = require('passport-auth0');
import express = require('express');

// just some test model
const User = {
    findOrCreate(id: string, provider: string, callback: (err: any, user: any) => void): void {
        callback(null, { username: 'james' });
    },
};

passport.use(
    new auth0(
        {
            clientID: process.env.PASSPORT_AUTH0_CLIENT_ID as string,
            clientSecret: process.env.PASSPORT_AUTH0_CLIENT_SECRET as string,
            callbackURL: process.env.PASSPORT_AUTH0_CALLBACK_URL as string,
            domain: process.env.PASSPORT_AUTH0_DOMAIN as string,
        },
        (
            accessToken: string,
            refreshToken: string,
            extraParams: auth0.ExtraVerificationParams,
            profile: auth0.Profile,
            done: (error: any, user?: any) => void,
        ) => {
            User.findOrCreate(profile.id, profile.provider, (err, user) => {
                if (err) done(err);
                else done(null, user);
            });
        },
    ),
);

passport.use(
    new auth0.Strategy(
        {
            clientID: process.env.PASSPORT_AUTH0_CLIENT_ID as string,
            clientSecret: process.env.PASSPORT_AUTH0_CLIENT_SECRET as string,
            callbackURL: process.env.PASSPORT_AUTH0_CALLBACK_URL as string,
            domain: process.env.PASSPORT_AUTH0_DOMAIN as string,
            passReqToCallback: true,
        },
        (
            req: express.Request,
            accessToken: string,
            refreshToken: string,
            extraParams: auth0.ExtraVerificationParams,
            profile: auth0.Profile,
            done: (error: any, user?: any) => void,
        ) => {
            User.findOrCreate(profile.id, profile.provider, (err, user) => {
                if (err) done(err);
                else done(null, user);
            });
        },
    ),
);

passport.use(
    new auth0.Strategy(
        {
            clientID: process.env.PASSPORT_AUTH0_CLIENT_ID as string,
            clientSecret: process.env.PASSPORT_AUTH0_CLIENT_SECRET as string,
            callbackURL: process.env.PASSPORT_AUTH0_CALLBACK_URL as string,
            domain: process.env.PASSPORT_AUTH0_DOMAIN as string,
        },
        (
            accessToken: string,
            refreshToken: string,
            extraParams: auth0.ExtraVerificationParams,
            profile: auth0.Profile,
            done: (error: any, user?: any, info?: any) => void,
        ) => {
            done(null, false, { message: 'Some error.' });
        },
    ),
);
