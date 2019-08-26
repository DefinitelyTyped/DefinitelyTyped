// Type definitions for jwk-to-pem 2.0.1
// Project: https://github.com/Brightspace/node-jwk-to-pem
// Definitions by: Rodrigo Sasaki <https://github.com/rodrigopsasaki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface JWK {
    kty: string;
    n: string;
    e: string;
    d?: string;
    p?: string;
    q?: string;
    dp?: string;
    dq?: string;
    qi?: string;
    crv?: string;
    x?: string;
    y?: string;
}

export interface JWKOptions {
    private: boolean;
}

export function jwkToBuffer(jwk: JWK, opts: JWKOptions): string;
