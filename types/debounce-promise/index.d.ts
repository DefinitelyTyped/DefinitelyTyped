// Type definitions for debounce-promise 3.1
// Project: https://github.com/bjoerge/debounce-promise
// Definitions by: Wu Haotian <https://github.com/whtsky>, Su <https://github.com/wowissu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare namespace debounce {
    interface DebounceOptions {
        leading?: boolean;
    }

    interface DebounceOptionsAccumulate {
        leading?: boolean;
        accumulate: true;
    }
}

type ArgumentsType<T> = T extends (...args: infer A) => any ? A : never;
type GetElementType<T extends any[]> = T extends Array<infer U> ? U : never;

declare function debounce<T extends () => any>(
    func: T,
    wait: number,
    options: debounce.DebounceOptionsAccumulate
): () => ReturnType<T> extends Promise<any> ? ReturnType<T> : Promise<ReturnType<T>>;

declare function debounce<T extends (args: any[]) => any>(
    func: T,
    wait: number,
    options: debounce.DebounceOptionsAccumulate
): (
    ...args: GetElementType<GetElementType<ArgumentsType<T>>>
) => ReturnType<T> extends Promise<any> ? ReturnType<T> : Promise<ReturnType<T>>;

declare function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait?: number,
    options?: debounce.DebounceOptions
): (...args: ArgumentsType<T>) => ReturnType<T> extends Promise<any> ? ReturnType<T> : Promise<ReturnType<T>>;

export = debounce;
