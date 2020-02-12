// Type definitions for Backbone 1.4
// Project: http://backbonejs.org/
//          https://github.com/jashkenas/backbone
// Definitions by: Boris Yankov <https://github.com/borisyankov>
//                 Natan Vivo <https://github.com/nvivo>
//                 kenjiru <https://github.com/kenjiru>
//                 jjoekoullas <https://github.com/jjoekoullas>
//                 Julian Gonggrijp <https://github.com/jgonggrijp>
//                 Kyle Scully <https://github.com/zieka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="jquery" />

export = Backbone;
export as namespace Backbone;

import * as _ from 'underscore';

declare namespace Backbone {

    interface AddOptions extends Silenceable {
        at?: number;
        merge?: boolean;
        sort?: boolean;
    }

    interface CollectionSetOptions extends Silenceable {
        add?: boolean;
        remove?: boolean;
        merge?: boolean;
    }

    interface HistoryOptions extends Silenceable {
        pushState?: boolean;
        root?: string;
    }

    interface NavigateOptions {
        trigger?: boolean;
        replace?: boolean;
    }

    interface RouterOptions {
        routes: any;
    }

    interface Silenceable {
        silent?: boolean;
    }

    interface Validable {
        validate?: boolean;
    }

    interface Waitable {
        wait?: boolean;
    }

    interface Parseable {
        parse?: any;
    }

    interface PersistenceOptions {
        url?: string;
        data?: any;
        beforeSend?: (jqxhr: JQueryXHR) => void;
        success?: (modelOrCollection?: any, response?: any, options?: any) => void;
        error?: (modelOrCollection?: any, jqxhr?: JQueryXHR, options?: any) => void;
    }

    interface ModelSetOptions extends Silenceable, Validable {
    }

    export interface ModelFetchOptions extends PersistenceOptions, ModelSetOptions, Parseable {
    }

    interface ModelSaveOptions extends Silenceable, Waitable, Validable, Parseable, PersistenceOptions {
        patch?: boolean;
    }

    interface ModelDestroyOptions extends Waitable, PersistenceOptions {
    }

    interface CollectionFetchOptions extends PersistenceOptions, Parseable, CollectionSetOptions {
        reset?: boolean;
    }

    interface ObjectHash {
        [key: string]: any;
    }

    interface RoutesHash {
        [routePattern: string]: string | {(...urlParts: string[]): void};
    }

    /**
     * DOM events (used in the events property of a View)
     */
    interface EventsHash {
        [selector: string]: string | {(eventObject: JQuery.TriggeredEvent): void};
    }

    /**
     * JavaScript events (used in the methods of the Events interface)
     */
    interface EventHandler {
        (...args: any[]): void;
    }
    interface EventMap {
        [event: string]: EventHandler;
    }

    export const Events: Events;
    interface Events extends EventsMixin { }

    /**
     * Helper shorthands for classes that implement the Events interface.
     * Define your class like this:
     *
     * import {
     *     Events,
     *     Events_On,
     *     Events_Off,
     *     Events_Trigger,
     *     Events_Listen,
     *     Events_Stop,
     * } from 'backbone';
     *
     * class YourClass implements Events {
     *     on: Events_On<YourClass>;
     *     off: Events_Off<YourClass>;
     *     trigger: Events_Trigger<YourClass>;
     *     bind: Events_On<YourClass>;
     *     unbind: Events_Off<YourClass>;
     *
     *     once: Events_On<YourClass>;
     *     listenTo: Events_Listen<YourClass>;
     *     listenToOnce: Events_Listen<YourClass>;
     *     stopListening: Events_Stop<YourClass>;
     *
     *     // ... (other methods)
     * }
     *
     * Object.assign(YourClass.prototype, Events);  // can also use _.extend
     *
     * If you are just writing a class type declaration that doesn't already
     * extend some other base class, you can use the EventsMixin instead;
     * see below.
     */
    interface Events_On<BaseT> {
        <T extends BaseT>(this: T, eventName: string, callback: EventHandler, context?: any): T;
        <T extends BaseT>(this: T, eventMap: EventMap, context?: any): T;
    }
    interface Events_Off<BaseT> {
        <T extends BaseT>(this: T, eventName?: string, callback?: EventHandler, context?: any): T;
    }
    interface Events_Trigger<BaseT> {
        <T extends BaseT>(this: T, eventName: string, ...args: any[]): T;
    }
    interface Events_Listen<BaseT> {
        <T extends BaseT>(this: T, object: any, events: string, callback: EventHandler): T;
        <T extends BaseT>(this: T, object: any, eventMap: EventMap): T;
    }
    interface Events_Stop<BaseT> {
        <T extends BaseT>(this: T, object?: any, events?: string, callback?: EventHandler): T;
    }

    /**
     * Helper to avoid code repetition in type declarations.
     * Backbone.Events cannot be extended, hence a separate abstract
     * class with a different name. Both classes and interfaces can
     * extend from this helper class to reuse the signatures.
     *
     * For class type declarations that already extend another base
     * class, and for actual class definitions, please see the
     * Events_* interfaces above.
     */
    abstract class EventsMixin implements Events {
        on(eventName: string, callback: EventHandler, context?: any): this;
        on(eventMap: EventMap, context?: any): this;
        off(eventName?: string, callback?: EventHandler, context?: any): this;
        trigger(eventName: string, ...args: any[]): this;
        bind(eventName: string, callback: EventHandler, context?: any): this;
        bind(eventMap: EventMap, context?: any): this;
        unbind(eventName?: string, callback?: EventHandler, context?: any): this;

        once(events: string, callback: EventHandler, context?: any): this;
        once(eventMap: EventMap, context?: any): this;
        listenTo(object: any, events: string, callback: EventHandler): this;
        listenTo(object: any, eventMap: EventMap): this;
        listenToOnce(object: any, events: string, callback: EventHandler): this;
        listenToOnce(object: any, eventMap: EventMap): this;
        stopListening(object?: any, events?: string, callback?: EventHandler): this;
    }

    class ModelBase extends EventsMixin {
        parse(response: any, options?: any): any;
        toJSON(options?: any): any;
        sync(...arg: any[]): JQueryXHR;
    }

    class Model extends ModelBase implements Events {

        /**
        * Do not use, prefer TypeScript's extend functionality.
        **/
        public static extend(properties: any, classProperties?: any): any;

        attributes: any;
        changed: any[];
        cidPrefix: string;
        cid: string;
        collection: Collection<any>;

        private _changing: boolean;
        private _previousAttributes : any;
        private _pending: boolean;


        /**
        * Default attributes for the model. It can be an object hash or a method returning an object hash.
        * For assigning an object hash, do it like this: this.defaults = <any>{ attribute: value, ... };
        * That works only if you set it in the constructor or the initialize method.
        **/
        defaults(): ObjectHash;
        id: any;
        idAttribute: string;
        validationError: any;

        /**
         * Returns the relative URL where the model's resource would be located on the server.
         * @memberof Model
         */
        url: () => string;

        urlRoot: any;

        /**
         * For use with models as ES classes. If you define a preinitialize
         * method, it will be invoked when the Model is first created, before
         * any instantiation logic is run for the Model.
         * @see https://backbonejs.org/#Model-preinitialize
         */
        preinitialize(attributes?: any, options?: any): void;

        constructor(attributes?: any, options?: any);
        initialize(attributes?: any, options?: any): void;

        fetch(options?: ModelFetchOptions): JQueryXHR;

        /**
        * For strongly-typed access to attributes, use the `get` method only privately in public getter properties.
        * @example
        * get name(): string {
        *    return super.get("name");
        * }
        **/
        /*private*/ get(attributeName: string): any;

        /**
        * For strongly-typed assignment of attributes, use the `set` method only privately in public setter properties.
        * @example
        * set name(value: string) {
        *    super.set("name", value);
        * }
        **/
        /*private*/ set(attributeName: string, value: any, options?: ModelSetOptions): Model;
        set(obj: any, options?: ModelSetOptions): Model;

        /**
         * Return an object containing all the attributes that have changed, or
         * false if there are no changed attributes. Useful for determining what
         * parts of a view need to be updated and/or what attributes need to be
         * persisted to the server. Unset attributes will be set to undefined.
         * You can also pass an attributes object to diff against the model,
         * determining if there *would be* a change. */
        changedAttributes(attributes?: any): any;
        clear(options?: Silenceable): any;
        clone(): Model;
        destroy(options?: ModelDestroyOptions): any;
        escape(attribute: string): string;
        has(attribute: string): boolean;
        hasChanged(attribute?: string): boolean;
        isNew(): boolean;
        isValid(options?:any): boolean;
        previous(attribute: string): any;
        previousAttributes(): any[];
        save(attributes?: any, options?: ModelSaveOptions): any;
        unset(attribute: string, options?: Silenceable): Model;
        validate(attributes: any, options?: any): any;

        private _validate(attributes: any, options: any): boolean;

        // mixins from underscore

        keys(): string[];
        values(): any[];
        pairs(): any[];
        invert(): any;
        pick(keys: string[]): any;
        pick(...keys: string[]): any;
        pick(fn: (value: any, key: any, object: any) => any): any;
        omit(keys: string[]): any;
        omit(...keys: string[]): any;
        omit(fn: (value: any, key: any, object: any) => any): any;
        chain(): any;
        isEmpty(): boolean;
        matches(attrs: any): boolean;
    }

    class Collection<TModel extends Model = Model> extends ModelBase implements Events {

        /**
        * Do not use, prefer TypeScript's extend functionality.
        **/
        public static extend(properties: any, classProperties?: any): any;

        model: new (...args:any[]) => TModel;
        models: TModel[];
        length: number;

        /**
         * For use with collections as ES classes. If you define a preinitialize
         * method, it will be invoked when the Collection is first created and
         * before any instantiation logic is run for the Collection.
         * @see https://backbonejs.org/#Collection-preinitialize
         */
        preinitialize(models?: TModel[] | Object[], options?: any): void;

        constructor(models?: TModel[] | Object[], options?: any);
        initialize(models?: TModel[] | Object[], options?: any): void;

        fetch(options?: CollectionFetchOptions): JQueryXHR;

        /**
         * Specify a model attribute name (string) or function that will be used to sort the collection.
         */
        comparator: string | { bivarianceHack(element: TModel): number | string }["bivarianceHack"] | { bivarianceHack(compare: TModel, to?: TModel): number }["bivarianceHack"];

        add(model: {}|TModel, options?: AddOptions): TModel;
        add(models: ({}|TModel)[], options?: AddOptions): TModel[];
        at(index: number): TModel;
        /**
         * Get a model from a collection, specified by an id, a cid, or by passing in a model.
         **/
        get(id: number|string|Model): TModel;
        has(key: number|string|Model): boolean;
        clone(): this;
        create(attributes: any, options?: ModelSaveOptions): TModel;
        pluck(attribute: string): any[];
        push(model: TModel, options?: AddOptions): TModel;
        pop(options?: Silenceable): TModel;
        remove(model: {}|TModel, options?: Silenceable): TModel;
        remove(models: ({}|TModel)[], options?: Silenceable): TModel[];
        reset(models?: TModel[], options?: Silenceable): TModel[];

        /**
         *
         * The set method performs a "smart" update of the collection with the passed list of models.
         * If a model in the list isn't yet in the collection it will be added; if the model is already in the
         * collection its attributes will be merged; and if the collection contains any models that aren't present
         * in the list, they'll be removed. All of the appropriate "add", "remove", and "change" events are fired as
         * this happens. Returns the touched models in the collection. If you'd like to customize the behavior, you can
         * disable it with options: {add: false}, {remove: false}, or {merge: false}.
         * @param models
         * @param options
         */
        set(models?: TModel[], options?: CollectionSetOptions): TModel[];
        shift(options?: Silenceable): TModel;
        sort(options?: Silenceable): Collection<TModel>;
        unshift(model: TModel, options?: AddOptions): TModel;
        where(properties: any): TModel[];
        findWhere(properties: any): TModel;
        modelId(attrs: any) : any

        private _prepareModel(attributes?: any, options?: any): any;
        private _removeReference(model: TModel): void;
        private _onModelEvent(event: string, model: TModel, collection: Collection<TModel>, options: any): void;
        private _isModel(obj: any) : obj is Model;

        /**
         * Return a shallow copy of this collection's models, using the same options as native Array#slice.
         */
        slice(min?: number, max?: number): TModel[];

        // mixins from underscore

        all(iterator?: _.ListIterator<TModel, boolean>, context?: any): boolean;
        any(iterator?: _.ListIterator<TModel, boolean>, context?: any): boolean;
        chain(): any;
        collect<TResult>(iterator: _.ListIterator<TModel, TResult>, context?: any): TResult[];
        contains(value: TModel): boolean;
        countBy(iterator?: _.ListIterator<TModel, any>): _.Dictionary<number>;
        countBy(iterator: string): _.Dictionary<number>;
        detect(iterator: _.ListIterator<TModel, boolean>, context?: any): TModel;
        difference(others: TModel[]): TModel[];
        drop(n?: number): TModel[];
        each(iterator: _.ListIterator<TModel, void>, context?: any): TModel[];
        every(iterator: _.ListIterator<TModel, boolean>, context?: any): boolean;
        filter(iterator: _.ListIterator<TModel, boolean>, context?: any): TModel[];
        find(iterator: _.ListIterator<TModel, boolean>, context?: any): TModel;
        findIndex(predicate: _.ListIterator<TModel, boolean>, context?: any): number;
        findLastIndex(predicate: _.ListIterator<TModel, boolean>, context?: any): number;
        first(): TModel;
        first(n: number): TModel[];
        foldl<TResult>(iterator: _.MemoIterator<TModel, TResult>, memo?: TResult, context?: any): TResult;
        foldr<TResult>(iterator: _.MemoIterator<TModel, TResult>, memo?: TResult, context?: any): TResult;
        forEach(iterator: _.ListIterator<TModel, void>, context?: any): TModel[];
        groupBy(iterator: _.ListIterator<TModel, any>, context?: any): _.Dictionary<TModel[]>;
        groupBy(iterator: string, context?: any): _.Dictionary<TModel[]>;
        head(): TModel;
        head(n: number): TModel[];
        include(value: TModel): boolean;
        includes(value: TModel): boolean;
        indexBy(iterator: _.ListIterator<TModel, any>, context?: any): _.Dictionary<TModel>;
        indexBy(iterator: string, context?: any): _.Dictionary<TModel>;
        indexOf(value: TModel, isSorted?: boolean): number;
        initial(): TModel;
        initial(n: number): TModel[];
        inject<TResult>(iterator: _.MemoIterator<TModel, TResult>, memo?: TResult, context?: any): TResult;
        invoke(methodName: string, ...args: any[]): any;
        isEmpty(): boolean;
        last(): TModel;
        last(n: number): TModel[];
        lastIndexOf(value: TModel, from?: number): number;
        map<TResult>(iterator: _.ListIterator<TModel, TResult>, context?: any): TResult[];
        max(iterator?: _.ListIterator<TModel, any>, context?: any): TModel;
        min(iterator?: _.ListIterator<TModel, any>, context?: any): TModel;
        partition(iterator: _.ListIterator<TModel, boolean>): TModel[][];
        reduce<TResult>(iterator: _.MemoIterator<TModel, TResult>, memo?: TResult, context?: any): TResult;
        reduceRight<TResult>(iterator: _.MemoIterator<TModel, TResult>, memo?: TResult, context?: any): TResult;
        reject(iterator: _.ListIterator<TModel, boolean>, context?: any): TModel[];
        rest(n?: number): TModel[];
        sample(): TModel;
        sample(n: number): TModel[];
        select(iterator: _.ListIterator<TModel, boolean>, context?: any): TModel[];
        shuffle(): TModel[];
        size(): number;
        some(iterator?: _.ListIterator<TModel, boolean>, context?: any): boolean;
        sortBy<TSort>(iterator?: _.ListIterator<TModel, TSort>, context?: any): TModel[];
        sortBy(iterator: string, context?: any): TModel[];
        tail(n?: number): TModel[];
        take(): TModel;
        take(n: number): TModel[];
        toArray(): TModel[];

        /**
         * Sets the url property (or function) on a collection to reference its location on the server.
         *
         * @memberof Collection
         */
        url: string | (() => string);

        without(...values: TModel[]): TModel[];
    }

    class Router extends EventsMixin implements Events {

        /**
        * Do not use, prefer TypeScript's extend functionality.
        **/
        public static extend(properties: any, classProperties?: any): any;

        /**
        * Routes hash or a method returning the routes hash that maps URLs with parameters to methods on your Router.
        * For assigning routes as object hash, do it like this: this.routes = <any>{ "route": callback, ... };
        * That works only if you set it in the constructor or the initialize method.
        **/
        routes: RoutesHash | any;

        /**
         * For use with Router as ES classes. If you define a preinitialize method,
         * it will be invoked when the Router is first created, before any
         * instantiation logic is run for the Router.
         * @see https://backbonejs.org/#Router-preinitialize
         */
        preinitialize(options?: RouterOptions): void;

        constructor(options?: RouterOptions);
        initialize(options?: RouterOptions): void;
        route(route: string|RegExp, name: string, callback?: Function): Router;
        navigate(fragment: string, options?: NavigateOptions): Router;
        navigate(fragment: string, trigger?: boolean): Router;

        execute(callback: Function, args: any[], name: string) : void;

        private _bindRoutes(): void;
        private _routeToRegExp(route: string): RegExp;
        private _extractParameters(route: RegExp, fragment: string): string[];
    }

    var history: History;

    class History extends EventsMixin implements Events {

        handlers: any[];
        interval: number;

        start(options?: HistoryOptions): boolean;

        getHash(window?: Window): string;
        getFragment(fragment?: string): string;
        decodeFragment(fragment: string): string;
        getSearch(): string;
        stop(): void;
        route(route: string|RegExp, callback: Function): number;
        checkUrl(e?: any): void;
        getPath(): string;
        matchRoot(): boolean;
        atRoot(): boolean;
        loadUrl(fragmentOverride?: string): boolean;
        navigate(fragment: string, options?: any): boolean;
        static started: boolean;
        options: any;

        private _updateHash(location: Location, fragment: string, replace: boolean): void;
    }

   interface ViewOptions<TModel extends Model = Model> {
      model?: TModel;
       // TODO: quickfix, this can't be fixed easy. The collection does not need to have the same model as the parent view.
      collection?: Backbone.Collection<any>; //was: Collection<TModel>;
      el?: any;
      events?: EventsHash;
      id?: string;
      className?: string;
      tagName?: string;
      attributes?: {[id: string]: any};
    }

    class View<TModel extends Model = Model> extends EventsMixin implements Events {

        /**
        * Do not use, prefer TypeScript's extend functionality.
        **/
        public static extend(properties: any, classProperties?: any): any;

        /**
         * For use with views as ES classes. If you define a preinitialize
         * method, it will be invoked when the view is first created, before any
         * instantiation logic is run.
         * @see https://backbonejs.org/#View-preinitialize
         */
        preinitialize(options?: ViewOptions<TModel>): void;

        constructor(options?: ViewOptions<TModel>);
        initialize(options?: ViewOptions<TModel>): void;

        /**
        * Events hash or a method returning the events hash that maps events/selectors to methods on your View.
        * For assigning events as object hash, do it like this: this.events = <any>{ "event:selector": callback, ... };
        * That works only if you set it in the constructor or the initialize method.
        **/
        events(): EventsHash;

        $(selector: string): JQuery;
        model: TModel;
        collection: Collection<TModel>;
        //template: (json, options?) => string;
        setElement(element: HTMLElement|JQuery, delegate?: boolean): View<TModel>;
        id: string;
        cid: string;
        className: string;
        tagName: string;

        el: any;
        $el: JQuery;
        setElement(element: any): View<TModel>;
        attributes: any;
        $(selector: any): JQuery;
        render(): View<TModel>;
        remove(): View<TModel>;
        delegateEvents(events?: EventsHash): any;
        delegate(eventName: string, selector: string, listener: Function): View<TModel>;
        undelegateEvents(): any;
        undelegate(eventName: string, selector?: string, listener?: Function): View<TModel>;

        _ensureElement(): void;
    }

    // SYNC
    function sync(method: string, model: Model | Collection, options?: JQueryAjaxSettings): any;
    function ajax(options?: JQueryAjaxSettings): JQueryXHR;
    var emulateHTTP: boolean;
    var emulateJSON: boolean;

    // Utility
    function noConflict(): typeof Backbone;
    var $: JQueryStatic;
}
