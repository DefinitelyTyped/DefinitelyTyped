export = bind;

//#region bind():
/**
 * For a given function, creates a bound function that has the same body as the original function.
 * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
 * @param thisArg The object to be used as the this object.
 * @param args Arguments to bind to the parameters of the function.
 */
declare function bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>;

// CallableFunction:
declare function bind<T, AX extends readonly unknown[], A extends readonly unknown[], R>(
    this: (this: T, ...args: [...bound: AX, ...args: A]) => R,
    thisArg: T,
    ...bound: AX
): (...args: A) => R;

// NewableFunction:
declare function bind<AX extends readonly unknown[], A extends readonly unknown[], R>(
    this: new (...args: [...bound: AX, ...args: A]) => R,
    thisArg: unknown,
    ...bound: AX
): new (...args: A) => R;
//#endregion

declare namespace bind {
    //#region bind.call():
    // CallableFunction:
    function call<T, AX extends readonly unknown[], A extends readonly unknown[], R>(
        func: (this: T, ...args: [...bound: AX, ...args: A]) => R,
        thisArg: T,
        ...bound: AX
    ): (...args: A) => R;

    // NewableFunction:
    function call<AX extends readonly unknown[], A extends readonly unknown[], R>(
        func: new (...args: [...bound: AX, ...args: A]) => R,
        thisArg: unknown,
        ...bound: AX
    ): new (...args: A) => R;
    //#endregion

    //#region bind.apply():
    // CallableFunction:
    function apply<T, AX extends readonly unknown[], A extends readonly unknown[], R>(
        func: (this: T, ...args: [...bound: AX, ...args: A]) => R,
        args: readonly [thisArg: T, ...bound: AX],
    ): (...args: A) => R;

    // NewableFunction:
    // TODO: Figure out why this is necessary:
    function apply<A extends readonly unknown[], R>(
        func: new (...args: A) => R,
        args: readonly [thisArg: unknown]
    ): new (...args: A) => R;
    function apply<A0, A extends readonly unknown[], R>(
        func: new (bound_0: A0, ...args: A) => R,
        args: readonly [thisArg: unknown, bound_0: A0],
    ): new (...args: A) => R;
    function apply<A0, A1, A extends readonly unknown[], R>(
        func: new (bound_0: A0, bound_1: A1, ...args: A) => R,
        args: readonly [thisArg: unknown, bound_0: A0, bound_1: A1],
    ): new (...args: A) => R;
    function apply<A0, A1, A2, A extends readonly unknown[], R>(
        func: new (bound_0: A0, bound_1: A1, bound_2: A2, ...args: A) => R,
        args: readonly [thisArg: unknown, bound_0: A0, bound_1: A1, bound_2: A2],
    ): new (...args: A) => R;
    function apply<A0, A1, A2, A3, A extends readonly unknown[], R>(
        func: new (bound_0: A0, bound_1: A1, bound_2: A2, bound_3: A3, ...args: A) => R,
        args: readonly [thisArg: unknown, bound_0: A0, bound_1: A1, bound_2: A2, bound_3: A3],
    ): new (...args: A) => R;
    function apply<AX extends readonly unknown[], A extends readonly unknown[], R>(
        func: new (...args: [...bound: AX, ...args: A]) => R,
        args: readonly [thisArg: unknown, ...bound: AX],
    ): new (...args: A) => R;
    //#endregion
}
