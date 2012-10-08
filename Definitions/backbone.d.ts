// Type definitions for Backbone 0.9
// https://github.com/borisyankov/DefinitelyTyped


declare module Backbone {
    export class Events {
        on(events: string, callback: (event) => any, context?: any): any;
        off(events?: string, callback?: (event) => any, context?: any): any;
        trigger(events: string, ...args: any[]): any;
    }

    export class Model {
        extend(properties, classProperties? );
        constructor (attributes: any);

        get(attribute);
        set(attributes, options? );
        escape(attribute);
        has(attribute);
        unset(attribute, options?);
        clear(options? );

        id: any;
        idAttribute: any;
        cid;
        attributes;
        changed;

        defaults();
        toJSON();
        fetch(options? );
        save(attributes? , options? );
        destroy(options? );
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
        extend(properties, classProperties? );
        model;
        constructor (models? , options? );
        models;
        toJSON();
        // Add 28 UNDERSCORE bindings
        add(models, options?);
        remove(models, options? );
        get(id);
        getByCid(cid);
        at(index);
        push(model, options?);
        pop(options? );
        unshift(model, options? );
        shift(options? );
        length;
        comparator;
        sort(options? );
        pluck(attribute);
        where(attributes);
        url();
        parse(response);
        fetch(options? );
        reset(models, options? );
        create(attributes, options?);
    }

    export class Router {
        extend(properties, classProperties? );
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
        extend(properties, classProperties? );
        constructor (options?: any);
        el;
        $el;
        setElement(element);
        attributes;
        $(selector);
        render();
        remove();
        make(tagName, attributes?, content?);
        delegateEvents(events? );
        undelegateEvents();
    }

    export class Utility {
        noConflict(): any;
        setDomLibrary(jQueryNew);
    }
}

