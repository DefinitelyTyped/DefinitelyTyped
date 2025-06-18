export = promiseMemoize;

declare function promiseMemoize<T extends (...args: any[]) => PromiseLike<any>>(
    fn: T,
    options?: promiseMemoize.Options,
): T & {
    clear(): void;
};

declare namespace promiseMemoize {
    interface Options {
        maxAge?: number | undefined;
        maxErrorAge?: number | undefined;
        resolve?: KeyResolver | undefined;
    }
    type KeyResolver = "simple" | "json" | ((args: any[]) => any) | ReadonlyArray<"json" | ((arg: any) => any)>;
}
