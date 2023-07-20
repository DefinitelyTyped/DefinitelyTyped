// Type definitions for jws 3.2
// Project: https://github.com/auth0/node-jws
// Definitions by: Justin Beckwith <https://github.com/JustinBeckwith>, Denis Olsem <https://github.com/dolsem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as events from 'events';
import * as stream from 'stream';

/**
 * (Synchronous) Return a JSON Web Signature for a header
 * and a payload.
 */
export function sign(options: SignOptions): string;

/**
 * (Synchronous) Returns true or false for whether a signature
 * matches a secret or key.
 * @param signature JWS Signature
 * @param algorithm Algorithm
 * @param secretOrKey string or buffer containing either the secret
 * for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA
 */
export function verify(signature: string, algorithm: Algorithm, secretOrKey: string|Buffer): boolean;

/**
 * (Synchronous) Returns the decoded header, decoded payload,
 * and signature parts of the JWS Signature.
 */
export function decode(signature: string, options?: DecodeOptions): Signature;

/**
 * (Synchronous) Validates that the signature seems to be a legitimate JWS signature.
 * @param signature JWS Signature
 */
export function isValid(signature: string): boolean;

/**
 * Returns a new SignStream object.
 */
export function createSign(options: SignOptions): SignStream;

/**
 * Returns a new VerifyStream object.
 */
export function createVerify(options?: VerifyOptions): VerifyStream;

/**
 * A Readable Stream that emits a single data event, the
 * calculated signature, when done.
 */
export interface SignStream extends stream.Readable {
    /**
     * A Writable Stream that expects the JWS payload. Do not
     * use if you passed a payload option to the constructor.
     *
     *  Example: payloadStream.pipe(signer.payload);
     */
    payload: stream.Writable;

    /**
     * Can be a string, Buffer, Readable stream, or object.
     */
    secret: any;

    /**
     * Can be a string, Buffer, Readable stream, or object.
     */
    key: any;

    /**
     * A Writable Stream. Expects the JWS secret for HMAC, or
     * the privateKey for ECDSA and RSA. Do not use if you
     * passed a secret or key option to the constructor.
     *
     * Example: privateKeyStream.pipe(signer.privateKey);
     */
    privateKey: any;
}

/**
 * This is a Readable Stream that emits a single data event,
 * the result of whether or not that signature was valid.
 */
export interface VerifyStream extends events.EventEmitter {
    /**
     * A Writable Stream that expects a JWS Signature. Do not
     * use if you passed a signature option to the constructor.
     */
    signature: stream.Writable;

    /**
     * Secret.  Can be a string, buffer, or object.
     */
    secret: any;

    /**
     * Key.  Can be a string, buffer, or object.
     */
    key: any;

    /**
     * A Writable Stream that expects a public key or secret.
     * Do not use if you passed a key or secret option to the
     * constructor.
     */
    publicKey: stream.Writable;
}

export interface Signature {
    header: Header;
    payload: any;
    signature: string;
}

export interface SignOptions {
    header: Header;

    /**
     * Can be a string, Buffer, Readable stream, or object.
     */
    payload?: any;

    /**
     * Can be a string, Buffer, Readable stream, or object.
     */
    key?: any;

    /**
     * Can be a string, Buffer, Readable stream, or object.
     */
    secret?: any;

    /**
     * Can be a string, Buffer, Readable stream, or object.
     */
    privateKey?: any;

    encoding?: string|Buffer|stream.Readable | undefined;
}

export interface DecodeOptions {
    /**
     * Whether to force {@link JSON.parse} on the payload
     * even if the header doesn't contain "typ":"JWT".
     */
    json: boolean;
}

export interface VerifyOptions {
    signature?: string|Buffer|stream.Readable | undefined;
    algorithm?: Algorithm|Buffer|stream.Readable | undefined;
    key?: string|stream.Readable|Buffer | undefined;
    secret?: string|stream.Readable|Buffer | undefined;
    publicKey?: string|stream.Readable|Buffer | undefined;
    encoding?: string|Buffer|stream.Readable | undefined;
}

export const ALGORITHMS: [
    'HS256', 'HS384', 'HS512',
    'RS256', 'RS384', 'RS512',
    'PS256', 'PS384', 'PS512',
    'ES256', 'ES384', 'ES512'
];

export type Algorithm = typeof ALGORITHMS[number] | 'none';

export interface Header extends CertificateProperties {
    alg: Algorithm;
    jwk?: JWK | undefined;
    typ?: string | undefined;
    cty?: string | undefined;
    crit?: ReadonlyArray<string> | undefined;
}

export interface JWK extends CertificateProperties {
    alg?: Algorithm | undefined;
    kty: string;
    use?: string | undefined;
    key_ops?: ReadonlyArray<string> | undefined;
}

export interface CertificateProperties extends PrivateProperties {
    kid?: string | undefined;
    x5u?: string | undefined;
    x5c?: ReadonlyArray<string> | undefined;
    x5t?: string | undefined;
    'x5t#S256'?: string | undefined;
}

export interface PrivateProperties {
    [name: string]: any;
}
