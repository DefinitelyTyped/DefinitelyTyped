/**
 * Convert number to a human readable string: 13500 → 13.5K.
 */
declare function humanNumber(n: number, mapper?: (n: number) => string): string;

export = humanNumber;
