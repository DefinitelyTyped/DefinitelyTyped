import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Creates a function that performs a deep comparison between a given object and source, returning true if the
         * given object has equivalent property values, else false.
         *
         * Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, and
         * strings. Objects are compared by their own, not inherited, enumerable properties. For comparing a single own
         * or inherited property value see _.matchesProperty.
         *
         * @param source The object of property values to match.
         * @return Returns the new function.
         */
        matches<T>(source: T): (value: any) => boolean;

        /**
         * @see _.matches
         */
        matches<T, V>(source: T): (value: V) => boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.matches
         */
        matches<V>(): LoDashImplicitWrapper<(value: V) => boolean>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.matches
         */
        matches<V>(): LoDashExplicitWrapper<(value: V) => boolean>;
    }
}