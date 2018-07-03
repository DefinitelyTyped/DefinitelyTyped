// Type definitions for Ember.js 2.8
// Project: http://emberjs.com/
// Definitions by: Jed Mao <https://github.com/jedmao>
//                 bttf <https://github.com/bttf>
//                 Derek Wickern <https://github.com/dwickern>
//                 Chris Krycho <https://github.com/chriskrycho>
//                 Theron Cross <https://github.com/theroncross>
//                 Martin Feckie <https://github.com/mfeckie>
//                 Alex LaFroscia <https://github.com/alexlafroscia>
//                 Dan Freeman <https://github.com/dfreeman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/// <reference types="jquery" />
/// <reference types="handlebars" />

declare module 'ember' {
    // Capitalization is intentional: this makes it much easier to re-export RSVP on
    // the Ember namespace.
    import Rsvp from 'rsvp';

    import * as ember_application from '@ember/application';
    import * as ember_application_deprecations from '@ember/application/deprecations';
    import * as ember_application_globalsResolver from '@ember/application/globals-resolver';
    import * as ember_application_instance from '@ember/application/instance';
    import * as ember_application_resolver from '@ember/application/resolver';
    import * as ember_array from '@ember/array';
    import * as ember_array_mutable from '@ember/array/mutable';
    import * as ember_array_proxy from '@ember/array/proxy';
    import * as ember_component from '@ember/component';
    import * as ember_component_checkbox from '@ember/component/checkbox';
    import * as ember_component_helper from '@ember/component/helper';
    import * as ember_component_textArea from '@ember/component/text-area';
    import * as ember_component_textField from '@ember/component/text-field';
    import * as ember_controller from '@ember/controller';
    import * as ember_debug from '@ember/debug';
    import * as ember_debug_containerDebugAdapter from '@ember/debug/container-debug-adapter';
    import * as ember_debug_dataAdapter from '@ember/debug/data-adapter';
    import * as ember_engine from '@ember/engine';
    import * as ember_engine_instance from '@ember/engine/instance';
    import * as ember_enumerable from '@ember/enumerable';
    import * as ember_error from '@ember/error';
    import * as ember_instrumentation from '@ember/instrumentation';
    import * as ember_map from '@ember/map';
    import * as ember_map_withDefault from '@ember/map/with-default';
    import * as ember_object from '@ember/object';
    import * as ember_object_computed from '@ember/object/computed';
    import * as ember_object_core from '@ember/object/core';
    import * as ember_object_evented from '@ember/object/evented';
    import * as ember_object_events from '@ember/object/events';
    import * as ember_object_internals from '@ember/object/internals';
    import * as ember_object_mixin from '@ember/object/mixin';
    import * as ember_object_observable from '@ember/object/observable';
    import * as ember_object_observers from '@ember/object/observers';
    import * as ember_object_promiseProxyMixin from '@ember/object/promise-proxy-mixin';
    import * as ember_object_proxy from '@ember/object/proxy';
    import * as ember_polyfills from '@ember/polyfills';
    import * as ember_routing_autoLocation from '@ember/routing/auto-location';
    import * as ember_routing_hashLocation from '@ember/routing/hash-location';
    import * as ember_routing_historyLocation from '@ember/routing/history-location';
    import * as ember_routing_linkComponent from '@ember/routing/link-component';
    import * as ember_routing_location from '@ember/routing/location';
    import * as ember_routing_noneLocation from '@ember/routing/none-location';
    import * as ember_routing_route from '@ember/routing/route';
    import * as ember_routing_router from '@ember/routing/router';
    import * as ember_runloop from '@ember/runloop';
    import * as ember_service from '@ember/service';
    import * as ember_string from '@ember/string';
    import * as ember_test from '@ember/test';
    import * as ember_test_adapter from '@ember/test/adapter';
    import * as ember_utils from '@ember/utils';

    export namespace Ember {
        // @ember/application
        type Application = ember_application.default;
        const Application: typeof ember_application.default;
        const getOwner: typeof ember_application.getOwner;
        const setOwner: typeof ember_application.setOwner;
        const onLoad: typeof ember_application.onLoad;
        const runLoadHooks: typeof ember_application.runLoadHooks;

        // @ember/application/deprecations
        const deprecate: typeof ember_application_deprecations.deprecate;
        const deprecateFunc: typeof ember_application_deprecations.deprecateFunc;

        // @ember/application/globals-resolver
        type DefaultResolver = ember_application_globalsResolver.default;
        const DefaultResolver: typeof ember_application_globalsResolver.default;

        // @ember/application/instance
        type ApplicationInstance = ember_application_instance.default;
        const ApplicationInstance: typeof ember_application_instance.default;

        // @ember/application/resolver
        type Resolver = ember_application_resolver.default;
        const Resolver: typeof ember_application_resolver.default;

        // @ember/array
        type Array<T> = ember_array.default<T>;
        const Array: typeof ember_array.default;
        const A: typeof ember_array.A;
        const isArray: typeof ember_array.isArray;
        const makeArray: typeof ember_array.makeArray;

        // @ember/array/mutable
        type MutableArray<T> = ember_array_mutable.default<T>;
        const MutableArray: typeof ember_array_mutable.default;

        // @ember/array/proxy
        type ArrayProxy<T> = ember_array_proxy.default<T>;
        const ArrayProxy: typeof ember_array_proxy.default;

        // @ember/component
        type Component = ember_component.default;
        const Component: typeof ember_component.default;

        // @ember/component/checkbox
        type Checkbox = ember_component_checkbox.default;
        const Checkbox: typeof ember_component_checkbox.default;

        // @ember/component/helper
        type Helper = ember_component_helper.default;
        const Helper: typeof ember_component_helper.default;
        const helper: typeof ember_component_helper.helper;

        // @ember/component/text-area
        type TextArea = ember_component_textArea.default;
        const TextArea: typeof ember_component_textArea.default;

        // @ember/component/text-field
        type TextField = ember_component_textField.default;
        const TextField: typeof ember_component_textField.default;

        // @ember/controller
        type Controller = ember_controller.default;
        const Controller: typeof ember_controller.default;
        namespace inject {
            const controller: typeof ember_controller.inject;
        }

        // @ember/debug
        const assert: typeof ember_debug.assert;
        const debug: typeof ember_debug.debug;
        const inspect: typeof ember_debug.inspect;
        const runInDebug: typeof ember_debug.runInDebug;
        const warn: typeof ember_debug.warn;
        namespace Debug {
            const registerDeprecationHandler: typeof ember_debug.registerDeprecationHandler;
            const registerWarnHandler: typeof ember_debug.registerWarnHandler;
        }

        // @ember/debug/container-debug-adapter
        type ContainerDebugAdapter = ember_debug_containerDebugAdapter.default;
        const ContainerDebugAdapter: typeof ember_debug_containerDebugAdapter.default;

        // @ember/debug/data-adapter
        type DataAdapter = ember_debug_dataAdapter.default;
        const DataAdapter: typeof ember_debug_dataAdapter.default;

        // @ember/engine
        type Engine = ember_engine.default;
        const Engine: typeof ember_engine.default;
        const getEngineParent: typeof ember_engine.getEngineParent;

        // @ember/engine/instance
        type EngineInstance = ember_engine_instance.default;
        const EngineInstance: typeof ember_engine_instance.default;

        // @ember/enumerable
        type Enumerable<T> = ember_enumerable.default<T>;
        const Enumerable: typeof ember_enumerable.default;

        // @ember/error
        const Error: typeof ember_error.default;

        // @ember/instrumentation
        const instrument: typeof ember_instrumentation.instrument;
        const reset: typeof ember_instrumentation.reset;
        const subscribe: typeof ember_instrumentation.subscribe;
        const unsubscribe: typeof ember_instrumentation.unsubscribe;
        namespace Instrumentation {
            const instrument: typeof ember_instrumentation.instrument;
            const reset: typeof ember_instrumentation.reset;
            const subscribe: typeof ember_instrumentation.subscribe;
            const unsubscribe: typeof ember_instrumentation.unsubscribe;
        }

        // @ember/map
        type Map = ember_map.default;
        const Map: typeof ember_map.default;

        // @ember/map/with-default
        type MapWithDefault = ember_map_withDefault.default;
        const MapWithDefault: typeof ember_map_withDefault.default;

        // @ember/object
        type Object = ember_object.default;
        const Object: typeof ember_object.default;
        const aliasMethod: typeof ember_object.aliasMethod;
        const defineProperty: typeof ember_object.defineProperty;
        const get: typeof ember_object.get;
        const getProperties: typeof ember_object.getProperties;
        const getWithDefault: typeof ember_object.getWithDefault;
        const observer: typeof ember_object.observer;
        const set: typeof ember_object.set;
        const setProperties: typeof ember_object.setProperties;
        const trySet: typeof ember_object.trySet;

        // @ember/object/computed
        type ComputedProperty<Get, Set = Get> = ember_object_computed.default<Get, Set>;
        const ComputedProperty: typeof ember_object_computed.default;
        const computed: typeof ember_object.computed & {
            empty: typeof ember_object_computed.empty;
            notEmpty: typeof ember_object_computed.notEmpty;
            none: typeof ember_object_computed.none;
            not: typeof ember_object_computed.not;
            bool: typeof ember_object_computed.bool;
            match: typeof ember_object_computed.match;
            equal: typeof ember_object_computed.equal;
            gt: typeof ember_object_computed.gt;
            gte: typeof ember_object_computed.gte;
            lt: typeof ember_object_computed.lt;
            lte: typeof ember_object_computed.lte;
            and: typeof ember_object_computed.and;
            or: typeof ember_object_computed.or;
            alias: typeof ember_object_computed.alias;
            oneWay: typeof ember_object_computed.oneWay;
            reads: typeof ember_object_computed.reads;
            readOnly: typeof ember_object_computed.readOnly;
            deprecatingAlias: typeof ember_object_computed.deprecatingAlias;
            sum: typeof ember_object_computed.sum;
            max: typeof ember_object_computed.max;
            min: typeof ember_object_computed.min;
            map: typeof ember_object_computed.map;
            mapBy: typeof ember_object_computed.mapBy;
            filter: typeof ember_object_computed.filter;
            filterBy: typeof ember_object_computed.filterBy;
            uniq: typeof ember_object_computed.uniq;
            uniqBy: typeof ember_object_computed.uniqBy;
            union: typeof ember_object_computed.union;
            intersect: typeof ember_object_computed.intersect;
            setDiff: typeof ember_object_computed.setDiff;
            collect: typeof ember_object_computed.collect;
            sort: typeof ember_object_computed.sort;
        };

        // @ember/object/core
        type CoreObject = ember_object_core.default;
        const CoreObject: typeof ember_object_core.default;

        // @ember/object/evented
        type Evented = ember_object_evented.default;
        const Evented: typeof ember_object_evented.default;
        const on: typeof ember_object_evented.on;

        // @ember/object/events
        const addListener: typeof ember_object_events.addListener;
        const removeListener: typeof ember_object_events.removeListener;
        const sendEvent: typeof ember_object_events.sendEvent;

        // @ember/object/internals
        const cacheFor: typeof ember_object_internals.cacheFor;
        const copy: typeof ember_object_internals.copy;
        const guidFor: typeof ember_object_internals.guidFor;

        // @ember/object/mixin
        type Mixin<T, Base = Ember.Object> = ember_object_mixin.default<T, Base>;
        const Mixin: typeof ember_object_mixin.default;

        // @ember/object/observable
        type Observable = ember_object_observable.default;
        const Observable: typeof ember_object_observable.default;

        // @ember/object/observers
        const addObserver: typeof ember_object_observers.addObserver;
        const removeObserver: typeof ember_object_observers.removeObserver;

        // @ember/object/promise-proxy-mixin
        type PromiseProxyMixin<T> = ember_object_promiseProxyMixin.default<T>;
        const PromiseProxyMixin: typeof ember_object_promiseProxyMixin.default;

        // @ember/object/proxy
        type ObjectProxy = ember_object_proxy.default;
        const ObjectProxy: typeof ember_object_proxy.default;

        // @ember/object/polyfills
        const assign: typeof ember_polyfills.assign;
        const create: typeof ember_polyfills.create;
        const keys: typeof ember_polyfills.keys;
        const merge: typeof ember_polyfills.merge;
        namespace platform {
            const hasPropertyAccessors: typeof ember_polyfills.hasPropertyAccessors;
        }

        // @ember/routing/auto-location
        type AutoLocation = ember_routing_autoLocation.default;
        const AutoLocation: typeof ember_routing_autoLocation.default;

        // @ember/routing/hash-location
        type HashLocation = ember_routing_hashLocation.default;
        const HashLocation: typeof ember_routing_hashLocation.default;

        // @ember/routing/history-location
        type HistoryLocation = ember_routing_historyLocation.default;
        const HistoryLocation: typeof ember_routing_historyLocation.default;

        // @ember/routing/link-component
        type LinkComponent = ember_routing_linkComponent.default;
        const LinkComponent: typeof ember_routing_linkComponent.default;

        // @ember/routing/location
        const Location: typeof ember_routing_location.default;

        // @ember/routing/none-location
        type NoneLocation = ember_routing_noneLocation.default;
        const NoneLocation: typeof ember_routing_noneLocation;

        // @ember/routing/route
        type Route = ember_routing_route.default;
        const Route: typeof ember_routing_route.default;

        // @ember/routing/router
        type Router = ember_routing_router.default;
        const Router: typeof ember_routing_router.default;

        // @ember/runloop
        const run: typeof ember_runloop.run & {
            join: typeof ember_runloop.join;
            bind: typeof ember_runloop.bind;
            begin: typeof ember_runloop.begin;
            cancel: typeof ember_runloop.cancel;
            debounce: typeof ember_runloop.debounce;
            end: typeof ember_runloop.end;
            later: typeof ember_runloop.later;
            next: typeof ember_runloop.next;
            once: typeof ember_runloop.once;
            schedule: typeof ember_runloop.schedule;
            scheduleOnce: typeof ember_runloop.scheduleOnce;
            throttle: typeof ember_runloop.throttle;
            queues: string[];
        };

        // @ember/service
        type Service = ember_service.default;
        const Service: typeof ember_service.default;
        namespace inject {
            const service: typeof ember_service.inject;
        }

        // @ember/string
        namespace String {
            const camelize: typeof ember_string.camelize;
            const capitalize: typeof ember_string.capitalize;
            const classify: typeof ember_string.classify;
            const dasherize: typeof ember_string.dasherize;
            const decamelize: typeof ember_string.decamelize;
            const fmt: typeof ember_string.fmt;
            const htmlSafe: typeof ember_string.htmlSafe;
            const isHTMLSafe: typeof ember_string.isHTMLSafe;
            const loc: typeof ember_string.loc;
            const underscore: typeof ember_string.underscore;
            const w: typeof ember_string.w;
        }

        // @ember/test
        namespace Test {
            const registerAsyncHelper: typeof ember_test.registerAsyncHelper;
            const registerHelper: typeof ember_test.registerHelper;
            const registerWaiter: typeof ember_test.registerWaiter;
            const unregisterHelper: typeof ember_test.unregisterHelper;
            const unregisterWaiter: typeof ember_test.unregisterWaiter;
        }

        // @ember/test/adapter
        namespace Test {
            type Adapter = ember_test_adapter.default;
            const Adapter: typeof ember_test_adapter.default;
        }

        // @ember/utils
        const compare: typeof ember_utils.compare;
        const isBlank: typeof ember_utils.isBlank;
        const isEmpty: typeof ember_utils.isEmpty;
        const isEqual: typeof ember_utils.isEqual;
        const isNone: typeof ember_utils.isNone;
        const isPresent: typeof ember_utils.isPresent;
        const tryInvoke: typeof ember_utils.tryInvoke;
        const typeOf: typeof ember_utils.typeOf;

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

        interface ArrayPrototypeExtensions<T> extends MutableArray<T>, Observable, Copyable {}

        // Get an alias to the global Array type to use in inner scope below.
        type GlobalArray<T> = T[];

        interface ActionsHash {
            [index: string]: (...params: any[]) => any;
        }

        interface TriggerActionOptions {
            action?: string;
            target?: Ember.Object;
            actionContext?: Ember.Object;
        }
        /**
        Ember.TargetActionSupport is a mixin that can be included in a class to add a triggerAction method
        with semantics similar to the Handlebars {{action}} helper. In normal Ember usage, the {{action}}
        helper is usually the best choice. This mixin is most often useful when you are doing more
        complex event handling in Components.
        **/
        interface TargetActionSupport {
            triggerAction(opts: TriggerActionOptions): boolean;
        }

        /**
         * Given a fullName return a factory manager.
         */
        interface _ContainerProxyMixin {
            /**
             * Returns an object that can be used to provide an owner to a
             * manually created instance.
             */
            ownerInjection(): {};
            /**
             * Given a fullName return a corresponding instance.
             */
            lookup(fullName: string, options?: {}): any;
        }
        const _ContainerProxyMixin: Mixin<_ContainerProxyMixin>;

        /**
         * RegistryProxyMixin is used to provide public access to specific
         * registry functionality.
         */
        interface _RegistryProxyMixin {
            /**
             * Given a fullName return the corresponding factory.
             */
            resolveRegistration(fullName: string): Function;
            /**
             * Registers a factory that can be used for dependency injection (with
             * `inject`) or for service lookup. Each factory is registered with
             * a full name including two parts: `type:name`.
             */
            register(fullName: string, factory: Function, options?: { singleton?: boolean, instantiate?: boolean }): any;
            /**
             * Unregister a factory.
             */
            unregister(fullName: string): any;
            /**
             * Check if a factory is registered.
             */
            hasRegistration(fullName: string): boolean;
            /**
             * Register an option for a particular factory.
             */
            registerOption(fullName: string, optionName: string, options: {}): any;
            /**
             * Return a specific registered option for a particular factory.
             */
            registeredOption(fullName: string, optionName: string): {};
            /**
             * Register options for a particular factory.
             */
            registerOptions(fullName: string, options: {}): any;
            /**
             * Return registered options for a particular factory.
             */
            registeredOptions(fullName: string): {};
            /**
             * Allow registering options for all factories of a type.
             */
            registerOptionsForType(type: string, options: {}): any;
            /**
             * Return the registered options for all factories of a type.
             */
            registeredOptionsForType(type: string): {};
            /**
             * Define a dependency injection onto a specific factory or all factories
             * of a type.
             */
            inject(factoryNameOrType: string, property: string, injectionName: string): any;
        }
        const _RegistryProxyMixin: Mixin<_RegistryProxyMixin>;

        interface Initializer<T> {
            name: string;
            before?: string[];
            after?: string[];
            initialize(application: T): void;
        }

        /**
         * Deconstructs computed properties into the types which would be returned by `.get()`.
         */
        type ComputedPropertyGetters<T> = { [K in keyof T]: ComputedProperty<T[K], any> | T[K] };
        type ComputedPropertySetters<T> = { [K in keyof T]: ComputedProperty<any, T[K]> | T[K] };
        type ComputedPropertyGetterFunction<T> = (this: any, key: string) => T;

        interface ComputedPropertyGet<T> {
            get(this: any, key: string): T;
        }

        interface ComputedPropertySet<T> {
            set(this: any, key: string, value: T): T;
        }

        type ComputedPropertyCallback<T> =
            | ComputedPropertyGetterFunction<T>
            | ComputedPropertyGet<T>
            | ComputedPropertySet<T>
            | (ComputedPropertyGet<T> & ComputedPropertySet<T>);

        type Fix<T> = { [K in keyof T]: T[K] };

        type ObserverMethod<Target, Sender> =
            | (keyof Target)
            | ((this: Target, sender: Sender, key: keyof Sender, value: any, rev: number) => void);

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
        type EmberClassConstructor<T> = (new (properties?: object) => T) & (new (...args: any[]) => T);

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
        Ember.ActionHandler is available on some familiar classes including Ember.Route,
        Ember.Component, and Ember.Controller. (Internally the mixin is used by Ember.CoreView,
        Ember.ControllerMixin, and Ember.Route and available to the above classes through inheritance.)
        **/
        interface ActionHandler {
            /**
             Triggers a named action on the ActionHandler. Any parameters supplied after the actionName
            string will be passed as arguments to the action target function.

            If the ActionHandler has its target property set, actions may bubble to the target.
            Bubbling happens when an actionName can not be found in the ActionHandler's actions
            hash or if the action target function returns true.
            **/
            send(actionName: string, ...args: any[]): void;
            /**
             The collection of functions, keyed by name, available on this ActionHandler as action targets.
            **/
            actions: ActionsHash;
        }
        const ActionHandler: Ember.Mixin<ActionHandler>;

        /**
         * Connects the properties of two objects so that whenever the value of one property changes,
         * the other property will be changed also.
         *
         * @deprecated https://emberjs.com/deprecations/v2.x#toc_ember-binding
         **/
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
        const Comparable: Mixin<Comparable>;
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
        /**
         * Implements some standard methods for copying an object. Add this mixin to
         * any object you create that can create a copy of itself. This mixin is
         * added automatically to the built-in array.
         */
        interface Copyable {
            /**
             * __Required.__ You must implement this method to apply this mixin.
             */
            copy(deep: boolean): Copyable;
            /**
             * If the object implements `Ember.Freezable`, then this will return a new
             * copy if the object is not frozen and the receiver if the object is frozen.
             */
            frozenCopy(): Copyable;
        }
        const Copyable: Ember.Mixin<Copyable>;
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
        const Freezable: Mixin<Freezable>;
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
         * This mixin defines the API for modifying generic enumerables. These methods
         * can be applied to an object regardless of whether it is ordered or
         * unordered.
         */
        interface MutableEnumerable<T> extends Enumerable<T> {
            /**
             * __Required.__ You must implement this method to apply this mixin.
             */
            addObject(object: T): T;
            /**
             * Adds each object in the passed enumerable to the receiver.
             */
            addObjects(objects: Enumerable<T>): this;
            /**
             * __Required.__ You must implement this method to apply this mixin.
             */
            removeObject(object: T): T;
            /**
             * Removes each object in the passed enumerable from the receiver.
             */
            removeObjects(objects: Enumerable<T>): this;
        }
        const MutableEnumerable: Mixin<MutableEnumerable<any>>;
        /**
         * A Namespace is an object usually used to contain other objects or methods
         * such as an application or framework. Create a namespace anytime you want
         * to define one of these new containers.
         */
        class Namespace extends Object {}
        /**
         * The NativeArray mixin contains the properties needed to make the native
         * Array support Ember.MutableArray and all of its dependent APIs. Unless you
         * have `EmberENV.EXTEND_PROTOTYPES` or `EmberENV.EXTEND_PROTOTYPES.Array` set to
         * false, this will be applied automatically. Otherwise you can apply the mixin
         * at anytime by calling `Ember.NativeArray.apply(Array.prototype)`.
         */
        interface NativeArray<T> extends GlobalArray<T>, MutableArray<T>, Observable, Copyable {
            /**
             * __Required.__ You must implement this method to apply this mixin.
             */
            length: number;
        }
        const NativeArray: Mixin<NativeArray<any>>;
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
            forEach(fn: Function, self: any): void;
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
                factory: Ember.EmberClassConstructor<any>,
                options?: { singleton?: boolean }
            ): void;
        }
        class RouterDSL {
            constructor(name: string, options: object);
            route(name: string, callback: (this: RouterDSL) => void): void;
            route(
                name: string,
                options?: { path?: string; resetNamespace?: boolean },
                callback?: (this: RouterDSL) => void
            ): void;
            mount(
                name: string,
                options?: {
                    as?: string,
                    path?: string,
                    resetNamespace?: boolean,
                    engineInfo?: any
                }
            ): void;
        }
        /**
         * `TextSupport` is a shared mixin used by both `Ember.TextField` and
         * `Ember.TextArea`. `TextSupport` adds a number of methods that allow you to
         * specify a controller action to invoke when a certain event is fired on your
         * text field or textarea. The specifed controller action would get the current
         * value of the field passed in as the only argument unless the value of
         * the field is empty. In that case, the instance of the field itself is passed
         * in as the only argument.
         */
        interface TextSupport extends TargetActionSupport {
            cancel(event: Function): void;
            focusIn(event: Function): void;
            focusOut(event: Function): void;
            insertNewLine(event: Function): void;
            keyPress(event: Function): void;
            action: string;
            bubbles: boolean;
            onEvent: string;
        }
        const TextSupport: Ember.Mixin<TextSupport, Ember.Component>;
        interface Transition {
            /**
             Aborts the Transition. Note you can also implicitly abort a transition
            by initiating another transition while a previous one is underway.
            */
            abort(): Transition;
            /**
             Retries a previously-aborted transition (making sure to abort the
            transition if it's still active). Returns a new transition that
            represents the new attempt to transition.
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
            function compile(string: string): Function;
            function compile(environment: any, options?: any, context?: any, asObject?: any): any;
            function precompile(string: string, options: any): void;
            class Compiler {}
            class JavaScriptCompiler {}
            function registerPartial(name: string, str: any): void;
            function K(): any;
            function createFrame(objec: any): any;
            function Exception(message: string): void;
            class SafeString {
                constructor(str: string);
                toString(): string;
            }
            function parse(string: string): any;
            function print(ast: any): void;
            const logger: typeof Ember.Logger;
            function log(level: string, str: string): void;
        }

        /**
         * Global helper method to create a new binding. Just pass the root object
         * along with a `to` and `from` path to create and connect the binding.
         * @deprecated https://emberjs.com/deprecations/v2.x#toc_ember-binding
         */
        function bind(obj: {}, to: string, from: string): Binding;
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

        /**
         * Expands `pattern`, invoking `callback` for each expansion.
         */
        function expandProperties(pattern: string, callback: (expanded: string) => void): void;
    }

    type RouteModel = object | string | number;
    // https://emberjs.com/api/ember/2.18/classes/RouterService
    /**
     * The Router service is the public API that provides component/view layer access to the router.
     */
    class RouterService extends Ember.Service {
        //
        /**
         * Determines whether a route is active.
         *
         * @param routeName the name of the route
         * @param models    the model(s) or identifier(s) to be used while
         *                  transitioning to the route
         * @param options   optional hash with a queryParams property containing a
         *                  mapping of query parameters
         */
        isActive(routeName: string, options?: { queryParams: object }): boolean;
        isActive(routeName: string, models: RouteModel, options?: { queryParams: object }): boolean;
        isActive(routeName: string, modelsA: RouteModel, modelsB: RouteModel, options?: { queryParams: object }): boolean;
        isActive(routeName: string, modelsA: RouteModel, modelsB: RouteModel, modelsC: RouteModel, options?: { queryParams: object }): boolean;
        isActive(routeName: string, modelsA: RouteModel, modelsB: RouteModel, modelsC: RouteModel, modelsD: RouteModel, options?: { queryParams: object }): boolean;

        // https://emberjs.com/api/ember/2.18/classes/RouterService/methods/isActive?anchor=replaceWith
        /**
         * Transition into another route while replacing the current URL, if
         * possible. The route may be either a single route or route path.
         *
         * @param routeNameOrUrl the name of the route or a URL
         * @param models         the model(s) or identifier(s) to be used while
         *                       transitioning to the route.
         * @param options        optional hash with a queryParams property
         *                       containing a mapping of query parameters
         * @returns              the Transition object associated with this attempted transition
         */
        replaceWith(routeNameOrUrl: string, options?: { queryParams: object }): Ember.Transition;
        replaceWith(routeNameOrUrl: string, models: RouteModel, options?: { queryParams: object }): Ember.Transition;
        replaceWith(routeNameOrUrl: string, modelsA: RouteModel, modelsB: RouteModel, options?: { queryParams: object }): Ember.Transition;
        replaceWith(routeNameOrUrl: string, modelsA: RouteModel, modelsB: RouteModel, modelsC: RouteModel, options?: { queryParams: object }): Ember.Transition;
        replaceWith(routeNameOrUrl: string, modelsA: RouteModel, modelsB: RouteModel, modelsC: RouteModel, modelsD: RouteModel, options?: { queryParams: object }): Ember.Transition;

        // https://emberjs.com/api/ember/2.18/classes/RouterService/methods/isActive?anchor=transitionTo
        /**
         * Transition the application into another route. The route may be
         * either a single route or route path
         *
         * @param routeNameOrUrl the name of the route or a URL
         * @param models         the model(s) or identifier(s) to be used while
         *                       transitioning to the route.
         * @param options        optional hash with a queryParams property
         *                       containing a mapping of query parameters
         * @returns              the Transition object associated with this attempted transition
         */
        transitionTo(routeNameOrUrl: string, options?: { queryParam: object }): Ember.Transition;
        transitionTo(routeNameOrUrl: string, models: RouteModel, options?: { queryParams: object }): Ember.Transition;
        transitionTo(routeNameOrUrl: string, modelsA: RouteModel, modelsB: RouteModel, options?: { queryParams: object }): Ember.Transition;
        transitionTo(routeNameOrUrl: string, modelsA: RouteModel, modelsB: RouteModel, modelsC: RouteModel, options?: { queryParams: object }): Ember.Transition;
        transitionTo(routeNameOrUrl: string, modelsA: RouteModel, modelsB: RouteModel, modelsC: RouteModel, modelsD: RouteModel, options?: { queryParams: object }): Ember.Transition;

        // https://emberjs.com/api/ember/2.18/classes/RouterService/methods/isActive?anchor=urlFor
        /**
         * Generate a URL based on the supplied route name.
         *
         * @param routeName the name of the route or a URL
         * @param models    the model(s) or identifier(s) to be used while
         *                  transitioning to the route.
         * @param options   optional hash with a queryParams property containing
         *                  a mapping of query parameters
         * @returns         the string representing the generated URL
         */
        urlFor(routeName: string, options?: { queryParams: object }): string;
        urlFor(routeName: string, models: RouteModel, options?: { queryParams: object }): string;
        urlFor(routeName: string, modelsA: RouteModel, modelsB: RouteModel, options?: { queryParams: object }): string;
        urlFor(routeName: string, modelsA: RouteModel, modelsB: RouteModel, modelsC: RouteModel, options?: { queryParams: object }): string;
        urlFor(routeName: string, modelsA: RouteModel, modelsB: RouteModel, modelsC: RouteModel, modelsD: RouteModel, options?: { queryParams: object }): string;
    }

    module '@ember/service' {
        interface Registry {
            'router': RouterService;
        }
    }

    export default Ember;
}

declare module '@ember/application' {
    import Ember from 'ember';
    import Engine from '@ember/engine';
    import Resolver from '@ember/application/resolver';
    import Router from '@ember/routing/router';

    /**
    An instance of Ember.Application is the starting point for every Ember application. It helps to
    instantiate, initialize and coordinate the many objects that make up your app.
    **/
    export default class Application extends Engine {
        /**
        Call advanceReadiness after any asynchronous setup logic has completed.
        Each call to deferReadiness must be matched by a call to advanceReadiness
        or the application will never become ready and routing will not begin.
        **/
        advanceReadiness(): void;
        /**
        Use this to defer readiness until some condition is true.

        This allows you to perform asynchronous setup logic and defer
        booting your application until the setup has finished.

        However, if the setup requires a loading UI, it might be better
        to use the router for this purpose.
        */
        deferReadiness(): void;
        /**
        defines an injection or typeInjection
        **/
        inject(factoryNameOrType: string, property: string, injectionName: string): void;
        /**
        This injects the test helpers into the window's scope. If a function of the
        same name has already been defined it will be cached (so that it can be reset
        if the helper is removed with `unregisterHelper` or `removeTestHelpers`).
        Any callbacks registered with `onInjectHelpers` will be called once the
        helpers have been injected.
        **/
        injectTestHelpers(): void;
        /**
        registers a factory for later injection
        @param fullName type:name (e.g., 'model:user')
        @param factory (e.g., App.Person)
        **/
        register(fullName: string, factory: Function, options?: {}): void;
        /**
        This removes all helpers that have been registered, and resets and functions
        that were overridden by the helpers.
        **/
        removeTestHelpers(): void;
        /**
        Reset the application. This is typically used only in tests.
        **/
        reset(): void;
        /**
        This hook defers the readiness of the application, so that you can start
        the app when your tests are ready to run. It also sets the router's
        location to 'none', so that the window's location will not be modified
        (preventing both accidental leaking of state between tests and interference
        with your testing framework).
        **/
        setupForTesting(): void;
        /**
        The DOM events for which the event dispatcher should listen.
        */
        customEvents: Ember.EventDispatcherEvents;
        /**
        The Ember.EventDispatcher responsible for delegating events to this application's views.
        **/
        eventDispatcher: Ember.EventDispatcher;
        /**
        Set this to provide an alternate class to Ember.DefaultResolver
        **/
        resolver: Resolver;
        /**
        The root DOM element of the Application. This can be specified as an
        element or a jQuery-compatible selector string.

        This is the element that will be passed to the Application's, eventDispatcher,
        which sets up the listeners for event delegation. Every view in your application
        should be a child of the element you specify here.
        **/
        rootElement: HTMLElement | string;
        /**
        Called when the Application has become ready.
        The call will be delayed until the DOM has become ready.
        **/
        ready: Function;
        /**
        Application's router.
        **/
        Router: Router;
        registry: Ember.Registry;
    }

    /**
     * Framework objects in an Ember application (components, services, routes, etc.)
     * are created via a factory and dependency injection system. Each of these
     * objects is the responsibility of an "owner", which handled its
     * instantiation and manages its lifetime.
     */
    export function getOwner(object: any): any;

    /**
     * `setOwner` forces a new owner on a given object instance. This is primarily
     * useful in some testing cases.
     */
    export function setOwner(object: any, owner: any): void;

    /**
     * Detects when a specific package of Ember (e.g. 'Ember.Application')
     * has fully loaded and is available for extension.
     */
    export function onLoad(name: string, callback: Function): any;

    /**
     * Called when an Ember.js package (e.g Ember.Application) has finished
     * loading. Triggers any callbacks registered for this event.
     */
    export function runLoadHooks(name: string, object?: {}): any;
}

declare module '@ember/application/deprecations' {
    /**
     * Display a deprecation warning with the provided message and a stack trace
     * (Chrome and Firefox only).
     */
    export function deprecate(
        message: string,
        test: boolean,
        options: { id: string; until: string }
    ): any;

    /**
     * @deprecated Missing deprecation options: https://emberjs.com/deprecations/v2.x/#toc_ember-debug-function-options
     */
    export function deprecate(
        message: string,
        test: boolean,
        options?: { id?: string; until?: string }
    ): any;

    /**
     * Alias an old, deprecated method with its new counterpart.
     */
    export function deprecateFunc<Func extends ((...args: any[]) => any)>(
        message: string,
        options: { id: string; until: string },
        func: Func
    ): Func;

    /**
     * @deprecated Missing deprecation options: https://emberjs.com/deprecations/v2.x/#toc_ember-debug-function-options
     */
    export function deprecateFunc<Func extends ((...args: any[]) => any)>(
        message: string,
        func: Func
    ): Func;
}

declare module '@ember/application/globals-resolver' {
    import Application from '@ember/application';
    import Resolver from '@ember/application/resolver';

    /**
     * The DefaultResolver defines the default lookup rules to resolve
     * container lookups before consulting the container for registered
     * items:
     */
    export default class GlobalsResolver extends Resolver {
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
}

declare module '@ember/application/instance' {
    import EngineInstance from '@ember/engine/instance';

    /**
    The `ApplicationInstance` encapsulates all of the stateful aspects of a
    running `Application`.
    **/
    export default class ApplicationInstance extends EngineInstance {}
}

declare module '@ember/application/resolver' {
    import EmberObject from '@ember/object';

    export default class Resolver extends EmberObject { }
}

declare module '@ember/array' {
    import Ember from 'ember';
    import Mixin from '@ember/object/mixin';
    import Enumerable from '@ember/enumerable';
    import ComputedProperty from '@ember/object/computed';

    /**
    This module implements Observer-friendly Array-like behavior. This mixin is picked up by the
    Array class as well as other controllers, etc. that want to appear to be arrays.
    **/
    interface EmberArray<T> extends Enumerable<T> {
        /**
         * __Required.__ You must implement this method to apply this mixin.
         */
        length: number | ComputedProperty<number>;
        /**
         * Returns the object at the given `index`. If the given `index` is negative
         * or is greater or equal than the array length, returns `undefined`.
         */
        objectAt(idx: number): T | undefined;
        /**
         * This returns the objects at the specified indexes, using `objectAt`.
         */
        objectsAt(indexes: number[]): EmberArray<T>;
        /**
         * Returns a new array that is a slice of the receiver. This implementation
         * uses the observable array methods to retrieve the objects for the new
         * slice.
         */
        slice(beginIndex?: number, endIndex?: number): T[];
        /**
         * Returns the index of the given object's first occurrence.
         * If no `startAt` argument is given, the starting location to
         * search is 0. If it's negative, will count backward from
         * the end of the array. Returns -1 if no match is found.
         */
        indexOf(searchElement: T, fromIndex?: number): number;
        /**
         * Returns the index of the given object's last occurrence.
         * If no `startAt` argument is given, the search starts from
         * the last position. If it's negative, will count backward
         * from the end of the array. Returns -1 if no match is found.
         */
        lastIndexOf(searchElement: T, fromIndex?: number): number;
        /**
         * Adds an array observer to the receiving array. The array observer object
         * normally must implement two methods:
         */
        addArrayObserver(target: {}, opts: {}): this;
        /**
         * Removes an array observer from the object if the observer is current
         * registered. Calling this method multiple times with the same object will
         * have no effect.
         */
        removeArrayObserver(target: {}, opts: {}): this;
        /**
         * Becomes true whenever the array currently has observers watching changes
         * on the array.
         */
        hasArrayObservers: ComputedProperty<boolean>;
        /**
         * If you are implementing an object that supports `Ember.Array`, call this
         * method just before the array content changes to notify any observers and
         * invalidate any related properties. Pass the starting index of the change
         * as well as a delta of the amounts to change.
         */
        arrayContentWillChange(startIdx: number, removeAmt: number, addAmt: number): this;
        /**
         * If you are implementing an object that supports `Ember.Array`, call this
         * method just after the array content changes to notify any observers and
         * invalidate any related properties. Pass the starting index of the change
         * as well as a delta of the amounts to change.
         */
        arrayContentDidChange(startIdx: number, removeAmt: number, addAmt: number): this;
        /**
         * Returns a special object that can be used to observe individual properties
         * on the array. Just get an equivalent property on this object and it will
         * return an enumerable that maps automatically to the named key on the
         * member objects.
         */
        '@each': ComputedProperty<T>;
    }
    // Ember.Array rather than Array because the `array-type` lint rule doesn't realize the global is shadowed
    const EmberArray: Mixin<EmberArray<any>>;
    export default EmberArray;

    /**
     * Creates an `Ember.NativeArray` from an Array like object.
     * Does not modify the original object's contents. Ember.A is not needed if
     * `EmberENV.EXTEND_PROTOTYPES` is `true` (the default value). However,
     * it is recommended that you use Ember.A when creating addons for
     * ember or when you can not guarantee that `EmberENV.EXTEND_PROTOTYPES`
     * will be `true`.
     */
    export function A<T>(arr?: T[]): Ember.NativeArray<T>;

    /**
     * Returns true if the passed object is an array or Array-like.
     */
    export function isArray(obj: any): obj is ArrayLike<any>;

    /**
     * Forces the passed object to be part of an array. If the object is already
     * an array, it will return the object. Otherwise, it will add the object to
     * an array. If obj is `null` or `undefined`, it will return an empty array.
     */
    export function makeArray<T>(obj?: T[] | T | null): T[];
}

declare module '@ember/array/mutable' {
    import Ember from 'ember';
    import Mixin from '@ember/object/mixin';
    import EmberArray from '@ember/array';
    import Enumerable from '@ember/enumerable';

    /**
     * This mixin defines the API for modifying array-like objects. These methods
     * can be applied only to a collection that keeps its items in an ordered set.
     * It builds upon the Array mixin and adds methods to modify the array.
     * One concrete implementations of this class include ArrayProxy.
     */
    interface MutableArray<T> extends EmberArray<T>, Ember.MutableEnumerable<T> {
        /**
         * __Required.__ You must implement this method to apply this mixin.
         */
        replace(idx: number, amt: number, objects: any[]): any;
        /**
         * Remove all elements from the array. This is useful if you
         * want to reuse an existing array without having to recreate it.
         */
        clear(): this;
        /**
         * This will use the primitive `replace()` method to insert an object at the
         * specified index.
         */
        insertAt(idx: number, object: {}): this;
        /**
         * Remove an object at the specified index using the `replace()` primitive
         * method. You can pass either a single index, or a start and a length.
         */
        removeAt(start: number, len?: number): this;
        /**
         * Push the object onto the end of the array. Works just like `push()` but it
         * is KVO-compliant.
         */
        pushObject(obj: T): T;
        /**
         * Add the objects in the passed numerable to the end of the array. Defers
         * notifying observers of the change until all objects are added.
         */
        pushObjects(objects: Enumerable<T>): this;
        /**
         * Pop object from array or nil if none are left. Works just like `pop()` but
         * it is KVO-compliant.
         */
        popObject(): T;
        /**
         * Shift an object from start of array or nil if none are left. Works just
         * like `shift()` but it is KVO-compliant.
         */
        shiftObject(): T;
        /**
         * Unshift an object to start of array. Works just like `unshift()` but it is
         * KVO-compliant.
         */
        unshiftObject(obj: T): T;
        /**
         * Adds the named objects to the beginning of the array. Defers notifying
         * observers until all objects have been added.
         */
        unshiftObjects(objects: Enumerable<T>): this;
        /**
         * Reverse objects in the array. Works just like `reverse()` but it is
         * KVO-compliant.
         */
        reverseObjects(): this;
        /**
         * Replace all the receiver's content with content of the argument.
         * If argument is an empty array receiver will be cleared.
         */
        setObjects(objects: Ember.Array<T>): this;
    }
    const MutableArray: Mixin<MutableArray<any>>;
    export default MutableArray;
}

declare module '@ember/array/proxy' {
    import Ember from 'ember';
    import EmberObject from '@ember/object';
    import MutableArray from '@ember/array/mutable';

    /**
    An ArrayProxy wraps any other object that implements Ember.Array and/or Ember.MutableArray,
    forwarding all requests. This makes it very useful for a number of binding use cases or other cases
    where being able to swap out the underlying array is useful.
    **/
    interface ArrayProxy<T> extends MutableArray<T> {}
    class ArrayProxy<T> extends EmberObject.extend(MutableArray as {}) {
        content: Ember.NativeArray<T>;

        /**
         * Should actually retrieve the object at the specified index from the
         * content. You can override this method in subclasses to transform the
         * content item to something new.
         */
        objectAtContent(idx: number): T | undefined;
    }

    export default ArrayProxy;
}

declare module '@ember/component' {
    import Ember from 'ember';
    import { TemplateFactory } from 'htmlbars-inline-precompile';
    import EmberObject from '@ember/object';
    import Mixin from '@ember/object/mixin';
    import Evented from '@ember/object/evented';

    interface ViewMixin {
        /**
         * A list of properties of the view to apply as attributes. If the property
         * is a string value, the value of that string will be applied as the value
         * for an attribute of the property's name.
         */
        attributeBindings: string[];
        /**
         * Returns the current DOM element for the view.
         */
        element: Element;
        /**
         * Returns a jQuery object for this view's element. If you pass in a selector
         * string, this method will return a jQuery object, using the current element
         * as its buffer.
         */
        $: JQueryStatic;
        /**
         * The HTML `id` of the view's element in the DOM. You can provide this
         * value yourself but it must be unique (just as in HTML):
         */
        elementId: string;
        /**
         * Tag name for the view's outer element. The tag name is only used when an
         * element is first created. If you change the `tagName` for an element, you
         * must destroy and recreate the view element.
         */
        tagName: string;
        /**
         * Renders the view again. This will work regardless of whether the
         * view is already in the DOM or not. If the view is in the DOM, the
         * rendering process will be deferred to give bindings a chance
         * to synchronize.
         */
        rerender(): void;
        /**
         * Called when a view is going to insert an element into the DOM.
         */
        willInsertElement(): void;
        /**
         * Called when the element of the view has been inserted into the DOM.
         * Override this function to do any set up that requires an element
         * in the document body.
         */
        didInsertElement(): void;
        /**
         * Called when the view is about to rerender, but before anything has
         * been torn down. This is a good opportunity to tear down any manual
         * observers you have installed based on the DOM state
         */
        willClearRender(): void;
        /**
         * Called when the element of the view is going to be destroyed. Override
         * this function to do any teardown that requires an element, like removing
         * event listeners.
         */
        willDestroyElement(): void;
    }
    const ViewMixin: Mixin<ViewMixin>;

    /**
    Ember.CoreView is an abstract class that exists to give view-like behavior to both Ember's main
    view class Ember.Component and other classes that don't need the full functionality of Ember.Component.

    Unless you have specific needs for CoreView, you will use Ember.Component in your applications.
    **/
    class CoreView extends EmberObject.extend(Evented, Ember.ActionHandler) {}
    interface ActionSupport {
        sendAction(action: string, ...params: any[]): void;
    }
    const ActionSupport: Mixin<ActionSupport>;

    interface ClassNamesSupport {
        /**
        A list of properties of the view to apply as class names. If the property is a string value,
        the value of that string will be applied as a class name.

        If the value of the property is a Boolean, the name of that property is added as a dasherized
        class name.

        If you would prefer to use a custom value instead of the dasherized property name, you can
        pass a binding like this: `classNameBindings: ['isUrgent:urgent']`

        This list of properties is inherited from the component's superclasses as well.
        */
        classNameBindings: string[];
        /**
         * Standard CSS class names to apply to the view's outer element. This
         * property automatically inherits any class names defined by the view's
         * superclasses as well.
         */
        classNames: string[];
    }
    const ClassNamesSupport: Ember.Mixin<ClassNamesSupport>;

    /**
    A view that is completely isolated. Property access in its templates go to the view object
    and actions are targeted at the view object. There is no access to the surrounding context or
    outer controller; all contextual information is passed in.
    **/
    export default class Component extends CoreView.extend(ViewMixin, ActionSupport, ClassNamesSupport) {
        // methods
        readDOMAttr(name: string): string;
        // properties
        /**
         * The WAI-ARIA role of the control represented by this view. For example, a button may have a
         * role of type 'button', or a pane may have a role of type 'alertdialog'. This property is
         * used by assistive software to help visually challenged users navigate rich web applications.
         */
        ariaRole: string;
        /**
         * The HTML id of the component's element in the DOM. You can provide this value yourself but
         * it must be unique (just as in HTML):
         *
         * If not manually set a default value will be provided by the framework. Once rendered an
         * element's elementId is considered immutable and you should never change it. If you need
         * to compute a dynamic value for the elementId, you should do this when the component or
         * element is being instantiated:
         */
        elementId: string;
        /**
         * If false, the view will appear hidden in DOM.
         */
        isVisible: boolean;
        /**
         * A component may contain a layout. A layout is a regular template but supersedes the template
         * property during rendering. It is the responsibility of the layout template to retrieve the
         * template property from the component (or alternatively, call Handlebars.helpers.yield,
         * {{yield}}) to render it in the correct location. This is useful for a component that has a
         * shared wrapper, but which delegates the rendering of the contents of the wrapper to the
         * template property on a subclass.
         */
        layout: TemplateFactory | string;
        /**
         * Enables components to take a list of parameters as arguments.
         */
        static positionalParams: string[] | string;
        // events
        /**
         * Called when the attributes passed into the component have been updated. Called both during the
         * initial render of a container and during a rerender. Can be used in place of an observer; code
         * placed here will be executed every time any attribute updates.
         */
        didReceiveAttrs(): void;
        /**
         * Called after a component has been rendered, both on initial render and in subsequent rerenders.
         */
        didRender(): void;
        /**
         * Called when the component has updated and rerendered itself. Called only during a rerender,
         * not during an initial render.
         */
        didUpdate(): void;
        /**
         * Called when the attributes passed into the component have been changed. Called only during a
         * rerender, not during an initial render.
         */
        didUpdateAttrs(): void;
        /**
         * Called before a component has been rendered, both on initial render and in subsequent rerenders.
         */
        willRender(): void;
        /**
         * Called when the component is about to update and rerender itself. Called only during a rerender,
         * not during an initial render.
         */
        willUpdate(): void;
    }
}

declare module '@ember/component/checkbox' {
    import Component from '@ember/component';

    /**
    The internal class used to create text inputs when the {{input}} helper is used
    with type of checkbox. See Handlebars.helpers.input for usage details.
    **/
    export default class Checkbox extends Component {}
}

declare module '@ember/component/helper' {
    import EmberObject from '@ember/object';

    /**
     * Ember Helpers are functions that can compute values, and are used in templates.
     * For example, this code calls a helper named `format-currency`:
     */
    export default class Helper extends EmberObject {
        /**
         * Override this function when writing a class-based helper.
         */
        compute(params: any[], hash: object): any;
        /**
         * On a class-based helper, it may be useful to force a recomputation of that
         * helpers value. This is akin to `rerender` on a component.
         */
        recompute(): any;

        static helper: typeof helper;
    }

    /**
     * In many cases, the ceremony of a full `Ember.Helper` class is not required.
     * The `helper` method creates pure-function helpers without instances. For
     * example:
     */
    export function helper(helper: (params: any[], hash?: object) => any): Helper;
}

declare module '@ember/component/text-area' {
    import Ember from 'ember';
    import Component from '@ember/component';

    /**
     * The internal class used to create textarea element when the `{{textarea}}`
     * helper is used.
     */
    export default class TextArea extends Component.extend(Ember.TextSupport) {}
}

declare module '@ember/component/text-field' {
    import Ember from 'ember';
    import Component from '@ember/component';

    /**
     * The internal class used to create text inputs when the `{{input}}`
     * helper is used with `type` of `text`.
     */
    export default class TextField extends Component.extend(Ember.TextSupport) {
        /**
         * The `value` attribute of the input element. As the user inputs text, this
         * property is updated live.
         */
        value: string;
        /**
         * The `type` attribute of the input element.
         */
        type: string;
        /**
         * The `size` of the text field in characters.
         */
        size: string;
        /**
         * The `pattern` attribute of input element.
         */
        pattern: string;
        /**
         * The `min` attribute of input element used with `type="number"` or `type="range"`.
         */
        min: string;
        /**
         * The `max` attribute of input element used with `type="number"` or `type="range"`.
         */
        max: string;
    }
}

declare module '@ember/controller' {
    import Ember from 'ember';
    import ComputedProperty from '@ember/object/computed';
    import EmberObject from '@ember/object';
    import Mixin from '@ember/object/mixin';
    import EmberArray from '@ember/array';

    type QueryParamType = 'boolean' | 'number' | 'array' | 'string';
    type QueryParamScope = 'controller' | 'model';

    interface QueryParamConfig {
        [key: string]: {
            type?: QueryParamType;
            scope?: QueryParamScope;
            as?: string;
        };
    }

    /**
     * Additional methods for the Controller.
     */
    interface ControllerMixin extends Ember.ActionHandler {
        replaceRoute(name: string, ...args: any[]): void;
        transitionToRoute(name: string, ...args: any[]): void;
        model: any;
        queryParams: string | string[] | QueryParamConfig[];
        target: Object;
    }
    const ControllerMixin: Mixin<ControllerMixin>;

    export default class Controller extends EmberObject.extend(ControllerMixin) {}

    /**
     * Creates a property that lazily looks up another controller in the container.
     * Can only be used when defining another controller.
     */
    export function inject(): ComputedProperty<Controller>;
    export function inject<K extends keyof Registry>(
        name: K
    ): ComputedProperty<Registry[K]>;

    // A type registry for Ember `Controller`s. Meant to be declaration-merged
    // so string lookups resolve to the correct type.
    export interface Registry {}
}

declare module '@ember/debug' {
    /**
     * Define an assertion that will throw an exception if the condition is not met.
     */
    export function assert(desc: string, test?: boolean): void | never;

    /**
     * Display a debug notice.
     */
    export function debug(message: string): void;

    /**
     * Run a function meant for debugging.
     */
    export function runInDebug(func: () => void): any;

    /**
     * Display a warning with the provided message.
     */
    export function warn(message: string, test: boolean, options: { id: string }): any;
    export function warn(message: string, options: { id: string }): any;
    /**
     * @deprecated Missing deprecation options: https://emberjs.com/deprecations/v2.x/#toc_ember-debug-function-options
     */
    export function warn(message: string, test: boolean, options?: { id?: string }): any;
    /**
     * @deprecated Missing deprecation options: https://emberjs.com/deprecations/v2.x/#toc_ember-debug-function-options
     */
    export function warn(message: string, options?: { id?: string }): any;

    /**
     * Convenience method to inspect an object. This method will attempt to
     * convert the object into a useful string description.
     */
    export function inspect(obj: any): string;

    /**
     * Allows for runtime registration of handler functions that override the default deprecation behavior.
     * Deprecations are invoked by calls to [Ember.deprecate](http://emberjs.com/api/classes/Ember.html#method_deprecate).
     * The following example demonstrates its usage by registering a handler that throws an error if the
     * message contains the word "should", otherwise defers to the default handler.
     */
    export function registerDeprecationHandler(handler: Function): any;

    /**
     * Allows for runtime registration of handler functions that override the default warning behavior.
     * Warnings are invoked by calls made to [Ember.warn](http://emberjs.com/api/classes/Ember.html#method_warn).
     * The following example demonstrates its usage by registering a handler that does nothing overriding Ember's
     * default warning behavior.
     */
    export function registerWarnHandler(handler: Function): any;
}

declare module '@ember/debug/container-debug-adapter' {
    import EmberObject from '@ember/object';
    import Resolver from '@ember/application/resolver';

    /**
    The ContainerDebugAdapter helps the container and resolver interface
    with tools that debug Ember such as the Ember Inspector for Chrome and Firefox.
    **/
    export default class ContainerDebugAdapter extends EmberObject {
        resolver: Resolver;
        canCatalogEntriesByType(type: string): boolean;
        catalogEntriesByType(type: string): any[];
    }
}

declare module '@ember/debug/data-adapter' {
    import EmberObject from '@ember/object';

    /**
     * The `DataAdapter` helps a data persistence library
     * interface with tools that debug Ember such as Chrome and Firefox.
     */
    export default class DataAdapter extends EmberObject {
        /**
         * The container-debug-adapter which is used
         * to list all models.
         */
        containerDebugAdapter: any;
        /**
         * Ember Data > v1.0.0-beta.18
         * requires string model names to be passed
         * around instead of the actual factories.
         */
        acceptsModelName: any;
        /**
         * Specifies how records can be filtered.
         * Records returned will need to have a `filterValues`
         * property with a key for every name in the returned array.
         */
        getFilters(): any[];
        /**
         * Fetch the model types and observe them for changes.
         */
        watchModelTypes(typesAdded: Function, typesUpdated: Function): Function;
        /**
         * Fetch the records of a given type and observe them for changes.
         */
        watchRecords(
            modelName: string,
            recordsAdded: Function,
            recordsUpdated: Function,
            recordsRemoved: Function
        ): Function;
    }
}

declare module '@ember/engine' {
    import Ember from 'ember';
    import Resolver from '@ember/application/resolver';
    import EngineInstance from '@ember/engine/instance';

    /**
     * The `Engine` class contains core functionality for both applications and
     * engines.
     */
    export default class Engine extends Ember.Namespace.extend(Ember._RegistryProxyMixin) {
        /**
         * The goal of initializers should be to register dependencies and injections.
         * This phase runs once. Because these initializers may load code, they are
         * allowed to defer application readiness and advance it. If you need to access
         * the container or store you should use an InstanceInitializer that will be run
         * after all initializers and therefore after all code is loaded and the app is
         * ready.
         */
        static initializer(initializer: Ember.Initializer<Engine>): void;
        /**
         * Instance initializers run after all initializers have run. Because
         * instance initializers run after the app is fully set up. We have access
         * to the store, container, and other items. However, these initializers run
         * after code has loaded and are not allowed to defer readiness.
         */
        static instanceInitializer(instanceInitializer: Ember.Initializer<EngineInstance>): void;
        /**
         * Set this to provide an alternate class to `Ember.DefaultResolver`
         */
        resolver: Resolver;
    }

    /**
     * `getEngineParent` retrieves an engine instance's parent instance.
     */
    export function getEngineParent(engine: EngineInstance): EngineInstance;
}

declare module '@ember/engine/instance' {
    import Ember from 'ember';
    import EmberObject from '@ember/object';
    /**
     * The `EngineInstance` encapsulates all of the stateful aspects of a
     * running `Engine`.
     */
    export default class EngineInstance extends EmberObject.extend(
        Ember._RegistryProxyMixin,
        Ember._ContainerProxyMixin
    ) {
        /**
         * Unregister a factory.
         */
        unregister(fullName: string): any;
    }
}

declare module '@ember/enumerable' {
    import Ember from 'ember';
    import Mixin from '@ember/object/mixin';
    import ComputedProperty from '@ember/object/computed';

    /**
     * This mixin defines the common interface implemented by enumerable objects
     * in Ember. Most of these methods follow the standard Array iteration
     * API defined up to JavaScript 1.8 (excluding language-specific features that
     * cannot be emulated in older versions of JavaScript).
     */
    interface Enumerable<T> {
        /**
         * Helper method returns the first object from a collection. This is usually
         * used by bindings and other parts of the framework to extract a single
         * object if the enumerable contains only one item.
         */
        firstObject: ComputedProperty<T | undefined>;
        /**
         * Helper method returns the last object from a collection. If your enumerable
         * contains only one object, this method should always return that object.
         * If your enumerable is empty, this method should return `undefined`.
         */
        lastObject: ComputedProperty<T | undefined>;
        /**
         * @deprecated Use `Enumerable#includes` instead.
         */
        contains(obj: T): boolean;
        /**
         * Iterates through the enumerable, calling the passed function on each
         * item. This method corresponds to the `forEach()` method defined in
         * JavaScript 1.6.
         */
        forEach: T[]['forEach'];
        /**
         * Alias for `mapBy`
         */
        getEach(key: string): any[];
        /**
         * Sets the value on the named property for each member. This is more
         * ergonomic than using other methods defined on this helper. If the object
         * implements Ember.Observable, the value will be changed to `set(),` otherwise
         * it will be set directly. `null` objects are skipped.
         */
        setEach(key: string, value: any): any;
        /**
         * Maps all of the items in the enumeration to another value, returning
         * a new array. This method corresponds to `map()` defined in JavaScript 1.6.
         */
        map: T[]['map'];
        /**
         * Similar to map, this specialized function returns the value of the named
         * property on all items in the enumeration.
         */
        mapBy(key: string): any[];
        /**
         * Returns an array with all of the items in the enumeration that the passed
         * function returns true for. This method corresponds to `filter()` defined in
         * JavaScript 1.6.
         */
        filter: T[]['filter'];
        /**
         * Returns an array with all of the items in the enumeration where the passed
         * function returns false. This method is the inverse of filter().
         */
        reject(callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): Ember.NativeArray<T>;
        /**
         * Returns an array with just the items with the matched property. You
         * can pass an optional second argument with the target value. Otherwise
         * this will match any property that evaluates to `true`.
         */
        filterBy(key: string, value?: any): Ember.NativeArray<T>;
        /**
         * Returns an array with the items that do not have truthy values for
         * key.  You can pass an optional second argument with the target value.  Otherwise
         * this will match any property that evaluates to false.
         */
        rejectBy(key: string, value?: any): Ember.NativeArray<T>;
        /**
         * Returns the first item in the array for which the callback returns true.
         * This method works similar to the `filter()` method defined in JavaScript 1.6
         * except that it will stop working on the array once a match is found.
         */
        find: T[]['find'];
        /**
         * Returns the first item with a property matching the passed value. You
         * can pass an optional second argument with the target value. Otherwise
         * this will match any property that evaluates to `true`.
         */
        findBy(key: string, value?: any): T | undefined;
        /**
         * Returns `true` if the passed function returns true for every item in the
         * enumeration. This corresponds with the `every()` method in JavaScript 1.6.
         */
        every: T[]['every'];
        /**
         * Returns `true` if the passed property resolves to the value of the second
         * argument for all items in the enumerable. This method is often simpler/faster
         * than using a callback.
         */
        isEvery(key: string, value?: any): boolean;
        /**
         * Returns `true` if the passed function returns true for any item in the
         * enumeration.
         */
        any(callback: (value: T, index: number, array: T[]) => boolean, target?: {}): boolean;
        /**
         * Returns `true` if the passed property resolves to the value of the second
         * argument for any item in the enumerable. This method is often simpler/faster
         * than using a callback.
         */
        isAny(key: string, value?: any): boolean;
        /**
         * This will combine the values of the enumerator into a single value. It
         * is a useful way to collect a summary value from an enumeration. This
         * corresponds to the `reduce()` method defined in JavaScript 1.8.
         */
        reduce: T[]['reduce'];
        /**
         * Invokes the named method on every object in the receiver that
         * implements it. This method corresponds to the implementation in
         * Prototype 1.6.
         */
        invoke(methodName: keyof T, ...args: any[]): any[];
        /**
         * Simply converts the enumerable into a genuine array. The order is not
         * guaranteed. Corresponds to the method implemented by Prototype.
         */
        toArray(): T[];
        /**
         * Returns a copy of the array with all `null` and `undefined` elements removed.
         */
        compact(): Ember.NativeArray<T>;
        /**
         * Returns a new enumerable that excludes the passed value. The default
         * implementation returns an array regardless of the receiver type.
         * If the receiver does not contain the value it returns the original enumerable.
         */
        without(value: T): Ember.NativeArray<T>;
        /**
         * Returns a new enumerable that contains only unique values. The default
         * implementation returns an array regardless of the receiver type.
         */
        uniq(): Ember.NativeArray<T>;
        /**
         * Converts the enumerable into an array and sorts by the keys
         * specified in the argument.
         */
        sortBy(property: string): Ember.NativeArray<T>;
        /**
         * Returns a new enumerable that contains only items containing a unique property value.
         * The default implementation returns an array regardless of the receiver type.
         */
        uniqBy(property: string): Ember.NativeArray<T>;
        /**
         * Returns `true` if the passed object can be found in the enumerable.
         */
        includes(searchElement: T, fromIndex?: number): boolean;
        /**
         * This is the handler for the special array content property. If you get
         * this property, it will return this. If you set this property to a new
         * array, it will replace the current content.
         */
        '[]': ComputedProperty<this>;
    }
    const Enumerable: Mixin<Enumerable<any>>;
    export default Enumerable;
}

declare module '@ember/error' {
    /**
    A subclass of the JavaScript Error object for use in Ember.
    **/
    const Error: ErrorConstructor;
    export default Error;
}

declare module '@ember/instrumentation' {
    export function instrument(name: string, payload: any, callback: Function, binding: any): void;
    export function reset(): void;
    export function subscribe(pattern: string, object: any): void;
    export function unsubscribe(subscriber: any): void;
}

declare module '@ember/map' {
    /**
     * A Map stores values indexed by keys. Unlike JavaScript's
     * default Objects, the keys of a Map can be any JavaScript
     * object.
     * @deprecated
     */
    export default class EmberMap {
        copy(): EmberMap;
        static create(): EmberMap;
        forEach(callback: Function, self: any): void;
        get(key: any): any;
        has(key: any): boolean;
        set(key: any, value: any): void;
        length: number;
    }
}

declare module '@ember/map/with-default' {
    import EmberMap from '@ember/map';

    /**
     * @deprecated
     */
    export default class MapWithDefault extends EmberMap {
        copy(): MapWithDefault;
        static create(): MapWithDefault;
    }
}

declare module '@ember/object' {
    import Ember from 'ember';
    import CoreObject from '@ember/object/core';
    import Observable from '@ember/object/observable';
    import ComputedProperty from '@ember/object/computed';

    /**
     * `Ember.Object` is the main base class for all Ember objects. It is a subclass
     * of `Ember.CoreObject` with the `Ember.Observable` mixin applied. For details,
     * see the documentation for each of these.
     */
    export default class EmberObject extends CoreObject.extend(Observable) {}

    /**
     * Makes a method available via an additional name.
     */
    export function aliasMethod(methodName: string): ComputedProperty<any>;

    export function computed<T>(cb: Ember.ComputedPropertyCallback<T>): ComputedProperty<T>;
    export function computed<T>(k1: string, cb: Ember.ComputedPropertyCallback<T>): ComputedProperty<T>;
    export function computed<T>(k1: string, k2: string, cb: Ember.ComputedPropertyCallback<T>): ComputedProperty<T>;
    export function computed<T>(
        k1: string,
        k2: string,
        k3: string,
        cb: Ember.ComputedPropertyCallback<T>
    ): ComputedProperty<T>;
    export function computed<T>(
        k1: string,
        k2: string,
        k3: string,
        k4: string,
        cb: Ember.ComputedPropertyCallback<T>
    ): ComputedProperty<T>;
    export function computed<T>(
        k1: string,
        k2: string,
        k3: string,
        k4: string,
        k5: string,
        cb: Ember.ComputedPropertyCallback<T>
    ): ComputedProperty<T>;
    export function computed<T>(
        k1: string,
        k2: string,
        k3: string,
        k4: string,
        k5: string,
        k6: string,
        cb: Ember.ComputedPropertyCallback<T>
    ): ComputedProperty<T>;
    export function computed(
        k1: string,
        k2: string,
        k3: string,
        k4: string,
        k5: string,
        k6: string,
        k7: string,
        ...rest: any[]
    ): ComputedProperty<any>;

    /**
     * NOTE: This is a low-level method used by other parts of the API.
     * You almost never want to call this method directly. Instead you
     * should use Ember.mixin() to define new properties.
     */
    export function defineProperty(
        obj: object,
        keyName: string,
        desc?: PropertyDescriptor | ComputedProperty<any>,
        data?: any,
        meta?: any
    ): void;

    /**
     * Gets the value of a property on an object. If the property is computed,
     * the function will be invoked. If the property is not defined but the
     * object implements the `unknownProperty` method then that will be invoked.
     */
    export function get<T, K extends keyof T>(obj: Ember.ComputedPropertyGetters<T>, key: K): T[K];
    export function get<T, K extends keyof T>(obj: T, key: K): T[K]; // for dynamic K

    /**
     * To get multiple properties at once, call `Ember.getProperties`
     * with an object followed by a list of strings or an array:
     */
    export function getProperties<T, K extends keyof T>(
        obj: Ember.ComputedPropertyGetters<T>,
        list: K[]
    ): Pick<T, K>;
    export function getProperties<T, K extends keyof T>(obj: T, list: K[]): Pick<T, K>; // for dynamic K
    export function getProperties<T, K extends keyof T>(
        obj: Ember.ComputedPropertyGetters<T>,
        ...list: K[]
    ): Pick<T, K>;
    export function getProperties<T, K extends keyof T>(obj: T, ...list: K[]): Pick<T, K>; // for dynamic K

    /**
     * Retrieves the value of a property from an Object, or a default value in the
     * case that the property returns `undefined`.
     */
    export function getWithDefault<T, K extends keyof T>(
        obj: Ember.ComputedPropertyGetters<T>,
        key: K,
        defaultValue: T[K]
    ): T[K];
    export function getWithDefault<T, K extends keyof T>(obj: T, key: K, defaultValue: T[K]): T[K]; // for dynamic K

    /**
     * Specify a method that observes property changes.
     */
    export function observer(key1: string, func: (target: any, key: string) => void): void;
    export function observer(
        key1: string,
        key2: string,
        func: (target: any, key: string) => void
    ): void;
    export function observer(
        key1: string,
        key2: string,
        key3: string,
        func: (target: any, key: string) => void
    ): void;
    export function observer(
        key1: string,
        key2: string,
        key3: string,
        key4: string,
        func: (target: any, key: string) => void
    ): void;
    export function observer(
        key1: string,
        key2: string,
        key3: string,
        key4: string,
        key5: string,
        func: (target: any, key: string) => void
    ): void;

    /**
     * Sets the value of a property on an object, respecting computed properties
     * and notifying observers and other listeners of the change. If the
     * property is not defined but the object implements the `setUnknownProperty`
     * method then that will be invoked as well.
     */
    export function set<T, K extends keyof T, V extends T[K]>(
        obj: Ember.ComputedPropertySetters<T>,
        key: K,
        value: V
    ): V;
    export function set<T, K extends keyof T, V extends T[K]>(obj: T, key: K, value: V): V; // for dynamic K

    /**
     * Set a list of properties on an object. These properties are set inside
     * a single `beginPropertyChanges` and `endPropertyChanges` batch, so
     * observers will be buffered.
     */
    export function setProperties<T, K extends keyof T>(
        obj: Ember.ComputedPropertySetters<T>,
        hash: Pick<T, K>
    ): Pick<T, K>;
    export function setProperties<T, K extends keyof T>(obj: T, hash: Pick<T, K>): Pick<T, K>; // for dynamic K

    /**
     * Error-tolerant form of `Ember.set`. Will not blow up if any part of the
     * chain is `undefined`, `null`, or destroyed.
     */
    export function trySet(root: object, path: string, value: any): any;
}

declare module '@ember/object/computed' {
    import Ember from 'ember';

    /**
    A computed property transforms an objects function into a property.
    By default the function backing the computed property will only be called once and the result
    will be cached. You can specify various properties that your computed property is dependent on.
    This will force the cached result to be recomputed if the dependencies are modified.
    **/
    export default class ComputedProperty<Get, Set = Get> {
        /**
         * Call on a computed property to set it into non-cached mode. When in this
         * mode the computed property will not automatically cache the return value.
         */
        volatile(): this;
        /**
         * Call on a computed property to set it into read-only mode. When in this
         * mode the computed property will throw an error when set.
         */
        readOnly(): this;
        /**
         * Sets the dependent keys on this computed property. Pass any number of
         * arguments containing key paths that this computed property depends on.
         */
        property(...path: string[]): this;
        /**
         * In some cases, you may want to annotate computed properties with additional
         * metadata about how they function or what values they operate on. For example,
         * computed property functions may close over variables that are then no longer
         * available for introspection.
         */
        meta(meta: {}): this;
        meta(): {};
    }

    /**
     * A computed property that returns true if the value of the dependent
     * property is null, an empty string, empty array, or empty function.
     */
    export function empty(dependentKey: string): ComputedProperty<boolean>;
    /**
     * A computed property that returns true if the value of the dependent
     * property is NOT null, an empty string, empty array, or empty function.
     */
    export function notEmpty(dependentKey: string): ComputedProperty<boolean>;
    /**
     * A computed property that returns true if the value of the dependent
     * property is null or undefined. This avoids errors from JSLint complaining
     * about use of ==, which can be technically confusing.
     */
    export function none(dependentKey: string): ComputedProperty<boolean>;
    /**
     * A computed property that returns the inverse boolean value
     * of the original value for the dependent property.
     */
    export function not(dependentKey: string): ComputedProperty<boolean>;
    /**
     * A computed property that converts the provided dependent property
     * into a boolean value.
     */
    export function bool(dependentKey: string): ComputedProperty<boolean>;
    /**
     * A computed property which matches the original value for the
     * dependent property against a given RegExp, returning `true`
     * if the value matches the RegExp and `false` if it does not.
     */
    export function match(dependentKey: string, regexp: RegExp): ComputedProperty<boolean>;
    /**
     * A computed property that returns true if the provided dependent property
     * is equal to the given value.
     */
    export function equal(dependentKey: string, value: any): ComputedProperty<boolean>;
    /**
     * A computed property that returns true if the provided dependent property
     * is greater than the provided value.
     */
    export function gt(dependentKey: string, value: number): ComputedProperty<boolean>;
    /**
     * A computed property that returns true if the provided dependent property
     * is greater than or equal to the provided value.
     */
    export function gte(dependentKey: string, value: number): ComputedProperty<boolean>;
    /**
     * A computed property that returns true if the provided dependent property
     * is less than the provided value.
     */
    export function lt(dependentKey: string, value: number): ComputedProperty<boolean>;
    /**
     * A computed property that returns true if the provided dependent property
     * is less than or equal to the provided value.
     */
    export function lte(dependentKey: string, value: number): ComputedProperty<boolean>;
    /**
     * A computed property that performs a logical `and` on the
     * original values for the provided dependent properties.
     */
    export function and(...dependentKeys: string[]): ComputedProperty<boolean>;
    /**
     * A computed property which performs a logical `or` on the
     * original values for the provided dependent properties.
     */
    export function or(...dependentKeys: string[]): ComputedProperty<boolean>;
    /**
     * Creates a new property that is an alias for another property
     * on an object. Calls to `get` or `set` this property behave as
     * though they were called on the original property.
     */
    export function alias(dependentKey: string): ComputedProperty<any>;
    /**
     * Where `computed.alias` aliases `get` and `set`, and allows for bidirectional
     * data flow, `computed.oneWay` only provides an aliased `get`. The `set` will
     * not mutate the upstream property, rather causes the current property to
     * become the value set. This causes the downstream property to permanently
     * diverge from the upstream property.
     */
    export function oneWay(dependentKey: string): ComputedProperty<any>;
    /**
     * This is a more semantically meaningful alias of `computed.oneWay`,
     * whose name is somewhat ambiguous as to which direction the data flows.
     */
    export function reads(dependentKey: string): ComputedProperty<any>;
    /**
     * Where `computed.oneWay` provides oneWay bindings, `computed.readOnly` provides
     * a readOnly one way binding. Very often when using `computed.oneWay` one does
     * not also want changes to propagate back up, as they will replace the value.
     */
    export function readOnly(dependentKey: string): ComputedProperty<any>;
    /**
     * Creates a new property that is an alias for another property
     * on an object. Calls to `get` or `set` this property behave as
     * though they were called on the original property, but also
     * print a deprecation warning.
     */
    export function deprecatingAlias(
        dependentKey: string,
        options: { id: string; until: string }
    ): ComputedProperty<any>;
    /**
     * @deprecated Missing deprecation options: https://emberjs.com/deprecations/v2.x/#toc_ember-debug-function-options
     */
    export function deprecatingAlias(
        dependentKey: string,
        options?: { id?: string; until?: string }
    ): ComputedProperty<any>;
    /**
     * A computed property that returns the sum of the values
     * in the dependent array.
     */
    export function sum(dependentKey: string): ComputedProperty<number>;
    /**
     * A computed property that calculates the maximum value in the
     * dependent array. This will return `-Infinity` when the dependent
     * array is empty.
     */
    export function max(dependentKey: string): ComputedProperty<number>;
    /**
     * A computed property that calculates the minimum value in the
     * dependent array. This will return `Infinity` when the dependent
     * array is empty.
     */
    export function min(dependentKey: string): ComputedProperty<number>;
    /**
     * Returns an array mapped via the callback
     */
    export function map<U>(
        dependentKey: string,
        callback: (value: any, index: number, array: any[]) => U
    ): ComputedProperty<U[]>;
    /**
     * Returns an array mapped to the specified key.
     */
    export function mapBy(dependentKey: string, propertyKey: string): ComputedProperty<any[]>;
    /**
     * Filters the array by the callback.
     */
    export function filter(
        dependentKey: string,
        callback: (value: any, index: number, array: any[]) => boolean
    ): ComputedProperty<any[]>;
    /**
     * Filters the array by the property and value
     */
    export function filterBy(
        dependentKey: string,
        propertyKey: string,
        value?: any
    ): ComputedProperty<any[]>;
    /**
     * A computed property which returns a new array with all the unique
     * elements from one or more dependent arrays.
     */
    export function uniq(propertyKey: string): ComputedProperty<any[]>;
    /**
     * A computed property which returns a new array with all the unique
     * elements from an array, with uniqueness determined by specific key.
     */
    export function uniqBy(dependentKey: string, propertyKey: string): ComputedProperty<any[]>;
    /**
     * A computed property which returns a new array with all the unique
     * elements from one or more dependent arrays.
     */
    export function union(...propertyKeys: string[]): ComputedProperty<any[]>;
    /**
     * A computed property which returns a new array with all the elements
     * two or more dependent arrays have in common.
     */
    export function intersect(...propertyKeys: string[]): ComputedProperty<any[]>;
    /**
     * A computed property which returns a new array with all the
     * properties from the first dependent array that are not in the second
     * dependent array.
     */
    export function setDiff(setAProperty: string, setBProperty: string): ComputedProperty<any[]>;
    /**
     * A computed property that returns the array of values
     * for the provided dependent properties.
     */
    export function collect(...dependentKeys: string[]): ComputedProperty<any[]>;
    /**
     * A computed property which returns a new array with all the
     * properties from the first dependent array sorted based on a property
     * or sort function.
     */
    export function sort(
        itemsKey: string,
        sortDefinition: string | ((itemA: any, itemB: any) => number)
    ): ComputedProperty<any[]>;
}

declare module '@ember/object/core' {
    import Ember from 'ember';
    import Mixin from '@ember/object/mixin';

    /**
     * Check that any arguments to `create()` match the type's properties.
     *
     * Accept any additional properties and add merge them into the instance.
     */
    type EmberInstanceArguments<T> = Partial<T> & {
        [key: string]: any;
    };

    /**
     * Accept any additional properties and add merge them into the prototype.
     */
    interface EmberClassArguments {
        [key: string]: any;
    }

    /**
     * Map type `T` to a plain object hash with the identity mapping.
     *
     * Discards any additional object identity like the ability to `new()` up the class.
     * The `new()` capability is added back later by merging `EmberClassConstructor<T>`
     *
     * Implementation is carefully chosen for the reasons described in
     * https://github.com/typed-ember/ember-typings/pull/29
     */
    type Objectify<T> = Readonly<T>;

    /**
     * Ember.Object.extend(...) accepts any number of mixins or literals.
     */
    type MixinOrLiteral<T, Base> = Mixin<T, Base> | T;

    export default class CoreObject {
        /**
         * As of Ember 3.1, CoreObject constructor takes initial object properties as an argument.
         * See: https://github.com/emberjs/ember.js/commit/4709935854d4c29b0d2c054614d53fa2c55309b1
         **/
        constructor(properties?: object);

        _super(...args: any[]): any;

        /**
        An overridable method called when objects are instantiated. By default,
        does nothing unless it is overridden during class definition.
        **/
        init(): void;

        /**
         * Defines the properties that will be concatenated from the superclass (instead of overridden).
         * @default null
         */
        concatenatedProperties: any[];

        /**
        Destroyed object property flag. If this property is true the observers and bindings were
        already removed by the effect of calling the destroy() method.
        @default false
        **/
        isDestroyed: boolean;
        /**
        Destruction scheduled flag. The destroy() method has been called. The object stays intact
        until the end of the run loop at which point the isDestroyed flag is set.
        @default false
        **/
        isDestroying: boolean;

        /**
        Destroys an object by setting the `isDestroyed` flag and removing its
        metadata, which effectively destroys observers and bindings.
        If you try to set a property on a destroyed object, an exception will be
        raised.
        Note that destruction is scheduled for the end of the run loop and does not
        happen immediately.  It will set an isDestroying flag immediately.
        @return receiver
        */
        destroy(): CoreObject;

        /**
        Override to implement teardown.
        */
        willDestroy(): void;

        /**
        Returns a string representation which attempts to provide more information than Javascript's toString
        typically does, in a generic way for all Ember objects (e.g., "<App.Person:ember1024>").
        @return string representation
        **/
        toString(): string;

        static create<Instance>(this: Ember.EmberClassConstructor<Instance>): Ember.Fix<Instance>;

        static create<Instance, Args, T1 extends EmberInstanceArguments<Args>>(
            this: Ember.EmberClassConstructor<Instance & Ember.ComputedPropertyGetters<Args>>,
            arg1: T1 & ThisType<Ember.Fix<T1 & Instance>>
        ): Ember.Fix<Instance & T1>;

        static create<
            Instance,
            Args,
            T1 extends EmberInstanceArguments<Args>,
            T2 extends EmberInstanceArguments<Args>
        >(
            this: Ember.EmberClassConstructor<Instance & Ember.ComputedPropertyGetters<Args>>,
            arg1: T1 & ThisType<Ember.Fix<Instance & T1>>,
            arg2: T2 & ThisType<Ember.Fix<Instance & T1 & T2>>
        ): Ember.Fix<Instance & T1 & T2>;

        static create<
            Instance,
            Args,
            T1 extends EmberInstanceArguments<Args>,
            T2 extends EmberInstanceArguments<Args>,
            T3 extends EmberInstanceArguments<Args>
        >(
            this: Ember.EmberClassConstructor<Instance & Ember.ComputedPropertyGetters<Args>>,
            arg1: T1 & ThisType<Ember.Fix<Instance & T1>>,
            arg2: T2 & ThisType<Ember.Fix<Instance & T1 & T2>>,
            arg3: T3 & ThisType<Ember.Fix<Instance & T1 & T2 & T3>>
        ): Ember.Fix<Instance & T1 & T2 & T3>;

        static extend<Statics, Instance>(
            this: Statics & Ember.EmberClassConstructor<Instance>
        ): Objectify<Statics> & Ember.EmberClassConstructor<Instance>;

        static extend<Statics, Instance extends B1, T1 extends EmberClassArguments, B1>(
            this: Statics & Ember.EmberClassConstructor<Instance>,
            arg1: MixinOrLiteral<T1, B1> & ThisType<Ember.Fix<Instance & T1>>
        ): Objectify<Statics> & Ember.EmberClassConstructor<T1 & Instance>;

        static extend<
            Statics,
            Instance extends B1 & B2,
            T1 extends EmberClassArguments,
            B1,
            T2 extends EmberClassArguments,
            B2
        >(
            this: Statics & Ember.EmberClassConstructor<Instance>,
            arg1: MixinOrLiteral<T1, B1> & ThisType<Ember.Fix<Instance & T1>>,
            arg2: MixinOrLiteral<T2, B2> & ThisType<Ember.Fix<Instance & T1 & T2>>
        ): Objectify<Statics> & Ember.EmberClassConstructor<T1 & T2 & Instance>;

        static extend<
            Statics,
            Instance extends B1 & B2 & B3,
            T1 extends EmberClassArguments,
            B1,
            T2 extends EmberClassArguments,
            B2,
            T3 extends EmberClassArguments,
            B3
        >(
            this: Statics & Ember.EmberClassConstructor<Instance>,
            arg1: MixinOrLiteral<T1, B1> & ThisType<Ember.Fix<Instance & T1>>,
            arg2: MixinOrLiteral<T2, B2> & ThisType<Ember.Fix<Instance & T1 & T2>>,
            arg3: MixinOrLiteral<T3, B3> & ThisType<Ember.Fix<Instance & T1 & T2 & T3>>
        ): Objectify<Statics> & Ember.EmberClassConstructor<T1 & T2 & T3 & Instance>;

        static extend<
            Statics,
            Instance extends B1 & B2 & B3 & B4,
            T1 extends EmberClassArguments,
            B1,
            T2 extends EmberClassArguments,
            B2,
            T3 extends EmberClassArguments,
            B3,
            T4 extends EmberClassArguments,
            B4
        >(
            this: Statics & Ember.EmberClassConstructor<Instance>,
            arg1: MixinOrLiteral<T1, B1> & ThisType<Ember.Fix<Instance & T1>>,
            arg2: MixinOrLiteral<T2, B2> & ThisType<Ember.Fix<Instance & T1 & T2>>,
            arg3: MixinOrLiteral<T3, B3> & ThisType<Ember.Fix<Instance & T1 & T2 & T3>>,
            arg4: MixinOrLiteral<T4, B4> & ThisType<Ember.Fix<Instance & T1 & T2 & T3 & T4>>
        ): Objectify<Statics> & Ember.EmberClassConstructor<T1 & T2 & T3 & T4 & Instance>;

        static reopen<Statics, Instance>(
            this: Statics & Ember.EmberClassConstructor<Instance>
        ): Objectify<Statics> & Ember.EmberClassConstructor<Instance>;

        static reopen<Statics, Instance extends B1, T1 extends EmberClassArguments, B1>(
            this: Statics & Ember.EmberClassConstructor<Instance>,
            arg1: MixinOrLiteral<T1, B1> & ThisType<Ember.Fix<Instance & T1>>
        ): Objectify<Statics> & Ember.EmberClassConstructor<Instance & T1>;

        static reopen<
            Statics,
            Instance extends B1 & B2,
            T1 extends EmberClassArguments,
            B1,
            T2 extends EmberClassArguments,
            B2
        >(
            this: Statics & Ember.EmberClassConstructor<Instance>,
            arg1: MixinOrLiteral<T1, B1> & ThisType<Ember.Fix<Instance & T1>>,
            arg2: MixinOrLiteral<T2, B2> & ThisType<Ember.Fix<Instance & T1 & T2>>
        ): Objectify<Statics> & Ember.EmberClassConstructor<Instance & T1 & T2>;

        static reopen<
            Statics,
            Instance extends B1 & B2 & B3,
            T1 extends EmberClassArguments,
            B1,
            T2 extends EmberClassArguments,
            B2,
            T3 extends EmberClassArguments,
            B3
        >(
            this: Statics & Ember.EmberClassConstructor<Instance>,
            arg1: MixinOrLiteral<T1, B1> & ThisType<Ember.Fix<Instance & T1>>,
            arg2: MixinOrLiteral<T2, B2> & ThisType<Ember.Fix<Instance & T1 & T2>>,
            arg3: MixinOrLiteral<T3, B3> & ThisType<Ember.Fix<Instance & T1 & T2 & T3>>
        ): Objectify<Statics> & Ember.EmberClassConstructor<Instance & T1 & T2 & T3>;

        static reopenClass<Statics>(this: Statics): Statics;

        static reopenClass<Statics, T1 extends EmberClassArguments>(
            this: Statics,
            arg1: T1
        ): Statics & T1;

        static reopenClass<
            Statics,
            T1 extends EmberClassArguments,
            T2 extends EmberClassArguments
        >(this: Statics, arg1: T1, arg2: T2): Statics & T1 & T2;

        static reopenClass<
            Statics,
            T1 extends EmberClassArguments,
            T2 extends EmberClassArguments,
            T3 extends EmberClassArguments
        >(this: Statics, arg1: T1, arg2: T2, arg3: T3): Statics & T1 & T2 & T3;

        static detect<Statics, Instance>(
            this: Statics & Ember.EmberClassConstructor<Instance>,
            obj: any
        ): obj is Objectify<Statics> & Ember.EmberClassConstructor<Instance>;

        static detectInstance<Instance>(
            this: Ember.EmberClassConstructor<Instance>,
            obj: any
        ): obj is Instance;

        /**
         Iterate over each computed property for the class, passing its name and any
        associated metadata (see metaForProperty) to the callback.
        **/
        static eachComputedProperty(callback: Function, binding: {}): void;
        /**
         Returns the original hash that was passed to meta().
        @param key property name
        **/
        static metaForProperty(key: string): {};
        static isClass: boolean;
        static isMethod: boolean;
    }
}

declare module '@ember/object/evented' {
    import Mixin from '@ember/object/mixin';

    /**
     * This mixin allows for Ember objects to subscribe to and emit events.
     */
    interface Evented {
        /**
         * Subscribes to a named event with given function.
         */
        on<Target>(
            name: string,
            target: Target,
            method: (this: Target, ...args: any[]) => void
        ): this;
        on(name: string, method: (...args: any[]) => void): this;
        /**
         * Subscribes a function to a named event and then cancels the subscription
         * after the first time the event is triggered. It is good to use ``one`` when
         * you only care about the first time an event has taken place.
         */
        one<Target>(
            name: string,
            target: Target,
            method: (this: Target, ...args: any[]) => void
        ): this;
        one(name: string, method: (...args: any[]) => void): this;
        /**
         * Triggers a named event for the object. Any additional arguments
         * will be passed as parameters to the functions that are subscribed to the
         * event.
         */
        trigger(name: string, ...args: any[]): any;
        /**
         * Cancels subscription for given name, target, and method.
         */
        off<Target>(
            name: string,
            target: Target,
            method: (this: Target, ...args: any[]) => void
        ): this;
        off(name: string, method: (...args: any[]) => void): this;
        /**
         * Checks to see if object has any subscriptions for named event.
         */
        has(name: string): boolean;
    }
    const Evented: Mixin<Evented>;
    export default Evented;

    /**
     * Define a property as a function that should be executed when
     * a specified event or events are triggered.
     */
    export function on(eventNames: string, func: (...args: any[]) => void): (...args: any[]) => void;
}

declare module '@ember/object/events' {
    import Ember from 'ember';

    /**
     * Add an event listener
     */
    export function addListener<Context, Target>(
        obj: Context,
        key: keyof Context,
        target: Target,
        method: Ember.ObserverMethod<Target, Context>,
        once?: boolean
    ): void;
    export function addListener<Context>(
        obj: Context,
        key: keyof Context,
        method: Ember.ObserverMethod<Context, Context>
    ): void;

    /**
     * Remove an event listener
     */
    export function removeListener<Context, Target>(
        obj: Context,
        key: keyof Context,
        target: Target,
        method: Ember.ObserverMethod<Target, Context>
    ): any;
    export function removeListener<Context>(
        obj: Context,
        key: keyof Context,
        method: Ember.ObserverMethod<Context, Context>
    ): void;

    /**
     * Send an event. The execution of suspended listeners
     * is skipped, and once listeners are removed. A listener without
     * a target is executed on the passed object. If an array of actions
     * is not passed, the actions stored on the passed object are invoked.
     */
    export function sendEvent(obj: any, eventName: string, params?: any[], actions?: any[]): boolean;
}

declare module '@ember/object/internals' {
    import Ember from 'ember';

    /**
     * Returns the cached value for a property, if one exists.
     * This can be useful for peeking at the value of a computed
     * property that is generated lazily, without accidentally causing
     * it to be created.
     */
    export function cacheFor<T, K extends keyof T>(
        obj: Ember.ComputedPropertyGetters<T>,
        key: K
    ): T[K] | undefined;

    /**
     * Creates a shallow copy of the passed object. A deep copy of the object is
     * returned if the optional `deep` argument is `true`.
     */
    export function copy(obj: any, deep?: boolean): any;

    /**
     * Returns a unique id for the object. If the object does not yet have a guid,
     * one will be assigned to it. You can call this on any object,
     * `Ember.Object`-based or not, but be aware that it will add a `_guid`
     * property.
     */
    export function guidFor(obj: any): string;
}

declare module '@ember/object/mixin' {
    import Ember from 'ember';
    import EmberObject from '@ember/object';

    type MixinOrLiteral<T, Base> = Mixin<T, Base> | T;

    /**
     * The `Ember.Mixin` class allows you to create mixins, whose properties can be
     * added to other classes.
     */
    export default class Mixin<T, Base = EmberObject> {
        /**
         * Mixin needs to have *something* on its prototype, otherwise it's treated like an empty interface.
         * It cannot be private, sadly.
         */
        __ember_mixin__: never;

        static create<T, Base = EmberObject>(
            args?: MixinOrLiteral<T, Base> & ThisType<Ember.Fix<T & Base>>
        ): Mixin<T, Base>;

        static create<T1, T2, Base = EmberObject>(
            arg1: MixinOrLiteral<T1, Base> & ThisType<Ember.Fix<T1 & Base>>,
            arg2: MixinOrLiteral<T2, Base> & ThisType<Ember.Fix<T2 & Base>>
        ): Mixin<T1 & T2, Base>;

        static create<T1, T2, T3, Base = EmberObject>(
            arg1: MixinOrLiteral<T1, Base> & ThisType<Ember.Fix<T1 & Base>>,
            arg2: MixinOrLiteral<T2, Base> & ThisType<Ember.Fix<T2 & Base>>,
            arg3: MixinOrLiteral<T3, Base> & ThisType<Ember.Fix<T3 & Base>>
        ): Mixin<T1 & T2 & T3, Base>;

        static create<T1, T2, T3, T4, Base = EmberObject>(
            arg1: MixinOrLiteral<T1, Base> & ThisType<Ember.Fix<T1 & Base>>,
            arg2: MixinOrLiteral<T2, Base> & ThisType<Ember.Fix<T2 & Base>>,
            arg3: MixinOrLiteral<T3, Base> & ThisType<Ember.Fix<T3 & Base>>,
            arg4: MixinOrLiteral<T4, Base> & ThisType<Ember.Fix<T4 & Base>>
        ): Mixin<T1 & T2 & T3 & T4, Base>;
    }
}

declare module '@ember/object/observable' {
    import Ember from 'ember';
    import Mixin from '@ember/object/mixin';
    import CoreObject from '@ember/object/core';

    /**
     * This mixin provides properties and property observing functionality, core features of the Ember object model.
     */
    interface Observable {
        /**
         * Retrieves the value of a property from the object.
         */
        get<T, K extends keyof T>(this: Ember.ComputedPropertyGetters<T>, key: K): T[K];
        /**
         * To get the values of multiple properties at once, call `getProperties`
         * with a list of strings or an array:
         */
        getProperties<T, K extends keyof T>(this: Ember.ComputedPropertyGetters<T>, list: K[]): Pick<T, K>;
        getProperties<T, K extends keyof T>(
            this: Ember.ComputedPropertyGetters<T>,
            ...list: K[]
        ): Pick<T, K>;
        /**
         * Sets the provided key or path to the value.
         */
        set<T, K extends keyof T>(this: Ember.ComputedPropertySetters<T>, key: K, value: T[K]): T[K];
        /**
         * Sets a list of properties at once. These properties are set inside
         * a single `beginPropertyChanges` and `endPropertyChanges` batch, so
         * observers will be buffered.
         */
        setProperties<T, K extends keyof T>(
            this: Ember.ComputedPropertySetters<T>,
            hash: Pick<T, K>
        ): Pick<T, K>;
        /**
         * Convenience method to call `propertyWillChange` and `propertyDidChange` in
         * succession.
         */
        notifyPropertyChange(keyName: string): this;
        /**
         * Adds an observer on a property.
         */
        addObserver<Target>(
            key: keyof this,
            target: Target,
            method: Ember.ObserverMethod<Target, this>
        ): void;
        addObserver(
            key: keyof this,
            method: Ember.ObserverMethod<this, this>
        ): void;
        /**
         * Remove an observer you have previously registered on this object. Pass
         * the same key, target, and method you passed to `addObserver()` and your
         * target will no longer receive notifications.
         */
        removeObserver<Target>(
            key: keyof this,
            target: Target,
            method: Ember.ObserverMethod<Target, this>
        ): any;
        removeObserver(
            key: keyof this,
            method: Ember.ObserverMethod<this, this>
        ): any;
        /**
         * Retrieves the value of a property, or a default value in the case that the
         * property returns `undefined`.
         */
        getWithDefault<T, K extends keyof T>(
            this: Ember.ComputedPropertyGetters<T>,
            key: K,
            defaultValue: T[K]
        ): T[K];
        /**
         * Set the value of a property to the current value plus some amount.
         */
        incrementProperty(keyName: keyof this, increment?: number): number;
        /**
         * Set the value of a property to the current value minus some amount.
         */
        decrementProperty(keyName: keyof this, decrement?: number): number;
        /**
         * Set the value of a boolean property to the opposite of its
         * current value.
         */
        toggleProperty(keyName: keyof this): boolean;
        /**
         * Returns the cached value of a computed property, if it exists.
         * This allows you to inspect the value of a computed property
         * without accidentally invoking it if it is intended to be
         * generated lazily.
         */
        cacheFor<T, K extends keyof T>(this: Ember.ComputedPropertyGetters<T>, key: K): T[K] | undefined;
    }
    const Observable: Mixin<Observable, CoreObject>;
    export default Observable;
}

declare module '@ember/object/observers' {
    import Ember from 'ember';

    /**
     * Adds an observer on a property.
     */
    export function addObserver<Context, Target>(
        obj: Context,
        key: keyof Context,
        target: Target,
        method: Ember.ObserverMethod<Target, Context>
    ): void;
    export function addObserver<Context>(
        obj: Context,
        key: keyof Context,
        method: Ember.ObserverMethod<Context, Context>
    ): void;

    /**
     * Remove an observer you have previously registered on this object. Pass
     * the same key, target, and method you passed to `addObserver()` and your
     * target will no longer receive notifications.
     */
    export function removeObserver<Context, Target>(
        obj: Context,
        key: keyof Context,
        target: Target,
        method: Ember.ObserverMethod<Target, Context>
    ): any;
    export function removeObserver<Context>(
        obj: Context,
        key: keyof Context,
        method: Ember.ObserverMethod<Context, Context>
    ): void;
}

declare module '@ember/object/promise-proxy-mixin' {
    import RSVP from 'rsvp';
    import Mixin from '@ember/object/mixin';

    /**
     * A low level mixin making ObjectProxy promise-aware.
     */
    interface PromiseProxyMixin<T> extends RSVP.Promise<T> {
        /**
         * If the proxied promise is rejected this will contain the reason
         * provided.
         */
        reason: any;
        /**
         * Once the proxied promise has settled this will become `false`.
         */
        isPending: boolean;
        /**
         * Once the proxied promise has settled this will become `true`.
         */
        isSettled: boolean;
        /**
         * Will become `true` if the proxied promise is rejected.
         */
        isRejected: boolean;
        /**
         * Will become `true` if the proxied promise is fulfilled.
         */
        isFulfilled: boolean;
        /**
         * The promise whose fulfillment value is being proxied by this object.
         */
        promise: RSVP.Promise<T>;
    }
    const PromiseProxyMixin: Mixin<PromiseProxyMixin<any>>;
    export default PromiseProxyMixin;
}

declare module '@ember/object/proxy' {
    import EmberObject from '@ember/object';

    /**
     * `Ember.ObjectProxy` forwards all properties not defined by the proxy itself
     * to a proxied `content` object.
     */
    export default class ObjectProxy extends EmberObject {
        /**
        The object whose properties will be forwarded.
        **/
        content: EmberObject;
    }
}

declare module '@ember/polyfills' {
    /**
     * Copy properties from a source object to a target object.
     * @deprecated Use Object.assign
     */
    export function assign<T, U>(target: T, source: U): T & U;
    export function assign<T, U, V>(target: T, source1: U, source2: V): T & U & V;
    export function assign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;

    /**
     * Polyfill for Object.create
     * @deprecated Use Object.create
     */
    export function create(o: object | null): any;

    /**
     * Polyfill for Object.keys
     * @deprecated Use Object.keys
     */
    export function keys(o: any): string[];

    /**
     * Merge the contents of two objects together into the first object.
     * @deprecated Use Object.assign
     */
    export function merge<T, U>(original: T, updates: U): T & U;

    export const hasPropertyAccessors: boolean;
}

declare module '@ember/routing/auto-location' {
    import EmberObject from '@ember/object';

    /**
    AutoLocation will select the best location option based off browser support with the priority order: history, hash, none.
    **/
    export default class AutoLocation extends EmberObject {}
}

declare module '@ember/routing/hash-location' {
    import EmberObject from '@ember/object';

    /**
     * `Ember.HashLocation` implements the location API using the browser's
     * hash. At present, it relies on a `hashchange` event existing in the
     * browser.
     */
    export default class HashLocation extends EmberObject {}
}

declare module '@ember/routing/history-location' {
    import EmberObject from '@ember/object';

    /**
     * Ember.HistoryLocation implements the location API using the browser's
     * history.pushState API.
     */
    export default class HistoryLocation extends EmberObject {}
}

declare module '@ember/routing/link-component' {
    import Component from '@ember/component';

    /**
     * `Ember.LinkComponent` renders an element whose `click` event triggers a
     * transition of the application's instance of `Ember.Router` to
     * a supplied route by name.
     */
    export default class LinkComponent extends Component {
        /**
         * Used to determine when this `LinkComponent` is active.
         */
        currentWhen: any;
        /**
         * Sets the `title` attribute of the `LinkComponent`'s HTML element.
         */
        title: string | null;
        /**
         * Sets the `rel` attribute of the `LinkComponent`'s HTML element.
         */
        rel: string | null;
        /**
         * Sets the `tabindex` attribute of the `LinkComponent`'s HTML element.
         */
        tabindex: string | null;
        /**
         * Sets the `target` attribute of the `LinkComponent`'s HTML element.
         */
        target: string | null;
        /**
         * The CSS class to apply to `LinkComponent`'s element when its `active`
         * property is `true`.
         */
        activeClass: string;
        /**
         * Determines whether the `LinkComponent` will trigger routing via
         * the `replaceWith` routing strategy.
         */
        replace: boolean;
    }
}

declare module '@ember/routing/location' {
    /**
     * Ember.Location returns an instance of the correct implementation of
     * the `location` API.
     */
    const Location: {
        /**
         * This is deprecated in favor of using the container to lookup the location
         * implementation as desired.
         * @deprecated Use the container to lookup the location implementation that you need.
         */
        create(options?: {}): any;
    };

    export default Location;
}

declare module '@ember/routing/none-location' {
    import EmberObject from '@ember/object';

    /**
     * Ember.NoneLocation does not interact with the browser. It is useful for
     * testing, or when you need to manage state with your Router, but temporarily
     * don't want it to muck with the URL (for example when you embed your
     * application in a larger page).
     */
    export default class NoneLocation extends EmberObject {}
}

declare module '@ember/routing/route' {
    import Ember from 'ember';
    import EmberObject from '@ember/object';
    import Evented from '@ember/object/evented';
    import Controller, { Registry as ControllerRegistry } from '@ember/controller';

    interface RenderOptions {
        into?: string;
        controller?: string;
        model?: any;
        outlet?: string;
        view?: string;
    }

    interface RouteQueryParam {
        refreshModel?: boolean;
        replace?: boolean;
        as?: string;
    }

    /**
     The `Ember.Route` class is used to define individual routes. Refer to
    the [routing guide](http://emberjs.com/guides/routing/) for documentation.
    */
    export default class Route extends EmberObject.extend(Ember.ActionHandler, Evented) {
        // methods
        /**
        This hook is called after this route's model has resolved.
        It follows identical async/promise semantics to `beforeModel`
        but is provided the route's resolved model in addition to
        the `transition`, and is therefore suited to performing
        logic that can only take place after the model has already
        resolved.
        */
        afterModel(resolvedModel: any, transition: Ember.Transition): any;

        /**
        This hook is the first of the route entry validation hooks
        called when an attempt is made to transition into a route
        or one of its children. It is called before `model` and
        `afterModel`, and is appropriate for cases when:
        1) A decision can be made to redirect elsewhere without
            needing to resolve the model first.
        2) Any async operations need to occur first before the
            model is attempted to be resolved.
        This hook is provided the current `transition` attempt
        as a parameter, which can be used to `.abort()` the transition,
        save it for a later `.retry()`, or retrieve values set
        on it from a previous hook. You can also just call
        `this.transitionTo` to another route to implicitly
        abort the `transition`.
        You can return a promise from this hook to pause the
        transition until the promise resolves (or rejects). This could
        be useful, for instance, for retrieving async code from
        the server that is required to enter a route.
        */
        beforeModel(transition: Ember.Transition): any;

        /**
         * Returns the controller for a particular route or name.
         * The controller instance must already have been created, either through entering the
         * associated route or using `generateController`.
         */
        controllerFor<K extends keyof ControllerRegistry>(name: K): ControllerRegistry[K];

        /**
         * Disconnects a view that has been rendered into an outlet.
         */
        disconnectOutlet(options: string | { outlet?: string; parentView?: string }): void;

        /**
         * A hook you can implement to convert the URL into the model for
         * this route.
         */
        model(params: {}, transition: Ember.Transition): any;

        /**
         * Returns the model of a parent (or any ancestor) route
         * in a route hierarchy.  During a transition, all routes
         * must resolve a model object, and if a route
         * needs access to a parent route's model in order to
         * resolve a model (or just reuse the model from a parent),
         * it can call `this.modelFor(theNameOfParentRoute)` to
         * retrieve it.
         */
        modelFor(name: string): {};

        /**
         * Retrieves parameters, for current route using the state.params
         * variable and getQueryParamsFor, using the supplied routeName.
         */
        paramsFor(name: string): {};

        /**
         * Refresh the model on this route and any child routes, firing the
         * `beforeModel`, `model`, and `afterModel` hooks in a similar fashion
         * to how routes are entered when transitioning in from other route.
         * The current route params (e.g. `article_id`) will be passed in
         * to the respective model hooks, and if a different model is returned,
         * `setupController` and associated route hooks will re-fire as well.
         * An example usage of this method is re-querying the server for the
         * latest information using the same parameters as when the route
         * was first entered.
         * Note that this will cause `model` hooks to fire even on routes
         * that were provided a model object when the route was initially
         * entered.
         */
        redirect(): Ember.Transition;

        /**
         * Refresh the model on this route and any child routes, firing the
         * `beforeModel`, `model`, and `afterModel` hooks in a similar fashion
         * to how routes are entered when transitioning in from other route.
         * The current route params (e.g. `article_id`) will be passed in
         * to the respective model hooks, and if a different model is returned,
         * `setupController` and associated route hooks will re-fire as well.
         * An example usage of this method is re-querying the server for the
         * latest information using the same parameters as when the route
         * was first entered.
         * Note that this will cause `model` hooks to fire even on routes
         * that were provided a model object when the route was initially
         * entered.
         */
        refresh(): Ember.Transition;

        /**
         * `render` is used to render a template into a region of another template
         * (indicated by an `{{outlet}}`). `render` is used both during the entry
         * phase of routing (via the `renderTemplate` hook) and later in response to
         * user interaction.
         */
        render(name: string, options?: RenderOptions): void;

        /**
         * A hook you can use to render the template for the current route.
         * This method is called with the controller for the current route and the
         * model supplied by the `model` hook. By default, it renders the route's
         * template, configured with the controller for the route.
         * This method can be overridden to set up and render additional or
         * alternative templates.
         */
        renderTemplate(controller: Controller, model: {}): void;

        /**
         * Transition into another route while replacing the current URL, if possible.
         * This will replace the current history entry instead of adding a new one.
         * Beside that, it is identical to `transitionTo` in all other respects. See
         * 'transitionTo' for additional information regarding multiple models.
         */
        replaceWith(name: string, ...args: any[]): Ember.Transition;

        /**
         * A hook you can use to reset controller values either when the model
         * changes or the route is exiting.
         */
        resetController(controller: Controller, isExiting: boolean, transition: any): void;

        /**
         * Sends an action to the router, which will delegate it to the currently active
         * route hierarchy per the bubbling rules explained under actions.
         */
        send(name: string, ...args: any[]): void;

        /**
         * A hook you can implement to convert the route's model into parameters
         * for the URL.
         *
         * The default `serialize` method will insert the model's `id` into the
         * route's dynamic segment (in this case, `:post_id`) if the segment contains '_id'.
         * If the route has multiple dynamic segments or does not contain '_id', `serialize`
         * will return `Ember.getProperties(model, params)`
         * This method is called when `transitionTo` is called with a context
         * in order to populate the URL.
         */
        serialize(model: {}, params: string[]): string | object;

        /**
         * A hook you can use to setup the controller for the current route.
         * This method is called with the controller for the current route and the
         * model supplied by the `model` hook.
         * By default, the `setupController` hook sets the `model` property of
         * the controller to the `model`.
         * If you implement the `setupController` hook in your Route, it will
         * prevent this default behavior. If you want to preserve that behavior
         * when implementing your `setupController` function, make sure to call
         * `_super`
         */
        setupController(controller: Controller, model: {}): void;

        /**
         * Transition the application into another route. The route may
         * be either a single route or route path
         */
        transitionTo(name: string, ...object: any[]): Ember.Transition;

        /**
         * The name of the view to use by default when rendering this routes template.
         * When rendering a template, the route will, by default, determine the
         * template and view to use from the name of the route itself. If you need to
         * define a specific view, set this property.
         * This is useful when multiple routes would benefit from using the same view
         * because it doesn't require a custom `renderTemplate` method.
         */
        transitionTo(name: string, ...object: any[]): Ember.Transition;

        // properties
        /**
         * The controller associated with this route.
         */
        controller: Controller;

        /**
         * The name of the controller to associate with this route.
         * By default, Ember will lookup a route's controller that matches the name
         * of the route (i.e. `App.PostController` for `App.PostRoute`). However,
         * if you would like to define a specific controller to use, you can do so
         * using this property.
         * This is useful in many ways, as the controller specified will be:
         * * p assed to the `setupController` method.
         * * used as the controller for the view being rendered by the route.
         * * returned from a call to `controllerFor` for the route.
         */
        controllerName: string;

        /**
         * Configuration hash for this route's queryParams.
         */
        queryParams: { [key: string]: RouteQueryParam };

        /**
         * The name of the route, dot-delimited
         */
        routeName: string;

        /**
         * The name of the template to use by default when rendering this routes
         * template.
         * This is similar with `viewName`, but is useful when you just want a custom
         * template without a view.
         */
        templateName: string;

        // events
        /**
         * This hook is executed when the router enters the route. It is not executed
         * when the model for the route changes.
         */
        activate(): void;

        /**
         * This hook is executed when the router completely exits this route. It is
         * not executed when the model for the route changes.
         */
        deactivate(): void;

        /**
         * The didTransition action is fired after a transition has successfully been
         * completed. This occurs after the normal model hooks (beforeModel, model,
         * afterModel, setupController) have resolved. The didTransition action has
         * no arguments, however, it can be useful for tracking page views or resetting
         * state on the controller.
         */
        didTransition(): void;

        /**
         * When attempting to transition into a route, any of the hooks may return a promise
         * that rejects, at which point an error action will be fired on the partially-entered
         * routes, allowing for per-route error handling logic, or shared error handling logic
         * defined on a parent route.
         */
        error(error: any, transition: Ember.Transition): void;

        /**
         * The loading action is fired on the route when a route's model hook returns a
         * promise that is not already resolved. The current Transition object is the first
         * parameter and the route that triggered the loading event is the second parameter.
         */
        loading(transition: Ember.Transition, route: Route): void;

        /**
         * The willTransition action is fired at the beginning of any attempted transition
         * with a Transition object as the sole argument. This action can be used for aborting,
         * redirecting, or decorating the transition from the currently active routes.
         */
        willTransition(transition: Ember.Transition): void;
    }
}

declare module '@ember/routing/router' {
    import Ember from 'ember';
    import EmberObject from '@ember/object';
    import Evented from '@ember/object/evented';

    /**
     * The `Ember.Router` class manages the application state and URLs. Refer to
     * the [routing guide](http://emberjs.com/guides/routing/) for documentation.
     */
    export default class EmberRouter extends EmberObject.extend(Evented) {
        /**
         * The `Router.map` function allows you to define mappings from URLs to routes
         * in your application. These mappings are defined within the
         * supplied callback function using `this.route`.
         */
        static map(callback: (this: Ember.RouterDSL) => void): void;
        /**
         * The `location` property determines the type of URL's that your
         * application will use.
         */
        location: string;
        /**
         * Represents the URL of the root of the application, often '/'. This prefix is
         * assumed on all routes defined on this router.
         */
        rootURL: string;
        /**
         * Handles updating the paths and notifying any listeners of the URL
         * change.
         */
        didTransition(): any;
        /**
         * Handles notifying any listeners of an impending URL
         * change.
         */
        willTransition(): any;
        /**
         * Transition the application into another route. The route may
         * be either a single route or route path:
         */
        transitionTo(name: string, options?: {}): Ember.Transition;
        transitionTo(name: string, ...models: any[]): Ember.Transition;
        transitionTo(name: string, options: {}): Ember.Transition;
    }
}

declare module '@ember/runloop' {
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

    /**
     * Runs the passed target and method inside of a RunLoop, ensuring any
     * deferred actions including bindings and views updates are flushed at the
     * end.
     */
    export function run<Ret>(method: (...args: any[]) => Ret): Ret;
    export function run<Target, Ret>(target: Target, method: RunMethod<Target, Ret>): Ret;

    /**
     * If no run-loop is present, it creates a new one. If a run loop is
     * present it will queue itself to run on the existing run-loops action
     * queue.
     */
    export function join<Ret>(method: (...args: any[]) => Ret, ...args: any[]): Ret | undefined;
    export function join<Target, Ret>(
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
    export function bind<Target, Ret>(
        target: Target,
        method: RunMethod<Target, Ret>,
        ...args: any[]
    ): (...args: any[]) => Ret;
    /**
     * Begins a new RunLoop. Any deferred actions invoked after the begin will
     * be buffered until you invoke a matching call to `run.end()`. This is
     * a lower-level way to use a RunLoop instead of using `run()`.
     */
    export function begin(): void;
    /**
     * Ends a RunLoop. This must be called sometime after you call
     * `run.begin()` to flush any deferred actions. This is a lower-level way
     * to use a RunLoop instead of using `run()`.
     */
    export function end(): void;
    /**
     * Adds the passed target/method and any optional arguments to the named
     * queue to be executed at the end of the RunLoop. If you have not already
     * started a RunLoop when calling this method one will be started for you
     * automatically.
     */
    export function schedule<Target>(
        queue: EmberRunQueues,
        target: Target,
        method: RunMethod<Target>,
        ...args: any[]
    ): EmberRunTimer;
    export function schedule(
        queue: EmberRunQueues,
        method: (args: any[]) => any,
        ...args: any[]
    ): EmberRunTimer;
    /**
     * Invokes the passed target/method and optional arguments after a specified
     * period of time. The last parameter of this method must always be a number
     * of milliseconds.
     */
    export function later(method: (...args: any[]) => any, wait: number): EmberRunTimer;
    export function later<Target>(target: Target, method: RunMethod<Target>, wait: number): EmberRunTimer;
    export function later<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        wait: number
    ): EmberRunTimer;
    export function later<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        wait: number
    ): EmberRunTimer;
    export function later<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        arg2: any,
        wait: number
    ): EmberRunTimer;
    export function later<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        arg2: any,
        arg3: any,
        wait: number
    ): EmberRunTimer;
    export function later<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        wait: number
    ): EmberRunTimer;
    export function later<Target>(
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
    export function once<Target>(target: Target, method: RunMethod<Target>, ...args: any[]): EmberRunTimer;
    /**
     * Schedules a function to run one time in a given queue of the current RunLoop.
     * Calling this method with the same queue/target/method combination will have
     * no effect (past the initial call).
     */
    export function scheduleOnce<Target>(
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
    export function next<Target>(target: Target, method: RunMethod<Target>, ...args: any[]): EmberRunTimer;
    /**
     * Cancels a scheduled item. Must be a value returned by `run.later()`,
     * `run.once()`, `run.scheduleOnce()`, `run.next()`, `run.debounce()`, or
     * `run.throttle()`.
     */
    export function cancel(timer: EmberRunTimer): boolean;
    /**
     * Delay calling the target method until the debounce period has elapsed
     * with no additional debounce calls. If `debounce` is called again before
     * the specified time has elapsed, the timer is reset and the entire period
     * must pass again before the target method is called.
     */
    export function debounce(
        method: (...args: any[]) => any,
        wait: number,
        immediate?: boolean
    ): EmberRunTimer;
    export function debounce<Target>(
        target: Target,
        method: RunMethod<Target>,
        wait: number,
        immediate?: boolean
    ): EmberRunTimer;
    export function debounce<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        wait: number,
        immediate?: boolean
    ): EmberRunTimer;
    export function debounce<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        wait: number,
        immediate?: boolean
    ): EmberRunTimer;
    export function debounce<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        arg2: any,
        wait: number,
        immediate?: boolean
    ): EmberRunTimer;
    export function debounce<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        arg2: any,
        arg3: any,
        wait: number,
        immediate?: boolean
    ): EmberRunTimer;
    export function debounce<Target>(
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
    export function debounce<Target>(
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
    export function throttle(
        method: (...args: any[]) => any,
        spacing: number,
        immediate?: boolean
    ): EmberRunTimer;
    export function throttle<Target>(
        target: Target,
        method: RunMethod<Target>,
        spacing: number,
        immediate?: boolean
    ): EmberRunTimer;
    export function throttle<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        spacing: number,
        immediate?: boolean
    ): EmberRunTimer;
    export function throttle<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        spacing: number,
        immediate?: boolean
    ): EmberRunTimer;
    export function throttle<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        arg2: any,
        spacing: number,
        immediate?: boolean
    ): EmberRunTimer;
    export function throttle<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        arg2: any,
        arg3: any,
        spacing: number,
        immediate?: boolean
    ): EmberRunTimer;
    export function throttle<Target>(
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
    export function throttle<Target>(
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
}

declare module '@ember/service' {
    import EmberObject from '@ember/object';
    import ComputedProperty from '@ember/object/computed';

    export default class Service extends EmberObject {}

    /**
     * Creates a property that lazily looks up a service in the container. There
     * are no restrictions as to what objects a service can be injected into.
     */
    export function inject(): ComputedProperty<Service>;
    export function inject<K extends keyof Registry>(
        name: K
    ): ComputedProperty<Registry[K]>;

    // A type registry for Ember `Service`s. Meant to be declaration-merged so
    // string lookups resolve to the correct type.
    interface Registry {}
}

declare module '@ember/string' {
    export function camelize(str: string): string;
    export function capitalize(str: string): string;
    export function classify(str: string): string;
    export function dasherize(str: string): string;
    export function decamelize(str: string): string;
    export function fmt(...args: string[]): string;
    export function htmlSafe(str: string): void; // TODO: @returns Handlebars.SafeStringStatic;
    export function isHTMLSafe(str: string): boolean;
    export function loc(...args: string[]): string;
    export function underscore(str: string): string;
    export function w(str: string): string[];
}

declare module '@ember/test' {
    import Application from '@ember/application';

    /**
     * `registerHelper` is used to register a test helper that will be injected
     * when `App.injectTestHelpers` is called.
     */
    export function registerHelper(
        name: string,
        helperMethod: (app: Application, ...args: any[]) => any,
        options?: object
    ): any;

    /**
     * `registerAsyncHelper` is used to register an async test helper that will be injected
     * when `App.injectTestHelpers` is called.
     */
    export function registerAsyncHelper(
        name: string,
        helperMethod: (app: Application, ...args: any[]) => any
    ): void;

    /**
     * Remove a previously added helper method.
     */
    export function unregisterHelper(name: string): void;

    /**
     * This allows ember-testing to play nicely with other asynchronous
     * events, such as an application that is waiting for a CSS3
     * transition or an IndexDB transaction. The waiter runs periodically
     * after each async helper (i.e. `click`, `andThen`, `visit`, etc) has executed,
     * until the returning result is truthy. After the waiters finish, the next async helper
     * is executed and the process repeats.
     */
    export function registerWaiter(callback: () => boolean): any;
    export function registerWaiter<Context>(
        context: Context,
        callback: (this: Context) => boolean
    ): any;

    /**
     * `unregisterWaiter` is used to unregister a callback that was
     * registered with `registerWaiter`.
     */
    export function unregisterWaiter(callback: () => boolean): any;
    export function unregisterWaiter<Context>(
        context: Context,
        callback: (this: Context) => boolean
    ): any;
}

declare module '@ember/test/adapter' {
    /**
     * The primary purpose of this class is to create hooks that can be implemented
     * by an adapter for various test frameworks.
     */
    export default class TestAdapter {
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
}

declare module '@ember/utils' {
    /**
     * A value is blank if it is empty or a whitespace string.
     */
    export function isBlank(obj: any): boolean;

    /**
     * Verifies that a value is `null` or an empty string, empty array,
     * or empty function.
     */
    export function isEmpty(obj: any): boolean;

    /**
     * Returns true if the passed value is null or undefined. This avoids errors
     * from JSLint complaining about use of ==, which can be technically
     * confusing.
     */
    export function isNone(obj: any): obj is null | undefined;

    /**
     * A value is present if it not `isBlank`.
     */
    export function isPresent(obj: any): boolean;

    /**
     * Compares two javascript values and returns:
     */
    export function compare(v: any, w: any): number;

    /**
     * Compares two objects, returning true if they are equal.
     */
    export function isEqual(a: any, b: any): boolean;

    /**
     * Returns a consistent type for the passed object.
     */
    export function typeOf(item: any): string;

    /**
     * Checks to see if the `methodName` exists on the `obj`,
     * and if it does, invokes it with the arguments passed.
     */
    export function tryInvoke(obj: any, methodName: string, args?: any[]): any;
}

declare module 'htmlbars-inline-precompile' {
    interface TemplateFactory {
        __htmlbars_inline_precompile_template_factory: any;
    }
    export default function hbs(tagged: TemplateStringsArray): TemplateFactory;
}
