export type AnyFn = (...args: never[]) => unknown;

type AnyMethod<Target> = (this: Target, ...args: never[]) => unknown;

type MethodsOf<O> = {
    [K in keyof O]: O[K] extends AnyFn ? O[K] : never;
};

export type RunMethodArgs<T, M extends RunMethod<T>> =
    M extends AnyMethod<T> ? Parameters<M> :
    M extends keyof T ? T[M] extends AnyMethod<T> ? Parameters<MethodsOf<T>[M]> : never :
    never;

export type RunMethodReturn<T, M extends RunMethod<T>> =
    M extends AnyMethod<T> ? ReturnType<M> :
    M extends keyof T ? T[M] extends AnyMethod<T> ? ReturnType<MethodsOf<T>[M]> : never :
    never;

export type RunMethod<Target> = AnyMethod<Target> | keyof Target;

export type EmberRunQueues = 'sync' | 'actions' | 'routerTransitions' | 'render' | 'afterRender' | 'destroy';

// don't export the private types
export {};
