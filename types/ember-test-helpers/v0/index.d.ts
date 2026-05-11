/// <reference types="jquery" />

declare module "ember-test-helpers" {
    import Ember from "ember";
    import { TemplateFactory } from "htmlbars-inline-precompile";
    import RSVP from "rsvp";

    interface ModuleCallbacks {
        integration?: boolean | undefined;
        unit?: boolean | undefined;
        needs?: string[] | undefined;

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
        render(template?: string | string[] | TemplateFactory): Promise<void>;
        clearRender(): void;
        registry: Ember.Registry;
        container: Ember.Container;
        dispatcher: Ember.EventDispatcher;
        application: Ember.Application;
        register(fullName: string, factory: any): void;
        factory(fullName: string): any;
        inject: {
            controller(name: string, options?: { as: string }): any;
            service(name: string, options?: { as: string }): any;
        };
        owner: Ember.ApplicationInstance & {
            factoryFor(fullName: string, options?: {}): any;
        };
        pauseTest(): Promise<void>;
        resumeTest(): void;
        element: Element;
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

declare module "ember-test-helpers/wait" {
    import RSVP from "rsvp";

    interface WaitOptions {
        waitForTimers?: boolean | undefined;
        waitForAJAX?: boolean | undefined;
        waitForWaiters?: boolean | undefined;
    }

    export default function wait(options?: WaitOptions): RSVP.Promise<void>;
}

declare module "ember-test-helpers/has-ember-version" {
    export default function hasEmberVersion(major: number, minor: number): boolean;
}
