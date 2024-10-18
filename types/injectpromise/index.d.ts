/**
 * Make a function accepting a callback return a Promise
 * @param scope - object scope
 */
declare function injectpromise(scope: any): (func: (...args: any) => any, ...args: any) => Promise<any>;

export = injectpromise;
