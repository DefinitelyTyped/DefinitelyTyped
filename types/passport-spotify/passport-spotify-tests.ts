import { Request } from 'express';
import {
    Profile,
    Strategy,
    StrategyOptions,
    StrategyOptionsWithRequest,
    VerifyCallback,
    VerifyFunction,
    VerifyFunctionWithRequest,
} from 'passport-spotify';

const strategyOptions: StrategyOptions = {
    clientID: 'clientID',
    clientSecret: 'clientSecret',
    callbackURL: 'callbackURL',
};

const verifyFunction: VerifyFunction = (
    accessToken: string,
    refreshToken: string,
    expires_in: number,
    profile: Profile,
    done: VerifyCallback,
) => {
    const user = {
        profile,
        accessToken,
        refreshToken,
        expires_in
    };

    done(null, user);
};

const strategy = new Strategy(strategyOptions, verifyFunction);

const strategyOptionsWithRequest: StrategyOptionsWithRequest = {
    clientID: 'clientID',
    clientSecret: 'clientSecret',
    callbackURL: 'callbackURL',
    passReqToCallback: true,
};

const verifyFunctionWithRequest: VerifyFunctionWithRequest = (
    req: Request,
    accessToken: string,
    refreshToken: string,
    expires_in: number,
    profile: Profile,
    done: VerifyCallback,
) => {
    const user = {
        profile,
        accessToken,
        refreshToken,
        expires_in
    };

    done(null, user);
};

const strategyWithRequest = new Strategy(strategyOptionsWithRequest, verifyFunctionWithRequest);
