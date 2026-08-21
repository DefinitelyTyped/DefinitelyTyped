declare function IterableToArrayLike<T extends Iterable<unknown> | ArrayLike<unknown>>(
    items: T,
): T extends Iterable<infer I> ? I[] : T;
export = IterableToArrayLike;
