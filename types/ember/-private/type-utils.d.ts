// These are utility types used throughout the Ember type definitions. They
// should *never* be used in end user code.

/** A safe-ish type representing any function. */
export type AnyFn = (...args: any[]) => unknown;

export type AnyMethod<Target> = (this: Target, ...args: any[]) => unknown;

export type MethodsOf<O> = {
    [K in keyof O]: O[K] extends AnyFn ? O[K] : never;
};

// Not just `keyof MethodsOf<O>` because that doesn't correctly exclude all the
// `never` fields.
export type MethodNamesOf<O> = {
    [K in keyof O]: O[K] extends AnyFn ? K : never;
}[keyof O];

export type MethodParams<T, M extends MethodNamesOf<T>> =
    Parameters<MethodsOf<T>[M]>;

export type MethodReturns<T, M extends MethodNamesOf<T>> =
    ReturnType<MethodsOf<T>[M]>;

/** Get the return value of a method string name or a function. */
export type EmberMethodParams<T, M extends EmberMethod<T>> =
    M extends AnyMethod<T> ? Parameters<M> :
    M extends keyof T ? T[M] extends AnyMethod<T> ? Parameters<MethodsOf<T>[M]> : never :
    never;

/** Get the return value of a method string name or a function. */
export type EmberMethodReturn<T, M extends EmberMethod<T>> =
    M extends AnyMethod<T> ? ReturnType<M> :
    M extends keyof T ? T[M] extends AnyMethod<T> ? ReturnType<MethodsOf<T>[M]> : never :
    never;

/**
 * A type utility for Ember's common name-of-object-on-target-or-function
 * pattern for e.g. event handlers.
 */
export type EmberMethod<Target> = AnyMethod<Target> | keyof Target;

// A way of representing non-user-constructible types. You can conveniently use
// this by doing `interface Type extends Data<'some-type-name'> { ... }` for
// simple types, and/or you can type-parameterize it as makes sense for your use
// case (see e.g. `@ember/component/helper`'s use with functional helpers).
declare const Data: unique symbol;
export class Opaque<Data> {
    private declare [Data]: Data;
}

// export type { Opaque };

export {};
