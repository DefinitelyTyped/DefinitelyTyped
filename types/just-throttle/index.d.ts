// Type definitions for just-throttle 1.1
// Project: https://github.com/angus-c/just/tree/master/packages/function-throttle
// Definitions by: Dominik Rowicki <https://github.com/papermana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare function throttle(fn: (...args: unknown[]) => unknown, interval: number, callFirst?: false): () => void;
declare function throttle<T>(fn: T, interval: number, callFirst?: true): T;

export = throttle;
