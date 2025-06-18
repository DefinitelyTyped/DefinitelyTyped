import { Profile, Strategy } from "@riderize/passport-strava-oauth2";
import { Request } from "express";

import passport = require("passport");

// just some test model
const User = {
    findOrCreate(id: string, provider: string, callback: (err: any, user: any) => void): void {
        callback(null, { username: "james" });
    },
};

passport.use(
    new Strategy(
        {
            clientID: process.env.PASSPORT_STRAVA_CLIENT_ID as string,
            clientSecret: process.env.PASSPORT_STRAVA_CLIENT_SECRET as string,
            callbackURL: process.env.PASSPORT_STRAVA_CALLBACK_URL as string,
        },
        (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any) => void) => {
            User.findOrCreate(profile.id, profile.provider, (err, user) => {
                if (err) done(err);
                else done(null, user);
            });
        },
    ),
);

passport.use(
    new Strategy(
        {
            clientID: process.env.PASSPORT_STRAVA_CLIENT_ID as string,
            clientSecret: process.env.PASSPORT_STRAVA_CLIENT_SECRET as string,
            callbackURL: process.env.PASSPORT_STRAVA_CALLBACK_URL as string,
            passReqToCallback: true,
        },
        (
            req: Request,
            accessToken: string,
            refreshToken: string,
            profile: Profile,
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
    new Strategy(
        {
            clientID: process.env.PASSPORT_STRAVA_CLIENT_ID as string,
            clientSecret: process.env.PASSPORT_STRAVA_CLIENT_SECRET as string,
            callbackURL: process.env.PASSPORT_STRAVA_CALLBACK_URL as string,
        },
        (
            accessToken: string,
            refreshToken: string,
            profile: Profile,
            done: (error: any, user?: any, info?: any) => void,
        ) => {
            done(null, false, { message: "Some error." });
        },
    ),
);
