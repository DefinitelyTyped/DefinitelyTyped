/// <reference path="./bignumber.d.ts" />
/// <reference path="./bitset.d.ts" />
/// <reference path="./decimal.d.ts" />
/// <reference path="./long.d.ts" />
/// <reference path="./matrix.d.ts" />
/// <reference path="./simd.d.ts" />

declare namespace adone {
    /**
     * math related things
     */
    namespace math {
        /**
         * Returns a random number from min to max - 1
         *
         * @param min lower bound, default is 0
         * @param max upper bound, default is 0xFFFFFFFF
         */
        function random(min?: number, max?: number): number;

        /**
         * Returns the maximum value from the given array
         *
         * @param array array of values
         * @param score function to calculate the element score value
         */
        function max<T>(array: T[], score?: (x: T) => any): T;

        /**
         * Returns the minimum value from the given array
         *
         * @param array array of values
         * @param score function to calculate the element score value
         */
        function min<T>(array: T[], score?: (x: T) => any): T;
    }
}
