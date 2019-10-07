// Type definitions for parse 2.2.9
// Project: https://parseplatform.org/
// Definitions by:  Ullisen Media Group <http://ullisenmedia.com>
//                  David Poetzsch-Heffter <https://github.com/dpoetzsch>
//                  Cedric Kemp <https://github.com/jaeggerr>
//                  Flavio Negrão <https://github.com/flavionegrao>
//                  Wes Grimes <https://github.com/wesleygrimes>
//                  Otherwise SAS <https://github.com/owsas>
//                  Andrew Goldis <https://github.com/agoldis>
//                  Alexandre Hétu Rivard <https://github.com/AlexandreHetu>
//                  Diamond Lewis <https://github.com/dplewis>
//                  Jong Eun Lee <https://github.com/yomybaby>
//                  Julien Quere <https://github.com/jlnquere>
//                  Yago Tomé <https://github.com/yagotome>
//                  Thibault MOCELLIN <https://github.com/tybi>
//                  Raschid JF Rafaelly <https://github.com/RaschidJFR>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

declare enum ErrorCode {
    OTHER_CAUSE = -1,
    INTERNAL_SERVER_ERROR = 1,
    CONNECTION_FAILED = 100,
    OBJECT_NOT_FOUND = 101,
    INVALID_QUERY = 102,
    INVALID_CLASS_NAME = 103,
    MISSING_OBJECT_ID = 104,
    INVALID_KEY_NAME = 105,
    INVALID_POINTER = 106,
    INVALID_JSON = 107,
    COMMAND_UNAVAILABLE = 108,
    NOT_INITIALIZED = 109,
    INCORRECT_TYPE = 111,
    INVALID_CHANNEL_NAME = 112,
    PUSH_MISCONFIGURED = 115,
    OBJECT_TOO_LARGE = 116,
    OPERATION_FORBIDDEN = 119,
    CACHE_MISS = 120,
    INVALID_NESTED_KEY = 121,
    INVALID_FILE_NAME = 122,
    INVALID_ACL = 123,
    TIMEOUT = 124,
    INVALID_EMAIL_ADDRESS = 125,
    MISSING_CONTENT_TYPE = 126,
    MISSING_CONTENT_LENGTH = 127,
    INVALID_CONTENT_LENGTH = 128,
    FILE_TOO_LARGE = 129,
    FILE_SAVE_ERROR = 130,
    DUPLICATE_VALUE = 137,
    INVALID_ROLE_NAME = 139,
    EXCEEDED_QUOTA = 140,
    SCRIPT_FAILED = 141,
    VALIDATION_ERROR = 142,
    INVALID_IMAGE_DATA = 150,
    UNSAVED_FILE_ERROR = 151,
    INVALID_PUSH_TIME_ERROR = 152,
    FILE_DELETE_ERROR = 153,
    REQUEST_LIMIT_EXCEEDED = 155,
    INVALID_EVENT_NAME = 160,
    USERNAME_MISSING = 200,
    PASSWORD_MISSING = 201,
    USERNAME_TAKEN = 202,
    EMAIL_TAKEN = 203,
    EMAIL_MISSING = 204,
    EMAIL_NOT_FOUND = 205,
    SESSION_MISSING = 206,
    MUST_CREATE_USER_THROUGH_SIGNUP = 207,
    ACCOUNT_ALREADY_LINKED = 208,
    INVALID_SESSION_TOKEN = 209,
    LINKED_ID_MISSING = 250,
    INVALID_LINKED_SESSION = 251,
    UNSUPPORTED_SERVICE = 252,
    AGGREGATE_ERROR = 600,
    FILE_READ_ERROR = 601,
    X_DOMAIN_REQUEST = 602
}

declare namespace Parse {

    let applicationId: string;
    let javaScriptKey: string | undefined;
    let masterKey: string | undefined;
    let serverURL: string;
    let liveQueryServerURL: string;
    let VERSION: string;

    interface BatchSizeOption {
        batchSize?: number;
    }

    interface CascadeSaveOption {
        /** If `false`, nested objects will not be saved (default is `true`). */
        cascadeSave?: boolean;
    }

    interface SuccessOption {
        success?: Function;
    }

    interface ErrorOption {
        error?: Function;
    }

    interface FullOptions {
        success?: Function;
        error?: Function;
        useMasterKey?: boolean;
        sessionToken?: string;
        installationId?: string;
        progress?: Function;
    }

    interface RequestOptions {
        useMasterKey?: boolean;
        sessionToken?: string;
        installationId?: string;
        batchSize?: number;
        include?: string | string[];
        progress?: Function;
    }

    interface SuccessFailureOptions extends SuccessOption, ErrorOption {
    }

    interface SignUpOptions {
        useMasterKey?: boolean;
        installationId?: string;
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

    interface Pointer {
        __type: string;
        className: string;
        objectId: string;
    }

    interface IBaseObject {
        toJSON(): any;
    }

    interface AuthData {
        [key: string]: any
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
        save(options?: SuccessFailureOptions): Promise<File>;

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
     * A class that is used to access all of the children of a many-to-many relationship.
     * Each instance of Parse.Relation is associated with a particular parent object and key.
     */
    class Relation<S extends Object = Object, T extends Object = Object> extends BaseObject {

        parent: S;
        key: string;
        targetClassName: string;

        constructor(parent?: S, key?: string);

        //Adds a Parse.Object or an array of Parse.Objects to the relation.
        add(object: T | Array<T>): void;

        // Returns a Parse.Query that is limited to objects in this relation.
        query(): Query<T>;

        // Removes a Parse.Object or an array of Parse.Objects from this relation.
        remove(object: T | Array<T>): void;
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
     * @param {Object} options The options for this object instance.
     * @see Parse.Object.extend
     *
     * @class
     *
     * Creates a new model with defined attributes.
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

        static createWithoutData<T extends Object>(id: string): T;
        static destroyAll<T extends Object>(list: T[], options?: Object.DestroyAllOptions): Promise<T[]>;
        static extend(className: string | { className: string }, protoProps?: any, classProps?: any): any;
        static fetchAll<T extends Object>(list: T[], options: Object.FetchAllOptions): Promise<T[]>;
        static fetchAllIfNeeded<T extends Object>(list: T[], options: Object.FetchAllOptions): Promise<T[]>;
        static fetchAllWithInclude<T extends Object>(list: T[], keys: string | Array<string | Array<string>>, options: RequestOptions): Promise<T[]>;
        static fromJSON<T extends Object>(json: any, override?: boolean): T;
        static pinAll(objects: Object[]): Promise<void>;
        static pinAllWithName(name: string, objects: Object[]): Promise<void>;
        static registerSubclass<T extends Object>(className: string, clazz: new (options?: any) => T): void;
        static saveAll<T extends Object>(list: T[], options?: Object.SaveAllOptions): Promise<T[]>;
        static unPinAll(objects: Object[]): Promise<void>;
        static unPinAllObjects(): Promise<void>;
        static unPinAllObjectsWithName(name: string): Promise<void>;
        static unPinAllWithName(name: string, objects: Object[]): Promise<void>;

        add(attr: string, item: any): this | false;
        addAll(attr: string, items: any[]): this | false;
        addAllUnique(attr: string, items: any[]): this | false;
        addUnique(attr: string, item: any): this | false;
        change(options: any): this;
        changedAttributes(diff: any): boolean;
        clear(options: any): any;
        clone(): this;
        destroy(options?: Object.DestroyOptions): Promise<this>;
        dirty(attr?: string): boolean;
        dirtyKeys(): string[];
        equals(other: any): boolean;
        escape(attr: string): string;
        existed(): boolean;
        fetch(options?: Object.FetchOptions): Promise<this>;
        fetchFromLocalDatastore(): Promise<this> | void;
        fetchWithInclude(keys: string | Array<string | Array<string>>, options?: RequestOptions): Promise<this>;
        get(attr: string): any | undefined;
        getACL(): ACL | undefined;
        has(attr: string): boolean;
        hasChanged(attr: string): boolean;
        increment(attr: string, amount?: number): any;
        initialize(): void;
        isNew(): boolean;
        isPinned(): Promise<boolean>;
        isValid(): boolean;
        op(attr: string): any;
        pin(): Promise<void>;
        pinWithName(name: string): Promise<void>;
        previous(attr: string): any;
        previousAttributes(): any;
        relation(attr: string): Relation<this, Object>;
        remove(attr: string, item: any): this | false;
        removeAll(attr: string, items: any): this | false;
        revert(): void;
        revert(...keys: string[]): void;
        save(attrs?: { [key: string]: any } | null, options?: Object.SaveOptions): Promise<this>;
        save(key: string, value: any, options?: Object.SaveOptions): Promise<this>;
        save(attrs: object, options?: Object.SaveOptions): Promise<this>;
        set(key: string, value: any, options?: Object.SetOptions): this | false;
        set(attrs: object, options?: Object.SetOptions): this | false;
        setACL(acl: ACL, options?: SuccessFailureOptions): this | false;
        toPointer(): Pointer;
        unPin(): Promise<void>;
        unPinWithName(name: string): Promise<void>;
        unset(attr: string, options?: any): any;
        validate(attrs: any, options?: SuccessFailureOptions): boolean;
    }

    namespace Object {
        interface DestroyOptions extends SuccessFailureOptions, WaitOption, ScopeOptions { }

        interface DestroyAllOptions extends BatchSizeOption, ScopeOptions { }

        interface FetchAllOptions extends SuccessFailureOptions, ScopeOptions { }

        interface FetchOptions extends SuccessFailureOptions, ScopeOptions { }

        interface SaveOptions extends CascadeSaveOption, SuccessFailureOptions, SilentOption, ScopeOptions, WaitOption { }

        interface SaveAllOptions extends BatchSizeOption, ScopeOptions { }

        interface SetOptions extends ErrorOption, SilentOption {
            promise?: any;
        }
    }

    class Polygon extends BaseObject {
        constructor(arg1: GeoPoint[] | number[][]);
        containsPoint(point: GeoPoint): boolean;
        equals(other: Polygon | any): boolean;
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
    class Query<T extends Object = Object> extends BaseObject {

        objectClass: any;
        className: string;

        constructor(objectClass: string);
        constructor(objectClass: new (...args: any[]) => T);

        static and<U extends Object>(...args: Query<U>[]): Query<U>;
        static fromJSON<U extends Object>(className: string, json: any): Query<U>;
        static nor<U extends Object>(...args: Query<U>[]): Query<U>;
        static or<U extends Object>(...var_args: Query<U>[]): Query<U>;

        addAscending(key: string): Query<T>;
        addAscending(key: string[]): Query<T>;
        addDescending(key: string): Query<T>;
        addDescending(key: string[]): Query<T>;
        ascending(key: string): Query<T>;
        ascending(key: string[]): Query<T>;
        aggregate<V = any>(pipeline: Query.AggregationOptions | Query.AggregationOptions[]): Promise<V>;
        containedBy(key: string, values: any[]): Query<T>;
        containedIn(key: string, values: any[]): Query<T>;
        contains(key: string, substring: string): Query<T>;
        containsAll(key: string, values: any[]): Query<T>;
        containsAllStartingWith(key: string, values: any[]): Query<T>;
        count(options?: Query.CountOptions): Promise<number>;
        descending(key: string): Query<T>;
        descending(key: string[]): Query<T>;
        doesNotExist(key: string): Query<T>;
        doesNotMatchKeyInQuery<U extends Object>(key: string, queryKey: string, query: Query<U>): Query<T>;
        doesNotMatchQuery<U extends Object>(key: string, query: Query<U>): Query<T>;
        distinct<V = any>(key: string): Promise<V>;
        each(callback: Function, options?: Query.EachOptions): Promise<void>;
        endsWith(key: string, suffix: string): Query<T>;
        equalTo(key: string, value: any): Query<T>;
        exists(key: string): Query<T>;
        find(options?: Query.FindOptions): Promise<T[]>;
        first(options?: Query.FirstOptions): Promise<T | undefined>;
        fromLocalDatastore(): void;
        fromPin(): void;
        fromPinWithName(name: string): void;
        fullText(key: string, value: string, options?: Query.FullTextOptions): Query<T>;
        get(objectId: string, options?: Query.GetOptions): Promise<T>;
        greaterThan(key: string, value: any): Query<T>;
        greaterThanOrEqualTo(key: string, value: any): Query<T>;
        include(key: string): Query<T>;
        include(keys: string[]): Query<T>;
        includeAll(): Query<T>;
        lessThan(key: string, value: any): Query<T>;
        lessThanOrEqualTo(key: string, value: any): Query<T>;
        limit(n: number): Query<T>;
        matches(key: string, regex: RegExp, modifiers: any): Query<T>;
        matchesKeyInQuery<U extends Object>(key: string, queryKey: string, query: Query<U>): Query<T>;
        matchesQuery<U extends Object>(key: string, query: Query<U>): Query<T>;
        near(key: string, point: GeoPoint): Query<T>;
        notContainedIn(key: string, values: any[]): Query<T>;
        notEqualTo(key: string, value: any): Query<T>;
        polygonContains(key: string, point: GeoPoint): Query<T>;
        select(...keys: string[]): Query<T>;
        skip(n: number): Query<T>;
        sortByTextScore(): this;
        startsWith(key: string, prefix: string): Query<T>;
        subscribe(): LiveQuerySubscription;
        withJSON(json: any): this;
        withinGeoBox(key: string, southwest: GeoPoint, northeast: GeoPoint): Query<T>;
        withinKilometers(key: string, point: GeoPoint, maxDistance: number): Query<T>;
        withinMiles(key: string, point: GeoPoint, maxDistance: number): Query<T>;
        withinPolygon(key: string, points: GeoPoint[]): Query<T>;
        withinRadians(key: string, point: GeoPoint, maxDistance: number): Query<T>;
    }

    namespace Query {
        interface EachOptions extends SuccessFailureOptions, ScopeOptions { }
        interface CountOptions extends SuccessFailureOptions, ScopeOptions { }
        interface FindOptions extends SuccessFailureOptions, ScopeOptions { }
        interface FirstOptions extends SuccessFailureOptions, ScopeOptions { }
        interface GetOptions extends SuccessFailureOptions, ScopeOptions { }

        // According to http://docs.parseplatform.org/rest/guide/#aggregate-queries
        interface AggregationOptions {
            group?: { objectId?: string, [key: string]: any };
            match?: { [key: string]: any };
            project?: { [key: string]: any };
            limit?: number;
            skip?: number;
            // Sort documentation https://docs.mongodb.com/v3.2/reference/operator/aggregation/sort/#pipe._S_sort
            sort?: { [key: string]: 1 | -1 };
        }

        // According to https://parseplatform.org/Parse-SDK-JS/api/2.1.0/Parse.Query.html#fullText
        interface FullTextOptions {
            language?: string;
            caseSensitive?: boolean;
            diacriticSensitive?: boolean;
        }
    }

    /**
     * Represents a LiveQuery Subscription.
     *
     * @see https://docs.parseplatform.org/js/guide/#live-queries
     * @see NodeJS.EventEmitter
     *
     * Events list
     * ---
     * `open` - when you call `query.subscribe()`, we send a subscribe request to
     * the LiveQuery server, when we get the confirmation from the LiveQuery server,
     * this event will be emitted. When the client loses WebSocket connection to the
     * LiveQuery server, we will try to auto reconnect the LiveQuery server. If we
     * reconnect the LiveQuery server and successfully resubscribe the ParseQuery,
     * you'll also get this event.
     *
```
subscription.on('open', () => {});
```
     * ---
     * `create` - when a new ParseObject is created and it fulfills the ParseQuery you subscribe,
     * you'll get this event. The object is the ParseObject which is created.
     *
```
subscription.on('create', (object: Parse.Object) => {});
```
     * ---
     * `update` event - when an existing ParseObject which fulfills the ParseQuery you subscribe
     * is updated (The ParseObject fulfills the ParseQuery before and after changes),
     * you'll get this event. The object is the ParseObject which is updated.
     * Its content is the latest value of the ParseObject.
     *
```
subscription.on('update', (object: Parse.Object) => {});
```
     * ---
     * `enter` event - when an existing ParseObject's old value doesn't fulfill the ParseQuery
     * but its new value fulfills the ParseQuery, you'll get this event. The object is the
     * ParseObject which enters the ParseQuery. Its content is the latest value of the ParseObject.
     *
```
subscription.on('enter', (object: Parse.Object) => {});
```
     * ---
     * `update` event - when an existing ParseObject's old value fulfills the ParseQuery but its new value
     * doesn't fulfill the ParseQuery, you'll get this event. The object is the ParseObject
     * which leaves the ParseQuery. Its content is the latest value of the ParseObject.
     *
```
subscription.on('leave', (object: Parse.Object) => {});
```
     * ---
     * `delete` event - when an existing ParseObject which fulfills the ParseQuery is deleted, you'll
     * get this event. The object is the ParseObject which is deleted.
     *
```
subscription.on('delete', (object: Parse.Object) => {});
```
     * ---
     * `close` event - when the client loses the WebSocket connection to the LiveQuery
     * server and we stop receiving events, you'll get this event.
     *
```
subscription.on('close', () => {});
```
     */
    class LiveQuerySubscription extends NodeJS.EventEmitter {
        /**
         * Creates an instance of LiveQuerySubscription.
         *
         * @param {string} id
         * @param {string} query
         * @param {string} [sessionToken]
         */
        constructor(id: string, query: string, sessionToken?: string);

        /**
         * Closes the subscription.
         *
         */
        unsubscribe(): void;
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

        getRoles(): Relation<Role, Role>;
        getUsers(): Relation<Role, User>;
        getName(): string;
        setName(name: string, options?: SuccessFailureOptions): any;
    }

    class Config extends Object {
        static get(options?: SuccessFailureOptions): Promise<Config>;
        static current(): Config;
        static save(attr: any): Promise<Config>;

        get(attr: string): any;
        escape(attr: string): any;
    }

    class Session extends Object {
        static current(): Promise<Session>;

        getSessionToken(): string;
        isCurrentSessionRevocable(): boolean;
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
        static allowCustomUserClass(isAllowed: boolean): void;
        static become(sessionToken: string, options?: UseMasterKeyOption): Promise<User>;
        static current(): User | undefined;
        static currentAsync(): Promise<User | null>;
        static signUp(username: string, password: string, attrs: any, options?: SignUpOptions): Promise<User>;
        static logIn(username: string, password: string, options?: SuccessFailureOptions): Promise<User>;
        static logOut(): Promise<User>;
        static requestPasswordReset(email: string, options?: SuccessFailureOptions): Promise<User>;
        static extend(protoProps?: any, classProps?: any): any;
        static hydrate(userJSON: any): Promise<User>;
        static enableUnsafeCurrentUser(): void;

        signUp(attrs?: any, options?: SignUpOptions): Promise<this>;
        logIn(options?: SuccessFailureOptions): Promise<this>;
        authenticated(): boolean;
        isCurrent(): boolean;

        getEmail(): string | undefined;
        setEmail(email: string, options?: SuccessFailureOptions): boolean;

        getUsername(): string | undefined;
        setUsername(username: string, options?: SuccessFailureOptions): boolean;

        setPassword(password: string, options?: SuccessFailureOptions): boolean;
        getSessionToken(): string;

        linkWith(user: User, authData: AuthData, options: FullOptions): Promise<User>;
        _linkWith(provider: any, options: { authData?: AuthData }, saveOpts?: FullOptions): Promise<User>;
    }


    namespace Analytics {

        function track(name: string, dimensions: any): Promise<any>;
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
            message: (response: any) => void;
        }

        interface FunctionRequest {
            installationId?: String;
            master?: boolean;
            params?: any;
            user?: User;
        }

        interface Cookie {
            name?: string;
            options?: CookieOptions;
            value?: string;
        }

        interface TriggerRequest {
            installationId?: String;
            master?: boolean;
            user?: User;
            ip: string;
            headers: any;
            triggerName: string;
            log: any;
            object: Object;
            original?: Parse.Object;
        }

        interface AfterSaveRequest extends TriggerRequest {
            context: object;
        }
        interface AfterDeleteRequest extends TriggerRequest { }
        interface BeforeDeleteRequest extends TriggerRequest { }
        interface BeforeSaveRequest extends TriggerRequest {
            context: object;
        }

        // Read preference describes how MongoDB driver route read operations to the members of a replica set.
        enum ReadPreferenceOption {
            Primary = 'PRIMARY',
            PrimaryPreferred = 'PRIMARY_PREFERRED',
            Secondary = 'SECONDARY',
            SecondaryPreferred = 'SECONDARY_PREFERRED',
            Nearest = 'NEAREST'
        }

        interface BeforeFindRequest extends TriggerRequest {
            query: Query
            count: boolean
            isGet: boolean
            readPreference?: ReadPreferenceOption
        }

        interface AfterFindRequest extends TriggerRequest {
            objects: Object[]
        }

        function afterDelete(arg1: any, func?: (request: AfterDeleteRequest) => Promise<void> | void): void;
        function afterSave(arg1: any, func?: (request: AfterSaveRequest) => Promise<void> | void): void;
        function beforeDelete(arg1: any, func?: (request: BeforeDeleteRequest) => Promise<void> | void): void;
        function beforeSave(arg1: any, func?: (request: BeforeSaveRequest) => Promise<void> | void): void;
        function beforeFind(arg1: any, func?: (request: BeforeFindRequest) => Promise<void> | void): void;
        function beforeFind(arg1: any, func?: (request: BeforeFindRequest) => Promise<Query> | Query): void;
        function afterFind(arg1: any, func?: (request: AfterFindRequest) => Promise<any> | any): void;
        function define(name: string, func?: (request: FunctionRequest) => Promise<any> | any): void;
        /**
         * Gets data for the current set of cloud jobs.
         * @returns A promise that will be resolved with the result of the function.
         */
        function getJobsData(): Promise<Object>;
        /**
         * Gets job status by Id
         * @param jobStatusId The Id of Job Status.
         * @returns Status of Job.
         */
        function getJobStatus(jobStatusId: string): Promise<Object>;
        function httpRequest(options: HTTPOptions): Promise<HttpResponse>;
        function job(name: string, func?: (request: JobRequest) => Promise<void> | void): HttpResponse;
        function run(name: string, data?: any, options?: RunOptions): Promise<any>;
        /**
          * Starts a given cloud job, which will process asynchronously.
          * @param jobName The function name.
          * @param data The parameters to send to the cloud function.
          * @returns A promise that will be resolved with the jobStatusId of the job.
          */
        function startJob(jobName: string, data: any): Promise<string>;
        function useMasterKey(): void;



        interface RunOptions extends SuccessFailureOptions, ScopeOptions { }

        /**
         * To use this Cloud Module in Cloud Code, you must require 'buffer' in your JavaScript file.
         *
         *     import Buffer = require("buffer").Buffer;
         */
        let HTTPOptions: new () => HTTPOptions;
        interface HTTPOptions {
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

            success?: (response: any) => void;
            error?: (response: any) => void;
        }
    }

    class Error {
      static OTHER_CAUSE: ErrorCode.OTHER_CAUSE;
      static INTERNAL_SERVER_ERROR: ErrorCode.INTERNAL_SERVER_ERROR;
      static CONNECTION_FAILED: ErrorCode.CONNECTION_FAILED;
      static OBJECT_NOT_FOUND: ErrorCode.OBJECT_NOT_FOUND;
      static INVALID_QUERY: ErrorCode.INVALID_QUERY;
      static INVALID_CLASS_NAME: ErrorCode.INVALID_CLASS_NAME;
      static MISSING_OBJECT_ID: ErrorCode.MISSING_OBJECT_ID;
      static INVALID_KEY_NAME: ErrorCode.INVALID_KEY_NAME;
      static INVALID_POINTER: ErrorCode.INVALID_POINTER;
      static INVALID_JSON: ErrorCode.INVALID_JSON;
      static COMMAND_UNAVAILABLE: ErrorCode.COMMAND_UNAVAILABLE;
      static NOT_INITIALIZED: ErrorCode.NOT_INITIALIZED;
      static INCORRECT_TYPE: ErrorCode.INCORRECT_TYPE;
      static INVALID_CHANNEL_NAME: ErrorCode.INVALID_CHANNEL_NAME;
      static PUSH_MISCONFIGURED: ErrorCode.PUSH_MISCONFIGURED;
      static OBJECT_TOO_LARGE: ErrorCode.OBJECT_TOO_LARGE;
      static OPERATION_FORBIDDEN: ErrorCode.OPERATION_FORBIDDEN;
      static CACHE_MISS: ErrorCode.CACHE_MISS;
      static INVALID_NESTED_KEY: ErrorCode.INVALID_NESTED_KEY;
      static INVALID_FILE_NAME: ErrorCode.INVALID_FILE_NAME;
      static INVALID_ACL: ErrorCode.INVALID_ACL;
      static TIMEOUT: ErrorCode.TIMEOUT;
      static INVALID_EMAIL_ADDRESS: ErrorCode.INVALID_EMAIL_ADDRESS;
      static MISSING_CONTENT_TYPE: ErrorCode.MISSING_CONTENT_TYPE;
      static MISSING_CONTENT_LENGTH: ErrorCode.MISSING_CONTENT_LENGTH;
      static INVALID_CONTENT_LENGTH: ErrorCode.INVALID_CONTENT_LENGTH;
      static FILE_TOO_LARGE: ErrorCode.FILE_TOO_LARGE;
      static FILE_SAVE_ERROR: ErrorCode.FILE_SAVE_ERROR;
      static DUPLICATE_VALUE: ErrorCode.DUPLICATE_VALUE;
      static INVALID_ROLE_NAME: ErrorCode.INVALID_ROLE_NAME;
      static EXCEEDED_QUOTA: ErrorCode.EXCEEDED_QUOTA;
      static SCRIPT_FAILED: ErrorCode.SCRIPT_FAILED;
      static VALIDATION_ERROR: ErrorCode.VALIDATION_ERROR;
      static INVALID_IMAGE_DATA: ErrorCode.INVALID_IMAGE_DATA;
      static UNSAVED_FILE_ERROR: ErrorCode.UNSAVED_FILE_ERROR;
      static INVALID_PUSH_TIME_ERROR: ErrorCode.INVALID_PUSH_TIME_ERROR;
      static FILE_DELETE_ERROR: ErrorCode.FILE_DELETE_ERROR;
      static REQUEST_LIMIT_EXCEEDED: ErrorCode.REQUEST_LIMIT_EXCEEDED;
      static INVALID_EVENT_NAME: ErrorCode.INVALID_EVENT_NAME;
      static USERNAME_MISSING: ErrorCode.USERNAME_MISSING;
      static PASSWORD_MISSING: ErrorCode.PASSWORD_MISSING;
      static USERNAME_TAKEN: ErrorCode.USERNAME_TAKEN;
      static EMAIL_TAKEN: ErrorCode.EMAIL_TAKEN;
      static EMAIL_MISSING: ErrorCode.EMAIL_MISSING;
      static EMAIL_NOT_FOUND: ErrorCode.EMAIL_NOT_FOUND;
      static SESSION_MISSING: ErrorCode.SESSION_MISSING;
      static MUST_CREATE_USER_THROUGH_SIGNUP: ErrorCode.MUST_CREATE_USER_THROUGH_SIGNUP;
      static ACCOUNT_ALREADY_LINKED: ErrorCode.ACCOUNT_ALREADY_LINKED;
      static INVALID_SESSION_TOKEN: ErrorCode.INVALID_SESSION_TOKEN;
      static LINKED_ID_MISSING: ErrorCode.LINKED_ID_MISSING;
      static INVALID_LINKED_SESSION: ErrorCode.INVALID_LINKED_SESSION;
      static UNSUPPORTED_SERVICE: ErrorCode.UNSUPPORTED_SERVICE;
      static AGGREGATE_ERROR: ErrorCode.AGGREGATE_ERROR;
      static FILE_READ_ERROR: ErrorCode.FILE_READ_ERROR;
      static X_DOMAIN_REQUEST: ErrorCode.X_DOMAIN_REQUEST;

      code: ErrorCode;
      message: string;

      constructor(code: ErrorCode, message: string);
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
            where?: Query<Installation>;
            data?: any;
            alert?: string;
            badge?: string;
            sound?: string;
            title?: string;
            notification?: any;
            content_available?: any;
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

    /**
     * Additionally on React-Native / Expo environments, add AsyncStorage from 'react-native' package
     * @param AsyncStorage AsyncStorage from 'react-native' package
     */
    function setAsyncStorage(AsyncStorage: any): void;

    /**
     * Gets all contents from Local Datastore.
     */
    function dumpLocalDatastore(): Promise<{ [key: string]: any }>;

    /**
     * Enable pinning in your application.
     * This must be called before your application can use pinning.
     */
    function enableLocalDatastore(): void;

    /**
     * Flag that indicates whether Local Datastore is enabled.
     */
    function isLocalDatastoreEnabled(): boolean;

    function setLocalDatastoreController(controller: any): void;
}

declare module "parse/node" {
    export = Parse;
}

declare module "parse" {
    import * as parse from "parse/node";
    export = parse
}

declare module "parse/react-native" {
    import * as parse from "parse/node";
    export = parse
}
