// Type definitions for pem-jwk 1.5
// Project: https://github.com/dannycoates/pem-jwk
// Definitions by: Alessio Paccoia <https://github.com/alessiopcc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function pem2jwk(pem: string): RSAJWK;
export function jwk2pem(jwk: RSAJWK): string;

export type RSAJWK = RSAPrivateJWK | RSAPublicJWK;

export interface RSAPrivateJWK {
    kty: string;
    n: string;
    e: string;
    d: string;
    p: string;
    q: string;
    dp: string;
    dq: string;
    qi: string;
}

export interface RSAPublicJWK {
    kty: string;
    n: string;
    e: string;
}
