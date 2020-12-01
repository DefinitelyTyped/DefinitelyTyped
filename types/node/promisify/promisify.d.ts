declare module 'util' {
    /**
     * Returns a promisified function signature for the given callback-style function.
     */
    type Promisify<
        T extends (...args: any[]) => any,
        TReturn = CallbackAPIReturnType<T>,
        TArgs extends any[] = Lead<Parameters<T>>
    > = (...args: TArgs) => Promise<TReturn>;

    function promisify<T extends (...args: any[]) => any>(fn: T): Promisify<T>;
}

// Helper types for smart promisify signature
/**
 * Returns the last item's type in a tuple
 */
type Last<T extends unknown[]> = T extends []
    ? never
    : T extends [...infer _, infer R]
    ? R
    : T extends [...infer _, (infer R)?]
    ? R | undefined
    : never;

/** Returns the type of the last argument of a function */
type LastArgument<T extends (...args: any[]) => any> = Last<Parameters<T>>;

/** Returns the "return" type of a callback-style API */
type CallbackAPIReturnType<
    T extends (...args: any[]) => any,
    TCb extends (...args: any[]) => any = LastArgument<T>,
    TCbArgs = Parameters<Exclude<TCb, undefined>>
> = TCbArgs extends [(Error | null | undefined)?]
    ? void
    : TCbArgs extends [Error | null | undefined, infer U]
    ? U
    : TCbArgs extends any[]
    ? TCbArgs[1]
    : never;

/**
 * Returns all but the last item's type in a tuple/array
 */
type Lead<T extends unknown[]> = T extends [] ? [] : T extends [...infer L, any?] ? L : [];
