// Type definitions for lzma 2.3
// Project: https://github.com/LZMA-JS/LZMA-JS
// Definitions by: janKir <https://github.com/janKir>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export type LzmaMode = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export function compress(
    input: string | Uint8Array,
    mode: LzmaMode
): Uint8Array;
export function compress(
    input: string | Uint8Array,
    mode: LzmaMode,
    onFinish: (result: Uint8Array | null, error: Error | null) => void,
    onProgress: (percent: number) => void
): void;

export function decompress(input: Uint8Array): string | Uint8Array;
export function decompress(
    input: Uint8Array,
    onFinish: (result: string | Uint8Array | null, error: Error | null) => void,
    onProgress: (percent: number) => void
): void;


interface LZMA {
    compress(
        input: string | Uint8Array,
        mode: LzmaMode
    ): Uint8Array;
    compress(
        input: string | Uint8Array,
        mode: LzmaMode,
        onFinish: (result: Uint8Array | null, error: Error | null) => void,
        onProgress: (percent: number) => void
    ): void;
    decompress(input: Uint8Array): string | Uint8Array;
    decompress(
        input: Uint8Array,
        onFinish: (result: string | Uint8Array | null, error: Error | null) => void,
        onProgress: (percent: number) => void
    ): void;
}

export const LZMA: LZMA;
