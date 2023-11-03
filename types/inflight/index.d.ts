// Type definitions for inflight 1.0
// Project: https://github.com/isaacs/inflight
// Definitions by: LeoDog896 <https://github.com/LeoDog896>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function inflight<A extends unknown[], R>(key: string | number | symbol, cb: (...args: A) => R): ((...args: A) => R) | null;

export = inflight;
