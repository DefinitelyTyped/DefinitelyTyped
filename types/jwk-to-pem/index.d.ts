// Type definitions for jwk-to-pem 2.0
// Project: https://github.com/Brightspace/node-jwk-to-pem#readme
// Definitions by: Erik Silkensen <https://github.com/esilkensen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace jwkToPem {
    interface Options {
        private: boolean;
    }

    interface EC {
        kty: "EC";
        crv: string;
        x: string;
        y: string;
    }

    interface ECPrivate {
        kty: "EC";
        crv: string;
        d: string;
        x?: string;
        y?: string;
    }

    interface RSA {
        kty: "RSA";
        e: string;
        n: string;
        d?: string;
        p?: string;
        q?: string;
        dp?: string;
        dq?: string;
        qi?: string;
    }

    type JWK = EC | ECPrivate | RSA;

    type jwkToBuffer = (jwk: JWK, opts?: Options) => string;
}

declare const jwkToPem: jwkToPem.jwkToBuffer;
export = jwkToPem;
