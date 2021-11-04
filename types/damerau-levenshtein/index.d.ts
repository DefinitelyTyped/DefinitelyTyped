// Type definitions for damerau-levenshtein 1.0
// Project: https://github.com/tad-lispy/node-damerau-levenshtein#readme
// Definitions by: G3ru1a <https://github.com/g3ru1a>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function levenshtein(__this: string, that: string, limit?: number): levenshtein.DamerauLevenshteinResponse;

declare namespace levenshtein {
    interface DamerauLevenshteinResponse {
        steps: number;
        relative: number;
        similarity: number;
    }
}

export = levenshtein;
