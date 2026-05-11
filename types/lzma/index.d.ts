/// <reference types="node" />

export as namespace LZMA;

export type Mode = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export function compress(
    str: Buffer | string | Uint8Array,
    mode?: Mode,
): Uint8Array;
export function compress(
    str: Buffer | string | Uint8Array,
    mode: Mode,
    on_finish: (result: Uint8Array, error?: Error) => void,
    on_progress?: (percent: number) => void,
): void;

export function decompress(
    byte_array: Buffer | Uint8Array,
): Uint8Array | string;
export function decompress(
    byte_array: Buffer | Uint8Array,
    on_finish?: (result: Uint8Array | string, error?: Error) => void,
    on_progress?: (percent: number) => void,
): void;
