import { WrapOptions } from "retry";

/**
 * Retrying made simple, easy, and async.
 *
 * @example
 * import retry = require('async-retry');
 * import fetch from 'node-fetch';
 *
 * await retry(
 *   async (bail) => {
 *     // if anything throws, we retry
 *     const res = await fetch('https://google.com');
 *
 *     if (403 === res.status) {
 *       // don't retry upon 403
 *       bail(new Error('Unauthorized'));
 *       return;
 *     }
 *
 *     const data = await res.text();
 *     return data.substr(0, 500);
 *   },
 *   {
 *     retries: 5,
 *   }
 * );
 */
declare function AsyncRetry<TRet>(fn: AsyncRetry.RetryFunction<TRet>, opts?: AsyncRetry.Options): Promise<TRet>;

declare namespace AsyncRetry {
    interface Options extends WrapOptions {
        /**
         * An optional function that is invoked after a new retry is performed. It's passed the
         * `Error` that triggered it as a parameter.
         */
        onRetry?: ((e: Error, attempt: number) => any) | undefined;
    }

    /**
     * @param bail A function you can invoke to abort the retrying (bail).
     * @param attempt The attempt number. The absolute first attempt (before any retries) is `1`.
     */
    type RetryFunction<TRet> = (bail: (e: Error) => void, attempt: number) => TRet | Promise<TRet>;
}

export = AsyncRetry;
