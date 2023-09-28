// Type definitions for wuzzy 0.1
// Project: https://github.com/xupit3r/wuzzy#readme
// Definitions by: Thomas Ladd <https://github.com/TLadd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function jarowinkler(a: string | ReadonlyArray<string>, b: string | ReadonlyArray<string>, t?: number): number;

export interface LevenshteinOptions {
    d: number;
    i: number;
    s: number;
}
export function levenshtein(
    a: string | ReadonlyArray<string>,
    b: string | ReadonlyArray<string>,
    options?: LevenshteinOptions,
): number;

export function ngram(a: string | ReadonlyArray<string>, b: string | ReadonlyArray<string>, ng?: number): number;

export function pearson(a: Record<string, number>, b: Record<string, number>): number;

export function jaccard(a: string | ReadonlyArray<string>, b: string | ReadonlyArray<string>): number;

export function tanimoto(a: string | ReadonlyArray<string>, b: string | ReadonlyArray<string>): number;
