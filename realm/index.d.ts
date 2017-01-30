// Type definitions for realm-js 0.14
// Project: https://github.com/realm/realm-js
// Definitions by: Akim <https://github.com/Akim95>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Realm {
    /**
    * PropertyType
    * @see { @link https://realm.io/docs/react-native/latest/api/Realm.html#~PropertyType }
    */
    export type PropertyType = string | 'bool' | 'int' | 'float' | 'double' | 'string' | 'data' | 'date' | 'list';

    /**
    * ObjectSchemaProperty
    * @see { @link https://realm.io/docs/react-native/latest/api/Realm.html#~ObjectSchemaProperty }
    */
    export interface ObjectSchemaProperty {
        type: PropertyType;
        objectType?: string;
        default?: any;
        optional?: boolean;
        indexed?: boolean;
    }

    // properties types
    export interface PropertiesTypes {
        [keys: string]: PropertyType | ObjectSchemaProperty;
    }

    /**
    * ObjectSchema
    * @see { @link https://realm.io/docs/react-native/latest/api/Realm.html#~ObjectSchema }
    */
    export interface ObjectSchema {
        name: string;
        primaryKey?: string;
        properties: PropertiesTypes;
    }

    /**
    * ObjectClass
    * @see { @link https://realm.io/docs/react-native/latest/api/Realm.html#~ObjectClass }
    */
    export interface ObjectClass {
        schema: ObjectSchema;
    }

    /**
    * ObjectType
    * @see { @link https://realm.io/docs/react-native/latest/api/Realm.html#~ObjectType }
    */
    export interface ObjectType {
        type: ObjectClass;
    }

    /**
    * realm configuration
    * @see { @link https://realm.io/docs/react-native/latest/api/Realm.html#~Configuration }
    */
    export interface Configuration {
        encryptionKey?: any;
        migration?: any;
        path?: string;
        readOnly?: boolean;
        schema?: ObjectClass[] | ObjectSchema[];
        schemaVersion?: number;
    }

    // object props type
    export interface ObjectPropsType {
        [keys: string]: any;
    }

    /**
    * SortDescriptor
    * @see { @link https://realm.io/docs/react-native/latest/api/Realm.Collection.html#~SortDescriptor }
    */
    export type SortDescriptor = string | [string, boolean] | any[];

    /**
     * Iterator
     * @see { @link https://realm.io/docs/react-native/latest/api/Realm.Collection.html#~Iterator }
     */
    export interface IteratorResult<T> {
        done: boolean;
        value?: T;
    }

    export interface Iterator<T> {
        next(value?: any): IteratorResult<T>;
    }

    /**
    * Collection
    * @see { @link https://realm.io/docs/react-native/latest/api/Realm.Collection.html }
    */
    export interface Collection<T> {
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
         * @returns Iterator<T|any>
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
         * @returns T[] | Object[]
         */
        slice(start?: number, end?: number): T[];

        /**
         * @param  {(object:any,index?:any,collection?:any)=>void} callback
         * @param  {any} thisArg?
         * @returns Object|void
         */
        find(callback: (object: any, index?: any, collection?: any) => void, thisArg?: any): T | null | undefined;

        /**
         * @param  {(object:any,index?:any,collection?:any)=>void} callback
         * @param  {any} thisArg?
         * @returns number
         */
        findIndex(callback: (object: any, index?: number, collection?: any) => void, thisArg?: any): number;

        /**
         * @param  {(object:T|any,index?:number,collection?:any)=>void} callback
         * @param  {any} thisArg?
         * @returns void
         */
        forEach(callback: (object: T, index?: number, collection?: any) => void, thisArg?: any): void;

        /**
         * @param  {(object:T|any,index?:number,collection?:any)=>void} callback
         * @param  {any} thisArg?
         * @returns boolean
         */
        every(callback: (object: T, index?: number, collection?: any) => void, thisArg?: any): boolean;

        /**
         * @param  {(object:any,index?:number,collection?:any)=>void} callback
         * @param  {any} thisArg?
         * @returns boolean
         */
        some(callback: (object: T, index?: number, collection?: any) => void, thisArg?: any): boolean;

        /**
         * @param  {(object:any,index?:number,collection?:any)=>void} callback
         * @param  {any} thisArg?
         * @returns any
         */
        map(callback: (object: T, index?: number, collection?: any) => void, thisArg?: any): any[];

        /**
         * @param  {(previousValue:T|any,object?:any,index?:number,collection?:any)=>void} callback
         * @param  {any} initialValue?
         * @returns any
         */
        reduce(callback: (previousValue: T, object?: T, index?: number, collection?: any) => void, initialValue?: any): any;

        /**
         * @param  {(previousValue:any,object?:any,index?:any,collection?:any)=>void} callback
         * @param  {any} initialValue?
         * @returns any
         */
        reduceRight(callback: (previousValue: T, object?: T, index?: any, collection?: any) => void, initialValue?: any): any;
    }

    /**
    * Object
    * @see { @link https://realm.io/docs/react-native/latest/api/Realm.Object.html }
    */
    export interface Object {
        /**
         * @returns boolean
         */
        isValid(): boolean;
    }

    /**
    * List
    * @see { @link https://realm.io/docs/react-native/latest/api/Realm.List.html }
    */
    export interface List<T> extends Collection<T> {
        /**
         * @returns Object|void
         */
        pop(): T | null | undefined;

        /**
         * @param  {any} object
         * @returns number
         */
        push(object: T): number;

        /**
         * @returns Object|void
         */
        shift(): T | null | undefined;

        /**
         * @param  {number} index
         * @param  {number} count?
         * @param  {any} object?
         * @returns Object
         */
        splice(index: number, count?: number, object?: any): T[];

        /**
         * @param  {any} object
         * @returns number
         */
        unshift(object: T): number;
    }

    /**
    * Results
    * @see { @link https://realm.io/docs/react-native/latest/api/Realm.Results.html }
    */
    export type Results<T> = Collection<T>;
}

declare class Realm {
    static defaultPath: string;

    readonly path: string;

    readonly readOnly: boolean;

    readonly schema: Realm.ObjectSchema[];

    /**
     * @param  {string} path?
     * @param  {any} encryptionKey?
     * @returns number
     */
    schemaVersion(path?: string, encryptionKey?: any): number;

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
     * @param  {Realm.ObjectPropsType} properties
     * @param  {boolean} update?
     * @returns Realm.Object|T|any
     */
    create<T>(type: string | Realm.ObjectType, properties: T & Realm.ObjectPropsType, update?: boolean): T;

    /**
     * @param  {Realm.Object|Realm.Object[]|Realm.List|Realm.Results|any} object
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
     * @returns Realm.Object|void
     */
    objectForPrimaryKey<T>(type: string | Realm.ObjectType, key: number | string): T | void;

    /**
     * @param  {string|Realm.ObjectType} type
     * @returns Realm.Results
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
