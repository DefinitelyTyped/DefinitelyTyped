// Capitalization is intentional: this makes it much easier to re-export RSVP on
// the Ember namespace.
import Rsvp from "rsvp";

import { Registry as ControllerRegistry } from "@ember/controller";
import * as EmberStringNs from "@ember/string";
import * as EmberTemplateNs from "@ember/template";
import * as EmberTemplateHandlebarsNs from "@ember/template/-private/handlebars";
// tslint:disable-next-line:no-duplicate-imports
import * as EmberObjectNs from "@ember/object";
import * as EmberObjectComputedNs from "@ember/object/computed";
import * as EmberObjectEventedNs from "@ember/object/evented";
import * as EmberObjectEventsNs from "@ember/object/events";
import * as EmberObjectInternalsNs from "@ember/object/internals";
import * as EmberObjectObserversNs from "@ember/object/observers";
import * as EmberObjectPromiseProxyNs from "@ember/object/promise-proxy-mixin";
import * as EmberObjectProxyNs from "@ember/object/proxy";
import * as EmberPolyfillsNs from "@ember/polyfills";
import * as EmberRunloopNs from "@ember/runloop";
import * as EmberServiceNs from "@ember/service";
import * as EmberUtilsNs from "@ember/utils";
// @ember/debug
import * as EmberDebugNs from "@ember/debug";
import _ContainerDebugAdapter from "@ember/debug/container-debug-adapter";
import EmberDataAdapter from "@ember/debug/data-adapter";
// @ember/engine
import * as EmberApplicationNs from "@ember/application";
import * as EmberApplicationInstanceNs from "@ember/application/instance";
import * as EmberEngineNs from "@ember/engine";
import _ContainerProxyMixin from "@ember/engine/-private/container-proxy-mixin";
import _RegistryProxyMixin from "@ember/engine/-private/registry-proxy-mixin";
import * as EmberEngineInstanceNs from "@ember/engine/instance";
import EmberCoreObject from "@ember/object/core";
import * as EmberTestNs from "@ember/test";
// tslint:disable-next-line:no-duplicate-imports
import * as EmberControllerNs from "@ember/controller";
// tslint:disable-next-line:no-duplicate-imports
import EmberMixin from "@ember/object/mixin";
import EmberObservable from "@ember/object/observable";
// @ember/array
import * as EmberArrayNs from "@ember/array";
import EmberEnumerable from "@ember/array/-private/enumerable";
import EmberMutableEnumerable from "@ember/array/-private/mutable-enumerable";
import EmberNativeArray from "@ember/array/-private/native-array";
import EmberMutableArray from "@ember/array/mutable";
import EmberArrayProxy from "@ember/array/proxy";
import EmberArrayProtoExtensions from "@ember/array/types/prototype-extensions";
// @ember/error
import EmberError from "@ember/error";

type EmberArray<T> = EmberArrayNs.default<T>;
import EmberComponent from "@ember/component";
import EmberHelper from "@ember/component/helper";
import EmberActionHandler from "@ember/object/-private/action-handler";
// @ember/routing
import EmberRoutingHashLocation from "@ember/routing/hash-location";
import EmberRoutingHistoryLocation from "@ember/routing/history-location";
import EmberRoutingNoneLocation from "@ember/routing/none-location";
import EmberRoutingRoute from "@ember/routing/route";
import EmberRoutingRouter from "@ember/routing/router";
// @ember/application
import EmberEventDispatcher from "@ember/application/-private/event-dispatcher";
import EmberRegistry from "@ember/application/-private/registry";
// @ember/test
import EmberTestAdapter from "@ember/test/adapter";

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
    class Helper extends EmberHelper {}

    class HashLocation extends EmberRoutingHashLocation {}
    class NoneLocation extends EmberRoutingNoneLocation {}
    class HistoryLocation extends EmberRoutingHistoryLocation {}
    const deprecate: typeof EmberDebugNs.deprecate;
    const getOwner: typeof EmberApplicationNs.getOwner;
    const setOwner: typeof EmberApplicationNs.setOwner;
    class EventDispatcher extends EmberEventDispatcher {}
    class Registry extends EmberRegistry {}
    interface ArrayPrototypeExtensions<T> extends EmberArrayProtoExtensions<T> {}

    /**
     * Implements some standard methods for comparing objects. Add this mixin to
     * any class you create that can compare its instances.
     */
    interface Comparable {
        compare(a: unknown, b: unknown): number;
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
        factoryFor(fullName: string, options?: {}): unknown;
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

    class Mixin<T, Base = EmberObjectNs.default> extends EmberMixin<T, Base> {}

    /**
     * A Namespace is an object usually used to contain other objects or methods
     * such as an application or framework. Create a namespace anytime you want
     * to define one of these new containers.
     */
    class Namespace extends Object {}

    class Service extends Object {}

    interface ViewTargetActionSupport {
        target: unknown;
        actionContext: unknown;
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
            resolver: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: unknown) => void) => void,
            label?: string,
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
                executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: unknown) => void) => void,
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
        function controller<K extends keyof ControllerRegistry>(name: K): ComputedProperty<ControllerRegistry[K]>;
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
        function createFrame(objec: any): any;
        function Exception(message: string): void;
        class SafeString extends EmberTemplateHandlebarsNs.SafeString {}
        function parse(string: string): any;
        function print(ast: any): void;
        function log(level: string, str: string): void;
        function registerHelper(name: string, helper: any): void;
    }
    namespace String {
        const camelize: typeof EmberStringNs.camelize;
        const capitalize: typeof EmberStringNs.capitalize;
        const classify: typeof EmberStringNs.classify;
        const dasherize: typeof EmberStringNs.dasherize;
        const decamelize: typeof EmberStringNs.decamelize;
        function fmt(...args: string[]): string;
        const htmlSafe: typeof EmberTemplateNs.htmlSafe;
        const isHTMLSafe: typeof EmberTemplateNs.isHTMLSafe;
        const underscore: typeof EmberStringNs.underscore;
        const w: typeof EmberStringNs.w;
    }
    namespace Template {
        const htmlSafe: typeof EmberTemplateNs.htmlSafe;
        const isHTMLSafe: typeof EmberTemplateNs.isHTMLSafe;
    }
    const computed: typeof EmberObjectNs.computed & typeof EmberObjectComputedNs;

    // Shenanigans to make `run` both callable and a namespace safely, while not
    // making the `run.bind` call resolve to `Function.prototype.bind`. (Yes,
    // insert :upside-down-smiley: here.)
    // 1. Get the type side of the namespace.
    type EmberRunloop = typeof EmberRunloopNs;
    // 2. Use it to get an interface representing the callable side of `run`.
    type RunFn = EmberRunloop["run"];
    // type RunFn = Pick<EmberRunloop, 'run'>['run'];
    // 3. Merge the two together so that the public-facing type of `run` is both
    //    the plucked-off run type *and* the namespace.
    interface Run extends RunFn, EmberRunloop {}
    const run: Run;

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

    const htmlSafe: typeof EmberTemplateNs.htmlSafe;
    const isHTMLSafe: typeof EmberTemplateNs.isHTMLSafe;

    const isBlank: typeof EmberUtilsNs.isBlank;
    const isEmpty: typeof EmberUtilsNs.isEmpty;
    const isNone: typeof EmberUtilsNs.isNone;
    const isPresent: typeof EmberUtilsNs.isPresent;

    const observer: typeof EmberObjectNs.observer;
    const addObserver: typeof EmberObjectObserversNs.addObserver;
    const removeObserver: typeof EmberObjectObserversNs.removeObserver;
    const get: typeof EmberObjectNs.get;
    const notifyPropertyChange: typeof EmberObjectNs.notifyPropertyChange;
    const getProperties: typeof EmberObjectNs.getProperties;
    const setProperties: typeof EmberObjectNs.setProperties;
    const set: typeof EmberObjectNs.set;
    const trySet: typeof EmberObjectNs.trySet;
    const compare: typeof EmberUtilsNs.compare;
    /**
     * Creates a shallow copy of the passed object. A deep copy of the object is
     * returned if the optional `deep` argument is `true`.
     */
    const isEqual: typeof EmberUtilsNs.isEqual;
    const typeOf: typeof EmberUtilsNs.typeOf;
    // TODO: replace with an es6 reexport when declare module 'ember' is removed
    /**
     * Copy properties from a source object to a target object.
     * @deprecated until v5.0. You should replace any calls to `Ember.assign`
     *   with `Object.assign` or use the object spread operator.
     */
    const assign: typeof EmberPolyfillsNs.assign;
    const guidFor: typeof EmberObjectInternalsNs.guidFor;

    /**
     * A function may be assigned to `Ember.onerror` to be called when Ember
     * internals encounter an error. This is useful for specialized error handling
     * and reporting code.
     */
    let onerror: ((error: Error) => void) | undefined;

    /**
     * The semantic version
     */
    const VERSION: string;
    /**
     * This property indicates whether or not this application is currently in
     * testing mode. This is set when `setupForTesting` is called on the current
     * application.
     */
    const testing: boolean;

    const expandProperties: typeof EmberObjectComputedNs.expandProperties;
}

export default Ember;

declare module "htmlbars-inline-precompile" {
    interface TemplateFactory {
        __htmlbars_inline_precompile_template_factory: any;
    }
    export default function hbs(tagged: TemplateStringsArray): TemplateFactory;
}
