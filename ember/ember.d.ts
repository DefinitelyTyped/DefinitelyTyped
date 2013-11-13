// Type definitions for Ember.js 1.0.0
// Project: http://emberjs.com/
// Definitions by: Jed Hunsaker <https://github.com/jedhunsaker/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../handlebars/handlebars.d.ts" />


declare module EmberStates {

    interface Transition {
        addInitialStates(): void;
        matchContextsToStates(contexts: any[]): void;
        normalize(manager: Ember.StateManager, contexts: any[]): void;
        removeUnchangedContexts(manager: Ember.StateManager): void;
        sendEvents(eventName: string, sendRecursiveArguments: boolean, isUnhandledPass: boolean): void;
        sendRecursively(event: string, currentState: Ember.State, isUnhandledPass: boolean): void;
    }

}

declare module EmberTesting {

    module Test {

        class Adapter {
            asyncEnd(): void;
            asyncStart(): void;
            exception(error: string): void;
        }

        class QUnitAdapter extends Adapter { }

    }

}

interface Function {
    observes(...string): Function;
    observesBefore(...string): Function;
    on(...string): Function;
    property(...string): Function;
}

interface String {
    camelize(): string;
    capitalize(): string;
    classify(): string;
    dasherize(): string;
    decamelize(): string;
    fmt(...string): string;
    htmlSafe(): Handlebars.SafeString;
    loc(...string): string;
    underscore(): string;
    w(): string[];
}

interface Array {
    constructor(arr: any[]);
    constructor(arr: Array);
    activate(): void;
    addArrayObserver(target: any, opts?: EnumerableConfigurationOptions): Array;
    addEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Array;
    any(callback: Function, target?: any): boolean;
    anyBy(key: string, value?: string): boolean;
    arrayContentDidChange(startIdx: number, removeAmt: number, addAmt: number): Array;
    arrayContentWillChange(startIdx: number, removeAmt: number, addAmt: number): Array;
    someProperty(key: string, value?: any): boolean;
    clear(): any[];
    compact(): any[];
    contains(obj: any): boolean;
    enumerableContentDidChange(start: number, removing: number, adding: number);
    enumerableContentDidChange(start: number, removing: Ember.Enumerable, adding: number);
    enumerableContentDidChange(start: number, removing: number, adding: Ember.Enumerable);
    enumerableContentDidChange(start: number, removing: Ember.Enumerable, adding: Ember.Enumerable);
    enumerableContentDidChange(removing: number, adding: number);
    enumerableContentDidChange(removing: Ember.Enumerable, adding: number);
    enumerableContentDidChange(removing: number, adding: Ember.Enumerable);
    enumerableContentDidChange(removing: Ember.Enumerable, adding: Ember.Enumerable);
    enumerableContentWillChange(removing: number, adding: number): Array;
    enumerableContentWillChange(removing: Ember.Enumerable, adding: number): Array;
    enumerableContentWillChange(removing: number, adding: Ember.Enumerable): Array;
    enumerableContentWillChange(removing: Ember.Enumerable, adding: Ember.Enumerable): Array;
    every(callback: Function, target?: any): boolean;
    everyBy(key: string, value?: string): boolean;
    everyProperty(key: string, value?: any): boolean;
    filter(callback: Function, target: any): any[];
    filterBy(key: string, value?: string): any[];
    find(callback: Function, target: any): any;
    findBy(key: string, value?: string): any;
    forEach(callback: Function, target?: any): any;
    getEach(key: string): any[];
    indexOf(object: any, startAt: number): number;
    insertAt(idx: number, object: any): Array;
    invoke(methodName: string, ...any): any[];
    lastIndexOf(object: any, startAt: number): number;
    mapBy(key: string): any[];
    nextObject(index: number, previousObject: any, context: any): any;
    objectAt(idx: number): any;
    objectsAt(...number): any[];
    popObject(): any;
    pushObject(obj: any): any;
    pushObjects(...any): Array;
    reduce(callback: ReduceCallback, initialValue: any, reducerProperty: string): any;
    reject: ItemIndexEnumerableCallbackTarget;
    rejectBy(key: string, value?: string): any[];
    removeArrayObserver(target: any, opts: EnumerableConfigurationOptions): Array;
    removeAt(start: number, len: number): any;
    removeEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Array;
    replace(idx: number, amt: number, objects: any[]);
    reverseObjects(): Array;
    setEach(key: string, value?: any): any;
    setObjects(objects: any[]): Array;
    shiftObject(): any;
    slice(beginIndex?: number, endIndex?: number): any[];
    some(callback: Function, target?: any): boolean;
    toArray(): any[];
    uniq(): Array;
    unshiftObject(object: any): any;
    unshiftObjects(objects: any[]): Array;
    without(value: any): Array;
    '[]': Array;
    '@each': Ember.EachProxy;
    Boolean: boolean;
    firstObject: any;
    hasEnumerableObservers: boolean;
    lastObject: any;
    addObject(object: any): any;
    addObjects(objects: Ember.Enumerable): Array;
    removeObject(object: any): any;
    removeObjects(objects: Ember.Enumerable): Array;
    addObserver: ModifyObserver;
    beginPropertyChanges(): Array;
    cacheFor(keyName: string): any;
    decrementProperty(keyName: string, decrement?: number): number;
    endPropertyChanges(): Array;
    get(keyName: string): any;
    getProperties(...string): {};
    getProperties(keys: string[]): {};
    getWithDefault(keyName: string, defaultValue: any): any;
    hasObserverFor(key: string): boolean;
    incrementProperty(keyName: string, increment?: number): number;
    notifyPropertyChange(keyName: string): Array;
    propertyDidChange(keyName: string): Array;
    propertyWillChange(keyName: string): Array;
    removeObserver(key: string, target: any, method: string): Ember.Observable;
    removeObserver(key: string, target: any, method: Function): Ember.Observable;
    set(keyName: string, value: any): Array;
    setProperties(hash: {}): Array;
    toggleProperty(keyName: string): any;
    copy(deep: boolean): Array;
    frozenCopy(): Array;
}

interface ApplicationCreateArguments {
    customEvents?: {};
    rootElement?: string;
    /**
    Basic logging of successful transitions.
    **/
    LOG_TRANSITIONS?: boolean;
    /**
    Detailed logging of all routing steps.
    **/
    LOG_TRANSITIONS_INTERNAL?: boolean;
}

interface ApplicationInitializerArguments {
    name?: string;
    initialize?: ApplicationInitializerFunction;
}

interface ApplicationInitializerFunction {
    (container: Ember.Container, application: Ember.Application);
}

interface CoreObjectArguments {
    /**
    An overridable method called when objects are instantiated. By default, does nothing unless it is
    overridden during class definition. NOTE: If you do override init for a framework class like Ember.View
    or Ember.ArrayController, be sure to call this._super() in your init declaration! If you don't, Ember
    may not have an opportunity to do important setup work, and you'll see strange behavior in your application.
    **/
    init?: Function;
    /**
    Override to implement teardown.
    **/
    willDestroy?: Function;
}

interface ClassMixin {
    extend<T>(arguments?: {}): T;
    create<T extends ClassMixin>(arguments?: {}): T;
    createWithMixins<T extends ClassMixin>(arguments?: {}): T;
    detect(obj: any): boolean;
    detectInstance(obj: any): boolean;
    eachComputedProperty(callback: Function, binding: {}): void;
    metaForProperty(key: string): {};
    reopen<T extends ClassMixin>(arguments?: {}): T;
    reopenClass<T extends ClassMixin>(arguments?: {}): T;
    isClass: boolean;
    isMethod: boolean;
}

interface EnumerableConfigurationOptions {
    willChange? ;
    didChange? ;
}

interface ItemIndexEnumerableCallbackTarget {
    (callback: ItemIndexEnumerableCallback, target?: any): any[];
}

interface ItemIndexEnumerableCallback {
    (item: any, index: number, enumerable: Ember.Enumerable);
}

interface ReduceCallback {
    (previousValue: any, item: any, index: number, enumerable: Ember.Enumerable);
}

interface TransitionsHash {
    contexts: any[];
    exitStates: Ember.State[];
    enterStates: Ember.State[];
    resolveState: Ember.State;
}

interface ActionsHash {
    willTransition?: Function;
    error?: Function;
}

interface DisconnectOutletOptions {
    outlet?: string;
    parentView?: string;
}

interface RenderOptions {
    into?: string;
    outlet?: string;
    controller?: string;
}

interface ModifyObserver {
    (obj: any, path: string, target: any, method?: Function);
    (obj: any, path: string, target: any, method?: string);
    (obj: any, path: string, func: Function, method?: Function);
    (obj: any, path: string, func: Function, method?: string);
}

declare module Ember {
    /**
    Alias for jQuery.
    **/
    var $: JQueryStatic;
    /**
    Creates an Ember.NativeArray from an Array like object. Does not modify the original object.
    Ember.A is not needed if Ember.EXTEND_PROTOTYPES is true (the default value). However, it is
    recommended that you use Ember.A when creating addons for ember or when you can not garentee
    that Ember.EXTEND_PROTOTYPES will be true.
    **/
    function A(arr?: any[]): NativeArray;
    /**
    An instance of Ember.Application is the starting point for every Ember application. It helps to
    instantiate, initialize and coordinate the many objects that make up your app.
    **/
    class Application extends Namespace implements ClassMixin {
        /**
        Creates a subclass of the Application class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends Application>(arguments?: ApplicationCreateArguments): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends Application>(arguments?: ApplicationCreateArguments): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends Application>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends Application>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
        static initializer(arguments?: ApplicationInitializerArguments): void;
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
        customEvents: {};
        /**
        The Ember.EventDispatcher responsible for delegating events to this application's views.
        **/
        eventDispatcher: EventDispatcher;
        /**
        Set this to provide an alternate class to Ember.DefaultResolver
        **/
        resolver: DefaultResolver;
        /**
        The root DOM element of the Application. This can be specified as an
        element or a jQuery-compatible selector string.

        This is the element that will be passed to the Application's, eventDispatcher,
        which sets up the listeners for event delegation. Every view in your application
        should be a child of the element you specify here.
        **/
        rootElement: HTMLElement;
        /**
        Called when the Application has become ready.
        The call will be delayed until the DOM has become ready.
        **/
        ready: Function;
    }
    /**
    This module implements Observer-friendly Array-like behavior. This mixin is picked up by the
    Array class as well as other controllers, etc. that want to appear to be arrays.
    **/
    class Array implements Enumerable {
        addArrayObserver(target: any, opts?: EnumerableConfigurationOptions): Array;
        addEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
        any(callback: Function, target?: any): boolean;
        anyBy(key: string, value?: string): boolean;
        arrayContentDidChange(startIdx: number, removeAmt: number, addAmt: number): Array;
        arrayContentWillChange(startIdx: number, removeAmt: number, addAmt: number): Array;
        someProperty(key: string, value?: string): boolean;
        compact(): any[];
        contains(obj: any): boolean;
        enumerableContentDidChange(start: number, removing: number, adding: number);
        enumerableContentDidChange(start: number, removing: Enumerable, adding: number);
        enumerableContentDidChange(start: number, removing: number, adding: Enumerable);
        enumerableContentDidChange(start: number, removing: Enumerable, adding: Enumerable);
        enumerableContentDidChange(removing: number, adding: number);
        enumerableContentDidChange(removing: Enumerable, adding: number);
        enumerableContentDidChange(removing: number, adding: Enumerable);
        enumerableContentDidChange(removing: Enumerable, adding: Enumerable);
        enumerableContentWillChange(removing: number, adding: number): Enumerable;
        enumerableContentWillChange(removing: Enumerable, adding: number): Enumerable;
        enumerableContentWillChange(removing: number, adding: Enumerable): Enumerable;
        enumerableContentWillChange(removing: Enumerable, adding: Enumerable): Enumerable;
        every(callback: Function, target?: any): boolean;
        everyBy(key: string, value?: string): boolean;
        everyProperty(key: string, value?: string): boolean;
        filter(callback: Function, target: any): any[];
        filterBy(key: string, value?: string): any[];
        find(callback: Function, target: any): any;
        findBy(key: string, value?: string): any;
        forEach(callback: Function, target?: any): any;
        getEach(key: string): any[];
        indexOf(object: any, startAt: number): number;
        invoke(methodName: string, ...any): any[];
        lastIndexOf(object: any, startAt: number): number;
        map: ItemIndexEnumerableCallbackTarget;
        mapBy(key: string): any[];
        nextObject(index: number, previousObject: any, context: any): any;
        objectAt(idx: number): any;
        objectsAt(...number): any[];
        reduce(callback: ReduceCallback, initialValue: any, reducerProperty: string): any;
        reject: ItemIndexEnumerableCallbackTarget;
        rejectBy(key: string, value?: string): any[];
        removeArrayObserver(target: any, opts: EnumerableConfigurationOptions): Array;
        removeEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
        setEach(key: string, value?: any): any;
        slice(beginIndex?: number, endIndex?: number): any[];
        some(callback: Function, target?: any): boolean;
        toArray(): any[];
        uniq(): Enumerable;
        without(value: any): Enumerable;
        '@each': EachProxy;
        Boolean: boolean;
        '[]': Array;
        firstObject: any;
        hasEnumerableObservers: boolean;
        lastObject: any;
        length: number;
    }
    /**
    Provides a way for you to publish a collection of objects so that you can easily bind to the
    collection from a Handlebars #each helper, an Ember.CollectionView, or other controllers.
    **/
    class ArrayController extends ArrayProxy implements SortableMixin, ControllerMixin, ClassMixin {
        /**
        Creates a subclass of the ArrayController class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends ArrayController>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends ArrayController>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends ArrayController>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends ArrayController>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
        lookupItemController(object: any): string;
        arrangedContent: any;
        itemController: string;
        sortAscending: boolean;
        sortFunction: Comparable;
        sortProperties: any[];
        replaceRoute(name: string, ...any);
        transitionToRoute(name: string, ...any);
        controllers: {};
        needs: string[];
        target: any;
    }
    /**
    Array polyfills to support ES5 features in older browsers.
    **/
    var ArrayPolyfills: {
        map: typeof Array.prototype.map;
        forEach: typeof Array.prototype.forEach;
        indexOf: typeof Array.prototype.indexOf;
    };
    /**
    An ArrayProxy wraps any other object that implements Ember.Array and/or Ember.MutableArray,
    forwarding all requests. This makes it very useful for a number of binding use cases or other cases
    where being able to swap out the underlying array is useful.
    **/
    class ArrayProxy extends Object implements MutableArray, ClassMixin {
        /**
        Creates a subclass of the ArrayProxy class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends ArrayProxy>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends ArrayProxy>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends ArrayProxy>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends ArrayProxy>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
        addArrayObserver(target: any, opts?: EnumerableConfigurationOptions): ArrayProxy;
        addEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): ArrayProxy;
        any(callback: Function, target?: any): boolean;
        anyBy(key: string, value?: string): boolean;
        arrayContentDidChange(startIdx: number, removeAmt: number, addAmt: number): ArrayProxy;
        arrayContentWillChange(startIdx: number, removeAmt: number, addAmt: number): ArrayProxy;
        someProperty(key: string, value?: string): boolean;
        clear(): any[];
        compact(): any[];
        contains(obj: any): boolean;
        enumerableContentDidChange(start: number, removing: number, adding: number);
        enumerableContentDidChange(start: number, removing: Enumerable, adding: number);
        enumerableContentDidChange(start: number, removing: number, adding: Enumerable);
        enumerableContentDidChange(start: number, removing: Enumerable, adding: Enumerable);
        enumerableContentDidChange(removing: number, adding: number);
        enumerableContentDidChange(removing: Enumerable, adding: number);
        enumerableContentDidChange(removing: number, adding: Enumerable);
        enumerableContentDidChange(removing: Enumerable, adding: Enumerable);
        enumerableContentWillChange(removing: number, adding: number): ArrayProxy;
        enumerableContentWillChange(removing: Enumerable, adding: number): ArrayProxy;
        enumerableContentWillChange(removing: number, adding: Enumerable): ArrayProxy;
        enumerableContentWillChange(removing: Enumerable, adding: Enumerable): ArrayProxy;
        every(callback: Function, target?: any): boolean;
        everyBy(key: string, value?: string): boolean;
        everyProperty(key: string, value?: string): boolean;
        filter(callback: Function, target: any): any[];
        filterBy(key: string, value?: string): any[];
        find(callback: Function, target: any): any;
        findBy(key: string, value?: string): any;
        forEach(callback: Function, target?: any): any;
        getEach(key: string): any[];
        indexOf(object: any, startAt: number): number;
        insertAt(idx: number, object: any): ArrayProxy;
        invoke(methodName: string, ...any): any[];
        lastIndexOf(object: any, startAt: number): number;
        map: ItemIndexEnumerableCallbackTarget;
        mapBy(key: string): any[];
        nextObject(index: number, previousObject: any, context: any): any;
        objectAt(idx: number): any;
        objectAtContent(idx: number): any;
        objectsAt(...number): any[];
        popObject(): any;
        pushObject(obj: any): any;
        pushObjects(...any): ArrayProxy;
        reduce(callback: ReduceCallback, initialValue: any, reducerProperty: string): any;
        reject: ItemIndexEnumerableCallbackTarget;
        rejectBy(key: string, value?: string): any[];
        removeArrayObserver(target: any, opts: EnumerableConfigurationOptions): ArrayProxy;
        removeAt(start: number, len: number): any;
        removeEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): ArrayProxy;
        replace(idx: number, amt: number, objects: any[]);
        replaceContent(idx: number, amt: number, objects: any[]): void;
        reverseObjects(): ArrayProxy;
        setEach(key: string, value?: any): any;
        setObjects(objects: any[]): ArrayProxy;
        shiftObject(): any;
        slice(beginIndex?: number, endIndex?: number): any[];
        some(callback: Function, target?: any): boolean;
        toArray(): any[];
        uniq(): ArrayProxy;
        unshiftObject(object: any): any;
        unshiftObjects(objects: any[]): ArrayProxy;
        without(value: any): ArrayProxy;
        '[]': ArrayProxy;
        '@each': EachProxy;
        Boolean: boolean;
        firstObject: any;
        hasEnumerableObservers: boolean;
        lastObject: any;
        length: number;
        addObject(object: any): any;
        addObjects(objects: Enumerable): ArrayProxy;
        removeObject(object: any): any;
        removeObjects(objects: Enumerable): ArrayProxy;
    }
    var BOOTED: boolean;
    /**
    Connects the properties of two objects so that whenever the value of one property changes,
    the other property will be changed also.
    **/
    class Binding {
        constructor(toPath: string, fromPath: string);
        connect(obj: any): Binding;
        copy(): Binding;
        disconnect(obj: any): Binding;
        from(path: string): Binding;
        static oneWay(from: string, flag?: boolean): Binding;
        to(path: string): Binding;
        to(pathTuple: any[]): Binding;
        toString(): string;
    }
    class Button extends View implements TargetActionSupport, ClassMixin {
        /**
        Creates a subclass of the Button class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends Button>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends Button>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends Button>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends Button>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
        triggerAction(opts: {}): boolean;
    }
    /**
    The internal class used to create text inputs when the {{input}} helper is used
    with type of checkbox. See Handlebars.helpers.input for usage details.
    **/
    class Checkbox extends View implements ClassMixin {
        /**
        Creates a subclass of the Checkbox class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends Checkbox>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends Checkbox>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends Checkbox>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends Checkbox>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
    }
    /**
    An Ember.View descendent responsible for managing a collection (an array or array-like object)
    by maintaining a child view object and associated DOM representation for each item in the array
    and ensuring that child views and their associated rendered HTML are updated when items in the
    array are added, removed, or replaced.
    **/
    class CollectionView extends ContainerView {
        arrayDidChange(content: any[], start: number, removed: number, added: number): void;
        arrayWillChange(content: any[], start: number, removed: number): void;
        createChildView(viewClass: {}, attrs?: {}): CollectionView;
        destroy(): CollectionView;
        init(): void;
        static CONTAINER_MAP: {};
        content: Array;
        emptyView: View;
        itemViewClass: View;
    }
    /**
    Implements some standard methods for comparing objects. Add this mixin to any class
    you create that can compare its instances.
    **/
    class Comparable {
        compare(a: any, b: any): number;
    }
    /**
    A view that is completely isolated. Property access in its templates go to the view object
    and actions are targeted at the view object. There is no access to the surrounding context or
    outer controller; all contextual information is passed in.
    **/
    class Component extends View implements ClassMixin {
        /**
        Creates a subclass of the Component class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends Component>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends Component>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends Component>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends Component>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
        sendAction(action: string, context: any): void;
        targetObject: Controller;
    }
    /**
    A computed property transforms an objects function into a property.
    By default the function backing the computed property will only be called once and the result
    will be cached. You can specify various properties that your computed property is dependent on.
    This will force the cached result to be recomputed if the dependencies are modified.
    **/
    class ComputedProperty {
        cacheable(aFlag?: boolean): ComputedProperty;
        get(keyName: string): any;
        meta(meta: {}): ComputedProperty;
        property(...string): ComputedProperty;
        readOnly(): ComputedProperty;
        set(keyName: string, newValue: any, oldValue: string): any;
        volatile(): ComputedProperty;
    }
    class Container {
        constructor(parent: Container);
        parent: Container;
        children: any[];
        resolver: Function;
        registry: {};
        cache: {};
        typeInjections: {};
        injections: {};
        child(): Container;
        set(object: {}, key: string, value: any): void;
        /**
        registers a factory for later injection
        @param fullName type:name (e.g., 'model:user')
        @param factory (e.g., App.Person)
        **/
        register(fullName: string, factory: Function, options?: {}): void;
        unregister(fullName: string): void;
        resolve(fullName: string): Function;
        describe(fullName: string): string;
        normalize(fullName: string): string;
        makeToString(factory: any, fullName: string): Function;
        lookup(fullName: string, options?: {}): any;
        lookupFactory(fullName: string): any;
        has(fullName: string): boolean;
        optionsForType(type: string, options: {}): void;
        options(type: string, options: {}): void;
        injection(factoryName: string, property: string, injectionName: string): void;
        factoryInjection(factoryName: string, property: string, injectionName: string): void;
        destroy(): void;
        reset(): void;
    }
    /**
    An Ember.View subclass that implements Ember.MutableArray allowing programatic
    management of its child views.
    **/
    class ContainerView extends View implements ClassMixin {
        /**
        Creates a subclass of the ContainerView class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends ContainerView>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends ContainerView>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends ContainerView>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends ContainerView>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
    }
    class Controller extends Object { }
    /**
    Additional methods for the ControllerMixin.
    **/
    class ControllerMixin {
        replaceRoute(name: string, ...any): void;
        transitionToRoute(name: string, ...any): void;
        controllers: {};
        needs: string[];
        target: any;
    }
    /**
    Implements some standard methods for copying an object. Add this mixin to any object you
    create that can create a copy of itself. This mixin is added automatically to the built-in array.
    You should generally implement the copy() method to return a copy of the receiver.
    Note that frozenCopy() will only work if you also implement Ember.Freezable.
    **/
    class Copyable {
        copy(deep: boolean): Copyable;
        frozenCopy(): Copyable;
    }
    class CoreObject implements ClassMixin {
        /**
        Creates a subclass of the CoreObject class.
        **/
        static extend<T>(arguments?: CoreObjectArguments): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends CoreObject>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends CoreObject>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends CoreObject>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends CoreObject>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
        /**
        Destroys an object by setting the isDestroyed flag and removing its metadata, which effectively
        destroys observers and bindings. If you try to set a property on a destroyed object, an exception
        will be raised. Note that destruction is scheduled for the end of the run loop and does not
        happen immediately. It will set an isDestroying flag immediately.
        **/
        destroy(): CoreObject;
        init(): void;
        /**
        Returns a string representation which attempts to provide more information than Javascript's toString
        typically does, in a generic way for all Ember objects (e.g., "<App.Person:ember1024>").
        **/
        toString(): string;
        willDestroy(): void;

        /**
        Defines the properties that will be concatenated from the superclass (instead of overridden).
        **/
        concatenatedProperties: any[];
        /**
        Destroyed object property flag. If this property is true the observers and bindings were
        already removed by the effect of calling the destroy() method.
        **/
        isDestroyed: boolean;
        /**
        Destruction scheduled flag. The destroy() method has been called. The object stays intact
        until the end of the run loop at which point the isDestroyed flag is set.
        **/
        isDestroying: boolean;
    }
    /**
    An abstract class that exists to give view-like behavior to both Ember's main view class Ember.View
    and other classes like Ember._SimpleMetamorphView that don't need the fully functionaltiy of Ember.View.
    Unless you have specific needs for CoreView, you will use Ember.View in your applications.
    **/
    class CoreView extends Object implements ClassMixin {
        /**
        Creates a subclass of the CoreView class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends CoreView>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends CoreView>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends CoreView>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends CoreView>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
        parentView: CoreView;
    }
    class DAG {
        add(name: string): any;
        map(name: string, value: any): void;
        addEdge(fromName: string, toName: string): void;
        topsort(fn: Function): void;
        addEdges(name: string, value: any, before: any, after: any): void;
        names: any[];
        vertices: {};
    }
    function DEFAULT_GETTER_FUNCTION(name: string): Function;
    /**
    The DefaultResolver defines the default lookup rules to resolve container lookups before consulting
    the container for registered items:
    templates are looked up on Ember.TEMPLATES
    other names are looked up on the application after converting the name.
    For example, controller:post looks up App.PostController by default.
    **/
    class DefaultResolver {
        resolve(fullName: string): {};
        namespace: Application;
    }
    class Deferred {
        reject(value: any): void;
        resolve(value: any): void;
        then(resolve: Function, reject: Function): void;
    }
    class DeferredMixin extends Mixin {
        reject(value: any): void;
        resolve(value: any): void;
        then(resolve: Function, reject: Function): void;
    }
    /**
    Objects of this type can implement an interface to respond to requests to get and set.
    The default implementation handles simple properties.
    You generally won't need to create or subclass this directly.
    **/
    class Descriptor { }
    var EMPTY_META: {}; // TODO: define interface
    var ENV: {};
    var EXTEND_PROTOTYPES: boolean;
    /**
    This is the object instance returned when you get the @each property on an array. It uses
    the unknownProperty handler to automatically create EachArray instances for property names.
    **/
    class EachProxy extends Object implements ClassMixin {
        /**
        Creates a subclass of the EachProxy class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends EachProxy>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends EachProxy>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends EachProxy>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends EachProxy>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
        unknownProperty(keyName: string, value: any): Array;
    }
    /**
    This mixin defines the common interface implemented by enumerable objects in Ember. Most of these
    methods follow the standard Array iteration API defined up to JavaScript 1.8 (excluding language-specific
    features that cannot be emulated in older versions of JavaScript).
    This mixin is applied automatically to the Array class on page load, so you can use any of these methods
    on simple arrays. If Array already implements one of these methods, the mixin will not override them.
    **/
    class Enumerable {
        addEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
        any(callback: Function, target?: any): boolean;
        anyBy(key: string, value?: string): boolean;
        someProperty(key: string, value?: string): boolean;
        compact(): any[];
        contains(obj: any): boolean;
        enumerableContentDidChange(start: number, removing: number, adding: number);
        enumerableContentDidChange(start: number, removing: Enumerable, adding: number);
        enumerableContentDidChange(start: number, removing: number, adding: Enumerable);
        enumerableContentDidChange(start: number, removing: Enumerable, adding: Enumerable);
        enumerableContentDidChange(removing: number, adding: number);
        enumerableContentDidChange(removing: Enumerable, adding: number);
        enumerableContentDidChange(removing: number, adding: Enumerable);
        enumerableContentDidChange(removing: Enumerable, adding: Enumerable);
        enumerableContentWillChange(removing: number, adding: number): Enumerable;
        enumerableContentWillChange(removing: Enumerable, adding: number): Enumerable;
        enumerableContentWillChange(removing: number, adding: Enumerable): Enumerable;
        enumerableContentWillChange(removing: Enumerable, adding: Enumerable): Enumerable;
        every(callback: Function, target?: any): boolean;
        everyBy(key: string, value?: string): boolean;
        everyProperty(key: string, value?: string): boolean;
        filter(callback: Function, target: any): any[];
        filterBy(key: string, value?: string): any[];
        find(callback: Function, target: any): any;
        findBy(key: string, value?: string): any;
        forEach(callback: Function, target?: any): any;
        getEach(key: string): any[];
        invoke(methodName: string, ...any): any[];
        map: ItemIndexEnumerableCallbackTarget;
        mapBy(key: string): any[];
        nextObject(index: number, previousObject: any, context: any): any;
        reduce(callback: ReduceCallback, initialValue: any, reducerProperty: string): any;
        reject: ItemIndexEnumerableCallbackTarget;
        rejectBy(key: string, value?: string): any[];
        removeEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
        setEach(key: string, value?: any): any;
        some(callback: Function, target?: any): boolean;
        toArray(): any[];
        uniq(): Enumerable;
        without(value: any): Enumerable;
        '[]': Array;
        firstObject: any;
        hasEnumerableObservers: boolean;
        lastObject: any;
    }
    var EnumerableUtils: {}; // TODO: define interface
    /**
    A subclass of the JavaScript Error object for use in Ember.
    **/
    var Error: typeof Error;
    /**
    Handles delegating browser events to their corresponding Ember.Views. For example, when you click on
    a view, Ember.EventDispatcher ensures that that view's mouseDown method gets called.
    **/
    class EventDispatcher extends Object implements ClassMixin {
        /**
        Creates a subclass of the EventDispatcher class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends EventDispatcher>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends EventDispatcher>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends EventDispatcher>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends EventDispatcher>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
        events: {};
    }
    /**
    This mixin allows for Ember objects to subscribe to and emit events.
    You can also chain multiple event subscriptions.
    **/
    class Evented {
        has(name: string): boolean;
        off(name: string, target: any, method: Function): Evented;
        on(name: string, target: any, method: Function): Evented;
        one(name: string, target: any, method: Function): Evented;
        trigger(name: string, ...string): void;
    }
    var FROZEN_ERROR: string;
    class Freezable {
        freeze(): Freezable;
        isFrozen: boolean;
    }
    var GUID_KEY: string;
    module Handlebars {
        function compile(string: string): Function;
        function get(root: any, path: string, options?: {}): any;
        function helper(name: string, func: Function, dependentKeys: string): void;
        function helper(name: string, view: View, dependentKeys: string): void;
        class helpers {
            action(actionName: string, context: any, options?: {}): void;
            bindAttr(options?: {}): string;
            connectOutlet(outletName: string, view: {}): void;
            control(path: string, modelPath: string, options?: {}): string;
            debugger(property: string): void;
            disconnectOutlet(outletName: string): void;
            each(name: string, path: string, options?: {}): void;
            if(context: Function, options?: {}): string;
            init(): void;
            input(options?: {}): void;
            linkTo(routeName: string, context: any, options?: {}): string;
            loc(str: string): void;
            log(property: string): void;
            outlet(property: string): string;
            partial(partialName: string): void;
            render(name: string, context?: string, options?: {}): string;
            textarea(options?: {}): void;
            unbound(property: string): string;
            unless(context: Function, options?: {}): string;
            view(path: string, options?: {}): string;
            with(context: Function, options?: {}): string;
            yield(options?: {}): string;
        }
        function precompile(string: string): void;
        function registerBoundHelper(name: string, func: Function, dependentKeys: string): void;
        class Compiler { }
        class JavaScriptCompiler { }
        function registerHelper(name: string, fn: Function, inverse?: boolean): void;
        function registerPartial(name: string, str): void;
        function K();
        function createFrame(object);
        function Exception(message: string): void;
        class SafeString {
            constructor(str: string);
            static toString(): string;
        }
        function parse(string: string);
        function print(ast);
        var logger;
        function log(level, str): void;
        function compile(environment, options?, context?, asObject?);
    }
    class HashLocation extends Object implements ClassMixin {
        /**
        Creates a subclass of the HashLocation class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends HashLocation>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends HashLocation>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends HashLocation>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends HashLocation>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
    }
    class HistoryLocation extends Object implements ClassMixin {
        /**
        Creates a subclass of the HistoryLocation class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends HistoryLocation>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends HistoryLocation>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends HistoryLocation>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends HistoryLocation>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
        rootURL: string;
    }
    var IS_BINDING: RegExp;
    class Instrumentation {
        getProperties(obj: any, list: any[]): {};
        getProperties(obj: any, ...string): {};
        instrument(name: string, payload: any, callback: Function, binding: any): void;
        reset(): void;
        subscribe(pattern: string, object: any): void;
        unsubscribe(subscriber: any): void;
    }
    var K: Function;
    var LOG_BINDINGS: boolean;
    var LOG_STACKTRACE_ON_DEPRECATION: boolean;
    var LOG_VERSION: boolean;
    class LinkView extends View implements ClassMixin {
        /**
        Creates a subclass of the LinkView class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends LinkView>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends LinkView>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends LinkView>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends LinkView>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
        init(): void;
        active: any;
        activeClass: string;
        attributeBindings: any;
        classNameBindings: string[];
        disabled: any;
        disabledClass: string;
        eventName: string;
        href: any;
        loading: any;
        loadingClass: string;
        loadingHref: string;
        rel: any;
        replace: boolean;
        title: any;
        click: Function;
    }
    class Location {
        create(options?: {}): any;
        registerImplementation(name: string, implementation: any): void;
    }
    var Logger: {
        assert(param: any): void;
        debug(...any): void;
        error(...any): void;
        info(...any): void;
        log(...any): void;
        warn(...any): void;
    };
    function MANDATORY_SETTER_FUNCTION(value: string): void;
    var META_KEY: string;
    class Map {
        copy(): Map;
        static create(): Map;
        forEach(callback: Function, self: any): void;
        get(key: any): any;
        has(key: any): boolean;
        remove(key: any): boolean;
        set(key: any, value: any): void;
        length: number;
    }
    class MapWithDefault extends Map {
        copy(): MapWithDefault;
        static create(): MapWithDefault;
    }
    class Mixin {
        apply(obj: any): any;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends Mixin>(arguments?: {}): T;
        detect(obj: any): boolean;
        reopen<T extends Mixin>(arguments?: {}): T;
    }
    class MutableArray implements Array, MutableEnumberable {
        addArrayObserver(target: any, opts?: EnumerableConfigurationOptions): Array;
        addEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
        any(callback: Function, target?: any): boolean;
        anyBy(key: string, value?: string): boolean;
        arrayContentDidChange(startIdx: number, removeAmt: number, addAmt: number): Array;
        arrayContentWillChange(startIdx: number, removeAmt: number, addAmt: number): Array;
        someProperty(key: string, value?: string): boolean;
        clear(): any[];
        compact(): any[];
        contains(obj: any): boolean;
        enumerableContentDidChange(start: number, removing: number, adding: number);
        enumerableContentDidChange(start: number, removing: Enumerable, adding: number);
        enumerableContentDidChange(start: number, removing: number, adding: Enumerable);
        enumerableContentDidChange(start: number, removing: Enumerable, adding: Enumerable);
        enumerableContentDidChange(removing: number, adding: number);
        enumerableContentDidChange(removing: Enumerable, adding: number);
        enumerableContentDidChange(removing: number, adding: Enumerable);
        enumerableContentDidChange(removing: Enumerable, adding: Enumerable);
        enumerableContentWillChange(removing: number, adding: number): Enumerable;
        enumerableContentWillChange(removing: Enumerable, adding: number): Enumerable;
        enumerableContentWillChange(removing: number, adding: Enumerable): Enumerable;
        enumerableContentWillChange(removing: Enumerable, adding: Enumerable): Enumerable;
        every(callback: Function, target?: any): boolean;
        everyBy(key: string, value?: string): boolean;
        everyProperty(key: string, value?: string): boolean;
        filter(callback: Function, target: any): any[];
        filterBy(key: string, value?: string): any[];
        find(callback: Function, target: any): any;
        findBy(key: string, value?: string): any;
        forEach(callback: Function, target?: any): any;
        getEach(key: string): any[];
        indexOf(object: any, startAt: number): number;
        insertAt(idx: number, object: any): MutableArray;
        invoke(methodName: string, ...any): any[];
        lastIndexOf(object: any, startAt: number): number;
        map: ItemIndexEnumerableCallbackTarget;
        mapBy(key: string): any[];
        nextObject(index: number, previousObject: any, context: any): any;
        objectAt(idx: number): any;
        objectsAt(...number): any[];
        popObject(): any;
        pushObject(obj: any): any;
        pushObjects(...any): MutableArray;
        reduce(callback: ReduceCallback, initialValue: any, reducerProperty: string): any;
        reject: ItemIndexEnumerableCallbackTarget;
        rejectBy(key: string, value?: string): any[];
        removeArrayObserver(target: any, opts: EnumerableConfigurationOptions): Array;
        removeAt(start: number, len: number): any;
        removeEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
        replace(idx: number, amt: number, objects: any[]);
        reverseObjects(): Array;
        setEach(key: string, value?: any): any;
        setObjects(objects: any[]): Array;
        shiftObject(): any;
        slice(beginIndex?: number, endIndex?: number): any[];
        some(callback: Function, target?: any): boolean;
        toArray(): any[];
        uniq(): Enumerable;
        unshiftObject(object: any): any;
        unshiftObjects(objects: any[]): Array;
        without(value: any): Enumerable;
        '[]': Array;
        '@each': EachProxy;
        Boolean: boolean;
        firstObject: any;
        hasEnumerableObservers: boolean;
        lastObject: any;
        length: number;
        addObject(object: any): any;
        addObjects(objects: Enumerable): MutableEnumberable;
        removeObject(object: any): any;
        removeObjects(objects: Enumerable): MutableEnumberable;
    }
    class MutableEnumberable implements Enumerable {
        addEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
        addObject(object: any): any;
        addObjects(objects: Enumerable): MutableEnumberable;
        any(callback: Function, target?: any): boolean;
        anyBy(key: string, value?: string): boolean;
        someProperty(key: string, value?: string): boolean;
        compact(): any[];
        contains(obj: any): boolean;
        enumerableContentDidChange(start: number, removing: number, adding: number);
        enumerableContentDidChange(start: number, removing: Enumerable, adding: number);
        enumerableContentDidChange(start: number, removing: number, adding: Enumerable);
        enumerableContentDidChange(start: number, removing: Enumerable, adding: Enumerable);
        enumerableContentDidChange(removing: number, adding: number);
        enumerableContentDidChange(removing: Enumerable, adding: number);
        enumerableContentDidChange(removing: number, adding: Enumerable);
        enumerableContentDidChange(removing: Enumerable, adding: Enumerable);
        enumerableContentWillChange(removing: number, adding: number): Enumerable;
        enumerableContentWillChange(removing: Enumerable, adding: number): Enumerable;
        enumerableContentWillChange(removing: number, adding: Enumerable): Enumerable;
        enumerableContentWillChange(removing: Enumerable, adding: Enumerable): Enumerable;
        every(callback: Function, target?: any): boolean;
        everyBy(key: string, value?: string): boolean;
        everyProperty(key: string, value?: string): boolean;
        filter(callback: Function, target: any): any[];
        filterBy(key: string, value?: string): any[];
        find(callback: Function, target: any): any;
        findBy(key: string, value?: string): any;
        forEach(callback: Function, target?: any): any;
        getEach(key: string): any[];
        invoke(methodName: string, ...any): any[];
        map: ItemIndexEnumerableCallbackTarget;
        mapBy(key: string): any[];
        nextObject(index: number, previousObject: any, context: any): any;
        reduce(callback: ReduceCallback, initialValue: any, reducerProperty: string): any;
        reject: ItemIndexEnumerableCallbackTarget;
        rejectBy(key: string, value?: string): any[];
        removeEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
        removeObject(object: any): any;
        removeObjects(objects: Enumerable): MutableEnumberable;
        setEach(key: string, value?: any): any;
        some(callback: Function, target?: any): boolean;
        toArray(): any[];
        uniq(): Enumerable;
        without(value: any): Enumerable;
        '[]': Array;
        firstObject: any;
        hasEnumerableObservers: boolean;
        lastObject: any;
    }
    var NAME_KEY: string;
    class Namespace extends Object implements ClassMixin {
        /**
        Creates a subclass of the Namespace class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends Namespace>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends Namespace>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends Namespace>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends Namespace>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
    }
    class NativeArray implements MutableArray, Observable, Copyable {
        constructor(arr: any[]);
        constructor(arr: NativeArray);
        static activate(): void;
        addArrayObserver(target: any, opts?: EnumerableConfigurationOptions): NativeArray;
        addEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): NativeArray;
        any(callback: Function, target?: any): boolean;
        anyBy(key: string, value?: string): boolean;
        arrayContentDidChange(startIdx: number, removeAmt: number, addAmt: number): NativeArray;
        arrayContentWillChange(startIdx: number, removeAmt: number, addAmt: number): NativeArray;
        someProperty(key: string, value?: any): boolean;
        clear(): any[];
        compact(): any[];
        contains(obj: any): boolean;
        enumerableContentDidChange(start: number, removing: number, adding: number);
        enumerableContentDidChange(start: number, removing: Enumerable, adding: number);
        enumerableContentDidChange(start: number, removing: number, adding: Enumerable);
        enumerableContentDidChange(start: number, removing: Enumerable, adding: Enumerable);
        enumerableContentDidChange(removing: number, adding: number);
        enumerableContentDidChange(removing: Enumerable, adding: number);
        enumerableContentDidChange(removing: number, adding: Enumerable);
        enumerableContentDidChange(removing: Enumerable, adding: Enumerable);
        enumerableContentWillChange(removing: number, adding: number): NativeArray;
        enumerableContentWillChange(removing: Enumerable, adding: number): NativeArray;
        enumerableContentWillChange(removing: number, adding: Enumerable): NativeArray;
        enumerableContentWillChange(removing: Enumerable, adding: Enumerable): NativeArray;
        every(callback: Function, target?: any): boolean;
        everyBy(key: string, value?: string): boolean;
        everyProperty(key: string, value?: any): boolean;
        filter(callback: Function, target: any): any[];
        filterBy(key: string, value?: string): any[];
        find(callback: Function, target: any): any;
        findBy(key: string, value?: string): any;
        forEach(callback: Function, target?: any): any;
        getEach(key: string): any[];
        indexOf(object: any, startAt: number): number;
        insertAt(idx: number, object: any): NativeArray;
        invoke(methodName: string, ...any): any[];
        lastIndexOf(object: any, startAt: number): number;
        map: ItemIndexEnumerableCallbackTarget;
        mapBy(key: string): any[];
        nextObject(index: number, previousObject: any, context: any): any;
        objectAt(idx: number): any;
        objectsAt(...number): any[];
        popObject(): any;
        pushObject(obj: any): any;
        pushObjects(...any): NativeArray;
        reduce(callback: ReduceCallback, initialValue: any, reducerProperty: string): any;
        reject: ItemIndexEnumerableCallbackTarget;
        rejectBy(key: string, value?: string): any[];
        removeArrayObserver(target: any, opts: EnumerableConfigurationOptions): NativeArray;
        removeAt(start: number, len: number): any;
        removeEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): NativeArray;
        replace(idx: number, amt: number, objects: any[]);
        reverseObjects(): NativeArray;
        setEach(key: string, value?: any): any;
        setObjects(objects: any[]): NativeArray;
        shiftObject(): any;
        slice(beginIndex?: number, endIndex?: number): any[];
        some(callback: Function, target?: any): boolean;
        toArray(): any[];
        uniq(): NativeArray;
        unshiftObject(object: any): any;
        unshiftObjects(objects: any[]): NativeArray;
        without(value: any): NativeArray;
        '[]': Array;
        '@each': EachProxy;
        Boolean: boolean;
        firstObject: any;
        hasEnumerableObservers: boolean;
        lastObject: any;
        length: number;
        addObject(object: any): any;
        addObjects(objects: Enumerable): NativeArray;
        removeObject(object: any): any;
        removeObjects(objects: Enumerable): NativeArray;
        addObserver: ModifyObserver;
        beginPropertyChanges(): NativeArray;
        cacheFor(keyName: string): any;
        decrementProperty(keyName: string, decrement?: number): number;
        endPropertyChanges(): NativeArray;
        get(keyName: string): any;
        getProperties(...string): {};
        getProperties(keys: string[]): {};
        getWithDefault(keyName: string, defaultValue: any): any;
        hasObserverFor(key: string): boolean;
        incrementProperty(keyName: string, increment?: number): number;
        notifyPropertyChange(keyName: string): NativeArray;
        propertyDidChange(keyName: string): NativeArray;
        propertyWillChange(keyName: string): NativeArray;
        removeObserver(key: string, target: any, method: string): Observable;
        removeObserver(key: string, target: any, method: Function): Observable;
        set(keyName: string, value: any): NativeArray;
        setProperties(hash: {}): NativeArray;
        toggleProperty(keyName: string): any;
        copy(deep: boolean): NativeArray;
        frozenCopy(): NativeArray;
    }
    class NoneLocation extends Object implements ClassMixin {
        /**
        Creates a subclass of the NoneLocation class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends NoneLocation>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends NoneLocation>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends NoneLocation>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends NoneLocation>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
    }
    var ORDER_DEFINITION: string[];
    class Object extends CoreObject implements Observable, ClassMixin {
        /**
        Creates a subclass of the Object class.
        **/
        static extend<T>(arguments?: CoreObjectArguments): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends Object>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends Object>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends Object>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends Object>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
        addObserver: ModifyObserver;
        beginPropertyChanges(): Observable;
        cacheFor(keyName: string): any;
        decrementProperty(keyName: string, decrement?: number): number;
        endPropertyChanges(): Observable;
        get(keyName: string): any;
        getProperties(...string): {};
        getProperties(keys: string[]): {};
        getWithDefault(keyName: string, defaultValue: any): any;
        hasObserverFor(key: string): boolean;
        incrementProperty(keyName: string, increment?: number): number;
        notifyPropertyChange(keyName: string): Observable;
        propertyDidChange(keyName: string): Observable;
        propertyWillChange(keyName: string): Observable;
        removeObserver(key: string, target: any, method: string): Observable;
        removeObserver(key: string, target: any, method: Function): Observable;
        set(keyName: string, value: any): Observable;
        setProperties(hash: {}): Observable;
        toggleProperty(keyName: string): any;
    }
    class ObjectController extends ObjectProxy implements ControllerMixin {
        replaceRoute(name: string, ...any): void;
        transitionToRoute(name: string, ...any): void;
        controllers: Object;
        needs: string[];
        target: any;
    }
    class ObjectProxy extends Object implements ClassMixin {
        /**
        Creates a subclass of the ObjectProxy class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends ObjectProxy>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends ObjectProxy>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends ObjectProxy>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends ObjectProxy>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
        /**
        The object whose properties will be forwarded.
        **/
        content: Object;
    }
    class Observable {
        addObserver: ModifyObserver;
        beginPropertyChanges(): Observable;
        cacheFor(keyName: string): any;
        decrementProperty(keyName: string, decrement?: number): number;
        endPropertyChanges(): Observable;
        get(keyName: string): any;
        getProperties(...string): {};
        getProperties(keys: string[]): {};
        getWithDefault(keyName: string, defaultValue: any): any;
        hasObserverFor(key: string): boolean;
        incrementProperty(keyName: string, increment?: number): number;
        notifyPropertyChange(keyName: string): Observable;
        propertyDidChange(keyName: string): Observable;
        propertyWillChange(keyName: string): Observable;
        removeObserver(key: string, target: {}, method: string): Observable;
        removeObserver(key: string, target: {}, method: Function): Observable;
        set(keyName: string, value: any): Observable;
        setProperties(hash: {}): Observable;
        toggleProperty(keyName: string): any;
    }
    class OrderedSet {
        add(obj: any): void;
        clear(): void;
        copy(): OrderedSet;
        static create(): OrderedSet;
        forEach(fn: Function, self: any): void;
        has(obj: any): boolean;
        isEmpty(): boolean;
        remove(obj: any): void;
        toArray(): any[];
    }
    module RSVP {
        class Promise {
            then(done?: Function, fail?: Function): Promise;
        }
    }
    class RenderBuffer {
        addClass(className: string): RenderBuffer;
        attr(name: string, value: any): any;
        element(): HTMLElement;
        id(id: string): RenderBuffer;
        prop(name: string, value: string): any;
        push(string: string): RenderBuffer;
        removeAttr(name: string): RenderBuffer;
        removeProp(name: string): RenderBuffer;
        string(): string;
        style(name: string, value: string): RenderBuffer;
        classes: any[];
        elementAttributes: {};
        elementId: string;
        elementProperties: {};
        elementStyle: {};
        elementTag: string;
        parentBuffer: RenderBuffer;
    }
    class Route extends Object implements ClassMixin {
        /**
        Creates a subclass of the Route class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends Route>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends Route>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends Route>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends Route>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
        activate: Function;
        afterModel(resolvedModel: any, transition: EmberStates.Transition): RSVP.Promise;
        beforeModel(transition: EmberStates.Transition): RSVP.Promise;
        controllerFor(name: string): Controller;
        deactivate: Function;
        disconnectOutlet(options?: DisconnectOutletOptions): void;
        generateController(name: string, model: {}): void;
        model(params: {}, transition: EmberStates.Transition): any;
        modelFor(name: string): {};
        render(name: string, options?: RenderOptions): void;
        renderTemplate(controller: Controller, model: {}): void;
        replaceWith(name: string, ...Object): void;
        send(name: string, ...any): void;
        serialize(model: {}, params: string[]): string;
        setupController(controller: Controller, model: {}): void;
        transitionTo(name: string, ...Object): void;
        actions: ActionsHash;
    }
    class Router extends Object implements ClassMixin {
        /**
        Creates a subclass of the Router class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends Router>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends Router>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends Router>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends Router>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
    }
    var RouterDSL: Function;
    var SHIM_ES5: boolean;
    var STRINGS: boolean;
    class Select extends View implements ClassMixin {
        /**
        Creates a subclass of the View class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends Select>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends Select>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends Select>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends Select>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
        content: any[];
        groupView: View;
        multiple: boolean;
        optionGroupPath: string;
        optionLabelPath: string;
        optionValuePath: string;
        optionView: View;
        prompt: string;
        selection: any;
        value: string;
    }
    class SelectOption extends View implements ClassMixin {
        /**
        Creates a subclass of the SelectOption class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends SelectOption>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends SelectOption>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends SelectOption>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends SelectOption>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
    }
    class Set extends CoreObject implements MutableEnumberable, Copyable, Freezable {
        addEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Set;
        addObject(object: any): any;
        addObjects(objects: Enumerable): Set;
        any(callback: Function, target?: any): boolean;
        anyBy(key: string, value?: string): boolean;
        someProperty(key: string, value?: string): boolean;
        compact(): any[];
        contains(obj: any): boolean;
        enumerableContentDidChange(start: number, removing: number, adding: number);
        enumerableContentDidChange(start: number, removing: Enumerable, adding: number);
        enumerableContentDidChange(start: number, removing: number, adding: Enumerable);
        enumerableContentDidChange(start: number, removing: Enumerable, adding: Enumerable);
        enumerableContentDidChange(removing: number, adding: number);
        enumerableContentDidChange(removing: Enumerable, adding: number);
        enumerableContentDidChange(removing: number, adding: Enumerable);
        enumerableContentDidChange(removing: Enumerable, adding: Enumerable);
        enumerableContentWillChange(removing: number, adding: number): Set;
        enumerableContentWillChange(removing: Enumerable, adding: number): Set;
        enumerableContentWillChange(removing: number, adding: Enumerable): Set;
        enumerableContentWillChange(removing: Enumerable, adding: Enumerable): Set;
        every(callback: Function, target?: any): boolean;
        everyBy(key: string, value?: string): boolean;
        everyProperty(key: string, value?: string): boolean;
        filter(callback: Function, target: any): any[];
        filterBy(key: string, value?: string): any[];
        find(callback: Function, target: any): any;
        findBy(key: string, value?: string): any;
        forEach(callback: Function, target?: any): any;
        getEach(key: string): any[];
        invoke(methodName: string, ...any): any[];
        map: ItemIndexEnumerableCallbackTarget;
        mapBy(key: string): any[];
        nextObject(index: number, previousObject: any, context: any): any;
        reduce(callback: ReduceCallback, initialValue: any, reducerProperty: string): any;
        reject: ItemIndexEnumerableCallbackTarget;
        rejectBy(key: string, value?: string): any[];
        removeEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Set;
        removeObject(object: any): any;
        removeObjects(objects: Enumerable): Set;
        setEach(key: string, value?: any): any;
        some(callback: Function, target?: any): boolean;
        toArray(): any[];
        uniq(): Set;
        without(value: any): Set;
        '[]': Array;
        firstObject: any;
        hasEnumerableObservers: boolean;
        lastObject: any;
        copy(deep: boolean): Set;
        frozenCopy(): Set;
        freeze(): Set;
        isFrozen: boolean;
        add(obj: any): Set;
        addEach(...any): Set;
        clear(): Set;
        isEqual(obj: Set): boolean;
        pop(): any;
        push(obj: any): Set;
        remove(obj: any): Set;
        removeEach(...any): Set;
        shift(): any;
        unshift(obj: any): Set;
        length: number;
    }
    class SortableMixin implements MutableEnumberable {
        addEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
        addObject(object: any): any;
        addObjects(objects: Enumerable): MutableEnumberable;
        any(callback: Function, target?: any): boolean;
        anyBy(key: string, value?: string): boolean;
        someProperty(key: string, value?: string): boolean;
        compact(): any[];
        contains(obj: any): boolean;
        enumerableContentDidChange(start: number, removing: number, adding: number);
        enumerableContentDidChange(start: number, removing: Enumerable, adding: number);
        enumerableContentDidChange(start: number, removing: number, adding: Enumerable);
        enumerableContentDidChange(start: number, removing: Enumerable, adding: Enumerable);
        enumerableContentDidChange(removing: number, adding: number);
        enumerableContentDidChange(removing: Enumerable, adding: number);
        enumerableContentDidChange(removing: number, adding: Enumerable);
        enumerableContentDidChange(removing: Enumerable, adding: Enumerable);
        enumerableContentWillChange(removing: number, adding: number): Enumerable;
        enumerableContentWillChange(removing: Enumerable, adding: number): Enumerable;
        enumerableContentWillChange(removing: number, adding: Enumerable): Enumerable;
        enumerableContentWillChange(removing: Enumerable, adding: Enumerable): Enumerable;
        every(callback: Function, target?: any): boolean;
        everyBy(key: string, value?: string): boolean;
        everyProperty(key: string, value?: string): boolean;
        filter(callback: Function, target: any): any[];
        filterBy(key: string, value?: string): any[];
        find(callback: Function, target: any): any;
        findBy(key: string, value?: string): any;
        forEach(callback: Function, target?: any): any;
        getEach(key: string): any[];
        invoke(methodName: string, ...any): any[];
        map: ItemIndexEnumerableCallbackTarget;
        mapBy(key: string): any[];
        nextObject(index: number, previousObject: any, context: any): any;
        reduce(callback: ReduceCallback, initialValue: any, reducerProperty: string): any;
        reject: ItemIndexEnumerableCallbackTarget;
        rejectBy(key: string, value?: string): any[];
        removeEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
        removeObject(object: any): any;
        removeObjects(objects: Enumerable): MutableEnumberable;
        setEach(key: string, value?: any): any;
        some(callback: Function, target?: any): boolean;
        toArray(): any[];
        uniq(): Enumerable;
        without(value: any): Enumerable;
        '[]': Array;
        arrangedContent: any;
        firstObject: any;
        hasEnumerableObservers: boolean;
        lastObject: any;
        sortAscending: boolean;
        sortFunction: Comparable;
        sortProperties: any[];
    }
    class State extends Object implements Evented, ClassMixin {
        /**
        Creates a subclass of the State class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends State>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends State>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends State>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends State>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
        has(name: string): boolean;
        off(name: string, target: any, method: Function): State;
        on(name: string, target: any, method: Function): State;
        one(name: string, target: any, method: Function): State;
        trigger(name: string, ...string): void;
        getPathsCache(stateManager: {}, path: string): {};
        init(): void;
        setPathsCache(stateManager: {}, path: string, transitions: any): void;
        static transitionTo(target: string): void;
        hasContext: boolean;
        isLeaf: boolean;
        name: string;
        parentState: State;
        path: string;
        enter: Function;
        exit: Function;
        setup: Function;
    }
    class StateManager extends State implements ClassMixin {
        /**
        Creates a subclass of the StateManager class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends StateManager>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends StateManager>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends StateManager>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends StateManager>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
        contextFreeTransition(currentState: State, path: string): TransitionsHash;
        enterState(transition: TransitionsHash): void;
        getState(name: string): State;
        getStateByPath(root: State, path: string): State;
        getStateMeta(state: State, key: string): any;
        getStatesInPath(root: State, path: string): State[];
        goToState(path: string, context: any): void;
        send(event: string): void;
        setStateMeta(state: State, key: string, value: any): any;
        stateMetaFor(state: State): {};
        transitionTo(path: string, context: any): void;
        triggerSetupContext(transitions: TransitionsHash): void;
        unhandledEvent(manager: StateManager, event: string);
        currentPath: string;
        currentState: State;
        errorOnUnhandledEvents: boolean;
        transitionEvent: string;
    }
    module String {
        function camelize(str: string): string;
        function capitalize(str: string): string;
        function classify(str: string): string;
        function dasherize(str: string): string;
        function decamelize(str: string): string;
        function fmt(...string): string;
        function htmlSafe(str: string): void; // TODO: @returns Handlebars.SafeStringStatic;
        function loc(...string): string;
        function underscore(str: string): string;
        function w(str: string): string[];
    }
    var TEMPLATES: {};
    class TargetActionSupport {
        triggerAction(opts: {}): boolean;
    }
    class Test {
        click(selector: string): RSVP.Promise;
        fillin(selector: string, text: string): RSVP.Promise;
        find(selector: string): JQuery;
        findWithAssert(selector: string): JQuery;
        injectTestHelpers(): void;
        keyEvent(selector: string, type: string, keyCode: number): RSVP.Promise;
        static oninjectHelpers(callback: Function): void;
        static promise(resolver: Function): RSVP.Promise;
        static registerHelper(name: string, helperMethod: Function): void;
        removeTestHelpers(): void;
        setupForTesting(): void;
        static unregisterHelper(name: string): void;
        visit(url: string): RSVP.Promise;
        wait(value: any): RSVP.Promise;
        static adapter: Object;
        testHelpers: {};
    }
    class TextArea extends View implements TextSupport, ClassMixin {
        /**
        Creates a subclass of the TextArea class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends TextArea>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends TextArea>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends TextArea>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends TextArea>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
        cancel(event: Function): void;
        focusIn(event: Function): void;
        focusOut(event: Function): void;
        insertNewLine(event: Function): void;
        keyPress(event: Function): void;
        action: string;
        bubbles: boolean;
        onEvent: string;
    }
    class TextField extends View implements TextSupport, ClassMixin {
        /**
        Creates a subclass of the TextField class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends TextField>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends TextField>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends TextField>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends TextField>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
        cancel(event: Function): void;
        focusIn(event: Function): void;
        focusOut(event: Function): void;
        insertNewLine(event: Function): void;
        keyPress(event: Function): void;
        action: string;
        bubbles: boolean;
        onEvent: string;
        pattern: string;
        size: string;
        type: string;
        value: string;
    }
    class TextSupport {
        cancel(event: Function): void;
        focusIn(event: Function): void;
        focusOut(event: Function): void;
        insertNewLine(event: Function): void;
        keyPress(event: Function): void;
        action: string;
        bubbles: boolean;
        onEvent: string;
    }
    var VERSION: string;
    class View extends CoreView implements ClassMixin {
        /**
        Creates a subclass of the View class.
        **/
        static extend<T>(arguments?: {}): T;
        /**
        Creates an instance of the class.
        @param arguments A hash containing values with which to initialize the newly instantiated object.
        **/
        static create<T extends View>(arguments?: {}): T;
        /**
        Equivalent to doing extend(arguments).create(). If possible use the normal create method instead.
        **/
        static createWithMixins<T extends View>(arguments?: {}): T;
        static detect(obj: any): boolean;
        static detectInstance(obj: any): boolean;
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
        /**
        Augments a constructor's prototype with additional properties and functions.
        To add functions and properties to the constructor itself, see reopenClass.
        **/
        static reopen<T extends View>(arguments?: {}): T;
        /**
        Augments a constructor's own properties and functions.
        To add functions and properties to instances of a constructor by extending the
        constructor's prototype see reopen.
        **/
        static reopenClass<T extends View>(arguments?: {}): T;
        static isClass: boolean;
        static isMethod: boolean;
        $(): JQuery;
        append(): View;
        appendTo(A: string): View;
        appendTo(A: HTMLElement): View;
        appendTo(A: JQuery): View;
        createChildView(viewClass: {}, attrs?: {}): View;
        createChildView(viewClass: string, attrs?: {}): View;
        createElement(): View;
        destroy(): View;
        destroyElement(): View;
        findElementInParentElement(parentElement: HTMLElement): HTMLElement;
        remove(): View;
        removeAllChildren(): View;
        removeChild(view: View): View;
        removeFromParent(): View;
        render(buffer: RenderBuffer): void;
        replaceIn(A: string): View;
        replaceIn(A: HTMLElement): View;
        replaceIn(A: JQuery): View;
        rerender(): void;
        ariaRole: string;
        attributeBindings: any;
        classNameBindings: string[];
        classNames: string[];
        context: any;
        controller: any;
        element: HTMLElement;
        isView: boolean;
        isVisible: boolean;
        layout: Function;
        layoutName: string;
        nearestChildOf: View;
        nearestOfType: View;
        nearestWithProperty: View;
        tagName: string;
        template: Function;
        templateName: string;
        templates: {};
        views: {};
        didInsertElement: Function;
        parentViewDidChange: Function;
        willClearRender: Function;
        willDestroyElement: Function;
        willInsertElement: Function;
    }
    class ViewTargetActionSupport extends Mixin {
        target: any;
        actionContext: any;
    }
    var ViewUtils: {}; // TODO: define interface
    function addBeforeObserver(obj: any, path: string, target: any, method: Function): any;
    function addListener(obj: any, eventName: string, target: any, method: Function, once?: boolean): void;
    function addListener(obj: any, eventName: string, target: any, method: string, once?: boolean): void;
    function addListener(obj: any, eventName: string, func: Function, method: Function, once?: boolean): void;
    function addListener(obj: any, eventName: string, func: Function, method: string, once?: boolean): void;
    var addObserver: ModifyObserver;
    /**
    Ember.alias is deprecated. Please use Ember.aliasMethod or Ember.computed.alias instead.
    **/
    var alias: typeof deprecateFunc;
    function aliasMethod(methodName: string): Descriptor;
    var anyUnprocessedMixins: boolean;
    function assert(desc: string, test: boolean): void;
    function beforeObserver(func: Function, propertyName: string): Function;
    function beforeObserversFor(obj: any, path: string): string[];
    function beginPropertyChanges(): void;
    function bind(obj: any, to: string, from: string): Binding;
    function cacheFor(obj: any, key: string): any;
    function canInvoke(obj: any, methodName: string): boolean;
    function changeProperties(callback: Function, binding?: any): void;
    function compare(v: any, w: any): number;
    var computed: {
        (callback: Function): ComputedProperty;
        alias(dependentKey: string): ComputedProperty;
        and(...string): ComputedProperty;
        any(...string): ComputedProperty;
        bool(dependentKey: string): ComputedProperty;
        defaultTo(defaultPath: string): ComputedProperty;
        empty(dependentKey: string): ComputedProperty;
        equal(dependentKey: string, value: any): ComputedProperty;
        gt(dependentKey: string, value: number): ComputedProperty;
        gte(dependentKey: string, value: number): ComputedProperty;
        lt(dependentKey: string, value: number): ComputedProperty;
        lte(dependentKey: string, value: number): ComputedProperty;
        map(...string): ComputedProperty;
        match(dependentKey: string, regexp: RegExp): ComputedProperty;
        none(dependentKey: string): ComputedProperty;
        not(dependentKey: string): ComputedProperty;
        notEmpty(dependentKey: string): ComputedProperty;
        oneWay(dependentKey: string): ComputedProperty;
        or(...string): ComputedProperty;
    };
    var config: {};
    function controllerFor(container: Container, controllerName: string, lookupOptions?: {}): Controller;
    function copy(obj: any, deep: boolean): any;
    /**
    Creates an instance of the CoreObject class.
    @param arguments A hash containing values with which to initialize the newly instantiated object.
    **/
    function create(arguments?: {}): CoreObject;
    function debug(message: string): void;
    function defineProperty(obj: any, keyName: string, desc: {}): void;
    function deprecate(message: string, test?: boolean): void;
    function deprecateFunc(message: string, func: Function): Function;
    function destroy(obj: any): void;
    /**
    Ember.empty is deprecated. Please use Ember.isEmpty instead.
    **/
    var empty: typeof deprecateFunc;
    function endPropertyChanges(): void;
    var exports: {};
    function finishChains(obj: any): void;
    function flushPendingChains(): void;
    function generateController(container: Container, controllerName: string, context: any): Controller;
    function generateGuid(obj: any, prefix?: string): string;
    function get(obj: any, keyName: string): any;
    function getMeta(obj: any, property: string): any;
    /**
    getPath is deprecated since get now supports paths.
    **/
    var getPath: typeof deprecateFunc;
    function getWithDefault(root: string, key: string, defaultValue: any): any;
    function guidFor(obj: any): string;
    function handleErrors(func: Function, context: any): any;
    function hasListeners(context: any, name: string): boolean;
    function hasOwnProperty(prop: string): boolean;
    function immediateObserver(func: Function, ...propertyNames): Function;
    var imports: {};
    function inspect(obj: any): string;
    function instrument(name: string, payload: any, callback: Function, binding: any): void;
    function isArray(obj: any): boolean;
    function isEmpty(obj: any): boolean;
    function isEqual(a: any, b: any): boolean;
    function isGlobalPath(path: string): boolean;
    var isNamespace: boolean;
    function isNone(obj: any): boolean;
    function isPrototypeOf(obj: {}): boolean;
    function isWatching(obj: any, key: string): boolean;
    function keys(obj: any): any[];
    function listenersDiff(obj: any, eventName: string, otherActions: any[]): any[];
    function listenersFor(obj: any, eventName: string): any[];
    function listenersUnion(obj: any, eventName: string, otherActions: any[]): void;
    var lookup: {}; // TODO: define interface
    function makeArray(obj: any): any[];
    function merge(original: any, updates: any): any;
    function meta(obj: any, writable?: boolean): {};
    function metaPath(obj: any, path: string, writable?: boolean): any;
    function mixin(obj: any, ...any): any;
    /**
    Ember.none is deprecated. Please use Ember.isNone instead.
    **/
    var none: typeof deprecateFunc;
    function normalizeTuple(target: any, path: string): any[];
    function observer(func: Function, ...string): Function;
    function observersFor(obj: any, path: string): any[];
    function onLoad(name: string, callback: Function): void;
    function oneWay(obj: any, to: string, from: string): Binding;
    var onError: Error;
    function overrideChains(obj: any, keyName: string, m: any): boolean;
    var platform: {
        addBeforeObserver: ModifyObserver;
        addObserver: ModifyObserver;
        defineProperty(obj: any, keyName: string, desc: {}): void;
        removeBeforeObserver: ModifyObserver;
        removeObserver: ModifyObserver;
        hasPropertyAccessors: boolean;
    };
    function propertyDidChange(obj: any, keyName: string): void;
    function propertyIsEnumerable(prop: string): boolean;
    function propertyWillChange(obj: any, keyName: string): void;
    function removeBeforeObserver(obj: any, path: string, target: any, method: Function): any;
    function removeChainWatcher(obj: any, keyName: string, node: any): void;
    function removeListener(obj: any, eventName: string, target: any, method: Function): void;
    function removeListener(obj: any, eventName: string, target: any, method: string): void;
    function removeListener(obj: any, eventName: string, func: Function, method: Function): void;
    function removeListener(obj: any, eventName: string, func: Function, method: string): void;
    function removeObserver(obj: any, path: string, target: any, method: Function): any;
    function required(): Descriptor;
    function rewatch(obj: any): void;
    var run: {
        (target: any, method: Function): void;
        begin(): void;
        cancel(timer: any): void;
        debounce(target: any, method: Function, ...args: any[]): void;
        debounce(target: any, method: string, ...args: any[]): void;
        end(): void;
        join(target: any, method: Function, ...any): any;
        join(target: any, method: string, ...any): any;
        later(target: any, method: Function, ...args: any[]): string;
        later(target: any, method: string, ...args: any[]): string;
        next(target: any, method: Function, ...any): number;
        next(target: any, method: string, ...any): number;
        once(target: any, method: Function, ...any): number;
        once(target: any, method: string, ...any): number;
        schedule(queue: string, target: any, method: Function, ...any): void;
        schedule(queue: string, target: any, method: string, ...any): void;
        scheduleOnce(queue: string, target: any, method: Function, ...any): void;
        scheduleOnce(queue: string, target: any, method: string, ...any): void;
        sync(): void;
        throttle(target: any, method: Function, ...args: any[]): void;
        throttle(target: any, method: string, ...args: any[]): void;
        queues: any[];
    };
    function runLoadHooks(name: string, object: any): void;
    function sendEvent(obj: any, eventName: string, params?: any[], actions?: any[]): boolean;
    function set(obj: any, keyName: string, value: any): any;
    function setMeta(obj: any, property: string, value: any): void;
    /**
    setPath is deprecated since set now supports paths.
    **/
    var setPath: typeof deprecateFunc;
    function setProperties(self: any, hash: {}): any;
    function subscribe(pattern: string, object: any): void;
    function toLocaleString(): string;
    function toString(): string;
    function tryCatchFinally(tryable: Function, catchable: Function, finalizer: Function, binding?: any): any;
    function tryFinally(tryable: Function, finalizer: Function, binding?: any): any;
    function tryInvoke(obj: any, methodName: string, args?: any[]): any;
    function trySet(obj: any, path: string, value: any): void;
    /**
    trySetPath has been renamed to trySet.
    **/
    var trySetPath: typeof deprecateFunc;
    function typeOf(item: any): string;
    function unwatch(obj: any, keyPath: string): void;
    function unwatchKey(obj: any, keyName: string): void;
    function unwatchPath(obj: any, keyPath: string): void;
    var uuid: number;
    function valueOf(): {};
    function warn(message: string, test?: boolean): void;
    function watch(obj: any, keyPath: string): void;
    function watchKey(obj: any, keyName: string): void;
    function watchPath(obj: any, keyPath: string): void;
    function watchedEvents(obj: {}): any[];
    function wrap(func: Function, superFunc: Function): Function;
}

declare module Em {
    /**
    Alias for jQuery.
    **/
    var $: typeof Ember.$;
    var A: typeof Ember.A;
    class Application extends Ember.Application { }
    class Array extends Ember.Array { }
    class ArrayController extends Ember.ArrayController { }
    var ArrayPolyfills: typeof Ember.ArrayPolyfills;
    class ArrayProxy extends Ember.ArrayProxy { }
    var BOOTED: typeof Ember.BOOTED;
    class Binding extends Ember.Binding { }
    class Button extends Ember.Button { }
    class Checkbox extends Ember.Checkbox { }
    class CollectionView extends Ember.CollectionView { }
    class Comparable extends Ember.Comparable { }
    class Component extends Ember.Component { }
    class ComputedProperty extends Ember.ComputedProperty { }
    class Container extends Ember.Container { }
    class ContainerView extends Ember.ContainerView { }
    class Controller extends Ember.Controller { }
    class ControllerMixin extends Ember.ControllerMixin { }
    class Copyable extends Ember.Copyable { }
    class CoreObject extends Ember.CoreObject { }
    class CoreView extends Ember.CoreView { }
    class DAG extends Ember.DAG { }
    var DEFAULT_GETTER_FUNCTION: typeof Ember.DEFAULT_GETTER_FUNCTION;
    class DefaultResolver extends Ember.DefaultResolver { }
    class Deffered extends Ember.Deferred { }
    class DeferredMixin extends Ember.DeferredMixin { }
    class Descriptor extends Ember.Descriptor { }
    var EMPTY_META: typeof Ember.EMPTY_META;
    var ENV: typeof Ember.ENV;
    var EXTEND_PROTOTYPES: typeof Ember.EXTEND_PROTOTYPES;
    class EachProxy extends Ember.EachProxy { }
    class Enumerable extends Ember.Enumerable { }
    var EnumerableUtils: typeof Ember.EnumerableUtils;
    var Error: typeof Ember.Error;
    class EventDispatcher extends Ember.EventDispatcher { }
    class Evented extends Ember.Evented { }
    var FROZEN_ERROR: typeof Ember.FROZEN_ERROR;
    class Freezable extends Ember.Freezable { }
    var GUID_KEY: typeof Ember.GUID_KEY;
    module Handlebars {
        var compile: typeof Ember.Handlebars.compile;
        var get: typeof Ember.Handlebars.get;
        var helper: typeof Ember.Handlebars.helper;
        class helpers extends Ember.Handlebars.helpers { }
        var precompile: typeof Ember.Handlebars.precompile;
        var registerBoundHelper: typeof Ember.Handlebars.registerBoundHelper;
        class Compiler extends Ember.Handlebars.Compiler { }
        class JavaScriptCompiler extends Ember.Handlebars.JavaScriptCompiler { }
        var registerHelper: typeof Ember.Handlebars.registerHelper;
        var registerPartial: typeof Ember.Handlebars.registerPartial;
        var K: typeof Ember.Handlebars.K;
        var createFrame: typeof Ember.Handlebars.createFrame;
        var Exception: typeof Ember.Handlebars.Exception;
        class SafeString extends Ember.Handlebars.SafeString { }
        var parse: typeof Ember.Handlebars.parse;
        var print: typeof Ember.Handlebars.print;
        var logger: typeof Ember.Handlebars.logger;
        var log: typeof Ember.Handlebars.log;
        var compile: typeof Ember.Handlebars.compile;
    }
    class HashLocation extends Ember.HashLocation { }
    class HistoryLocation extends Ember.HistoryLocation { }
    var IS_BINDING: typeof Ember.IS_BINDING;
    class Instrumentation extends Ember.Instrumentation { }
    var K: typeof Ember.K;
    var LOG_BINDINGS: typeof Ember.LOG_BINDINGS;
    var LOG_STACKTRACE_ON_DEPRECATION: typeof Ember.LOG_STACKTRACE_ON_DEPRECATION;
    var LOG_VERSION: typeof Ember.LOG_VERSION;
    class LinkView extends Ember.LinkView { }
    class Location extends Ember.Location { }
    var Logger: typeof Ember.Logger;
    var MANDATORY_SETTER_FUNCTION: typeof Ember.MANDATORY_SETTER_FUNCTION;
    var META_KEY: typeof Ember.META_KEY;
    class Map extends Ember.Map { }
    class MapWithDefault extends Ember.MapWithDefault { }
    class Mixin extends Ember.Mixin { }
    class MutableArray extends Ember.MutableArray { }
    class MutableEnumerable extends Ember.MutableEnumberable { }
    var NAME_KEY: typeof Ember.NAME_KEY;
    class Namespace extends Ember.Namespace { }
    class NativeArray extends Ember.NativeArray { }
    class NoneLocation extends Ember.NoneLocation { }
    var ORDER_DEFINITION: typeof Ember.ORDER_DEFINITION;
    class Object extends Ember.Object { }
    class ObjectController extends Ember.ObjectController { }
    class ObjectProxy extends Ember.ObjectProxy { }
    class Observable extends Ember.Observable { }
    class OrderedSet extends Ember.OrderedSet { }
    module RSVP {
        class Promise extends Ember.RSVP.Promise { }
    }
    class RenderBuffer extends Ember.RenderBuffer { }
    class Route extends Ember.Route { }
    class Router extends Ember.Router { }
    var RouterDSL: typeof Ember.RouterDSL;
    var SHIM_ES5: typeof Ember.SHIM_ES5;
    var STRINGS: typeof Ember.STRINGS;
    class Select extends Ember.Select { }
    class SelectOption extends Ember.SelectOption { }
    class Set extends Ember.Set { }
    class SortableMixin extends Ember.SortableMixin { }
    class State extends Ember.State { }
    class StateManager extends Ember.StateManager { }
    module String {
        var camelize: typeof Ember.String.camelize;
        var capitalize: typeof Ember.String.capitalize;
        var classify: typeof Ember.String.classify;
        var dasherize: typeof Ember.String.dasherize;
        var decamelize: typeof Ember.String.decamelize;
        var fmt: typeof Ember.String.fmt;
        var htmlSafe: typeof Ember.String.htmlSafe;
        var loc: typeof Ember.String.loc;
        var underscore: typeof Ember.String.underscore;
        var w: typeof Ember.String.w;
    }
    var TEMPLATES: typeof Ember.TEMPLATES;
    class TargetActionSupport extends Ember.TargetActionSupport { }
    class Test extends Ember.Test { }
    class TextArea extends Ember.TextArea { }
    class TextField extends Ember.TextField { }
    class TextSupport extends Ember.TextSupport { }
    var VERSION: typeof Ember.VERSION;
    class View extends Ember.View { }
    class ViewTargetActionSupport extends Ember.ViewTargetActionSupport { }
    var ViewUtils: typeof Ember.ViewUtils;
    var addBeforeObserver: typeof Ember.addBeforeObserver;
    var addListener: typeof Ember.addListener;
    var addObserver: typeof Ember.addObserver;
    var alias: typeof Ember.alias;
    var aliasMethod: typeof Ember.aliasMethod;
    var anyUnprocessedMixins: typeof Ember.anyUnprocessedMixins;
    var assert: typeof Ember.assert;
    var beforeObserver: typeof Ember.beforeObserver;
    var beforeObserversFor: typeof Ember.beforeObserversFor;
    var beginPropertyChanges: typeof Ember.beginPropertyChanges;
    var bind: typeof Ember.bind;
    var cacheFor: typeof Ember.cacheFor;
    var canInvoke: typeof Ember.canInvoke;
    var changeProperties: typeof Ember.changeProperties;
    var compare: typeof Ember.compare;
    var computed: typeof Ember.computed;
    var config: typeof Ember.config;
    var controllerFor: typeof Ember.controllerFor;
    var copy: typeof Ember.copy;
    var create: typeof Ember.create;
    var debug: typeof Ember.debug;
    var defineProperty: typeof defineProperty;
    var deprecate: typeof deprecate;
    var deprecateFunc: typeof deprecateFunc;
    var destroy: typeof Ember.destroy;
    var empty: typeof deprecateFunc;
    var endPropertyChanges: typeof Ember.endPropertyChanges;
    var exports: typeof Ember.exports;
    var finishChains: typeof Ember.finishChains;
    var flushPendingChains: typeof Ember.flushPendingChains;
    var generateController: typeof Ember.generateController;
    var generateGuid: typeof Ember.generateGuid;
    var get: typeof Ember.get;
    var getMeta: typeof Ember.getMeta;
    var getPath: typeof Ember.getPath;
    var getWithDefault: typeof Ember.getWithDefault;
    var guidFor: typeof Ember.guidFor;
    var handleErrors: typeof Ember.handleErrors;
    var hasListeners: typeof Ember.hasListeners;
    var hasOwnProperty: typeof Ember.hasOwnProperty;
    var immediateObserver: typeof immediateObserver;
    var imports: typeof Ember.imports;
    var inspect: typeof Ember.inspect;
    var instrument: typeof Ember.instrument;
    var isArray: typeof Ember.isArray;
    var isEmpty: typeof Ember.isEmpty;
    var isEqual: typeof Ember.isEqual;
    var isGlobalPath: typeof Ember.isGlobalPath;
    var isNamespace: typeof Ember.isNamespace;
    var isNone: typeof Ember.isNone;
    var isPrototypeOf: typeof Ember.isPrototypeOf;
    var isWatching: typeof Ember.isWatching;
    var keys: typeof Ember.keys;
    var listenersDiff: typeof Ember.listenersDiff;
    var listenersFor: typeof Ember.listenersFor;
    var listenersUnion: typeof Ember.listenersUnion;
    var lookup: typeof Ember.lookup;
    var makeArray: typeof Ember.makeArray;
    var merge: typeof Ember.merge;
    var meta: typeof Ember.meta;
    var metaPath: typeof Ember.metaPath;
    var mixin: typeof Ember.mixin;
    var none: typeof Ember.none;
    var normalizeTuple: typeof Ember.normalizeTuple;
    var observer: typeof Ember.observer;
    var observersFor: typeof Ember.observersFor;
    var onLoad: typeof Ember.onLoad;
    var oneWay: typeof Ember.oneWay;
    var onError: typeof Ember.onError;
    var overrideChains: typeof Ember.overrideChains;
    var platform: typeof Ember.platform;
    var propertyDidChange: typeof Ember.propertyDidChange;
    var propertyIsEnumerable: typeof Ember.propertyIsEnumerable;
    var propertyWillChange: typeof Ember.propertyWillChange;
    var removeBeforeObserver: typeof Ember.removeBeforeObserver;
    var removeChainWatcher: typeof Ember.removeChainWatcher;
    var removeListener: typeof Ember.removeListener;
    var removeObserver: typeof Ember.removeObserver;
    var required: typeof Ember.required;
    var rewatch: typeof Ember.rewatch;
    var run: typeof Ember.run;
    var runLoadHooks: typeof Ember.runLoadHooks;
    var sendEvent: typeof Ember.sendEvent;
    var set: typeof Ember.set;
    var setMeta: typeof Ember.setMeta;
    var setPath: typeof Ember.setPath;
    var setProperties: typeof Ember.setProperties;
    var subscribe: typeof Ember.subscribe;
    var toLocaleString: typeof Ember.toLocaleString;
    var toString: typeof Ember.toString;
    var tryCatchFinally: typeof Ember.tryCatchFinally;
    var tryFinally: typeof Ember.tryFinally;
    var tryInvoke: typeof Ember.tryInvoke;
    var trySet: typeof Ember.trySet;
    var trySetPath: typeof Ember.trySetPath;
    var typeOf: typeof Ember.typeOf;
    var unwatch: typeof Ember.unwatch;
    var unwatchKey: typeof Ember.unwatchKey;
    var unwatchPath: typeof Ember.unwatchPath;
    var uuid: typeof Ember.uuid;
    var valueOf: typeof Ember.valueOf;
    var warn: typeof Ember.warn;
    var watch: typeof Ember.watch;
    var watchKey: typeof Ember.watchKey;
    var watchPath: typeof Ember.watchPath;
    var watchedEvents: typeof Ember.watchedEvents;
    var wrap: typeof Ember.wrap;
}
