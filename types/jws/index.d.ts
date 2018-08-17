// Type definitions for jws 3.1
// Project: https://github.com/brianloveswords/node-jws
// Definitions by: Justin Beckwith <https://github.com/JustinBeckwith>
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
export function decode(signature: string): Signature;

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

    encoding?: string|Buffer|stream.Readable;
}

export interface VerifyOptions {
    signature?: string|Buffer|stream.Readable;
    algorithm?: Algorithm|Buffer|stream.Readable;
    key?: string|stream.Readable|Buffer;
    secret?: string|stream.Readable|Buffer;
    publicKey?: string|stream.Readable|Buffer;
    encoding?: string|Buffer|stream.Readable;
}

export type Algorithm = 'HS256' | 'HS384' | 'HS512' | 'RS256' |
                        'RS384' | 'RS512' | 'ES256' | 'ES384' |
                        'ES512' | 'none';

export interface Header {
    alg: Algorithm;
    [name: string]: string;
}
