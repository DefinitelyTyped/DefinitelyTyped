export interface CVSSOptions {
    //  If validation returns an error, throw the error
    throw?: boolean;
    //  Only consider base metrics when calculating score
    baseOnly?: boolean;
    //  Include temporal metrics when calculating score
    temporal?: boolean;
    //  Include temporal AND environmental metrics when calculating score (both are included per CVSS3 spec)
    env?: boolean;
}

export type CVSSRating = "None" | "Low" | "Medium" | "High" | "Critical";

export interface CVSSBase {
    score: number;
    rating: CVSSRating;
}

/**
 * This is the main scoring method.
 * It may be called with either a valid CVSS3 vector string ('CVSS:3.0/AV:P/AC:H/PR:N/UI:R/S:C/C:L/I:H/A:L'),
 * or an object containing the key/value pairs ({ AV: 'P', AC: 'H', PR: 'N', UI:'R', S: 'C', C: 'L', I: 'H', A: 'L' })
 * corresponding to one as its input parameter.
 */
export function getScore(input: string, options?: CVSSOptions): number;

//  Accepts the same arguments as getScore above, but enforces the baseOnly option.
export function getBaseScore(input: string, options?: Omit<CVSSOptions, "baseOnly">): number;

//  Accepts the same arguments as getScore above, but enforces the temporal option.
export function getTemporalScore(input: string, options?: Omit<CVSSOptions, "temporal">): number;

//  Accepts the same arguments as getScore above, but enforces the temporal option.
export function getEnvironmentalScore(input: string, options?: Omit<CVSSOptions, "env">): number;

/**
 * Given a numeric score, returns the appropriate CVSS3 severity rating for that number:
 *  - None for scores < 0.1,
 *  - Low for scores >= 0.1 and < 4,
 *  - Medium for scores >=4 and < 7, High for scores >= 7 and < 9, Critical for scores >= 9.
 */
export function getRating(score: number): CVSSRating;

/**
 * Returns an object with the base score and its rating.
 * Equivalent to:
 * {
 *   score: getBaseScore(input),
 *   rating: getRating(getBaseScore(input))
 * }
 */
export function getBase(input: string, options?: Omit<CVSSOptions, "baseOnly">): CVSSBase;

/**
 * Returns an object with the environmental score and its rating.
 * Equivalent to:
 * {
 *   score: getEnvironmentalScore(input),
 *   rating: getRating(getBaseScore(input))
 * }
 */
export function getTemporal(input: string, options?: Omit<CVSSOptions, "temporal">): CVSSBase;

/**
 * Returns an object with the environmental score and its rating.
 * Equivalent to:
 * {
 *   score: getEnvironmentalScore(input),
 *   rating: getRating(getBaseScore(input))
 * }
 */
export function getEnvironmental(input: string, options?: Omit<CVSSOptions, "env">): CVSSBase;

/**
 * Returns object with the score and rating for all three scores:
 */
export function getAll(input: string): {
    base: number;
    temporal: number;
    environmental: number;
};
