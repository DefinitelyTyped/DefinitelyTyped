import express = require("express");
import passport = require("passport");
import * as line from "passport-line";
import * as oauth2 from "passport-oauth2";

// Just some test model.
const User = {
    findOrCreate(id: string, provider: string, callback: (err: any, user: any) => void): void {
        callback(null, { username: "alfred" });
    },
};

// A stub to convert line profile information to user profile:
export function mapLineProfileToUser(profile: line.Profile): UserProfile {
    return {
        lineUserId: profile.id,
        displayName: profile.displayName,
        pictureUrl: profile.pictureUrl || null,
        statusMessage: profile.statusMessage || null,
    };
}

interface UserProfile {
    lineUserId: string;
    displayName: string;
    pictureUrl: string | null;
    statusMessage: string | null;
}

const callbackURL = process.env.PASSPORT_LINE_CALLBACK_URL;
const channelID = process.env.PASSPORT_LINE_CHANNEL_ID;
const channelSecret = process.env.PASSPORT_LINE_CHANNEL_SECRET;

if (typeof callbackURL === "undefined") {
    throw new Error("callbackURL is undefined");
}

if (typeof channelID === "undefined") {
    throw new Error("channelID is undefined");
}

if (typeof channelSecret === "undefined") {
    throw new Error("channelSecret is undefined");
}

passport.use(
    new line.Strategy(
        {
            callbackURL,
            channelID,
            channelSecret,
        },
        (_accessToken, _refreshToken, profile, done) => {
            User.findOrCreate(profile.id, profile.provider, (err, user) => {
                if (err) {
                    done(err);
                    return;
                }
                done(null, user);
            });
        },
    ),
);

passport.use(
    new line.Strategy(
        {
            callbackURL,
            channelID,
            channelSecret,
            passReqToCallback: true,
        },
        (_request, _accessToken, _refreshToken, profile, done: oauth2.VerifyCallback) => {
            User.findOrCreate(profile.id, profile.provider, (err, user) => {
                if (err) {
                    done(err);
                    return;
                }
                done(null, user);
            });
        },
    ),
);

passport.use(
    new line.Strategy(
        {
            callbackURL,
            channelID,
            channelSecret,
            passReqToCallback: true,
        },
        (
            request: express.Request,
            accessToken: string,
            refreshToken: string,
            profile: line.Profile,
            done: line.VerifyCallback,
        ) => {
            User.findOrCreate(profile.id, profile.provider, (err, user) => {
                if (err) {
                    done(err);
                    return;
                }
                done(null, user);
            });
        },
    ),
);

passport.use(
    new line.Strategy(
        {
            callbackURL,
            channelID,
            channelSecret,
        },
        (
            accessToken: string,
            refreshToken: string,
            profile: line.Profile,
            done: line.VerifyCallback,
        ) => {
            User.findOrCreate(profile.id, profile.provider, (err, user) => {
                if (err) {
                    done(err);
                    return;
                }
                done(null, user);
            });
        },
    ),
);
