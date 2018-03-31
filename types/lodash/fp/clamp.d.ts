// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface Clamp {
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (): Clamp;
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (lower: number): Clamp1x1;
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (lower: _.__, upper: number): Clamp1x2;
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (lower: number, upper: number): Clamp1x3;
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (lower: _.__, upper: _.__, number: number): Clamp1x4;
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (lower: number, upper: _.__, number: number): Clamp1x5;
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (lower: _.__, upper: number, number: number): Clamp1x6;
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (lower: number, upper: number, number: number): number;
}
interface Clamp1x1 {
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (): Clamp1x1;
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (upper: number): Clamp1x3;
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (upper: _.__, number: number): Clamp1x5;
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (upper: number, number: number): number;
}
interface Clamp1x2 {
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (): Clamp1x2;
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (lower: number): Clamp1x3;
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (lower: _.__, number: number): Clamp1x6;
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (lower: number, number: number): number;
}
interface Clamp1x3 {
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (): Clamp1x3;
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (number: number): number;
}
interface Clamp1x4 {
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (): Clamp1x4;
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (lower: number): Clamp1x5;
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (lower: _.__, upper: number): Clamp1x6;
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (lower: number, upper: number): number;
}
interface Clamp1x5 {
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (): Clamp1x5;
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (upper: number): number;
}
interface Clamp1x6 {
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (): Clamp1x6;
    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @category Number
     * @param number The number to clamp.
     * @param [lower] The lower bound.
     * @param upper The upper bound.
     * @returns Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    (lower: number): number;
}

declare const clamp: Clamp;
export = clamp;
