// Type definitions for Backbone 1.0.0
// Project: http://backbonejs.org/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions by: Natan Vivo <https://github.com/nvivo/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../underscore/underscore.d.ts" />

declare module Backbone {

    interface AddOptions extends Silenceable {
        at: number;
    }

    interface HistoryOptions extends Silenceable {
        pushState?: boolean;
        root?: string;
    }

    interface NavigateOptions {
        trigger: boolean;
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
        success?: (modelOrCollection: any, response: any, options: any) => void;
        error?: (modelOrCollection: any, jqxhr: JQueryXHR, options: any) => void;
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
        on(eventName: string, callback: (...args: any[]) => void , context?: any): any;
        off(eventName?: string, callback?: (...args: any[]) => void , context?: any): any;
        trigger(eventName: string, ...args: any[]): any;
        bind(eventName: string, callback: (...args: any[]) => void , context?: any): any;
        unbind(eventName?: string, callback?: (...args: any[]) => void , context?: any): any;

        once(events: string, callback: (...args: any[]) => void , context?: any): any;
        listenTo(object: any, events: string, callback: (...args: any[]) => void ): any;
        listenToOnce(object: any, events: string, callback: (...args: any[]) => void ): any;
        stopListening(object?: any, events?: string, callback?: (...args: any[]) => void ): any;
    }

    class ModelBase extends Events {
        url: any;
        parse(response, options?: any);
        toJSON(options?: any): any;
        sync(...arg: any[]): JQueryXHR;
    }

    class Model extends ModelBase {

        private static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScript's extend functionality

        attributes: any;
        changed: any[];
        cid: string;
        defaults: any;
        id: any;
        idAttribute: string;
        validationError: any;
        urlRoot: any;

        constructor(attributes?: any, options?: any);
        initialize(attributes?: any);

        fetch(options?: ModelFetchOptions): JQueryXHR;

        get(attributeName: string): any;
        set(attributeName: string, value: any, options?: ModelSetOptions);
        set(obj: any, options?: ModelSetOptions);

        change();
        changedAttributes(attributes?: any): any[];
        clear(options?: Silenceable);
        clone(): Model;
        destroy(options?: ModelDestroyOptions);
        escape(attribute: string);
        has(attribute: string): boolean;
        hasChanged(attribute?: string): boolean;
        isNew(): boolean;
        isValid(): boolean;
        previous(attribute: string): any;
        previousAttributes(): any[];
        save(attributes?: any, options?: ModelSaveOptions);
        unset(attribute: string, options?: Silenceable);
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

        private static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScript's extend functionality

        // TODO: this really has to be typeof TModel
        //model: typeof TModel;
        model: { new(): TModel; };
        models: TModel[];
        collection: TModel;
        length: number;

        constructor(models?: TModel[], options?: any);

        fetch(options?: CollectionFetchOptions): JQueryXHR;

        comparator(element: TModel): number;
        comparator(compare: TModel, to?: TModel): number;

        add(model: TModel, options?: AddOptions);
        add(models: TModel[], options?: AddOptions);
        at(index: number): TModel;
        get(id: string): TModel;
        create(attributes: any, options?: ModelSaveOptions): TModel;
        pluck(attribute: string): any[];
        push(model: TModel, options?: AddOptions);
        pop(options?: Silenceable);
        remove(model: TModel, options?: Silenceable);
        remove(models: TModel[], options?: Silenceable);
        reset(models?: TModel[], options?: Silenceable);
        shift(options?: Silenceable);
        sort(options?: Silenceable);
        unshift(model: TModel, options?: AddOptions);
        where(properies: any): TModel[];

        private _prepareModel(attrs?: any, options?: any): any;
        private _removeReference(model: TModel): void;
        private _onModelEvent(event: string, model: TModel, collection: Collection<TModel>, options: any): void;

        // mixins from underscore

        all(iterator: (element: TModel, index: number) => boolean, context?: any): boolean;
        any(iterator: (element: TModel, index: number) => boolean, context?: any): boolean;
        collect(iterator: (element: TModel, index: number, context?: any) => any[], context?: any): any[];
        chain(): any;
        compact(): TModel[];
        contains(value: any): boolean;
        countBy(iterator: (element: TModel, index: number) => any): _.Dictionary<number[]>;
        countBy(attribute: string): _.Dictionary<number[]>;
        detect(iterator: (item: any) => boolean, context?: any): any; // ???
        difference(...model: TModel[]): TModel[];
        drop(): TModel;
        drop(n: number): TModel[];
        each(iterator: (element: TModel, index: number, list?: any) => void, context?: any);
        every(iterator: (element: TModel, index: number) => boolean, context?: any): boolean;
        filter(iterator: (element: TModel, index: number) => boolean, context?: any): TModel[];
        find(iterator: (element: TModel, index: number) => boolean, context?: any): TModel;
        first(): TModel;
        first(n: number): TModel[];
        flatten(shallow?: boolean): TModel[];
        foldl(iterator: (memo: any, element: TModel, index: number) => any, initialMemo: any, context?: any): any;
        forEach(iterator: (element: TModel, index: number, list?: any) => void, context?: any);
        groupBy(iterator: (element: TModel, index: number) => string, context?: any): _.Dictionary<TModel[]>;
        groupBy(attribute: string, context?: any): _.Dictionary<TModel[]>;
        include(value: any): boolean;
        indexOf(element: TModel, isSorted?: boolean): number;
        initial(): TModel;
        initial(n: number): TModel[];
        inject(iterator: (memo: any, element: TModel, index: number) => any, initialMemo: any, context?: any): any;
        intersection(...model: TModel[]): TModel[];
        isEmpty(object: any): boolean;
        invoke(methodName: string, arguments?: any[]);
        last(): TModel;
        last(n: number): TModel[];
        lastIndexOf(element: TModel, fromIndex?: number): number;
        map(iterator: (element: TModel, index: number, context?: any) => any[], context?: any): any[];
        max(iterator?: (element: TModel, index: number) => any, context?: any): TModel;
        min(iterator?: (element: TModel, index: number) => any, context?: any): TModel;
        object(...values: any[]): any[];
        reduce(iterator: (memo: any, element: TModel, index: number) => any, initialMemo: any, context?: any): any;
        select(iterator: any, context?: any): any[];
        size(): number;
        shuffle(): any[];
        some(iterator: (element: TModel, index: number) => boolean, context?: any): boolean;
        sortBy(iterator: (element: TModel, index: number) => number, context?: any): TModel[];
        sortBy(attribute: string, context?: any): TModel[];
        sortedIndex(element: TModel, iterator?: (element: TModel, index: number) => number): number;
        range(stop: number, step?: number);
        range(start: number, stop: number, step?: number);
        reduceRight(iterator: (memo: any, element: TModel, index: number) => any, initialMemo: any, context?: any): any[];
        reject(iterator: (element: TModel, index: number) => boolean, context?: any): TModel[];
        rest(): TModel;
        rest(n: number): TModel[];
        tail(): TModel;
        tail(n: number): TModel[];
        toArray(): any[];
        union(...model: TModel[]): TModel[];
        uniq(isSorted?: boolean, iterator?: (element: TModel, index: number) => boolean): TModel[];
        without(...values: any[]): TModel[];
        zip(...model: TModel[]): TModel[];
    }

    class Router extends Events {

        private static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScript's extend functionality

        routes: any;

        constructor(options?: RouterOptions);
        initialize(options?: RouterOptions);
        route(route: string, name: string, callback?: (...parameter: any[]) => void);
        navigate(fragment: string, options?: NavigateOptions);
        navigate(fragment: string, trigger?: boolean);

        private _bindRoutes(): void;
        private _routeToRegExp(route: string): RegExp;
        private _extractParameters(route: RegExp, fragment: string): string[];
    }

    var history: History;

    class History extends Events {

        handlers: any[];
        interval: number;

        start(options?: HistoryOptions);

        getHash(window?: Window): string;
        getFragment(fragment?: string, forcePushState?: boolean): string;
        stop(): void;
        route(route: string, callback: (...args: any[]) => void );
        checkUrl(e?: any): void;
        loadUrl(fragmentOverride: string): boolean;
        navigate(fragment: string, options?: any);
        started: boolean;

        private _updateHash(location: Location, fragment: string, replace: boolean);
    }

    interface ViewOptions<TModel extends Model> {
        model?: TModel;
        collection?: Backbone.Collection<TModel>;
        el?: any;
        id?: string;
        className?: string;
        tagName?: string;
        attributes?: any[];
    }

    class View<TModel extends Model> extends Events {

        private static extend(properties: any, classProperties?: any): any;  // do not use, prefer TypeScript's extend functionality

        // TODO: use generics
        // Related issue: https://typescript.codeplex.com/workitem/1461
        //constructor(options?: ViewOptions<TModel>);
        constructor(options?: ViewOptions<Backbone.Model>);

        $(selector: string): JQuery;
        model: TModel;
        collection: Collection<TModel>;
        template: (json, options?) => string;
        make(tagName: string, attrs?, opts?): View;
        setElement(element: HTMLElement, delegate?: boolean);
        setElement(element: JQuery, delegate?: boolean);
        id: string;
        cid: string;
        className: string;
        tagName: string;
        events: any;

        el: any;
        $el: JQuery;
        setElement(element);
        attributes;
        $(selector): JQuery;
        render(): View;
        remove(): View;
        make(tagName, attributes?, content?);
        delegateEvents(events?: any): any;
        undelegateEvents();

        private _ensureElement(): void;
    }

    // SYNC
    function sync(method, model, options?: JQueryAjaxSettings);
    var emulateHTTP: boolean;
    var emulateJSONBackbone: boolean;

    // Utility
    function noConflict(): typeof Backbone;
    function setDomLibrary(jQueryNew);
}

