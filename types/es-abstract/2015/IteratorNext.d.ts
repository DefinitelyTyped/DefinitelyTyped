declare function IteratorNext<T, TReturn = any, TNext = unknown>(
    iterator: Iterator<T, TReturn, TNext>,
    value?: TNext,
): IteratorResult<T, TReturn>;
declare function IteratorNext<T, TReturn = any, TNext = unknown>(
    iterator: AsyncIterator<T, TReturn, TNext>,
    value?: TNext,
): Promise<IteratorResult<T, TReturn>>;
declare function IteratorNext<T, TReturn = any, TNext = unknown>(
    iterator: Iterator<T, TReturn, TNext> | AsyncIterator<T, TReturn, TNext>,
    value?: TNext,
): IteratorResult<T, TReturn> | Promise<IteratorResult<T, TReturn>>;
export = IteratorNext;
