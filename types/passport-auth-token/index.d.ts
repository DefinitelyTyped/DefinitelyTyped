// Type definitions for passport-auth-token 1.0
// Project: https://github.com/mbell8903/passport-auth-token.git
// Definitions by: Ian Woongsoo Lee <https://github.com/yummyummyummy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="passport"/>

import express = require('express');
import { Strategy as PassportStrategy } from 'passport-strategy';

export interface StrategyOptions {
    tokenFields?: string[];
    headerFields?: string[];
    session?: boolean;
    passReqToCallback?: false;
    params?: boolean;
    optional?: boolean;
    caseInsensitive?: boolean;
}

export interface StrategyOptionsWithRequest {
    tokenFields?: string[];
    headerFields?: string[];
    session?: boolean;
    passReqToCallback: true;
    params?: boolean;
    optional?: boolean;
    caseInsensitive?: boolean;
}

export interface VerifyOptions {
    message: string;
}

export interface VerifyFunctionWithRequest {
    (req: express.Request, token: string, done: (error: any, user?: any, options?: VerifyOptions) => void): void;
}

export interface VerifyFunction {
    (token: string, done: (error: any, user?: any, options?: VerifyOptions) => void): void;
}

export class Strategy extends PassportStrategy {
    constructor(options: StrategyOptionsWithRequest, verify: VerifyFunctionWithRequest);
    constructor(options: StrategyOptions, verify: VerifyFunction);
    constructor(verify: VerifyFunction);

    name: string;
}
