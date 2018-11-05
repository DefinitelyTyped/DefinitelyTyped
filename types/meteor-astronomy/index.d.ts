// Type definitions for meteor-astronomy 2.6
// Project: https://github.com/jagi/meteor-astronomy/
// Definitions by: Igor Golovin <https://github.com/Deadly0>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="meteor" />

type TypeOptionsPrimitives = typeof String | typeof Date | typeof Boolean | typeof Object | typeof Number;
type TypeOptions = TypeOptionsPrimitives | TypeOptionsPrimitives[] | Class<any> | Enum<any>;
type MongoQuery = object | string;

interface SaveAndValidateOptions<K> {
    fields?: K[];
    stopOnFirstError?: boolean;
    simulation?: boolean;
    cast?: boolean;
}

type SaveAndValidateCallback = (err: any, id: any) => void;
type RemoveCallback = (err: any, result: any) => void;

interface Validator {
    type: string;
    param: any;
}

interface ModelFullField<Field, Doc> {
    type: TypeOptions;
    optional?: boolean;
    transient?: boolean;
    immutable?: boolean;
    default?: () => Field | Field;
    index?: string | number;
    validators?: Validator[];
    resolve?: (doc: Doc) => Field;
}

type ModelField<Field, Doc> = ModelFullField<Field, Doc> | TypeOptions;

type Fields<T> = {
    [P in keyof T]: ModelField<T[P], T>;
};

interface ClassModel<T> {
    name: string;
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

interface EnumModel<T> {
    name: string;
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
    save(options?: SaveAndValidateOptions<keyof T>, callback?: SaveAndValidateCallback): void;
    save(callback?: SaveAndValidateCallback): void;
    copy(save: boolean): any;
    validate(options?: SaveAndValidateOptions<keyof T>, callback?: SaveAndValidateCallback): void;
    validate(callback?: SaveAndValidateCallback): void;
    remove(callback?: RemoveCallback): void;
};

interface Class<T> {
    new(data?: Partial<T>): Model<T>;

    findOne(query?: MongoQuery): Model<T>;
    find(query?: MongoQuery): Array<Model<T>>;
    update(search: object | string, query: object, callback?: () => void): void;
}

interface Enum<T> {
    getValues(): any[];
    getIdentifier(identifier: T): any;
}

declare module 'meteor/jagi:astronomy' { // tslint:disable-line:no-single-declare-module
    namespace Class {
        function create<T extends {}>(model: ClassModel<T>): Class<T>;
    }

    namespace Enum {
        function create<T>(model: EnumModel<T>): Enum<T>;
    }
}
