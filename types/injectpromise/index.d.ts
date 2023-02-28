// Type definitions for injectpromise 1.0
// Project: https://github.com/sullof/injectpromise
// Definitions by: naeemy <https://github.com/naeemy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Make a function accepting a callback return a Promise
 * @param scope - object scope
 */
declare function injectpromise(scope: any): (func: (...args: any) => any, ...args: any) => Promise<any>;

export = injectpromise;
