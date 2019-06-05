// Type definitions for get-res 3.0
// Project: https://github.com/kevva/get-res#readme
// Definitions by: Satya Rohith <https://github.com/satyarohith>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export = getRes;

interface Resolution {
    item: string;
    percent: string;
}

/**
 * Get ten most popular screen resolutions
 *
 * @returns An array with the details of ten most popular screen resolutions
 */
declare function getRes(): Promise<Resolution[]>;
