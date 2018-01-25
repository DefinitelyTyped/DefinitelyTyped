import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * This method is like _.zip except that it accepts an array of grouped elements and creates an array
         * regrouping the elements to their pre-zip configuration.
         *
         * @param array The array of grouped elements to process.
         * @return Returns the new array of regrouped elements.
         */
        unzip<T>(array: T[][] | List<List<T>> | null | undefined): T[][];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unzip
         */
        unzip<T>(this: LoDashImplicitWrapper<T[][] | List<List<T>> | null | undefined>): LoDashImplicitWrapper<T[][]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unzip
         */
        unzip<T>(this: LoDashExplicitWrapper<T[][] | List<List<T>> | null | undefined>): LoDashExplicitWrapper<T[][]>;
    }
}