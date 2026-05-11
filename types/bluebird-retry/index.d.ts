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
