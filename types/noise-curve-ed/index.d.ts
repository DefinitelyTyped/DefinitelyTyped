// Type definitions for noise-curve-ed 2.0
// Project: https://github.com/chm-diederichs/noise-curve-ed#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export const DHLEN: 32;
export const PKLEN: 32;
export const SCALARLEN: 32;
export const SKLEN: 64;
export const ALG: "Ed25519";
export const name: typeof ALG;

/**
 * Generate a new keypair.
 */
export function generateKeyPair(privKey?: Buffer | Uint8Array): KeyPair;
/**
 * Perform DH between `publicKey` and `secretKey`/`scalar`.
 */
export function dh(publicKey: Buffer | Uint8Array, secretKey: SecretKey): Buffer | Uint8Array;

export interface KeyPair {
    publicKey: Buffer | Uint8Array;
    secretKey: Buffer | Uint8Array;
}

export interface SecretKey {
    scalar?: Buffer | Uint8Array;
    secretKey: Buffer | Uint8Array;
}
