import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
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
        clamp(
            number: number,
            lower: number,
            upper: number
        ): number;
        clamp(
            number: number,
            upper: number
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.clamp
         */
        clamp(
            lower: number,
            upper: number
        ): number;
        clamp(
            upper: number
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.clamp
         */
        clamp(
            lower: number,
            upper: number
        ): LoDashExplicitWrapper<number>;
        clamp(
            upper: number
        ): LoDashExplicitWrapper<number>;
    }
}