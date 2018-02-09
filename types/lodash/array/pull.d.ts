import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Removes all provided values from array using SameValueZero for equality comparisons.
         *
         * Note: Unlike _.without, this method mutates array.
         *
         * @param array The array to modify.
         * @param values The values to remove.
         * @return Returns array.
         */
        pull<T>(
            array: T[],
            ...values: T[]
        ): T[];

        /**
         * @see _.pull
         */
        pull<T>(
            array: List<T>,
            ...values: T[]
        ): List<T>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.pull
         */
        pull<T>(
            this: LoDashImplicitWrapper<List<T>>,
            ...values: T[]
        ): this;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.pull
         */
        pull<T>(
            this: LoDashExplicitWrapper<List<T>>,
            ...values: T[]
        ): this;
    }
}