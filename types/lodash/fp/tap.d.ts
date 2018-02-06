import _ = require("../index");

declare namespace Lodash {
    interface Tap {
        /**
         * This method invokes interceptor and returns value. The interceptor is bound to thisArg and invoked with one
         * argument; (value). The purpose of this method is to "tap into" a method chain in order to perform operations
         * on intermediate results within the chain.
         *
         * @param value The value to provide to interceptor.
         * @param interceptor The function to invoke.
         * @parem thisArg The this binding of interceptor.
         * @return Returns value.
         **/
        (): Tap;
        /**
         * This method invokes interceptor and returns value. The interceptor is bound to thisArg and invoked with one
         * argument; (value). The purpose of this method is to "tap into" a method chain in order to perform operations
         * on intermediate results within the chain.
         *
         * @param value The value to provide to interceptor.
         * @param interceptor The function to invoke.
         * @parem thisArg The this binding of interceptor.
         * @return Returns value.
         **/
        <T>(interceptor: (value: T) => void): Tap1x1<T>;
        /**
         * This method invokes interceptor and returns value. The interceptor is bound to thisArg and invoked with one
         * argument; (value). The purpose of this method is to "tap into" a method chain in order to perform operations
         * on intermediate results within the chain.
         *
         * @param value The value to provide to interceptor.
         * @param interceptor The function to invoke.
         * @parem thisArg The this binding of interceptor.
         * @return Returns value.
         **/
        <T>(interceptor: (value: T) => void, value: T): T;
    }
    interface Tap1x1<T> {
        /**
         * This method invokes interceptor and returns value. The interceptor is bound to thisArg and invoked with one
         * argument; (value). The purpose of this method is to "tap into" a method chain in order to perform operations
         * on intermediate results within the chain.
         *
         * @param value The value to provide to interceptor.
         * @param interceptor The function to invoke.
         * @parem thisArg The this binding of interceptor.
         * @return Returns value.
         **/
        (): Tap1x1<T>;
        /**
         * This method invokes interceptor and returns value. The interceptor is bound to thisArg and invoked with one
         * argument; (value). The purpose of this method is to "tap into" a method chain in order to perform operations
         * on intermediate results within the chain.
         *
         * @param value The value to provide to interceptor.
         * @param interceptor The function to invoke.
         * @parem thisArg The this binding of interceptor.
         * @return Returns value.
         **/
        (value: T): T;
    }
}

declare const tap: Lodash.Tap;
export = tap;
