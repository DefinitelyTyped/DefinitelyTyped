import passport = require("passport");
import express = require("express");

export interface BasicStrategyOptions<req extends boolean = boolean> {
    realm?: string | undefined;
    passReqToCallback?: req | undefined;
}

export interface DigestStrategyOptions {
    realm?: string | undefined;
    domain?: string | string[] | undefined;
    opaque?: string | undefined;
    algorithm?: string | undefined;
    qop?: string | string[] | undefined;
}

export interface DigestValidateOptions {
    nonce: string;
    cnonce: string;
    nc: number;
    opaque: string;
}

export type BasicVerifyFunction = (
    username: string,
    password: string,
    done: (error: any, user?: any) => void,
) => any;

export type BasicVerifyFunctionWithRequest = (
    req: express.Request,
    username: string,
    password: string,
    done: (error: any, user?: any) => void,
) => any;

export type DigestSecretFunction = (
    username: string,
    done: (error: any, user?: any, password?: any) => void,
) => any;

export type DigestValidateFunction = (
    params: DigestValidateOptions,
    done: (error: any, valid: boolean) => void,
) => any;

export class BasicStrategy implements passport.Strategy {
    constructor(verify: BasicVerifyFunction);
    constructor(options: BasicStrategyOptions<false>, verify: BasicVerifyFunction);
    constructor(options: BasicStrategyOptions<true>, verify: BasicVerifyFunctionWithRequest);

    name: string;
    authenticate(req: express.Request, options?: object): void;
}

export class DigestStrategy implements passport.Strategy {
    constructor(secret: DigestSecretFunction, validate?: DigestValidateFunction);
    constructor(options: DigestStrategyOptions, secret: DigestSecretFunction, validate?: DigestValidateFunction);

    name: string;
    authenticate(req: express.Request, options?: object): void;
}
