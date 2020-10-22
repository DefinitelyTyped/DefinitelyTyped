type PromiseConstructorLikeReturnType<C extends PromiseConstructorLike, T> = C extends new (
    executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void,
) => infer R
    ? R
    : PromiseLike<T>;

declare function PromiseResolve<T>(C: PromiseConstructor, x: T | PromiseLike<T>): Promise<T>;
declare function PromiseResolve<C extends PromiseConstructorLike, T>(
    C: C,
    x: T | PromiseLike<T>,
): PromiseConstructorLikeReturnType<C, T>;
export = PromiseResolve;
