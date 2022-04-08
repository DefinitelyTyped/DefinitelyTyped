// Type definitions for eccrypto 1.1
// Project: https://github.com/bitchan/eccrypto
// Definitions by: Random Nerd <https://github.com/randomnerd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
/// <reference types="node" />
export as namespace eccrypto;

// Generate a new valid private key. Will use crypto.randomBytes as source.
export function generatePrivate(): Buffer;

// Compute the public key for a given private key.
export function getPublic(privateKey: Buffer): Buffer;

// Compute the compressed public key for a given private key.
export function getPublicCompressed(privateKey: Buffer): Buffer;

// Create an ECDSA signature.
export function sign(key: Buffer, msg: Buffer): Promise<Buffer>;

// Verify an ECDSA signature.
export function verify(publicKey: Buffer, msg: Buffer, sig: Buffer): Promise<null>;

// Derive shared secret for given private and public keys.
export function derive(privateKeyA: Buffer, publicKeyB: Buffer): Promise<Buffer>;

// Input/output structure for ECIES operations.
export interface Ecies {
    iv: Buffer;
    ephemPublicKey: Buffer;
    ciphertext: Buffer;
    mac: Buffer;
}

// Encrypt message for given recepient's public key.
export function encrypt(publicKeyTo: Buffer, msg: Buffer, opts?: { iv?: Buffer, ephemPrivateKey?: Buffer }): Promise<Ecies>;

// Decrypt message using given private key.
export function decrypt(privateKey: Buffer, opts: Ecies): Promise<Buffer>;
