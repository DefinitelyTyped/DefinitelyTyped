// Type definitions for damerau-levenshtein 1.0
// Project: https://github.com/tad-lispy/node-damerau-levenshtein#readme
// Definitions by: G3ru1a <https://github.com/g3ru1a>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'damerau-levenshtein';

export interface DamerauLevenshteinResponse {
    steps: number;
    relative: number;
    similarity: number;
}

export default function(__this: string, that: string, limit?: number): DamerauLevenshteinResponse;
