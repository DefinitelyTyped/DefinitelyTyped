
import passport = require('passport');
import facebook = require('passport-facebook-token');

var User = {
    findOrCreate(id: string, provider: string, callback: (err: any, user: any) => void): void {
        callback(null, {username: 'ray'});
    }
}

var options: facebook.StrategyOptions = {
    clientID: process.env.PASSPORT_FACEBOOK_CLIENT_ID,
    clientSecret: process.env.PASSPORT_FACEBOOK_CLIENT_SECRET
};

function verify(accessToken: string,
                refreshToken: string,
                profile: facebook.Profile,
                done: (err: any, user?: any) => void) {
    User.findOrCreate(profile.id, profile.provider, function (err, user) {
        if (err) {
            return done(err);
        }
        done(null, user);
    });
}

passport.use(new facebook.Strategy(options, verify));
