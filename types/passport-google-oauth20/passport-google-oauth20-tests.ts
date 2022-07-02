import express = require('express');
import passport = require('passport');
import google = require('passport-google-oauth20');

// Just some test model.
const User = {
    findOrCreate(id: string, provider: string, callback: (err: any, user: any) => void): void {
        callback(null, { username: 'alfred' });
    },
};

interface UserProfile {
    googleUserId: string;
    email: string | null;
    emailVerified?: boolean | null;
    familyName: string | null;
    givenName: string | null;
    name: string | null;
    gSuiteDomain: string | null;
    language: string | null;
    avatarUrl: string | null;
}

// A stub to convert google profile information to user profile:
export function mapGoogleProfileToUser(profile: google.Profile): UserProfile {
    const email = !!profile.emails?.[0] && profile.emails[0];

    // @ts-expect-error - because emails may not exist.
    console.log(profile.emails[0]?.verified);

    // @ts-expect-error - because emails[0] may not exist.
    console.log(profile.emails?.[0].verified);

    // @ts-expect-error - because emails[0].verified will be 'true' or 'false'.
    console.log(profile.emails?.[0]?.verified === true);

    // @ts-expect-error
    console.log(profile._json.email.toLowerCase());

    return {
        googleUserId: profile.id,
        email: email ? email.value : null,
        emailVerified: email ? email.verified === 'true' : null,
        familyName: profile.name?.familyName || null,
        givenName: profile.name?.givenName || null,
        name: profile.name ? profile.displayName : null,
        gSuiteDomain: profile._json.hd || null,
        language: profile._json.locale || 'en',
        avatarUrl: profile.photos?.[0]?.value || null,
    };
}

const callbackURL = process.env.PASSPORT_GOOGLE_CALLBACK_URL;
const clientID = process.env.PASSPORT_GOOGLE_CONSUMER_KEY;
const clientSecret = process.env.PASSPORT_GOOGLE_CONSUMER_SECRET;

if (typeof callbackURL === 'undefined') {
    throw new Error('callbackURL is undefined');
}

if (typeof clientID === 'undefined') {
    throw new Error('clientID is undefined');
}

if (typeof clientSecret === 'undefined') {
    throw new Error('clientSecret is undefined');
}

passport.use(
    new google.Strategy(
        {
            callbackURL,
            clientID,
            clientSecret,
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
    new google.Strategy(
        {
            callbackURL,
            clientID,
            clientSecret,
            passReqToCallback: true,
        },
        (_request, _accessToken, _refreshToken, profile, done) => {
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
    new google.Strategy(
        {
            callbackURL,
            clientID,
            clientSecret,
            passReqToCallback: true,
        },
        (
            request: express.Request,
            accessToken: string,
            refreshToken: string,
            params: google.GoogleCallbackParameters,
            profile: google.Profile,
            done: (error: any, user?: any) => void,
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
    new google.Strategy(
        {
            callbackURL,
            clientID,
            clientSecret,
        },
        (
            accessToken: string,
            refreshToken: string,
            params: google.GoogleCallbackParameters,
            profile: google.Profile,
            done: (error: any, user?: any) => void,
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
