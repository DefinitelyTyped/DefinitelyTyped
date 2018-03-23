// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

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

declare const tap: Tap;
export = tap;
