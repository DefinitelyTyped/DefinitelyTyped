// Type definitions for ember-qunit 2.2
// Project: https://github.com/emberjs/ember-qunit#readme
// Definitions by: Derek Wickern <https://github.com/dwickern>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="qunit" />

declare module 'ember-qunit' {
    import Ember from 'ember';
    import { ModuleCallbacks } from "ember-test-helpers";

    interface QUnitModuleCallbacks extends ModuleCallbacks, Hooks {
        beforeSetup?(assert: Assert): void;
        setup?(assert: Assert): void;
        teardown?(assert: Assert): void;
        afterTeardown?(assert: Assert): void;
    }

    /**
     * @param fullName The full name of the unit, ie controller:application, route:index.
     * @param description The description of the module
     */
    export function moduleFor(fullName: string, description: string, callbacks?: QUnitModuleCallbacks): void;
    export function moduleFor(fullName: string, callbacks?: QUnitModuleCallbacks): void;

    /**
     * @param fullName the short name of the component that you'd use in a template, ie x-foo, ic-tabs, etc.
     * @param description The description of the module
     */
    export function moduleForComponent(fullName: string, description: string, callbacks?: QUnitModuleCallbacks): void;
    export function moduleForComponent(fullName: string, callbacks?: QUnitModuleCallbacks): void;

    /**
     * @param fullName the short name of the model you'd use in store operations ie user, assignmentGroup, etc.
     * @param description The description of the module
     */
    export function moduleForModel(fullName: string, description: string, callbacks?: QUnitModuleCallbacks): void;
    export function moduleForModel(fullName: string, callbacks?: QUnitModuleCallbacks): void;

    /**
     * Sets a Resolver globally which will be used to look up objects from each test's container.
     */
    export function setResolver(resolver: Ember.Resolver): void;

    export class QUnitAdapter extends Ember.Test.Adapter {}

    export { module, test, skip, only, todo } from 'qunit';
}

declare module 'qunit' {
    import { TestContext } from "ember-test-helpers";

    export const module: typeof QUnit.module;

    /**
     * Add a test to run.
     *
     * Add a test to run using `QUnit.test()`.
     *
     * The `assert` argument to the callback contains all of QUnit's assertion
     * methods. Use this argument to call your test assertions.
     *
     * `QUnit.test()` can automatically handle the asynchronous resolution of a
     * Promise on your behalf if you return a thenable Promise as the result of
     * your callback function.
     *
     * @param name Title of unit being tested
     * @param callback Function to close over assertions
     */
    export function test(name: string, callback: (this: TestContext, assert: Assert) => void): void;

    /**
     * Adds a test to exclusively run, preventing all other tests from running.
     *
     * Use this method to focus your test suite on a specific test. QUnit.only
     * will cause any other tests in your suite to be ignored.
     *
     * Note, that if more than one QUnit.only is present only the first instance
     * will run.
     *
     * This is an alternative to filtering tests to run in the HTML reporter. It
     * is especially useful when you use a console reporter or in a codebase
     * with a large set of long running tests.
     *
     * @param name Title of unit being tested
     * @param callback Function to close over assertions
     */
    export function only(name: string, callback: (this: TestContext, assert: Assert) => void): void;

    /**
     * Use this method to test a unit of code which is still under development (in a “todo” state).
     * The test will pass as long as one failing assertion is present.
     *
     * If all assertions pass, then the test will fail signaling that `QUnit.todo` should
     * be replaced by `QUnit.test`.
     *
     * @param name Title of unit being tested
     * @param callback Function to close over assertions
     */
    export function todo(name: string, callback: (this: TestContext, assert: Assert) => void): void;

    /**
     * Adds a test like object to be skipped.
     *
     * Use this method to replace QUnit.test() instead of commenting out entire
     * tests.
     *
     * This test's prototype will be listed on the suite as a skipped test,
     * ignoring the callback argument and the respective global and module's
     * hooks.
     *
     * @param Title of unit being tested
     */
    export const skip: typeof QUnit.skip;

    export default QUnit;
}
