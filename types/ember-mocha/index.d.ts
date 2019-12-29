// Type definitions for ember-mocha 0.14
// Project: https://github.com/emberjs/ember-mocha#readme
// Definitions by: Derek Wickern <https://github.com/dwickern>
//                 Simon Ihmig <https://github.com/simonihmig>
//                 Mike North <https://github.com/mike-north>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

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

    interface TestHooks {
        beforeEach: mochaBeforeEach;
        afterEach: mochaAfterEach;
    }

    interface SetupOptions {
        resolver: Ember.Resolver;
    }

    type NewSetupTest = (options?: SetupOptions) => TestHooks;

    /** @deprecated Use setupTest instead */
    export const describeModule: ContextDefinition;

    /** @deprecated Use setupComponentTest instead */
    export const describeComponent: ContextDefinition;

    /** @deprecated Use setupModelTest instead */
    export const describeModel: ContextDefinition;

    export const setupTest: NewSetupTest & SetupTest;
    export const setupAcceptanceTest: SetupTest;
    export const setupComponentTest: SetupTest;
    export const setupModelTest: SetupTest;

    export const setupRenderingTest: NewSetupTest;
    export const setupApplicationTest: NewSetupTest;

    export const it: typeof mochaIt;

    /**
     * Sets a Resolver globally which will be used to look up objects from each test's container.
     */
    export function setResolver(resolver: Ember.Resolver): void;
}

declare module 'mocha' {
    // augment test callback context
    interface Context extends TestContext {}
}
