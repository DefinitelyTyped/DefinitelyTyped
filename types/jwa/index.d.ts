type Algorithm =
    | "HS256"
    | "HS384"
    | "HS512"
    | "RS256"
    | "RS384"
    | "RS512"
    | "PS256"
    | "PS384"
    | "PS512"
    | "ES256"
    | "ES384"
    | "ES512"
    | "none";

interface JWA {
    sign(input: string, secretOrPrivateKey: string): string;

    verify(input: string, signature: string, secretOrPublicKey: string): boolean;
}

declare function jwa(algorithm: Algorithm): JWA;

export = jwa;
