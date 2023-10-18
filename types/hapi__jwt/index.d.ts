/// <reference types="node" />

import { Plugin, Request, ResponseObject, ResponseToolkit } from "@hapi/hapi";

declare module "@hapi/hapi" {
    interface ServerAuth {
        /**
         * Function to define the server authentication strategy to be used.
         *
         * @param name string name to define the strategy.
         * @param scheme jwt for this plugin.
         * @param options jwt plugin options.
         */
        strategy(name: string, scheme: "jwt", options?: hapiJwt.Options): void;
    }
}

declare namespace hapiJwt {
    // Common definitions

    type SupportedAlgorithm =
        | "RS256"
        | "RS384"
        | "RS512"
        | "PS256"
        | "PS384"
        | "PS512"
        | "ES256"
        | "ES384"
        | "ES512"
        | "HS256"
        | "HS384"
        | "HS512";
    type NoAlgorithm = "none";

    interface StandardKey {
        /**
         * String or binary data that is used for shared secret.
         */
        key: string | Buffer;
        /**
         * Array of accepted algorithms
         */
        algorithms?: SupportedAlgorithm[] | undefined;
        /**
         * String representing the key ID header.
         */
        kid?: string | undefined;
    }

    interface JWKSKey {
        /**
         * String that defines your json web key set uri.
         */
        uri: string;
        /**
         * Boolean that determines if TLS flag indicating whether the client should reject a response from a server with invalid certificates. Default is true.
         */
        rejectUnauthorized?: boolean | undefined;
        /**
         * Object containing the request headers to send to the uri.
         */
        header?: object | undefined;
        /**
         * Array of accepted algorithms.
         */
        algorithms?: SupportedAlgorithm[] | undefined;
    }

    type Key = StandardKey | JWKSKey;

    interface DecodedToken {
        /**
         * An object that contain the header information.
         */
        header: {
            /**
             * The algorithm used to sign the token.
             */
            alg: string;
            /**
             *  The token type.
             */
            typ?: "JWT" | undefined;
        };
        /**
         *  An object containing the payload.
         */
        payload: any;
        /**
         *  The signature string of the token.
         */
        signature: string;
    }

    interface RawToken {
        /**
         *  The header of the token.
         */
        header: string;
        /**
         *  The payload of the token.
         */
        payload: string;
        /**
         *  The signature of the token.
         */
        signature: string;
    }

    interface Artifacts {
        /**
         * The complete token that was sent.
         */
        token: string;
        /**
         * An object that contains decoded token.
         */
        decoded: DecodedToken;
        /**
         * An object that contains the token that was sent broken out by header, payload, and signature.
         */
        raw: RawToken;
        /**
         * An array of information about key(s) used for authentication.
         */
        keys?: StandardKey[] | undefined;
    }

    // Plugin definitions

    interface VerifyKeyOptions {
        /**
         * String or RegExp or array of strings or RegExp that matches the audience of the token. Set to boolean false to not verify aud.
         */
        aud: string | string[] | RegExp | RegExp[] | false;
        /**
         * String or array of strings that matches the issuer of the token. Set to boolean false to not verify iss.
         */
        iss: string | string[] | false;
        /**
         * String or array of strings that matches the subject of the token. Set to boolean false to not verify sub.
         */
        sub: string | string[] | false;
        /**
         * Boolean to determine if the "Not Before" NumericDate of the token should be validated. Default is true.
         */
        nbf?: boolean | undefined;
        /**
         * Boolean to determine if the "Expiration Time" NumericDate of the token should be validated. Default is true.
         */
        exp?: boolean | undefined;
        /**
         * Integer to determine the maximum age of the token in seconds. Default is 0.
         */
        maxAgeSec?: number | undefined;
        /**
         * Integer to adust exp and maxAgeSec to account for server time drift in seconds. Default is 0.
         */
        timeSkewSec?: number | undefined;
    }

    interface ValidationResult {
        /**
         * Boolean that should be set to true if additional validation passed, otherwise false.
         */
        isValid: boolean;
        /**
         * Object passed back to the application in request.auth.credentials.
         */
        credentials?: object | undefined;
        /**
         * Will be used immediately as a takeover response. isValid and credentials are ignored if provided.
         */
        response?: ResponseObject | undefined;
    }

    interface Options {
        /**
         * The key method to be used for jwt verification.
         */
        keys: string | string[] | Buffer | Key | Key[] | NoAlgorithm[] | ((param: any) => string);
        /**
         * Object to determine how key contents are verified beyond key signature. Set to false to do no verification.
         */
        verify: VerifyKeyOptions | false;
        /**
         * String the represents the Authentication Scheme. Default is 'Bearer'.
         */
        httpAuthScheme?: string | undefined;
        /**
         * String passed directly to Boom.unauthorized if no custom err is thrown. Defaults to undefined.
         */
        unauthorizedAttributes?: string | undefined;
        /**
         * Function that allows additional validation based on the decoded payload and to put specific credentials in the request object. Can be set to false if no additional validation is needed.
         *
         * @param artifacts an object that contains information from the token.
         * @param request the hapi request object of the request which is being authenticated.
         * @param h the response toolkit.
         */
        validate:
            | ((artifacts: Artifacts, request: Request, h: ResponseToolkit) => Promise<ValidationResult> | never)
            | false;
    }

    // Token definitions

    type AdditionalCredentials = any;

    interface Payload extends AdditionalCredentials {
        /**
         * The "iss" (issuer) claim identifies the principal that issued the JWT. Expressed in a string.
         */
        iss?: string | undefined;
        /**
         * The "sub" (subject) claim identifies the principal that is the subject of the JWT. Expressed in a string.
         */
        sub?: string | undefined;
        /**
         * The "aud" (audience) claim identifies the recipients that the JWT is intended for. Expressed in a string.
         */
        aud?: string | undefined;
        /**
         * The "exp" (expiration time) claim identifies the expiration time on or after which the JWT MUST NOT be accepted for processing. Expressed in NumericDate.
         */
        exp?: number | undefined;
        /**
         * The "nbf" (not before) claim identifies the time before which the JWT MUST NOT be accepted for processing. Expressed in NumericDate.
         */
        nbf?: number | undefined;
        /**
         * The "iat" (issued at) claim identifies the time at which the JWT was issued. Expressed in NumericDate.
         */
        iat?: number | undefined;
        /**
         * The "jti" (JWT ID) claim provides a unique identifier for the JWT. Expressed in a string.
         */
        jti?: string | undefined;
        /**
         * While nonce is not an RFC 7519 Registered Claim, it is used on Open ID for the ID Tokens.
         */
        nonce?: string | undefined;
    }

    type Secret = string | Buffer | { key: string | Buffer; algorithm: SupportedAlgorithm | NoAlgorithm };

    interface GenerateOptions {
        /**
         * Object to put additional key/value pairs in the header of the token in addition to alg and typ.
         */
        header?: object | undefined;
        /**
         * Boolean if set to false typ: 'JWT' is not included in the header.
         */
        typ?: boolean | undefined;
        /**
         * Integer as an alternative way to set iat claim. Takes JavaScript style epoch time (with ms). iat claim must not be set and iat option must not be false. Milliseconds are truncated.
         */
        now?: number | undefined;
        /**
         * Integer as an alternative way to set exp claim. exp is set to be iat + ttlSec. exp claim must not be set.
         */
        ttlSec?: number | undefined;
        /**
         * Boolean if set to false typ: 'JWT' is not included in the header.
         */
        iat?: boolean | undefined;
        /**
         * String to set the encoding use for stringify the payload. Default is utf8.
         */
        encoding?: string | undefined;
        /**
         * Boolean if set to true will decode a valid headless token. Default is false.
         */
        headless?: boolean | undefined;
    }

    interface DecodeOptions {
        /**
         * Boolean if set to true will decode a valid headless token. Default is false.
         */
        headless: boolean;
    }

    interface VerifyTokenOptions extends TimeOptions {
        /**
         * String or RegExp or array of strings or RegExp that matches the audience of the token. Set to boolean false to not verify aud.
         */
        aud: string | string[] | RegExp | RegExp[] | false;
        /**
         * String or array of strings that matches the issuer of the token. Set to boolean false to not verify iss.
         */
        iss: string | string[] | false;
        /**
         * String or array of strings that matches the subject of the token. Set to boolean false to not verify sub.
         */
        sub: string | string[] | false;
        /**
         * String or array of strings that matches the JWT ID of the token.
         */
        jti?: string | string[] | undefined;
        /**
         * String or array of strings that matches the nonce of the token. nonce is used on Open ID for the ID Tokens.
         */
        nonce?: string | string[] | undefined;
        /**
         * Integer that represents the "Not Before" NumericDate of the token.
         */
        nbf?: number | undefined;
    }

    interface TimeOptions {
        /**
         * Integer that represents the current time in JavaScript epoch format (with msecs). When evaluated the msecs are truncated, not rounded. Either this or nowSec need to be defined.
         */
        now?: number | undefined;
        /**
         * Integer that represents the "Expiration Time" NumericDate of the token.
         */
        exp?: number | undefined;
        /**
         * Integer to determine the maximum age of the token in seconds. This is time validation using the "Issued At" NumericDate (iat).
         */
        maxAgeSec?: number | undefined;
        /**
         * Integer to adjust exp and maxAgeSec to account for server time drift in seconds.
         */
        timeSkewSec?: number | undefined;
    }

    interface Token {
        /**
         * Generates a token as a string.
         *
         * @param payload object of decoded token in artifacts format.
         * @param secret object, string or buffer that creates signature.
         * @param options optional configuration object.
         */
        generate: (payload: Payload, secret: Secret, options?: GenerateOptions) => string;
        /**
         * Returns an object of a decoded token in the format of artifacts. This does not verify the token, it only decodes it.
         *
         * @param token string of encoded token.
         * @param options optional configuration object.
         */
        decode: (token: string, options?: DecodeOptions) => Artifacts | never;
        /**
         * A function that will complete if verification passes or throw an error if verification fails.
         *
         * @param artifacts object of decoded token in artifacts format.
         * @param secret object, string or buffer that creates signature.
         * @param options optional configuration object.
         */
        verify: (artifacts: Artifacts, secret: Secret, options?: VerifyTokenOptions) => void | never;
        /**
         * A function that will complete if the signature is valid or throw an error if invalid. This does not do verification on the payload.
         * An expired token will not throw an error if the signature is valid.
         *
         * @param artifacts object of decoded token in artifacts format.
         * @param raw object of decoded token in raw format.
         * @param secret object, string or buffer that creates signature.
         */
        verifySignature: (artifacts: Artifacts, secret: Secret) => void | never;
        /**
         * A function that will complete if payload verification passes or throw an error if payload verification fails. This does not do verification on the signature.
         *
         * @param artifacts object of decoded token in artifacts format..
         * @param options optional configuration object.
         */
        verifyPayload: (artifacts: Artifacts, options?: VerifyTokenOptions) => void | never;
        /**
         * A function that will complete if iat and exp verification pass and throw an error if verification fails. This is a subset of verifyPayload for only iat and exp.
         *
         * @param artifacts object of decoded token in artifacts format.
         * @param options optional configuration object.
         * @param nowSec integer that represents the current time in JavaScript epoch format (with msecs). When evaluated the msecs are truncated, not rounded.
         */
        verifyTime: (artifacts: Artifacts, options?: TimeOptions, nowSec?: number) => void | never;

        signature: {
            /**
             * Function to generate a signature using a supported algorithm.
             *
             * @param value string that represents the signer.
             * @param algorithm string containing an accepted algorithm to be used.
             * @param key string that represents the signature.
             */
            generate: (value: string, algorithm: SupportedAlgorithm | NoAlgorithm, key: string) => string | never;
            /**
             * Function to verify a signature using a supported algorithm.
             *
             * @param raw an object that contains the token that was sent broken out by header, payload, and signature.
             * @param algorithm string containing an accepted algorithm to be used.
             * @param key string signature to be verify.
             */
            verify: (raw: RawToken, algorithm: SupportedAlgorithm | NoAlgorithm, key: string) => boolean | never;
        };
    }

    // Crypto definitions

    interface Crypto {
        /**
         * Function to convert RSA public key to PEM format.
         *
         * @param modulusB64 string that represents the modulus (product of two large primes) in base64.
         * @param exponentB64 string that represents the encryption exponent in base64.
         */
        rsaPublicKeyToPEM: (modulusB64: string, exponentB64: string) => string;
    }

    // Utils definitions

    interface Utils {
        /**
         * Function that converts an object to a string in base64.
         *
         * @param obj object to be converted.
         */
        b64stringify: (obj: object) => string;
        /**
         * Function that converts a number to hexadecimal string.
         *
         * @param number number to be converted.
         */
        toHex: (number: number) => string;
    }
}

declare const hapiAuthJwt: {
    plugin: Plugin<void>;
    token: hapiJwt.Token;
    crypto: hapiJwt.Crypto;
    utils: hapiJwt.Utils;
};

export = hapiAuthJwt;
