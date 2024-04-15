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
