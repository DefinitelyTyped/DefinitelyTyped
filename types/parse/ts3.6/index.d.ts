/// <reference types="node" />
/// <reference path="node.d.ts" />
/// <reference path="react-native.d.ts" />

import { EventEmitter } from 'events';

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
    X_DOMAIN_REQUEST = 602,
}

declare global {
namespace Parse {
    let applicationId: string;
    let javaScriptKey: string | undefined;
    let liveQueryServerURL: string;
    let masterKey: string | undefined;
    let serverAuthToken: string | undefined;
    let serverAuthType: string | undefined;
    let serverURL: string;
    let secret: string;
    let encryptedUser: boolean;

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

    interface SuccessFailureOptions extends SuccessOption, ErrorOption { }

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

    interface ScopeOptions extends SessionTokenOption, UseMasterKeyOption { }

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

    interface AuthData {
        [key: string]: any;
    }

    /**
     * Interface declaration for Authentication Providers
     * https://parseplatform.org/Parse-SDK-JS/api/master/AuthProvider.html
     */
    interface AuthProvider {
        /**
         * Called when _linkWith isn't passed authData. Handle your own authentication here.
         */
        authenticate: () => void;
        /**
         * (Optional) Called when service is unlinked. Handle any cleanup here.
         */
        deauthenticate?: () => void;
        /**
         * Unique identifier for this Auth Provider.
         */
        getAuthType: () => string;
        /**
         * Called when auth data is syncronized. Can be used to determine if authData is still valid
         */
        restoreAuthentication: () => boolean;
    }

    interface BaseAttributes {
        createdAt: Date;
        objectId: string;
        updatedAt: Date;
    }

    interface JSONBaseAttributes {
        createdAt: string;
        objectId: string;
        updatedAt: string;
    }

    /**
     * Creates a new ACL.
     * If no argument is given, the ACL has no permissions for anyone.
     * If the argument is a Parse.User, the ACL will have read and write
     *   permission for only that user.
     * If the argument is any other JSON object, that object will be interpretted
     *   as a serialized ACL created with toJSON().
     * @see Parse.Object#setACL
     *
     * <p>An ACL, or Access Control List can be added to any
     * <code>Parse.Object</code> to restrict access to only a subset of users
     * of your application.</p>
     */
    class ACL {
        permissionsById: any;

        constructor(arg1?: any);

        setPublicReadAccess(allowed: boolean): void;
        getPublicReadAccess(): boolean;

        setPublicWriteAccess(allowed: boolean): void;
        getPublicWriteAccess(): boolean;

        setReadAccess(userId: User | string, allowed: boolean): void;
        getReadAccess(userId: User | string): boolean;

        setWriteAccess(userId: User | string, allowed: boolean): void;
        getWriteAccess(userId: User | string): boolean;

        setRoleReadAccess(role: Role | string, allowed: boolean): void;
        getRoleReadAccess(role: Role | string): boolean;

        setRoleWriteAccess(role: Role | string, allowed: boolean): void;
        getRoleWriteAccess(role: Role | string): boolean;

        toJSON(): any;
    }

    /**
     * A Parse.File is a local representation of a file that is saved to the Parse
     * cloud.
     * @param name The file's name. This will be prefixed by a unique
     *     value once the file has finished saving. The file name must begin with
     *     an alphanumeric character, and consist of alphanumeric characters,
     *     periods, spaces, underscores, or dashes.
     * @param data The data for the file, as either:
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
     * @param type Optional Content-Type header to use for the file. If
     *     this is omitted, the content type will be inferred from the name's
     *     extension.
     */
    class File {
        constructor(name: string, data: number[] | { base64: string } | { size: number; type: string; } | { uri: string }, type?: string);
        /**
         * Return the data for the file, downloading it if not already present.
         * Data is present if initialized with Byte Array, Base64 or Saved with Uri.
         * Data is cleared if saved with File object selected with a file upload control
         *
         * @returns Promise that is resolved with base64 data
         */
        getData(): Promise<string>;
        url(options?: { forceSecure?: boolean }): string;
        metadata(): Record<string, any>;
        tags(): Record<string, any>;
        name(): string;
        save(options?: SuccessFailureOptions): Promise<File>;
        cancel(): void;
        destroy(): Promise<File>;
        toJSON(): { __type: string, name: string, url: string };
        equals(other: File): boolean;
        setMetadata(metadata: Record<string, any>): void;
        addMetadata(key: string, value: any): void;
        setTags(tags: Record<string, any>): void;
        addTag(key: string, value: any): void;
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
    class GeoPoint {
        latitude: number;
        longitude: number;

        constructor(latitude: number, longitude: number);
        constructor(coords?: { latitude: number, longitude: number } | [number, number]);

        current(options?: SuccessFailureOptions): GeoPoint;
        radiansTo(point: GeoPoint): number;
        kilometersTo(point: GeoPoint): number;
        milesTo(point: GeoPoint): number;
        toJSON(): any;
    }

    /**
     * A class that is used to access all of the children of a many-to-many relationship.
     * Each instance of Parse.Relation is associated with a particular parent object and key.
     */
    class Relation<S extends Object = Object, T extends Object = Object> {
        parent: S;
        key: string;
        targetClassName: string;

        constructor(parent?: S, key?: string);

        // Adds a Parse.Object or an array of Parse.Objects to the relation.
        add(object: T | T[]): void;

        // Returns a Parse.Query that is limited to objects in this relation.
        query(): Query<T>;

        // Removes a Parse.Object or an array of Parse.Objects from this relation.
        remove(object: T | T[]): void;

        toJSON(): any;
    }

    interface Attributes {
        [key: string]: any;
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
     * @param attributes The initial set of data to store in the object.
     * @param options The options for this object instance.
     * @see Parse.Object.extend
     *
     *
     * Creates a new model with defined attributes.
     */
    interface Object<T extends Attributes = Attributes> {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        attributes: T;
        className: string;

        add<K extends { [K in keyof T]: T[K] extends any[] ? K : never }[keyof T]>(
            attr: K,
            item: T[K][number]
        ): this | false;
        addAll<K extends { [K in keyof T]: T[K] extends any[] ? K : never }[keyof T]>(
            attr: K,
            items: T[K]
        ): this | false;
        addAllUnique: this['addAll'];
        addUnique: this['add'];
        clear(options: any): any;
        clone(): this;
        destroy(options?: Object.DestroyOptions): Promise<this>;
        dirty(attr?: Extract<keyof T, string>): boolean;
        dirtyKeys(): string[];
        equals<T extends Object>(other: T): boolean;
        escape(attr: Extract<keyof T, string>): string;
        existed(): boolean;
        exists(options?: RequestOptions): Promise<boolean>;
        fetch(options?: Object.FetchOptions): Promise<this>;
        fetchFromLocalDatastore(): Promise<this>;
        fetchWithInclude<K extends Extract<keyof T, string>>(
            keys: K | Array<K | K[]>,
            options?: RequestOptions
        ): Promise<this>;
        get<K extends Extract<keyof T, string>>(attr: K): T[K];
        getACL(): ACL | undefined;
        has(attr: Extract<keyof T, string>): boolean;
        increment(attr: Extract<keyof T, string>, amount?: number): this | false;
        decrement(attr: Extract<keyof T, string>, amount?: number): this | false;
        initialize(): void;
        isDataAvailable(): boolean;
        isNew(): boolean;
        isPinned(): Promise<boolean>;
        isValid(): boolean;
        newInstance(): this;
        op(attr: Extract<keyof T, string>): any;
        pin(): Promise<void>;
        pinWithName(name: string): Promise<void>;
        relation<R extends Object, K extends Extract<keyof T, string> = Extract<keyof T, string>>(
            attr: T[K] extends Relation ? K : never
        ): Relation<this, R>;
        remove: this['add'];
        removeAll: this['addAll'];
        revert(...keys: Array<Extract<keyof T, string>>): void;
        save<K extends Extract<keyof T, string>>(
            attrs?: (((x: T) => void) extends ((x: Attributes) => void) ? Partial<T> : {
                [key in K]: T[key];
            }) | null,
            options?: Object.SaveOptions
        ): Promise<this>;
        save<K extends Extract<keyof T, string>>(
            key: K,
            value: T[K],
            options?: Object.SaveOptions
        ): Promise<this>;
        set<K extends Extract<keyof T, string>>(
            attrs: ((x: T) => void) extends ((x: Attributes) => void) ? Partial<T> : {
                [key in K]: T[key];
            },
            options?: Object.SetOptions
        ): this | false;
        set<K extends Extract<keyof T, string>>(
            key: K,
            value: T[K],
            options?: Object.SetOptions
        ): this | false;
        setACL(acl: ACL, options?: SuccessFailureOptions): this | false;
        toJSON(): Object.ToJSON<T> & JSONBaseAttributes;
        toPointer(): Pointer;
        unPin(): Promise<void>;
        unPinWithName(name: string): Promise<void>;
        unset(attr: Extract<keyof T, string>, options?: any): this | false;
        validate(attrs: Attributes, options?: SuccessFailureOptions): Error | false;
    }
    interface ObjectStatic {
        createWithoutData<T extends Object>(id: string): T;
        destroyAll<T extends Object>(list: T[], options?: Object.DestroyAllOptions): Promise<T[]>;
        extend(className: string | { className: string }, protoProps?: any, classProps?: any): any;
        fetchAll<T extends Object>(list: T[], options: Object.FetchAllOptions): Promise<T[]>;
        fetchAllIfNeeded<T extends Object>(list: T[], options?: Object.FetchAllOptions): Promise<T[]>;
        fetchAllIfNeededWithInclude<T extends Object>(
            list: T[],
            keys: keyof T['attributes'] | Array<keyof T['attributes']>,
            options?: RequestOptions
        ): Promise<T[]>;
        fetchAllWithInclude<T extends Object>(
            list: T[],
            keys: keyof T['attributes'] | Array<keyof T['attributes']>,
            options?: RequestOptions,
        ): Promise<T[]>;
        fromJSON<T extends Object>(json: any, override?: boolean): T;
        pinAll(objects: Object[]): Promise<void>;
        pinAllWithName(name: string, objects: Object[]): Promise<void>;
        registerSubclass<T extends Object>(className: string, clazz: new (options?: any) => T): void;
        saveAll<T extends readonly Object[]>(list: T, options?: Object.SaveAllOptions): Promise<T>;
        unPinAll(objects: Object[]): Promise<void>;
        unPinAllObjects(): Promise<void>;
        unPinAllObjectsWithName(name: string): Promise<void>;
        unPinAllWithName(name: string, objects: Object[]): Promise<void>;
    }
    interface ObjectConstructor extends ObjectStatic {
        new <T extends Attributes>(className: string, attributes: T, options?: any): Object<T>;
        new(className?: string, attributes?: Attributes, options?: any): Object;
    }
    const Object: ObjectConstructor;

    namespace Object {
        interface DestroyOptions extends SuccessFailureOptions, WaitOption, ScopeOptions { }

        interface DestroyAllOptions extends BatchSizeOption, ScopeOptions { }

        interface FetchAllOptions extends SuccessFailureOptions, ScopeOptions { }

        interface FetchOptions extends SuccessFailureOptions, ScopeOptions { }

        interface SaveOptions
            extends CascadeSaveOption,
            SuccessFailureOptions,
            SilentOption,
            ScopeOptions,
            WaitOption { }

        interface SaveAllOptions extends BatchSizeOption, ScopeOptions { }

        interface SetOptions extends ErrorOption, SilentOption {
            promise?: any;
        }

        // From https://github.com/parse-community/Parse-SDK-JS/blob/master/src/encode.js
        type Encode<T> = (
            T extends Object
                ? ReturnType<T['toJSON']> | Pointer
                : T extends (ACL | GeoPoint | Polygon | Relation | File)
                    ? ReturnType<T['toJSON']>
                    : T extends Date
                        ? { __type: 'Date'; iso: string; }
                        : T extends RegExp
                            ? string
                            : T extends Array<infer R>
                                ? any[]
                                : T extends object
                                    ? ToJSON<T>
                                    : T
        );

        type ToJSON<T> = {
            [K in keyof T]: Encode<T[K]>
        };
    }

    class Polygon {
        constructor(arg1: GeoPoint[] | number[][]);
        containsPoint(point: GeoPoint): boolean;
        equals(other: any): boolean;
        toJSON(): any;
    }

    /**
     * Every Parse application installed on a device registered for
     * push notifications has an associated Installation object.
     */
    interface Installation<T extends Attributes = Attributes> extends Object<T> {
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
    interface InstallationConstructor extends ObjectStatic {
        new <T extends Attributes>(attributes: T): Installation<T>;
        new(): Installation;
    }
    const Installation: InstallationConstructor;

    /**
     * Creates a new parse Parse.Query for the given Parse.Object subclass.
     * @param objectClass -
     *   An instance of a subclass of Parse.Object, or a Parse className string.
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
    class Query<T extends Object = Object> {
        objectClass: any;
        className: string;

        constructor(objectClass: string | (new (...args: any[]) => T | Object));

        static and<U extends Object>(...args: Array<Query<U>>): Query<U>;
        static fromJSON<U extends Object>(className: string, json: any): Query<U>;
        static nor<U extends Object>(...args: Array<Query<U>>): Query<U>;
        static or<U extends Object>(...var_args: Array<Query<U>>): Query<U>;

        addAscending<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K | K[]): this;
        addDescending<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K | K[]): this;
        ascending<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K | K[]): this;
        aggregate<V = any>(pipeline: Query.AggregationOptions | Query.AggregationOptions[]): Promise<V>;
        containedBy<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, values: Array<T['attributes'][K] | (T['attributes'][K] extends Object ? string : never)>): this;
        containedIn<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, values: Array<T['attributes'][K] | (T['attributes'][K] extends Object ? string : never)>): this;
        contains<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, substring: string): this;
        containsAll<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, values: any[]): this;
        containsAllStartingWith<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, values: any[]): this;
        count(options?: Query.CountOptions): Promise<number>;
        descending<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K | K[]): this;
        doesNotExist<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K): this;
        doesNotMatchKeyInQuery<U extends Object,
            K extends (keyof T['attributes'] | keyof BaseAttributes),
            X extends Extract<keyof U['attributes'], string>>(key: K, queryKey: X, query: Query<U>): this;
        doesNotMatchQuery<U extends Object, K extends keyof T['attributes']>(key: K, query: Query<U>): this;
        distinct<K extends keyof T['attributes'], V = T['attributes'][K]>(key: K): Promise<V>;
        eachBatch(callback: (objs: T[]) => PromiseLike<void> | void, options?: Query.BatchOptions): Promise<void>;
        each(callback: (obj: T) => PromiseLike<void> | void, options?: Query.BatchOptions): Promise<void>;
        hint(value: string | object): this;
        explain(explain: boolean): this;
        map<U>(callback: (currentObject: T, index: number, query: Query) => PromiseLike<U> | U, options?: Query.BatchOptions): Promise<U[]>;
        reduce(callback: (accumulator: T, currentObject: T, index: number) => PromiseLike<T> | T, initialValue?: undefined, options?: Query.BatchOptions): Promise<T>;
        reduce<U>(callback: (accumulator: U, currentObject: T, index: number) => PromiseLike<U> | U, initialValue: U, options?: Query.BatchOptions): Promise<U>;
        filter(callback: (currentObject: T, index: number, query: Query) => PromiseLike<boolean> | boolean, options?: Query.BatchOptions): Promise<T[]>;
        endsWith<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, suffix: string): this;
        equalTo<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, value: T['attributes'][K] | (T['attributes'][K] extends Object ? Pointer : never)): this;
        exclude<K extends (keyof T['attributes'] | keyof BaseAttributes)>(...keys: K[]): this;
        exists<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K): this;
        find(options?: Query.FindOptions): Promise<T[]>;
        first(options?: Query.FirstOptions): Promise<T | undefined>;
        fromNetwork(): this;
        fromLocalDatastore(): this;
        fromPin(): this;
        fromPinWithName(name: string): this;
        cancel(): this;
        fullText<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, value: string, options?: Query.FullTextOptions): this;
        get(objectId: string, options?: Query.GetOptions): Promise<T>;
        greaterThan<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, value: T['attributes'][K]): this;
        greaterThanOrEqualTo<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, value: T['attributes'][K]): this;
        include<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K | K[]): this;
        includeAll(): Query<T>;
        lessThan<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, value: T['attributes'][K]): this;
        lessThanOrEqualTo<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, value: T['attributes'][K]): this;
        limit(n: number): Query<T>;
        matches<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, regex: RegExp, modifiers?: string): this;
        matchesKeyInQuery<U extends Object, K extends keyof T['attributes'], X extends Extract<keyof U['attributes'], string>>(key: K, queryKey: X, query: Query<U>): this;
        matchesQuery<U extends Object, K extends keyof T['attributes']>(key: K, query: Query<U>): this;
        near<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, point: GeoPoint): this;
        notContainedIn<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, values: Array<T['attributes'][K]>): this;
        notEqualTo<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, value: T['attributes'][K]): this;
        polygonContains<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, point: GeoPoint): this;
        select<K extends (keyof T['attributes'] | keyof BaseAttributes)>(...keys: K[]): this;
        skip(n: number): Query<T>;
        sortByTextScore(): this;
        startsWith<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, prefix: string): this;
        subscribe(): Promise<LiveQuerySubscription>;
        toJSON(): any;
        withJSON(json: any): this;
        withinGeoBox<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, southwest: GeoPoint, northeast: GeoPoint): this;
        withinKilometers<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, point: GeoPoint, maxDistance: number): this;
        withinMiles<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, point: GeoPoint, maxDistance: number): this;
        withinPolygon<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, points: number[][]): this;
        withinRadians<K extends (keyof T['attributes'] | keyof BaseAttributes)>(key: K, point: GeoPoint, maxDistance: number): this;
    }

    namespace Query {
        interface EachOptions extends SuccessFailureOptions, ScopeOptions { }
        interface CountOptions extends SuccessFailureOptions, ScopeOptions { }
        interface FindOptions extends SuccessFailureOptions, ScopeOptions { }
        interface FirstOptions extends SuccessFailureOptions, ScopeOptions { }
        interface GetOptions extends SuccessFailureOptions, ScopeOptions { }

        // According to http://docs.parseplatform.org/rest/guide/#aggregate-queries
        interface AggregationOptions {
            group?: { objectId?: string; [key: string]: any };
            match?: { [key: string]: any };
            project?: { [key: string]: any };
            limit?: number;
            skip?: number;
            // Sort documentation https://docs.mongodb.com/v3.2/reference/operator/aggregation/sort/#pipe._S_sort
            sort?: { [key: string]: 1 | -1 };
            // Sample documentation: https://docs.mongodb.com/v3.2/reference/operator/aggregation/sample/
            sample?: { size: number };
        }

        // According to https://parseplatform.org/Parse-SDK-JS/api/2.1.0/Parse.Query.html#fullText
        interface FullTextOptions {
            language?: string;
            caseSensitive?: boolean;
            diacriticSensitive?: boolean;
        }

        interface BatchOptions extends FullOptions {
            batchSize?: number;
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
     * ```
     * subscription.on('open', () => {});
     * ```
     * ---
     * `create` - when a new ParseObject is created and it fulfills the ParseQuery you subscribe,
     * you'll get this event. The object is the ParseObject which is created.
     *
     * ```
     * subscription.on('create', (object: Parse.Object) => {});
     * ```
     * ---
     * `update` event - when an existing ParseObject which fulfills the ParseQuery you subscribe
     * is updated (The ParseObject fulfills the ParseQuery before and after changes),
     * you'll get this event. The object is the ParseObject which is updated.
     * Its content is the latest value of the ParseObject.
     *
     * ```
     * subscription.on('update', (object: Parse.Object) => {});
     * ```
     * ---
     * `enter` event - when an existing ParseObject's old value doesn't fulfill the ParseQuery
     * but its new value fulfills the ParseQuery, you'll get this event. The object is the
     * ParseObject which enters the ParseQuery. Its content is the latest value of the ParseObject.
     *
     * ```
     * subscription.on('enter', (object: Parse.Object) => {});
     * ```
     * ---
     * `update` event - when an existing ParseObject's old value fulfills the ParseQuery but its new value
     * doesn't fulfill the ParseQuery, you'll get this event. The object is the ParseObject
     * which leaves the ParseQuery. Its content is the latest value of the ParseObject.
     *
     * ```
     * subscription.on('leave', (object: Parse.Object) => {});
     * ```
     * ---
     * `delete` event - when an existing ParseObject which fulfills the ParseQuery is deleted, you'll
     * get this event. The object is the ParseObject which is deleted.
     *
     * ```
     * subscription.on('delete', (object: Parse.Object) => {});
     * ```
     * ---
     * `close` event - when the client loses the WebSocket connection to the LiveQuery
     * server and we stop receiving events, you'll get this event.
     *
     * ```
     * subscription.on('close', () => {});
     * ```
     */
    class LiveQuerySubscription extends EventEmitter {
        /**
         * Creates an instance of LiveQuerySubscription.
         *
         * @param id
         * @param query
         * @param [sessionToken]
         */
        constructor(id: string, query: string, sessionToken?: string);

        on(event: 'open' | 'create' | 'update' | 'enter' | 'leave' | 'delete' | 'close', listener: (object: Object) => void): this;

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
     * A Parse.Role is a local representation of a role persisted to the Parse
     * cloud.
     */
    interface Role<T extends Attributes = Attributes> extends Object<T> {
        getRoles(): Relation<Role, Role>;
        getUsers<U extends User>(): Relation<Role, U>;
        getName(): string;
        setName(name: string, options?: SuccessFailureOptions): any;
    }
    interface RoleConstructor extends ObjectStatic {
        new <T extends Attributes>(name: string, acl: ACL): Role<Partial<T>>;
        new(name: string, acl: ACL): Role;
    }
    const Role: RoleConstructor;

    class Config {
        static get(options?: UseMasterKeyOption): Promise<Config>;
        static current(): Config;
        static save(attr: any, options?: { [attr: string]: boolean }): Promise<Config>;

        get(attr: string): any;
        escape(attr: string): any;
    }

    interface Session<T extends Attributes = Attributes> extends Object<T> {
        getSessionToken(): string;
        isCurrentSessionRevocable(): boolean;
    }
    interface SessionConstructor extends ObjectStatic {
        new <T extends Attributes>(attributes: T): Session<T>;
        new(): Session;

        current(): Promise<Session>;
    }
    const Session: SessionConstructor;

    /**
     *
     * <p>A Parse.User object is a local representation of a user persisted to the
     * Parse cloud. This class is a subclass of a Parse.Object, and retains the
     * same functionality of a Parse.Object, but also extends it with various
     * user specific methods, like authentication, signing up, and validation of
     * uniqueness.</p>
     */
    interface User<T extends Attributes = Attributes> extends Object<T> {
        signUp(attrs?: any, options?: SignUpOptions): Promise<this>;
        logIn(options?: FullOptions): Promise<this>;
        authenticated(): boolean;
        isCurrent(): boolean;

        getEmail(): string | undefined;
        setEmail(email: string, options?: SuccessFailureOptions): boolean;

        getUsername(): string | undefined;
        setUsername(username: string, options?: SuccessFailureOptions): boolean;

        setPassword(password: string, options?: SuccessFailureOptions): boolean;
        getSessionToken(): string;

        linkWith: (provider: string | AuthProvider, options: { authData?: AuthData }, saveOpts?: FullOptions) => Promise<this>;
        _linkWith: (provider: string | AuthProvider, options: { authData?: AuthData }, saveOpts?: FullOptions) => Promise<this>;
        _isLinked: (provider: string | AuthProvider) => boolean;
        _unlinkFrom: (provider: string | AuthProvider, options?: FullOptions) => Promise<this>;
    }
    interface UserConstructor extends ObjectStatic {
        new <T extends Attributes>(attributes: T): User<T>;
        new(attributes?: Attributes): User;

        allowCustomUserClass(isAllowed: boolean): void;
        become<T extends User>(sessionToken: string, options?: UseMasterKeyOption): Promise<T>;
        current<T extends User>(): T | undefined;
        currentAsync<T extends User>(): Promise<T | null>;
        signUp<T extends User>(username: string, password: string, attrs: any, options?: SignUpOptions): Promise<T>;
        logIn<T extends User>(username: string, password: string, options?: FullOptions): Promise<T>;
        logOut<T extends User>(): Promise<T>;
        requestPasswordReset<T extends User>(email: string, options?: SuccessFailureOptions): Promise<T>;
        extend(protoProps?: any, classProps?: any): any;
        hydrate<T extends User>(userJSON: any): Promise<T>;
        enableUnsafeCurrentUser(): void;
        logInWith<T extends User>(provider: string | AuthProvider, options: { authData?: AuthData }, saveOpts?: FullOptions): Promise<T>;
        _registerAuthenticationProvider: (provider: AuthProvider) => void;
    }
    const User: UserConstructor;

    /**
     * A Parse.Schema object is for handling schema data from Parse.
     * All the schemas methods require MasterKey.
     *
     * @param className Parse Class string
     *
     * https://parseplatform.org/Parse-SDK-JS/api/master/Parse.Schema.html
     *
     * ```
     * const schema = new Parse.Schema('MyClass');
     * schema.addString('field');
     * schema.addIndex('index_name', { field: 1 });
     * schema.save();
     * ```
     */
    class Schema<T extends Object = any> {
        constructor(className: string);

        /**
         * Static method to get all schemas
         *
         * @return A promise that is resolved with the result when
         * the query completes.
         */
        static all(): Promise<Schema[]>;

        addArray(key: Schema.AttrType<T, any[]>, options?: Schema.FieldOptions<any[]>): this;
        addBoolean(key: Schema.AttrType<T, boolean>, options?: Schema.FieldOptions<boolean>): this;
        addDate(key: Schema.AttrType<T, Date>, options?: Schema.FieldOptions<Date>): this;
        addField<T extends Schema.TYPE = any>(name: string, type?: T, options?: Schema.FieldOptions): this;
        addFile(key: Schema.AttrType<T, File>, options?: Schema.FieldOptions<File>): this;
        addGeoPoint(key: Schema.AttrType<T, GeoPoint>, options?: Schema.FieldOptions<GeoPoint>): this;

        /**
         * Adding an Index to Create / Update a Schema
         * @param name Name of the field that will be created on Parse
         * @param index `{ 'field': value }` where `field` should exist in the schema before using addIndex.
         * @return Returns the schema, so you can chain this call.
         * @example
         * ```
         * schema.addIndex('index_name', {'field': 1});
         * ```
         */
        addIndex(name: string, index: Schema.Index): this;

        addNumber(key: Schema.AttrType<T, number>, options?: Schema.FieldOptions<number>): this;

        addObject(key: Schema.AttrType<T, object>, options?: Schema.FieldOptions<object>): this;

        /**
         * Adding Pointer Field
         * @param name Name of the field that will be created on Parse
         * @param targetClass  Name of the target Pointer Class
         * @return Returns the schema, so you can chain this call.
         */
        addPointer(key: Schema.AttrType<T, Object | Pointer>, targetClass: string, options?: Schema.FieldOptions<Pointer>): this;

        addPolygon(key: Schema.AttrType<T, Polygon>, options?: Schema.FieldOptions<Polygon>): this;

        /**
         * Adding Relation Field
         * @param name Name of the field that will be created on Parse
         * @param targetClass  Name of the target Pointer Class
         * @return Returns the schema, so you can chain this call.
         */
        addRelation(key: Schema.AttrType<T, Relation>, targetClass: string, options?: Schema.FieldOptions<Relation>): this;

        addString(key: Schema.AttrType<T, string>, options?: Schema.FieldOptions<string>): this;

        /**
         * Removing a Schema from Parse Can only be used on Schema without objects
         * @returns A promise that is resolved with the result when the query completes.
         */
        // @TODO Fix Promise<any>
        delete(): Promise<any>;

        /**
         * Deleting a Field to Update on a Schema
         * @param name Name of the field
         * @return Returns the schema, so you can chain this call.
         */
        deleteField(name: string): this;

        /**
         * Deleting a Index Field to Update on a Schema
         * @param name Name of the index field
         * @return Returns the schema, so you can chain this call.
         */
        deleteIndex(name: string): this;

        /**
         * Get the Schema from Parse
         */
        get(): Promise<Schema>;

        /**
         * Removes all objects from a Schema (class) in  EXERCISE CAUTION, running this will delete all objects for this schema and cannot be reversed
         */
        // TODO Fix Promise<any>
        purge(): Promise<any>;

        /**
         * Create a new Schema on Parse
         */
        save(): Promise<Schema>;

        /**
         * Sets Class Level Permissions when creating / updating a Schema.
         * EXERCISE CAUTION, running this may override CLP for this schema and cannot be reversed
         */
        setCLP(clp: Schema.CLP): this;

        /**
         * Update a Schema on Parse
         */
        update(): Promise<Schema>;
    }

    namespace Schema {
        type TYPE = 'String' | 'Number' | 'Boolean' | 'Date' | 'File' | 'GeoPoint' | 'Polygon' | 'Array' | 'Object' | 'Pointer' | 'Relation';
        type FieldType = string | number | boolean | Date | File | GeoPoint | Polygon | any[] | object | Pointer | Relation;
        type AttrType<T extends Object, V> = Extract<{ [K in keyof T['attributes']]: T['attributes'][K] extends V ? K : never }[keyof T['attributes']], string>;

        interface FieldOptions
            <T extends FieldType = any> {
            required?: boolean;
            defaultValue?: T;
        }

        interface Index {
            [fieldName: string]: TYPE;
        }

        /**
         * The id of a `_User` object or a role name prefixed by `'role:'`.
         * @example
         *  '*': false, // public
         *  requiresAuthentication: false,
         * 'role:Admin': true,
         *  'idOfASpecificUser': true
         */
        interface CLPField {
            '*'?: boolean;
            requiresAuthentication?: boolean;
            /** `role:Admin` */
            [userIdOrRoleName: string]: boolean | undefined;
        }

        interface CLP {
            find?: CLPField;
            get?: CLPField;
            count?: CLPField;
            create?: CLPField;
            update?: CLPField;
            delete?: CLPField;
            addField?: CLPField;
            /** Array of fields that point to a `_User` object's ID or a `Role` object's name */
            readUserFields?: string[];
            /** Array of fields that point to a `_User` object's ID or a `Role` object's name */
            writeUserFields?: string[];
        }
    }

    namespace Analytics {
        function track(name: string, dimensions: any): Promise<any>;
    }

    /**
     * Provides a set of utilities for using Parse with Facebook.
     * Provides a set of utilities for using Parse with Facebook.
     */
    namespace FacebookUtils {
        function init(options?: any): void;
        function isLinked(user: User): boolean;
        function link(user: User, permissions: any, options?: SuccessFailureOptions): void;
        function logIn(permissions: any, options?: FullOptions): void;
        function unlink(user: User, options?: SuccessFailureOptions): void;
    }

    /**
     * Contains functions for calling and declaring
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

        interface Params {
            [key: string]: any;
        }

        interface FunctionRequest<T extends Params = Params> {
            installationId?: string;
            master?: boolean;
            params: T;
            user?: User;
        }

        interface Cookie {
            name?: string;
            options?: CookieOptions;
            value?: string;
        }

        interface TriggerRequest {
            installationId?: string;
            master?: boolean;
            user?: User;
            ip: string;
            headers: any;
            triggerName: string;
            log: any;
            object: Object;
            original?: Object;
        }

        interface AfterSaveRequest extends TriggerRequest {
            context: object;
        }
        interface AfterDeleteRequest extends TriggerRequest { }      // tslint:disable-line no-empty-interface
        interface BeforeDeleteRequest extends TriggerRequest { }     // tslint:disable-line no-empty-interface
        interface BeforeSaveRequest extends TriggerRequest {
            context: object;
        }

        interface FileTriggerRequest extends TriggerRequest {
            file: File;
            fileSize: number;
            contentLength: number;
        }

        // Read preference describes how MongoDB driver route read operations to the members of a replica set.
        enum ReadPreferenceOption {
            Primary = 'PRIMARY',
            PrimaryPreferred = 'PRIMARY_PREFERRED',
            Secondary = 'SECONDARY',
            SecondaryPreferred = 'SECONDARY_PREFERRED',
            Nearest = 'NEAREST',
        }

        interface BeforeFindRequest extends TriggerRequest {
            query: Query;
            count: boolean;
            isGet: boolean;
            readPreference?: ReadPreferenceOption;
        }

        interface AfterFindRequest extends TriggerRequest {
            objects: Object[];
        }

        function afterDelete(arg1: any, func?: (request: AfterDeleteRequest) => Promise<void> | void): void;
        function afterSave(arg1: any, func?: (request: AfterSaveRequest) => Promise<void> | void): void;
        function beforeDelete(arg1: any, func?: (request: BeforeDeleteRequest) => Promise<void> | void): void;
        function beforeSave(arg1: any, func?: (request: BeforeSaveRequest) => Promise<void> | void): void;
        function beforeFind(
            arg1: any,
            func?: (request: BeforeFindRequest) => Promise<Query> | Promise<void> | Query | void
        ): void;
        function afterFind(arg1: any, func?: (request: AfterFindRequest) => any): void;

        function beforeLogin(func?: (request: TriggerRequest) => PromiseLike<void> | void): void;
        function afterLogin(func?: (request: TriggerRequest) => PromiseLike<void> | void): void;
        function afterLogout(func?: (request: TriggerRequest) => PromiseLike<void> | void): void;

        function beforeSaveFile(func?: (request: FileTriggerRequest) => PromiseLike<File> | void): void;
        function afterSaveFile(func?: (request: FileTriggerRequest) => PromiseLike<void> | void): void;
        function beforeDeleteFile(func?: (request: FileTriggerRequest) => PromiseLike<void> | void): void;
        function afterDeleteFile(func?: (request: FileTriggerRequest) => PromiseLike<void> | void): void;

        function define(name: string, func: (request: FunctionRequest) => any): void;
        function define<T extends () => any>(
            name: string,
            func: (request: FunctionRequest<{}>) => Promise<ReturnType<T>> | ReturnType<T>
        ): void;
        function define<T extends (
            param: { [P in keyof Parameters<T>[0]]: Parameters<T>[0][P] }
        ) => any>(
            name: string,
            func: (request: FunctionRequest<Parameters<T>[0]>) => Promise<ReturnType<T>> | ReturnType<T>
        ): void;
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
        function run(name: string, data?: Params, options?: RunOptions): Promise<any>;
        function run<T extends () => any>(
            name: string,
            data?: null,
            options?: RunOptions
        ): Promise<ReturnType<T>>;
        function run<T extends (
            param: { [P in keyof Parameters<T>[0]]: Parameters<T>[0][P] }
        ) => any>(
            name: string,
            data: Parameters<T>[0],
            options?: RunOptions
        ): Promise<ReturnType<T>>;
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
             * The method of the request (i.e GET, POST, etc).
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
        interface BaseOperation {
            objects(): any[];
        }

        interface Add extends BaseOperation {
            toJSON(): any;
        }

        interface AddUnique extends BaseOperation {
            toJSON(): any;
        }

        interface Increment {
            amount: number;
            toJSON(): any;
        }

        interface Relation {
            added(): Object[];
            removed: Object[];
            toJSON(): any;
        }

        interface Set {
            value(): any;
            toJSON(): any;
        }

        interface Unset {
            toJSON(): any;
        }
    }

    /**
     * Contains functions to deal with Push in Parse
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
     * @param applicationId Your Parse Application ID.
     * @param javaScriptKey (optional) Your Parse JavaScript Key (Not needed for parse-server)
     * @param masterKey (optional) Your Parse Master Key. (Node.js only!)
     */
    function initialize(applicationId: string, javaScriptKey?: string, masterKey?: string): void;

    /**
     * Use this to set custom headers
     * The headers will be sent with every parse request
     */
    namespace CoreManager {
        function set(key: string, value: any): void;
        function get(key: string): void;
    }

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

    /**
     * Call this method to set your LocalDatastoreStorage engine
     * If using React-Native use {@link Parse.setAsyncStorage Parse.setAsyncStorage()}
     * @param controller a data storage.
     */
    function setLocalDatastoreController(controller: any): void;

    /**
     * Enable the current user encryption.
     * This must be called before login any user.
     */
    function enableEncryptedUser(): void;

    /**
     * Flag that indicates whether Encrypted User is enabled.
     */
    function isEncryptedUserEnabled(): boolean;
}
}

export = Parse;
