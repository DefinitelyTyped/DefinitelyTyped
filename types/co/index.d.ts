// Type definitions for co 4.6
// Project: https://github.com/tj/co#readme
// Definitions by: Doniyor Aliyev <https://github.com/doniyor2109>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

type ExtractType<T> =
    T extends { [Symbol.iterator](): { next(): { done: true, value: infer U } } } ? U :
    T extends { [Symbol.iterator](): { next(): { done: false } } } ? never :
    T extends { [Symbol.iterator](): { next(): { value: infer U } } } ? U :
    T extends { [Symbol.iterator](): any } ? unknown :
    never;

interface Co {
    <F extends (...args: any[]) => Iterator<any>>(fn: F, ...args: Parameters<F>): Promise<ExtractType<ReturnType<F>>>;
    default: Co;
    co: Co;
    wrap: <F extends (...args: any[]) => Iterator<any>>(fn: F) => (...args: Parameters<F>) => Promise<ExtractType<ReturnType<F>>>;
}

declare const co: Co;

export = co;
