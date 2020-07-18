// Type definitions for async-retry 1.4
// Project: https://github.com/zeit/async-retry#readme
// Definitions by: Albert Wu <https://github.com/albertywu>
//                 Pablo Rodríguez <https://github.com/MeLlamoPablo>
//                 Rafał Sawicki <https://github.com/rafsawicki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { OperationOptions } from 'retry';

declare function AsyncRetry<A>(
    fn: AsyncRetry.RetryFunction<A>,
    opts?: AsyncRetry.Options
): Promise<A>;

declare namespace AsyncRetry {
    interface Options extends OperationOptions {
        onRetry?: (e: Error, attempt: number) => any;
    }

    type RetryFunction<A> = (bail: (e: Error) => void, attempt: number) => A|Promise<A>;
}

export = AsyncRetry;
