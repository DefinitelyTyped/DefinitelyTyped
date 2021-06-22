import ArrayFrom = require('array.from');

/**
 * The `expectType` function from https://www.npmjs.com/package/tsd,
 * except instead of returning `void`, it returns `T`.
 */
declare function expectType<T>(t: T): T;

expectType<typeof Array.from>(ArrayFrom);
expectType<typeof Array.from>(ArrayFrom.implementation);
expectType<() => typeof Array.from>(ArrayFrom.getPolyfill);
expectType<() => typeof Array.from>(ArrayFrom.shim);
