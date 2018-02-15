import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates an array of unique values that are included in all of the provided arrays using SameValueZero for
         * equality comparisons.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of shared values.
         */
        intersection<T>(...arrays: Array<List<T>>): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.intersection
         */
        intersection<T>(
            this: LoDashImplicitWrapper<List<T>>,
            ...arrays: Array<List<T>>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.intersection
         */
        intersection<T>(
            this: LoDashExplicitWrapper<List<T>>,
            ...arrays: Array<List<T>>
        ): LoDashExplicitWrapper<T[]>;
    }
}