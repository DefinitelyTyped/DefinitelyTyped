// Type definitions for node-srp
// Project: https://github.com/mozilla/node-srp
// Definitions by: Pat Smuk <https://github.com/Patman64>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="bignum" />
/// <reference types="node" />

import * as BigNum from 'bignum';

export = SRP;

declare namespace SRP {
    export interface Params {
        N_length_bits: number;
        N: BigNum;
        g: BigNum;
        hash: string;
    }
    
    export var params: {
        [bits: string]: Params;
    };
    
    /**
     * The verifier is calculated as described in Section 3 of [SRP-RFC].
     * We give the algorithm here for convenience.
     *
     * The verifier (v) is computed based on the salt (s), user name (I),
     * password (P), and group parameters (N, g).
     *
     *         x = H(s | H(I | ":" | P))
     *         v = g^x % N
     *
     * @param {Params} params group parameters, with .N, .g, .hash
     * @param {Buffer} salt salt
     * @param {Buffer} I user identity
     * @param {Buffer} P user password
     * 
     * @returns {Buffer}
     */
    export function computeVerifier(params: Params, salt: Buffer, I: Buffer, P: Buffer): Buffer;
    
    /**
     * Generate a random key.
     *
     * @param {number} bytes length of key (default=32)
     * @param {function} callback function to call with err,key
     */
    export function genKey(bytes: number, callback: (error: Error, key: Buffer) => void): void;
    
    /**
     * Generate a random 32-byte key.
     *
     * @param {function} callback function to call with err,key
     */
    export function genKey(callback: (error: Error, key: Buffer) => void): void;
    
    export class Client {
        constructor(params: Params, salt: Buffer, identity: Buffer, password: Buffer, secret1: Buffer);
        computeA(): Buffer;
        setB(B: Buffer): void;
        computeM1(): Buffer;
        checkM2(M2: Buffer): void;
        computeK(): Buffer;
    }
    
    export class Server {
        constructor(params: Params, verifier: Buffer, secret2: Buffer);
        computeB(): Buffer;
        setA(A: Buffer): void;
        checkM1(M1: Buffer): Buffer;
        computeK(): Buffer;
    }
}
