/**
 * Created by andrewvetovitz on 12/21/2018.
 */
import passport = require('passport');
import linkedin = require('passport-linkedin-oauth2');

// just some test model
const User = {
    findOrCreate(id: string, provider: string, callback: (err: any, user: any) => void): void {
        callback(null, { username: 'james' });
    }
};

const callbackURL = process.env.PASSPORT_LINKEDIN_CALLBACK_URL;
const clientID = process.env.PASSPORT_LINKEDIN_CONSUMER_KEY;
const clientSecret = process.env.PASSPORT_LINKEDIN_CONSUMER_SECRET;

if (typeof callbackURL === "undefined") {
    throw new Error("callbackURL is undefined");
}

if (typeof clientID === "undefined") {
    throw new Error("clientID is undefined");
}

if (typeof clientSecret === "undefined") {
    throw new Error("clientSecret is undefined");
}

passport.use(new linkedin.Strategy(
    {
        callbackURL,
        clientID,
        clientSecret
    },
    (accessToken: string, refreshToken: string, profile: linkedin.Profile, done: (error: any, user?: any) => void) => {
        User.findOrCreate(profile.id, profile.provider, (err, user) => {
            if (err) { done(err); return; }
            done(null, user);
        });
    })
);
