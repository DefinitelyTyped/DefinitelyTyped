// Type definitions for Backbone 0.9.10
// Project: http://backbonejs.org/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts" />

declare module Backbone {

    export interface AddOptions extends Silenceable {
        at: number;
    }

    export interface HistoryOptions extends Silenceable {
        pushState?: bool;
        root?: string;
    }

    export interface NavigateOptions {
        trigger: bool;
    }

    export interface RouterOptions {
        routes: any;
    }

    export interface Silenceable {
        silent?: bool;
    }

    interface Validable {
        validate?: bool;
    }

    interface Waitable {
        wait?: bool;
    }

    interface Parseable {
        parse?: any;
    }

    export interface PersistenceOptions {
        url?: string;
        beforeSend?: (jqxhr: JQueryXHR) => void;
        success?: (modelOrCollection?: any, response?: any, options?: any) => void;
        error?: (modelOrCollection?: any, jqxhr?: JQueryXHR, options?: any) => void;
    }

    export interface ModelSetOptions extends Silenceable extends Validable {
    }

    export interface ModelFetchOptions extends PersistenceOptions extends ModelSetOptions extends Parseable {
    }

    export interface ModelSaveOptions extends Silenceable extends Waitable extends Validable extends Parseable extends PersistenceOptions {
        patch?: bool;
    }

    export interface ModelDestroyOptions extends Waitable extends PersistenceOptions {
    }

    export interface CollectionFetchOptions extends PersistenceOptions extends Parseable {
        reset?: bool;
    }

    interface on { (eventName: string, callback: (...args: any[]) => void, context?: any): any; }
    interface off { (eventName?: string, callback?: (...args: any[]) => void, context?: any): any; }
    interface trigger { (eventName: string, ...args: any[]): any; }
    interface bind { (eventName: string, callback: (...args: any[]) => void, context?: any): any; }
    interface unbind { (eventName?: string, callback?: (...args: any[]) => void, context?: any): any; }
    
    declare class Events {
        on(eventName: string, callback: (...args:any[]) => void, context?: any): any;
        off(eventName?: string, callback?: (...args:any[]) => void, context?: any): any;
        trigger(eventName: string, ...args: any[]): any;
        bind(eventName: string, callback: (...args:any[]) => void, context?: any): any;
        unbind(eventName?: string, callback?: (...args:any[]) => void, context?: any): any;

        once(events: string, callback: (...args: any[]) => void , context?: any): any;
        listenTo(object: any, events: string, callback: (...args: any[]) => void ): any;
        listenToOnce(object: any, events: string, callback: (...args: any[]) => void ): any;
        stopListening(object?: any, events?: string, callback?: (...args: any[]) => void ): any;
    }

    export class ModelBase extends Events {
        url: any;
        parse(response, options?: any);
        toJSON(options?: any): any;
        sync(...arg: any[]): JQueryXHR;
    }


    export class Model extends ModelBase {

        static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScript's extend functionality

        attributes: any;
        changed: any[];
        cid: string;
        id: any;
        idAttribute: string;
        validationError: any;
        urlRoot(): string;

        constructor (attributes?: any, options?: any);
        initialize(attributes?: any);

        fetch(options?: ModelFetchOptions): JQueryXHR;

        get(attributeName: string): any;
        set(attributeName: string, value: any, options?: ModelSetOptions);
        set(obj: any, options?: ModelSetOptions);

        change();
        changedAttributes(attributes?: any): any[];
        clear(options?: Silenceable);
        clone(): Model;
        defaults(): any;
        destroy(options?: ModelDestroyOptions);
        escape(attribute: string);
        has(attribute: string): bool;
        hasChanged(attribute?: string): bool;
        isNew(): bool;
        isValid(): bool;
        previous(attribute: string): any;
        previousAttributes(): any[];
        save(attributes?: any, options?: ModelSaveOptions);
        unset(attribute: string, options?: Silenceable);
        validate(attributes: any, options?: any): any;
    }

    export class Collection extends ModelBase {

        static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScript's extend functionality

        model: any;
        models: any;
        collection: Model;
        length: number;

        constructor (models?: any, options?: any);

        fetch(options?: CollectionFetchOptions): JQueryXHR;

        comparator(element: Model): number;
        comparator(element: Model): string;
        comparator(compare: Model, to?: Model): number;

        add(model: Model, options?: AddOptions);
        add(models: Model[], options?: AddOptions);
        at(index: number): Model;
        get(id: any): Model;
        create(attributes: any, options?: ModelSaveOptions): Model;
        pluck(attribute: string): any[];
        push(model: Model, options?: AddOptions);
        pop(options?: Silenceable);
        remove(model: Model, options?: Silenceable);
        remove(models: Model[], options?: Silenceable);
        reset(models?: Model[], options?: Silenceable);
        shift(options?: Silenceable);
        sort(options?: Silenceable);
        unshift(model: Model, options?: AddOptions);
        where(properies: any): Model[];

        all(iterator: (element: Model, index: number) => bool, context?: any): bool;
        any(iterator: (element: Model, index: number) => bool, context?: any): bool;
        collect(iterator: (element: Model, index: number, context?: any) => any[], context?: any): any[];
        chain(): any;
        compact(): Model[];
        contains(value: any): bool;
        countBy(iterator: (element: Model, index: number) => any): any[];
        countBy(attribute: string): any[];
        detect(iterator: (item: any) => bool, context?: any): any; // ???
        difference(...model: Model[]): Model[];
        drop(): Model;
        drop(n: number): Model[];
        each(iterator: (element: Model, index: number, list?: any) => void, context?: any);
        every(iterator: (element: Model, index: number) => bool, context?: any): bool;
        filter(iterator: (element: Model, index: number) => bool, context?: any): Model[];
        find(iterator: (element: Model, index: number) => bool, context?: any): Model;
        first(): Model;
        first(n: number): Model[];
        flatten(shallow?: bool): Model[];
        foldl(iterator: (memo: any, element: Model, index: number) => any, initialMemo: any, context?: any): any;
        forEach(iterator: (element: Model, index: number, list?: any) => void, context?: any);
        include(value: any): bool;
        indexOf(element: Model, isSorted?: bool): number;
        initial(): Model;
        initial(n: number): Model[];
        inject(iterator: (memo: any, element: Model, index: number) => any, initialMemo: any, context?: any): any;
        intersection(...model: Model[]): Model[];
        isEmpty(object: any): bool;
        invoke(methodName: string, arguments?: any[]);
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
        some(iterator: (element: Model, index: number) => bool, context?: any): bool;
        sortBy(iterator: (element: Model, index: number) => number, context?: any): Model[];
        sortBy(attribute: string, context?: any): Model[];
        sortedIndex(element: Model, iterator?: (element: Model, index: number) => number): number;
        range(stop: number, step?: number);
        range(start: number, stop: number, step?: number);
        reduceRight(iterator: (memo: any, element: Model, index: number) => any, initialMemo: any, context?: any): any[];
        reject(iterator: (element: Model, index: number) => bool, context?: any): Model[];
        rest(): Model;
        rest(n: number): Model[];
        tail(): Model;
        tail(n: number): Model[];
        toArray(): any[];
        union(...model: Model[]): Model[];
        uniq(isSorted?: bool, iterator?: (element: Model, index: number) => bool): Model[];
        without(...values: any[]): Model[];
        zip(...model: Model[]): Model[];
    }

    export class Router extends Events {

        static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScript's extend functionality

        routes: any;

        constructor (options?: RouterOptions);
        initialize (options?: RouterOptions);
        route(route: string, name: string, callback?: (...parameter: any[]) => void);
        navigate(fragment: string, options?: NavigateOptions);
        navigate(fragment: string, trigger?: bool);
    }

    export var history: History;
    export class History {
        start(options?: HistoryOptions);
        navigate(fragment: string, options: any);
        pushSate();
        getFragment(fragment?: string, forcePushState?: bool): string;
        getHash(window?: Window): string;
        started: bool;
    }

    export interface ViewOptions {
        model?: Backbone.Model;
        collection?: Backbone.Collection;
        el?: any;
        id?: string;
        className?: string;
        tagName?: string;
        attributes?: any[];
    }

    export class View extends Events {

        static extend(properties: any, classProperties?: any): any;  // do not use, prefer TypeScript's extend functionality

        constructor (options?: ViewOptions);

        $(selector: string): JQuery;
        model: Model;
        collection: Collection;
        template: (data?: any) => string;
        make(tagName: string, attrs?, opts?): View;
        setElement(element: HTMLElement, delegate?: bool);
        id: string;
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
        //delegateEvents: any;
        delegateEvents(events?: any): any;
        undelegateEvents();
    }

    // SYNC
    function sync(method, model, options?: JQueryAjaxSettings);
    var  emulateHTTP: bool;
    var  emulateJSONBackbone: bool;

    // Utility
    function noConflict(): Backbone;
    function setDomLibrary(jQueryNew);
}
