declare namespace debounce {
    interface DebounceOptions {
        leading?: boolean;
    }

    interface DebounceOptionsAccumulate {
        leading?: boolean;
        accumulate: true;
    }
}

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
    ...args: GetElementType<GetElementType<Parameters<T>>>
) => ReturnType<T> extends Promise<any> ? ReturnType<T> : Promise<ReturnType<T>>;

declare function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait?: number,
    options?: debounce.DebounceOptions
): (...args: Parameters<T>) => ReturnType<T> extends Promise<any> ? ReturnType<T> : Promise<ReturnType<T>>;

export = debounce;
