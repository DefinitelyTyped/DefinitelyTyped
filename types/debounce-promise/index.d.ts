// Type definitions for debounce-promise 3.1
// Project: https://github.com/bjoerge/debounce-promise
// Definitions by: Wu Haotian <https://github.com/whtsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare namespace debounce {
    interface DebounceOptions {
        leading?: boolean;
        accumulate?: boolean;
    }
}

type ArgumentsType<T> = T extends (...args: infer A) => any ? A : never;

declare function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait?: number,
    options?: debounce.DebounceOptions
): (
    ...args: ArgumentsType<T>
) => ReturnType<T> extends Promise<any>
    ? ReturnType<T>
    : Promise<ReturnType<T>>;

export = debounce;
