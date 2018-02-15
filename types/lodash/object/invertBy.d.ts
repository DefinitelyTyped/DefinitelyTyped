import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * This method is like _.invert except that the inverted object is generated from the results of running each
         * element of object through iteratee. The corresponding inverted value of each inverted key is an array of
         * keys responsible for generating the inverted value. The iteratee is invoked with one argument: (value).
         *
         * @param object The object to invert.
         * @param interatee The iteratee invoked per element.
         * @return Returns the new inverted object.
         */
        invertBy<T>(
            object: List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined,
            interatee?: ValueIteratee<T>
        ): Dictionary<string[]>;

        /**
         * @see _.invertBy
         */
        invertBy<T extends object>(
            object: T | null | undefined,
            interatee?: ValueIteratee<T[keyof T]>
        ): Dictionary<string[]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.invertBy
         */
        invertBy<T>(
            this: LoDashImplicitWrapper<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>,
            interatee?: ValueIteratee<T>
        ): LoDashImplicitWrapper<Dictionary<string[]>>;

        /**
         * @see _.invertBy
         */
        invertBy<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            interatee?: ValueIteratee<T[keyof T]>
        ): LoDashImplicitWrapper<Dictionary<string[]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.invertBy
         */
        invertBy<T>(
            this: LoDashExplicitWrapper<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>,
            interatee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<Dictionary<string[]>>;

        /**
         * @see _.invertBy
         */
        invertBy<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            interatee?: ValueIteratee<T[keyof T]>
        ): LoDashExplicitWrapper<Dictionary<string[]>>;
    }
}