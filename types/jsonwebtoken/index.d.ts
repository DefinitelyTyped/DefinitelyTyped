// Type definitions for jsonwebtoken 7.2.2
// Project: https://github.com/auth0/node-jsonwebtoken
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>,
//                 Daniel Heim <https://github.com/danielheim>,
//                 Brice BERNARD <https://github.com/brikou>,
//                 Veli-Pekka Kestilä <https://github.com/vpk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

export class JsonWebTokenError extends Error {
    inner: Error;

    constructor(message: string, error?: Error);
}

export class TokenExpiredError extends JsonWebTokenError {
    expiredAt: number;

    constructor(message: string, expiredAt: number);
}

export class NotBeforeError extends JsonWebTokenError {
    date: Date;

    constructor(message: string, date: Date);
}

export interface SignOptions {
    /**
     * Signature algorithm. Could be one of these values :
     * - HS256:    HMAC using SHA-256 hash algorithm (default)
     * - HS384:    HMAC using SHA-384 hash algorithm
     * - HS512:    HMAC using SHA-512 hash algorithm
     * - RS256:    RSASSA using SHA-256 hash algorithm
     * - RS384:    RSASSA using SHA-384 hash algorithm
     * - RS512:    RSASSA using SHA-512 hash algorithm
     * - ES256:    ECDSA using P-256 curve and SHA-256 hash algorithm
     * - ES384:    ECDSA using P-384 curve and SHA-384 hash algorithm
     * - ES512:    ECDSA using P-521 curve and SHA-512 hash algorithm
     * - none:     No digital signature or MAC value included
     */
    algorithm?: string;
    keyid?: string;
    /** @member {string} - expressed in seconds or a string describing a time span [zeit/ms](https://github.com/zeit/ms.js).  Eg: 60, "2 days", "10h", "7d" */
    expiresIn?: string | number;
    /** @member {string} - expressed in seconds or a string describing a time span [zeit/ms](https://github.com/zeit/ms.js).  Eg: 60, "2 days", "10h", "7d" */
    notBefore?: string | number;
    audience?: string | string[];
    subject?: string;
    issuer?: string;
    jwtid?: string;
    noTimestamp?: boolean;
    header?: object;
    encoding?: string;
}

export interface VerifyOptions {
    algorithms?: string[];
    audience?: string | string[];
    clockTimestamp?: number;
    clockTolerance?: number;
    issuer?: string | string[];
    ignoreExpiration?: boolean;
    ignoreNotBefore?: boolean;
    jwtid?: string;
    subject?: string;
    /**
     *@deprecated
     *@member {string} - Max age of token
     */
    maxAge?: string;
}

export interface DecodeOptions {
    complete?: boolean;
    json?: boolean;
}
export type VerifyErrors=JsonWebTokenError | NotBeforeError | TokenExpiredError;
export interface VerifyCallback {
    (
        err: VerifyErrors,
        decoded: object | string,
    ): void;
}

export interface SignCallback {
    (err: Error, encoded: string): void;
}

export type Secret = string | Buffer | { key: string; passphrase: string };

/**
 * Synchronously sign the given payload into a JSON Web Token string
 * @param {String|Object|Buffer} payload - Payload to sign, could be an literal, buffer or string
 * @param {String|Buffer} secretOrPrivateKey - Either the secret for HMAC algorithms, or the PEM encoded private key for RSA and ECDSA.
 * @param {SignOptions} [options] - Options for the signature
 * @returns {String} The JSON Web Token string
 */
export declare function sign(
    payload: string | Buffer | object,
    secretOrPrivateKey: Secret,
    options?: SignOptions,
): string;

/**
 * Sign the given payload into a JSON Web Token string
 * @param {String|Object|Buffer} payload - Payload to sign, could be an literal, buffer or string
 * @param {String|Buffer} secretOrPrivateKey - Either the secret for HMAC algorithms, or the PEM encoded private key for RSA and ECDSA.
 * @param {SignOptions} [options] - Options for the signature
 * @param {Function} callback - Callback to get the encoded token on
 */
export declare function sign(
    payload: string | Buffer | object,
    secretOrPrivateKey: Secret,
    callback: SignCallback,
): void;
export declare function sign(
    payload: string | Buffer | object,
    secretOrPrivateKey: Secret,
    options: SignOptions,
    callback: SignCallback,
): void;

/**
 * Synchronously verify given token using a secret or a public key to get a decoded token
 * @param {String} token - JWT string to verify
 * @param {String|Buffer} secretOrPublicKey - Either the secret for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA.
 * @param {VerifyOptions} [options] - Options for the verification
 * @returns The decoded token.
 */
export declare function verify(
    token: string,
    secretOrPublicKey: string | Buffer,
): object | string;
export declare function verify(
    token: string,
    secretOrPublicKey: string | Buffer,
    options?: VerifyOptions,
): object | string;

/**
 * Asynchronously verify given token using a secret or a public key to get a decoded token
 * @param {String} token - JWT string to verify
 * @param {String|Buffer} secretOrPublicKey - Either the secret for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA.
 * @param {VerifyOptions} [options] - Options for the verification
 * @param {Function} callback - Callback to get the decoded token on
 */
export declare function verify(
    token: string,
    secretOrPublicKey: string | Buffer,
    callback?: VerifyCallback,
): void;
export declare function verify(
    token: string,
    secretOrPublicKey: string | Buffer,
    options?: VerifyOptions,
    callback?: VerifyCallback,
): void;

/**
 * Returns the decoded payload without verifying if the signature is valid.
 * @param {String} token - JWT string to decode
 * @param {DecodeOptions} [options] - Options for decoding
 * @returns {Object} The decoded Token
 */
export declare function decode(
    token: string,
    options?: DecodeOptions,
): null | { [key: string]: any } | string;

