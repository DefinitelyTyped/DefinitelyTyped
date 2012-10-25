// Type definitions for Backbone 0.9
// https://github.com/borisyankov/DefinitelyTyped

declare module "Backbone" {

    export class Events {
        on(events: string, callback: (event) => any, context?: any): any;
        off(events?: string, callback?: (event) => any, context?: any): any;
        trigger(events: string, ...args: any[]): any;
    }

    export class Model {

        static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScript's extend functionality

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

        defaults; // or defaults();
        toJSON(): string;
        fetch(options? );
        save(attributes? , options? ): void;
        destroy(options? ): void;
        validate(attributes);
        isValid();
        url();
        urlRoot; // or urlRoot()
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

        static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScript's extend functionality

        model;

        constructor (models? , options? );

        models;
        toJSON(): any;

        ///// start UNDERSCORE 28:
        bind(ev: string, f: Function, ctx?: any): void;
        collection: Model;
        create(attrs, opts? ): Collection;
        each(f: (elem: any) => void ): void;
        last(): any;
        last(n: number): any[];
        filter(f: (elem: any) => any): Collection;
        without(...values: any[]): Collection;

        // Underscore bindings

        each(object: any, iterator: (value, key, list? ) => void , context?: any): any[];
        forEach(object: any, iterator: (value, key, list? ) => void , context?: any): any[];
        map(object: any, iterator: (value, key, list? ) => void , context?: any): any[];
        reduce(list: any[], iterator: any, memo: (memo: any, element: any, index: number, list: any[]) => any, context?: any): any[];
        reduceRight(list: any[], iterator: (memo: any, element: any, index: number, list: any[]) => any, memo: any, context?: any): any[];
        find(list: any[], iterator: any, context?: any): any; // ???
        detect(list: any[], iterator: any, context?: any): any; // ???
        filter(list: any[], iterator: any, context?: any): any[];
        select(list: any[], iterator: any, context?: any): any[];
        reject(list: any[], iterator: any, context?: any): any[];
        every(list: any[], iterator: any, context?: any): bool;
        all(list: any[], iterator: any, context?: any): bool;
        any(list: any[], iterator?: any, context?: any): bool;
        some(list: any[], iterator?: any, context?: any): bool;
        contains(list: any, value: any): bool;
        contains(list: any[], value: any): bool;
        include(list: any, value: any): bool;
        include(list: any[], value: any): bool;
        invoke(list: any[], methodName: string, arguments: any[]): any;
        invoke(object: any, methodName: string, ...arguments: any[]): any;
        max(list: any[], iterator?: any, context?: any): any;
        min(list: any[], iterator?: any, context?: any): any;
        sortBy(list: any[], iterator?: any, context?: any): any;
        sortedIndex(list: any[], valueL: any, iterator?: any): number;
        toArray(list: any): any[];
        size(list: any): number;
        first(array: any[], n?: number): any;
        initial(array: any[], n?: number): any[];
        rest(array: any[], n?: number): any[];
        last(array: any[], n?: number): any;
        without(array: any[], ...values: any[]): any[];
        indexOf(array: any[], value: any, isSorted?: bool): number;
        shuffle(list: any[]): any[];
        lastIndexOf(array: any[], value: any, fromIndex?: number): number;
        isEmpty(object: any): bool;
        groupBy(list: any[], iterator: any): any;

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
        //comparator;
        sort(options? );
        pluck(attribute);
        where(attributes);
        url; // or url()
        parse(response);
        fetch(options?: any): void;
        reset(models, options? );
        create(attributes, options? );
    }

    export class Router {

        static extend(properties: any, classProperties?: any): any; // do not use, prefer TypeScript's extend functionality

        routes;
        constructor (options? );
        route(route, name, callback? );
        navigate(fragment, options? );
    }

    export var history: History;

    export class History {
        start(options? );
    }

    export class Sync {
        sync(method, model, options? );
        emulateHTTP: bool;
        emulateJSONBackbone: bool;
    }

    export class View {

        static extend(properties: any, classProperties?: any): any;  // do not use, prefer TypeScript's extend functionality

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