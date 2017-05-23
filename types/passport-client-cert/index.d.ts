// Type definitions for passport-jwt 2.0
// Project: https://github.com/ripjar/passport-client-cert
// Definitions by: Sean Warner <https://github.com/warnersean/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {Strategy as PassportStrategy} from 'passport-strategy';
import {Request} from 'express';

export declare class Strategy extends PassportStrategy {
    constructor(verify: IPkiCallback);
    constructor(opt: StrategyOptions, verify: IPkiCallback);
    constructor(opt: StrategyOptions, verify: IPkiCallbackWithRequest);
}

export interface StrategyOptions {
    passReqToCallback?: boolean;
}

export interface IPkiCallback {
    (payload: IClientCert, done: IPkiVerifiedCallback): void;
}

export interface IPkiCallbackWithRequest {
    (req: Request, payload: IClientCert, done: IPkiVerifiedCallback): void;
}

export interface IClientCert {
    exponent: string;
    fingerprint: string;
    issuer: {[key: string]: string};
    modulus: string;
    raw: Uint8Array;
    serialNumber: string;
    subject: {[key: string]: string};
    valid_from: string;
    valid_to: string;
}

export interface IPkiVerifiedCallback {
    (error: any, user?: any, info?: any): void;
}
