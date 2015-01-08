// Type definitions for Backbone 1.0.0
// Project: http://backbonejs.org/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>, Natan Vivo <https://github.com/nvivo/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../underscore/underscore.d.ts" />

declare module Backbone {

    /** 
     * Options specific to an add operation.
     */
    interface AddOptions extends Silenceable {
        /**
         * Specify an index here to splice the model into the collection at the 
         * specified index.
         */
        at?: number;

        /**
         * If specified and set to false sorting of the collection is disabled
         * when adding the model.
         */
        sort?: boolean;

        /**
         * If you're adding models to the collection that are already in the 
         * collection, they'll be ignored, unless this option is set to 
         * 'true', in which case their attributes will be merged into the 
         * corresponding models, firing any appropriate "change" events. 
         */
        merge?: boolean;
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
        /**
         * If set to true prevents an event from being triggered from the action.
         */
        silent?: boolean;
    }

    interface Validable {
        /**
         * Set to true to perform validation.
         */
        validate?: boolean;
    }

    interface Waitable {
        /**
         * If set to true waits for the server to respond before performing
         * the operation.
         */
        wait?: boolean;
    }

    interface Parseable {
        /**
         * If set to true the attributes will first be converted by parse before 
         * being set on the model.
         */
        parse?: any;
    }

    interface PersistenceOptions {
        /**
         * If specified this url will be used for the ajax call to the server.
         */
        url?: string;

        /**
         * A pre-request callback function that can be used to modify 
         * the jqXHR object before it is sent. Use this to set custom 
         * headers, etc.
         */
        beforeSend?: (jqxhr: JQueryXHR) => void;

        /** 
         * A function to be called if the request succeeds.
         */
        success?: (modelOrCollection?: any, response?: any, options?: any) => void;

        /**
         * A function to be called if the request fails.
         */
        error?: (modelOrCollection?: any, jqxhr?: JQueryXHR, options?: any) => void;
    }

    interface ModelSetOptions extends Silenceable, Validable {
    }

    interface ModelFetchOptions extends PersistenceOptions, ModelSetOptions, Parseable {
    }

    interface ModelSaveOptions extends Silenceable, Waitable, Validable, Parseable, PersistenceOptions {
        /**
         * Set this to true if you'd only like the changed attributes to be sent 
         * to the server as a PATCH request. 
         */
        patch?: boolean;
    }

    interface ModelDestroyOptions extends Waitable, PersistenceOptions {
    }

    interface CollectionFetchOptions extends PersistenceOptions, Parseable {
        /**
         * When the model data returns from the server, it uses set to (intelligently) 
         * merge the fetched models, unless you set this option to true, in which 
         * case the collection will be (efficiently) reset.
         */
        reset?: boolean;
    }

    interface CollectionSetOptions extends Silenceable, Parseable {
        /**
         * If specified and set to false models not already in the
         * collection will not be added.
         */
        add?: boolean;

        /**
         * If specified and set to false models that already exist in 
         * the collection will not have their attributes merged.
         */
        merge?: boolean;
        /**
         * If specified and set to false and the collection contains any models that
         * aren't present in the list these will still remain in the collection, otherwise
         * they are removed.
         */
        remove?: boolean;
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
        on(eventMap: { [key: string]: Function }): any;

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

    /**
     * Collections are ordered sets of models. You can bind "change" events to be 
     * notified when any model in the collection has been modified, listen for 
     * "add" and "remove" events, fetch the collection from the server, and use 
     * a full suite of Underscore.js methods. 
     */
    class Collection<TModel extends Model> extends ModelBase {

        /**
        * Do not use, prefer TypeScript's extend functionality.
        **/
        private static extend(properties: any, classProperties?: any): any;

        /**
         * Override this property to specify the model class that the collection 
         * contains. If defined, you can pass raw attributes objects (and arrays) 
         * to add, create, and reset, and the attributes will be converted into a 
         * model of the proper type. 
         */
        // TODO: this really has to be typeof TModel
        //model: typeof TModel;
        model: { new (): TModel; }; // workaround

        /** 
         * Raw access to the JavaScript array of models inside of the collection. 
         * Usually you'll want to use get, at, or the Underscore methods to access 
         * model objects, but occasionally a direct reference to the array is 
         * desired. 
         */
        models: TModel[];

        /**
         * Like an array, a Collection maintains a length property, counting the 
         * number of models it contains. 
         */
        length: number;

        /**
         * When creating a Collection, you may choose to pass in the initial array 
         * of models. The collection's comparator may be included as an option. 
         * Passing false as the comparator option will prevent sorting.
         */
        constructor(models?: TModel[], options?: any);

        /**
         * Function that if defined will be invoked when the collection is 
         * created with the same arguments as the constructor.
         */
        initialize(models?: TModel[], options?: any): void;

        /**
         * Fetch the default set of models for this collection from the server, 
         * setting them on the collection when they arrive. 
         */
        fetch(options?: CollectionFetchOptions): JQueryXHR;

        /**
         * If you define a comparator, it will be used to maintain the collection in sorted 
         * order. This means that as models are added, they are inserted at the correct 
         * index in collection.models. This function will be used as an underscore sortBy.         
         */
        comparator(element: TModel): number;

        /**
         * If you define a comparator, it will be used to maintain the collection in sorted 
         * order. This means that as models are added, they are inserted at the correct 
         * index in collection.models. This function will be used as an underscore sort.         
         */
        comparator(compare: TModel, to?: TModel): number;

        /**
         * Add a model to the collection, firing an "add" event. 
         * @returns Returns the added (or preexisting, if duplicate) models.
         */
        add(model: TModel, options?: AddOptions): Collection<TModel>;

        /**
         * Add an array of models to the collection, firing an "add" event. 
         * @returns Returns the added (or preexisting, if duplicate) models.
         */
        add(models: TModel[], options?: AddOptions): Collection<TModel>;

        /**
         * Get a model from a collection, specified by index. Useful if your 
         * collection is sorted, and if your collection isn't sorted, at will 
         * still retrieve models in insertion order. 
         */
        at(index: number): TModel;

        /**
         * Get a model from a collection.
         * @param id the id or cid of the model.
         **/
        get(id: number): TModel;

        /**
         * Get a model from a collection.
         * @param id the id or cid of the model.
         **/
        get(id: string): TModel;

        /**
         * Get a model from a collection.
         * @param model the model to get.
         **/
        get(model: Model): TModel;

        /**
         * Convenience to create a new instance of a model within a collection. 
         * Equivalent to instantiating a model with a hash of attributes, saving 
         * the model to the server, and adding the model to the set after being 
         * successfully created. 
         * @param attributes the attributes to add to the created model.
         * @param options additional options controlling how to perform the operation.
         * @returns  Returns the new model.
         */
        create(attributes: any, options?: ModelSaveOptions): TModel;

        /** 
         * Pluck an attribute from each model in the collection. Equivalent to 
         * calling map and returning a single attribute from the iterator. 
         */
        pluck(attribute: string): any[];

        /**
         * Add a model at the end of a collection. 
         * @param model the model to add to the collection.
         * @param options additional options controlling how to perform the operation.
         */
        push(model: TModel, options?: AddOptions): TModel;

        /**
         * Remove and return the last model from a collection. 
         * @param options additional options controlling how to perform the operation.
         */
        pop(options?: Silenceable): TModel;

        /**
         * Remove a model from the collection, and returns them. Fires a "remove" 
         * event, which you can use silent to suppress. The model's index before 
         * removal is available to listeners as options.index. 
         */
        remove(model: TModel, options?: Silenceable): TModel;

        /**
         * Remove an array of models from the collection, and returns them. Fires 
         * a "remove" event, which you can use silent to suppress. The model's 
         * index before removal is available to listeners as options.index. 
         */
        remove(models: TModel[], options?: Silenceable): TModel[];

        /**
         * Use reset to replace a collection with a new list of models (or attribute hashes), 
         * triggering a single "reset" event at the end. For convenience, within a 
         * "reset" event, the list of any previous models is available as 
         * options.previousModels. 
         * @returns the newly-set models.
         */
        reset(models?: TModel[], options?: Silenceable): TModel[];

        /**
         * The set method performs a "smart" update of the collection with the 
         * passed list of models. If a model in the list isn't yet in the 
         * collection it will be added; if the model is already in the collection 
         * its attributes will be merged; and if the collection contains any 
         * models that aren't present in the list, they'll be removed. 
         * 
         * All of the appropriate "add", "remove", and "change" events are fired 
         * as this happens. 
         * 
         * @returns the touched models in the collection. 
         * 
         */
        set(models?: TModel[], options?: CollectionSetOptions): TModel[];

        /**
         * Remove and return the first model from a collection. 
         */
        shift(options?: Silenceable): TModel;

        /**
         * Force a collection to re-sort itself. You don't need to call this under 
         * normal circumstances, as a collection with a comparator will sort itself 
         * whenever a model is added. To disable sorting when adding a model, 
         * pass {sort: false} to add. Calling sort triggers a "sort" event on 
         * the collection. 
         */
        sort(options?: Silenceable): Collection<TModel>;

        /**
         * Add a model at the beginning of a collection. 
         */
        unshift(model: TModel, options?: AddOptions): TModel;

        /**
         * Return an array of all the models in a collection that match the passed 
         * attributes. Useful for simple cases of filter. 
         */
        where(attributes: any): TModel[];

        /**
         * Returns the first model in a collection that match the passed 
         * attributes. Useful for simple cases of filter. 
         */
        findWhere(attributes: any): TModel;

        private _prepareModel(attrs?: any, options?: any): any;
        private _removeReference(model: TModel): void;
        private _onModelEvent(event: string, model: TModel, collection: Collection<TModel>, options: any): void;

        // mixins from underscore

        /**
         * Returns true if all of the values in the list pass the predicate truth test. 
         * @alias every
         */
        all(iterator: (element: TModel, index: number) => boolean, context?: any): boolean;

        /**
         * Returns true if any of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a true element is found. 
         */
        any(iterator: (element: TModel, index: number) => boolean, context?: any): boolean;

        /**
         * Produces a new array of values by mapping each value in list through a 
         * transformation function (iterator).
         * @alias map
         */
        collect(iterator: (element: TModel, index: number, context?: any) => any[], context?: any): any[];

        /**
         * Returns a wrapped object. Calling methods on this object will continue to return wrapped objects until value is called. 
         * See underscore.js documentation for more information.
         */
        chain(): any;

        /**
         * Returns true if the value is present in the list.
         * @alias include 
         */
        contains(value: any): boolean;

        /**
         * Sorts a list into groups and returns a count for the number of objects in each group. 
         * Similar to groupBy, but instead of returning a list of values, returns a count 
         * for the number of values in that group. 
         */
        countBy(iterator: (element: TModel, index: number) => any): _.Dictionary<number>;

        /**
         * Sorts a list into groups and returns a count for the number of objects in each group. 
         * Similar to groupBy, but instead of returning a list of values, returns a count 
         * for the number of values in that group. 
         */
        countBy(attribute: string): _.Dictionary<number>;

        /**
         * Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test.The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list. 
         * @alias find
         */
        detect(iterator: (item: any) => boolean, context?: any): any; // ???

        /**
         * Returns the rest of the elements of the collection. 
         * Pass an index to return the values of the array from that index onward. If not
         * specified the first item in the collection is dropped.
         * @alias tail, rest
         */
        drop(n?: number): TModel[];

        /**
         * Iterates over the models in the collection, yielding each in turn to an 
         * iterator function. The iterator is bound to the context object, if one 
         * is passed.
         * @alias forEach 
         */
        each(iterator: (element: TModel, index: number, list?: any) => void, context?: any): any;

        /**
         * Returns true if all of the values in the list pass the predicate truth test. 
         * @alias all
         */
        every(iterator: (element: TModel, index: number) => boolean, context?: any): boolean;

        /**
         * Looks through each value in the collection, returning an array of all 
         * the values that pass a truth test (predicate). 
         * @alias select
         */
        filter(iterator: (element: TModel, index: number) => boolean, context?: any): TModel[];

        /**
         * Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test.The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list. 
         * @alias detect
         */
        find(iterator: (element: TModel, index: number) => boolean, context?: any): TModel;

        /**
         * Returns the first element of an array. 
         * @alias head
         */
        first(): TModel;

        /**
         * Returns the first n elements of the array.
         * @alias head
         */
        first(n: number): TModel[];

        /**
         * Reduces a collection into a single value.
         * @alias reduce, inject
         * @param iterator a function invoked for each element and should return 
         * the successive step of the reduction. Note that if initialMemo is not
         * specified this function will not be invoked for the first element of the
         * list, instead this element is passed as the memo in the first invocation 
         * of this function on the next element in the list.
         * @param initialMemo the initial state of the reduction passed to the first
         * invocation of iterator. if not specified the first element is passed as the
         * memo to the first invocation of iterator.
         * @param context the context of the iterator function.
         */
        foldl(iterator: (memo: any, element: TModel, index: number) => any, initialMemo?: any, context?: any): any;

         /**
         * Iterates over the models in the collection, yielding each in turn to an 
         * iterator function. The iterator is bound to the context object, if one 
         * is passed. 
         * @alias each
         */
        forEach(iterator: (element: TModel, index: number, list?: any) => void, context?: any): any;

        /**
         * Splits a collection into sets, grouped by the result of running each value 
         * through iterator. 
         */
        groupBy(iterator: (element: TModel, index: number) => string, context?: any): _.Dictionary<TModel[]>;

        /**
         * Splits a collection into sets, grouped by the attribute specified.
         */
        groupBy(attribute: string, context?: any): _.Dictionary<TModel[]>;

        /**
         * Returns true if the value is present in the list.
         * @alias contains 
         */
        include(value: any): boolean;

        /**
         * Returns the index at which element can be found in the collection, 
         * or -1 if element is not present in the collection. 
         * If you're working with a large collection, and you know that the collection
         * is already sorted, pass true for isSorted to use a faster binary 
         * search.
         */
        indexOf(element: TModel, isSorted?: boolean): number;
        
        /**
         * Returns the index at which element can be found in the collection starting 
         * at the specified index, or -1 if element is not found. 
         * @param startIndex The index of the collection at which to start the search.
         */
        indexOf(element: TModel, startIndex: number): number;

        /**
         * Returns everything but the last n entries of the array. 
         * @param n if specified determines the number of elements to exclude,
         * otherwise only the last element is excluded.
         */
        initial(n?: number): TModel[];

        /**
         * Reduces a collection into a single value.
         * @alias foldl, reduce
         * @param iterator a function invoked for each element and should return 
         * the successive step of the reduction. Note that if initialMemo is not
         * specified this function will not be invoked for the first element of the
         * list, instead this element is passed as the memo in the first invocation 
         * of this function on the next element in the list.
         * @param initialMemo the initial state of the reduction passed to the first
         * invocation of iterator. if not specified the first element is passed as the
         * memo to the first invocation of iterator.
         * @param context the context of the iterator function.
         */
        inject(iterator: (memo: any, element: TModel, index: number) => any, initialMemo: any, context?: any): any;

        /**
         * Returns true the collection contains no values.
         */
        isEmpty(object: any): boolean;

        /**
         * Calls the method named by methodName on each value in the collection. Any extra 
         * arguments passed to invoke will be forwarded on to the method invocation. 
         */
        invoke(methodName: string, arguments?: any[]): any;

        /**
         * Returns the last element of a collection. 
         */
        last(): TModel;

        /**
         * Returns the last n elements of the collection.
         */
        last(n: number): TModel[];

        /**
         * Returns the index of the last occurrence of element in the collection, or -1 if 
         * element is not present. 
         * @param fromIndex if specified starts the search at the given index.
         */
        lastIndexOf(element: TModel, fromIndex?: number): number;

        /**
         * Produces a new array of values by mapping each value in the collection through a 
         * transformation function (iterator).
         * @alias collect
         */
        map(iterator: (element: TModel, index: number, context?: any) => any, context?: any): any[];

        /**
         * Returns the maximum value of the collection. If an iterator function is 
         * provided, it will be used on each value to generate the criterion by 
         * which the value is ranked. -Infinity is returned if list is empty, 
         * so an isEmpty guard may be required. 
         */
        max(iterator?: (element: TModel, index: number) => any, context?: any): TModel;

        /**
         * Returns the minimum value of the collection. If an iterator function is 
         * provided, it will be used on each value to generate the criterion by 
         * which the value is ranked. -Infinity is returned if list is empty, 
         * so an isEmpty guard may be required. 
         */
        min(iterator?: (element: TModel, index: number) => any, context?: any): TModel;

        /**
         * Reduces a collection into a single value.
         * @alias foldl, inject
         * @param iterator a function invoked for each element and should return 
         * the successive step of the reduction. Note that if initialMemo is not
         * specified this function will not be invoked for the first element of the
         * list, instead this element is passed as the memo in the first invocation 
         * of this function on the next element in the list.
         * @param initialMemo the initial state of the reduction passed to the first
         * invocation of iterator. if not specified the first element is passed as the
         * memo to the first invocation of iterator.
         * @param context the context of the iterator function.
         */
        reduce(iterator: (memo: any, element: TModel, index: number) => any, initialMemo: any, context?: any): any;

        /**
         * Looks through each value in the collection, returning an array of all 
         * the values that pass a truth test (predicate). 
         * @alias filter
         */
        select(iterator: any, context?: any): any[];

        /**
         * Returns the number of models in the collection.
         */
        size(): number;

        /**
         * Returns a shuffled array containing the items of the collection, using a version of the Fisher-Yates shuffle. 
         */
        shuffle(): any[];

        /**
         * Returns true if any of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a true element is found. 
         * @alias any
         */
        some(iterator: (element: TModel, index: number) => boolean, context?: any): boolean;

        /**
         * Returns a (stably) sorted array containing the items of the collection, ranked in ascending 
         * order by the results of running each value through iterator. 
         */
        sortBy(iterator: (element: TModel, index: number) => number, context?: any): TModel[];

        /**
         * Returns a (stably) sorted array containing the items of the collection, ranked in ascending 
         * order by attribute specified.
         */
        sortBy(attribute: string, context?: any): TModel[];

        /**
         * The right-associative version of reduce. 
         */
        reduceRight(iterator: (memo: any, element: TModel, index: number) => any, initialMemo: any, context?: any): any[];

        /**
         * Returns the values in the collection without the elements that the truth test 
         * (predicate) passes. The opposite of filter. 
         */
        reject(iterator: (element: TModel, index: number) => boolean, context?: any): TModel[];

        /**
         * Returns the rest of the elements of the collection. 
         * Pass an index to return the values of the array from that index onward. If not
         * specified the first item in the collection is dropped.
         * @alias tail, drop
         */
        rest(n?: number): TModel[];

        /**
         * Returns the rest of the elements of the collection. 
         * Pass an index to return the values of the array from that index onward. If not
         * specified the first item in the collection is dropped.
         * @alias rest, drop
         */
        tail(n?: number): TModel[];

        /**
         * Creates an array from the collection.
         */
        toArray(): any[];

        /**
         * Returns an array of all the models in the collection except the ones specified. 
         */
        without(...values: any[]): TModel[];
    }

    /**
     * Backbone.Router provides methods for routing client-side pages, and connecting them 
     * to actions and events. For browsers which don't yet support the History API, the Router 
     * handles graceful fallback and transparent translation to the fragment version of the URL. 
     */
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
        /** 
         * The model to attach to the view.
         */
        model?: TModel;

        /**
         * The collection to attach to the view.
         */
        collection?: Backbone.Collection<TModel>;
        
        /**
         *  If you'd like to create a view that references an element already in the DOM, pass in the 
         * element as this option.
         */
        el?: any;

        /** 
         * The id to attach to the view.
         */
        id?: string;

        /**
         * The className of the view's root element.
         */
        className?: string;

        /**
         * The tagName of the view's root element. If not specified, div will be used.
         */
        tagName?: string;

        /**
         * A hash of attributes that will be set as HTML DOM element attributes on 
         * the view's el (id, class, data-properties, etc.), or a function that 
         * returns such a hash. 
         */
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

        /**
         * The model attached to this view.
         */
        model: TModel;

        /**
         * The collection attached to this view (if any).
         */
        collection: Collection<TModel>;

        //template: (json, options?) => string;

        /**
         * If you'd like to apply a Backbone view to a different DOM element, use this function, 
         * which will also create the cached $el reference and move the view's 
         * delegated events from the old element to the new one. 
         * @param element the element to apply the Backbone view to.
         * @param delegate if specified and set to false will not move the view's delegated events from the old element to the new one. The default is true.
         */
        setElement(element: HTMLElement, delegate?: boolean): View<TModel>;

        /**
         * If you'd like to apply a Backbone view to a different DOM element, use this function, 
         * which will also create the cached $el reference and move the view's 
         * delegated events from the old element to the new one. 
         * @param element the element to apply the Backbone view to.
         * @param delegate if specified and set to false will not move the view's delegated events from the old element to the new one. The default is true.
         */
        setElement(element: JQuery, delegate?: boolean): View<TModel>;

        // TODO: Do we really need this overload? Shouldn't the two above be enough?
        /**
         * If you'd like to apply a Backbone view to a different DOM element, use this function, 
         * which will also create the cached $el reference and move the view's 
         * delegated events from the old element to the new one. 
         * @param element the element to apply the Backbone view to.
         * @param delegate if specified and set to false will not move the view's delegated events from the old element to the new one. The default is true.
         */
        setElement(element: any, delegate?: boolean): View<TModel>;


        /** The id attached to this view. */
        id: string;

        /** The cid attached to this view. */
        cid: string;

        /**
         * Specifies the className of the view's root element.
         */
        className: string;

        /** 
         * Specifies the tagName of the view's root element.
         */
        tagName: string;

        /**
         * Contains the DOM element associated with the view. This is created from 
         * the view's tagName, className, id and attributes properties, if 
         * specified. If not, el is an empty div. 
         */
        el: any;

        /**
         * A cached jQuery object for the view's element. A handy reference instead of re-wrapping the DOM element all the time. 
         */
        $el: JQuery;

        /**
         * A hash of attributes that will be set as HTML DOM element attributes on 
         * the view's el (id, class, data-properties, etc.), or a function that 
         * returns such a hash. 
         */
        attributes: any;

        /**
         * If jQuery is included on the page, this function runs queries 
         * scoped within the view's element. If you use this scoped jQuery 
         * function, you don't have to use model ids as part of your query to 
         * pull out specific elements in a list, and can rely much more on HTML 
         * class attributes. It's equivalent to running: view.$el.find(selector)
         */
        $(selector: any): JQuery;

        /**
         * The default implementation of render is a no-op. Override this function 
         * with your code that renders the view template from model data, and 
         * updates this.el with the new HTML. A good convention is to return this 
         * at the end of render to enable chained calls. 
         */
        render(): View<TModel>;

        /**
         * Removes a view from the DOM, and calls stopListening to remove any 
         * bound events that the view has listenTo'd. 
         */
        remove(): View<TModel>;

        /**
         * Uses jQuery's on function to provide declarative callbacks for DOM events 
         * within a view.
         * By default, delegateEvents is called within the View's constructor for 
         * you, so if you have a simple events hash, all of your DOM events will 
         * always already be connected, and you will never have to call this 
         * function yourself. 
         * 
         * @param events If not specified this.events will be used as the source. 
         * Events are written in the format {"event selector": "callback"}. The callback may be 
         * either the name of a method on the view, or a direct function body. 
         * Omitting the selector causes the event to be bound to the view's root 
         * element (this.el). 
         */
        delegateEvents(events?: any): any;

        /**
         * Removes all of the view's delegated events. Useful if you want to 
         * disable or remove a view from the DOM temporarily. 
         */
        undelegateEvents(): any;

        _ensureElement(): void;
    }

    // SYNC

    /**
     * Backbone.sync is the function that Backbone calls every time it attempts to 
     * read or save a model to the server. By default, it uses jQuery.ajax to make 
     * a RESTful JSON request and returns a jqXHR. You can override it in order to 
     * use a different persistence strategy, such as WebSockets, XML transport, or 
     * Local Storage. 
     * @param method the CRUD method ("create", "read", "update", or "delete")
     * @param model the model to be saved (or collection to be read)
     * @param options  success and error callbacks, and all other jQuery request options
     */
    function sync(method: string, model: Model, options?: JQueryAjaxSettings): any;

    /**
     * If you want to use a custom AJAX function, or your endpoint doesn't support 
     * the jQuery.ajax API and you need to tweak things, you can do so by setting 
     * Backbone.ajax. 
     */
    function ajax(options?: JQueryAjaxSettings): JQueryXHR;

    /**
     * If you want to work with a legacy web server that doesn't support Backbone's 
     * default REST/HTTP approach, you may choose to turn on Backbone.emulateHTTP. 
     * Setting this option will fake PUT, PATCH and DELETE requests with a HTTP POST, 
     * setting the X-HTTP-Method-Override header with the true method. If emulateJSON 
     * is also on, the true method will be passed as an additional _method parameter. 
     */
    var emulateHTTP: boolean;

    /**
     * If you're working with a legacy web server that can't handle requests encoded 
     * as application/json, setting Backbone.emulateJSON = true; will cause the JSON 
     * to be serialized under a model parameter, and the request to be made with a 
     * application/x-www-form-urlencoded MIME type, as if from an HTML form. 
     */
    var emulateJSON: boolean;

    // Utility
    /**
     * Returns the Backbone object back to its original value. You can use the 
     * return value of Backbone.noConflict() to keep a local reference to Backbone. 
     * Useful for embedding Backbone on third-party websites, where you don't want 
     * to clobber the existing Backbone. 
     */
    function noConflict(): typeof Backbone;

    /**
     * If you have multiple copies of jQuery on the page, or simply want to tell 
     * Backbone to use a particular object as its DOM / Ajax library, this is the 
     * property for you. If you're loading Backbone with CommonJS (e.g. node, 
     * component, or browserify) you must set this property manually.
     */
    var $: JQueryStatic;
}

declare module "backbone" {
    export = Backbone;
}
