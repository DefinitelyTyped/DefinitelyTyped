// Type definitions for passport-http 0.3.0
// Project: https://github.com/jaredhanson/passport-http
// Definitions by: Christophe Vidal <https://github.com/krizalys>
//                 Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import passport = require("passport");
import express = require("express");

interface BasicStrategyOptions<req extends boolean = boolean> {
    realm?: string;
    passReqToCallback?: req;
}

interface DigestStrategyOptions {
    realm?: string;
    domain?: string | Array<string>;
    opaque?: string;
    algorithm?: string;
    qop?: string | Array<string>;
}

interface DigestValidateOptions {
    nonce: string;
    cnonce: string;
    nc: number;
    opaque: string;
}

interface BasicVerifyFunction {
    (username: string, password: string, done: (error: any, user?: any) => void): void;
}

interface BasicVerifyFunctionWithRequest {
    (req: express.Request, username: string, password: string, done: (error: any, user?: any) => void): void;
}

interface DigestSecretFunction {
    (username: string, done: (error: any, user?: any, password?: any) => void): void;
}

interface DigestValidateFunction {
    (params: DigestValidateOptions, done: (error: any, valid: boolean) => void): void;
}

declare class BasicStrategy implements passport.Strategy {
    constructor(verify: BasicVerifyFunction);
    constructor(options: BasicStrategyOptions<false>, verify: BasicVerifyFunction);
    constructor(options: BasicStrategyOptions<true>, verify: BasicVerifyFunctionWithRequest);

    name: string;
    authenticate: (req: express.Request, options?: Object) => void;
}

declare class DigestStrategy implements passport.Strategy {
    constructor(secret: DigestSecretFunction, validate?: DigestValidateFunction);
    constructor(options: DigestStrategyOptions, secret: DigestSecretFunction, validate?: DigestValidateFunction);

    name: string;
    authenticate: (req: express.Request, options?: Object) => void;
}
