// Type definitions for passport-auth-token 1.0
// Project: https://github.com/mbell8903/passport-auth-token.git
// Definitions by: Ian Woongsoo Lee <https://github.com/yummyummyummy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="passport"/>

import express = require("express");
import { Strategy as PassportStrategy } from "passport-strategy";

interface StrategyOptions {
    tokenFields?: string[] | undefined;
    headerFields?: string[] | undefined;
    session?: boolean | undefined;
    passReqToCallback?: false | undefined;
    params?: boolean | undefined;
    optional?: boolean | undefined;
    caseInsensitive?: boolean | undefined;
}

interface StrategyOptionsWithRequest {
    tokenFields?: string[] | undefined;
    headerFields?: string[] | undefined;
    session?: boolean | undefined;
    passReqToCallback: true;
    params?: boolean | undefined;
    optional?: boolean | undefined;
    caseInsensitive?: boolean | undefined;
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
