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

    /** 
     * Options available for the history global router.
     */
    interface HistoryOptions extends Silenceable {
        /**
         * Set to true to enable pushState. Older browsers that don't support 
         * pushState will continue to use hash-based URL fragments, and if a 
         * hash URL is visited by a pushState-capable browser, it will be 
         * transparently upgraded to the true URL.
         */
        pushState?: boolean;

        /**
         * If your application is not being served from the root url / of your domain, 
         * this option must be specified to tell History where the root really is.
         */
        root?: string;

        /**
         *  If you'd like to use pushState, but have browsers that don't support it 
         * natively use full page refreshes instead, you can add {hashChange: false}
         *  to the options. 
         */
        hashChange?: boolean;
    }

    /** 
     * Defines options for the Router.navigate function.
     */
    interface NavigateOptions {
        /** 
         * If you wish to call the route function upon nvaigation, set the 
         * this option to true.
         */
        trigger?: boolean;
        
        /**
         * To update the URL without creating an entry in the browser's history, 
         * set this option to true
         */
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

    /**
     * Events is a class that can be extended by any object, giving the object 
     * the ability to bind and trigger custom named events. Events do not have 
     * to be declared before they are bound, and may take passed arguments.      
     */
    class Events {
        /**
         * Bind a callback function to an object. The callback will be invoked 
         * whenever the specified event (or events) is fired.
         * @param eventName The event to bind to. This may also be a space-delimited list of several events. Callbacks bound to the special "all" event will be triggered when any event occurs, and are passed the name of the event as the first argument.
         * @param callback The callback function to invoke whenever the event is fired.
         * @param context To supply a context value for this when the callback is invoked, pass it as this argument.
         */
        on(eventName: string, callback?: Function, context?: any): any;

        /**
         * Bind one or more callback functions to an object. 
         * @param eventMap An object containing key-value pairs mapping event names to callback functions.
         */
        on(eventMap: { [key: string]: Function });

        /**
         * Remove a previously-bound callback function from an object.
         * @param eventName The event for which to remove callbacks. If not specified, callbacks for all events will be removed.
         * @param callback The callback function to remove bindings to. If no callback is specified, all callbacks for the specified eventName will be removed.
         * @param context The context for which to remove bindings. If no context is specified, all of the versions of the callback with different contexts will be removed.
         */
        off(eventName?: string, callback?: Function, context?: any): any;

        /** 
         * Trigger callbacks for the given event, or space-delimited list of events. Subsequent arguments to trigger will be passed along to the event callbacks. 
         * @param eventName The name of the event to trigger, or a space-delimited list of events.
         * @param args Additional arguments that will be passed along to event callbacks.
         */
        trigger(eventName: string, ...args: any[]): any;

        /**
         * Bind a callback function to an object. The callback will be invoked 
         * whenever the specified event (or events) is fired.
         * @param eventName The event to bind to. This may also be a space-delimited list of several events. Callbacks bound to the special "all" event will be triggered when any event occurs, and are passed the name of the event as the first argument.
         * @param callback The callback function to invoke whenever the event is fired.
         * @param context To supply a context value for this when the callback is invoked, pass it as this argument.
         */
        bind(eventName: string, callback: Function, context?: any): any;

        /**
         * Remove a previously-bound callback function from an object.
         * @param eventName The event for which to remove callbacks. If not specified, callbacks for all events will be removed.
         * @param callback The callback function to remove bindings to. If no callback is specified, all callbacks for the specified eventName will be removed.
         * @param context The context for which to remove bindings. If no context is specified, all of the versions of the callback with different contexts will be removed.
         */
        unbind(eventName?: string, callback?: Function, context?: any): any;

        /**
         * Just like on, but causes the bound callback to only fire once before being removed. Handy for saying "the next time that X happens, do this". 
         * @param eventName The event to bind to. This may also be a space-delimited list of several events. Callbacks bound to the special "all" event will be triggered when any event occurs, and are passed the name of the event as the first argument.
         * @param callback The callback function to invoke whenever the event is fired.
         * @param context To supply a context value for this when the callback is invoked, pass it as this argument.
         */
        once(events: string, callback: Function, context?: any): any;

        /** 
         * Tell an object to listen to a particular event on an other object. The callback will always be called with object as context. 
         * @param object the object to listen to events on.
         * @param events The event to listen for.
         * @param callback The callback function to invoke when the event occurs.
         */
        listenTo(object: any, events: string, callback: Function): any;

        /** 
         * Tell an object to listen to a particular event to occur once on another object. 
         * @param object the object to listen to events on.
         * @param events The event to listen for.
         * @param callback The callback function to invoke when the event occurs.
         */
        listenToOnce(object: any, events: string, callback: Function): any;

        /**
         * Tell an object to stop listening to events. Either call stopListening with no arguments to have the object remove all of its registered callbacks ... or be more precise by telling it to remove just the events it's listening to on a specific object, or a specific event, or just a specific callback. 
         * @param object The object to stop listening to events from.
         * @param events The event for which to remove callbacks. If not specified, callbacks for all events will be removed.
         * @param callback The callback function to remove bindings to. If no callback is specified, all callbacks for the specified events will be removed.
         */
        stopListening(object?: any, events?: string, callback?: Function): any;
    }
    
    class ModelBase extends Events {
        /** 
         * Returns the relative URL where the model's resource would be located on 
         * the server. If your models are located somewhere else, override 
         * this method with the correct logic. Generates URLs of the form: 
         * "[collection.url]/[id]" by default, but you may override by specifying 
         * an explicit urlRoot if the model's collection shouldn't be taken into 
         * account. 
         */
        url: any;

        /**
         * Called whenever a model's data is returned by the server, in fetch, 
         * and save. The function is passed the raw response object, and should 
         * return the attributes hash to be set on the model. The default 
         * implementation is a no-op, simply passing through the JSON response. 
         * Override this if you need to work with a preexisting API, or 
         * better namespace your responses. 
         * @param response The raw response object.
         */
        parse(response: any, options?: any): any;

        /**
         * Return a shallow copy of the model's attributes for JSON stringification. 
         * This can be used for persistence, serialization, or for augmentation 
         * before being sent to the server. The name of this method is a bit 
         * confusing, as it doesn't actually return a JSON string — but I'm afraid 
         * that it's the way that the JavaScript API for JSON.stringify works. 
         */
        toJSON(options?: any): any;

        /**
         * Uses Backbone.sync to persist the state of a model to the server. 
         * Can be overridden for custom behavior. 
         */
        sync(...arg: any[]): JQueryXHR;
    }

    /**
     * Models are the heart of any JavaScript application, containing the 
     * interactive data as well as a large part of the logic surrounding it: 
     * conversions, validations, computed properties, and access control. 
     * You extend Backbone.Model with your domain-specific methods, and 
     * Model provides a basic set of functionality for managing changes. 
     */
    class Model extends ModelBase {

        /**
        * Do not use, prefer TypeScript's extend functionality.
        **/
        private static extend(properties: any, classProperties?: any): any;

        /**
         * The attributes property is the internal hash containing the model's state 
         * — usually (but not necessarily) a form of the JSON object representing the 
         * model data on the server. 
         * 
         * Please use set to update the attributes instead of modifying them 
         * directly. If you'd like to retrieve and munge a copy of the model's 
         * attributes, use _.clone(model.attributes) instead. 
         */
        attributes: any;

        /**
         * The changed property is the internal hash containing all the 
         * attributes that have changed since the last set. Please do not update 
         * changed directly since its state is internally maintained by set. 
         * A copy of changed can be acquired from changedAttributes. 
         */
        changed: any[];

        /**
         * A special property of models, the cid or client id is a unique identifier 
         * automatically assigned to all models when they're first created. Client ids 
         * are handy when the model has not yet been saved to the server, and does not 
         * yet have its eventual true id, but already needs to be visible in the UI. 
         */
        cid: string;

        /**
         * The collection to which this model belongs (if any).
         */
        collection: Collection<any>;

        /**
        * Default attributes for the model. It can be an object hash or a method returning an object hash.
        * For assigning an object hash, do it like this: this.defaults = <any>{ attribute: value, ... };
        * That works only if you set it in the constructor or the initialize method.
        **/
        defaults(): any;

        /** 
         * A special property of models, the id is an arbitrary string 
         * (integer id or UUID). If you set the id in the attributes hash, it 
         * will be copied onto the model as a direct property. Models can be 
         * retrieved by id from collections, and the id is used to generate model 
         * URLs by default. 
         */
        id: any;

        /** 
         * A model's unique identifier is stored under the id attribute. If you're 
         * directly communicating with a backend (CouchDB, MongoDB) that uses a different 
         * unique key, you may set a Model's idAttribute to transparently map from 
         * that key to id.
         */
        idAttribute: string;

        /** The value returned by validate during the last failed validation. */
        validationError: any;

        /**
         * Specify a urlRoot if you're using a model outside of a collection, to enable 
         * the default url function to generate URLs based on the model id. "[urlRoot]/id".
         * Normally, you won't need to define this. Note that urlRoot may also be a function. 
         */
        urlRoot: any;

        /** 
         * When creating an instance of a model, you can pass in the initial 
         * values of the attributes, which will be set on the model.
         * @param attributes the initial attribute values to set on the model.
         * @param options If you pass a {collection: ...} as the options, the model 
         * gains a collection property that will be used to indicate which collection 
         * the model belongs to, and is used to help compute the model's url. 
         * The model.collection property is normally created automatically 
         * when you first add a model to a collection. Note that the reverse 
         * is not true, as passing this option to the constructor will not 
         * automatically add the model to the collection. 
         * 
         * If {parse: true} is passed as an option, the attributes will 
         * first be converted by parse before being set on the model
         */
        constructor(attributes?: any, options?: any);
        initialize(attributes?: any, options?: any): void;

        /**
         * Resets the model's state from the server by delegating to Backbone.sync.
         * Useful if the model has never been populated with data, or if you'd 
         * like to ensure that you have the latest server state. 
         */
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

        /**
         * Retrieve a hash of only the model's attributes that have changed since the 
         * last set, or false if there are none.
         * @param attributes Optionally, an external attributes hash can be passed in, returning the attributes in that hash which differ from the model. This can be used to figure out which portions of a view should be updated, or what calls need to be made to sync the changes to the server. 
         */
        changedAttributes(attributes?: any): any[];

        /** 
         * Removes all attributes from the model, including the id attribute. Fires a 
         * "change" event unless silent is passed as an option. 
         */
        clear(options?: Silenceable): any;

        /**
         * Returns a new instance of the model with identical attributes. 
         */
        clone(): Model;

        /**
         * Destroys the model on the server by delegating an HTTP DELETE request to Backbone.sync. 
         * Triggers a "destroy" event on the model, which will bubble up through any collections 
         * that contain it, a "request" event as it begins the Ajax request to the server, and a "sync" 
         * event, after the server has successfully acknowledged the model's deletion.
         * @returns a jqXHR object, or false if the model isNew.
         */
        destroy(options?: ModelDestroyOptions): any;

        /** 
         * Similar to get, but returns the HTML-escaped version of a model's attribute. 
         * If you're interpolating data from the model into HTML, using escape to 
         * retrieve attributes will prevent XSS attacks. 
         * @param attribute the name of the attribute to retrieve.
         */
        escape(attribute: string): string;

        /** 
         * Returns true if the attribute is set to a non-null or non-undefined value. 
         * @param attribute the name of the attribtue to look for.
         */
        has(attribute: string): boolean;

        /** 
         * Has the model changed since the last set? Note that this method is only useful during the course of a "change" event. 
         * @param attribute If an attribute is passed, returns true if that specific attribute has changed. 
         */
        hasChanged(attribute?: string): boolean;

        /**
         * Returns a value indicating whether this model has been saved to the server yet.
         * If the model does not yet have an id, it is considered to be new. 
         */
        isNew(): boolean;

        /** 
         * Run validate to check the model state. 
         */
        isValid(options?: any): boolean;

        /** 
         * During a "change" event, this method can be used to get the previous value of a changed attribute. 
         * @param attribute the name of the attribute.
         */
        previous(attribute: string): any;

        /**
         * Return a copy of the model's previous attributes. Useful for getting a diff between versions of a model, or getting back to a valid state after an error occurs. 
         */
        previousAttributes(): any[];

        /**
         * Save a model to your database (or alternative persistence layer), by delegating to Backbone.sync.
         * @param attributes The attributes hash (as in set) should contain the attributes you'd like to change — keys that aren't mentioned won't be altered — but, a complete representation of the resource will be sent to the server.
         * @returns a jqXHR if validation is successful and false otherwise.
         */
        save(attributes?: any, options?: ModelSaveOptions): any;

        /**
         * Remove an attribute by deleting it from the internal attributes hash. Fires a "change" event unless silent is passed as an option. 
         * @param attribute the name of the attribute to delete.
         */
        unset(attribute: string, options?: Silenceable): Model;

        /**
         * This method is left undefined, and you're encouraged to override it with your custom validation logic, if you have any that can be performed in JavaScript. By default validate is called before save, but can also be called before set if {validate:true} is passed. 
         * If the attributes are valid, don't return anything from validate; if they are invalid return an error of your choosing.
         * @param attributes The model attributes.
         * @param options the options from set or save.
         */
        validate(attributes: any, options?: any): any;

        private _validate(attrs: any, options: any): boolean;

        // mixins from underscore
        /**
         * Retrieve all the names of the model's properties. 
         */
        keys(): string[];

        /**
         * Return all of the values of the model's properties. 
         */
        values(): any[];

        /** Convert the model into a list of [key, value] pairs. */
        pairs(): any[];

        /**
         * Returns a copy of this model object where the keys have become the 
         * values and the values the keys. For this to work, all of your object's 
         * values should be unique and string serializable. 
         */
        invert(): any;

        /**
         * Return a copy of this model, filtered to only have values for the whitelisted 
         * keys (or array of valid keys). Alternatively accepts a predicate indicating 
         * which keys to pick. 
         */
        pick(keys: string[]): any;
        
        /**
         * Return a copy of this model, filtered to only have values for the whitelisted 
         * keys (or array of valid keys). Alternatively accepts a predicate indicating 
         * which keys to pick. 
         */
        pick(...keys: string[]): any;

        /**
         * Return a copy of this model, filtered to omit the blacklisted keys (or 
         * array of keys). 
         */
        omit(keys: string[]): any;

        /**
         * Return a copy of this model, filtered to omit the blacklisted keys (or 
         * array of keys). 
         */
        omit(...keys: string[]): any;
    }

    class Collection<TModel extends Model> extends ModelBase {

        /**
        * Do not use, prefer TypeScript's extend functionality.
        **/
        private static extend(properties: any, classProperties?: any): any;

        // TODO: this really has to be typeof TModel
        //model: typeof TModel;
        model: { new(): TModel; }; // workaround
        models: TModel[];
        length: number;

        constructor(models?: TModel[], options?: any);
        initialize(models?: TModel[], options?: any): void;

        fetch(options?: CollectionFetchOptions): JQueryXHR;

        comparator(element: TModel): number;
        comparator(compare: TModel, to?: TModel): number;

        add(model: TModel, options?: AddOptions): Collection<TModel>;
        add(models: TModel[], options?: AddOptions): Collection<TModel>;
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
        invoke(methodName: string, arguments?: any[]): any;
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
        routes(): any;

        /**
         * When creating a new router, you may pass its routes hash directly as an option, if you choose. All options will also be passed to your initialize function, if defined. 
         */
        constructor(options?: RouterOptions);

        /** 
         * Called upon instance construction.
         * @param options The options passed to the constructor.
         */
        initialize(options?: RouterOptions): void;

        /**
         * Manually create a route for the router. 
         * Each matching capture from the route will be passed as an argument 
         * to the callback. 
         * Routes added later may override previously declared routes. 
         * @param route The routing string.
         * @param name The name of the route. The name argument will be triggered as a "route:name" event whenever the route is matched. 
         * @param callback The function to invoke when the route is matched. If the callback argument is omitted router[name] will be used instead. 
         */
        route(route: string, name: string, callback?: Function): Router;

        /**
         * Manually create a route for the router. 
         * Each matching capture from the regular expression will be passed as an argument 
         * to the callback. 
         * Routes added later may override previously declared routes. 
         * @param route The routing regular expression.
         * @param name The name of the route. The name argument will be triggered as a "route:name" event whenever the route is matched. 
         * @param callback The function to invoke when the route is matched. If the callback argument is omitted router[name] will be used instead. 
         */
        route(route: RegExp, name: string, callback?: Function): Router;

        /**
         * Whenever you reach a point in your application that you'd like to save 
         * as a URL, call navigate in order to update the URL. If you wish to 
         * also call the route function, set the trigger option to true. 
         * To update the URL without creating an entry in the browser's 
         * history, set the replace option to true. 
         * @param fragment The URL fragment to save as a URL.
         * @param option The navigation options.
         */
        navigate(fragment: string, options?: NavigateOptions): Router;

        /**
         * Whenever you reach a point in your application that you'd like to save 
         * as a URL, call navigate in order to update the URL. If you wish to 
         * also call the route function, set the trigger parameter to true. 
         * @param fragment The URL fragment to save as a URL.
         * @param trigger Set this to true if you wish to also call the route function.
         */
        navigate(fragment: string, trigger?: boolean): Router;

        private _bindRoutes(): void;
        private _routeToRegExp(route: string): RegExp;
        private _extractParameters(route: RegExp, fragment: string): string[];
    }

    /** 
     * History serves as a global router (per frame) to handle hashchange events or pushState, match the appropriate route, and trigger callbacks. 
     */
    var history: History;

    /** 
     * History serves as a global router (per frame) to handle hashchange events or pushState, match the appropriate route, and trigger callbacks. You shouldn't ever have to create one of these yourself since Backbone.history already contains one. 
     */
    class History extends Events {

        handlers: any[];
        interval: number;

        /**
         * When all of your Routers have been created, and all of the routes are set up properly, call Backbone.history.start() to begin monitoring hashchange events, and dispatching routes. Subsequent calls to Backbone.history.start() will throw an error, and Backbone.History.started is a boolean value indicating whether it has already been called. 
         * @param options Options for the router.
         * @returns true if a route succeeds with a match for the current URL. If no defined route matches the current URL, it returns false. 
         */
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
        attributes?: any[];
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
