// Type definitions for bip38 2.0
// Project: https://github.com/bitcoinjs/bip38
// Definitions by: Satana Charuwichitratana <https://github.com/micksatana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

// Note: When there is @types/scryptsy, ProgressStatus and ScryptParams should be referred from the definition instead
export interface ProgressStatus {
    current: number;
    total: number;
    percent: number;
}
export interface ScryptParams {
    N: number;
    r: number;
    p: number;
}

export function decrypt(string: string, passphrase: string,
                        progressCallback?: (status: ProgressStatus) => void,
                        scryptParams?: ScryptParams): { privateKey: Buffer, compressed: boolean };

export function decryptECMult(buffer: Buffer, passphrase: string,
                              progressCallback?: (status: ProgressStatus) => void,
                              scryptParams?: ScryptParams): { privateKey: Buffer, compressed: boolean };

export function decryptRaw(buffer: Buffer, passphrase: string,
                           progressCallback?: (status: ProgressStatus) => void,
                           scryptParams?: ScryptParams): { privateKey: Buffer, compressed: boolean };

export function encrypt(buffer: Buffer, compressed: boolean, passphrase: string,
                        progressCallback?: (status: ProgressStatus) => void,
                        scryptParams?: ScryptParams): string;

export function encryptRaw(buffer: Buffer, compressed: boolean, passphrase: string,
                           progressCallback?: (status: ProgressStatus) => void,
                           scryptParams?: ScryptParams): Buffer;

export function verify(string: string): boolean;
