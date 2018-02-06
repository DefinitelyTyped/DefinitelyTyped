// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

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
        (lower: number, upper: number): Clamp1x2;
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
        (upper: number): Clamp1x2;
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
        (number: number): number;
    }
}

declare const clamp: Lodash.Clamp;
export = clamp;
