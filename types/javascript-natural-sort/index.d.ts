/**
 * Natural sort comparison function for use with Array.sort().
 * Sorts strings containing numbers in a human-friendly way.
 *
 * @param a - First value to compare
 * @param b - Second value to compare
 * @returns Negative if a < b, positive if a > b, zero if equal
 *
 * @example
 * ```javascript
 * var naturalSort = require('javascript-natural-sort');
 *
 * ['img12', 'img10', 'img2', 'img1'].sort(naturalSort);
 * // => ['img1', 'img2', 'img10', 'img12']
 * ```
 */
declare function naturalSort(a: string | number, b: string | number): number;

declare namespace naturalSort {
    /**
     * Set to true to enable case-insensitive sorting.
     * @default false
     */
    let insensitive: boolean;
}

export = naturalSort;
