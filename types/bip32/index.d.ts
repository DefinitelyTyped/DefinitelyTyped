// Type definitions for bip32 1.0
// Project: https://github.com/bitcoinjs/bip32#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

export interface NetworkType {
    wif: number; // UInt8
    bip32: {
        public: number; // UInt32
        private: number; // UInt32
    };
}

export class BIP32 {
    private constructor(d: Buffer, Q: Buffer, chainCode: Buffer, network: NetworkType);

    identifier: Buffer;
    fingerprint: Buffer;
    privateKey: Buffer;
    publicKey: Buffer;

    private depth: number;
    private index: number;
    private parentFingerprint: number;
    private network: NetworkType;

    isNeutered(): boolean;
    neutered(): BIP32;
    toBase58(): string;
    toWIF(): string;
    derive(index: number): BIP32;
    deriveHardened(index: number): BIP32;
    derivePath(path: string): BIP32;
    sign(hash: Buffer): Buffer;
    verify(hash: Buffer, signature: Buffer): boolean;
}

/**
 * Returns a node
 * @param string base58 encoded string
 * @param network network type of the node
 */
export function fromBase58(string: string, network?: NetworkType): BIP32;

/**
 * Returns a hardened node
 * @param privateKey node private key
 * @param chainCode 256-bits entropy extension
 * @param network network type of the node
 */
export function fromPrivateKey(privateKey: Buffer, chainCode: Buffer, network?: NetworkType): BIP32;

/**
 * Returns a non-hardened node
 * @param publicKey node public key
 * @param chainCode 256-bits entropy extension
 * @param network network type of the node
 */
export function fromPublicKey(publicKey: Buffer, chainCode: Buffer, network?: NetworkType): BIP32;

/**
 * Returns a hardened node
 * @param seed seed encoding node info
 * @param network network type of the node
 */
export function fromSeed(seed: Buffer, network?: NetworkType): BIP32;
