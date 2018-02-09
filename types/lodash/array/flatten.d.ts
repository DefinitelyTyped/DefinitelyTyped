import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Flattens `array` a single level deep.
         *
         * @param array The array to flatten.
         * @return Returns the new flattened array.
         */
        flatten<T>(array: List<Many<T>> | null | undefined): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.flatten
         */
        flatten<T>(this: LoDashImplicitWrapper<List<Many<T>> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.flatten
         */
        flatten<T>(this: LoDashExplicitWrapper<List<Many<T>> | null | undefined>): LoDashExplicitWrapper<T[]>;
    }
}