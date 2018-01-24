import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Creates a shallow clone of value.
         *
         * Note: This method is loosely based on the structured clone algorithm and supports cloning arrays,
         * array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols,
         * and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty
         * object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps.
         *
         * @param value The value to clone.
         * @return Returns the cloned value.
         */
        clone<T>(value: T): T;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.clone
         */
        clone(): TValue;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.clone
         */
        clone(): this;
    }
}