import express = require("express");
import passport = require("passport");
import google = require("passport-google-oauth20");

// Just some test model.
const User = {
    findOrCreate(
        id: string,
        provider: string,
        callback: (err: any, user: any) => void
    ): void {
        callback(null, { username: "alfred" });
    }
};

const callbackURL = process.env.PASSPORT_GOOGLE_CALLBACK_URL;
const clientID = process.env.PASSPORT_GOOGLE_CONSUMER_KEY;
const clientSecret = process.env.PASSPORT_GOOGLE_CONSUMER_SECRET;

if (typeof callbackURL === "undefined") {
    throw new Error("callbackURL is undefined");
}

if (typeof clientID === "undefined") {
    throw new Error("clientID is undefined");
}

if (typeof clientSecret === "undefined") {
    throw new Error("clientSecret is undefined");
}

passport.use(
    new google.Strategy(
        {
            callbackURL,
            clientID,
            clientSecret
        },
        (
            accessToken: string,
            refreshToken: string,
            profile: google.Profile,
            done: (error: any, user?: any) => void
        ) => {
            User.findOrCreate(profile.id, profile.provider, (err, user) => {
                if (err) {
                    done(err);
                    return;
                }
                done(null, user);
            });
        }
    )
);

passport.use(
    new google.Strategy(
        {
            callbackURL,
            clientID,
            clientSecret,
            passReqToCallback: true
        },
        (
            request: express.Request,
            accessToken: string,
            refreshToken: string,
            profile: google.Profile,
            done: (error: any, user?: any) => void
        ) => {
            User.findOrCreate(profile.id, profile.provider, (err, user) => {
                if (err) {
                    done(err);
                    return;
                }
                done(null, user);
            });
        }
    )
);
