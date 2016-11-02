// Type definitions for realm-js 0.14.3
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
    export interface Collection {
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
        filtered(query: string, ...arg: any[]): Results;

        /**
         * @param  {string|SortDescriptor} descriptor
         * @param  {boolean} reverse?
         * @returns Results
         */
        sorted(descriptor: string | SortDescriptor, reverse?: boolean): Results;
 
        /**
         * @returns Iterator<any>
         */
        [Symbol.iterator](): Iterator<any>;

        /**
         * @returns Results
         */
        snapshot(): Results;

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
         * @returns Object
         */
        slice(start?: number, end?: number): Object[];

        /**
         * @param  {(object:any,index?:any,collection?:any)=>void} callback
         * @param  {any} thisArg?
         * @returns Object|void
         */
        find(callback: (object: any, index?: any, collection?: any) => void, thisArg?: any): Object | void;

        /**
         * @param  {(object:any,index?:any,collection?:any)=>void} callback
         * @param  {any} thisArg?
         * @returns number
         */
        findIndex(callback: (object: any, index?: any, collection?: any) => void, thisArg?: any): number;

        /**
         * @param  {(object:any,index?:any,collection?:any)=>void} callback
         * @param  {any} thisArg?
         * @returns void
         */
        forEach(callback: (object: any, index?: any, collection?: any) => void, thisArg?: any): void;

        /**
         * @param  {(object:any,index?:any,collection?:any)=>void} callback
         * @param  {any} thisArg?
         * @returns boolean
         */
        every(callback: (object: any, index?: any, collection?: any) => void, thisArg?: any): boolean;

        /**
         * @param  {(object:any,index?:any,collection?:any)=>void} callback
         * @param  {any} thisArg?
         * @returns boolean
         */
        some(callback: (object: any, index?: any, collection?: any) => void, thisArg?: any): boolean;

        /**
         * @param  {(object:any,index?:any,collection?:any)=>void} callback
         * @param  {any} thisArg?
         * @returns any
         */
        map(callback: (object: any, index?: any, collection?: any) => void, thisArg?: any): any[];

        /**
         * @param  {(previousValue:any,object?:any,index?:any,collection?:any)=>void} callback
         * @param  {any} initialValue?
         * @returns any
         */
        reduce(callback: (previousValue: any, object?: any, index?: any, collection?: any) => void, initialValue?: any): any;

        /**
         * @param  {(previousValue:any,object?:any,index?:any,collection?:any)=>void} callback
         * @param  {any} initialValue?
         * @returns any
         */
        reduceRight(callback: (previousValue: any, object?: any, index?: any, collection?: any) => void, initialValue?: any): any;
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
    export interface List extends Collection {
        /**
         * @returns Object|void
         */
        pop(): Object | void;

        /**
         * @param  {any} object
         * @returns number
         */
        push(object: any): number;

        /**
         * @returns Object|void
         */
        shift(): Object | void;

        /**
         * @param  {number} index
         * @param  {number} count?
         * @param  {any} object?
         * @returns Object
         */
        splice(index: number, count?: number, object?: any): Object[];

        /**
         * @param  {any} object
         * @returns number
         */
        unshift(object: any): number;
    }

    /**
    * Results
    * @see { @link https://realm.io/docs/react-native/latest/api/Realm.Results.html }
    */
    export interface Results extends Collection {}
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
    create<T>(type: string | Realm.ObjectType, properties: Realm.ObjectPropsType, update?: boolean): Realm.Object | T | any;

    /**
     * @param  {Realm.Object|Realm.Object[]|Realm.List|Realm.Results|any} object
     * @returns void
     */
    delete(object: Realm.Object | Realm.Object[] | Realm.List | Realm.Results | any): void;

    /**
     * @returns void
     */
    deleteAll(): void;

    /**
     * @param  {string|Realm.ObjectType} type
     * @param  {number|string} key
     * @returns Realm.Object|void
     */
    objectForPrimaryKey(type: string | Realm.ObjectType, key: number | string): Realm.Object | void;

    /**
     * @param  {string|Realm.ObjectType} type
     * @returns Realm.Results
     */
    objects(type: string | Realm.ObjectType): Realm.Results;

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
