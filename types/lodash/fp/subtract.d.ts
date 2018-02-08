// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface Subtract {
    /**
     * Subtract two numbers.
     *
     * @category Math
     * @param minuend The first number in a subtraction.
     * @param subtrahend The second number in a subtraction.
     * @returns Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    (): Subtract;
    /**
     * Subtract two numbers.
     *
     * @category Math
     * @param minuend The first number in a subtraction.
     * @param subtrahend The second number in a subtraction.
     * @returns Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    (minuend: number): Subtract1x1;
    /**
     * Subtract two numbers.
     *
     * @category Math
     * @param minuend The first number in a subtraction.
     * @param subtrahend The second number in a subtraction.
     * @returns Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    (minuend: number, subtrahend: number): number;
}
interface Subtract1x1 {
    /**
     * Subtract two numbers.
     *
     * @category Math
     * @param minuend The first number in a subtraction.
     * @param subtrahend The second number in a subtraction.
     * @returns Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    (): Subtract1x1;
    /**
     * Subtract two numbers.
     *
     * @category Math
     * @param minuend The first number in a subtraction.
     * @param subtrahend The second number in a subtraction.
     * @returns Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    (subtrahend: number): number;
}

declare const subtract: Subtract;
declare namespace subtract {}
export = subtract;
