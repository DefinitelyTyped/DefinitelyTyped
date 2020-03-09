import passport = require('passport');
import { Strategy as MicrosoftStrategy } from 'passport-microsoft';

// Just some test model.
const User = {
    findOrCreate(
        id: string,
        provider: string,
        callback: (err: any, user: any) => void
    ): void {
        callback(null, { username: "arnold" });
    }
};

passport.use(new MicrosoftStrategy(
    {
        clientID: 'thisIsMyClientId',
        clientSecret: 'thisIsMyClientSecret'
    },
    (accessToken: string, refreshToken: string, profile: passport.Profile, done: (error: any, user?: any) => void) => {
        User.findOrCreate(profile.id, profile.provider, (err, user) => {
            if (err) { done(err); return; }
            done(null, user);
        });
    }
));
