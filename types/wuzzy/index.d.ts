export function jarowinkler(a: string | readonly string[], b: string | readonly string[], t?: number): number;

export interface LevenshteinOptions {
    d: number;
    i: number;
    s: number;
}
export function levenshtein(
    a: string | readonly string[],
    b: string | readonly string[],
    options?: LevenshteinOptions,
): number;

export function ngram(a: string | readonly string[], b: string | readonly string[], ng?: number): number;

export function pearson(a: Record<string, number>, b: Record<string, number>): number;

export function jaccard(a: string | readonly string[], b: string | readonly string[]): number;

export function tanimoto(a: string | readonly string[], b: string | readonly string[]): number;
