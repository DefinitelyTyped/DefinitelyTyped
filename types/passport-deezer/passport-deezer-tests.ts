import { Profile, Strategy, StrategyOptions, VerifyCallback, VerifyFunction } from "passport-deezer";

const strategyOptions: StrategyOptions = {
    clientID: "client-id",
    clientSecret: "client-secret",
    callbackURL: "callback-url",
    scope: ["scope-1", "scope-2", "scope-3"],
};

const verifyFunction: VerifyFunction = (
    accessToken: string,
    refreshToken: string | undefined,
    profile: Profile,
    done: VerifyCallback,
) => {
    const user = {
        profile,
        accessToken,
        refreshToken,
    };

    done(null, user);
};

const strategy = new Strategy(strategyOptions, verifyFunction);
