// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface Before {
    /**
     * Creates a function that invokes func, with the this binding and arguments of the created function, while
     * it’s called less than n times. Subsequent calls to the created function return the result of the last func
     * invocation.
     *
     * @param n The number of calls at which func is no longer invoked.
     * @param func The function to restrict.
     * @return Returns the new restricted function.
     */
    (): Before;
    /**
     * Creates a function that invokes func, with the this binding and arguments of the created function, while
     * it’s called less than n times. Subsequent calls to the created function return the result of the last func
     * invocation.
     *
     * @param n The number of calls at which func is no longer invoked.
     * @param func The function to restrict.
     * @return Returns the new restricted function.
     */
    <TFunc extends (...args: any[]) => any>(func: TFunc): Before1x1<TFunc>;
    /**
     * Creates a function that invokes func, with the this binding and arguments of the created function, while
     * it’s called less than n times. Subsequent calls to the created function return the result of the last func
     * invocation.
     *
     * @param n The number of calls at which func is no longer invoked.
     * @param func The function to restrict.
     * @return Returns the new restricted function.
     */
    <TFunc extends (...args: any[]) => any>(func: TFunc, n: number): TFunc;
}
interface Before1x1<TFunc extends (...args: any[]) => any> {
    /**
     * Creates a function that invokes func, with the this binding and arguments of the created function, while
     * it’s called less than n times. Subsequent calls to the created function return the result of the last func
     * invocation.
     *
     * @param n The number of calls at which func is no longer invoked.
     * @param func The function to restrict.
     * @return Returns the new restricted function.
     */
    (): Before1x1<TFunc>;
    /**
     * Creates a function that invokes func, with the this binding and arguments of the created function, while
     * it’s called less than n times. Subsequent calls to the created function return the result of the last func
     * invocation.
     *
     * @param n The number of calls at which func is no longer invoked.
     * @param func The function to restrict.
     * @return Returns the new restricted function.
     */
    (n: number): TFunc;
}

declare const before: Before;
export = before;
