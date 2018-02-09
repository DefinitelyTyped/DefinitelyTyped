import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Binds methods of an object to the object itself, overwriting the existing method. Method names may be
         * specified as individual arguments or as arrays of method names. If no method names are provided all
         * enumerable function properties, own and inherited, of object are bound.
         *
         * Note: This method does not set the "length" property of bound functions.
         *
         * @param object The object to bind and assign the bound methods to.
         * @param methodNames The object method names to bind, specified as individual method names or arrays of
         * method names.
         * @return Returns object.
         */
        bindAll<T>(
            object: T,
            ...methodNames: Array<Many<string>>
        ): T;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.bindAll
         */
        bindAll(...methodNames: Array<Many<string>>): this;
    }
}