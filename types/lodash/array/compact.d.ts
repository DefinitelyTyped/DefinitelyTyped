import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are
         * falsey.
         *
         * @param array The array to compact.
         * @return Returns the new array of filtered values.
         */
        compact<T>(array: List<T | null | undefined | false | "" | 0> | null | undefined): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.compact
         */
        compact<T>(this: LoDashImplicitWrapper<List<T | null | undefined | false | "" | 0> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.compact
         */
        compact<T>(this: LoDashExplicitWrapper<List<T | null | undefined | false | "" | 0> | null | undefined>): LoDashExplicitWrapper<T[]>;
    }
}