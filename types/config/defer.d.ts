type DeferFunction<T, R> = (this: any, origValue: T) => R;

/*
 * Allows a config value to be deferred for later. The original config object is passed
 * into func as "this".
 * See: https://github.com/lorenwest/node-config/wiki/Special-features-for-JavaScript-configuration-files#deferred-values-in-javascript-configuration-files
 */
export function deferConfig<T, R>(func: DeferFunction<T, R>): R;
