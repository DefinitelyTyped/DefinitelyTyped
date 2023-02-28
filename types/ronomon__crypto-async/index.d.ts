// Type definitions for @ronomon/crypto-async 5.0
// Project: https://github.com/ronomon/crypto-async
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

export type CipherDirection = CipherDirectionDecrypt | CipherDirectionEncrypt;
export type CipherDirectionDecrypt = 0;
export type CipherDirectionEncrypt = 1;

export const CIPHER_BLOCK_MAX: number;
export const E_AAD: string;
export const E_AAD_INVALID: string;
export const E_AAD_OFFSET: string;
export const E_AAD_RANGE: string;
export const E_AAD_SIZE: string;
export const E_ALGORITHM: string;
export const E_ALGORITHM_DISABLED: string;
export const E_ALGORITHM_UNKNOWN: string;
export const E_ARGUMENTS: string;
export const E_BUFFER_LENGTH: string;
export const E_CALLBACK: string;
export const E_CANCELLED: string;
export const E_CORRUPT: string;
export const E_ENCRYPT: string;
export const E_IV: string;
export const E_IV_INVALID: string;
export const E_IV_OFFSET: string;
export const E_IV_RANGE: string;
export const E_IV_SIZE: string;
export const E_KEY: string;
export const E_KEY_INVALID: string;
export const E_KEY_OFFSET: string;
export const E_KEY_RANGE: string;
export const E_KEY_SIZE: string;
export const E_OOM: string;
export const E_SOURCE: string;
export const E_SOURCE_OFFSET: string;
export const E_SOURCE_RANGE: string;
export const E_SOURCE_SIZE: string;
export const E_TAG: string;
export const E_TAG_INVALID: string;
export const E_TAG_OFFSET: string;
export const E_TAG_RANGE: string;
export const E_TAG_SIZE: string;
export const E_TARGET: string;
export const E_TARGET_OFFSET: string;
export const E_TARGET_RANGE: string;

export function cipher(
    algorithm: string,
    cipherDirection: CipherDirection,
    key: Buffer,
    iv: Buffer,
    plaintext: Buffer,
    cb: (error: Error | undefined, ciphertext: Buffer) => void,
): void;

export function cipher(
    algorithm: string,
    cipherDirection: CipherDirection,
    key: Buffer,
    iv: Buffer,
    plaintext: Buffer,
    aad: Buffer,
    tag: Buffer,
    cb: (error: Error | undefined, ciphertext: Buffer) => void,
): void;

export function cipher(
    algorithm: string,
    cipherDirection: CipherDirection,
    key: Buffer,
    keyOffset: number,
    keySize: number,
    iv: Buffer,
    ivOffset: number,
    ivSize: number,
    source: Buffer,
    sourceOffset: number,
    sourceSize: number,
    target: Buffer,
    targetOffset: number,
    cb: (error: Error | undefined, targetSize: number) => void,
): void;

export function cipher(
    algorithm: string,
    cipherDirection: CipherDirection,
    key: Buffer,
    keyOffset: number,
    keySize: number,
    iv: Buffer,
    ivOffset: number,
    ivSize: number,
    source: Buffer,
    sourceOffset: number,
    sourceSize: number,
    target: Buffer,
    targetOffset: number,
    aad: Buffer,
    aadOffset: number,
    aadSize: number,
    tag: Buffer,
    tagOffset: number,
    tagSize: number,
    cb: (error: Error | undefined, targetSize: number) => void,
): void;

export function hash(algorithm: string, source: Buffer, cb: (error: Error | undefined, hash: Buffer) => void): void;

export function hash(
    algorithm: string,
    source: Buffer,
    sourceOffset: number,
    sourceSize: number,
    target: Buffer,
    targetOffset: number,
    cb: (error: Error | undefined, targetSize: number) => void,
): void;

export function hmac(
    algorithm: string,
    key: Buffer,
    source: Buffer,
    cb: (error: Error | undefined, hmac: Buffer) => void,
): void;

export function hmac(
    algorithm: string,
    key: Buffer,
    keyOffset: number,
    keySize: number,
    source: Buffer,
    sourceOffset: number,
    sourceSize: number,
    target: Buffer,
    targetOffset: number,
    cb: (error: Error | undefined, targetSize: number) => void,
): void;
