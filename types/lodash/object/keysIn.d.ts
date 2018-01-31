import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates an array of the own and inherited enumerable property names of object.
         *
         * Note: Non-object values are coerced to objects.
         *
         * @param object The object to query.
         * @return An array of property names.
         */
        keysIn(object?: any): string[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.keysIn
         */
        keysIn(): LoDashImplicitWrapper<string[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.keysIn
         */
        keysIn(): LoDashExplicitWrapper<string[]>;
    }
}