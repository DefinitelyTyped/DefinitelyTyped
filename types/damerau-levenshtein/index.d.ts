declare function levenshtein(__this: string, that: string, limit?: number): levenshtein.DamerauLevenshteinResponse;

declare namespace levenshtein {
    interface DamerauLevenshteinResponse {
        steps: number;
        relative: number;
        similarity: number;
    }
}

export = levenshtein;
