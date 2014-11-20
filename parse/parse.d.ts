// Type definitions for Parse v1.2.19
// Project: https://parse.com/
// Definitions by: Ullisen Media Group <http://ullisenmedia.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../underscore/underscore.d.ts" />

declare module Parse {

    var applicationId: string;
    var javaScriptKey: string;
    var masterKey: string;
    var serverURL: string;
    var VERSION: string;

    interface ParseDefaultOptions {
        wait?: boolean;
        silent?: boolean;
        success?: Function;
        error?: Function;
        useMasterKey?: boolean;
    }

    interface CollectionOptions {
        model?: Object;
        query?: Query;
        comparator?: string;
    }

    interface CollectionAddOptions {
        at?: number;
    }

    interface RouterOptions {
        routes: any;
    }

    interface NavigateOptions {
        trigger?: boolean;
    }

    interface ViewOptions {
        model?: any;
        collection?: any;
        el?: any;
        id?: string;
        className?: string;
        tagName?: string;
        attributes?: any[];
    }

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

        then<U>(resolvedCallback: (value: T) => IPromise<U>, rejectedCallback?: (reason: any) => IPromise<U>): IPromise<T>;
        then<U>(resolvedCallback: (value: T) => U, rejectedCallback?: (reason: any) => IPromise<U>): IPromise<U>;
        then<U>(resolvedCallback: (value: T) => U, rejectedCallback?: (reason: any) => U): IPromise<U>;
    }

    interface Promise<T> {

        always(callback: Function): Promise<T>;
        as(): Promise<T>;
        done(callback: Function): Promise<T>;
        error(): Promise<T>;
        fail(callback: Function): Promise<T>;
        is(): Promise<T>;
        reject(error: any): void;
        resolve(result: any): void;
        then<U>(resolvedCallback: (value: T) => Promise<U>,
                rejectedCallback?: (reason: any) => Promise<U>): IPromise<T>;
        then<U>(resolvedCallback: (value: T) => U,
            rejectedCallback?: (reason: any) => IPromise<U>): IPromise<T>;
        then<U>(resolvedCallback: (value: T) => U,
            rejectedCallback?: (reason: any) => U): IPromise<T>;

        when(promises: Promise<T>[]): Promise<T>;
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
        save<T>(options?: ParseDefaultOptions): Promise<T>;

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

        current(options?: ParseDefaultOptions): GeoPoint;
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

        id: any;
        attributes: any;
        cid: string;
        changed: boolean;
        className: string;

        constructor(className?: string, options?: any);
        constructor(attributes?: string[], options?: any);

        static extend(className: string, protoProps?: any, classProps?: any): any;
        static fetchAll<T>(list: Object[], options: ParseDefaultOptions): Promise<T>;
        static fetchAllIfNeeded<T>(list: Object[], options: ParseDefaultOptions): Promise<T>;
        static destroyAll<T>(list: Object[], options?: ParseDefaultOptions): Promise<T>;
        static saveAll<T>(list: Object[], options?: ParseDefaultOptions): Promise<T>;

        initialize(): void;
        add(attr: string, item: any): Object;
        addUnique(attr: string, item: any): any;
        change(options: any): Object;
        changedAttributes(diff: any): boolean;
        clear(options: any): any;
        clone(): Object;
        destroy<T>(options?: ParseDefaultOptions): Promise<T>;
        dirty(attr: String): boolean;
        dirtyKeys(): string[];
        escape(attr: string): string;
        existed(): boolean;
        fetch<T>(options?: ParseDefaultOptions): Promise<T>;
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
        save<T>(options?: ParseDefaultOptions, arg2?: any, arg3?: any): Promise<T>;
        set(key: string, value: any, options?: ParseDefaultOptions): boolean;
        setACL(acl: ACL, options?: ParseDefaultOptions): boolean;
        unset(attr: string, options?: any): any;
        validate(attrs: any, options?: ParseDefaultOptions): boolean;

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

        constructor(models?: Object[], options?: CollectionOptions);
        static extend(instanceProps: any, classProps: any): any;

        initialize(): void;
        add(models: any[], options?: CollectionAddOptions): Collection<T>;
        at(index: number): Object;
        chain(): _Chain<Collection<T>>;
        fetch(options?: ParseDefaultOptions): Promise<T>;
        create(model: Object, options?: ParseDefaultOptions): Object;
        get(id: string): Object;
        getByCid(cid: any): any;
        pluck(attr: string): any[];
        remove(model: any, options?: ParseDefaultOptions): Collection<T>;
        remove(models: any[], options?: ParseDefaultOptions): Collection<T>;
        reset(models: any[], options?: ParseDefaultOptions): Collection<T>;
        sort(options?: ParseDefaultOptions): Collection<T>;
        toJSON(): any;

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
        collection(items?: Object[], options?: ParseDefaultOptions): Collection<Object>;
        containedIn(key: string, values: any[]): Query;
        contains(key: string, substring: string): Query;
        containsAll(key: string, values: any[]): Query;
        count<T>(options?: ParseDefaultOptions): Promise<T>;
        descending(key: string): Query;
        descending(key: string[]): Query;
        doesNotExist(key: string): Query;
        doesNotMatchKeyInQuery(key: string, queryKey: string, query: Query): Query;
        doesNotMatchQuery(key: string, query: Query): Query;
        each<T>(callback: Function, options?: ParseDefaultOptions): Promise<T>;
        endsWith(key: string, suffix: string): Query;
        equalTo(key: string, value: any): Query;
        exists(key: string): Query;
        find<T>(options?: ParseDefaultOptions): Promise<T>;
        first<T>(options?: ParseDefaultOptions): Promise<T>;
        get(objectId: string, options?: ParseDefaultOptions): Promise<any>;
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
        setName(name: string, options?: ParseDefaultOptions): any;
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

        routes: any[];

        constructor(options?: RouterOptions);
        static extend(instanceProps: any, classProps: any): any;

        initialize(): void;
        navigate(fragment: string, options?: NavigateOptions): Router;
        navigate(fragment: string, trigger?: boolean): Router;
        route(route: string, name: string, callback: Function): Router;
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
        static signUp<T>(username: string, password: string, attrs: any, options?: ParseDefaultOptions): Promise<T>;
        static logIn<T>(username: string, password: string, options?: ParseDefaultOptions): Promise<T>;
        static logOut(): void;
        static allowCustomUserClass(isAllowed: boolean): void;
        static become<T>(sessionToken: string, options?: ParseDefaultOptions): Promise<T>;
        static requestPasswordReset<T>(email: string, options?: ParseDefaultOptions): Promise<T>;

        signUp<T>(attrs: any, options?: ParseDefaultOptions): Promise<T>;
        logIn<T>(options?: ParseDefaultOptions): Promise<T>;
        fetch<T>(options?: ParseDefaultOptions): Promise<T>;
        save<T>(arg1: any, arg2: any, arg3: any): Promise<T>;
        authenticated(): boolean;
        isCurrent(): boolean;

        getEmail(): string;
        setEmail(email: string, options: ParseDefaultOptions): boolean;

        getUsername(): string;
        setUsername(username: string, options?: ParseDefaultOptions): boolean;

        setPassword(password: string, options?: ParseDefaultOptions): boolean;
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

        constructor(options?: ViewOptions);

        static extend(properties: any, classProperties?: any): any;

        $(selector?: string): JQuery;
        setElement(element: HTMLElement, delegate?: boolean): View<T>;
        setElement(element: JQuery, delegate?: boolean): View<T>;
        render(): View<T>;
        remove(): View<T>;
        make(tagName: any, attributes?: any, content?: any): any;
        delegateEvents(events?: any): any;
        undelegateEvents(): any;

    }

    module Analytics {

        function track<T>(name: string, dimensions: any):Promise<T>;
    }

    /**
     * Provides a set of utilities for using Parse with Facebook.
     * @namespace
     * Provides a set of utilities for using Parse with Facebook.
     */
    module FacebookUtils {

        function init(options?: any): void;
        function isLinked(user: User): boolean;
        function link(user: User, permissions: any, options?: ParseDefaultOptions): void;
        function logIn(permissions: any, options?: ParseDefaultOptions): void;
        function unlink(user: User, options?: ParseDefaultOptions): void;
    }

    /**
     * @namespace Contains functions for calling and declaring
     * <a href="/docs/cloud_code_guide#functions">cloud functions</a>.
     * <p><strong><em>
     *   Some functions are only available from Cloud Code.
     * </em></strong></p>
     */
    module Cloud {

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
            error?: Function;
            message?: Function;
            success?: Function;
        }

        interface FunctionRequest {
            installationId?: String;
            master?: boolean;
            params?: any;
            user?: User;
        }

        interface FunctionResponse {
            success?: (response: HttpResponse) => void;
            error?: (response: HttpResponse) => void;
        }

        interface Cookie {
            name?: string;
            options?: CookieOptions;
            value?: string;
        }

        interface AfterSaveRequest extends FunctionRequest {}
        interface AfterDeleteRequest extends FunctionRequest {}
        interface BeforeDeleteRequest extends FunctionRequest {}
        interface BeforeDeleteResponse extends FunctionResponse {}
        interface BeforeSaveRequest extends FunctionRequest {}
        interface BeforeSaveResponse extends FunctionResponse {}

        function afterDelete(arg1: any, func?: (request: AfterDeleteRequest) => void): void;
        function afterSave(arg1: any, func?: (request: AfterSaveRequest) => void): void;
        function beforeDelete(arg1: any, func?: (request: BeforeDeleteRequest, response: BeforeDeleteResponse) => void): void;
        function beforeSave(arg1: any, func?: (request: BeforeSaveRequest, response: BeforeSaveResponse) => void): void;
        function define(name: string, func?: (request: FunctionRequest, response: FunctionResponse) => void): void;
        function httpRequest<T>(options: ParseDefaultOptions): Promise<HttpResponse>;
        function job(name: string, func?: (request: JobRequest, status: JobStatus) => void): HttpResponse;
        function run<T>(name: string, data?: any, options?: ParseDefaultOptions): Promise<T>;
        function useMasterKey(): void;
    }


    class Error {

        code: ErrorCode;
        message: string;

        constructor(code: ErrorCode, message: string);

    }

    enum ErrorCode {

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
        FILE_DELETE_ERROR =  153,
        DUPLICATE_VALUE =  137,
        INVALID_ROLE_NAME =  139,
        EXCEEDED_QUOTA =  140,
        SCRIPT_FAILED =  141,
        VALIDATION_ERROR =  142,
        INVALID_IMAGE_DATA =  150,
        UNSAVED_FILE_ERROR =  151,
        INVALID_PUSH_TIME_ERROR = 152,
        USERNAME_MISSING =  200,
        PASSWORD_MISSING =  201,
        USERNAME_TAKEN =  202,
        EMAIL_TAKEN =  203,
        EMAIL_MISSING =  204,
        EMAIL_NOT_FOUND =  205,
        SESSION_MISSING =  206,
        MUST_CREATE_USER_THROUGH_SIGNUP =  207,
        ACCOUNT_ALREADY_LINKED =  208,
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
    module Op {

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
    module Push {

        function send<T>(data: PushData, options?: ParseDefaultOptions):Promise<T>;
    }

    /**
     * Call this method first to set up your authentication tokens for Parse.
     * You can get your keys from the Data Browser on parse.com.
     * @param {String} applicationId Your Parse Application ID.
     * @param {String} javaScriptKey Your Parse JavaScript Key.
     * @param {String} masterKey (optional) Your Parse Master Key. (Node.js only!)
     */
    function initialize(applicationId: string, javaScriptKey: string, masterKey?: string): void;

}

declare module "parse" {
    var type: typeof Parse;
    var subType: {
        Parse: typeof type;
    }

    export = subType;
}
