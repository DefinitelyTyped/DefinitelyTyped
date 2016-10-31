// Type definitions for Parse v1.2.19
// Project: https://parse.com/
// Definitions by: Ullisen Media Group <http://ullisenmedia.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../underscore/underscore.d.ts" />

declare namespace Parse {

    var applicationId: string;
    var javaScriptKey: string;
    var masterKey: string;
    var serverURL: string;
    var VERSION: string;

    interface SuccessOption {
        success?: Function;
    }

    interface ErrorOption {
        error?: Function;
    }

    interface SuccessFailureOptions extends SuccessOption, ErrorOption {
    }
    
    interface SessionTokenOption {
        sessionToken?: string;
    }

    interface WaitOption {
        /**
         * Set to true to wait for the server to confirm success
         * before triggering an event.
         */
        wait?: boolean;
    }

    interface UseMasterKeyOption {
        /**
         * In Cloud Code and Node only, causes the Master Key to be used for this request.
         */
        useMasterKey?: boolean;
    }

    interface ScopeOptions extends SessionTokenOption, UseMasterKeyOption {
    }

    interface SilentOption {
        /**
         * Set to true to avoid firing the event.
         */
        silent?: boolean;
    }

    /**
     * A Promise is returned by async methods as a hook to provide callbacks to be
     * called when the async task is fulfilled.
     *
     * <p>Typical usage would be like:<pre>
     *    query.find().then(function(results) {
     *      results[0].set("foo", "bar");
     *      return results[0].saveAsync();
     *    }).then(function(result) {
     *      console.log("Updated " + result.id);
     *    });
     * </pre></p>
     *
     * @see Parse.Promise.prototype.then
     * @class
     */

    interface IPromise<T> {

        then<U>(resolvedCallback: (...values: T[]) => IPromise<U>, rejectedCallback?: (reason: any) => IPromise<U>): IPromise<U>;
        then<U>(resolvedCallback: (...values: T[]) => U, rejectedCallback?: (reason: any) => IPromise<U>): IPromise<U>;
        then<U>(resolvedCallback: (...values: T[]) => U, rejectedCallback?: (reason: any) => U): IPromise<U>;
    }

    class Promise<T> implements IPromise<T> {

        static as<U>(resolvedValue: U): Promise<U>;
        static error<U, V>(error: U): Promise<V>;
        static is(possiblePromise: any): Boolean;
        static when(promises: IPromise<any>[]): Promise<any>;
        static when(...promises: IPromise<any>[]): Promise<any>;

        always(callback: Function): Promise<T>;
        done(callback: Function): Promise<T>;
        fail(callback: Function): Promise<T>;
        reject(error: any): void;
        resolve(result: any): void;
        then<U>(resolvedCallback: (...values: T[]) => IPromise<U>,
                rejectedCallback?: (reason: any) => IPromise<U>): IPromise<U>;
        then<U>(resolvedCallback: (...values: T[]) => U,
            rejectedCallback?: (reason: any) => IPromise<U>): IPromise<U>;
        then<U>(resolvedCallback: (...values: T[]) => U,
            rejectedCallback?: (reason: any) => U): IPromise<U>;
    }

    interface IBaseObject {
        toJSON(): any;
    }

    class BaseObject implements IBaseObject {
        toJSON(): any;
    }

    /**
     * Creates a new ACL.
     * If no argument is given, the ACL has no permissions for anyone.
     * If the argument is a Parse.User, the ACL will have read and write
     *   permission for only that user.
     * If the argument is any other JSON object, that object will be interpretted
     *   as a serialized ACL created with toJSON().
     * @see Parse.Object#setACL
     * @class
     *
     * <p>An ACL, or Access Control List can be added to any
     * <code>Parse.Object</code> to restrict access to only a subset of users
     * of your application.</p>
     */
    class ACL extends BaseObject {

        permissionsById: any;

        constructor(arg1?: any);

        setPublicReadAccess(allowed: boolean): void;
        getPublicReadAccess(): boolean;

        setPublicWriteAccess(allowed: boolean): void;
        getPublicWriteAccess(): boolean;

        setReadAccess(userId: User, allowed: boolean): void;
        getReadAccess(userId: User): boolean;

        setReadAccess(userId: string, allowed: boolean): void;
        getReadAccess(userId: string): boolean;

        setRoleReadAccess(role: Role, allowed: boolean): void;
        setRoleReadAccess(role: string, allowed: boolean): void;
        getRoleReadAccess(role: Role): boolean;
        getRoleReadAccess(role: string): boolean;

        setRoleWriteAccess(role: Role, allowed: boolean): void;
        setRoleWriteAccess(role: string, allowed: boolean): void;
        getRoleWriteAccess(role: Role): boolean;
        getRoleWriteAccess(role: string): boolean;

        setWriteAccess(userId: User, allowed: boolean): void;
        setWriteAccess(userId: string, allowed: boolean): void;
        getWriteAccess(userId: User): boolean;
        getWriteAccess(userId: string): boolean;
    }


    /**
     * A Parse.File is a local representation of a file that is saved to the Parse
     * cloud.
     * @class
     * @param name {String} The file's name. This will be prefixed by a unique
     *     value once the file has finished saving. The file name must begin with
     *     an alphanumeric character, and consist of alphanumeric characters,
     *     periods, spaces, underscores, or dashes.
     * @param data {Array} The data for the file, as either:
     *     1. an Array of byte value Numbers, or
     *     2. an Object like { base64: "..." } with a base64-encoded String.
     *     3. a File object selected with a file upload control. (3) only works
     *        in Firefox 3.6+, Safari 6.0.2+, Chrome 7+, and IE 10+.
     *        For example:<pre>
     * var fileUploadControl = $("#profilePhotoFileUpload")[0];
     * if (fileUploadControl.files.length > 0) {
     *   var file = fileUploadControl.files[0];
     *   var name = "photo.jpg";
     *   var parseFile = new Parse.File(name, file);
     *   parseFile.save().then(function() {
     *     // The file has been saved to Parse.
     *   }, function(error) {
     *     // The file either could not be read, or could not be saved to Parse.
     *   });
     * }</pre>
     * @param type {String} Optional Content-Type header to use for the file. If
     *     this is omitted, the content type will be inferred from the name's
     *     extension.
     */
     class File {

        constructor(name: string, data: any, type?: string);
        name(): string;
        url(): string;
        save<T>(options?: SuccessFailureOptions): Promise<T>;

    }

    /**
     * Creates a new GeoPoint with any of the following forms:<br>
     *   <pre>
     *   new GeoPoint(otherGeoPoint)
     *   new GeoPoint(30, 30)
     *   new GeoPoint([30, 30])
     *   new GeoPoint({latitude: 30, longitude: 30})
     *   new GeoPoint()  // defaults to (0, 0)
     *   </pre>
     * @class
     *
     * <p>Represents a latitude / longitude point that may be associated
     * with a key in a ParseObject or used as a reference point for geo queries.
     * This allows proximity-based queries on the key.</p>
     *
     * <p>Only one key in a class may contain a GeoPoint.</p>
     *
     * <p>Example:<pre>
     *   var point = new Parse.GeoPoint(30.0, -20.0);
     *   var object = new Parse.Object("PlaceObject");
     *   object.set("location", point);
     *   object.save();</pre></p>
     */
    class GeoPoint extends BaseObject {

        latitude: number;
        longitude: number;

        constructor(arg1?: any, arg2?: any);

        current(options?: SuccessFailureOptions): GeoPoint;
        radiansTo(point: GeoPoint): number;
        kilometersTo(point: GeoPoint): number;
        milesTo(point: GeoPoint): number;
    }

    /**
     * History serves as a global router (per frame) to handle hashchange
     * events or pushState, match the appropriate route, and trigger
     * callbacks. You shouldn't ever have to create one of these yourself
     * — you should use the reference to <code>Parse.history</code>
     * that will be created for you automatically if you make use of
     * Routers with routes.
     * @class
     *
     * <p>A fork of Backbone.History, provided for your convenience.  If you
     * use this class, you must also include jQuery, or another library
     * that provides a jQuery-compatible $ function.  For more information,
     * see the <a href="http://documentcloud.github.com/backbone/#History">
     * Backbone documentation</a>.</p>
     * <p><strong><em>Available in the client SDK only.</em></strong></p>
     */
    class History {

        handlers: any[];
        interval: number;
        fragment: string;

        checkUrl(e?: any): void;
        getFragment(fragment?: string, forcePushState?: boolean): string;
        getHash(windowOverride: Window): string;
        loadUrl(fragmentOverride: any): boolean;
        navigate(fragment: string, options?: any): any;
        route(route: any, callback: Function): void;
        start(options: any): boolean;
        stop(): void;
    }

    /**
     * A class that is used to access all of the children of a many-to-many relationship.
     * Each instance of Parse.Relation is associated with a particular parent object and key.
     */
    class Relation extends BaseObject {

        parent: Object;
        key: string;
        targetClassName: string;

        constructor(parent?: Object, key?: string);

        //Adds a Parse.Object or an array of Parse.Objects to the relation.
        add(object: Object): void;

        // Returns a Parse.Query that is limited to objects in this relation.
        query(): Query;

        // Removes a Parse.Object or an array of Parse.Objects from this relation.
        remove(object: Object): void;
    }

    /**
     * Creates a new model with defined attributes. A client id (cid) is
     * automatically generated and assigned for you.
     *
     * <p>You won't normally call this method directly.  It is recommended that
     * you use a subclass of <code>Parse.Object</code> instead, created by calling
     * <code>extend</code>.</p>
     *
     * <p>However, if you don't want to use a subclass, or aren't sure which
     * subclass is appropriate, you can use this form:<pre>
     *     var object = new Parse.Object("ClassName");
     * </pre>
     * That is basically equivalent to:<pre>
     *     var MyClass = Parse.Object.extend("ClassName");
     *     var object = new MyClass();
     * </pre></p>
     *
     * @param {Object} attributes The initial set of data to store in the object.
     * @param {Object} options A set of Backbone-like options for creating the
     *     object.  The only option currently supported is "collection".
     * @see Parse.Object.extend
     *
     * @class
     *
     * <p>The fundamental unit of Parse data, which implements the Backbone Model
     * interface.</p>
     */
    class Object extends BaseObject {

        id: string;
        createdAt: Date;
        updatedAt: Date;
        attributes: any;
        cid: string;
        changed: boolean;
        className: string;

        constructor(className?: string, options?: any);
        constructor(attributes?: string[], options?: any);

        static extend(className: string, protoProps?: any, classProps?: any): any;
        static fetchAll<T>(list: Object[], options: SuccessFailureOptions): Promise<T>;
        static fetchAllIfNeeded<T>(list: Object[], options: SuccessFailureOptions): Promise<T>;
        static destroyAll<T>(list: Object[], options?: Object.DestroyAllOptions): Promise<T>;
        static saveAll<T extends Object>(list: T[], options?: Object.SaveAllOptions): Promise<T[]>;

        static registerSubclass<T extends Object>(className: string, clazz: new (options?: any) => T): void;

        initialize(): void;
        add(attr: string, item: any): Object;
        addUnique(attr: string, item: any): any;
        change(options: any): Object;
        changedAttributes(diff: any): boolean;
        clear(options: any): any;
        clone(): Object;
        destroy<T>(options?: Object.DestroyOptions): Promise<T>;
        dirty(attr: String): boolean;
        dirtyKeys(): string[];
        escape(attr: string): string;
        existed(): boolean;
        fetch<T extends Object>(options?: Object.FetchOptions): Promise<T>;
        get(attr: string): any;
        getACL(): ACL;
        has(attr: string): boolean;
        hasChanged(attr: string): boolean;
        increment(attr: string, amount?: number): any;
        isValid(): boolean;
        op(attr: string): any;
        previous(attr: string): any;
        previousAttributes(): any;
        relation(attr: string): Relation;
        remove(attr: string, item: any): any;
        save<T extends Object>(attrs?: { [key: string]: any }, options?: Object.SaveOptions): Promise<T>;
        save<T extends Object>(key: string, value: any, options?: Object.SaveOptions): Promise<T>;
        set(key: string, value: any, options?: Object.SetOptions): boolean;
        setACL(acl: ACL, options?: SuccessFailureOptions): boolean;
        unset(attr: string, options?: any): any;
        validate(attrs: any, options?: SuccessFailureOptions): boolean;
    }

    namespace Object {
        interface DestroyOptions extends SuccessFailureOptions, WaitOption, ScopeOptions { }

        interface DestroyAllOptions extends SuccessFailureOptions, ScopeOptions { }

        interface FetchOptions extends SuccessFailureOptions, ScopeOptions { }

        interface SaveOptions extends SuccessFailureOptions, SilentOption, ScopeOptions, WaitOption { }

        interface SaveAllOptions extends SuccessFailureOptions, ScopeOptions { }

        interface SetOptions extends ErrorOption, SilentOption {
            promise?: any;
        }
    }

    /**
     * Every Parse application installed on a device registered for
     * push notifications has an associated Installation object.
     */
    class Installation extends Object {

        badge: any;
        channels: string[];
        timeZone: any;
        deviceType: string;
        pushType: string;
        installationId: string;
        deviceToken: string;
        channelUris: string;
        appName: string;
        appVersion: string;
        parseVersion: string;
        appIdentifier: string;

    }

    /**
     * Creates a new instance with the given models and options.  Typically, you
     * will not call this method directly, but will instead make a subclass using
     * <code>Parse.Collection.extend</code>.
     *
     * @param {Array} models An array of instances of <code>Parse.Object</code>.
     *
     * @param {Object} options An optional object with Backbone-style options.
     * Valid options are:<ul>
     *   <li>model: The Parse.Object subclass that this collection contains.
     *   <li>query: An instance of Parse.Query to use when fetching items.
     *   <li>comparator: A string property name or function to sort by.
     * </ul>
     *
     * @see Parse.Collection.extend
     *
     * @class
     *
     * <p>Provides a standard collection class for our sets of models, ordered
     * or unordered.  For more information, see the
     * <a href="http://documentcloud.github.com/backbone/#Collection">Backbone
     * documentation</a>.</p>
     */
    class Collection<T> extends Events implements IBaseObject {

        model: Object;
        models: Object[];
        query: Query;
        comparator: (object: Object) => any;

        constructor(models?: Object[], options?: Collection.Options);
        static extend(instanceProps: any, classProps: any): any;

        initialize(): void;
        add(models: any[], options?: Collection.AddOptions): Collection<T>;
        at(index: number): Object;
        chain(): _Chain<Collection<T>>;
        fetch(options?: Collection.FetchOptions): Promise<T>;
        create(model: Object, options?: Collection.CreateOptions): Object;
        get(id: string): Object;
        getByCid(cid: any): any;
        pluck(attr: string): any[];
        remove(model: any, options?: Collection.RemoveOptions): Collection<T>;
        remove(models: any[], options?: Collection.RemoveOptions): Collection<T>;
        reset(models: any[], options?: Collection.ResetOptions): Collection<T>;
        sort(options?: Collection.SortOptions): Collection<T>;
        toJSON(): any;
    }

    namespace Collection {
        interface Options {
            model?: Object;
            query?: Query;
            comparator?: string;
        }

        interface AddOptions extends SilentOption {
            /**
             * The index at which to add the models.
             */
            at?: number;
        }

        interface CreateOptions extends SuccessFailureOptions, WaitOption, SilentOption, ScopeOptions {
        }

        interface FetchOptions extends SuccessFailureOptions, SilentOption, ScopeOptions { }

        interface RemoveOptions extends SilentOption { }

        interface ResetOptions extends SilentOption { }

        interface SortOptions extends SilentOption { }
    }

    /**
     * @class
     *
     * <p>Parse.Events is a fork of Backbone's Events module, provided for your
     * convenience.</p>
     *
     * <p>A module that can be mixed in to any object in order to provide
     * it with custom events. You may bind callback functions to an event
     * with `on`, or remove these functions with `off`.
     * Triggering an event fires all callbacks in the order that `on` was
     * called.
     *
     * <pre>
     *     var object = {};
     *     _.extend(object, Parse.Events);
     *     object.on('expand', function(){ alert('expanded'); });
     *     object.trigger('expand');</pre></p>
     *
     * <p>For more information, see the
     * <a href="http://documentcloud.github.com/backbone/#Events">Backbone
     * documentation</a>.</p>
     */
    class Events {

        static off(events: string[], callback?: Function, context?: any): Events;
        static on(events: string[], callback?: Function, context?: any): Events;
        static trigger(events: string[]): Events;
        static bind(): Events;
        static unbind(): Events;

        on(eventName: string, callback?: Function, context?: any): Events;
        off(eventName?: string, callback?: Function, context?: any): Events;
        trigger(eventName: string, ...args: any[]): Events;
        bind(eventName: string, callback: Function, context?: any): Events;
        unbind(eventName?: string, callback?: Function, context?: any): Events;

    }

    /**
     * Creates a new parse Parse.Query for the given Parse.Object subclass.
     * @param objectClass -
     *   An instance of a subclass of Parse.Object, or a Parse className string.
     * @class
     *
     * <p>Parse.Query defines a query that is used to fetch Parse.Objects. The
     * most common use case is finding all objects that match a query through the
     * <code>find</code> method. For example, this sample code fetches all objects
     * of class <code>MyClass</code>. It calls a different function depending on
     * whether the fetch succeeded or not.
     *
     * <pre>
     * var query = new Parse.Query(MyClass);
     * query.find({
     *   success: function(results) {
     *     // results is an array of Parse.Object.
     *   },
     *
     *   error: function(error) {
     *     // error is an instance of Parse.Error.
     *   }
     * });</pre></p>
     *
     * <p>A Parse.Query can also be used to retrieve a single object whose id is
     * known, through the get method. For example, this sample code fetches an
     * object of class <code>MyClass</code> and id <code>myId</code>. It calls a
     * different function depending on whether the fetch succeeded or not.
     *
     * <pre>
     * var query = new Parse.Query(MyClass);
     * query.get(myId, {
     *   success: function(object) {
     *     // object is an instance of Parse.Object.
     *   },
     *
     *   error: function(object, error) {
     *     // error is an instance of Parse.Error.
     *   }
     * });</pre></p>
     *
     * <p>A Parse.Query can also be used to count the number of objects that match
     * the query without retrieving all of those objects. For example, this
     * sample code counts the number of objects of the class <code>MyClass</code>
     * <pre>
     * var query = new Parse.Query(MyClass);
     * query.count({
     *   success: function(number) {
     *     // There are number instances of MyClass.
     *   },
     *
     *   error: function(error) {
     *     // error is an instance of Parse.Error.
     *   }
     * });</pre></p>
     */
    class Query extends BaseObject {

        objectClass: any;
        className: string;

        constructor(objectClass: any);

        static or(...var_args: Query[]): Query;

        addAscending(key: string): Query;
        addAscending(key: string[]): Query;
        addDescending(key: string): Query;
        addDescending(key: string[]): Query;
        ascending(key: string): Query;
        ascending(key: string[]): Query;
        collection(items?: Object[], options?: Collection.Options): Collection<Object>;
        containedIn(key: string, values: any[]): Query;
        contains(key: string, substring: string): Query;
        containsAll(key: string, values: any[]): Query;
        count<T>(options?: Query.CountOptions): Promise<T>;
        descending(key: string): Query;
        descending(key: string[]): Query;
        doesNotExist(key: string): Query;
        doesNotMatchKeyInQuery(key: string, queryKey: string, query: Query): Query;
        doesNotMatchQuery(key: string, query: Query): Query;
        each<T>(callback: Function, options?: Query.EachOptions): Promise<T>;
        endsWith(key: string, suffix: string): Query;
        equalTo(key: string, value: any): Query;
        exists(key: string): Query;
        find<T extends Object>(options?: Query.FindOptions): Promise<T[]>;
        first<T>(options?: Query.FirstOptions): Promise<T>;
        get(objectId: string, options?: Query.GetOptions): Promise<any>;
        greaterThan(key: string, value: any): Query;
        greaterThanOrEqualTo(key: string, value: any): Query;
        include(key: string): Query;
        include(keys: string[]): Query;
        lessThan(key: string, value: any): Query;
        lessThanOrEqualTo(key: string, value: any): Query;
        limit(n: number): Query;
        matches(key: string, regex: RegExp, modifiers: any): Query;
        matchesKeyInQuery(key: string, queryKey: string, query: Query): Query;
        matchesQuery(key: string, query: Query): Query;
        near(key: string, point: GeoPoint): Query;
        notContainedIn(key: string, values: any[]): Query;
        notEqualTo(key: string, value: any): Query;
        select(...keys: string[]): Query;
        skip(n: number): Query;
        startsWith(key: string, prefix: string): Query;
        withinGeoBox(key: string, southwest: GeoPoint, northeast: GeoPoint): Query;
        withinKilometers(key: string, point: GeoPoint, maxDistance: number): Query;
        withinMiles(key: string, point: GeoPoint, maxDistance: number): Query;
        withinRadians(key: string, point: GeoPoint, maxDistance: number): Query;
    }

    namespace Query {
        interface EachOptions extends SuccessFailureOptions, ScopeOptions { }
        interface CountOptions extends SuccessFailureOptions, ScopeOptions { }
        interface FindOptions extends SuccessFailureOptions, ScopeOptions { }
        interface FirstOptions extends SuccessFailureOptions, ScopeOptions { }
        interface GetOptions extends SuccessFailureOptions, ScopeOptions { }
    }

    /**
     * Represents a Role on the Parse server. Roles represent groupings of
     * Users for the purposes of granting permissions (e.g. specifying an ACL
     * for an Object). Roles are specified by their sets of child users and
     * child roles, all of which are granted any permissions that the parent
     * role has.
     *
     * <p>Roles must have a name (which cannot be changed after creation of the
     * role), and must specify an ACL.</p>
     * @class
     * A Parse.Role is a local representation of a role persisted to the Parse
     * cloud.
     */
    class Role extends Object {

        constructor(name: string, acl: ACL);

        getRoles(): Relation;
        getUsers(): Relation;
        getName(): string;
        setName(name: string, options?: SuccessFailureOptions): any;
    }

    class Config extends Object {
        static get(options?: SuccessFailureOptions): Promise<Config>;
        static current(): Config;

        get(attr: string): any;
        escape(attr: string): any;
    }

    class Session extends Object {
        static current(): Promise<Session>;

        getSessionToken(): string;
        isCurrentSessionRevocable(): boolean;
    }

    /**
     * Routers map faux-URLs to actions, and fire events when routes are
     * matched. Creating a new one sets its `routes` hash, if not set statically.
     * @class
     *
     * <p>A fork of Backbone.Router, provided for your convenience.
     * For more information, see the
     * <a href="http://documentcloud.github.com/backbone/#Router">Backbone
     * documentation</a>.</p>
     * <p><strong><em>Available in the client SDK only.</em></strong></p>
     */
    class Router extends Events {

        routes: Router.RouteMap;

        constructor(options?: Router.Options);
        static extend(instanceProps: any, classProps: any): any;

        initialize(): void;
        navigate(fragment: string, options?: Router.NavigateOptions): Router;
        navigate(fragment: string, trigger?: boolean): Router;
        route(route: string, name: string, callback: Function): Router;
    }

    namespace Router {
        interface Options {
            routes: RouteMap;
        }

        interface RouteMap {
            [url: string]: string;
        }

        interface NavigateOptions {
            trigger?: boolean;
        }
    }

    /**
     * @class
     *
     * <p>A Parse.User object is a local representation of a user persisted to the
     * Parse cloud. This class is a subclass of a Parse.Object, and retains the
     * same functionality of a Parse.Object, but also extends it with various
     * user specific methods, like authentication, signing up, and validation of
     * uniqueness.</p>
     */
    class User extends Object {

        static current(): User;
        static signUp<T>(username: string, password: string, attrs: any, options?: SuccessFailureOptions): Promise<T>;
        static logIn<T>(username: string, password: string, options?: SuccessFailureOptions): Promise<T>;
        static logOut<T>(): Promise<T>;
        static allowCustomUserClass(isAllowed: boolean): void;
        static become<T>(sessionToken: string, options?: SuccessFailureOptions): Promise<T>;
        static requestPasswordReset<T>(email: string, options?: SuccessFailureOptions): Promise<T>;
        static extend(protoProps?: any, classProps?: any): any;

        signUp<T>(attrs: any, options?: SuccessFailureOptions): Promise<T>;
        logIn<T>(options?: SuccessFailureOptions): Promise<T>;
        authenticated(): boolean;
        isCurrent(): boolean;

        getEmail(): string;
        setEmail(email: string, options: SuccessFailureOptions): boolean;

        getUsername(): string;
        setUsername(username: string, options?: SuccessFailureOptions): boolean;

        setPassword(password: string, options?: SuccessFailureOptions): boolean;
        getSessionToken(): string;
    }

    /**
     * Creating a Parse.View creates its initial element outside of the DOM,
     * if an existing element is not provided...
     * @class
     *
     * <p>A fork of Backbone.View, provided for your convenience.  If you use this
     * class, you must also include jQuery, or another library that provides a
     * jQuery-compatible $ function.  For more information, see the
     * <a href="http://documentcloud.github.com/backbone/#View">Backbone
     * documentation</a>.</p>
     * <p><strong><em>Available in the client SDK only.</em></strong></p>
     */
    class View<T> extends Events {

        model: any;
        collection: any;
        id: string;
        cid: string;
        className: string;
        tagName: string;
        el: any;
        $el: JQuery;
        attributes: any;

        constructor(options?: View.Options);

        static extend(properties: any, classProperties?: any): any;

        $(selector?: string): JQuery;
        setElement(element: HTMLElement, delegate?: boolean): View<T>;
        setElement(element: JQuery, delegate?: boolean): View<T>;
        render(): View<T>;
        remove(): View<T>;
        make(tagName: any, attributes?: View.Attribute[], content?: any): any;
        delegateEvents(events?: any): any;
        undelegateEvents(): any;

    }

    namespace View {
        interface Options {
            model?: any;
            collection?: any;
            el?: any;
            id?: string;
            className?: string;
            tagName?: string;
            attributes?: Attribute[];
        }

        interface Attribute {
            [attributeName: string]: string | number | boolean;
        }
    }

    namespace Analytics {

        function track<T>(name: string, dimensions: any):Promise<T>;
    }

    /**
     * Provides a set of utilities for using Parse with Facebook.
     * @namespace
     * Provides a set of utilities for using Parse with Facebook.
     */
    namespace FacebookUtils {

        function init(options?: any): void;
        function isLinked(user: User): boolean;
        function link(user: User, permissions: any, options?: SuccessFailureOptions): void;
        function logIn(permissions: any, options?: SuccessFailureOptions): void;
        function unlink(user: User, options?: SuccessFailureOptions): void;
    }

    /**
     * @namespace Contains functions for calling and declaring
     * <a href="/docs/cloud_code_guide#functions">cloud functions</a>.
     * <p><strong><em>
     *   Some functions are only available from Cloud Code.
     * </em></strong></p>
     */
    namespace Cloud {

        interface CookieOptions {
            domain?: string;
            expires?: Date;
            httpOnly?: boolean;
            maxAge?: number;
            path?: string;
            secure?: boolean;
        }

        interface HttpResponse {
            buffer?: Buffer;
            cookies?: any;
            data?: any;
            headers?: any;
            status?: number;
            text?: string;
        }

        interface JobRequest {
            params: any;
        }

        interface JobStatus {
            error?: (response: any) => void;
            message?: (response: any) => void;
            success?: (response: any) => void;
        }

        interface FunctionRequest {
            installationId?: String;
            master?: boolean;
            params?: any;
            user?: User;
        }

        interface FunctionResponse {
            success?: (response: any) => void;
            error?: (response: any) => void;
        }

        interface Cookie {
            name?: string;
            options?: CookieOptions;
            value?: string;
        }

        interface SaveRequest extends FunctionRequest {
            object: Object;
        }

        interface AfterSaveRequest extends SaveRequest {}
        interface AfterDeleteRequest extends FunctionRequest {}
        interface BeforeDeleteRequest extends FunctionRequest {}
        interface BeforeDeleteResponse extends FunctionResponse {}
        interface BeforeSaveRequest extends SaveRequest {}
        interface BeforeSaveResponse extends FunctionResponse {
            success?: () => void;
        }

        function afterDelete(arg1: any, func?: (request: AfterDeleteRequest) => void): void;
        function afterSave(arg1: any, func?: (request: AfterSaveRequest) => void): void;
        function beforeDelete(arg1: any, func?: (request: BeforeDeleteRequest, response: BeforeDeleteResponse) => void): void;
        function beforeSave(arg1: any, func?: (request: BeforeSaveRequest, response: BeforeSaveResponse) => void): void;
        function define(name: string, func?: (request: FunctionRequest, response: FunctionResponse) => void): void;
        function httpRequest(options: HTTPOptions): Promise<HttpResponse>;
        function job(name: string, func?: (request: JobRequest, status: JobStatus) => void): HttpResponse;
        function run<T>(name: string, data?: any, options?: RunOptions): Promise<T>;
        function useMasterKey(): void;

        interface RunOptions extends SuccessFailureOptions, ScopeOptions { }

        /**
         * To use this Cloud Module in Cloud Code, you must require 'buffer' in your JavaScript file.
         *
         *     import Buffer = require("buffer").Buffer;
         */
        var HTTPOptions: new () => HTTPOptions;
        interface HTTPOptions extends FunctionResponse {
            /**
             * The body of the request.
             * If it is a JSON object, then the Content-Type set in the headers must be application/x-www-form-urlencoded or application/json.
             * You can also set this to a Buffer object to send raw bytes.
             * If you use a Buffer, you should also set the Content-Type header explicitly to describe what these bytes represent.
             */
            body?: string | Buffer | Object;
            /**
             * Defaults to 'false'.
             */
            followRedirects?: boolean;
            /**
             * The headers for the request.
             */
            headers?: {
                [headerName: string]: string | number | boolean;
            };
            /**
             *The method of the request (i.e GET, POST, etc).
             */
            method?: string;
            /**
             * The query portion of the url.
             */
            params?: any;
            /**
             * The url to send the request to.
             */
            url: string;
        }
    }


    class Error {

        code: ErrorCode;
        message: string;

        constructor(code: ErrorCode, message: string);

    }

    /*
     * We need to inline the codes in order to make compilation work without this type definition as dependency.
     */
    const enum ErrorCode {

        OTHER_CAUSE = -1,
        INTERNAL_SERVER_ERROR = 1,
        CONNECTION_FAILED =  100,
        OBJECT_NOT_FOUND =  101,
        INVALID_QUERY =  102,
        INVALID_CLASS_NAME =  103,
        MISSING_OBJECT_ID =  104,
        INVALID_KEY_NAME =  105,
        INVALID_POINTER =  106,
        INVALID_JSON =  107,
        COMMAND_UNAVAILABLE =  108,
        NOT_INITIALIZED =  109,
        INCORRECT_TYPE =  111,
        INVALID_CHANNEL_NAME =  112,
        PUSH_MISCONFIGURED =  115,
        OBJECT_TOO_LARGE =  116,
        OPERATION_FORBIDDEN =  119,
        CACHE_MISS =  120,
        INVALID_NESTED_KEY =  121,
        INVALID_FILE_NAME =  122,
        INVALID_ACL =  123,
        TIMEOUT =  124,
        INVALID_EMAIL_ADDRESS =  125,
        MISSING_CONTENT_TYPE =  126,
        MISSING_CONTENT_LENGTH =  127,
        INVALID_CONTENT_LENGTH =  128,
        FILE_TOO_LARGE =  129,
        FILE_SAVE_ERROR =  130,
        DUPLICATE_VALUE =  137,
        INVALID_ROLE_NAME =  139,
        EXCEEDED_QUOTA =  140,
        SCRIPT_FAILED =  141,
        VALIDATION_ERROR =  142,
        INVALID_IMAGE_DATA =  150,
        UNSAVED_FILE_ERROR =  151,
        INVALID_PUSH_TIME_ERROR = 152,
        FILE_DELETE_ERROR = 153,
        REQUEST_LIMIT_EXCEEDED = 155,
        INVALID_EVENT_NAME = 160,
        USERNAME_MISSING =  200,
        PASSWORD_MISSING =  201,
        USERNAME_TAKEN =  202,
        EMAIL_TAKEN =  203,
        EMAIL_MISSING =  204,
        EMAIL_NOT_FOUND =  205,
        SESSION_MISSING =  206,
        MUST_CREATE_USER_THROUGH_SIGNUP =  207,
        ACCOUNT_ALREADY_LINKED =  208,
        INVALID_SESSION_TOKEN = 209,
        LINKED_ID_MISSING =  250,
        INVALID_LINKED_SESSION =  251,
        UNSUPPORTED_SERVICE =  252,
        AGGREGATE_ERROR = 600,
        FILE_READ_ERROR = 601,
        X_DOMAIN_REQUEST = 602
    }

    /**
     * @class
     * A Parse.Op is an atomic operation that can be applied to a field in a
     * Parse.Object. For example, calling <code>object.set("foo", "bar")</code>
     * is an example of a Parse.Op.Set. Calling <code>object.unset("foo")</code>
     * is a Parse.Op.Unset. These operations are stored in a Parse.Object and
     * sent to the server as part of <code>object.save()</code> operations.
     * Instances of Parse.Op should be immutable.
     *
     * You should not create subclasses of Parse.Op or instantiate Parse.Op
     * directly.
     */
    namespace Op {

        interface BaseOperation extends IBaseObject {
            objects(): any[];
        }

        interface Add extends BaseOperation {
        }

        interface AddUnique extends BaseOperation {
        }

        interface Increment extends IBaseObject {
            amount: number;
        }

        interface Relation extends IBaseObject {
            added(): Object[];
            removed: Object[];
        }

        interface Set extends IBaseObject {
            value(): any;
        }

        interface Unset extends IBaseObject {
        }

    }

    /**
     * Contains functions to deal with Push in Parse
     * @name Parse.Push
     * @namespace
     */
    namespace Push {
        function send<T>(data: PushData, options?: SendOptions): Promise<T>;

        interface PushData {
            channels?: string[];
            push_time?: Date;
            expiration_time?: Date;
            expiration_interval?: number;
            where?: Query;
            data?: any;
            alert?: string;
            badge?: string;
            sound?: string;
            title?: string;
        }

        interface SendOptions extends UseMasterKeyOption {
            success?: () => void;
            error?: (error: Error) => void;
        }
    }

    /**
     * Call this method first to set up your authentication tokens for Parse.
     * You can get your keys from the Data Browser on parse.com.
     * @param {String} applicationId Your Parse Application ID.
     * @param {String} javaScriptKey (optional) Your Parse JavaScript Key (Not needed for parse-server)
     * @param {String} masterKey (optional) Your Parse Master Key. (Node.js only!)
     */
    function initialize(applicationId: string, javaScriptKey?: string, masterKey?: string): void;

}

declare module "parse/node" {
    export = Parse;
}

declare module "parse" {
    import * as parse from "parse/node";
    export = parse
}
