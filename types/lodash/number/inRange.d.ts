import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Checks if n is between start and up to but not including, end. If end is not specified it’s set to start
         * with start then set to 0.
         *
         * @param n The number to check.
         * @param start The start of the range.
         * @param end The end of the range.
         * @return Returns true if n is in the range, else false.
         */
        inRange(
            n: number,
            start: number,
            end?: number
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.inRange
         */
        inRange(
            start: number,
            end?: number
        ): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.inRange
         */
        inRange(
            start: number,
            end?: number
        ): LoDashExplicitWrapper<boolean>;
    }
}