import * as express from "express";
import * as passport from "passport";
import * as PassportTwitterToken from "passport-twitter-token";

const User = {
    findOrCreate(id: string, provider: string, callback: (err: any, user: any) => void): void {
        callback(null, { username: "podpli" });
    },
};

const options: PassportTwitterToken.StrategyOptions = {
    consumerKey: "consumerKey",
    consumerSecret: "consumerSecret",
};

const optionsWithCustomTokenFields: PassportTwitterToken.StrategyOptions = {
    consumerKey: "consumerKey",
    consumerSecret: "consumerSecret",
    oauthTokenField: "oauthTokenField",
    oauthTokenSecretField: "oauthTokenSecretField",
};

const optionsWithRequest: PassportTwitterToken.StrategyOptionsWithRequest = {
    consumerKey: "consumerKey",
    consumerSecret: "consumerSecret",
    passReqToCallback: true,
};

const verify: PassportTwitterToken.VerifyFunction = (
    accessToken: string,
    accessTokenSecret: string,
    profile: PassportTwitterToken.TwitterProfile,
    done: PassportTwitterToken.DoneCallback,
) => {
    User.findOrCreate(profile.id, profile.provider, (err, user) => {
        if (err) {
            done(err);
        }
        done(null, user);
    });
};

const verifyWithRequest: PassportTwitterToken.VerifyFunctionWithRequest = (
    req: express.Request,
    accessToken: string,
    accessTokenSecret: string,
    profile: PassportTwitterToken.TwitterProfile,
    done: PassportTwitterToken.DoneCallback,
) => {
    User.findOrCreate(profile.id, profile.provider, (err, user) => {
        if (err) {
            done(err);
        }
        done(null, user);
    });
};

passport.use(new PassportTwitterToken(options, verify));
passport.use(new PassportTwitterToken(optionsWithCustomTokenFields, verify));
passport.use(new PassportTwitterToken(optionsWithRequest, verifyWithRequest));
