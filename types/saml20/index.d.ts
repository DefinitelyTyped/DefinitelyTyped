export interface Profile {
    issuer: string;
    claims: any;
    audience?: string | undefined;
    sessionIndex?: string | undefined; // only SAML 2.0
}

export type ValidationOptions = ValidationOptionsWithKey | ValidationOptionsWithPrint;

export interface ValidationOptionsWithKey {
    publicKey: string;
    bypassExpiration?: boolean | undefined;
    audience?: any;
}

export interface ValidationOptionsWithPrint {
    thumbprint: string;
    bypassExpiration?: boolean | undefined;
    audience?: any;
}

export type ParseCallback = (err: Error | null, profile: Profile, version: string) => void;

export function parse(rawAssertion: string, cb: ParseCallback): void;
export function validate(rawAssertion: string, options: ValidationOptions, cb: ParseCallback): void;
