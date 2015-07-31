// Type definitions for Backbone 1.0.0
// Project: http://backbonejs.org/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>, Natan Vivo <https://github.com/nvivo/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../underscore/underscore.d.ts" />

declare module Backbone {

    interface AddOptions extends Silenceable {
        at?: number;
    }

    interface HistoryOptions extends Silenceable {
        pushState?: boolean;
        root?: string;
    }

    interface NavigateOptions {
        trigger?: boolean;
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
        beforeSend?: (jqxhr: JQueryXHR) => void;
        success?: (modelOrCollection?: any, response?: any, options?: any) => void;
        error?: (modelOrCollection?: any, jqxhr?: JQueryXHR, options?: any) => void;
    }

    interface ModelSetOptions extends Silenceable, Validable {
    }

    interface ModelFetchOptions extends PersistenceOptions, ModelSetOptions, Parseable {
    }

    interface ModelSaveOptions extends Silenceable, Waitable, Validable, Parseable, PersistenceOptions {
        patch?: boolean;
    }

    interface ModelDestroyOptions extends Waitable, PersistenceOptions {
    }

    interface CollectionFetchOptions extends PersistenceOptions, Parseable {
        reset?: boolean;
    }

    class Events {
        on(eventName: string, callback?: Function, context?: any): any;
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
        cid: string;
        collection: Collection<any>;

        /**
        * Default attributes for the model. It can be an object hash or a method returning an object hash.
        * For assigning an object hash, do it like this: this.defaults = <any>{ attribute: value, ... };
        * That works only if you set it in the constructor or the initialize method.
        **/
        defaults(): any;
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

        change(): any;
        changedAttributes(attributes?: any): any[];
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

        private _validate(attrs: any, options: any): boolean;

        // mixins from underscore

        keys(): string[];
        values(): any[];
        pairs(): any[];
        invert(): any;
        pick(keys: string[]): any;
        pick(...keys: string[]): any;
        omit(keys: string[]): any;
        omit(...keys: string[]): any;
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

        comparator(element: TModel): number;
        comparator(compare: TModel, to?: TModel): number;

        add(model: {}|TModel, options?: AddOptions): TModel;
        add(models: ({}|TModel)[], options?: AddOptions): TModel[];
        at(index: number): TModel;
        /**
         * Get a model from a collection, specified by an id, a cid, or by passing in a model.
         **/
        get(id: number): TModel;
        get(id: string): TModel;
        get(id: Model): TModel;
        create(attributes: any, options?: ModelSaveOptions): TModel;
        pluck(attribute: string): any[];
        push(model: TModel, options?: AddOptions): TModel;
        pop(options?: Silenceable): TModel;
        remove(model: TModel, options?: Silenceable): TModel;
        remove(models: TModel[], options?: Silenceable): TModel[];
        reset(models?: TModel[], options?: Silenceable): TModel[];
        set(models?: TModel[], options?: Silenceable): TModel[];
        shift(options?: Silenceable): TModel;
        sort(options?: Silenceable): Collection<TModel>;
        unshift(model: TModel, options?: AddOptions): TModel;
        where(properies: any): TModel[];
        findWhere(properties: any): TModel;

        private _prepareModel(attrs?: any, options?: any): any;
        private _removeReference(model: TModel): void;
        private _onModelEvent(event: string, model: TModel, collection: Collection<TModel>, options: any): void;

        // mixins from underscore

        all(iterator: (element: TModel, index: number) => boolean, context?: any): boolean;
        any(iterator: (element: TModel, index: number) => boolean, context?: any): boolean;
        collect(iterator: (element: TModel, index: number, context?: any) => any[], context?: any): any[];
        chain(): any;
        contains(value: any): boolean;
        countBy(iterator: (element: TModel, index: number) => any): _.Dictionary<number>;
        countBy(attribute: string): _.Dictionary<number>;
        detect(iterator: (item: any) => boolean, context?: any): any; // ???
        drop(): TModel;
        drop(n: number): TModel[];
        each(iterator: (element: TModel, index: number, list?: any) => void, context?: any): any;
        every(iterator: (element: TModel, index: number) => boolean, context?: any): boolean;
        filter(iterator: (element: TModel, index: number) => boolean, context?: any): TModel[];
        find(iterator: (element: TModel, index: number) => boolean, context?: any): TModel;
        first(): TModel;
        first(n: number): TModel[];
        foldl(iterator: (memo: any, element: TModel, index: number) => any, initialMemo: any, context?: any): any;
        forEach(iterator: (element: TModel, index: number, list?: any) => void, context?: any): any;
        groupBy(iterator: (element: TModel, index: number) => string, context?: any): _.Dictionary<TModel[]>;
        groupBy(attribute: string, context?: any): _.Dictionary<TModel[]>;
        include(value: any): boolean;
        indexOf(element: TModel, isSorted?: boolean): number;
        initial(): TModel;
        initial(n: number): TModel[];
        inject(iterator: (memo: any, element: TModel, index: number) => any, initialMemo: any, context?: any): any;
        isEmpty(object: any): boolean;
        invoke(methodName: string, args?: any[]): any;
        last(): TModel;
        last(n: number): TModel[];
        lastIndexOf(element: TModel, fromIndex?: number): number;
        map(iterator: (element: TModel, index: number, context?: any) => any, context?: any): any[];
        max(iterator?: (element: TModel, index: number) => any, context?: any): TModel;
        min(iterator?: (element: TModel, index: number) => any, context?: any): TModel;
        reduce(iterator: (memo: any, element: TModel, index: number) => any, initialMemo: any, context?: any): any;
        select(iterator: any, context?: any): any[];
        size(): number;
        shuffle(): any[];
        slice(min: number, max?: number): TModel[];
        some(iterator: (element: TModel, index: number) => boolean, context?: any): boolean;
        sortBy(iterator: (element: TModel, index: number) => number, context?: any): TModel[];
        sortBy(attribute: string, context?: any): TModel[];
        sortedIndex(element: TModel, iterator?: (element: TModel, index: number) => number): number;
        reduceRight(iterator: (memo: any, element: TModel, index: number) => any, initialMemo: any, context?: any): any[];
        reject(iterator: (element: TModel, index: number) => boolean, context?: any): TModel[];
        rest(): TModel;
        rest(n: number): TModel[];
        tail(): TModel;
        tail(n: number): TModel[];
        toArray(): any[];
        without(...values: any[]): TModel[];
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
        routes: any;

        constructor(options?: RouterOptions);
        initialize(options?: RouterOptions): void;
        route(route: string, name: string, callback?: Function): Router;
        route(route: RegExp, name: string, callback?: Function): Router;
        navigate(fragment: string, options?: NavigateOptions): Router;
        navigate(fragment: string, trigger?: boolean): Router;

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
        getFragment(fragment?: string, forcePushState?: boolean): string;
        stop(): void;
        route(route: string, callback: Function): number;
        checkUrl(e?: any): void;
        loadUrl(fragmentOverride: string): boolean;
        navigate(fragment: string, options?: any): boolean;
        started: boolean;
        options: any;

        private _updateHash(location: Location, fragment: string, replace: boolean): void;
    }

   interface ViewOptions<TModel extends Model> {
      model?: TModel;
      collection?: Backbone.Collection<TModel>;
      el?: any;
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
        events(): any;

        $(selector: string): JQuery;
        model: TModel;
        collection: Collection<TModel>;
        //template: (json, options?) => string;
        setElement(element: HTMLElement, delegate?: boolean): View<TModel>;
        setElement(element: JQuery, delegate?: boolean): View<TModel>;
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
        make(tagName: any, attributes?: any, content?: any): any;
        delegateEvents(events?: any): any;
        undelegateEvents(): any;

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

declare module "backbone" {
    export = Backbone;
}
