// Type definitions for Backbone 0.9
// https://github.com/borisyankov/DefinitelyTyped

declare module Backbone {

    export class Events {
        on(eventName: string, callback: (event, a, b) => void, context?: any) : any;
        bind(eventName: string, callback: (event, a, b) => void, context?: any) : any;
        off(eventName?: string, callback?: (event, a, b) => void, context?: any): any;
        trigger(eventName: string, ...args: any[]): any;
    }

    export interface ICallbackOptions {
        success(model: any, resonse: any);
        error(model: any, resonse: any);
    }

    export interface ISilenceable {
        silent: bool;
    }

    export interface IAddOptions extends ISilenceable {
        at: number;
    }
    
    export interface ICreateOptions extends ISilenceable {
        wait: bool;
    }
    
    export class ModelBase extends Events {
        fetch(options? : ICallbackOptions);
        url: string; // or url(): string;
        parse(response);
        toJSON(): string;
    }

    export class Model extends ModelBase {

        static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScript's extend functionality

        attributes: any;
        changed: any[];
        cid: string;
        defaults : any; // or defaults();
        id: any;
        idAttribute: string;
        urlRoot : string; // or urlRoot()

        constructor (attributes?: any, options?: any);
        initialize(attributes?: any);

        get(attributeName: string): any;
        set(attributeName: string, value: any);
        set(obj: any);

        change();
        changedAttributes(attributes? : any) : any[];
        clear(options? : ISilenceable );
        clone() : Model;
        destroy(options? : ICallbackOptions );
        escape(attribute : string);
        has(attribute : string) : bool;
        hasChanged(attribute? : string ) : bool;
        isNew() : bool;
        isValid() : string;
        previous(attribute : string) : any;
        previousAttributes(): any[];
        save(attributes? : any, options? : ICallbackOptions );
        unset(attribute: string, options? : ISilenceable );
        validate(attributes : any) : any;
    }

    export class Collection extends ModelBase {

        static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScript's extend functionality

        model: Model;
        models : any;
        collection: Model;
        length: number;

        constructor (models? :any , options? );

        add(model: Model, options? : IAddOptions);
        add(models: Model[], options? : IAddOptions);
        at(index: number) : Model;
        comparator(attribute: string): number;
        comparator(compare: Model, to:Model): number;
        get(id : any) : Model;
        getByCid(cid) : Model;
        create(attributes: any, options? : ICreateOptions ): Collection;
        pluck(attribute:string) : any[];
        push(model: Model, options? : IAddOptions);
        pop(options? : ISilenceable);
        remove(model: Model, options? : ISilenceable);
        remove(models: Model[], options? : ISilenceable);
        reset(models : Model[], options? );
        shift(options? : ISilenceable);
        sort(options? : ISilenceable);
        unshift(model: Model, options?: IAddOptions);
        where(properies: any): Model[];

        all(iterator: (element: Model, index:number) => bool, context?: any): bool;
        any(iterator:(element: Model, index:number) => bool, context?: any): bool;
        collect(iterator: (element: Model, index:number, context? : any ) => any[] , context?: any): any[];
        compact(): Model[];
        contains(value: any): bool;
        countBy(iterator: (element:Model, index:number) => any) : any[];
        countBy(attribute: string) : any[];
        detect(iterator: (item: any) => bool, context?: any): any; // ???
        difference(...model: Model[]) : Model[];
        drop(): Model;
        drop(n: number): Model[];
        each(iterator: (element: Model, index:number, list? ) => void , context?: any);
        every(iterator: (element: Model, index:number) => bool, context?: any): bool;
        filter(iterator: (elemebt:Model, index:number) => bool, context?: any): Model[];
        find(iterator: (element:Model, index:number) => bool, context?: any): Model;
        first(): Model;
        first(n: number): Model[];
        flatten(shallow?: bool): Model[];
        foldl(iterator: (memo: any, element: Model, index:number) => any, initialMemo: any, context?: any): any;
        forEach(iterator: (element: Model, index:number, list? ) => void , context?: any);
        groupBy(iterator: (element:Model, index:number) => any) : any[];
        groupBy(attribute: string) : any[];
        include(value: any): bool;
        indexOf(element: Model, isSorted?: bool): number;
        initial(): Model;
        initial(n: number): Model[];
        inject(iterator: (memo: any, element: Model, index:number) => any, initialMemo: any, context?: any): any;
        intersection(...model: Model[]) : Model[];
        isEmpty(object: any): bool;
        invoke(methodName: string, arguments?: any[]);
        last(): Model;
        last(n: number): Model[];
        lastIndexOf(element: Model, fromIndex?: number): number;
        map(iterator: (element: Model, index:number, context? : any ) => any[] , context?: any): any[];
        max(iterator?: (element:Model, index:number) => any, context?: any): Model;
        min(iterator?: (element:Model, index:number) => any, context?: any): Model;
        object(...values: any[]): any[];
        reduce(iterator: (memo: any, element: Model, index:number) => any, initialMemo: any, context?: any): any;
        select(iterator: any, context?: any): any[];
        size(): number;
        shuffle(): any[];
        some(iterator:(element: Model, index:number) => bool, context?: any): bool;
        sortBy(iterator: (element:Model, index:number) => number, context?: any): Model[];
        sortBy(attribute:string, context?: any): Model[];
        sortedIndex(element: Model, iterator?: (element:Model, index:number) => number): number;
        range(stop: number, step?:number);
        range(start: number, stop: number, step?:number);
        reduceRight(iterator: (memo: any, element: Model, index: number) => any, initialMemo: any, context?: any): any[];
        reject(iterator: (element:Model, index:number) => bool, context?: any): Model[];
        rest(): Model;
        rest(n: number): Model[];
        tail(): Model;
        tail(n: number): Model[];
        toArray(): any[];
        union(...model: Model[]) : Model[];
        uniq(isSorted? : bool, iterator?: (element:Model, index:number) => bool) : Model[];
        without(...values: any[]): Model[];
        zip(...model: Model[]): Model[];
    }

    export interface IRouterOptions {
        routes: any;
    }

    export interface INavigateOptions {
        trigger: bool;
    }

    export class Router {

        static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScript's extend functionality

        routes : any;

        constructor (options? : IRouterOptions);
        initialize (options? : IRouterOptions);
        route(route: string, name: string, callback?: (...parameter:any[]) => void );
        navigate(fragment : string, options? : INavigateOptions);
    }

    export interface IHistoryOptions extends ISilenceable {
        pushState: bool;
        root: string;
    }

    export var history: History;
    export class History {
        start(options? : IHistoryOptions );
        navigate(fragment: string, options: any);
        pushSate();
    }

    export class View {

        static extend(properties: any, classProperties?: any): any;  // do not use, prefer TypeScript's extend functionality

        constructor (options?: any);

        $(selector: string): any;
        model: Model;
        make(tagName: string, attrs? , opts? ): View;
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
        make(tagName, attributes? , content? );
        //delegateEvents: any;
        delegateEvents(events?: any): any;
        undelegateEvents();
    }

    // SYNC
    function sync(method, model, options? : ICallbackOptions);
    var  emulateHTTP: bool;
    var  emulateJSONBackbone: bool;

    // Utility
    function noConflict(): Backbone;
    function setDomLibrary(jQueryNew);

}