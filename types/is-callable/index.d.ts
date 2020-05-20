// Type definitions for is-callable 1.1
// Project: https://github.com/ljharb/is-callable
// Definitions by: Daniel <https://github.com/nieltg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function isCallable(val: any): val is (...args: any[]) => any;

export = isCallable;
