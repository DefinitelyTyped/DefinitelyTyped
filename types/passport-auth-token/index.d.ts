// Type definitions for passport-auth-token 1.0
// Project: https://github.com/mbell8903/passport-auth-token.git
// Definitions by: Ian Woongsoo Lee <https://github.com/yummyummyummy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="passport"/>

import express = require('express');
import { Strategy as PassportStrategy } from 'passport-strategy';

interface StrategyOptions {
    tokenFields?: string[];
    headerFields?: string[];
    session?: boolean;
    passReqToCallback?: false;
    params?: boolean;
    optional?: boolean;
    caseInsensitive?: boolean;
}

interface StrategyOptionsWithRequest {
    tokenFields?: string[];
    headerFields?: string[];
    session?: boolean;
    passReqToCallback: true;
    params?: boolean;
    optional?: boolean;
    caseInsensitive?: boolean;
}

interface VerifyOptions {
    message: string;
}

interface VerifyFunctionWithRequest {
    (req: express.Request, token: string, done: (error: any, user?: any, options?: VerifyOptions) => void): void;
}

interface VerifyFunction {
    (token: string, done: (error: any, user?: any, options?: VerifyOptions) => void): void;
}

declare class Strategy extends PassportStrategy {
    constructor(options: StrategyOptionsWithRequest, verify: VerifyFunctionWithRequest);
    constructor(options: StrategyOptions, verify: VerifyFunction);
    constructor(verify: VerifyFunction);

    name: string;
}

export = Strategy;
