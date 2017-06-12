// Type definitions for realm-js 1.3.1
// Project: https://github.com/realm/realm-js
// Definitions by: Akim <https://github.com/Akim95>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare namespace Realm {
    /**
     * PropertyType
     * @see { @link https://realm.io/docs/javascript/latest/api/Realm.html#~PropertyType }
     */
    type PropertyType = string | 'bool' | 'int' | 'float' | 'double' | 'string' | 'data' | 'date' | 'list';

    /**
     * ObjectSchemaProperty
     * @see { @link https://realm.io/docs/javascript/latest/api/Realm.html#~ObjectSchemaProperty }
     */
    interface ObjectSchemaProperty {
        type: PropertyType;
        objectType?: string;
        default?: any;
        optional?: boolean;
        indexed?: boolean;
    }

    // properties types
    interface PropertiesTypes {
        [keys: string]: PropertyType | ObjectSchemaProperty;
    }

    /**
     * ObjectSchema
     * @see { @link https://realm.io/docs/javascript/latest/api/Realm.html#~ObjectSchema }
     */
    interface ObjectSchema {
        name: string;
        primaryKey?: string;
        properties: PropertiesTypes;
    }

    /**
     * ObjectClass
     * @see { @link https://realm.io/docs/javascript/latest/api/Realm.html#~ObjectClass }
     */
    interface ObjectClass {
        schema: ObjectSchema;
    }

    /**
     * ObjectType
     * @see { @link https://realm.io/docs/javascript/latest/api/Realm.html#~ObjectType }
     */
    interface ObjectType {
        type: ObjectClass;
    }

    /**
     * realm configuration
     * @see { @link https://realm.io/docs/javascript/latest/api/Realm.html#~Configuration }
     */
    interface Configuration {
        encryptionKey?: any;
        migration?: any;
        path?: string;
        readOnly?: boolean;
        schema?: ObjectClass[] | ObjectSchema[];
        schemaVersion?: number;
        sync?: Realm.Sync.SyncConfiguration;
    }

    // object props type
    interface ObjectPropsType {
        [keys: string]: any;
    }

    /**
     * SortDescriptor
     * @see { @link https://realm.io/docs/javascript/latest/api/Realm.Collection.html#~SortDescriptor }
     */
    type SortDescriptor = string | [string, boolean] | any[];

    /**
     * Collection
     * @see { @link https://realm.io/docs/javascript/latest/api/Realm.Collection.html }
     */
    interface Collection<T> {
        readonly length: number;

        /**
         * @returns boolean
         */
        isValid(): boolean;

        /**
         * @param  {string} query
         * @param  {any[]} ...arg
         * @returns Results
         */
        filtered(query: string, ...arg: any[]): Results<T>;

        /**
         * @param  {string|SortDescriptor} descriptor
         * @param  {boolean} reverse?
         * @returns Results
         */
        sorted(descriptor: string | SortDescriptor, reverse?: boolean): Results<T>;

        /**
         * @returns Iterator
         */
        [Symbol.iterator](): IterableIterator<T>;

        /**
         * @returns Results
         */
        snapshot(): Results<T>;

        /**
         * @returns Iterator<any>
         */
        entries(): Iterator<[number, T]>;

        /**
         * @returns Iterator<any>
         */
        keys(): Iterator<any>;

        /**
         * @returns Iterator<any>
         */
        values(): IterableIterator<T>;

        /**
         * @param  {string[]} separator?
         * @returns string
         */
        join(separator?: string[]): string;

        /**
         * @param  {number} start?
         * @param  {number} end?
         * @returns T
         */
        slice(start?: number, end?: number): T[];

        /**
         * @param  {(object:any,index?:any,collection?:any)=>void} callback
         * @param  {any} thisArg?
         * @returns T
         */
        find(callback: (object: T, index?: any, collection?: any) => void, thisArg?: any): T | null | undefined;

        /**
         * @param  {(object:any,index?:number,collection?:any)=>void} callback
         * @param  {any} thisArg?
         * @returns number
         */
        findIndex(callback: (object: any, index?: number, collection?: any) => void, thisArg?: any): number;

        /**
         * @param  {(object:T,index?:number,collection?:any)=>void} callback
         * @param  {any} thisArg?
         * @returns void
         */
        forEach(callback: (object: T, index?: number, collection?: any) => void, thisArg?: any): void;

        /**
         * @param  {(object:T,index?:number,collection?:any)=>void} callback
         * @param  {any} thisArg?
         * @returns boolean
         */
        every(callback: (object: T, index?: number, collection?: any) => void, thisArg?: any): boolean;

        /**
         * @param  {(object:T,index?:number,collection?:any)=>void} callback
         * @param  {any} thisArg?
         * @returns boolean
         */
        some(callback: (object: T, index?: number, collection?: any) => void, thisArg?: any): boolean;

        /**
         * @param  {(object:T,index?:number,collection?:any)=>void} callback
         * @param  {any} thisArg?
         * @returns any
         */
        map(callback: (object: T, index?: number, collection?: any) => void, thisArg?: any): any[];

        /**
         * @param  {(previousValue:T,object?:T,index?:number,collection?:any)=>void} callback
         * @param  {any} initialValue?
         * @returns any
         */
        reduce(callback: (previousValue: T, object?: T, index?: number, collection?: any) => void, initialValue?: any): any;

        /**
         * @param  {(previousValue:T,object?:T,index?:any,collection?:any)=>void} callback
         * @param  {any} initialValue?
         * @returns any
         */
        reduceRight(callback: (previousValue: T, object?: T, index?: any, collection?: any) => void, initialValue?: any): any;

        /**
         * @param  {(collection:any,changes:any)=>void} callback
         * @returns void
         */
        addListener(callback: (collection: any, changes: any) => void): void;

        /**
         * @returns void
         */
        removeAllListeners(): void;

        /**
         * @param  {()=>void} callback
         * @returns void
         */
        removeListener(callback: () => void): void;
    }

    /**
     * Object
     * @see { @link https://realm.io/docs/javascript/latest/api/Realm.Object.html }
     */
    interface Object {
        /**
         * @returns boolean
         */
        isValid(): boolean;
    }

    /**
     * List
     * @see { @link https://realm.io/docs/javascript/latest/api/Realm.List.html }
     */
    interface List<T> extends Collection<T> {
        /**
         * @returns T
         */
        pop(): T | null | undefined;

        /**
         * @param  {T} object
         * @returns number
         */
        push(object: T): number;

        /**
         * @returns T
         */
        shift(): T | null | undefined;

        /**
         * @param  {number} index
         * @param  {number} count?
         * @param  {any} object?
         * @returns T
         */
        splice(index: number, count?: number, object?: any): T[];

        /**
         * @param  {T} object
         * @returns number
         */
        unshift(object: T): number;
    }

    /**
     * Results
     * @see { @link https://realm.io/docs/javascript/latest/api/Realm.Results.html }
     */
    type Results<T> = Collection<T>;



    /**
     * LogLevel
     * @see { @link https://realm.io/docs/javascript/latest/api/Realm.Sync.html#~LogLevel }
     */
    type LogLevelType = 'error' | 'info' | 'debug';
}

/**
 * Sync
 * @see { @link https://realm.io/docs/javascript/latest/api/Realm.Sync.html }
 */
declare namespace Realm.Sync {

    /**
     * User
     * @see { @link https://realm.io/docs/javascript/latest/api/Realm.Sync.User.html }
     */
    class User {
        static readonly all: {[identity: string]: User};
        static readonly current: User;
        readonly identity: string;
        readonly isAdmin: boolean;
        readonly server: string;
        readonly token: string;
        static adminUser(adminToken: string): User;
        static login(server: string, username: string, password: string, callback: (error: any, user: User) => void): void;
        static loginWithProvider(server: string, provider: string, providerToken: string, callback: (error: any, user: User) => void): void;
        static register(server: string, username: string, password: string, callback: (error: any, user: User) => void): void;
        static registerWithProvider(server: string, options: { provider: string, providerToken: string, userInfo: any}, callback: (error: Error | null, user: User | null) => void): void;
        logout(): void;
        openManagementRealm(): Realm;
    }

    interface SyncConfiguration {
        user: User;
        url: string;
    }

    /**
    * Session
    * @see { @link https://realm.io/docs/javascript/latest/api/Realm.Sync.Session.html }
    */
    interface Session {
        readonly config: any;
        readonly state: string;
        readonly url: string;
        readonly user: User;
    }

    /**
    * AuthError
    * @see { @link https://realm.io/docs/javascript/latest/api/Realm.Sync.AuthError.html }
    */
    interface AuthError {
        readonly code: number;
        readonly type: string;
    }

    /**
     * ChangeEvent
     * @see { @link https://realm.io/docs/javascript/latest/api/Realm.Sync.ChangeEvent.html }
     */
    interface ChangeEvent {
        readonly changes: { [object_type: string]: { insertions: number[], deletions: number[], modifications: number[] } };
        readonly oldRealm: Realm;
        readonly path: string;
        readonly realm: Realm;
    }

    function addListener(serverURL: string, adminUser: Realm.Sync.User, regex: string, name: string, changeCallback: () => void): void;
    function removeAllListeners(name?: string[]): void;
    function removeListener(regex: string, name: string, changeCallback: () => void): void;
    function setLogLevel(logLevel: LogLevelType): void;

    type Instruction = {
        type: 'INSERT' | 'SET' | 'DELETE' | 'CLEAR' | 'LIST_SET' | 'LIST_INSERT' | 'LIST_ERASE' | 'LIST_CLEAR' | 'ADD_TYPE' | 'ADD_PROPERTIES' | 'CHANGE_IDENTITY'
        object_type: string,
            identity: string,
            values: any | undefined
            list_index: any | undefined
            object_identity: any | undefined
            new_identity: any | undefined,
            property: any | undefined,
            properties: any | undefined,
            primary_key: string | undefined
    }

    class Adapter {
        constructor(
            local_path: string,
            server_url: string,
            admin_user: User,
            regex: string,
            change_callback: Function
        )

        /**
         * Advance the to the next transaction indicating that you are done processing the current instructions for the given Realm.
         * @param path the path for the Realm to advance
         */
        advance(path: string): void;
        close(): void;
        current(path: string): Array<Instruction>;
        realmAtPath(path: string): Realm
    }
}

declare class Realm {
    static defaultPath: string;

    readonly path: string;

    readonly readOnly: boolean;

    readonly schema: Realm.ObjectSchema[];

    readonly schemaVersion: number;

    syncSession: Realm.Sync.Session;

    /**
     * @param  {string} path
     * @param  {any} encryptionKey?
     * @returns number
     */
    static schemaVersion(path: string, encryptionKey?: any): number;

    /**
     * @param  {Realm.Configuration} config?
     */
    constructor(config?: Realm.Configuration);

    /**
     * @returns void
     */
    close(): void;

    /**
     * @param  {string|Realm.ObjectType} type
     * @param  {T&Realm.ObjectPropsType} properties
     * @param  {boolean} update?
     * @returns T
     */
    create<T>(type: string | Realm.ObjectType, properties: T & Realm.ObjectPropsType, update?: boolean): T;

    /**
     * @param  {Realm.Object|Realm.Object[]|Realm.List<any>|Realm.Results<any>|any} object
     * @returns void
     */
    delete(object: Realm.Object | Realm.Object[] | Realm.List<any> | Realm.Results<any> | any): void;

    /**
     * @returns void
     */
    deleteAll(): void;

    /**
     * @param  {string|Realm.ObjectType} type
     * @param  {number|string} key
     * @returns T
     */
    objectForPrimaryKey<T>(type: string | Realm.ObjectType, key: number | string): T | void;

    /**
     * @param  {string|Realm.ObjectType} type
     * @returns Realm
     */
    objects<T>(type: string | Realm.ObjectType): Realm.ObjectType & Realm.Results<T>;

    /**
     * @param  {string} name
     * @param  {()=>void} callback
     * @returns void
     */
    addListener(name: string, callback: () => void): void;

    /**
     * @param  {string} name
     * @param  {()=>void} callback
     * @returns void
     */
    removeListener(name: string, callback: () => void): void;

    /**
     * @param  {string[]} name?
     * @returns void
     */
    removeAllListeners(name?: string[]): void;

    /**
     * @param  {()=>void} callback
     * @returns void
     */
    write(callback: () => void): void;
}

export = Realm;
