// Type definitions for promise.allsettled 1.0
// Project: https://github.com/ljharb/promise.allsettled#readme
// Definitions by: Martin Jurča <https://github.com/jurca>
//                 Elizabeth Lorenz <https://github.com/kisaraofpern>
//                 Jordan Harband <https://github.com/ljharb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import implementation = require('./implementation');
import getPolyfill = require('./polyfill');
import shim = require('./shim');
import {
    PromiseRejection as PromiseRejectionType,
    PromiseResolution as PromiseResolutionType,
    PromiseResult as PromiseResultType,
    PromiseResultTuple as PromiseResultTupleType,
} from './types';

type ExportedImplementationType = typeof implementation & {
    getPolyfill: typeof getPolyfill,
    implementation: typeof implementation,
    shim: typeof shim,
};

declare const exportedImplementation: ExportedImplementationType;

export = exportedImplementation;

// This seems to be the only way to export these types here without colliding with the "export =" syntax.
declare namespace exportedImplementation {
    type PromiseRejection<E> = PromiseRejectionType<E>;
    type PromiseResolution<T> = PromiseResolutionType<T>;
    type PromiseResult<T, E = unknown> = PromiseResultType<T, E>;
    type PromiseResultTuple<T extends [unknown, ...unknown[]]> = PromiseResultTupleType<T>;
}
