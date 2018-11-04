// Type definitions for meteor-astronomy 2.6.2
// Project: https://github.com/jagi/meteor-astronomy/
// Definitions by: Igor Golovin <https://github.com/Deadly0>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="meteor" />

type TypeOptionsPrimitives = typeof String | typeof Date | typeof Boolean | typeof Object | typeof Number;
type TypeOptions = TypeOptionsPrimitives | TypeOptionsPrimitives[] | IClass<any> | Enum<any>;
type MongoQuery = object | string;

interface ISaveAndValidateOptions<K> {
    fields?: K[];
    stopOnFirstError?: boolean;
    simulation?: boolean;
    cast?: boolean;
}

type SaveAndValidateCallback = (err: any, id: any) => void;
type RemoveCallback = (err: any, result: any) => void;

interface IValidator {
    type: string,
    param: any,
}

type DefaultFunc<T> = () => T;

interface IModelFullField<Field, Doc> {
    type: TypeOptions;
    optional?: boolean;
    transient?: boolean;
    immutable?: boolean;
    default?: Field | DefaultFunc<Field>;
    index?: string | number;
    validators?: IValidator[];
    resolve?: (doc: Doc) => Field;
}

type ModelField<Field, Doc> = IModelFullField<Field, Doc> | TypeOptions;

type Fields<T> = {
    [P in keyof T]: ModelField<T[P], T>;
}

interface IClassModel<T> {
    name: String;
    collection?: Mongo.Collection<T>;
    fields: Fields<T>;
    behaviors?: object;
    secured?: {
        insert: boolean,
        update: boolean,
        remove: boolean,
    } | boolean;
    helpers?: object;
    events?: object;
    meteorMethods?: object;
    indexes?: object;
}

interface IEnumModel<T> {
    name: String;
    identifiers: T[] | object;
}

type Model<T> = T & {
    set(fields: Partial<T>, options?: {cast?: boolean; clone?: boolean; merge?: boolean}): void;
    set(field: string, value: any): void;
    get(field: string): any;
    get(fields: string[]): any[];
    isModified(field?: string): boolean;
    getModified(): any;
    getModifiedValues(options?: {old?: boolean, raw?: boolean}): Partial<T>;
    getModifier(): any;
    raw(): T;
    raw(field: string): any;
    raw(fields: string[]): any[];
    save(options?: ISaveAndValidateOptions<keyof T>, callback?: SaveAndValidateCallback): void;
    save(callback?: SaveAndValidateCallback): void;
    copy(save: boolean): any;
    validate(options?: ISaveAndValidateOptions<keyof T>, callback?: SaveAndValidateCallback): void;
    validate(callback?: SaveAndValidateCallback): void;
    remove(callback?: RemoveCallback): void;
};

interface IClass<T> {
    new(data?: Partial<T>): Model<T>;

    findOne(query?: MongoQuery): Model<T>;
    find(query?: MongoQuery): Model<T>[];
    update(search: object | string, query: object, callback?: () => void): void;
}

type Enum<T> = {
    getValues(): any[];
    getIdentifier(identifier: T): any;
}

declare module 'meteor/jagi:astronomy' {
    module Class {
        function create<T extends {}>(model: IClassModel<T>): IClass<T>;
    }

    module Enum {
        function create<T>(model: IEnumModel<T>): Enum<T>;
    }
}
