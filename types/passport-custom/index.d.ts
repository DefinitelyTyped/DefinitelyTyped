// Type definitions for passport-custom 1.0
// Project: https://github.com/mbell8903/passport-custom
// Definitions by: Alexander Abramov <https://github.com/zarly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="passport"/>

import { Strategy as PassportStrategy } from "passport-strategy";
import express = require("express");

interface IStrategyOptions {
    session?: boolean;
}

interface IVerifyOptions {
    message: string;
}

interface VerifyFunction {
    (
        req: express.Request,
        done: (error: any, user?: any, options?: IVerifyOptions) => void
    ): void;
}

declare class Strategy extends PassportStrategy {
    constructor(options: IStrategyOptions, verify: VerifyFunction);
    constructor(verify: VerifyFunction);

    name: string;
}
