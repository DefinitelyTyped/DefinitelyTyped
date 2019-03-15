// Type definitions for round-to 3.0
// Project: https://github.com/sindresorhus/round-to#readme
// Definitions by: Sean Marvi Oliver Genabe <https://github.com/seangenabe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace roundTo {
    /**
     * Round the decimals with `Math.ceil`.
     * @param input Number to adjust.
     * @param precision (Integer) number of decimal places.
     */
    function up(input: number, precision: number): number;
    /**
     * Round the decimals with `Math.floor`.
     * @param input Number to adjust.
     * @param precision (Integer) number of decimal places.
     */
    function down(input: number, precision: number): number;
}

/**
 * Round the decimals with `Math.round`.
 * @param input Number to adjust.
 * @param precision (integer) Number of decimal places.
 */
declare function roundTo(input: number, precision: number): number;

export = roundTo;
