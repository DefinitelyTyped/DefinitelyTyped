type DeepResolved<T> = T extends PromiseLike<infer R> ? DeepResolved<R>
    : T extends object ? {
            [K in keyof T]: DeepResolved<T[K]>;
        }
    : T;

declare function resolveValue<T>(boolean: T): Promise<DeepResolved<T>>;

export = resolveValue;
