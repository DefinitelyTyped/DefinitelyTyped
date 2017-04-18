/**
 * Created by jcabresos on 4/19/2014.
 */
import passport = require('passport');
import github = require('passport-github');

// just some test model
const User = {
    findOrCreate(id: string, provider: string, callback: (err: any, user: any) => void): void {
        callback(null, { username: 'james' });
    }
};

passport.use(new github.Strategy(
    {
        clientID: process.env.PASSPORT_GITHUB_CONSUMER_KEY,
        clientSecret: process.env.PASSPORT_GITHUB_CONSUMER_SECRET,
        callbackURL: process.env.PASSPORT_GITHUB_CALLBACK_URL
    },
    (accessToken: string, refreshToken: string, profile: github.Profile, done: (error: any, user?: any) => void) => {
        User.findOrCreate(profile.id, profile.provider, (err, user) => {
            if (err) { return done(err); }
            done(null, user);
        });
    })
);
