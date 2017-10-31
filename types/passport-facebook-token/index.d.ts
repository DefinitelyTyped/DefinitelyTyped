// Type definitions for passport-facebook-token 0.4
// Project: https://github.com/drudge/passport-facebook-token
// Definitions by: Ray Martone <https://github.com/rmartone>, Michael Randolph <https://github.com/mrand01>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as passport from 'passport';
import * as express from 'express';

declare class Strategy implements passport.Strategy {
    constructor(options: Strategy.StrategyOptionsWithRequest, verify: Strategy.VerifyFunctionWithRequest)
    constructor(options: Strategy.StrategyOptions, verify: Strategy.VerifyFunction);

    name: string;
    authenticate: (req: express.Request, options?: any) => void;
}

declare namespace Strategy {
    interface ValueObject {
        value: string;
    }

    interface Profile extends passport.Profile {
        provider: string;
        id: string;
        displayName: string;
        name: {
            familyName: string;
            givenName: string;
            middleName: string;
        };
        gender: string;
        emails: ValueObject[];
        photos: ValueObject[];
        _raw: string;
        _json: any;
    }

    interface StrategyOptions {
        clientID: string;
        clientSecret: string;
        authorizationURL?: string;
        tokenURL?: string;
        scopeSeparator?: string;
        enableProof?: boolean;
        profileFields?: string[];
    }

    interface StrategyOptionsWithRequest extends StrategyOptions {
        passReqToCallback: true;
    }

    type VerifyFunction = (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any, info?: any) => void) => void;

    type VerifyFunctionWithRequest = (req: express.Request, accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any, info?: any) => void) => void;
}

export = Strategy;
