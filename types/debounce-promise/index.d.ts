declare namespace debounce {
    interface DebounceOptions {
        leading?: boolean | undefined;
        accumulate?: boolean | undefined;
    }
}

// func is called with an array of array of parameters if accumulate is true
// Use Array<[arg0, arg1, ..., argN]> as func's first parameter type for correct hints
declare function debounce<T extends any[], R>(
    func: (args: Array<[...T]>) => R,
    wait?: number,
    options?: debounce.DebounceOptions & { accumulate: true },
): (
    ...args: T
) => R extends Promise<any> ? R
    : Promise<R>;

declare function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait?: number | (() => number),
    options?: debounce.DebounceOptions,
): (
    ...args: Parameters<T>
) => ReturnType<T> extends Promise<any> ? ReturnType<T>
    : Promise<ReturnType<T>>;

export = debounce;
