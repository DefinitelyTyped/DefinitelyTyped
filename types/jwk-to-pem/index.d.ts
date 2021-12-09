// Type definitions for jwk-to-pem 2.0
// Project: https://github.com/Brightspace/node-jwk-to-pem#readme
// Definitions by: Erik Silkensen <https://github.com/esilkensen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = jwkToBuffer;

declare function jwkToBuffer(jwk: jwkToBuffer.JWK, opts?: jwkToBuffer.Options): string;

declare namespace jwkToBuffer {
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
        x?: string | undefined;
        y?: string | undefined;
    }

    interface RSA {
        kty: "RSA";
        e: string;
        n: string;
        d?: string | undefined;
        p?: string | undefined;
        q?: string | undefined;
        dp?: string | undefined;
        dq?: string | undefined;
        qi?: string | undefined;
    }

    type JWK = EC | ECPrivate | RSA;
}
