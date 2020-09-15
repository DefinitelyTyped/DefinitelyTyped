//#region bind():
/**
 * For a given function, creates a bound function that has the same body as the original function.
 * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
 * @param thisArg The object to be used as the this object.
 * @param args Arguments to bind to the parameters of the function.
 */
declare function bind<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T): (...args: A) => R;
declare function bind<T, A0, A extends any[], R>(
    this: (this: T, arg0: A0, ...args: A) => R,
    thisArg: T,
    arg0: A0,
): (...args: A) => R;
declare function bind<T, A0, A1, A extends any[], R>(
    this: (this: T, arg0: A0, arg1: A1, ...args: A) => R,
    thisArg: T,
    arg0: A0,
    arg1: A1,
): (...args: A) => R;
declare function bind<T, A0, A1, A2, A extends any[], R>(
    this: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R,
    thisArg: T,
    arg0: A0,
    arg1: A1,
    arg2: A2,
): (...args: A) => R;
declare function bind<T, A0, A1, A2, A3, A extends any[], R>(
    this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R,
    thisArg: T,
    arg0: A0,
    arg1: A1,
    arg2: A2,
    arg3: A3,
): (...args: A) => R;
declare function bind<T, AX, R>(this: (this: T, ...args: AX[]) => R, thisArg: T, ...args: AX[]): (...args: AX[]) => R;

declare function bind<A extends any[], R>(this: new (...args: A) => R, thisArg: any): new (...args: A) => R;
declare function bind<A0, A extends any[], R>(
    this: new (arg0: A0, ...args: A) => R,
    thisArg: any,
    arg0: A0,
): new (...args: A) => R;
declare function bind<A0, A1, A extends any[], R>(
    this: new (arg0: A0, arg1: A1, ...args: A) => R,
    thisArg: any,
    arg0: A0,
    arg1: A1,
): new (...args: A) => R;
declare function bind<A0, A1, A2, A extends any[], R>(
    this: new (arg0: A0, arg1: A1, arg2: A2, ...args: A) => R,
    thisArg: any,
    arg0: A0,
    arg1: A1,
    arg2: A2,
): new (...args: A) => R;
declare function bind<A0, A1, A2, A3, A extends any[], R>(
    this: new (arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R,
    thisArg: any,
    arg0: A0,
    arg1: A1,
    arg2: A2,
    arg3: A3,
): new (...args: A) => R;
declare function bind<AX, R>(this: new (...args: AX[]) => R, thisArg: any, ...args: AX[]): new (...args: AX[]) => R;
//#endregion

declare namespace bind {
    //#region bind.call():
    /**
     * Creates a bound function with the specified object as the this value and the specified rest arguments as the arguments.
     * @param thisArg The object to be used as the this object.
     * @param args Argument values to be passed to the function.
     */
    // CallableFunction:
    function call<T, A extends any[], R>(func: (this: T, ...args: A) => R, thisArg: T): (...args: A) => R;
    function call<T, A0, A extends any[], R>(
        func: (this: T, arg0: A0, ...args: A) => R,
        thisArg: T,
        arg0: A0,
    ): (...args: A) => R;
    function call<T, A0, A1, A extends any[], R>(
        func: (this: T, arg0: A0, arg1: A1, ...args: A) => R,
        thisArg: T,
        arg0: A0,
        arg1: A1,
    ): (...args: A) => R;
    function call<T, A0, A1, A2, A extends any[], R>(
        func: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R,
        thisArg: T,
        arg0: A0,
        arg1: A1,
        arg2: A2,
    ): (...args: A) => R;
    function call<T, A0, A1, A2, A3, A extends any[], R>(
        func: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R,
        thisArg: T,
        arg0: A0,
        arg1: A1,
        arg2: A2,
        arg3: A3,
    ): (...args: A) => R;
    function call<T, AX, R>(func: (this: T, ...args: AX[]) => R, thisArg: T, ...args: AX[]): (...args: AX[]) => R;

    // NewableFunction:
    function call<A extends any[], R>(func: new (...args: A) => R, thisArg: unknown): new (...args: A) => R;
    function call<A0, A extends any[], R>(
        func: new (arg0: A0, ...args: A) => R,
        thisArg: unknown,
        arg0: A0,
    ): new (...args: A) => R;
    function call<A0, A1, A extends any[], R>(
        func: new (arg0: A0, arg1: A1, ...args: A) => R,
        thisArg: unknown,
        arg0: A0,
        arg1: A1,
    ): new (...args: A) => R;
    function call<A0, A1, A2, A extends any[], R>(
        func: new (arg0: A0, arg1: A1, arg2: A2, ...args: A) => R,
        thisArg: unknown,
        arg0: A0,
        arg1: A1,
        arg2: A2,
    ): new (...args: A) => R;
    function call<A0, A1, A2, A3, A extends any[], R>(
        func: new (arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R,
        thisArg: unknown,
        arg0: A0,
        arg1: A1,
        arg2: A2,
        arg3: A3,
    ): new (...args: A) => R;
    function call<AX, R>(func: new (...args: AX[]) => R, thisArg: unknown, ...args: AX[]): new (...args: AX[]) => R;
    //#endregion

    //#region bind.apply():
    /**
     * Creates a bound function with the specified object as the this value and the elements of specified array as the arguments.
     * @param thisArg The object to be used as the this object.
     * @param args An array of argument values to be passed to the function.
     */
    // CallableFunction:
    function apply<T, A extends any[], R>(func: (this: T, ...args: A) => R, args: [T]): (...args: A) => R;
    function apply<T, A0, A extends any[], R>(
        func: (this: T, arg0: A0, ...args: A) => R,
        args: [T, A0],
    ): (...args: A) => R;
    function apply<T, A0, A1, A extends any[], R>(
        func: (this: T, arg0: A0, arg1: A1, ...args: A) => R,
        args: [T, A0, A1],
    ): (...args: A) => R;
    function apply<T, A0, A1, A2, A extends any[], R>(
        func: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R,
        args: [T, A0, A1, A2],
    ): (...args: A) => R;
    function apply<T, A0, A1, A2, A3, A extends any[], R>(
        func: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R,
        args: [T, A0, A1, A2, A3],
    ): (...args: A) => R;
    function apply<T, AX, R>(func: (this: T, ...args: AX[]) => R, args: [T, ...AX[]]): (...args: AX[]) => R;

    // NewableFunction:
    function apply<A extends any[], R>(func: new (...args: A) => R, args: [unknown]): new (...args: A) => R;
    function apply<A0, A extends any[], R>(
        func: new (arg0: A0, ...args: A) => R,
        args: [unknown, A0],
    ): new (...args: A) => R;
    function apply<A0, A1, A extends any[], R>(
        func: new (arg0: A0, arg1: A1, ...args: A) => R,
        args: [unknown, A0, A1],
    ): new (...args: A) => R;
    function apply<A0, A1, A2, A extends any[], R>(
        func: new (arg0: A0, arg1: A1, arg2: A2, ...args: A) => R,
        args: [unknown, A0, A1, A2],
    ): new (...args: A) => R;
    function apply<A0, A1, A2, A3, A extends any[], R>(
        func: new (arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R,
        args: [unknown, A0, A1, A2, A3],
    ): new (...args: A) => R;
    function apply<AX, R>(func: new (...args: AX[]) => R, args: [unknown, ...AX[]]): new (...args: AX[]) => R;
    //#endregion
}

export = bind;
