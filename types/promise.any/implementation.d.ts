declare function any<T>(
    iterable: ReadonlyArray<T | PromiseLike<T>> | Readonly<Iterable<T | PromiseLike<T>>>,
): Promise<T>;

export = any;
