// Type definitions for find-unused-sass-variables 2.0
// Project: https://github.com/XhmikosR/find-unused-sass-variables#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * A simple tool to check for unused Sass variables in a directory.
 */
export function find(dir: string, options?: Options): Results;

export interface Options {
    /** Array of strings of the variables to ignore, e.g. `['$my-var', '$my-second-var']` */
    ignore?: string[];
}

export interface Results {
    /** the array of unused variables */
    readonly unused: string[];
    /** he sum of all variables in the files (unused and used ones) */
    readonly total: number;
}
