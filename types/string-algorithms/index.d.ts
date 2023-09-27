// Type definitions for string-algorithms 1.0
// Project: https://github.com/burgaard/string-algorithms
// Definitions by: Lionel Rowe <https://github.com/lionel-rowe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function search(text: string, term: string): number[];

export function radixSort<T>(
    ...args: T extends number[] ? [entries: T[], getEntry?: (el: T) => number[]]
        : [entries: T[], getEntry: (el: T) => number[]]
): number[][];

export function suffixArray(s: number[] | string, terminator?: number): number[];

export function longestCommonPrefix(sequence: string[], suffixArray: number[]): number[];

export function longestCommonSubstring(strings: string[], indexMap?: "log" | "linear" | StringIndexMap): string[];

export abstract class StringIndexMap {
    constructor(k?: number);
    add(length: number): number;
    lookup(suffix: number, start: number, end: number): number;
    toString(): string;
}
