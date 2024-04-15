// This is necessary to disallow import of `call-bind/index` or `call-bind/index.js`:
declare module "call-bind" {
    export = callBind;

    /**
     * For a given function, creates a bound function that has the same body as the original function.
     * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
     *
     * Equivalent to:
     * ```js
     * Function.prototype.call.bind(target, ...)
     * ```
     *
     * @param target The function to be used as the this object for `Function.prototype.call`.
     * @param args Arguments to bind to the parameters of the function.
     */
    function callBind<T, A extends readonly unknown[], R>(
        target: (this: T, ...args: A) => R,
    ): (thisArg: T, ...args: A) => R;
    function callBind<T, A extends readonly unknown[], R>(
        target: (this: T, ...args: A) => R,
        thisArg: T,
    ): (...args: A) => R;
    function callBind<T, AX extends readonly unknown[], A extends readonly unknown[], R>(
        originalFunction: (this: T, ...args: readonly [...bound: AX, ...args: A]) => R,
        thisArg: T,
        ...bound: AX
    ): (...args: A) => R;

    namespace callBind {
        /**
         * For a given function, creates a bound function that has the same body as the original function.
         * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
         *
         * Equivalent to:
         * ```js
         * Function.prototype.apply.bind(target, ...)
         * ```
         *
         * @param target The function to be used as the this object for `Function.prototype.apply`.
         * @param args Arguments to bind to the parameters of the function.
         */
        function apply<T, A extends readonly unknown[], R>(
            target: (this: T, ...args: A) => R,
        ): (thisArg: T, args: Readonly<A>) => R;
        function apply<T, A extends readonly unknown[], R>(
            target: (this: T, ...args: A) => R,
            thisArg: T,
        ): (args: Readonly<A>) => R;
        function apply<T, A1 extends readonly unknown[], A2 extends readonly unknown[], R>(
            originalFunction: (this: T, ...args: readonly [...A1, ...A2]) => R,
            thisArg: T,
            ...args: A1
        ): (args: Readonly<A2>) => R;
    }
}
