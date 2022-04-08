// Type definitions for mcrypt 0.1
// Project: https://github.com/tugrul/node-mcrypt
// Definitions by: Alan Plum <https://github.com/pluma>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

export function getAlgorithmNames(): string[];
export function getModeNames(): string[];

export class MCrypt {
    constructor(algorithm: string, mode: string);
    open(key: string | Buffer, iv?: string | Buffer): void;
    encrypt(plaintext: string | Buffer): Buffer;
    decrypt(ciphertext: Buffer): Buffer;
    generateIv(): Buffer;
    validateKeySize(validate: boolean): void;
    validateIvSize(validate: boolean): void;
    selfTest(): boolean;
    isBlockAlgorithmMode(): boolean;
    isBlockAlgorithm(): boolean;
    isBlockMode(): boolean;
    getBlockSize(): number;
    getKeySize(): number;
    getSupportedKeySizes(): number[];
    getIvSize(): number;
    hasIv(): boolean;
    getAlgorithmName(): string;
    getModeName(): string;
}
