/**
 * Loop with callbacks but don't RangeError.
 */

type Fn = () => any;
declare function looper(fn: Fn): Fn;

export = looper;
