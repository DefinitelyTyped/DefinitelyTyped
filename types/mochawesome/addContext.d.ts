import * as Mocha from 'mocha';

declare namespace addContext {
    interface TestContextObject {
        title: string;
        value: any;
    }

    type TestContext = string | TestContextObject;
}

/**
 * Add context to the test object so it can
 * be displayed in the mochawesome report.
 *
 * **Note**: Arrow function tests are not currently
 * supported, since we depend on the current test
 * context (i.e. `this`)
 *
 * @example
 * it('should test something', function () {
 *   someFunctionThatTestsCode();
 *
 *   addContext(this, 'some context to add');
 *
 *   addContext(this, {
 *     title: 'Expected number of something'
 *     value: 42
 *   });
 *
 *   assert('something');
 * });
 *
 */
declare function addContext(testCtx: Mocha.Context, context: addContext.TestContext): void;

export = addContext;
