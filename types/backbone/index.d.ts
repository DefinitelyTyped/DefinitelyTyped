// Type definitions for Backbone 1.3.3
// Project: http://backbonejs.org/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>, Natan Vivo <https://github.com/nvivo/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

export = Backbone;
export as namespace Backbone;

import * as _ from 'underscore';

declare namespace Backbone {

    interface AddOptions extends Silenceable {
        at?: number;
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

    interface CollectionFetchOptions extends PersistenceOptions, Parseable {
        reset?: boolean;
    }

    interface ObjectHash {
        [key: string]: any;
    }

    interface RoutesHash {
        [routePattern: string]: string | {(...urlParts: string[]): void};
    }

    interface EventsHash {
        [selector: string]: string | {(eventObject: JQueryEventObject): void};
    }

    class Events {
        on(eventName: string, callback?: Function, context?: any): any;
        on(eventMap: EventsHash): any;
        off(eventName?: string, callback?: Function, context?: any): any;
        trigger(eventName: string, ...args: any[]): any;
        bind(eventName: string, callback: Function, context?: any): any;
        unbind(eventName?: string, callback?: Function, context?: any): any;

        once(events: string, callback: Function, context?: any): any;
        listenTo(object: any, events: string, callback: Function): any;
        listenToOnce(object: any, events: string, callback: Function): any;
        stopListening(object?: any, events?: string, callback?: Function): any;
    }

    class ModelBase extends Events {
        url: any;
        parse(response: any, options?: any): any;
        toJSON(options?: any): any;
        sync(...arg: any[]): JQueryXHR;
    }

    class Model extends ModelBase {

        /**
        * Do not use, prefer TypeScript's extend functionality.
        **/
        private static extend(properties: any, classProperties?: any): any;

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
        urlRoot: any;

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

    class Collection<TModel extends Model> extends ModelBase {

        /**
        * Do not use, prefer TypeScript's extend functionality.
        **/
        private static extend(properties: any, classProperties?: any): any;

        model: new (...args:any[]) => TModel;
        models: TModel[];
        length: number;

        constructor(models?: TModel[] | Object[], options?: any);
        initialize(models?: TModel[] | Object[], options?: any): void;

        fetch(options?: CollectionFetchOptions): JQueryXHR;

        /**
         * Specify a model attribute name (string) or function that will be used to sort the collection.
         */
        comparator: string | ((element: TModel) => number | string) | ((compare: TModel, to?: TModel) => number);

        add(model: {}|TModel, options?: AddOptions): TModel;
        add(models: ({}|TModel)[], options?: AddOptions): TModel[];
        at(index: number): TModel;
        /**
         * Get a model from a collection, specified by an id, a cid, or by passing in a model.
         **/
        get(id: number|string|Model): TModel;
        has(key: number|string|Model): boolean;
        create(attributes: any, options?: ModelSaveOptions): TModel;
        pluck(attribute: string): any[];
        push(model: TModel, options?: AddOptions): TModel;
        pop(options?: Silenceable): TModel;
        remove(model: {}|TModel, options?: Silenceable): TModel;
        remove(models: ({}|TModel)[], options?: Silenceable): TModel[];
        reset(models?: TModel[], options?: Silenceable): TModel[];
        set(models?: TModel[], options?: Silenceable): TModel[];
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
        slice(min: number, max?: number): TModel[];

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
        without(...values: TModel[]): TModel[];
    }

    class Router extends Events {

        /**
        * Do not use, prefer TypeScript's extend functionality.
        **/
        private static extend(properties: any, classProperties?: any): any;

        /**
        * Routes hash or a method returning the routes hash that maps URLs with parameters to methods on your Router.
        * For assigning routes as object hash, do it like this: this.routes = <any>{ "route": callback, ... };
        * That works only if you set it in the constructor or the initialize method.
        **/
        routes: RoutesHash | any;

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

    class History extends Events {

        handlers: any[];
        interval: number;

        start(options?: HistoryOptions): boolean;

        getHash(window?: Window): string;
        getFragment(fragment?: string): string;
        decodeFragment(fragment: string): string;
        getSearch(): string;
        stop(): void;
        route(route: string, callback: Function): number;
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

   interface ViewOptions<TModel extends Model> {
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

    class View<TModel extends Model> extends Events {

        /**
        * Do not use, prefer TypeScript's extend functionality.
        **/
        private static extend(properties: any, classProperties?: any): any;

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
    function sync(method: string, model: Model, options?: JQueryAjaxSettings): any;
    function ajax(options?: JQueryAjaxSettings): JQueryXHR;
    var emulateHTTP: boolean;
    var emulateJSON: boolean;

    // Utility
    function noConflict(): typeof Backbone;
    var $: JQueryStatic;
}
