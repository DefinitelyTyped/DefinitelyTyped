import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates an array of unique array values not included in the other provided arrays using SameValueZero for
         * equality comparisons.
         *
         * @param array The array to inspect.
         * @param values The arrays of values to exclude.
         * @return Returns the new array of filtered values.
         */
        difference<T>(
            array: List<T> | null | undefined,
            ...values: Array<List<T>>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.difference
         */
        difference<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.difference
         */
        difference<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashExplicitWrapper<T[]>;
    }
}