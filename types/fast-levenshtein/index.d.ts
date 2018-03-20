// Type definitions for fast-levenshtein
// Project: https://github.com/hiddentao/fast-levenshtein
// Definitions by: Mizunashi Mana <https://github.com/mizunashi-mana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface LevenshteinOptions {
    useCollator?: boolean;
}

export function get(str1: string, str2: string, opts?: LevenshteinOptions): number;
