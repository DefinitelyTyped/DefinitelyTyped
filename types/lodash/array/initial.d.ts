import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Gets all but the last element of array.
         *
         * @param array The array to query.
         * @return Returns the slice of array.
         */
        initial<T>(array: List<T> | null | undefined): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.initial
         */
        initial<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.initial
         */
        initial<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T[]>;
    }
}