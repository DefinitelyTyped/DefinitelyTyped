import pull = require('..');

/**
 * `take` has 2 valid signatures:
 * 1. A single positive integer `n`. `take` pulls `n` values from the source and then closes the stream. This is really useful for limiting how much you pull.
 * 2. A `testFn` function and optional `opts`. Read data from the source stream and forward it downstream until `testFn(data)` returns false, then close the stream.
 *
 *    `opts` is an optional Object of form `{ last: Boolean }`, where `opts.last` determines whether the last value tested (before closing the stream) is included or excluded (default).
 */
declare function take<InOut>(n: number): pull.Through<InOut, InOut>;
declare function take<InOut>(testFn: (data: InOut) => boolean, opts?: { last: boolean }): pull.Through<InOut, InOut>;
export = take;
