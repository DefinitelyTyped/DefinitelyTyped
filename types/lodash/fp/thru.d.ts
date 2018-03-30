// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface Thru {
    /**
     * This method is like _.tap except that it returns the result of interceptor.
     *
     * @param value The value to provide to interceptor.
     * @param interceptor The function to invoke.
     * @param thisArg The this binding of interceptor.
     * @return Returns the result of interceptor.
     */
    (): Thru;
    /**
     * This method is like _.tap except that it returns the result of interceptor.
     *
     * @param value The value to provide to interceptor.
     * @param interceptor The function to invoke.
     * @param thisArg The this binding of interceptor.
     * @return Returns the result of interceptor.
     */
    <T, TResult>(interceptor: (value: T) => TResult): Thru1x1<T, TResult>;
    /**
     * This method is like _.tap except that it returns the result of interceptor.
     *
     * @param value The value to provide to interceptor.
     * @param interceptor The function to invoke.
     * @param thisArg The this binding of interceptor.
     * @return Returns the result of interceptor.
     */
    <T>(p1: _.__, value: T): Thru1x2<T>;
    /**
     * This method is like _.tap except that it returns the result of interceptor.
     *
     * @param value The value to provide to interceptor.
     * @param interceptor The function to invoke.
     * @param thisArg The this binding of interceptor.
     * @return Returns the result of interceptor.
     */
    <T, TResult>(interceptor: (value: T) => TResult, value: T): TResult;
}
interface Thru1x1<T, TResult> {
    /**
     * This method is like _.tap except that it returns the result of interceptor.
     *
     * @param value The value to provide to interceptor.
     * @param interceptor The function to invoke.
     * @param thisArg The this binding of interceptor.
     * @return Returns the result of interceptor.
     */
    (): Thru1x1<T, TResult>;
    /**
     * This method is like _.tap except that it returns the result of interceptor.
     *
     * @param value The value to provide to interceptor.
     * @param interceptor The function to invoke.
     * @param thisArg The this binding of interceptor.
     * @return Returns the result of interceptor.
     */
    (value: T): TResult;
}
interface Thru1x2<T> {
    /**
     * This method is like _.tap except that it returns the result of interceptor.
     *
     * @param value The value to provide to interceptor.
     * @param interceptor The function to invoke.
     * @param thisArg The this binding of interceptor.
     * @return Returns the result of interceptor.
     */
    (): Thru1x2<T>;
    /**
     * This method is like _.tap except that it returns the result of interceptor.
     *
     * @param value The value to provide to interceptor.
     * @param interceptor The function to invoke.
     * @param thisArg The this binding of interceptor.
     * @return Returns the result of interceptor.
     */
    <TResult>(interceptor: (value: T) => TResult): TResult;
}

declare const thru: Thru;
export = thru;
