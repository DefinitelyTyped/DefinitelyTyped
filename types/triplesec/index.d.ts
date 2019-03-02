// Type definitions for triplesec 3.0
// Project: https://github.com/keybase/triplesec
// Definitions by: Ben Speakman <https://github.com/threesquared>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface WordArray {
    sigBytes: number;
    words: number[];
    to_hex: () => string;
}

export interface Arguments {
    data: Buffer;
    key: Buffer;
    progress_hook?: (progress: Progress) => void;
}

export interface Progress {
    what: string;
    i: number;
    total: number;
}

export function encrypt(arg: Arguments, cb: (err: Error | null, buff: Buffer | null) => void): void;
export function decrypt(arg: Arguments, cb: (err: Error | null, buff: Buffer | null) => void): void;

export namespace prng {
    function generate(n: number, cb: (words: WordArray) => void): void;
}
