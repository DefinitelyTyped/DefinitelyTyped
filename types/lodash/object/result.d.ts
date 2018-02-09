import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * This method is like _.get except that if the resolved value is a function it’s invoked with the this binding
         * of its parent object and its result is returned.
         *
         * @param object The object to query.
         * @param path The path of the property to resolve.
         * @param defaultValue The value returned if the resolved value is undefined.
         * @return Returns the resolved value.
         */
        result<TResult>(
            object: any,
            path: PropertyPath,
            defaultValue?: TResult|((...args: any[]) => TResult)
        ): TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.result
         */
        result<TResult>(
            path: PropertyPath,
            defaultValue?: TResult|((...args: any[]) => TResult)
        ): TResult;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.result
         */
        result<TResult>(
            path: PropertyPath,
            defaultValue?: TResult|((...args: any[]) => TResult)
        ): LoDashExplicitWrapper<TResult>;
    }
}