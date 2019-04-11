// Type definitions for NaturalSort
// Project: https://github.com/studio-b12/natural-sort
// Definitions by: Antonio Morales <https://github.com/a-morales>
//                 Brian Crowell <https://github.com/fluggo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace naturalSort;

interface Options {
    /** Set to true to make the sort case-sensitive. */
    caseSensitive?: boolean;

    /** Set to 'desc' to sort in reverse. */
    direction?: 'desc'
}

declare function naturalSort(options?: Options): (a: string | number, b: string | number) => number;
export = naturalSort;
