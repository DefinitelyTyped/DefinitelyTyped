// Type definitions for passport-auth-token 1.0.1
// Project: https://github.com/mbell8903/passport-auth-token.git
// Definitions by: Ian Woongsoo Lee <https://github.com/yummyummyummy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="passport"/>

import express = require('express');
import { Strategy as PassportStrategy } from 'passport-strategy';

interface IStrategyOptions {
    tokenFields?: string[];
    headerFields?: string[];
    session?: boolean;
    passReqToCallback?: false;
    params?: boolean;
    optional?: boolean;
    caseInsensitive?: boolean;
}

interface IStrategyOptionsWithRequest {
    tokenFields?: string[];
    headerFields?: string[];
    session?: boolean;
    passReqToCallback: true;
    params?: boolean;
    optional?: boolean;
    caseInsensitive?: boolean;
}

interface IVerifyOptions {
    message: string;
}

type VerifyFunctionWithRequest = {
    (req: express.Request, token: string, done: (error: any, user?: any, options?: IVerifyOptions) => void): void;
};

type VerifyFunction = {
    (token: string, done: (error: any, user?: any, options?: IVerifyOptions) => void): void;
};

declare class Strategy extends PassportStrategy {
    constructor(options: IStrategyOptionsWithRequest, verify: VerifyFunctionWithRequest);
    constructor(options: IStrategyOptions, verify: VerifyFunction);
    constructor(verify: VerifyFunction);

    name: string;
}
