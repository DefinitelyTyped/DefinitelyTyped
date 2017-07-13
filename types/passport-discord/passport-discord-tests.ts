/**
 * Created by kzaY on 07/09/2017.
 */
import passport = require('passport');
import discord = require('passport-discord');

// just some test model
let User = {
    findOrCreate(discordId: any, callback: (err: any, user: any) => void): void {
        callback(null, { username: 'james' });
    }
};

passport.use(new discord.Strategy(
    {
        clientID: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
        callbackURL: process.env.DISCORD_CALLBACK
    },
    (accessToken: string, refreshToken: string, profile: any, cb: any) => {
        User.findOrCreate({ discordId: profile.id }, (err, user) => {
            return cb(err, user);
        });
    }
));
