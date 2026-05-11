/**
 * Returns a Promise that resolves to a random number within the specified range.
 *
 * @param minimum The lowest possible integer in the range.
 * @param maximum The highest possible integer in the range. Inclusive.
 * @param cb Callback function
 */
declare function randomNumber(minimum: number, maximum: number, cb?: () => void): Promise<number>;
export = randomNumber;
