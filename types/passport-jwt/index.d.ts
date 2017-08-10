// Type definitions for passport-jwt 2.2.1
// Project: https://github.com/themikenicholson/passport-jwt
// Definitions by: TANAKA Koichi <https://github.com/mugeso/>
//                 Alex Young <https://github.com/alsiola/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Strategy as PassportStrategy } from 'passport-strategy';
import { Request } from 'express';

export class Strategy extends PassportStrategy {
    constructor(opt: StrategyOptions, verify: VerifyCallback | VerifyCallbackWithRequest );
}

export interface StrategyOptions {
    secretOrKey: string | Buffer;
    jwtFromRequest: JwtFromRequestFunction;
    issuer?: string;
    audience?: string;
    algorithms?: string[];
    ignoreExpiration?: boolean;
    passReqToCallback?: boolean;
}

export type VerifyCallback = (payload: any, done: VerifiedCallback) => void;
export type VerifyCallbackWithRequest = (req: Request, payload: any, done: VerifiedCallback) => void;
export type VerifiedCallback = (error: any, user?: any, info?: any) => void;
export type JwtFromRequestFunction = (req: Request) => string;

export namespace ExtractJwt {
    function fromHeader(header_name: string): JwtFromRequestFunction;
    function fromBodyField(field_name: string): JwtFromRequestFunction;
    function fromUrlQueryParameter(param_name: string): JwtFromRequestFunction;
    function fromAuthHeaderWithScheme(auth_scheme: string): JwtFromRequestFunction;
    function fromAuthHeader(): JwtFromRequestFunction;
    function fromAuthHeaderAsBearerToken(): JwtFromRequestFunction;
    function fromExtractors(extractors: JwtFromRequestFunction[]): JwtFromRequestFunction;
}
