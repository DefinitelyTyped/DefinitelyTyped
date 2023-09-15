// Type definitions for bluebird-retry 0.11
// Project: https://github.com/demmer/bluebird-retry
// Definitions by: Pascal Vomhoff <https://github.com/pvomhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import Promise = require("bluebird");

declare function retry<T>(func: (param: T) => void, options?: retry.Options): Promise<T>;

declare namespace retry {
    interface Options {
        interval?: number | undefined;
        backoff?: number | undefined;
        max_interval?: number | undefined;
        timeout?: number | undefined;
        max_tries?: number | undefined;
        predicate?: any;
        throw_original?: boolean | undefined;
        context?: any;
        args?: any;
    }

    class StopError extends Error {}
}

export = retry;
