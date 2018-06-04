/**
 * Created by kzaY on 07/09/2017.
 */
import passport = require('passport');
import discord = require('passport-discord');

// just some test model
const User = {
    findOrCreate(discordId: any, callback: (err: any, user: any) => void): void {
        callback(null, { username: 'james' });
    }
};

passport.use(new discord.Strategy(
    {
        clientID: 'clientID',
        clientSecret: 'clientSecret',
        callbackURL: 'callbackURL'
    },
    (accessToken: string, refreshToken: string, profile: any, cb: any) => {
        User.findOrCreate({ discordId: profile.id }, (err, user) => {
            return cb(err, user);
        });
    }
));
