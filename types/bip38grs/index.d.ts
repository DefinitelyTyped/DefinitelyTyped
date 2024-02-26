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

export interface DecryptResult {
    privateKey: Buffer;
    compressed: boolean;
}

export function decrypt(
    string: string,
    passphrase: string,
    progressCallback?: (status: ProgressStatus) => void,
    scryptParams?: ScryptParams,
): DecryptResult;

export function decryptAsync(
    string: string,
    passphrase: string,
    progressCallback?: (status: ProgressStatus) => void,
    scryptParams?: ScryptParams,
    promiseInterval?: number,
): Promise<DecryptResult>;

export function decryptRaw(
    buffer: Buffer,
    passphrase: string,
    progressCallback?: (status: ProgressStatus) => void,
    scryptParams?: ScryptParams,
): DecryptResult;

export function decryptRawAsync(
    buffer: Buffer,
    passphrase: string,
    progressCallback?: (status: ProgressStatus) => void,
    scryptParams?: ScryptParams,
    promiseInterval?: number,
): Promise<DecryptResult>;

export function decryptECMult(
    buffer: Buffer,
    passphrase: string,
    progressCallback?: (status: ProgressStatus) => void,
    scryptParams?: ScryptParams,
): DecryptResult;

export function decryptECMultAsync(
    string: string,
    passphrase: string,
    progressCallback?: (status: ProgressStatus) => void,
    scryptParams?: ScryptParams,
    promiseInterval?: number,
): Promise<DecryptResult>;

export function encrypt(
    buffer: Buffer,
    compressed: boolean,
    passphrase: string,
    progressCallback?: (status: ProgressStatus) => void,
    scryptParams?: ScryptParams,
): string;

export function encryptAsync(
    buffer: Buffer,
    compressed: boolean,
    passphrase: string,
    progressCallback?: (status: ProgressStatus) => void,
    scryptParams?: ScryptParams,
    promiseInterval?: number,
): Promise<string>;

export function encryptRaw(
    buffer: Buffer,
    compressed: boolean,
    passphrase: string,
    progressCallback?: (status: ProgressStatus) => void,
    scryptParams?: ScryptParams,
): Buffer;

export function encryptRawAsync(
    buffer: Buffer,
    compressed: boolean,
    passphrase: string,
    progressCallback?: (status: ProgressStatus) => void,
    scryptParams?: ScryptParams,
    promiseInterval?: number,
): Promise<Buffer>;

export function verify(string: string): boolean;
