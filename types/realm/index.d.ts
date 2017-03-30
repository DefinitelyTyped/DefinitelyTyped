// Type definitions for realm-js 1.0
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

    interface SyncConfiguration {
        user: User;
        url: string;
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
        sync?: SyncConfiguration;
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
     * Iterator
     * @see { @link https://realm.io/docs/javascript/latest/api/Realm.Collection.html#~Iterator }
     */
    interface IteratorResult<T> {
        done: boolean;
        value?: T;
    }

    interface Iterator<T> {
        next(done: boolean, value?: any): IteratorResult<T>;
        [Symbol.iterator](): any;
    }

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
        [Symbol.iterator](): Iterator<T>;

        /**
         * @returns Results
         */
        snapshot(): Results<T>;

        /**
         * @returns Iterator<any>
         */
        entries(): Iterator<any>;

        /**
         * @returns Iterator<any>
         */
        keys(): Iterator<any>;

        /**
         * @returns Iterator<any>
         */
        values(): Iterator<any>;

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
        find(callback: (object: any, index?: any, collection?: any) => void, thisArg?: any): T | null | undefined;

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
     * User
     * @see { @link https://realm.io/docs/javascript/latest/api/Realm.Sync.User.html }
     */
    interface User {
        all: any;
        current: User;
        readonly identity: string;
        readonly isAdmin: boolean;
        readonly server: string;
        readonly token: string;
        adminUser(adminToken: string): User;
        login(server: string, username: string, password: string, callback: (error: any, user: any) => void): void;
        loginWithProvider(server: string, provider: string, providerToken: string, callback: (error: any, user: any) => void): void;
        register(server: string, username: string, password: string, callback: (error: any, user: any) => void): void;
        registerWithProvider(server: string, provider: string, providerToken: string, callback: (error: any, user: any) => void): void;
        logout(): void;
        openManagementRealm(): Realm;
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
        readonly changes: any;
        readonly oldRealm: Realm;
        readonly path: string;
        readonly realm: Realm;
    }

    /**
     * LogLevel
     * @see { @link https://realm.io/docs/javascript/latest/api/Realm.Sync.html#~LogLevel }
     */
    type LogLevelType = string | 'error' | 'info' | 'defug';

    /**
     * Sync
     * @see { @link https://realm.io/docs/javascript/latest/api/Realm.Sync.html }
     */
    interface Sync {
        User: User;
        Session: Session;
        AuthError: AuthError;
        ChangeEvent: ChangeEvent;
        addListener(serverURL: string, adminUser: User, regex: string, name: string, changeCallback: () => void): void;
        removeAllListeners(name?: string[]): void;
        removeListener(regex: string, name: string, changeCallback: () => void): void;
        setLogLevel(logLevel: LogLevelType): void;
    }
}

declare class Realm {
    static defaultPath: string;

    readonly path: string;

    readonly readOnly: boolean;

    readonly schema: Realm.ObjectSchema[];

    readonly schemaVersion: number;

    static Sync: Realm.Sync;

    syncSession: Realm.Session;

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
