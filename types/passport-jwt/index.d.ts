import * as express from "express";
import { VerifyOptions } from "jsonwebtoken";
import { Strategy as PassportStrategy } from "passport-strategy";

export declare class Strategy extends PassportStrategy {
    constructor(opt: StrategyOptions, verify: VerifyCallback);
    constructor(opt: StrategyOptions, verify: VerifyCallbackWithRequest);
    name: string;
}

export interface StrategyOptions {
    secretOrKey?: string | Buffer | undefined;
    secretOrKeyProvider?: SecretOrKeyProvider | undefined;
    jwtFromRequest: JwtFromRequestFunction;
    issuer?: string | string[] | undefined;
    audience?: string | string[] | undefined;
    algorithms?: string[] | undefined;
    ignoreExpiration?: boolean | undefined;
    passReqToCallback?: boolean | undefined;
    jsonWebTokenOptions?: VerifyOptions | undefined;
}

export interface VerifyCallback {
    (payload: any, done: VerifiedCallback): void;
}

export interface VerifyCallbackWithRequest {
    (req: express.Request, payload: any, done: VerifiedCallback): void;
}

export interface VerifiedCallback {
    (error: any, user?: Express.User | false, info?: any): void;
}

export interface JwtFromRequestFunction {
    (req: express.Request): string | null;
}

export interface SecretOrKeyProvider {
    (request: express.Request, rawJwtToken: any, done: (err: any, secretOrKey?: string | Buffer) => void): void;
}

export declare namespace ExtractJwt {
    export function fromHeader(header_name: string): JwtFromRequestFunction;
    export function fromBodyField(field_name: string): JwtFromRequestFunction;
    export function fromUrlQueryParameter(param_name: string): JwtFromRequestFunction;
    export function fromAuthHeaderWithScheme(auth_scheme: string): JwtFromRequestFunction;
    export function fromAuthHeader(): JwtFromRequestFunction;
    export function fromExtractors(extractors: JwtFromRequestFunction[]): JwtFromRequestFunction;
    export function fromAuthHeaderAsBearerToken(): JwtFromRequestFunction;
}
