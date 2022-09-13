// Type definitions for entropy-string 4.2
// Project: https://github.com/EntropyString/JavaScript
// Definitions by: aaronleopold <https://github.com/aaronleopold>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
    {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
    }[Keys];

interface Opts {
    bits?: number;
    total?: number;
    risk?: number;
    length?: number;
    charset?: CharSet | string;
}

type Options = RequireAtLeastOne<Opts, keyof Opts>;

export const HASH_LENGTH = 6;
export const CHARSET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_';

export function RNG(size: number): Buffer;

export class CharSet {
    chars: string;
    bitsPerChar: number;
    length: number;
    ndxFn: (chunk: number, slice: number, bytes: ArrayBuffer) => number;
    charsPerChunk: number;

    bytesNeeded(bitLen: number): number;

    constructor(chars: string);
}

export const charset64: CharSet;
export const charset32: CharSet;
export const charset16: CharSet;
export const charset8: CharSet;
export const charset4: CharSet;
export const charset2: CharSet;

export class Entropy {
    length: number;
    charset: string | string[];
    rng: (size: number) => Buffer;

    static bits(): number;
    smallID(charset?: CharSet): string;
    mediumID(charset?: CharSet): string;
    largeID(charset?: CharSet): string;
    sessionID(charset?: CharSet): string;
    token(charset?: CharSet): string;
    string(bitLen?: number, charset?: CharSet): string;
    stringWithBytes(bytes: ArrayBuffer, bitLen?: number, charset?: CharSet): string;
    bytesNeeded(bitLen?: number, charset?: CharSet): number;
    chars(): string;
    bits(): number;
    use(charset: CharSet): void;
    useChars(chars: string): void;

    constructor(options?: Options);
}

export {};
