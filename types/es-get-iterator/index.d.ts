interface Iterable<T, TReturn = any, TNext = any> {
    [Symbol.iterator](): Iterator<T, TReturn, TNext>;
}

type InferIterable<T> = T extends Iterable<infer TYield, infer TReturn, infer TNext> ? Iterator<TYield, TReturn, TNext>
    : unknown extends T ? Iterator<unknown, any, any> | undefined
    : undefined;

declare function getIterator<T>(iterable: T): InferIterable<T>;

export = getIterator;
