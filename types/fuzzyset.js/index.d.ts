interface FuzzySet {
    get<T = undefined>(candidate: string, defaultValue?: T, minScore?: number): Array<[number, string]> | T | null;
    add(value: string): boolean;
    length(): number;
    isEmpty(): boolean;
    values(): string[];
}

declare function FuzzySet(
    source?: string[],
    useLevenshtein?: boolean,
    gramSizeLower?: number,
    gramSizeUpper?: number,
): FuzzySet;

export = FuzzySet;
export as namespace FuzzySet;
