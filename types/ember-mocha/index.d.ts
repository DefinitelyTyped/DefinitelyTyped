// Type definitions for ember-mocha 0.12
// Project: https://github.com/emberjs/ember-mocha#readme
// Definitions by: Derek Wickern <https://github.com/dwickern>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { TestContext, ModuleCallbacks } from "ember-test-helpers";
import Ember from 'ember';
import { it as mochaIt, ISuiteCallbackContext } from 'mocha';

// these globals are re-exported as named exports by ember-mocha
type mochaBefore = typeof before;
type mochaAfter = typeof after;
type mochaBeforeEach = typeof beforeEach;
type mochaAfterEach = typeof afterEach;
type mochaSetup = typeof setup;
type mochaTeardown = typeof teardown;
type mochaSuiteSetup = typeof suiteSetup;
type mochaSuiteTeardown = typeof suiteTeardown;

declare module 'ember-mocha' {
    interface ContextDefinitionFunction {
        (name: string, description: string, callbacks: ModuleCallbacks, tests: (this: ISuiteCallbackContext) => void): void;
        (name: string, description: string, tests: (this: ISuiteCallbackContext) => void): void;
        (name: string, callbacks: ModuleCallbacks, tests: (this: ISuiteCallbackContext) => void): void;
        (name: string, tests: (this: ISuiteCallbackContext) => void): void;
    }

    interface ContextDefinition extends ContextDefinitionFunction {
        only: ContextDefinitionFunction;
        skip: ContextDefinitionFunction;
    }

    interface SetupTest {
        (name?: string, callbacks?: ModuleCallbacks): void;
        (callbacks: ModuleCallbacks): void;
    }

    /** @deprecated Use setupTest instead */
    export const describeModule: ContextDefinition;

    /** @deprecated Use setupComponentTest instead */
    export const describeComponent: ContextDefinition;

    /** @deprecated Use setupModelTest instead */
    export const describeModel: ContextDefinition;

    export const setupTest: SetupTest;
    export const setupAcceptanceTest: SetupTest;
    export const setupComponentTest: SetupTest;
    export const setupModelTest: SetupTest;

    export const it: typeof mochaIt;

    /**
     * Sets a Resolver globally which will be used to look up objects from each test's container.
     */
    export function setResolver(resolver: Ember.Resolver): void;
}

declare module 'mocha' {
    // augment test callback context
    interface ITestCallbackContext extends TestContext {}
    interface IHookCallbackContext extends TestContext {}

    // re-export mocha globals as named exports
    export const describe: Mocha.IContextDefinition;
    export const context: Mocha.IContextDefinition;
    export const it: Mocha.ITestDefinition;
    export const setup: mochaSetup;
    export const teardown: mochaTeardown;
    export const suiteSetup: mochaSuiteSetup;
    export const suiteTeardown: mochaSuiteTeardown;
    export const before: mochaBefore;
    export const after: mochaAfter;
    export const beforeEach: mochaBeforeEach;
    export const afterEach: mochaAfterEach;
}
