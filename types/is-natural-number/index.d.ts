// Type definitions for is-natural-number 4.0
// Project: https://github.com/shinnn/is-natural-number.js
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    /**
     * Setting this option true makes 0 regarded as a natural number.
     */
    includeZero: boolean;
}

/**
 * Rreturns true if the first argument is one of the natural numbers.
 * If not, or the argument is not a number, it returns false.
 */
declare function isNaturalNumber(number: number|string, option?: Options): boolean;

export = isNaturalNumber;
