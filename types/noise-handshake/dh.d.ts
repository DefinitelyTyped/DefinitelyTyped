export const DHLEN: 32;
export const PKLEN: 32;
export const SKLEN: 32;
export const SEEDLEN: 32;
export const ALG: "25519";

export interface KeyPair {
    secretKey: Buffer | Uint8Array;
    publicKey: Buffer | Uint8Array;
}

export function generateKeyPair(privateKey?: Buffer | Uint8Array): KeyPair;
export function generateSeedKeyPair(seed: Buffer | Uint8Array): KeyPair;
export function dh(publicKey: Buffer | Uint8Array, secretKey: Pick<KeyPair, "secretKey">): Buffer | Uint8Array;
