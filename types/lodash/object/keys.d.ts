import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Creates an array of the own enumerable property names of object.
         *
         * Note: Non-object values are coerced to objects. See the ES spec for more details.
         *
         * @param object The object to query.
         * @return Returns the array of property names.
         */
        keys(object?: any): string[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.keys
         */
        keys(): LoDashImplicitWrapper<string[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.keys
         */
        keys(): LoDashExplicitWrapper<string[]>;
    }
}