// Type definitions for ember-test-helpers 1.0
// Project: https://github.com/emberjs/ember-test-helpers#readme
// Definitions by: Chris Krycho <https://github.com/chriskrycho>
//                 James C. Davis <https://github.com/jamescdavis>
//                 Dan Freeman <https://github.com/dfreeman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

import EmberResolver from 'ember-resolver';

// NOTE: These types apply to ember-test-helper v0.7. The major
// version had to be bumped for SemVer due to a breaking change
// in TypeScript 3.1
//
// In the future, we'll use another versioning strategy that
// provides safety from breaking changes without bumping the major
// version number

import RSVP from "rsvp";
import ApplicationInstance from '@ember/application/instance';
import { TemplateFactory } from 'htmlbars-inline-precompile';

export interface TestContext {
    get(key: string): unknown;
    getProperties<K extends string>(...keys: K[]): Pick<any, K>;
    set<V>(key: string, value: V): V;
    setProperties<P extends Record<string, unknown>>(hash: P): P;
    render(template?: string | string[] | TemplateFactory): Promise<void>;
    clearRender(): void;
    factory(fullName: string): unknown;
    // NOTE: this uses an intersection instead of something more normal because
    // it is intentionally causing a collision between the two `factoryFor`
    // definitions.
    owner: ApplicationInstance & {
        factoryFor(fullName: string, options?: {}): unknown;
    };
    pauseTest(): Promise<void>;
    resumeTest(): void;
    element: Element | Document;
}


export interface ModuleCallbacks {
    integration?: boolean | undefined;
    unit?: boolean | undefined;
    needs?: string[] | undefined;

    beforeSetup?(assert?: any): void;
    setup?(assert?: any): void;
    teardown?(assert?: any): void;
    afterTeardown?(assert?: any): void;

    [key: string]: any;
}

export class TestModule {
    constructor(name: string, callbacks?: ModuleCallbacks);
    constructor(name: string, description?: string, callbacks?: ModuleCallbacks);

    name: string;
    subjectName: string;
    description: string;
    isIntegration: boolean;
    callbacks: ModuleCallbacks;
    context: TestContext;
    resolver: EmberResolver;

    setup(assert?: any): RSVP.Promise<void>;
    teardown(assert?: any): RSVP.Promise<void>;
    getContext(): TestContext;
    setContext(context: TestContext): void;
}

export function getContext(): TestContext | undefined;
export function setContext(context: TestContext): void;
export function unsetContext(): void;
export function setResolver(resolver: EmberResolver): void;
