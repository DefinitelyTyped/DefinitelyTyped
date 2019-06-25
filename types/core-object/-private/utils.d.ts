export type Constructor<Instance> = new (...args: any[]) => Instance;
export type Mix<T, U> = U & Pick<T, Exclude<keyof T, keyof U>>;
export type Values<T> = T[keyof T];

/** Just the strings corresponding to method names on the given type */
export type MethodNames<T> = Values<{ [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never }>;

/**
 * Given a `this` type, arg types tuple and return type, creates a function-ish
 * type that can only be only be invoked via `.call` or `.apply`. Because of the
 * way CoreObject's `_super` works, it's an error to write e.g. `this._super.init()`;
 */
export interface CallOrApply<This, Args, Return> {
    apply: (thisArg: This, args: Args extends undefined ? any[] : Args | IArguments) => Return;

    // TODO support this properly with `...args: Args` once we can restrict to 3.0+ on DT
    call:
        Args extends undefined ? (thisArg: This) => Return :
        Args extends [infer A] ? (thisArg: This, a: A) => Return :
        Args extends [infer A, infer B] ? (thisArg: This, a: A, b: B) => Return :
        Args extends [infer A, infer B, infer C] ? (thisArg: This, a: A, b: B, c: C) => Return :
        Args extends [infer A, infer B, infer C, infer D] ? (thisArg: This, a: A, b: B, c: C, d: D) => Return :
        (thisArg: This, ...args: any[]) => Return;
}

/**
 * The type of `this._super`, which has keys for all methods appearing in the given
 * type, but forces the caller to use `.call` or `.apply` to invoke them.
 */
export type Super<T> = {
    // TODO just do `infer Args` once we can restrict to 3.0+ on DT
    [K in MethodNames<T>]:
        T[K] extends () => infer Return ? CallOrApply<T, undefined, Return> :
        T[K] extends (a: infer A) => infer Return ? CallOrApply<T, [A], Return> :
        T[K] extends (a: infer A, b: infer B) => infer Return ? CallOrApply<T, [A, B], Return> :
        T[K] extends (a: infer A, b: infer B, c: infer C) => infer Return ? CallOrApply<T, [A, B, C], Return> :
        T[K] extends (a: infer A, b: infer B, c: infer C, d: infer D) => infer Return ? CallOrApply<T, [A, B, C, D], Return> :
        T[K] extends (...args: any[]) => infer Return ? CallOrApply<T, any[], Return> :
        never;
};
