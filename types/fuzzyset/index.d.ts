// Type definitions for fuzzset 1.0
// Project: https://github.com/washt/fuzzyset
// Definitions by: Louis Grignon <https://github.com/lgrignon>
//                Narain Sagar <https://github.com/narainsagar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface FuzzySet {
    get(candidate: string): Array<[number, string]>;
    add(value: string): boolean;
    length(): number;
    isEmpty(): boolean;
    values(): string[];
}

declare function FuzzySet(source?: string[], useLevenshtein?: boolean, gramSizeLower?: number, gramSizeUpper?: number): FuzzySet;

export = FuzzySet;
export as namespace FuzzySet;
