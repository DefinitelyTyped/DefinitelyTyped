import type { Request } from "express";
import { Profile, Strategy, StrategyOptions, VerifyCallback, VerifyFunction } from "passport-lastfm";

const strategyOptions: StrategyOptions = {
    api_key: "api-key",
    clientID: "client-id",
    secret: "secret",
    clientSecret: "client-secret",
    callback_url: "callback-url",
    callbackURL: "callback-url",
};

const verifyFunction: VerifyFunction = (
    req: Request,
    sessionKey: Profile,
    done: VerifyCallback,
) => {
    const user = {
        profile: sessionKey,
    };

    done(null, user);
};

const strategy = new Strategy(strategyOptions, verifyFunction);
