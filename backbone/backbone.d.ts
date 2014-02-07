// Type definitions for Backbone 1.0.0
// Project: http://backbonejs.org/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions by: Natan Vivo <https://github.com/nvivo/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts" />

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
        on(eventName: any, callback?: Function, context?: any): any;
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

    interface OptionalDefaults {
        defaults?(): any;
    }

    class Model extends ModelBase implements OptionalDefaults {

        static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScript's extend functionality

        attributes: any;
        changed: any[];
        cid: string;
        id: any;
        idAttribute: string;
        validationError: any;
        urlRoot: any;

        constructor(attributes?: any, options?: any);
        initialize(attributes?: any): void;

        fetch(options?: ModelFetchOptions): JQueryXHR;

        get(attributeName: string): any;
        set(attributeName: string, value: any, options?: ModelSetOptions): Model;
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

        _validate(attrs: any, options: any): boolean;

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

    class Collection extends ModelBase {

        static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScript's extend functionality

        model: any;
        models: any;
        collection: Model;
        length: number;

        constructor(models?: any, options?: any);

        fetch(options?: CollectionFetchOptions): JQueryXHR;

        comparator(element: Model): any;
        comparator(compare: Model, to?: Model): any;

        add(model: Model, options?: AddOptions): Collection;
        add(model: any, options?: AddOptions): Collection;
        add(models: Model[], options?: AddOptions): Collection;
        add(models: any[], options?: AddOptions): Collection;
        at(index: number): Model;
        get(id: any): Model;
        create(attributes: any, options?: ModelSaveOptions): Model;
        pluck(attribute: string): any[];
        push(model: Model, options?: AddOptions): Model;
        pop(options?: Silenceable): Model;
        remove(model: Model, options?: Silenceable): Model;
        remove(models: Model[], options?: Silenceable): Model[];
        reset(models?: Model[], options?: Silenceable): Model[];
        reset(models?: any[], options?: Silenceable): Model[];
        shift(options?: Silenceable): Model;
        sort(options?: Silenceable): Collection;
        unshift(model: Model, options?: AddOptions): Model;
        where(properies: any): Model[];
        findWhere(properties: any): Model;

        _prepareModel(attrs?: any, options?: any): any;
        _removeReference(model: Model): void;
        _onModelEvent(event: string, model: Model, collection: Collection, options: any): void;

        // mixins from underscore

        all(iterator: (element: Model, index: number) => boolean, context?: any): boolean;
        any(iterator: (element: Model, index: number) => boolean, context?: any): boolean;
        collect(iterator: (element: Model, index: number, context?: any) => any[], context?: any): any[];
        chain(): any;
        compact(): Model[];
        contains(value: any): boolean;
        countBy(iterator: (element: Model, index: number) => any): any[];
        countBy(attribute: string): any[];
        detect(iterator: (item: any) => boolean, context?: any): any; // ???
        difference(...model: Model[]): Model[];
        drop(): Model;
        drop(n: number): Model[];
        each(iterator: (element: Model, index: number, list?: any) => void , context?: any): any;
        every(iterator: (element: Model, index: number) => boolean, context?: any): boolean;
        filter(iterator: (element: Model, index: number) => boolean, context?: any): Model[];
        find(iterator: (element: Model, index: number) => boolean, context?: any): Model;
        first(): Model;
        first(n: number): Model[];
        flatten(shallow?: boolean): Model[];
        foldl(iterator: (memo: any, element: Model, index: number) => any, initialMemo: any, context?: any): any;
        forEach(iterator: (element: Model, index: number, list?: any) => void , context?: any): any;
        include(value: any): boolean;
        indexOf(element: Model, isSorted?: boolean): number;
        initial(): Model;
        initial(n: number): Model[];
        inject(iterator: (memo: any, element: Model, index: number) => any, initialMemo: any, context?: any): any;
        intersection(...model: Model[]): Model[];
        isEmpty(object: any): boolean;
        invoke(methodName: string, arguments?: any[]): any;
        last(): Model;
        last(n: number): Model[];
        lastIndexOf(element: Model, fromIndex?: number): number;
        map(iterator: (element: Model, index: number, context?: any) => any[], context?: any): any[];
        max(iterator?: (element: Model, index: number) => any, context?: any): Model;
        min(iterator?: (element: Model, index: number) => any, context?: any): Model;
        object(...values: any[]): any[];
        reduce(iterator: (memo: any, element: Model, index: number) => any, initialMemo: any, context?: any): any;
        select(iterator: any, context?: any): any[];
        size(): number;
        shuffle(): any[];
        some(iterator: (element: Model, index: number) => boolean, context?: any): boolean;
        sortBy(iterator: (element: Model, index: number) => number, context?: any): Model[];
        sortBy(attribute: string, context?: any): Model[];
        sortedIndex(element: Model, iterator?: (element: Model, index: number) => number): number;
        range(stop: number, step?: number): any;
        range(start: number, stop: number, step?: number): any;
        reduceRight(iterator: (memo: any, element: Model, index: number) => any, initialMemo: any, context?: any): any[];
        reject(iterator: (element: Model, index: number) => boolean, context?: any): Model[];
        rest(): Model;
        rest(n: number): Model[];
        tail(): Model;
        tail(n: number): Model[];
        toArray(): any[];
        union(...model: Model[]): Model[];
        uniq(isSorted?: boolean, iterator?: (element: Model, index: number) => boolean): Model[];
        without(...values: any[]): Model[];
        zip(...model: Model[]): Model[];
    }

    interface OptionalRoutes {
        routes?(): any;
    }

    class Router extends Events implements OptionalRoutes {

        static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScript's extend functionality

        constructor(options?: RouterOptions);
        initialize(options?: RouterOptions): void;
        route(route: string, name: string, callback?: Function): Router;
        navigate(fragment: string, options?: NavigateOptions): Router;
        navigate(fragment: string, trigger?: boolean): Router;

        _bindRoutes(): void;
        _routeToRegExp(route: string): RegExp;
        _extractParameters(route: RegExp, fragment: string): string[];
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

        _updateHash(location: Location, fragment: string, replace: boolean): void;
    }

    interface ViewOptions {
        model?: Backbone.Model;
        collection?: Backbone.Collection;
        el?: any;
        id?: string;
        className?: string;
        tagName?: string;
        attributes?: any[];
    }

    interface OptionalEvents {
        events?(): any;
    }

    class View extends Events implements OptionalEvents {

        static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScript's extend functionality

        constructor(options?: ViewOptions);

        $(selector: string): JQuery;
        model: Model;
        collection: Collection;
        make(tagName: string, attrs?: any, opts?: any): View;
        setElement(element: HTMLElement, delegate?: boolean): View;
        setElement(element: JQuery, delegate?: boolean): View;
        id: string;
        cid: string;
        className: string;
        tagName: string;
        options: any;

        el: any;
        $el: JQuery;
        setElement(element: any): View;
        attributes: any;
        $(selector: any): JQuery;
        render(): View;
        remove(): View;
        make(tagName: any, attributes?: any, content?: any): any;
        delegateEvents(events?: any): any;
        undelegateEvents(): any;

        _ensureElement(): void;
    }

    // SYNC
    function sync(method: string, model: Model, options?: JQueryAjaxSettings): any;
    var emulateHTTP: boolean;
    var emulateJSONBackbone: boolean;

    // Utility
    function noConflict(): typeof Backbone;
    function setDomLibrary(jQueryNew: any): any;
	
    var $: JQueryStatic;
}

declare module "backbone" {
    export = Backbone;
}
