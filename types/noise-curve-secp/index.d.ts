// Type definitions for noise-curve-secp 3.0
// Project: https://github.com/chm-diederichs/noise-curve-secp256k1#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export const DHLEN: 32;
export const PKLEN: 33;
export const SKLEN: 32;
export const ALG: "secp256k1";
export const name: typeof ALG;

/**
 * Generate a new keypair, optionally pass in a preexisting `privKey`.
 */
export function generateKeyPair(privKey?: Buffer | Uint8Array): KeyPair;
/**
 * Perform DH between `publicKey` and `secretKey` and return the result.
 */
export function dh(publicKey: Buffer | Uint8Array, secretKey: Pick<KeyPair, "secretKey">): Buffer;

export interface KeyPair {
    publicKey: Buffer | Uint8Array;
    secretKey: Buffer | Uint8Array;
}
