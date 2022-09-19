// Type definitions for ember-qunit 2.2
// Project: https://github.com/emberjs/ember-qunit#readme
// Definitions by: Derek Wickern <https://github.com/dwickern>
//                 Mike North <https://github.com/mike-north>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

/// <reference types="qunit" />

import Ember from 'ember';
import { ModuleCallbacks, TestContext } from 'ember-test-helpers';

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

declare global {
    interface TestOnly {
        (name: string, callback: (this: TestContext, assert: Assert) => void): void;
    }
    interface TestTodo {
        (name: string, callback: (this: TestContext, assert: Assert) => void): void;
    }
    interface Test {
        (name: string, callback: (this: TestContext, assert: Assert) => void): void;
    }
}
