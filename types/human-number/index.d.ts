// Type definitions for human-number 1.0
// Project: https://nicedoc.io/Kikobeats/human-number
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Convert number to a human readable string: 13500 → 13.5K.
 */
declare function humanNumber(n: number, mapper?: (n: number) => string): string;

export = humanNumber;
