// Type definitions for mocha-each 1.1
// Project: https://github.com/ryym/mocha-each#readme
// Definitions by: Tom Harley <https://github.com/magnostherobot>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { ITest, ITestDefinition, ITestCallbackContext } from 'mocha';

/**
 * This function takes an array collections of parameters to be used in
 * a series of mocha tests, defined using the `it` notation common to
 * Mocha.
 */
declare function forEach(
    parameters: ReadonlyArray<any>,
    defaultIt?: ITestDefinition
): { it: ForEachITestDefinition };

/**
 * This interface describes the kind of `it` available from a `forEach` call.
 * The result is very similar to Mocha's `ITestDefinition` interface.
 */
interface ForEachITestDefinition {
    /*
     * The callback functions in each of these properties take a variable
     * number of arguments, based on how many values were passed in tuples
     * in the call of forEach that generated this property.
     *
     * This problem is similar to `Function.prototype.apply`, which also
     * does not have strong typing
     * (see github.com/Microsoft/Typescript/issues/212).
     *
     * These callback functions can all accept an optional callback generated
     * by mocha, which is used for asynchronous code testing. However,
     * since rest parameters have to be the final parameter in a function
     * declaration, this function cannot be explicitly mentioned here.
     *
     * A more accurate signature for the callback functions would be
     *     callback?: (this, ...args, done?: MochaDone)
     * Additionally, Mocha does not export its MochaDone interface.
     */
    (expectation: string, callback?:
        (this: ITestCallbackContext, ...args: any[]) => any): ITest;
    only(expectation: string, callback?:
        (this: ITestCallbackContext, ...args: any[]) => any): ITest;
    skip(expectation: string, callback?:
        (this: ITestCallbackContext, ...args: any[]) => any): ITest;
}

export = forEach;
