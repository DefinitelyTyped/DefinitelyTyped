// Type definitions for promise-memoize 1.2
// Project: https://github.com/nodeca/promise-memoize#readme
// Definitions by: Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = promiseMemoize;

declare function promiseMemoize<T extends (...args: any[]) => PromiseLike<any>>(
    fn: T, options?: promiseMemoize.Options
): T & {
    clear(): void;
};

declare namespace promiseMemoize {
    interface Options {
        maxAge?: number;
        maxErrorAge?: number;
        resolve?: KeyResolver;
    }
    type KeyResolver = 'simple' | 'json' | ((args: any[]) => any) | ReadonlyArray<'json' | ((arg: any) => any)>;
}
