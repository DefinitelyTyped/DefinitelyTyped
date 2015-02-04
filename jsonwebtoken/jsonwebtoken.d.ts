// Type definitions for jsonwebtoken 0.4.0
// Project: https://github.com/auth0/node-jsonwebtoken
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" /> 

declare module "jsonwebtoken" {

    export interface SignOptions {
        /**
         * Signature algorithm. Could be one of these values :
         * - HS256:    HMAC using SHA-256 hash algorithm
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
        /** @member {number} - Lifetime for the token in minutes */
        expiresInMinutes?: number;
        audience?: string;
        subject?: string;
        issuer?: string;
    }

    export interface VerifyOptions {
        audience?: string;
        issuer?: string;
    }

    export interface VerifyCallbak {
        (err: Error, decoded: any): void;
    }

    /**
     * Sign the given payload into a JSON Web Token string
     * @param {String|Object|Buffer} payload - Payload to sign, could be an literal, buffer or string
     * @param {String|Buffer} secretOrPrivateKey - Either the secret for HMAC algorithms, or the PEM encoded private key for RSA and ECDSA.
     * @param {SignOptions} [options] - Options for the signature
     * @returns {String} The JSON Web Token string
     */
    export function sign(payload: string, secretOrPrivateKey: string): string;
    export function sign(payload: string, secretOrPrivateKey: Buffer): string;
    export function sign(payload: Buffer, secretOrPrivateKey: string): string;
    export function sign(payload: Buffer, secretOrPrivateKey: Buffer): string;
    export function sign(payload: Object, secretOrPrivateKey: string): string;
    export function sign(payload: Object, secretOrPrivateKey: Buffer): string;
    export function sign(payload: string, secretOrPrivateKey: string, options: SignOptions): string;
    export function sign(payload: string, secretOrPrivateKey: Buffer, options: SignOptions): string;
    export function sign(payload: Buffer, secretOrPrivateKey: string, options: SignOptions): string;
    export function sign(payload: Buffer, secretOrPrivateKey: Buffer, options: SignOptions): string;
    export function sign(payload: Object, secretOrPrivateKey: string, options: SignOptions): string;
    export function sign(payload: Object, secretOrPrivateKey: Buffer, options: SignOptions): string;

    /**
     * Verify given token using a secret or a public key to get a decoded token
     * @param {String} token - JWT string to verify
     * @param {String|Buffer} secretOrPublicKey - Either the secret for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA.
     * @param {VerifyOptions} [options] - Options for the verification
     * @param {Function} callback - Callback to get the decoded token on
     */
    function verify(token: string, secretOrPublicKey: string, callback: VerifyCallbak): void;
    function verify(token: string, secretOrPublicKey: Buffer, callback: VerifyCallbak): void;
    function verify(token: string, secretOrPublicKey: string, options: VerifyOptions, callback: VerifyCallbak): void;
    function verify(token: string, secretOrPublicKey: Buffer, options: VerifyOptions, callback: VerifyCallbak): void;

    /**
     * Returns the decoded payload without verifying if the signature is valid.
     * @param {String} token - JWT string to decode
     * @returns {Object} The decoded Token
     */
    function decode(token: string): any;
}
