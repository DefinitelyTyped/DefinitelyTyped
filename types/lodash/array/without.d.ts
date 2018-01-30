import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates an array excluding all provided values using SameValueZero for equality comparisons.
         *
         * @param array The array to filter.
         * @param values The values to exclude.
         * @return Returns the new array of filtered values.
         */
        without<T>(
            array: List<T> | null | undefined,
            ...values: T[]
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.without
         */
        without<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...values: T[]
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.without
         */
        without<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...values: T[]
        ): LoDashExplicitWrapper<T[]>;
    }
}