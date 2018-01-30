import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * The opposite of _.property; this method creates a function that returns the property value at a given path
         * on object.
         *
         * @param object The object to query.
         * @return Returns the new function.
         */
        propertyOf<T extends {}>(object: T): (path: PropertyPath) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.propertyOf
         */
        propertyOf(): LoDashImplicitWrapper<(path: PropertyPath) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.propertyOf
         */
        propertyOf(): LoDashExplicitWrapper<(path: PropertyPath) => any>;
    }
}