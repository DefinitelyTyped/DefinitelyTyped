// Type definitions for fuzzyset.js 0.0
// Project: https://github.com/Glench/fuzzyset.js
// Definitions by: Louis Grignon <https://github.com/lgrignon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface FuzzySet {
  get<T = undefined>(candidate: string, defaultValue?: T | undefined, minScore?: number): Array<[number, string]> | T | null;
  add(value: string): boolean;
  length(): number;
  isEmpty(): boolean;
  values(): string[];
}

declare function FuzzySet(
  source: string[],
  useLevenshtein?: boolean,
  gramSizeLower?: number,
  gramSizeUpper?: number,
): FuzzySet;

export = FuzzySet;
export as namespace FuzzySet;
