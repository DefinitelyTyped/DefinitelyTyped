import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Creates a function that compares the property value of path on a given object to value.
         *
         * Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, and
         * strings. Objects are compared by their own, not inherited, enumerable properties.
         *
         * @param path The path of the property to get.
         * @param srcValue The value to match.
         * @return Returns the new function.
         */
        matchesProperty<T>(
            path: PropertyPath,
            srcValue: T
        ): (value: any) => boolean;

        /**
         * @see _.matchesProperty
         */
        matchesProperty<T, V>(
            path: PropertyPath,
            srcValue: T
        ): (value: V) => boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue>(
            srcValue: SrcValue
        ): LoDashImplicitWrapper<(value: any) => boolean>;

        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue, Value>(
            srcValue: SrcValue
        ): LoDashImplicitWrapper<(value: Value) => boolean>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue>(
            srcValue: SrcValue
        ): LoDashExplicitWrapper<(value: any) => boolean>;

        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue, Value>(
            srcValue: SrcValue
        ): LoDashExplicitWrapper<(value: Value) => boolean>;
    }
}