// Type definitions for bluebird-retry
// Project: https://github.com/jut-io/bluebird-retry
// Definitions by: Pascal Vomhoff <https://github.com/pvomhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="bluebird" />

import Promise = require('bluebird');

declare function retry<T>(func: (param: T) => void, options?: retry.Options): Promise<T>;

declare namespace retry {
    export interface Options {
        interval?: number;
        backoff?: number;
        max_interval?: number;
        timeout?: number;
        max_tries?: number;
        predicate?: any;
        throw_original?: boolean;
        context?: any;
        args?: any;
    }

}

export = retry;
