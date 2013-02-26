// Type definitions for Ember.js 1.0.pre
// Project: http://emberjs.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module Ember {

    export class CoreObject {
        isDestroyed: bool;
        isDestroying: bool;

        destroy(): Object;
        eachComputedProperty(callback: Function, binding: Object): void;
        metaForProperty(key: string): any;
    }

    export class Object extends CoreObject {

        static create(...arguments: any[]): Object;

        addObserver(key: string, target: Object, method: any): Object;
        apply(obj: Object): Object;
        beginPropertyChanges(): Observable;
        cacheFor(keyName: string): Object;
        decrementProperty(keyName: string, increment: Object): Object;
        detect(obj: Object): bool;
        endPropertyChanges(): Observable;
        get(key: string): Object;
        getProperties(...list: string[]): any;
        getProperties(list: string[]): any;
        getWithDefault(keyName: string, defaultValue: Object): Object;
        hasObserverFor(key: string): bool;
        incrementProperty(keyName: string, increment: Object): Object;
        notifyPropertyChange(keyName: string): Observable;
        propertyDidChange(keyName: string): Observable;
        propertyWillChange(key: string): Observable;
        removeObserver(key: string, target: Object, method: string): Observable;
        removeObserver(key: string, target: Object, method: Function): Observable;
        reopen(...arguments: any[]);
        set(key: string, value: Object): Observable;
        setProperties(hash: any): Observable;
        setUnknownProperty(key: string, value: Object): void;
        toggleProperty(keyName: string): Object;
        unknownProperty(key: string): Object;
    }

    export interface Mixin {
        apply(obj: Object): Object;
        create(obj: Object): Object;
        detect(obj: Object): bool;
        extend(first: Object, second: Object): Object;
        reopen(...arguments: any[]): Mixin;
    }

    export class View extends Object {
        append(): View;
        static create(...arguments: any[]): View;
    }

    export interface Enumerable extends Mixin {
        // Fields
        firstObject: Object;
        hasEnumerableObservers: bool;
        lastObject: Object;
        nextObject: Object;

        // Methods
        addEnumerableObserver(target, opts);
        compact(): any[];
        contains(obj: Object): bool;
        enumerableContentDidChange(removing: number, adding: number): Object;
        enumerableContentDidChange(removing: Ember.Enumerable, adding: Ember.Enumerable): Object;
        enumerableContentDidChange(start: Number, removing: number, adding: number): Object;
        enumerableContentDidChange(start: Number, removing: Ember.Enumerable, adding: Ember.Enumerable): Object;

        enumerableContentWillChange(removing: number, adding: number): Ember.Enumerable;
        enumerableContentWillChange(removing: Ember.Enumerable, adding: Ember.Enumerable): Ember.Enumerable;
        enumerableContentWillChange(start: Number, removing: number, adding: number): Ember.Enumerable;
        enumerableContentWillChange(start: Number, removing: Ember.Enumerable, adding: Ember.Enumerable): Ember.Enumerable;

        every(callback: Function, target?: Object): bool;
        everyProperty(key: string, value?: string): any[];
        filter(callback: Function, target?: Object): any[];
        filterProperty(key: string, value?: string): any[];
        find(callback: Function, target?: Object): Object;
        findProperty(key: string, value?: string): Object;
        /*forEach
		getEach
		invoke
		map
		mapProperty
		reduce
		removeEnumerableObserver
		setEach
		some
		someProperty
		toArray
		uniq
		without*/
    }

    export interface NativeArray extends Array {
        activate();
    }



    export class Application extends Object {
        customEvents: Object;
        eventDispatcher: EventDispatcher;
        // rootElement: DOMElement;
        ready;
        static create(...arguments: any[]): Application;
        initialize(router: Router);
    }

    export class Router {

    }

    export class EventDispatcher {
    }

    export class Binding {
        static from();
        static oneWay(path: string, flag?: bool);
        static to();

        connect(obj: Object): Binding;
        copy(): Binding;
        disconnect(obj: Object): Binding;
        from(path: string): Binding;
        oneWay(): Binding;
        to(propertyPath: string): Binding;
    }

    export interface ComputedProperty {
        cacheable(aFlag?: bool): ComputedProperty;
        meta(hash: any): ComputedProperty;
        property(path: string): ComputedProperty;
        volatile(): ComputedProperty;
    }

    export interface Map {

    }

    export interface Observable extends Mixin {
        addBeforeObserver(key, target, method);
        addObject(obj: Object);
        addObserver(key: string, target: Object, method: Function): Ember.Object;
        addObserver(key: string, target: Object, method: string): Ember.Object;
        beginPropertyChanges(): Ember.Observable;
        cacheFor(keyName: string): Object;
        contentArrayDidChange(array, idx, removedCount, addedCount);
        contentArrayWillChange(array, idx, removedCount, addedCount);
        contentItemSortPropertyDidChange(item);
        decrementProperty(keyName: string, increment: Object): Object;
        destroy();
        endPropertyChanges(): Ember.Observable;
        get(key: string): Object;
        getPath(path: string): Object;
        getProperties(...list: string[]): any;
        getProperties(list: any[]): any;
        getWithDefault(keyName: string, defaultValue: Object): Object;
        hasObserverFor(key: string): bool;
        incrementProperty(keyName: string, increment: Object): Object;
        insertItemSorted(item);
        notifyPropertyChange(keyName: string): Ember.Observable;
        orderBy(item1, item2);
        propertyDidChange(keyName: string): Ember.Observable;
        propertyWillChange(key: string): Ember.Observable;
        removeObject(obj: Object);
        removeObserver(key: string, target: Object, method: string): Ember.Observable;
        removeObserver(key: string, target: Object, method: Function): Ember.Observable;
        set(key: string, value: Object): Ember.Observable;
        setPath(path: string, value: Object): Ember.Observable;
        setProperties(hash): Ember.Observable;
        setUnknownProperty(key: string, value: Object);
        toggleProperty(keyName: string): Object;
        unknownProperty(key: string): Object;
    }
}


interface EmberStatic {

    // Statics
    CP_DEFAULT_CACHEABLE: bool;
    ENV: Object;
    EXTEND_PROTOTYPES: bool;
    LOG_BINDINGS: bool;
    LOG_STACKTRACE_ON_DEPRECATION: bool;
    META_KEY: string;
    SHIM_ES5: bool;
    StringS: Object;
    VERSION: string;
    VIEW_PRESERVES_CONTEXT: bool;

    Application: Ember.Application;
    View: Ember.View;

    $; // jQuery

    // API Doc Members
    A(arr: any[]): Ember.NativeArray;
    addBeforeObserver(obj: Object, path: string, target: Object, method: Function);
    addListener(obj: Object, eventName: string, target: Object, method: Function);
    addObserver(obj: Object, path: string, target: Object, method: Function);
    alias(methodName: string);
    assert(desc: string, test: bool);
    beforeObserver(func: Function);
    beginPropertyChanges();
    bind(obj: Object, to: string, from: string): Ember.Binding;
    cacheFor(obj: Object, key: string);
    canInvoke(obj: Object, methodName: string);
    changeProperties(cb: Function, binding?: Ember.Binding);
    compare(first: Object, second: Object): number;
    computed(func: Function): Ember.ComputedProperty;
    copy(obj: Object, deep: bool): Object;
    create(obj: Object, props: any);
    deferEvent(obj: Object, eventName: string, param: any);
    deprecate(message: string, test?: bool);
    deprecateFunc(message: string, func: Function);
    destroy(obj: Object): void;
    empty(obj: Object): bool;
    endPropertyChanges();
    finishChains(obj: Object);
    get(obj: Object, keyName: string): Object;
    getMeta(obj: Object, property: any);
    getWithDefault(root, key, defaultValue);
    hasListeners(obj: Object, eventName: string): bool;
    immediateObserver();
    inspect(obj: Object): string;
    isArray(obj?: any): bool;
    isEqual(a: Object, b: Object): bool;
    isGlobalPath(path: string): bool;
    isWatching(obj: Object, key): bool;
    keys(obj: Object): any[];
    listenersFor(obj: Object, eventName: string): any[];
    makeArray(obj: Object): any[];

    Map();
    MapWithDefault(options);
    mixin(obj: Object);
    none(obj: Object): bool;
    observer(func: Function);
    oneWay(obj: Object, to, from);
    onLoad(name: string, callback: Function);

    OrderedSet();
    overrideChains(obj: Object, keyName: string, m: any);
    propertyDidChange(obj: Object, keyName: string): void;
    propertyWillChange(obj: Object, keyName: string, value: any): void;
    removeBeforeObserver(obj, path, target, method);
    removeListener(obj, eventName, target, method);
    removeObserver(obj, path, target, method);

    required();
    runLoadHooks(name: string, object: Object);
    sendEvent(obj: Object, eventName: string, params);
    set(obj: Object, keyName: string, value, tolerant);
    setMeta(obj: Object, property, value);
    setProperties(self, hash);
    toString(): string;
    tryInvoke(obj: Object, methodName: string, args: any[]): bool;
    trySet(root, path, value);
    typeOf(item): string;
    warn(message: string, test: bool);
    watchedEvents(obj: Object);

    // Other public members not listed in API Doc
    meta(obj, writable);
    metaPath(obj, path, writable);
    normalizeTuple(target, path);
    notifyBeforeObservers(obj: Object, keyName: string);
    notifyObservers(obj: Object, keyName: string);
    observersFor(obj: Object, path: string);
    rewatch(obj: Object);
    run(target, method);
    defineProperty(obj: Object, keyName: string, desc, data, meta);
    beforeObserversFor(obj: Object, path: string);
    generateGuid(obj: Object, prefix);
    getPath();
    guidFor(obj: Object);
    identifyNamespaces();
    setPath();
    trySetPath();
    unwatch(obj: Object, keyName: string);
    watch(obj: Object, keyName: string);
    wrap(func: Function, superFunc: Function);
}

declare var Em: Ember;
//declare var Ember: EmberStatic;