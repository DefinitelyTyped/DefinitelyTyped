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
/// <reference types="ember__string" />
/// <reference types="ember__polyfills" />
/// <reference types="ember__object" />
/// <reference types="ember__utils" />
/// <reference types="ember__array" />
/// <reference types="ember__engine" />
/// <reference types="ember__debug" />
/// <reference types="ember__runloop" />
/// <reference types="ember__error" />
/// <reference types="ember__controller" />
/// <reference types="ember__component" />
/// <reference types="ember__routing" />
/// <reference types="ember__application" />
/// <reference types="ember__test" />
/// <reference types="ember__service" />

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
// tslint:disable-next-line:no-duplicate-imports
import * as EmberServiceNs from '@ember/service';
import * as EmberPolyfillsNs from '@ember/polyfills';
import * as EmberUtilsNs from '@ember/utils';
import * as EmberRunloopNs from '@ember/runloop';
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
import * as EmberApplicationNs from '@ember/application';
import * as EmberApplicationInstanceNs from '@ember/application/instance';
import * as EmberApplicationDeprecateNs from '@ember/application/deprecations';
import * as EmberTestNs from '@ember/test';
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
// @ember/run
import { RunMethod } from '@ember/runloop/-private/types';
// @ember/error
import EmberError from '@ember/error';

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
// @ember/application
import EmberDefaultResolver from '@ember/application/-private/default-resolver';
import EmberEventDispatcher from '@ember/application/-private/event-dispatcher';
import EmberRegistry from '@ember/application/-private/registry';
import EmberResolver from '@ember/application/resolver';
// @ember/test
import EmberTestAdapter from '@ember/test/adapter';

export namespace Ember {
    const A: typeof EmberArrayNs.A;
    const isArray: typeof EmberArrayNs.isArray;
    type Enumerable<T> = EmberEnumerable<T>;
    const Enumerable: typeof EmberEnumerable;
    class ArrayProxy<T> extends EmberArrayProxy<T> {}
    type Array<T> = EmberArray<T>;
    const Array: typeof EmberArrayNs.default;
    type MutableArray<T> = EmberMutableArray<T>;
    const MutableArray: typeof EmberMutableArray;
    type NativeArray<T> = EmberNativeArray<T>;
    const NativeArray: typeof EmberNativeArray;
    type MutableEnumerable<T> = EmberMutableEnumerable<T>;
    const MutableEnumerable: typeof EmberMutableEnumerable;
    class Router extends EmberRoutingRouter {}
    class Route extends EmberRoutingRoute {}
    const ActionHandler: typeof EmberActionHandler;
    class Controller extends EmberControllerNs.default {}
    class Component extends EmberComponent {}
    class TextArea extends EmberTextArea {}
    class TextField extends EmberTextField {}
    class Checkbox extends EmberCheckbox {}
    class Helper extends EmberHelper {}

    class HashLocation extends EmberRoutingHashLocation {}
    class NoneLocation extends EmberRoutingNoneLocation {}
    class HistoryLocation extends EmberRoutingHistoryLocation {}
    class LinkComponent extends EmberRoutingLinkComponent {}
    const deprecateFunc: typeof EmberApplicationDeprecateNs.deprecateFunc;
    const deprecate: typeof EmberApplicationDeprecateNs.deprecate;
    const getOwner: typeof EmberApplicationNs.getOwner;
    const setOwner: typeof EmberApplicationNs.setOwner;
    class DefaultResolver extends EmberDefaultResolver {}
    class Resolver extends EmberResolver {}
    class EventDispatcher extends EmberEventDispatcher {}
    class Registry extends EmberRegistry {}
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
     * Implements some standard methods for comparing objects. Add this mixin to
     * any class you create that can compare its instances.
     */
    interface Comparable {
        compare(a: any, b: any): number;
    }
    const Comparable: EmberMixin<Comparable>;
    class ComputedProperty<Get, Set = Get> extends EmberObjectComputedNs.default<Get, Set> {}
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
    class EngineInstance extends EmberEngineInstanceNs.default {}
    class Engine extends EmberEngineNs.default {}

    /**
     * A subclass of the JavaScript Error object for use in Ember.
     */
    const Error: typeof EmberError;

    const Evented: typeof EmberObjectEventedNs.default;

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

    class Service extends Object {}

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
    class Application extends EmberApplicationNs.default {}
    class ApplicationInstance extends EmberApplicationInstanceNs.default {}
    /**
     * This is a container for an assortment of testing related functionality
     */
    namespace Test {
        class Adapter extends EmberTestAdapter {}
        const registerHelper: typeof EmberTestNs.registerHelper;
        const unregisterHelper: typeof EmberTestNs.unregisterHelper;
        const registerWaiter: typeof EmberTestNs.registerWaiter;
        const unregisterWaiter: typeof EmberTestNs.unregisterWaiter;
        const registerAsyncHelper: typeof EmberTestNs.registerAsyncHelper;
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
        ): Promise<T>;
        /**
         * Replacement for `Ember.RSVP.resolve`
         * The only difference is this uses
         * an instance of `Ember.Test.Promise`
         */
        function resolve<T>(value?: T | PromiseLike<T>, label?: string): Promise<T>;

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
        const adapter: EmberTestAdapter;

        /**
         * This class implements the methods defined by Ember.Test.Adapter for the
         * QUnit testing framework.
         */
        class QUnitAdapter extends EmberTestAdapter {}
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
        function controller(): ComputedProperty<Controller>;
        function controller<K extends keyof ControllerRegistry>(
            name: K
        ): ComputedProperty<ControllerRegistry[K]>;
        const service: typeof EmberServiceNs.inject;
    }
    namespace ENV {
        const EXTEND_PROTOTYPES: {
            Array: boolean;
            Function: boolean;
            String: boolean;
        };
        const LOG_BINDINGS: boolean;
        const LOG_STACKTRACE_ON_DEPRECATION: boolean;
        const LOG_VERSION: boolean;
        const MODEL_FACTORY_INJECTIONS: boolean;
        const RAISE_ON_DEPRECATION: boolean;
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
        const logger: typeof Logger;
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
    const run: typeof EmberRunloopNs.run;
    const platform: {
        defineProperty: boolean;
        hasPropertyAccessors: boolean;
    };

    /**
     * `getEngineParent` retrieves an engine instance's parent instance.
     */
    function getEngineParent(engine: EngineInstance): EngineInstance;

    const assert: typeof EmberDebugNs.assert;
    const debug: typeof EmberDebugNs.debug;
    const defineProperty: typeof EmberObjectNs.defineProperty;

    const runInDebug: typeof EmberDebugNs.runInDebug;
    const warn: typeof EmberDebugNs.warn;
    const cacheFor: typeof EmberObjectInternalsNs.cacheFor;
    const addListener: typeof EmberObjectEventsNs.addListener;
    const removeListener: typeof EmberObjectEventsNs.removeListener;
    const sendEvent: typeof EmberObjectEventsNs.sendEvent;
    const on: typeof EmberObjectEventedNs.on;

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
     * Polyfill for Object.keys
     * @deprecated Use Object.keys
     */
    function keys(o: any): string[];
    const guidFor: typeof EmberObjectInternalsNs.guidFor;
    const inspect: typeof EmberDebugNs.inspect;
    const tryInvoke: typeof EmberUtilsNs.tryInvoke;

    /**
     * A function may be assigned to `Ember.onerror` to be called when Ember
     * internals encounter an error. This is useful for specialized error handling
     * and reporting code.
     */
    function onerror(error: Error): void;
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

    const expandProperties: typeof EmberObjectComputedNs.expandProperties;
}

export default Ember;

declare module 'htmlbars-inline-precompile' {
    interface TemplateFactory {
        __htmlbars_inline_precompile_template_factory: any;
    }
    // tslint:disable-next-line:strict-export-declare-modifiers
    export default function hbs(tagged: TemplateStringsArray): TemplateFactory;
}
