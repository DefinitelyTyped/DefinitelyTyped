// Type definitions for nanoassert 2.0
// Project: https://github.com/emilbayes/nanoassert
// Definitions by: Junxiao Shi <https://github.com/yoursunny>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Assert that `declaration` is truthy otherwise throw `AssertionError`.
 * In JavaScript runtimes that use v8, you will get a nicer
 * stack trace with this error.
 *
 * If you want friendlier messages you can use template strings to show the
 * assertion made.
 *
 * @throws {AssertionError} with optional `message`.
 *
 * @example
 * import assert = require('nanoassert')
 *
 * assert(a !== b, `${a} !== ${b}`)
 */
declare function assert(declaration: unknown, message?: string): asserts declaration;

export = assert;
