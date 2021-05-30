// Type definitions for intersect 1.0
// Project: https://github.com/juliangruber/intersect
// Definitions by: Noah Overcash <https://github.com/ncovercash>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const intersect: {
    /**
     * Find the intersection of arrays a and b.
     * The individual arrays are expected to be sets, i.e. there's no duplicate elements in them.
     */
    <T>(a: T[], b: T[]): T[];
    /**
     * Find the intersection of all subarrays.
     * The individual arrays are expected to be sets, i.e. there's no duplicate elements in them.
     */
    <T>(arrays: T[][]): T[];
    /**
     * Find the intersection of two large arrays.
     * May perform better than default when there are over approximately 125 elements
     */
    big<T>(a: T[], b: T[]): T[];
};

export = intersect;
