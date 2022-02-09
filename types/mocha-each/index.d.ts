// Type definitions for mocha-each 2.0
// Project: https://github.com/ryym/mocha-each#readme
// Definitions by: Tom Harley <https://github.com/magnostherobot>
//                 Noah May <https://github.com/nmay231>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { Test, TestFunction, Context, SuiteFunction, Suite } from 'mocha';

/**
 * This function takes an array collections of parameters to be used in
 * a series of mocha tests, defined using the `it` or `describe` notation common to
 * Mocha.
 */
declare function forEach(
    parameters: ReadonlyArray<any>,
    dIt?: TestFunction,
    dDescribe?: SuiteFunction
): { it: ForEachTestFunction, describe: ForEachDescribeDefinition };

/**
 * This interface describes the kind of `it` available from a `forEach` call.
 * The result is very similar to Mocha's `TestFunction` interface.
 */
interface ForEachTestFunction {
    (expectation: string, callback?:
        (this: Context, ...args: any[]) => any): Test;
    only(expectation: string, callback?:
        (this: Context, ...args: any[]) => any): Test;
    skip(expectation: string, callback?:
        (this: Context, ...args: any[]) => any): Test;
}

/**
 * This interface describes the kind of `describe` available from a `forEach` call.
 * The result is almost identical to Mocha's `SuiteFunction` interface.
 */
interface ForEachDescribeDefinition {
    (expectation: string, callback?:
        (this: Context, ...args: any[]) => any): Suite;
    only(expectation: string, callback?:
        (this: Context, ...args: any[]) => any): Suite;
    skip(expectation: string, callback?:
        (this: Context, ...args: any[]) => any): Suite;
}

export = forEach;
