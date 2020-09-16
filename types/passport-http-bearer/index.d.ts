// Type definitions for passport-http-bearer 1.0.1
// Project: https://github.com/jaredhanson/passport-http-bearer
// Definitions by: Isman Usoh <https://github.com/isman-usoh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="passport"/>
/// <reference types="express" />
/// <reference types="koa" />

import passport = require("passport");
import express = require("express");
import koa = require("koa");

interface IStrategyOptions {
    scope?: string | Array<string>;
    realm?: string;
    passReqToCallback?: boolean;
}
interface IVerifyOptions {
    message?: string;
    scope: string | Array<string>;
}

interface VerifyFunction {
    (token: string, done: (error: any, user?: any, options?: IVerifyOptions | string) => void): void;
}

interface IKoaContextContainer { ctx: koa.Context; }
type KoaPassportExpressRequestMock = Partial<express.Request> & IKoaContextContainer;

interface VerifyFunctionWithRequest {
    (req: express.Request, token: string, done: (error: any, user?: any, options?: IVerifyOptions | string) => void): void;
}
interface VerifyFunctionWithContext {
    (req: KoaPassportExpressRequestMock, token: string, done: (error: any, user?: any, options?: IVerifyOptions | string) => void): void;
}

type VerifyFunctions =
    | VerifyFunction
    | VerifyFunctionWithRequest
    | VerifyFunctionWithContext;

declare class Strategy<T extends VerifyFunctions> implements passport.Strategy {
    constructor(verify: VerifyFunction);
    constructor(options: IStrategyOptions, verify: T);

    name: string;
    authenticate(req: express.Request, options?: Object): void;
}
