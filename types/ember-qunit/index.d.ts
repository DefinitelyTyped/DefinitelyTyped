// Type definitions for ember-qunit 3.4
// Project: https://github.com/emberjs/ember-qunit#readme
// Definitions by: Derek Wickern <https://github.com/dwickern>
//                 Mike North <https://github.com/mike-north>
//                 Steve Calvert <https://github.com/scalvert>
//                 Dan Freeman <https://github.com/dfreeman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="qunit" />

declare module 'ember-qunit' {
    import Ember from 'ember';
    import { ModuleCallbacks } from "ember-test-helpers";

    interface QUnitModuleCallbacks extends ModuleCallbacks, Hooks {
        beforeSetup?(assert: Assert): void;
        setup?(assert: Assert): void;
        teardown?(assert: Assert): void;
        afterTeardown?(assert: Assert): void;
        needs?: string[];
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

    interface SetupTestOptions {
        /**
         * The resolver to use when instantiating container-managed entities in the test.
         */
        resolver?: Ember.Resolver;
    }

    /**
     * Sets up acceptance tests.
     *
     * The `setupApplicationTest` function is used for all acceptance tests. It
     * is invoked in the callback scope of a QUnit module (aka "nested module").
     *
     * Once invoked, all subsequent hooks.beforeEach and test invocations will
     * have access to the following:
     * * `this.owner` - the owner object that been set on the test context.
     * * `this.pauseTest` and `this.resumeTest` - allow easy pausing/resuming of tests.
     * * `this.element` which returns the DOM element representing the application's root element.
     */
    export function setupApplicationTest(hooks: NestedHooks, options?: SetupTestOptions): void;

    /**
     * Sets up tests that need to render snippets of templates.
     *
     * The setupRenderingTest method is used for tests that need to render
     * snippets of templates. It is also invoked in the callback scope of a
     * QUnit module (aka "nested module").
     *
     * Once invoked, all subsequent hooks.beforeEach and test invocations will
     * have access to the following:
     * * All of the methods / properties listed for `setupTest`
     * * this.render(...) - Renders the provided template snippet returning a
     * promise that resolves once rendering has completed
     * * An importable render function that de-sugars into this.render will be
     * the default output of blueprints
     * * this.element - Returns the native DOM element representing the element
     * that was rendered via this.render
     * * this.$(...) - When jQuery is present, executes a jQuery selector with
     * the current this.element as its root
     */
    export function setupRenderingTest(hooks: NestedHooks, options?: SetupTestOptions): void;

    /**
     * Sets up tests that do not need to render snippets of templates.
     *
     * The `setupTest` method is used for all types of tests except for those
     * that need to render snippets of templates. It is invoked in the callback
     * scope of a QUnit module (aka "nested module").
     *
     * Once invoked, all subsequent hooks.beforeEach and test invocations will
     * have access to the following:
     * * this.owner - This exposes the standard "owner API" for the test environment.
     * * this.set / this.setProperties - Allows setting values on the test context.
     * * this.get / this.getProperties - Retrieves values from the test context.
     */
    export function setupTest(hooks: NestedHooks, options?: SetupTestOptions): void;

    export class QUnitAdapter extends Ember.Test.Adapter { }

    export { module, test, skip, only, todo } from 'qunit';

    interface QUnitStartOptions {
        /**
         * If `false` tests will not be loaded automatically.
         */
        loadTests?: boolean;

        /**
         * If `false` the test container will not be setup based on `devmode`,
         * `dockcontainer`, or `nocontainer` URL params.
         */
        setupTestContainer?: boolean;

        /**
         * If `false` tests will not be automatically started (you must run
         * `QUnit.start()` to kick them off).
         */
        startTests?: boolean;

        /**
         * If `false` the default Ember.Test adapter will not be updated.
         */
        setupTestAdapter?: boolean;

        /**
         * `false` opts out of the default behavior of setting `Ember.testing`
         * to `true` before all tests and back to `false` after each test will.
         */
        setupEmberTesting?: boolean;

        /**
         * If `false` validation of `Ember.onerror` will be disabled.
         */
        setupEmberOnerrorValidation?: boolean;

        /**
         * If `false` test isolation validation will be disabled.
         */
        setupTestIsolationValidation?: boolean;
    }

    export function start(options?: QUnitStartOptions): void;
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
     * @param name Title of unit being tested
     * @param callback Function to close over assertions
     */
    export function skip(name: string, callback?: (this: TestContext, assert: Assert) => void): void;

    export default QUnit;
}
