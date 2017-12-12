// Type definitions for ember-test-helpers 0.6
// Project: https://github.com/emberjs/ember-test-helpers#readme
// Definitions by: Derek Wickern <https://github.com/dwickern>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="jquery" />

declare module 'ember-test-helpers' {
    import Ember from 'ember';
    import DS from 'ember-data';
    import { TemplateFactory } from 'htmlbars-inline-precompile';
    import RSVP from "rsvp";

    interface ModuleCallbacks {
        integration?: boolean;
        unit?: boolean;
        needs?: string[];

        beforeSetup?(assert?: any): void;
        setup?(assert?: any): void;
        teardown?(assert?: any): void;
        afterTeardown?(assert?: any): void;

        [key: string]: any;
    }

    interface TestContext {
        get(key: string): any;
        getProperties<K extends string>(...keys: K[]): Pick<any, K>;
        set<V>(key: string, value: V): V;
        setProperties<P extends { [key: string]: any }>(hash: P): P;
        on(actionName: string, handler: (this: TestContext, ...args: any[]) => any): void;
        send(actionName: string): void;
        $: JQueryStatic;
        subject(options?: {}): any;
        render(template?: string | string[] | TemplateFactory): void;
        clearRender(): void;
        registry: Ember.Registry;
        container: Ember.Container;
        dispatcher: Ember.EventDispatcher;
        application: Ember.Application;
        store: DS.Store;
        register(fullName: string, factory: any): void;
        factory(fullName: string): any;
        inject: {
            controller(name: string, options?: { as: string }): any;
            service(name: string, options?: { as: string }): any;
        };
    }

    class TestModule {
        constructor(name: string, callbacks?: ModuleCallbacks);
        constructor(name: string, description?: string, callbacks?: ModuleCallbacks);

        name: string;
        subjectName: string;
        description: string;
        isIntegration: boolean;
        callbacks: ModuleCallbacks;
        context: TestContext;
        resolver: Ember.Resolver;

        setup(assert?: any): RSVP.Promise<void>;
        teardown(assert?: any): RSVP.Promise<void>;
        getContext(): TestContext;
        setContext(context: TestContext): void;
    }

    class TestModuleForAcceptance extends TestModule {}
    class TestModuleForIntegration extends TestModule {}
    class TestModuleForComponent extends TestModule {}
    class TestModuleForModel extends TestModule {}

    function getContext(): TestContext | undefined;
    function setContext(context: TestContext): void;
    function unsetContext(): void;
    function setResolver(resolver: Ember.Resolver): void;
}

declare module 'ember-test-helpers/wait' {
    import RSVP from "rsvp";

    interface WaitOptions {
        waitForTimers?: boolean;
        waitForAJAX?: boolean;
        waitForWaiters?: boolean;
    }

    export default function wait(options?: WaitOptions): RSVP.Promise<void>;
}

declare module 'ember-test-helpers/has-ember-version' {
    export default function hasEmberVersion(major: number, minor: number): boolean;
}
