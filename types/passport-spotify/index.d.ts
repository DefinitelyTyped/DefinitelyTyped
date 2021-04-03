// Type definitions for passport-spotify 2.0
// Project: https://github.com/jmperez/passport-spotify#readme
// Definitions by: Rishi Kodali <https://github.com/rishikodali>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Request } from 'express';

export interface Profile {
    provider: string;
    id: string;
    username: string;
    displayName: string;
    profileUrl: string | null;
    photos: [string] | null;
    country: string;
    followers: number | null;
    product: string | null;
    emails?: [{ value: string; type: null }];
    _raw: string;
    _json: any;
}

export interface _StrategyOptionsBase {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    scope?: string[];
    authorizationURL?: string;
    tokenURL?: string;
    scopeSeparator?: string;
    userProfileURL?: string;
    showDialog?: boolean;
}

export interface StrategyOptions extends _StrategyOptionsBase {
    passReqToCallback?: false | null;
}

export interface StrategyOptionsWithRequest extends _StrategyOptionsBase {
    passReqToCallback: true;
}

export type VerifyCallback = (error?: Error | null, user?: object, info?: object) => void;

export type VerifyFunction = (
    accessToken: string,
    refreshToken: string,
    expires_in: number,
    profile: Profile,
    done: VerifyCallback
) => void;

export type VerifyFunctionWithRequest = (
    req: Request,
    accessToken: string,
    refreshToken: string,
    expires_in: number,
    profile: Profile,
    done: VerifyCallback
) => void;

export class Strategy {
    constructor(options: StrategyOptionsWithRequest, verify: VerifyFunctionWithRequest);
    constructor(options: StrategyOptions, verify: VerifyFunction);

    name: string;
    authenticate(req: Request, options?: object): void;
}
