// Type definitions for passport-facebook 2.1.1
// Project: https://github.com/jaredhanson/passport-facebook
// Definitions by: James Roland Cabresos <https://github.com/staticfunction>, Lucas Acosta <https://github.com/lucasmacosta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="passport"/>



import passport = require('passport');
import express = require('express');

interface Profile extends passport.Profile {
    gender?: string;
    profileUrl?: string;
    username?: string;

    _raw: string;
    _json: any;
}

export interface AuthenticateOptions extends passport.AuthenticateOptions {
    authType?: string;
}

interface IStrategyOption {
    clientID: string;
    clientSecret: string;
    callbackURL: string;

    scopeSeparator?: string;
    enableProof?: boolean;
    profileFields?: string[];
}

interface IStrategyOptionWithRequest extends IStrategyOption {
    passReqToCallback: true;
}

interface VerifyFunction {
    (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any, info?: any) => void): void;
}

interface VerifyFunctionWithRequest {
    (req: express.Request, accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any, info?: any) => void): void;
}

declare class Strategy implements passport.Strategy {
    constructor(options: IStrategyOptionWithRequest, verify: VerifyFunctionWithRequest);
    constructor(options: IStrategyOption, verify: VerifyFunction);
    
    name: string;
    authenticate: (req: express.Request, options?: Object) => void;
}
