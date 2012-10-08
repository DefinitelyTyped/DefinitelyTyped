// Type definitions for Backbone 0.9
// https://github.com/borisyankov/DefinitelyTyped

declare module Backbone {

    export class Events {
        on(events: string, callback: (event) => any, context?: any): any;
        off(events?: string, callback?: (event) => any, context?: any): any;
        trigger(events: string, ...args: any[]): any;
    }

    export class Model {

        static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScrip's extend functionality

        constructor (attributes?: any, options?: any);

        get(attributeName: string): any;
        set(attributeName: string, value: any): void;
        set(obj: any): void;

        escape(attribute);
        has(attribute);
        unset(attribute, options? );
        clear(options? );

        id: any;
        idAttribute: any;
        cid;
        attributes;
        changed;

        bind(ev: string, f: Function, ctx?: any): void;  /// ????

        // defaults; defaults();
        toJSON(): string;
        fetch(options? );
        save(attributes? , options? ): void;
        destroy(options? ): void;
        validate(attributes);
        isValid();
        url();
        urlRoot();
        parse(response);
        clone();
        isNew();
        change();
        hasChanged(attribute? );
        changedAttributes(attributes? );
        previous(attribute);
        previousAttributes();
    }

    export class Collection {

        static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScrip's extend functionality

        model;

        constructor (models? , options? );

        models;
        toJSON(): any;

        ///// start UNDERSCORE 28:
        bind(ev: string, f: Function, ctx?: any): void;
        collection: Model;
        create(attrs, opts? ): Collection;
        each(f: (elem: any) => void ): void;
        fetch(opts?: any): void;
        last(): any;
        last(n: number): any[];
        filter(f: (elem: any) => any): Collection;
        without(...values: any[]): Collection;

        /////  'reduce', 'reduceRight', 'find',
    'detect', 'filter', 'select', 'reject', 'every', 'all', 'some', 'any',
    'include', 'contains', 'invoke', 'max', 'min', 'sortBy', 'sortedIndex',
    'toArray', 'size', 'first', 'initial', 'rest', 'last', 'without', 'indexOf',
    'shuffle', 'lastIndexOf', 'isEmpty', 'groupBy'        

        each(object: any, iterator: (value, key, list?): void, context?: any): any[];
        forEach(object: any, iterator: (value, key, list?): void, context?: any): any[];
        map(object: any, iterator: ObjectIterator, context?: any): any[];

        add(models, options? );
        remove(models, options? );
        get(id);
        getByCid(cid);
        at(index: number);
        push(model, options? );
        pop(options? );
        unshift(model, options? );
        shift(options? );
        length: number;
        comparator;
        sort(options? );
        pluck(attribute);
        where(attributes);
        url();
        parse(response);
        fetch(options? );
        reset(models, options? );
        create(attributes, options? );
    }

    export class Router {

        static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScrip's extend functionality

        routes;
        constructor (options? );
        route(route, name, callback? );
        navigate(fragment, options? );
    }

    export class History {
        start(options? );
    }

    export class Sync {
        sync(method, model, options? );
        emulateHTTP: bool;
        emulateJSONBackbone: bool;
    }

    export class View {

        static extend(properties: any, classProperties?: any ): any;  // do not use, prefer TypeScrip's extend functionality

        constructor (options?: any);

        $(selector: string): any;   
        model: Model;        
        make(tagName: string, attrs? , opts? ): View;
        setElement(element: HTMLElement, delegate?: bool): void;
        tagName: string;
        events: any;

        el: HTMLElement;
        $el;
        setElement(element);
        attributes;
        $(selector);
        render();
        remove(): void;;
        make(tagName, attributes? , content? );
        //delegateEvents: any;
        delegateEvents(events?: any): any;
        undelegateEvents();
    }

    export class Utility {
        noConflict(): any;
        setDomLibrary(jQueryNew);
    }
}