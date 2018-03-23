// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface Wrap {
    /**
     * Creates a function that provides value to the wrapper function as its first argument. Any additional
     * arguments provided to the function are appended to those provided to the wrapper function. The wrapper is
     * invoked with the this binding of the created function.
     *
     * @param value The value to wrap.
     * @param wrapper The wrapper function.
     * @return Returns the new function.
     */
    (): Wrap;
    /**
     * Creates a function that provides value to the wrapper function as its first argument. Any additional
     * arguments provided to the function are appended to those provided to the wrapper function. The wrapper is
     * invoked with the this binding of the created function.
     *
     * @param value The value to wrap.
     * @param wrapper The wrapper function.
     * @return Returns the new function.
     */
    <T, TArgs, TResult>(wrapper: (value: T, ...args: TArgs[]) => TResult): Wrap1x1<T, TArgs, TResult>;
    /**
     * Creates a function that provides value to the wrapper function as its first argument. Any additional
     * arguments provided to the function are appended to those provided to the wrapper function. The wrapper is
     * invoked with the this binding of the created function.
     *
     * @param value The value to wrap.
     * @param wrapper The wrapper function.
     * @return Returns the new function.
     */
    <T, TArgs, TResult>(wrapper: (value: T, ...args: TArgs[]) => TResult, value: T): (...args: TArgs[]) => TResult;
    /**
     * Creates a function that provides value to the wrapper function as its first argument. Any additional
     * arguments provided to the function are appended to those provided to the wrapper function. The wrapper is
     * invoked with the this binding of the created function.
     *
     * @param value The value to wrap.
     * @param wrapper The wrapper function.
     * @return Returns the new function.
     */
    <T, TResult>(wrapper: (value: T, ...args: any[]) => TResult): Wrap2x1<T, TResult>;
    /**
     * Creates a function that provides value to the wrapper function as its first argument. Any additional
     * arguments provided to the function are appended to those provided to the wrapper function. The wrapper is
     * invoked with the this binding of the created function.
     *
     * @param value The value to wrap.
     * @param wrapper The wrapper function.
     * @return Returns the new function.
     */
    <T, TResult>(wrapper: (value: T, ...args: any[]) => TResult, value: T): (...args: any[]) => TResult;
}
interface Wrap1x1<T, TArgs, TResult> {
    /**
     * Creates a function that provides value to the wrapper function as its first argument. Any additional
     * arguments provided to the function are appended to those provided to the wrapper function. The wrapper is
     * invoked with the this binding of the created function.
     *
     * @param value The value to wrap.
     * @param wrapper The wrapper function.
     * @return Returns the new function.
     */
    (): Wrap1x1<T, TArgs, TResult>;
    /**
     * Creates a function that provides value to the wrapper function as its first argument. Any additional
     * arguments provided to the function are appended to those provided to the wrapper function. The wrapper is
     * invoked with the this binding of the created function.
     *
     * @param value The value to wrap.
     * @param wrapper The wrapper function.
     * @return Returns the new function.
     */
    (value: T): (...args: TArgs[]) => TResult;
}
interface Wrap2x1<T, TResult> {
    /**
     * Creates a function that provides value to the wrapper function as its first argument. Any additional
     * arguments provided to the function are appended to those provided to the wrapper function. The wrapper is
     * invoked with the this binding of the created function.
     *
     * @param value The value to wrap.
     * @param wrapper The wrapper function.
     * @return Returns the new function.
     */
    (): Wrap2x1<T, TResult>;
    /**
     * Creates a function that provides value to the wrapper function as its first argument. Any additional
     * arguments provided to the function are appended to those provided to the wrapper function. The wrapper is
     * invoked with the this binding of the created function.
     *
     * @param value The value to wrap.
     * @param wrapper The wrapper function.
     * @return Returns the new function.
     */
    (value: T): (...args: any[]) => TResult;
}

declare const wrap: Wrap;
export = wrap;
