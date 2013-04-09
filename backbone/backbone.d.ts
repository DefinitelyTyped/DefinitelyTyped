// Type definitions for Backbone 0.9.10
// Project: http://backbonejs.org/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts" />

declare module Backbone {

    export interface AddOptions extends Silenceable {
        at: number;
    }

    export interface CreateOptions extends Silenceable {
        wait: bool;
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
    }

    export class ModelBase extends Events {
        fetch(options?: JQueryAjaxSettings);
        url: any;
        parse(response);
        toJSON(): any;
    }

    export class Model extends ModelBase {

        static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScript's extend functionality

        attributes: any;
        changed: any[];
        cid: string;
        id: any;
        idAttribute: string;
        urlRoot() : string;

        constructor (attributes?: any, options?: any);
        initialize(attributes?: any);

        get(attributeName: string): any;
        set(attributeName: string, value: any, options?: Silenceable);
        set(obj: any, options?: Silenceable);

        change();
        changedAttributes(attributes?: any): any[];
        clear(options?: Silenceable);
        clone(): Model;
        defaults(): any;
        destroy(options?: JQueryAjaxSettings);
        escape(attribute: string);
        has(attribute: string): bool;
        hasChanged(attribute?: string): bool;
        isNew(): bool;
        isValid(): string;
        previous(attribute: string): any;
        previousAttributes(): any[];
        save(attributes?: any, options?: JQueryAjaxSettings);
        unset(attribute: string, options?: Silenceable);
        validate(attributes: any): any;
    }

    export class Collection extends ModelBase {

        static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScript's extend functionality

        model: Model;
        models: any;
        collection: Model;
        length: number;

        constructor (models?: any, options?: any);

        comparator(element: Model): number;
        comparator(element: Model): string;
        comparator(compare: Model, to?: Model): number;

        add(model: Model, options?: AddOptions);
        add(models: Model[], options?: AddOptions);
        at(index: number): Model;
        get(id: any): Model;
        create(attributes: any, options?: CreateOptions): Model;
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
        el?: Element;
        id?: string;
        className?: string;
        tagName?: string;
        attributes?: any[];
    }

    export class View extends Events {

        static extend(properties: any, classProperties?: any): any;  // do not use, prefer TypeScript's extend functionality

        constructor (options?: ViewOptions);

        $(selector: string): any;
        model: Model;
        make(tagName: string, attrs?, opts?): View;
        setElement(element: HTMLElement, delegate?: bool);
        tagName: string;
        events: any;

        el: HTMLElement;
        $el;
        setElement(element);
        attributes;
        $(selector);
        render();
        remove();
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
