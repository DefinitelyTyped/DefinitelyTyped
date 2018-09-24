// Type definitions for Ember.js 3.0
// Project: http://emberjs.com/
// Definitions by: Jed Mao <https://github.com/jedmao>
//                 bttf <https://github.com/bttf>
//                 Derek Wickern <https://github.com/dwickern>
//                 Chris Krycho <https://github.com/chriskrycho>
//                 Theron Cross <https://github.com/theroncross>
//                 Martin Feckie <https://github.com/mfeckie>
//                 Alex LaFroscia <https://github.com/alexlafroscia>
//                 Mike North <https://github.com/mike-north>
//                 Bryan Crotaz <https://github.com/BryanCrotaz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="jquery" />
/// <reference types="handlebars" />
/// <reference types="ember__string" />
/// <reference types="ember__polyfills" />
/// <reference types="ember__object" />
/// <reference types="ember__utils" />
/// <reference types="ember__array" />
/// <reference types="ember__engine" />
/// <reference types="ember__debug" />
/// <reference types="ember__controller" />
/// <reference types="ember__component" />
/// <reference types="ember__routing" />

declare module 'ember' {
    import {
        Objectify, Fix, UnwrapComputedPropertySetters,
        UnwrapComputedPropertySetter,
        UnwrapComputedPropertyGetters,
        UnwrapComputedPropertyGetter,
        EmberClassArguments, EmberClassConstructor, EmberInstanceArguments,
        ComputedPropertyCallback,
        ObserverMethod
    } from '@ember/object/-private/types';
    import * as HandlebarsNamespace from 'handlebars';
    // Capitalization is intentional: this makes it much easier to re-export RSVP on
    // the Ember namespace.
    import Rsvp from 'rsvp';
    import { TemplateFactory } from 'htmlbars-inline-precompile';

    import { Registry as ServiceRegistry } from '@ember/service';
    import { Registry as ControllerRegistry } from '@ember/controller';
    import * as EmberStringNs from '@ember/string';
    import * as EmberPolyfillsNs from '@ember/polyfills';
    import * as EmberUtilsNs from '@ember/utils';
    import * as EmberObjectNs from '@ember/object';
    import * as EmberObjectObserversNs from '@ember/object/observers';
    import * as EmberObjectMixinNs from '@ember/object/mixin';
    import * as EmberObjectProxyNs from '@ember/object/proxy';
    import * as EmberObjectPromiseProxyNs from '@ember/object/promise-proxy-mixin';
    import * as EmberObjectInternalsNs from '@ember/object/internals';
    import * as EmberObjectComputedNs from '@ember/object/computed';
    import * as EmberObjectEventedNs from '@ember/object/evented';
    import * as EmberObjectEventsNs from '@ember/object/events';
    // @ember/debug
    import * as EmberDebugNs from '@ember/debug';
    import _ContainerDebugAdapter from '@ember/debug/container-debug-adapter';
    import EmberDataAdapter from '@ember/debug/data-adapter';
    // @ember/engine
    import * as EmberEngineNs from '@ember/engine';
    import * as EmberEngineInstanceNs from '@ember/engine/instance';
    import _ContainerProxyMixin from '@ember/engine/-private/container-proxy-mixin';
    import _RegistryProxyMixin from '@ember/engine/-private/registry-proxy-mixin';
    import EmberCoreObject from '@ember/object/core';
    // tslint:disable-next-line:no-duplicate-imports
    import * as EmberControllerNs from '@ember/controller';
    // tslint:disable-next-line:no-duplicate-imports
    import EmberMixin from '@ember/object/mixin';
    import EmberObservable from '@ember/object/observable';
    // @ember/array
    import * as EmberArrayNs from '@ember/array';
    import EmberMutableArray from '@ember/array/mutable';
    import EmberNativeArray from '@ember/array/-private/native-array';
    import EmberArrayProxy from '@ember/array/proxy';
    import EmberEnumerable from '@ember/array/-private/enumerable';
    import EmberMutableEnumerable from '@ember/array/-private/mutable-enumerable';
    import EmberArrayProtoExtensions from '@ember/array/types/prototype-extensions';

    type EmberArray<T> = EmberArrayNs.default<T>;
    import EmberActionHandler from '@ember/object/-private/action-handler';
    import EmberComponent from '@ember/component';
    import EmberTextArea from '@ember/component/text-area';
    import EmberTextField from '@ember/component/text-field';
    import EmberCheckbox from '@ember/component/checkbox';
    import EmberHelper from '@ember/component/helper';
    // @ember/routing
    import EmberRoutingRouter from '@ember/routing/router';
    import EmberRoutingRoute from '@ember/routing/route';
    import EmberRoutingTransition from '@ember/routing/-private/transition';
    import EmberRoutingRouterService from '@ember/routing/router-service';
    import EmberRoutingHashLocation from '@ember/routing/hash-location';
    import EmberRoutingAutoLocation from '@ember/routing/auto-location';
    import EmberRoutingHistoryLocation from '@ember/routing/history-location';
    import EmberRoutingNoneLocation from '@ember/routing/none-location';
    import EmberRoutingLinkComponent from '@ember/routing/link-component';

    type Mix<A, B> = B & Pick<A, Exclude<keyof A, keyof B>>;
    type Mix3<A, B, C> = Mix<Mix<A, B>, C>;
    type Mix4<A, B, C, D> = Mix3<Mix<A, B>, C, D>;
    type Mix5<A, B, C, D, E> = Mix4<Mix<A, B>, C, D, E>;

    /**
     * Ember.Object.extend(...) accepts any number of mixins or literals.
     */
    type MixinOrLiteral<T, Base> = EmberMixin<T, Base> | T;

    /**
     * Used to infer the type of ember classes of type `T`.
     *
     * Generally you would use `EmberClass.create()` instead of `new EmberClass()`.
     *
     * The single-arg constructor is required by the typescript compiler.
     * The multi-arg constructor is included for better ergonomics.
     *
     * Implementation is carefully chosen for the reasons described in
     * https://github.com/typed-ember/ember-typings/pull/29
     */

    interface EmberRunTimer {
        __ember_run_timer_brand__: any;
    }

    type RunMethod<Target, Ret = any> = ((this: Target, ...args: any[]) => Ret) | keyof Target;
    type EmberRunQueues =
        | 'sync'
        | 'actions'
        | 'routerTransitions'
        | 'render'
        | 'afterRender'
        | 'destroy';

    interface EventDispatcherEvents {
        touchstart?: string | null;
        touchmove?: string | null;
        touchend?: string | null;
        touchcancel?: string | null;
        keydown?: string | null;
        keyup?: string | null;
        keypress?: string | null;
        mousedown?: string | null;
        mouseup?: string | null;
        contextmenu?: string | null;
        click?: string | null;
        dblclick?: string | null;
        mousemove?: string | null;
        focusin?: string | null;
        focusout?: string | null;
        mouseenter?: string | null;
        mouseleave?: string | null;
        submit?: string | null;
        input?: string | null;
        change?: string | null;
        dragstart?: string | null;
        drag?: string | null;
        dragenter?: string | null;
        dragleave?: string | null;
        dragover?: string | null;
        drop?: string | null;
        dragend?: string | null;
        [event: string]: string | null | undefined;
    }

    /**
     * Ember.CoreView is an abstract class that exists to give view-like behavior to both Ember's main
     * view class Ember.Component and other classes that don't need the full functionality of Ember.Component.
     * Unless you have specific needs for CoreView, you will use Ember.Component in your applications.
     */
    class CoreView extends Ember.Object.extend(Ember.Evented, Ember.ActionHandler) {}

    export namespace Ember {
        const A: typeof EmberArrayNs.A;
        const isArray: typeof EmberArrayNs.isArray;
        export type Enumerable<T> = EmberEnumerable<T>;
        export const Enumerable: typeof EmberEnumerable;
        class ArrayProxy<T> extends EmberArrayProxy<T> {}
        export type Array<T> = EmberArray<T>;
        export const Array: typeof EmberArrayNs.default;
        export type MutableArray<T> = EmberMutableArray<T>;
        export const MutableArray: typeof EmberMutableArray;
        export type NativeArray<T> = EmberNativeArray<T>;
        export const NativeArray: typeof EmberNativeArray;
        export type MutableEnumerable<T> = EmberMutableEnumerable<T>;
        export const MutableEnumerable: typeof EmberMutableEnumerable;
        class Router extends EmberRoutingRouter {}
        class Route extends EmberRoutingRoute {}
        const ActionHandler: typeof EmberActionHandler;
        class Controller extends EmberControllerNs.default {}
        export class Component extends EmberComponent {}
        export class TextArea extends EmberTextArea {}
        export class TextField extends EmberTextField {}
        export class Checkbox extends EmberCheckbox {}
        export class Helper extends EmberHelper {}

        export class HashLocation extends EmberRoutingHashLocation {}
        export class NoneLocation extends EmberRoutingNoneLocation {}
        export class HistoryLocation extends EmberRoutingHistoryLocation {}
        export class LinkComponent extends EmberRoutingLinkComponent {}
        interface FunctionPrototypeExtensions {
            /**
             * The `property` extension of Javascript's Function prototype is available
             * when `EmberENV.EXTEND_PROTOTYPES` or `EmberENV.EXTEND_PROTOTYPES.Function` is
             * `true`, which is the default.
             */
            property(...args: string[]): ComputedProperty<any>;
            /**
             * The `observes` extension of Javascript's Function prototype is available
             * when `EmberENV.EXTEND_PROTOTYPES` or `EmberENV.EXTEND_PROTOTYPES.Function` is
             * true, which is the default.
             */
            observes(...args: string[]): this;
            /**
             * The `on` extension of Javascript's Function prototype is available
             * when `EmberENV.EXTEND_PROTOTYPES` or `EmberENV.EXTEND_PROTOTYPES.Function` is
             * true, which is the default.
             */
            on(...args: string[]): this;
        }

        interface ArrayPrototypeExtensions<T> extends EmberArrayProtoExtensions<T> {}

        interface StringPrototypeExtensions {
            camelize(): string;
            decamelize(): string;
            classify(): string;
            capitalize(): string;
            loc(values?: string[]): string;
            dasherize(): string;
            underscore(): string;
            w(): string[];
        }

        /**
         * An instance of Ember.Application is the starting point for every Ember application. It helps to
         * instantiate, initialize and coordinate the many objects that make up your app.
         */
        class Application extends EmberEngineNs.default {
            /**
             * Call advanceReadiness after any asynchronous setup logic has completed.
             * Each call to deferReadiness must be matched by a call to advanceReadiness
             * or the application will never become ready and routing will not begin.
             */
            advanceReadiness(): void;
            /**
             * Use this to defer readiness until some condition is true.
             *
             * This allows you to perform asynchronous setup logic and defer
             * booting your application until the setup has finished.
             *
             * However, if the setup requires a loading UI, it might be better
             * to use the router for this purpose.
             */
            deferReadiness(): void;
            /**
             * defines an injection or typeInjection
             */
            inject(factoryNameOrType: string, property: string, injectionName: string): void;
            /**
             * This injects the test helpers into the window's scope. If a function of the
             * same name has already been defined it will be cached (so that it can be reset
             * if the helper is removed with `unregisterHelper` or `removeTestHelpers`).
             * Any callbacks registered with `onInjectHelpers` will be called once the
             * helpers have been injected.
             */
            injectTestHelpers(): void;
            /**
             * registers a factory for later injection
             * @param fullName type:name (e.g., 'model:user')
             * @param factory (e.g., App.Person)
             */
            register(fullName: string, factory: any): void;
            /**
             * This removes all helpers that have been registered, and resets and functions
             * that were overridden by the helpers.
             */
            removeTestHelpers(): void;
            /**
             * Reset the application. This is typically used only in tests.
             */
            reset(): void;
            /**
             * This hook defers the readiness of the application, so that you can start
             * the app when your tests are ready to run. It also sets the router's
             * location to 'none', so that the window's location will not be modified
             * (preventing both accidental leaking of state between tests and interference
             * with your testing framework).
             */
            setupForTesting(): void;
            /**
             * The DOM events for which the event dispatcher should listen.
             */
            customEvents: EventDispatcherEvents;
            /**
             * The Ember.EventDispatcher responsible for delegating events to this application's views.
             */
            eventDispatcher: EventDispatcher;
            /**
             * Set this to provide an alternate class to Ember.DefaultResolver
             */
            resolver: DefaultResolver;
            /**
             * The root DOM element of the Application. This can be specified as an
             * element or a jQuery-compatible selector string.
             *
             * This is the element that will be passed to the Application's, eventDispatcher,
             * which sets up the listeners for event delegation. Every view in your application
             * should be a child of the element you specify here.
             */
            rootElement: HTMLElement | string;
            /**
             * Called when the Application has become ready.
             * The call will be delayed until the DOM has become ready.
             */
            ready: (...args: any[]) => any;
            /**
             * Application's router.
             */
            Router: Router;
            registry: Registry;
            /**
             *  Initialize the application and return a promise that resolves with the `Application`
             *  object when the boot process is complete.
             */
            boot(): Promise<Application>;
            /**
             * Create an ApplicationInstance for this Application.
             */
            buildInstance(options?: object): ApplicationInstance;
        }
        /**
         * The `ApplicationInstance` encapsulates all of the stateful aspects of a
         * running `Application`.
         */
        class ApplicationInstance extends EngineInstance {}

        /**
         * Connects the properties of two objects so that whenever the value of one property changes,
         * the other property will be changed also.
         *
         * @deprecated https://emberjs.com/deprecations/v2.x#toc_ember-binding
         */
        class Binding {
            constructor(toPath: string, fromPath: string);
            connect(obj: any): Binding;
            copy(): Binding;
            disconnect(): Binding;
            from(path: string): Binding;
            to(path: string | string[]): Binding;
            toString(): string;
        }
        /**
         * Implements some standard methods for comparing objects. Add this mixin to
         * any class you create that can compare its instances.
         */
        interface Comparable {
            compare(a: any, b: any): number;
        }
        const Comparable: EmberMixin<Comparable>;
        export class ComputedProperty<Get, Set = Get> extends EmberObjectComputedNs.default<Get, Set> {}
        /**
         * A container used to instantiate and cache objects.
         */
        class Container {
            /**
             * Given a fullName, return the corresponding factory. The consumer of the factory
             * is responsible for the destruction of any factory instances, as there is no
             * way for the container to ensure instances are destroyed when it itself is
             * destroyed.
             */
            factoryFor(fullName: string, options?: {}): any;
        }
        class ContainerDebugAdapter extends _ContainerDebugAdapter {}

        // TODO: replace with a proper ES6 reexport once we remove declare module 'ember' {}
        class Object extends EmberObjectNs.default {}
        class ObjectProxy extends EmberObjectProxyNs.default {}
        const Observable: typeof EmberObservable;
        const PromiseProxyMixin: typeof EmberObjectPromiseProxyNs.default;
        class CoreObject extends EmberCoreObject {}
        class DataAdapter extends EmberDataAdapter {}
        const Debug: {
            registerDeprecationHandler: typeof EmberDebugNs.registerDeprecationHandler;
            registerWarnHandler: typeof EmberDebugNs.registerWarnHandler;
        };
        /**
         * The DefaultResolver defines the default lookup rules to resolve
         * container lookups before consulting the container for registered
         * items:
         */
        class DefaultResolver extends Resolver {
            /**
             * This method is called via the container's resolver method.
             * It parses the provided `fullName` and then looks up and
             * returns the appropriate template or class.
             */
            resolve(fullName: string): {};
            /**
             * This will be set to the Application instance when it is
             * created.
             */
            namespace: Application;
        }

        class EngineInstance extends EmberEngineInstanceNs.default {}
        class Engine extends EmberEngineNs.default {}

        /**
         * A subclass of the JavaScript Error object for use in Ember.
         */
        const Error: ErrorConstructor;
        /**
         * `Ember.EventDispatcher` handles delegating browser events to their
         * corresponding `Ember.Views.` For example, when you click on a view,
         * `Ember.EventDispatcher` ensures that that view's `mouseDown` method gets
         * called.
         */
        class EventDispatcher extends Object {
            /**
             * The set of events names (and associated handler function names) to be setup
             * and dispatched by the `EventDispatcher`. Modifications to this list can be done
             * at setup time, generally via the `Ember.Application.customEvents` hash.
             */
            events: EventDispatcherEvents;
        }
        const Evented: typeof EmberObjectEventedNs.default;
        /**
         * The `Ember.Freezable` mixin implements some basic methods for marking an
         * object as frozen. Once an object is frozen it should be read only. No changes
         * may be made the internal state of the object.
         * @deprecated Use `Object.freeze` instead.
         */
        interface Freezable {
            freeze(): Freezable;
            isFrozen: boolean;
        }
        const Freezable: EmberMixin<Freezable>;
        /**
         * The purpose of the Ember Instrumentation module is
         * to provide efficient, general-purpose instrumentation
         * for Ember.
         */
        const Instrumentation: {
            instrument(name: string, payload: any, callback: (...args: any[]) => any, binding: any): void;
            reset(): void;
            subscribe(pattern: string, object: any): void;
            unsubscribe(subscriber: any): void;
        };
        /**
         * Inside Ember-Metal, simply uses the methods from `imports.console`.
         * Override this to provide more robust logging functionality.
         */
        const Logger: {
            /**
             * If the value passed into `Ember.Logger.assert` is not truthy it will throw an error with a stack trace.
             */
            assert(test: boolean, message?: string): void;
            /**
             * Logs the arguments to the console in blue text.
             */
            debug(...args: any[]): void;
            /**
             * Prints the arguments to the console with an error icon, red text and a stack trace.
             */
            error(...args: any[]): void;
            /**
             * Logs the arguments to the console.
             */
            info(...args: any[]): void;
            /**
             * Logs the arguments to the console.
             */
            log(...args: any[]): void;
            /**
             * Prints the arguments to the console with a warning icon.
             */
            warn(...args: any[]): void;
        };
        /**
         * A Map stores values indexed by keys. Unlike JavaScript's
         * default Objects, the keys of a Map can be any JavaScript
         * object.
         * @deprecated
         */
        class Map {
            copy(): Map;
            static create(): Map;
            forEach(callback: (...args: any[]) => any, self: any): void;
            get(key: any): any;
            has(key: any): boolean;
            set(key: any, value: any): void;
            length: number;
        }
        /**
         * @deprecated
         */
        class MapWithDefault extends Map {
            copy(): MapWithDefault;
            static create(): MapWithDefault;
        }
        class Mixin<T, Base = EmberObjectNs.default> extends EmberMixin<T, Base> {}

        /**
         * A Namespace is an object usually used to contain other objects or methods
         * such as an application or framework. Create a namespace anytime you want
         * to define one of these new containers.
         */
        class Namespace extends Object {}

        /**
         * This class is used internally by Ember and Ember Data.
         * Please do not use it at this time. We plan to clean it up
         * and add many tests soon.
         * @deprecated
         */
        class OrderedSet {
            add(obj: any): void;
            clear(): void;
            copy(): OrderedSet;
            static create(): OrderedSet;
            forEach(fn: (...args: any[]) => any, self: any): void;
            has(obj: any): boolean;
            isEmpty(): boolean;
            toArray(): any[];
        }

        /**
         * A registry used to store factory and option information keyed
         * by type.
         */
        class Registry {
            register(
                fullName: string,
                factory: EmberClassConstructor<any>,
                options?: { singleton?: boolean }
            ): void;
        }
        class Resolver extends Ember.Object {}

        class Service extends Object {}
        interface Transition {
            /**
             * Aborts the Transition. Note you can also implicitly abort a transition
             * by initiating another transition while a previous one is underway.
             */
            abort(): Transition;
            /**
             * Retries a previously-aborted transition (making sure to abort the
             * transition if it's still active). Returns a new transition that
             * represents the new attempt to transition.
             */
            retry(): Transition;
        }
        interface ViewTargetActionSupport {
            target: any;
            actionContext: any;
        }
        const ViewTargetActionSupport: Mixin<ViewTargetActionSupport>;
        const ViewUtils: {
            isSimpleClick(event: Event): boolean;
        };

        // FYI - RSVP source comes from https://github.com/tildeio/rsvp.js/blob/master/lib/rsvp/promise.js
        const RSVP: typeof Rsvp;
        namespace RSVP {
            type Promise<T> = Rsvp.Promise<T>;
        }

        /**
         * This is a container for an assortment of testing related functionality
         */
        namespace Test {
            /**
             * `registerHelper` is used to register a test helper that will be injected
             * when `App.injectTestHelpers` is called.
             */
            function registerHelper(
                name: string,
                helperMethod: (app: Application, ...args: any[]) => any,
                options?: object
            ): any;
            /**
             * `registerAsyncHelper` is used to register an async test helper that will be injected
             * when `App.injectTestHelpers` is called.
             */
            function registerAsyncHelper(
                name: string,
                helperMethod: (app: Application, ...args: any[]) => any
            ): void;
            /**
             * Remove a previously added helper method.
             */
            function unregisterHelper(name: string): void;
            /**
             * Used to register callbacks to be fired whenever `App.injectTestHelpers`
             * is called.
             */
            function onInjectHelpers(callback: (app: Application) => void): void;
            /**
             * This returns a thenable tailored for testing.  It catches failed
             * `onSuccess` callbacks and invokes the `Ember.Test.adapter.exception`
             * callback in the last chained then.
             */
            function promise<T>(
                resolver: (
                    resolve: (value?: T | PromiseLike<T>) => void,
                    reject: (reason?: any) => void
                ) => void,
                label?: string
            ): Ember.Test.Promise<T>;
            /**
             * Replacement for `Ember.RSVP.resolve`
             * The only difference is this uses
             * an instance of `Ember.Test.Promise`
             */
            function resolve<T>(value?: T | PromiseLike<T>, label?: string): Ember.Test.Promise<T>;
            /**
             * This allows ember-testing to play nicely with other asynchronous
             * events, such as an application that is waiting for a CSS3
             * transition or an IndexDB transaction. The waiter runs periodically
             * after each async helper (i.e. `click`, `andThen`, `visit`, etc) has executed,
             * until the returning result is truthy. After the waiters finish, the next async helper
             * is executed and the process repeats.
             */
            function registerWaiter(callback: () => boolean): any;
            function registerWaiter<Context>(
                context: Context,
                callback: (this: Context) => boolean
            ): any;
            /**
             * `unregisterWaiter` is used to unregister a callback that was
             * registered with `registerWaiter`.
             */
            function unregisterWaiter(callback: () => boolean): any;
            function unregisterWaiter<Context>(
                context: Context,
                callback: (this: Context) => boolean
            ): any;
            /**
             * Iterates through each registered test waiter, and invokes
             * its callback. If any waiter returns false, this method will return
             * true indicating that the waiters have not settled yet.
             */
            function checkWaiters(): boolean;
            /**
             * Used to allow ember-testing to communicate with a specific testing
             * framework.
             */
            const adapter: Adapter;
            /**
             * The primary purpose of this class is to create hooks that can be implemented
             * by an adapter for various test frameworks.
             */
            class Adapter {
                /**
                 * This callback will be called whenever an async operation is about to start.
                 */
                asyncStart(): any;
                /**
                 * This callback will be called whenever an async operation has completed.
                 */
                asyncEnd(): any;
                /**
                 * Override this method with your testing framework's false assertion.
                 * This function is called whenever an exception occurs causing the testing
                 * promise to fail.
                 */
                exception(error: string): any;
            }
            /**
             * This class implements the methods defined by Ember.Test.Adapter for the
             * QUnit testing framework.
             */
            class QUnitAdapter extends Adapter {}
            class Promise<T> extends Rsvp.Promise<T> {
                constructor(
                    executor: (
                        resolve: (value?: T | PromiseLike<T>) => void,
                        reject: (reason?: any) => void
                    ) => void
                );
            }
        }
        /**
         * Namespace for injection helper methods.
         */
        namespace inject {
            /**
             * Creates a property that lazily looks up another controller in the container.
             * Can only be used when defining another controller.
             */
            function controller(): ComputedProperty<Ember.Controller>;
            function controller<K extends keyof ControllerRegistry>(
                name: K
            ): ComputedProperty<ControllerRegistry[K]>;
            /**
             * Creates a property that lazily looks up a service in the container. There
             * are no restrictions as to what objects a service can be injected into.
             */
            function service(): ComputedProperty<Ember.Service>;
            function service<K extends keyof ServiceRegistry>(
                name: K
            ): ComputedProperty<ServiceRegistry[K]>;
        }
        namespace ENV {
            const EXTEND_PROTOTYPES: typeof Ember.EXTEND_PROTOTYPES;
            const LOG_BINDINGS: boolean;
            const LOG_STACKTRACE_ON_DEPRECATION: boolean;
            const LOG_VERSION: boolean;
            const MODEL_FACTORY_INJECTIONS: boolean;
            const RAISE_ON_DEPRECATION: boolean;
        }
        namespace EXTEND_PROTOTYPES {
            const Array: boolean;
            const Function: boolean;
            const String: boolean;
        }
        namespace Handlebars {
            function compile(string: string): (...args: any[]) => any;
            function compile(environment: any, options?: any, context?: any, asObject?: any): any;
            function precompile(string: string, options: any): void;
            class Compiler {}
            class JavaScriptCompiler {}
            function registerPartial(name: string, str: any): void;
            function K(): any;
            function createFrame(objec: any): any;
            function Exception(message: string): void;
            const SafeString: typeof HandlebarsNamespace.SafeString;
            function parse(string: string): any;
            function print(ast: any): void;
            const logger: typeof Ember.Logger;
            function log(level: string, str: string): void;
        }
        namespace String {
            const camelize: typeof EmberStringNs.camelize;
            const capitalize: typeof EmberStringNs.capitalize;
            const classify: typeof EmberStringNs.classify;
            const dasherize: typeof EmberStringNs.dasherize;
            const decamelize: typeof EmberStringNs.decamelize;
            function fmt(...args: string[]): string;
            const htmlSafe: typeof EmberStringNs.htmlSafe;
            const isHTMLSafe: typeof EmberStringNs.isHTMLSafe;
            const loc: typeof EmberStringNs.loc;
            const underscore: typeof EmberStringNs.underscore;
            const w: typeof EmberStringNs.w;
        }
        const computed: typeof EmberObjectNs.computed;
        const run: {
            /**
             * Runs the passed target and method inside of a RunLoop, ensuring any
             * deferred actions including bindings and views updates are flushed at the
             * end.
             */
            <Ret>(method: (...args: any[]) => Ret): Ret;
            <Target, Ret>(target: Target, method: RunMethod<Target, Ret>): Ret;
            /**
             * If no run-loop is present, it creates a new one. If a run loop is
             * present it will queue itself to run on the existing run-loops action
             * queue.
             */
            join<Ret>(method: (...args: any[]) => Ret, ...args: any[]): Ret | undefined;
            join<Target, Ret>(
                target: Target,
                method: RunMethod<Target, Ret>,
                ...args: any[]
            ): Ret | undefined;
            /**
             * Allows you to specify which context to call the specified function in while
             * adding the execution of that function to the Ember run loop. This ability
             * makes this method a great way to asynchronously integrate third-party libraries
             * into your Ember application.
             */
            bind<Target, Ret>(
                target: Target,
                method: RunMethod<Target, Ret>,
                ...args: any[]
            ): (...args: any[]) => Ret;
            /**
             * Begins a new RunLoop. Any deferred actions invoked after the begin will
             * be buffered until you invoke a matching call to `run.end()`. This is
             * a lower-level way to use a RunLoop instead of using `run()`.
             */
            begin(): void;
            /**
             * Ends a RunLoop. This must be called sometime after you call
             * `run.begin()` to flush any deferred actions. This is a lower-level way
             * to use a RunLoop instead of using `run()`.
             */
            end(): void;
            /**
             * Adds the passed target/method and any optional arguments to the named
             * queue to be executed at the end of the RunLoop. If you have not already
             * started a RunLoop when calling this method one will be started for you
             * automatically.
             */
            schedule<Target>(
                queue: EmberRunQueues,
                target: Target,
                method: RunMethod<Target>,
                ...args: any[]
            ): EmberRunTimer;
            schedule(
                queue: EmberRunQueues,
                method: (args: any[]) => any,
                ...args: any[]
            ): EmberRunTimer;
            /**
             * Invokes the passed target/method and optional arguments after a specified
             * period of time. The last parameter of this method must always be a number
             * of milliseconds.
             */
            later(method: (...args: any[]) => any, wait: number): EmberRunTimer;
            later<Target>(target: Target, method: RunMethod<Target>, wait: number): EmberRunTimer;
            later<Target>(
                target: Target,
                method: RunMethod<Target>,
                arg0: any,
                wait: number
            ): EmberRunTimer;
            later<Target>(
                target: Target,
                method: RunMethod<Target>,
                arg0: any,
                arg1: any,
                wait: number
            ): EmberRunTimer;
            later<Target>(
                target: Target,
                method: RunMethod<Target>,
                arg0: any,
                arg1: any,
                arg2: any,
                wait: number
            ): EmberRunTimer;
            later<Target>(
                target: Target,
                method: RunMethod<Target>,
                arg0: any,
                arg1: any,
                arg2: any,
                arg3: any,
                wait: number
            ): EmberRunTimer;
            later<Target>(
                target: Target,
                method: RunMethod<Target>,
                arg0: any,
                arg1: any,
                arg2: any,
                arg3: any,
                arg4: any,
                wait: number
            ): EmberRunTimer;
            later<Target>(
                target: Target,
                method: RunMethod<Target>,
                arg0: any,
                arg1: any,
                arg2: any,
                arg3: any,
                arg4: any,
                arg5: any,
                wait: number
            ): EmberRunTimer;
            /**
             * Schedule a function to run one time during the current RunLoop. This is equivalent
             * to calling `scheduleOnce` with the "actions" queue.
             */
            once<Target>(target: Target, method: RunMethod<Target>, ...args: any[]): EmberRunTimer;
            /**
             * Schedules a function to run one time in a given queue of the current RunLoop.
             * Calling this method with the same queue/target/method combination will have
             * no effect (past the initial call).
             */
            scheduleOnce<Target>(
                queue: EmberRunQueues,
                target: Target,
                method: RunMethod<Target>,
                ...args: any[]
            ): EmberRunTimer;
            /**
             * Schedules an item to run from within a separate run loop, after
             * control has been returned to the system. This is equivalent to calling
             * `run.later` with a wait time of 1ms.
             */
            next<Target>(target: Target, method: RunMethod<Target>, ...args: any[]): EmberRunTimer;
            /**
             * Cancels a scheduled item. Must be a value returned by `run.later()`,
             * `run.once()`, `run.scheduleOnce()`, `run.next()`, `run.debounce()`, or
             * `run.throttle()`.
             */
            cancel(timer: EmberRunTimer): boolean;
            /**
             * Delay calling the target method until the debounce period has elapsed
             * with no additional debounce calls. If `debounce` is called again before
             * the specified time has elapsed, the timer is reset and the entire period
             * must pass again before the target method is called.
             */
            debounce(
                method: (...args: any[]) => any,
                wait: number,
                immediate?: boolean
            ): EmberRunTimer;
            debounce<Target>(
                target: Target,
                method: RunMethod<Target>,
                wait: number,
                immediate?: boolean
            ): EmberRunTimer;
            debounce<Target>(
                target: Target,
                method: RunMethod<Target>,
                arg0: any,
                wait: number,
                immediate?: boolean
            ): EmberRunTimer;
            debounce<Target>(
                target: Target,
                method: RunMethod<Target>,
                arg0: any,
                arg1: any,
                wait: number,
                immediate?: boolean
            ): EmberRunTimer;
            debounce<Target>(
                target: Target,
                method: RunMethod<Target>,
                arg0: any,
                arg1: any,
                arg2: any,
                wait: number,
                immediate?: boolean
            ): EmberRunTimer;
            debounce<Target>(
                target: Target,
                method: RunMethod<Target>,
                arg0: any,
                arg1: any,
                arg2: any,
                arg3: any,
                wait: number,
                immediate?: boolean
            ): EmberRunTimer;
            debounce<Target>(
                target: Target,
                method: RunMethod<Target>,
                arg0: any,
                arg1: any,
                arg2: any,
                arg3: any,
                arg4: any,
                wait: number,
                immediate?: boolean
            ): EmberRunTimer;
            debounce<Target>(
                target: Target,
                method: RunMethod<Target>,
                arg0: any,
                arg1: any,
                arg2: any,
                arg3: any,
                arg4: any,
                arg5: any,
                wait: number,
                immediate?: boolean
            ): EmberRunTimer;
            /**
             * Ensure that the target method is never called more frequently than
             * the specified spacing period. The target method is called immediately.
             */
            throttle(
                method: (...args: any[]) => any,
                spacing: number,
                immediate?: boolean
            ): EmberRunTimer;
            throttle<Target>(
                target: Target,
                method: RunMethod<Target>,
                spacing: number,
                immediate?: boolean
            ): EmberRunTimer;
            throttle<Target>(
                target: Target,
                method: RunMethod<Target>,
                arg0: any,
                spacing: number,
                immediate?: boolean
            ): EmberRunTimer;
            throttle<Target>(
                target: Target,
                method: RunMethod<Target>,
                arg0: any,
                arg1: any,
                spacing: number,
                immediate?: boolean
            ): EmberRunTimer;
            throttle<Target>(
                target: Target,
                method: RunMethod<Target>,
                arg0: any,
                arg1: any,
                arg2: any,
                spacing: number,
                immediate?: boolean
            ): EmberRunTimer;
            throttle<Target>(
                target: Target,
                method: RunMethod<Target>,
                arg0: any,
                arg1: any,
                arg2: any,
                arg3: any,
                spacing: number,
                immediate?: boolean
            ): EmberRunTimer;
            throttle<Target>(
                target: Target,
                method: RunMethod<Target>,
                arg0: any,
                arg1: any,
                arg2: any,
                arg3: any,
                arg4: any,
                spacing: number,
                immediate?: boolean
            ): EmberRunTimer;
            throttle<Target>(
                target: Target,
                method: RunMethod<Target>,
                arg0: any,
                arg1: any,
                arg2: any,
                arg3: any,
                arg4: any,
                arg5: any,
                spacing: number,
                immediate?: boolean
            ): EmberRunTimer;

            queues: EmberRunQueues[];
        };
        const platform: {
            defineProperty: boolean;
            hasPropertyAccessors: boolean;
        };

        /**
         * `getEngineParent` retrieves an engine instance's parent instance.
         */
        function getEngineParent(engine: EngineInstance): EngineInstance;
        /**
         * Display a deprecation warning with the provided message and a stack trace
         * (Chrome and Firefox only).
         */
        function deprecate(
            message: string,
            test: boolean,
            options: { id: string; until: string }
        ): any;
        /**
         * @deprecated Missing deprecation options: https://emberjs.com/deprecations/v2.x/#toc_ember-debug-function-options
         */
        function deprecate(
            message: string,
            test: boolean,
            options?: { id?: string; until?: string }
        ): any;
        const assert: typeof EmberDebugNs.assert;
        const debug: typeof EmberDebugNs.debug;
        const defineProperty: typeof EmberObjectNs.defineProperty;
        /**
         * Alias an old, deprecated method with its new counterpart.
         */
        function deprecateFunc<Func extends ((...args: any[]) => any)>(
            message: string,
            options: { id: string; until: string },
            func: Func
        ): Func;
        /**
         * @deprecated Missing deprecation options: https://emberjs.com/deprecations/v2.x/#toc_ember-debug-function-options
         */
        function deprecateFunc<Func extends ((...args: any[]) => any)>(
            message: string,
            func: Func
        ): Func;

        export const runInDebug: typeof EmberDebugNs.runInDebug;
        export const warn: typeof EmberDebugNs.warn;
        /**
         * Global helper method to create a new binding. Just pass the root object
         * along with a `to` and `from` path to create and connect the binding.
         * @deprecated https://emberjs.com/deprecations/v2.x#toc_ember-binding
         */
        function bind(obj: {}, to: string, from: string): Binding;
        const cacheFor: typeof EmberObjectInternalsNs.cacheFor;
        export const addListener: typeof EmberObjectEventsNs.addListener;
        export const removeListener: typeof EmberObjectEventsNs.removeListener;
        export const sendEvent: typeof EmberObjectEventsNs.sendEvent;
        export const on: typeof EmberObjectEventedNs.on;

        const isBlank: typeof EmberUtilsNs.isBlank;
        const isEmpty: typeof EmberUtilsNs.isEmpty;
        const isNone: typeof EmberUtilsNs.isNone;
        const isPresent: typeof EmberUtilsNs.isPresent;
        const merge: typeof EmberPolyfillsNs.merge;

        const aliasMethod: typeof EmberObjectNs.aliasMethod;
        const observer: typeof EmberObjectNs.observer;
        const addObserver: typeof EmberObjectObserversNs.addObserver;
        const removeObserver: typeof EmberObjectObserversNs.removeObserver;
        const get: typeof EmberObjectNs.get;
        const getWithDefault: typeof EmberObjectNs.getWithDefault;
        const getProperties: typeof EmberObjectNs.getProperties;
        const setProperties: typeof EmberObjectNs.setProperties;
        const set: typeof EmberObjectNs.set;
        const trySet: typeof EmberObjectNs.trySet;

        /**
         * Detects when a specific package of Ember (e.g. 'Ember.Application')
         * has fully loaded and is available for extension.
         */
        function onLoad(name: string, callback: (...args: any[]) => any): any;
        /**
         * Called when an Ember.js package (e.g Ember.Application) has finished
         * loading. Triggers any callbacks registered for this event.
         */
        function runLoadHooks(name: string, object?: {}): any;
        const compare: typeof EmberUtilsNs.compare;
        /**
         * Creates a shallow copy of the passed object. A deep copy of the object is
         * returned if the optional `deep` argument is `true`.
         */
        const copy: typeof EmberObjectInternalsNs.copy;
        const isEqual: typeof EmberUtilsNs.isEqual;
        const typeOf: typeof EmberUtilsNs.typeOf;
        // TODO: replace with an es6 reexport when declare module 'ember' is removed
        /**
         * Copy properties from a source object to a target object.
         * @deprecated Use Object.assign
         */
        const assign: typeof EmberPolyfillsNs.assign;
        /**
         * Polyfill for Object.create
         * @deprecated Use Object.create
         */
        function create(o: object | null): any;
        /**
         * Polyfill for Object.keys
         * @deprecated Use Object.keys
         */
        function keys(o: any): string[];
        const guidFor: typeof EmberObjectInternalsNs.guidFor;
        const inspect: typeof EmberDebugNs.inspect;
        const tryInvoke: typeof EmberUtilsNs.tryInvoke;
        /**
         * Framework objects in an Ember application (components, services, routes, etc.)
         * are created via a factory and dependency injection system. Each of these
         * objects is the responsibility of an "owner", which handled its
         * instantiation and manages its lifetime.
         */
        function getOwner(object: any): any;
        /**
         * `setOwner` forces a new owner on a given object instance. This is primarily
         * useful in some testing cases.
         */
        function setOwner(object: any, owner: any): void;
        /**
         * A function may be assigned to `Ember.onerror` to be called when Ember
         * internals encounter an error. This is useful for specialized error handling
         * and reporting code.
         */
        function onerror(error: Error): void;
        /**
         * An empty function useful for some operations. Always returns `this`.
         * @deprecated https://emberjs.com/deprecations/v2.x/#toc_code-ember-k-code
         */
        function K<This>(this: This): This;
        /**
         * The semantic version
         */
        const VERSION: string;
        /**
         * Alias for jQuery
         */
        const $: JQueryStatic;
        /**
         * This property indicates whether or not this application is currently in
         * testing mode. This is set when `setupForTesting` is called on the current
         * application.
         */
        const testing: boolean;

        const instrument: typeof Instrumentation.instrument;

        const reset: typeof Instrumentation.reset;

        const subscribe: typeof Instrumentation.subscribe;

        const unsubscribe: typeof Instrumentation.unsubscribe;
        const expandProperties: typeof EmberObjectComputedNs.expandProperties;
    }

    module '@ember/service' {
        interface Registry {
            'router': EmberRoutingRouterService;
        }
    }

    export default Ember;
}

declare module '@ember/application' {
    import Ember from 'ember';
    export default class Application extends Ember.Application { }
    export const getOwner: typeof Ember.getOwner;
    export const onLoad: typeof Ember.onLoad;
    export const runLoadHooks: typeof Ember.runLoadHooks;
    export const setOwner: typeof Ember.setOwner;
}

declare module '@ember/application/deprecations' {
    import Ember from 'ember';
    export const deprecate: typeof Ember.deprecate;
    export const deprecateFunc: typeof Ember.deprecateFunc;
}

declare module '@ember/application/globals-resolver' {
    import Ember from 'ember';
    export default class GlobalsResolver extends Ember.DefaultResolver { }
}

declare module '@ember/application/instance' {
    import Ember from 'ember';
    export default class ApplicationInstance extends Ember.ApplicationInstance { }
}

declare module '@ember/application/resolver' {
    import Ember from 'ember';
    export default class Resolver extends Ember.Resolver { }
}

declare module '@ember/error' {
    import Ember from 'ember';
    const Error: typeof Ember.Error;
    export default Error;
}

declare module '@ember/runloop' {
    import Ember from 'ember';
    export const begin: typeof Ember.run.begin;
    export const bind: typeof Ember.run.bind;
    export const cancel: typeof Ember.run.cancel;
    export const debounce: typeof Ember.run.debounce;
    export const end: typeof Ember.run.end;
    export const join: typeof Ember.run.join;
    export const later: typeof Ember.run.later;
    export const next: typeof Ember.run.next;
    export const once: typeof Ember.run.once;
    export const run: typeof Ember.run;
    export const schedule: typeof Ember.run.schedule;
    export const scheduleOnce: typeof Ember.run.scheduleOnce;
    export const throttle: typeof Ember.run.throttle;
}

declare module '@ember/service' {
    import Ember from 'ember';
    export default class Service extends Ember.Service { }
    export const inject: typeof Ember.inject.service;

    // A type registry for Ember `Service`s. Meant to be declaration-merged so
    // string lookups resolve to the correct type.
    // tslint:disable-next-line:no-empty-interface
    interface Registry {}
}

declare module '@ember/test' {
    import Ember from 'ember';
    export const registerAsyncHelper: typeof Ember.Test.registerAsyncHelper;
    export const registerHelper: typeof Ember.Test.registerHelper;
    export const registerWaiter: typeof Ember.Test.registerWaiter;
    export const unregisterHelper: typeof Ember.Test.unregisterHelper;
    export const unregisterWaiter: typeof Ember.Test.unregisterWaiter;
}

declare module '@ember/test/adapter' {
    import Ember from 'ember';
    export default class TestAdapter extends Ember.Test.Adapter { }
}

declare module 'htmlbars-inline-precompile' {
    interface TemplateFactory {
        __htmlbars_inline_precompile_template_factory: any;
    }
    export default function hbs(tagged: TemplateStringsArray): TemplateFactory;
}
