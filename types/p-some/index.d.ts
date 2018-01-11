// Type definitions for p-some 2.0
// Project: https://github.com/sindresorhus/p-some#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import AggregateErrorModule = require('aggregate-error');

export = pSome;

declare function pSome<T>(values: Array<Value<T>> | Iterable<Value<T>>, options: pSome.Options<T>): Promise<T[]>;

type Value<T> = T | PromiseLike<T>;

declare namespace pSome {
    interface Options<T> {
        count: number;
        filter?(value: T): boolean;
    }

    const AggregateError: typeof AggregateErrorModule;
}
