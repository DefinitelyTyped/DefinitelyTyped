import _ = require("../index");

declare namespace Lodash {
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
        (upper: number): Clamp1x1;
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
        (upper: number, number: number): Clamp1x2;
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
        (upper: number, number: number, lower: number): number;
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
        (number: number): Clamp1x2;
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
        (number: number, lower: number): number;
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
        (lower: number): number;
    }
}

declare const clamp: Lodash.Clamp;
export = clamp;
