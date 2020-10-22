// Type definitions for timsort 0.3
// Project: https://github.com/mziccard/node-timsort
// Definitions by: Vunovati <https://github.com/Vunovati>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 *
 * @param array - The array to sort.
 * @param lo - First element in the range (inclusive). Default is 0
 * @param hi - Last element in the range. Default is last element
 */
export function sort(array: any[], lo: number, hi?: number): void;

/**
 *
 * @param array - The array to sort.
 * @param compare - Item comparison function. Default is alphabetical
 * @param lo - First element in the range (inclusive).
 * @param hi - Last element in the range.
 */
export function sort<T>(
    array: T[],
    compare?: (a: T, b: T) => number,
    lo?: number,
    hi?: number
): void;
