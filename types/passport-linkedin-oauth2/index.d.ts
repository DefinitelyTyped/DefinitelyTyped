// Type definitions for passport-linkedin-oauth2 1.5
// Project: https://github.com/auth0/passport-linkedin-oauth2
// Definitions by: Andrew Vetovitz <https://github.com/andrewvetovitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Profile as passportProfile, AuthenticateOptions as PassportAuthenticateOptions, Strategy as passportStrategy } from 'passport';
import { Request } from 'express';

export interface Profile extends passportProfile {
    id: string;
    displayName: string;
    name: {
        familyName: string;
        givenName: string;
    };
    emails: [{ value: string }];
    photos: [{ value: string }];
    _raw: string;
    _json: any;
}

export interface AuthenticateOptions extends PassportAuthenticateOptions {
    authType?: string;
}

export interface StrategyOption {
    clientID: string;
    clientSecret: string;
    callbackURL: string;

    scopeSeparator?: string;
    enableProof?: boolean;
    profileFields?: string[];
}

export interface StrategyOptionWithRequest extends StrategyOption {
    passReqToCallback: true;
}

export type VerifyFunction =
    (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any, info?: any) => void) => void;

export type VerifyFunctionWithRequest =
    (req: Request, accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any, info?: any) => void) => void;

export class Strategy extends passportStrategy {
    constructor(options: StrategyOptionWithRequest, verify: VerifyFunctionWithRequest);
    constructor(options: StrategyOption, verify: VerifyFunction);

    name: string;
    authenticate(req: Request, options?: object): void;
}
