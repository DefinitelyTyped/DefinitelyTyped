/**
 * Created by kzaY on 07/09/2017.
 * Updated by AlfieGoldson on 26/04/2021.
 */
import express = require("express");
import steam = require("passport-steam");

// just some test model
const User = {
    findOrCreate: (id: string, provider: string, callback: (err: any, user: any) => void): void => {
        callback(null, { username: "james" });
    },
};

const strategyOptions: steam.StrategyOptions = {
    returnURL: "returnURL",
    realm: "realm",
    apiKey: "apiKey",
};

const strategy = new steam.Strategy(
    strategyOptions,
    (identifier: string, profile: steam.Profile, done: steam.VerifyCallback) => {
        User.findOrCreate(profile.id, profile.provider, (err, user) => {
            if (err) {
                done(err);
                return;
            }
            done(null, user);
        });
    },
);

const strategyOptionsWithRequest: steam.StrategyOptionsWithRequest = {
    returnURL: "returnURL",
    realm: "realm",
    apiKey: "apiKey",
    passReqToCallback: true,
};

const strategyWithRequest = new steam.Strategy(
    strategyOptionsWithRequest,
    (req: express.Request, identifier: string, profile: steam.Profile, done: steam.VerifyCallback) => {
        User.findOrCreate(profile.id, profile.provider, (err, user) => {
            if (err) {
                done(err);
                return;
            }
            done(null, user);
        });
    },
);
