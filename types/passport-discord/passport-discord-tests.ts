/**
 * Created by kzaY on 07/09/2017.
 */
import passport = require('passport');
import discord = require('passport-discord');
import { Request } from 'express';

// just some test model

declare const User: { findOrCreate(discordId: any, callback: (err: any, user: any) => void): void; };

passport.use(new discord.Strategy(
    {
        clientID: 'clientID',
        clientSecret: 'clientSecret',
        callbackURL: 'callbackURL'
    },
    (accessToken: string, refreshToken: string, profile, cb) => {
        profile; // $ExpectType Profile
        cb; // $ExpectType VerifyCallback
        User.findOrCreate({ discordId: profile.id }, cb);
    }
));

passport.use(new discord.Strategy(
    {
        clientID: 'clientID',
        clientSecret: 'clientSecret',
        callbackURL: 'callbackURL',
        passReqToCallback: true
    },
    (req: Request, accessToken: string, refreshToken: string, profile, cb) => {
        profile; // $ExpectType Profile
        cb; // $ExpectType VerifyCallback
        User.findOrCreate({ discordId: profile.id }, cb);
    }
));
