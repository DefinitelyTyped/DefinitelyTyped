import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates a function that returns the property value at path on a given object.
         *
         * @param path The path of the property to get.
         * @return Returns the new function.
         */
        property<TObj, TResult>(path: PropertyPath): (obj: TObj) => TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.property
         */
        property<TObj, TResult>(): LoDashImplicitWrapper<(obj: TObj) => TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.property
         */
        property<TObj, TResult>(): LoDashExplicitWrapper<(obj: TObj) => TResult>;
    }
}