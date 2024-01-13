/**
 * Sort the JSON (clean, parse, sort, stringify).
 * @param noArray Sort or don't sort arrays
 */
export function sort(inputStr: string, noArray?: boolean): string;

/**
 * Sort the JSON (clean, parse, sort, stringify).
 * @param noArray Sort or don't sort arrays
 */
export function sortObj<T extends object>(input: T, noArray?: boolean): T;

/** Remove trailing commas */
export function cleanJSON(input: string): string;
