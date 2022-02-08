// Type definitions for limit-number 3.0
// Project: https://github.com/electerious/limit-number#readme
// Definitions by: Rajas Paranjpe <https://github.com/ChocolateLoverRaj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Limits a number between a min and max value.
 *
 * @param min - Min number.
 * @param max - Max number.
 * @param num - Number.
 * @returns Limited number.
 */
declare function limitNumber(min: number, max: number, num: number): number;

export = limitNumber;
