// Type definitions for find-unused-sass-variables 3.1
// Project: https://github.com/XhmikosR/find-unused-sass-variables#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Returns an object with `unused` and `total`.
 * `unused` has the array of unused variables and `total` has the sum of all variables in the files
 * (unused and used ones).
 */
export function find(dir: string, options?: Options): Results;
/**
 * Returns a Promise which resolves result; is the same as `find(dir, options)` result.
 */
export function findAsync(dir: string, options?: Options): Promise<Results>;

export interface Options {
    /** Array of strings of the variables to ignore, e.g. `['$my-var', '$my-second-var']` */
    ignore?: string[] | undefined;
    /** Array of file extensions to search for unused variables in. e.g. `['scss']` */
    fileExtensions?: string[] | undefined;
}

export interface Results {
    /** the array of unused variables */
    readonly unused: string[];
    /** he sum of all variables in the files (unused and used ones) */
    readonly total: number;
}
