type AsyncGeneratorFunction<T = unknown, TReturn = any, TNext = unknown> = (
    ...args: unknown[]
) => AsyncGenerator<T, TReturn, TNext>;

declare function makeAsyncGeneratorFunction(): readonly AsyncGeneratorFunction[];

export = makeAsyncGeneratorFunction;
