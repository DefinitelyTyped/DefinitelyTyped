// Type definitions for jwa 2.0
// Project: https://github.com/auth0/node-jwa#readme
// Definitions by: Daniel Hritzkiv <https://github.com/dhritzkiv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Algorithm = "HS256" | "HS384" | "HS512" | "RS256" | "RS384" | "RS512" | "PS256" | "PS384" | "PS512" | "ES256" | "ES384" | "ES512" | "none";

interface JWA {
    sign(input: string, secretOrPrivateKey: string): string;

    verify(input: string, signature: string, secretOrPublicKey: string): boolean;
}

declare function jwa(algorithm: Algorithm): JWA;

export = jwa;
