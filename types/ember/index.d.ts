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
    import * as EmberObjectInternalsNs from '@ember/object/internals';
    import * as EmberObjectComputedNs from '@ember/object/computed';
    import * as EmberObjectEventedNs from '@ember/object/evented';
    import * as EmberObjectEventsNs from '@ember/object/events';
    // @ember/debug
    import * as EmberDebugNs from '@ember/debug';
    import _ContainerDebugAdapter from '@ember/debug/container-debug-adapter';
    import _DataAdapter from '@ember/debug/data-adapter';
    // @ember/engine
    import * as EmberEngineNs from '@ember/engine';
    import * as EmberEngineInstanceNs from '@ember/engine/instance';
    import _ContainerProxyMixin from '@ember/engine/-private/container-proxy-mixin';
    import _RegistryProxyMixin from '@ember/engine/-private/registry-proxy-mixin';
    import EmberCoreObject from '@ember/object/core';
    // tslint:disable-next-line:no-duplicate-imports
    import EmberMixin from '@ember/object/mixin';
    import Observable from '@ember/object/observable';
    // @ember/array
    import * as EmberArrayNs from '@ember/array';
    import EmberMutableArray from '@ember/array/mutable';
    import EmberArrayProxy from '@ember/array/proxy';
    import EmberEnumerable from '@ember/array/-private/enumerable';
    import EmberArrayProtoExtensions from '@ember/array/types/prototype-extensions';

    type EmberArray<T> = EmberArrayNs.default<T>;

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

    interface ActionsHash {
        [index: string]: (...params: any[]) => any;
    }

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
    type QueryParamTypes = 'boolean' | 'number' | 'array' | 'string';
    type QueryParamScopeTypes = 'controller' | 'model';

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
    const ViewMixin: EmberMixin<ViewMixin>;

    /**
     * Ember.CoreView is an abstract class that exists to give view-like behavior to both Ember's main
     * view class Ember.Component and other classes that don't need the full functionality of Ember.Component.
     * Unless you have specific needs for CoreView, you will use Ember.Component in your applications.
     */
    class CoreView extends Ember.Object.extend(Ember.Evented, Ember.ActionHandler) {}
    interface ActionSupport {
        sendAction(action: string, ...params: any[]): void;
    }
    const ActionSupport: EmberMixin<ActionSupport>;

    interface ClassNamesSupport {
        /**
         * A list of properties of the view to apply as class names. If the property is a string value,
         * the value of that string will be applied as a class name.
         *
         * If the value of the property is a Boolean, the name of that property is added as a dasherized
         * class name.
         *
         * If you would prefer to use a custom value instead of the dasherized property name, you can
         * pass a binding like this: `classNameBindings: ['isUrgent:urgent']`
         *
         * This list of properties is inherited from the component's superclasses as well.
         */
        classNameBindings: string[];
        /**
         * Standard CSS class names to apply to the view's outer element. This
         * property automatically inherits any class names defined by the view's
         * superclasses as well.
         */
        classNames: string[];
    }
    const ClassNamesSupport: EmberMixin<ClassNamesSupport>;

    interface TriggerActionOptions {
        action?: string;
        target?: Ember.Object;
        actionContext?: Ember.Object;
    }
    /**
     * Ember.TargetActionSupport is a mixin that can be included in a class to add a triggerAction method
     * with semantics similar to the Handlebars {{action}} helper. In normal Ember usage, the {{action}}
     * helper is usually the best choice. This mixin is most often useful when you are doing more
     * complex event handling in Components.
     */
    interface TargetActionSupport {
        triggerAction(opts: TriggerActionOptions): boolean;
    }

    export namespace Ember {
        const A: typeof EmberArrayNs.A;
        const isArray: typeof EmberArrayNs.isArray;
        export type Enumerable<T> = EmberEnumerable<T>;
        export const Enumerable: typeof EmberEnumerable;
        class ArrayProxy<T> extends EmberArrayProxy<T> {}
        export type Array<T> = EmberArray<T>;
        export const Array: typeof EmberArrayNs.default;
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
         * Ember.ActionHandler is available on some familiar classes including Ember.Route,
         * Ember.Component, and Ember.Controller. (Internally the mixin is used by Ember.CoreView,
         * Ember.ControllerMixin, and Ember.Route and available to the above classes through inheritance.)
         */
        interface ActionHandler {
            /**
             * Triggers a named action on the ActionHandler. Any parameters supplied after the actionName
             * string will be passed as arguments to the action target function.
             *
             * If the ActionHandler has its target property set, actions may bubble to the target.
             * Bubbling happens when an actionName can not be found in the ActionHandler's actions
             * hash or if the action target function returns true.
             */
            send(actionName: string, ...args: any[]): void;
            /**
             * The collection of functions, keyed by name, available on this ActionHandler as action targets.
             */
            actions: ActionsHash;
        }
        const ActionHandler: EmberMixin<ActionHandler>;
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
         * AutoLocation will select the best location option based off browser support with the priority order: history, hash, none.
         */
        class AutoLocation extends Object {}
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
         * The internal class used to create text inputs when the {{input}} helper is used
         * with type of checkbox. See Handlebars.helpers.input for usage details.
         */
        class Checkbox extends Component {}
        /**
         * Implements some standard methods for comparing objects. Add this mixin to
         * any class you create that can compare its instances.
         */
        interface Comparable {
            compare(a: any, b: any): number;
        }
        const Comparable: EmberMixin<Comparable>;
        /**
         * A view that is completely isolated. Property access in its templates go to the view object
         * and actions are targeted at the view object. There is no access to the surrounding context or
         * outer controller; all contextual information is passed in.
         */
        class Component extends CoreView.extend(ViewMixin, ActionSupport, ClassNamesSupport) {
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
        /**
         * Additional methods for the Controller.
         */
        interface ControllerMixin extends ActionHandler {
            replaceRoute(name: string, ...args: any[]): void;
            transitionToRoute(name: string, ...args: any[]): void;
            model: any;
            queryParams: string | string[] | EmberArray<{ [key: string]: {
                type?: QueryParamTypes,
                scope?: QueryParamScopeTypes,
                as?: string
            }}>;
            target: object;
        }
        const ControllerMixin: EmberMixin<ControllerMixin>;
        class Controller extends Object.extend(ControllerMixin) {}
        // TODO: replace with a proper ES6 reexport once we remove declare module 'ember' {}
        class Object extends EmberObjectNs.default {}
        class CoreObject extends EmberCoreObject {}
        class DataAdapter extends _DataAdapter {}
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
        interface Initializer<T> {
            name: string;
            before?: string[];
            after?: string[];
            initialize(application: T): void;
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
         * `Ember.HashLocation` implements the location API using the browser's
         * hash. At present, it relies on a `hashchange` event existing in the
         * browser.
         */
        class HashLocation extends Object {}
        /**
         * Ember.HistoryLocation implements the location API using the browser's
         * history.pushState API.
         */
        class HistoryLocation extends Object {}
        /**
         * Ember Helpers are functions that can compute values, and are used in templates.
         * For example, this code calls a helper named `format-currency`:
         */
        class Helper extends Object {
            /**
             * In many cases, the ceremony of a full `Ember.Helper` class is not required.
             * The `helper` method create pure-function helpers without instances. For
             * example:
             */
            static helper(helper: (params: any[], hash?: object) => any): Helper;
            /**
             * Override this function when writing a class-based helper.
             */
            compute(params: any[], hash: object): any;
            /**
             * On a class-based helper, it may be useful to force a recomputation of that
             * helpers value. This is akin to `rerender` on a component.
             */
            recompute(): any;
        }
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
         * `Ember.LinkComponent` renders an element whose `click` event triggers a
         * transition of the application's instance of `Ember.Router` to
         * a supplied route by name.
         */
        class LinkComponent extends Component {
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
        const MutableArray: typeof EmberMutableArray;

        /**
         * A Namespace is an object usually used to contain other objects or methods
         * such as an application or framework. Create a namespace anytime you want
         * to define one of these new containers.
         */
        class Namespace extends Object {}

        /**
         * Ember.NoneLocation does not interact with the browser. It is useful for
         * testing, or when you need to manage state with your Router, but temporarily
         * don't want it to muck with the URL (for example when you embed your
         * application in a larger page).
         */
        class NoneLocation extends Object {}
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
        /**
         * The `Ember.Route` class is used to define individual routes. Refer to
         * the [routing guide](http://emberjs.com/guides/routing/) for documentation.
         */
        class Route extends Object.extend(ActionHandler, Evented) {
            // methods
            /**
             * This hook is called after this route's model has resolved.
             * It follows identical async/promise semantics to `beforeModel`
             * but is provided the route's resolved model in addition to
             * the `transition`, and is therefore suited to performing
             * logic that can only take place after the model has already
             * resolved.
             */
            afterModel(resolvedModel: any, transition: Transition): any;

            /**
             * This hook is the first of the route entry validation hooks
             * called when an attempt is made to transition into a route
             * or one of its children. It is called before `model` and
             * `afterModel`, and is appropriate for cases when:
             * 1) A decision can be made to redirect elsewhere without
             *     needing to resolve the model first.
             * 2) Any async operations need to occur first before the
             *     model is attempted to be resolved.
             * This hook is provided the current `transition` attempt
             * as a parameter, which can be used to `.abort()` the transition,
             * save it for a later `.retry()`, or retrieve values set
             * on it from a previous hook. You can also just call
             * `this.transitionTo` to another route to implicitly
             * abort the `transition`.
             * You can return a promise from this hook to pause the
             * transition until the promise resolves (or rejects). This could
             * be useful, for instance, for retrieving async code from
             * the server that is required to enter a route.
             */
            beforeModel(transition: Transition): any;

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
            model(params: {}, transition: Transition): any;

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
            redirect(): Transition;

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
            refresh(): Transition;

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
            replaceWith(name: string, ...args: any[]): Transition;

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
            transitionTo(name: string, ...object: any[]): Transition;

            /**
             * The name of the view to use by default when rendering this routes template.
             * When rendering a template, the route will, by default, determine the
             * template and view to use from the name of the route itself. If you need to
             * define a specific view, set this property.
             * This is useful when multiple routes would benefit from using the same view
             * because it doesn't require a custom `renderTemplate` method.
             */
            transitionTo(name: string, ...object: any[]): Transition;

            // https://emberjs.com/api/ember/3.2/classes/Route/methods/intermediateTransitionTo?anchor=intermediateTransitionTo
            /**
             * Perform a synchronous transition into another route without attempting to resolve promises,
             * update the URL, or abort any currently active asynchronous transitions
             * (i.e. regular transitions caused by transitionTo or URL changes).
             *
             * @param name           the name of the route or a URL
             * @param object         the model(s) or identifier(s) to be used while
             *                       transitioning to the route.
             * @returns              the Transition object associated with this attempted transition
             */
            intermediateTransitionTo(name: string, ...object: any[]): Transition;

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
            error(error: any, transition: Transition): void;

            /**
             * The loading action is fired on the route when a route's model hook returns a
             * promise that is not already resolved. The current Transition object is the first
             * parameter and the route that triggered the loading event is the second parameter.
             */
            loading(transition: Transition, route: Route): void;

            /**
             * The willTransition action is fired at the beginning of any attempted transition
             * with a Transition object as the sole argument. This action can be used for aborting,
             * redirecting, or decorating the transition from the currently active routes.
             */
            willTransition(transition: Transition): void;
        }
        /**
         * The `Ember.Router` class manages the application state and URLs. Refer to
         * the [routing guide](http://emberjs.com/guides/routing/) for documentation.
         */
        class Router extends Object.extend(Evented) {
            /**
             * The `Router.map` function allows you to define mappings from URLs to routes
             * in your application. These mappings are defined within the
             * supplied callback function using `this.route`.
             */
            static map(callback: (this: RouterDSL) => void): void;
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
            transitionTo(name: string, options?: {}): Transition;
            transitionTo(name: string, ...models: any[]): Transition;
            transitionTo(name: string, options: {}): Transition;
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
        class Service extends Object {}
        /**
         * The internal class used to create textarea element when the `{{textarea}}`
         * helper is used.
         */
        class TextArea extends Component.extend(TextSupport) {}
        /**
         * The internal class used to create text inputs when the `{{input}}`
         * helper is used with `type` of `text`.
         */
        class TextField extends Component.extend(TextSupport) {
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
            cancel(event: (...args: any[]) => any): void;
            focusIn(event: (...args: any[]) => any): void;
            focusOut(event: (...args: any[]) => any): void;
            insertNewLine(event: (...args: any[]) => any): void;
            keyPress(event: (...args: any[]) => any): void;
            action: string;
            bubbles: boolean;
            onEvent: string;
        }
        const TextSupport: Mixin<TextSupport, Ember.Component>;
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

    type RouteModel = object | string | number;
    // https://emberjs.com/api/ember/2.18/classes/RouterService
    /**
     * The Router service is the public API that provides component/view layer access to the router.
     */
    export class RouterService extends Ember.Service {
        //
        /**
         *   Name of the current route.
         *  This property represent the logical name of the route,
         *  which is comma separated.
         *  For the following router:
         *  ```app/router.js
         *  Router.map(function() {
         *  this.route('about');
         *  this.route('blog', function () {
         *      this.route('post', { path: ':post_id' });
         *  });
         *  });
         *  ```
         *  It will return:
         *  * `index` when you visit `/`
         *  * `about` when you visit `/about`
         *  * `blog.index` when you visit `/blog`
         *  * `blog.post` when you visit `/blog/some-post-id`
         */
        readonly currentRouteName: string;
        //
        /**
         *   Current URL for the application.
         *  This property represent the URL path for this route.
         *  For the following router:
         *  ```app/router.js
         *  Router.map(function() {
         *  this.route('about');
         *  this.route('blog', function () {
         *      this.route('post', { path: ':post_id' });
         *  });
         *  });
         *  ```
         *  It will return:
         *  * `/` when you visit `/`
         *  * `/about` when you visit `/about`
         *  * `/blog` when you visit `/blog`
         *  * `/blog/some-post-id` when you visit `/blog/some-post-id`
         */
        readonly currentURL: string;
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

declare module '@ember/component' {
    import Ember from 'ember';
    export default class Component extends Ember.Component { }
}

declare module '@ember/component/checkbox' {
    import Ember from 'ember';
    export default class Checkbox extends Ember.Checkbox { }
}

declare module '@ember/component/helper' {
    import Ember from 'ember';
    export default class Helper extends Ember.Helper { }
    /**
     * In many cases, the ceremony of a full `Helper` class is not required.
     * The `helper` method create pure-function helpers without instances. For
     * example:
     * ```app/helpers/format-currency.js
     * import { helper } from '@ember/component/helper';
     * export default helper(function(params, hash) {
     *   let cents = params[0];
     *   let currency = hash.currency;
     *   return `${currency}${cents * 0.01}`;
     * });
     * ```
     */
    export function helper(helperFn: (params: any[], hash?: any) => any): any;
}

declare module '@ember/component/text-area' {
    import Ember from 'ember';
    export default class TextArea extends Ember.TextArea { }
}

declare module '@ember/component/text-field' {
    import Ember from 'ember';
    export default class TextField extends Ember.TextField { }
}

declare module '@ember/controller' {
    import Ember from 'ember';
    export default class Controller extends Ember.Controller { }
    export const inject: typeof Ember.inject.controller;

    // A type registry for Ember `Controller`s. Meant to be declaration-merged
    // so string lookups resolve to the correct type.
    // tslint:disable-next-line:no-empty-interface
    export interface Registry {}
}

// declare module '@ember/debug' {
//     import Ember from 'ember';
//     export const assert: typeof Ember.assert;
//     export const debug: typeof Ember.debug;
//     export const inspect: typeof Ember.inspect;
//     export const registerDeprecationHandler: typeof Ember.Debug.registerDeprecationHandler;
//     export const registerWarnHandler: typeof Ember.Debug.registerWarnHandler;
//     export const runInDebug: typeof Ember.runInDebug;
//     export const warn: typeof Ember.warn;
// }

// declare module '@ember/debug/container-debug-adapter' {
//     import Ember from 'ember';
//     export default class ContainerDebugAdapter extends Ember.ContainerDebugAdapter { }
// }

// declare module '@ember/debug/data-adapter' {
//     import Ember from 'ember';
//     export default class DataAdapter extends Ember.DataAdapter { }
// }

declare module '@ember/error' {
    import Ember from 'ember';
    const Error: typeof Ember.Error;
    export default Error;
}

declare module '@ember/routing/auto-location' {
    import Ember from 'ember';
    export default class AutoLocation extends Ember.AutoLocation { }
}

declare module '@ember/routing/hash-location' {
    import Ember from 'ember';
    export default class HashLocation extends Ember.HashLocation { }
}

declare module '@ember/routing/history-location' {
    import Ember from 'ember';
    export default class HistoryLocation extends Ember.HistoryLocation { }
}

declare module '@ember/routing/link-component' {
    import Ember from 'ember';
    export default class LinkComponent extends Ember.LinkComponent { }
}

declare module '@ember/routing/location' {
    import Ember from 'ember';
    const Location: typeof Ember.Location;
    export default Location;
}

declare module '@ember/routing/none-location' {
    import Ember from 'ember';
    export default class NoneLocation extends Ember.NoneLocation { }
}

declare module '@ember/routing/route' {
    import Ember from 'ember';
    export default class Route extends Ember.Route { }
}

declare module '@ember/routing/router' {
    import Ember from 'ember';
    export default class EmberRouter extends Ember.Router { }
}

declare module '@ember/routing/router-service' {
    import { RouterService } from 'ember';
    export default class extends RouterService { }
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
