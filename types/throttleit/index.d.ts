type AnyFunction = (...args: any[]) => any;

/**
 * Returns a new function that, when invoked, invokes `func` at most once per `wait` milliseconds.
 *
 * @param func Function to wrap.
 * @param wait Number of milliseconds that must elapse between `func` invocations.
 * @return A new function that wraps the `func` function passed in.
 */
declare function throttle<GFunction extends AnyFunction>(
    fn: GFunction,
    wait: number,
): GFunction;

export = throttle;
