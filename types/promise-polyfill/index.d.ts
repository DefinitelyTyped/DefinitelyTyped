// Type definitions for promise-polyfill 6.0
// Project: https://github.com/taylorhakes/promise-polyfill
// Definitions by: Steve Jenkins <https://github.com/skysteve>
//                 Daniel Cassidy <https://github.com/djcsdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface PromisePolyfillConstructor extends PromiseConstructor {
    _immediateFn?: (handler: (() => void) | string) => void;
}

declare const Promise: PromisePolyfillConstructor;

export default Promise;
