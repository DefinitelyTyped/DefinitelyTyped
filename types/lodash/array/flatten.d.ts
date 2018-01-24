import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Flattens a nested array. If isDeep is true the array is recursively flattened, otherwise it’s only
         * flattened a single level.
         *
         * @param array The array to flatten.
         * @param isDeep Specify a deep flatten.
         * @return Returns the new flattened array.
         */
        flatten<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined, isDeep: boolean): T[];

        /**
         * @see _.flatten
         */
        flatten<T>(array: List<Many<T>> | null | undefined): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.flatten
         */
        flatten<T>(this: LoDashImplicitWrapper<ListOfRecursiveArraysOrValues<T> | null | undefined>, isDeep: boolean): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.flatten
         */
        flatten<T>(this: LoDashImplicitWrapper<List<Many<T>> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.flatten
         */
        flatten<T>(this: LoDashExplicitWrapper<ListOfRecursiveArraysOrValues<T> | null | undefined>, isDeep: boolean): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.flatten
         */
        flatten<T>(this: LoDashExplicitWrapper<List<Many<T>> | null | undefined>): LoDashExplicitWrapper<T[]>;
    }
}