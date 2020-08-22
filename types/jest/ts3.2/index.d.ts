// tslint:disable-next-line:no-bad-reference
/// <reference path="../index.d.ts" />

declare namespace jest {
    interface Matchers<R, T = {}> {
        /**
         * For comparing numbers or big integer values.
         */
        toBeGreaterThan(expected: number | bigint): R;
        /**
         * For comparing numbers or big integer values.
         */
        toBeGreaterThanOrEqual(expected: number | bigint): R;
        /**
         * For comparing numbers or big integer values.
         */
        toBeLessThan(expected: number | bigint): R;
        /**
         * For comparing numbers or big integer values.
         */
        toBeLessThanOrEqual(expected: number | bigint): R;
    }
}
