import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates a slice of array with n elements taken from the end.
         *
         * @param array The array to query.
         * @param n The number of elements to take.
         * @return Returns the slice of array.
         */
        takeRight<T>(
            array: List<T> | null | undefined,
            n?: number
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.takeRight
         */
        takeRight<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            n?: number
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.takeRight
         */
        takeRight<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            n?: number
        ): LoDashExplicitWrapper<T[]>;
    }
}