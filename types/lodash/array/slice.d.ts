import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates a slice of array from start up to, but not including, end.
         *
         * @param array The array to slice.
         * @param start The start position.
         * @param end The end position.
         * @return Returns the slice of array.
         */
        slice<T>(
            array: List<T> | null | undefined,
            start?: number,
            end?: number
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.slice
         */
        slice<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            start?: number,
            end?: number
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.slice
         */
        slice<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            start?: number,
            end?: number
        ): LoDashExplicitWrapper<T[]>;
    }
}