// Type definitions for passport-jwt 2.0
// Project: https://github.com/ripjar/passport-client-cert
// Definitions by: Sean Warner <https://github.com/warnersean/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import {Strategy as PassportStrategy} from 'passport-strategy';
import {Request} from 'express';

export class Strategy extends PassportStrategy {
    constructor(verify: PkiCallback);
    constructor(opt: StrategyOptions, verify: PkiCallback | PkiCallbackWithRequest);
}

export interface StrategyOptions {
    passReqToCallback?: boolean;
}

export type PkiCallback = (payload: ClientCert, done: PkiVerifiedCallback) => void;

export type PkiCallbackWithRequest = (req: Request, payload: ClientCert, done: PkiVerifiedCallback) => void;

export interface ClientCert {
    exponent: string;
    fingerprint: string;
    issuer: any;
    modulus: string;
    raw: Uint8Array;
    serialNumber: string;
    subject: any;
    valid_from: string;
    valid_to: string;
}

export type PkiVerifiedCallback = (error: any, user?: any, info?: any) => void;
