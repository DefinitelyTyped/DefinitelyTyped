// Type definitions for retry-as-promised 2.3
// Project: https://github.com/mickhansen/retry-as-promised
// Definitions by: Florian Oellerich <https://github.com/Raigen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import Promise = require('bluebird');

declare namespace retryAsPromised {
    type MatchOption = string | RegExp | Error;
    interface Options {
        $current?: number | undefined;
        max?: number | undefined;
        timeout?: number | undefined;
        match?: MatchOption[] | MatchOption | undefined;
        backoffBase?: number | undefined;
        backoffExponent?: number | undefined;
        report?: ((message: string, obj: Options, err?: any) => void) | undefined;
        name?: string | undefined;
    }

    type RetryCallback<T> = ({ current }: { current: Options['$current'] }) => Promise.Thenable<T>;
    type RetryAsPromisedStatic = <T = any>(callback: RetryCallback<T>, options: Options | number) => Promise<T>;
}

declare const retryAsPromised: retryAsPromised.RetryAsPromisedStatic;
export = retryAsPromised;
