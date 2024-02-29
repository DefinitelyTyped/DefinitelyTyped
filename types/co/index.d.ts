// Since TS 3.6 the checker knows that the correct type of returned values and yielded values https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-6.html
// Generator<T, TReturn, TNext> => TReturn
// Function => ReturnType<Function>
// others => others
type ExtractType<I> = I extends { [Symbol.iterator]: () => Iterator<any, infer TReturn, any> } ? TReturn
    : I extends (...args: any[]) => any ? ReturnType<I>
    : I;

interface Co {
    <F extends (...args: any[]) => Iterator<any, any, any>>(fn: F, ...args: Parameters<F>): Promise<
        ExtractType<ReturnType<F>>
    >;
    default: Co;
    co: Co;
    wrap: <F extends (...args: any[]) => Iterator<any, any, any>>(
        fn: F,
    ) => (...args: Parameters<F>) => Promise<ExtractType<ReturnType<F>>>;
}

declare const co: Co;

export = co;
