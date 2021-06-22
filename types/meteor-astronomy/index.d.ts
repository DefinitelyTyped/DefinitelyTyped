// Type definitions for non-npm package meteor-astronomy 2.6
// Project: https://github.com/jagi/meteor-astronomy/
// Definitions by: Igor Golovin <https://github.com/Deadly0>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

/// <reference types="meteor" />

declare namespace MeteorAstronomy {
    type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
    type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]; // tslint:disable-line:ban-types
    type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;
    type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]; // tslint:disable-line:ban-types
    type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

    type TypeOptionsPrimitives = typeof String | typeof Date | typeof Boolean | typeof Object | typeof Number;
    type TypeOptions = TypeOptionsPrimitives | TypeOptionsPrimitives[] | Class<any> | Enum<any>;

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
        [P in keyof NonFunctionProperties<T>]: ModelField<T[P], T>;
    };

    type Helpers<T> = {
        [P in keyof FunctionProperties<T>]: (this: T, ...args: any[]) => any;
    };

    interface ClassModel<T> {
        name: string;
        collection?: Mongo.Collection<T>;
        fields: Fields<Omit<T, '_id'>>;
        behaviors?: object;
        secured?: {
            insert: boolean,
            update: boolean,
            remove: boolean,
        } | boolean;
        helpers?: Helpers<T>;
        events?: object;
        meteorMethods?: object;
        indexes?: object;
    }

    interface EnumModel<T> {
        name: string;
        identifiers: string[] | T;
    }

    type Model<T> = T & {
        set(fields: Partial<T>, options?: {cast?: boolean; clone?: boolean; merge?: boolean}): void;
        set(field: string, value: any): void;
        get(field: string): any;
        get(fields: string[]): Partial<T>;
        isModified(field?: string): boolean;
        getModified(): any;
        getModifiedValues(options?: {old?: boolean, raw?: boolean}): Partial<T>;
        getModifier(): any;
        raw(): T;
        raw(field: string): any;
        raw(fields: string[]): Partial<T>;
        save(options: SaveAndValidateOptions<keyof T>, callback: SaveAndValidateCallback): void;
        save(optionsOrCallback?: SaveAndValidateOptions<keyof T> | SaveAndValidateCallback): void;
        copy(save?: boolean): Model<T>;
        validate(options: SaveAndValidateOptions<keyof T>, callback: SaveAndValidateCallback): void;
        validate(optionsOrCallback?: SaveAndValidateOptions<keyof T> | SaveAndValidateCallback): void;
        remove(callback?: RemoveCallback): void;
    };

    interface FindOneOptions {
        sort?: Mongo.SortSpecifier;
        skip?: number;
        fields?: Mongo.FieldSpecifier;
        reactive?: boolean;
        transform?: (...args: any[]) => any;
        disableEvents?: boolean;
        children?: number;
        defaults?: boolean;
    }

    interface FindOptions extends FindOneOptions {
        limit?: number;
    }

    interface UpsertOptions {
        multi?: boolean;
    }

    interface UpdateOptions extends UpsertOptions {
        upsert?: boolean;
    }

    type MongoQuery<T> = Mongo.Selector<T> | Mongo.ObjectID | string;

    interface Class<T> {
        new(data?: Partial<T>): Model<T>;

        findOne(selector?: MongoQuery<T>, options?: FindOneOptions): Model<T>;
        find(selector?: MongoQuery<T>, options?: FindOptions): Mongo.Cursor<Model<T>>;
        insert(doc: T, callback?: () => void): string;
        update(selector: MongoQuery<T>, modifier: Mongo.Modifier<T>, options?: UpdateOptions, callback?: () => void): number;
        upsert(selector: MongoQuery<T>, modifier: Mongo.Modifier<T>, options?: UpsertOptions, callback?: () => void): number;
        remove(selector: MongoQuery<T>, callback?: () => void): number;
    }

    type Enum<T> = T & {
        getValues(): any[];
        getIdentifier(identifier: any): string;
    };
}

declare module 'meteor/jagi:astronomy' { // tslint:disable-line:no-single-declare-module
    namespace Class {
        function create<T extends {}>(model: MeteorAstronomy.ClassModel<T>): MeteorAstronomy.Class<T>;
    }

    namespace Enum {
        function create<T>(model: MeteorAstronomy.EnumModel<T>): MeteorAstronomy.Enum<T>;
    }
}
