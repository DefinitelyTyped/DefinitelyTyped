// Type definitions for looper 4.0
// Project: https://github.com/dominictarr/looper
// Definitions by: Rong Shen <https://github.com/jacobbubu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Loop with callbacks but don't RangeError.
 */

type Fn = () => any;
declare function looper(fn: Fn): Fn;

export = looper;
