// Type definitions for debounce-promise 3.1
// Project: https://github.com/bjoerge/debounce-promise
// Definitions by: Wu Haotian <https://github.com/whtsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace debounce {
    interface DebounceOptions {
        leading?: boolean;
        accumulate?: boolean;
    }
}

declare function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait?: number,
    options?: debounce.DebounceOptions
): (
    ...args: Parameters<T>
) => ReturnType<T> extends Promise<any>
    ? ReturnType<T>
    : Promise<ReturnType<T>>;

export = debounce;
