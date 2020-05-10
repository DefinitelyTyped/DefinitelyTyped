// Type definitions for lzma 2.3
// Project: http://nmrugg.github.com/LZMA-JS/
// Definitions by: janKir <https://github.com/janKir>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module has methods, declare them as functions like so.
 */
export function compress(
    input: string | Uint8Array,
    mode: LzmaMode
): Uint8Array;
export function compress(
    input: string | Uint8Array,
    mode: LzmaMode,
    onFinish: (result: Uint8Array | null, error: Error | null) => any,
    onProgress: (percent: number) => any
): void;

export function decompress(input: Uint8Array): string | Uint8Array;
export function decompress(
    input: Uint8Array,
    onFinish: (result: string | Uint8Array | null, error: Error | null) => any,
    onProgress: (percent: number) => any
): void;

/*~ You can declare types that are available via importing the module */
export type LzmaMode = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
