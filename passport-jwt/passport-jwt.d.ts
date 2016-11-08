// Type definitions for passport-jwt 2.0
// Project: https://github.com/themikenicholson/passport-jwt
// Definitions by: TANAKA Koichi <https://github.com/mugeso/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../passport-strategy/passport-strategy.d.ts" />
/// <reference path="../express/express.d.ts" />

declare module 'passport-jwt' {
    import {Strategy as PassportStrategy} from 'passport-strategy';
    import {Request} from 'express';

    export class Strategy extends PassportStrategy {
        constructor(opt: StrategyOptions, verify: VerifyCallback);
        constructor(opt: StrategyOptions, verify: VerifyCallbackWithRequest);
    }

    export interface StrategyOptions {
        secretOrKey: string;
        jwtFromRequest: JwtFromRequestFunction;
        issuer?: string;
        audience?: string;
        algorithms?: string[];
        ignoreExpiration?: boolean;
        passReqToCallback?: boolean;
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

    export namespace ExtractJwt {
        export function fromHeader(header_name: string): JwtFromRequestFunction;
        export function fromBodyField(field_name: string): JwtFromRequestFunction;
        export function fromUrlQueryParameter(param_name: string): JwtFromRequestFunction;
        export function fromAuthHeaderWithScheme(auth_scheme: string): JwtFromRequestFunction;
        export function fromAuthHeader(): JwtFromRequestFunction;
    }
}
