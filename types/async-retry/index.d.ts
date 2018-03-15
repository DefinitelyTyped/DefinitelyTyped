// Type definitions for async-retry 1.1
// Project: https://github.com/zeit/async-retry#readme
// Definitions by: Albert Wu <https://github.com/albertywu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function retry<A>(fn: RetryFunction<A>, opts: Options): Promise<A>;

export interface Options {
    retries?: number;
    factor?: number;
    minTimeout?: number;
    maxTimeout?: number;
    randomize?: boolean;
    onRetry?: (e: Error) => any;
}

export type RetryFunction<A> = (bail: (e: Error) => A, attempt: number) => A|Promise<A>;
