// Type definitions for passport-jwt 3.0
// Project: https://github.com/themikenicholson/passport-jwt
// Definitions by: TANAKA Koichi <https://github.com/mugeso/>
//                 Alex Young <https://github.com/alsiola/>
//                 David Ng <https://github.com/davidNHK/>
//                 Carlos Eduardo Scheffer <https://github.com/carlosscheffer/>
//                 Byungjin Kim <https://github.com/jindev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Strategy as PassportStrategy } from 'passport-strategy';
import {Request} from 'express';
import { VerifyOptions } from 'jsonwebtoken'

export declare class Strategy extends PassportStrategy {
    constructor(opt: StrategyOptions, verify: VerifyCallback);
    constructor(opt: StrategyOptions, verify: VerifyCallbackWithRequest);
}

export interface StrategyOptions {
    secretOrKey?: string | Buffer;
    secretOrKeyProvider?: any;
    jwtFromRequest: JwtFromRequestFunction;
    issuer?: string;
    audience?: string;
    algorithms?: string[];
    ignoreExpiration?: boolean;
    passReqToCallback?: boolean;
    jsonWebTokenOptions?: VerifyOptions;
}

export interface VerifyCallback {
    (payload: any, done: VerifiedCallback): void;
}

export interface VerifyCallbackWithRequest {
    (req: Request, payload: any, done: VerifiedCallback): void;
}

export interface VerifiedCallback {
    (error: any, user?: any, info?: any): void;
}

export interface JwtFromRequestFunction {
    (req: Request): string;
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
