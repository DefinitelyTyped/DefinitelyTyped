import pull = require('..');

/**
 * Like `[].filter(function (data) {return true || false})` only `data` where `test(data) == true` are let through to the next stream.
 */
declare function filter<In, Out extends In>(test: (data: In) => data is Out): pull.Through<In, Out>;
declare function filter<InOut>(test: (data: InOut) => boolean): pull.Through<InOut, InOut>;
export = filter;
