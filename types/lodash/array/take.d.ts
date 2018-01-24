import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Creates a slice of array with n elements taken from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to take.
         * @return Returns the slice of array.
         */
        take<T>(
            array: List<T> | null | undefined,
            n?: number
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.take
         */
        take<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            n?: number
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.take
         */
        take<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            n?: number
        ): LoDashExplicitWrapper<T[]>;
    }
}