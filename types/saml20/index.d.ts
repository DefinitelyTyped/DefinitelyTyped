// Type definitions for saml20 0.1
// Project: https://github.com/leandrob/saml20
// Definitions by: Jan Petzold <https://github.com/HackerUndKoch>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Profile {
    issuer: string;
    claims: any;
    audience?: string;
    sessionIndex?: string; // only SAML 2.0
}

export type ValidationOptions = ValidationOptionsWithKey | ValidationOptionsWithPrint;

export interface ValidationOptionsWithKey {
    publicKey: string;
    bypassExpiration?: boolean;
    audience?: any;
}

export interface ValidationOptionsWithPrint {
    thumbprint: string;
    bypassExpiration?: boolean;
    audience?: any;
}

export type ParseCallback = (err: Error | null, profile: Profile, version: string) => void;

export function parse(rawAssertion: string, cb: ParseCallback): void;
export function validate(rawAssertion: string, options: ValidationOptions, cb: ParseCallback): void;
