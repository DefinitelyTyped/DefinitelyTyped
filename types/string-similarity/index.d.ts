export as namespace stringSimilarity;

/**
 * Returns a fraction between 0 and 1, which indicates the degree of similarity between the two strings.
 * `0` indicates completely different strings, `1` indicates identical strings. The comparison is case-insensitive.
 *
 * @param string1 The first string
 * @param string2 The second string
 * @returns A fraction from 0 to 1, both inclusive. Higher number indicates more similarity.
 */
export function compareTwoStrings(string1: string, string2: string): number;

/**
 * Compares `mainString` against each string in `targetStrings`.
 *
 * @argument mainString: The string to match each target string against.
 * @argument targetStrings: Each string in this array will be matched against the main string.
 * @returns An object with a `ratings` property, which gives a similarity rating for each target string,
 *          a `bestMatch` property, which specifies which target string was most similar to the main string,
 *          and a `bestMatchIndex` property, which specifies the index of the `bestMatch` in the `targetStrings` array.
 */
export function findBestMatch(mainString: string, targetStrings: string[]): BestMatch;

export interface Rating {
    target: string;
    rating: number;
}
export interface BestMatch {
    ratings: Rating[];
    bestMatch: Rating;
    bestMatchIndex: number;
}
