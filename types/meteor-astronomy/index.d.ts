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
        fields?: K[] | undefined;
        stopOnFirstError?: boolean | undefined;
        simulation?: boolean | undefined;
        cast?: boolean | undefined;
    }

    type SaveAndValidateCallback = (err: any, id: any) => void;
    type RemoveCallback = (err: any, result: any) => void;

    interface Validator {
        type: string;
        param: any;
    }

    interface ModelFullField<Field, Doc> {
        type: TypeOptions;
        optional?: boolean | undefined;
        transient?: boolean | undefined;
        immutable?: boolean | undefined;
        default?: (() => Field | Field) | undefined;
        index?: string | number | undefined;
        validators?: Validator[] | undefined;
        resolve?: ((doc: Doc) => Field) | undefined;
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
        collection?: Mongo.Collection<T> | undefined;
        fields: Fields<Omit<T, "_id">>;
        behaviors?: object | undefined;
        secured?:
            | {
                insert: boolean;
                update: boolean;
                remove: boolean;
            }
            | boolean
            | undefined;
        helpers?: Helpers<T> | undefined;
        events?: object | undefined;
        meteorMethods?: object | undefined;
        indexes?: object | undefined;
    }

    interface EnumModel<T> {
        name: string;
        identifiers: string[] | T;
    }

    type Model<T> = T & {
        set(
            fields: Partial<T>,
            options?: { cast?: boolean | undefined; clone?: boolean | undefined; merge?: boolean | undefined },
        ): void;
        set(field: string, value: any): void;
        get(field: string): any;
        get(fields: string[]): Partial<T>;
        isModified(field?: string): boolean;
        getModified(): any;
        getModifiedValues(options?: { old?: boolean | undefined; raw?: boolean | undefined }): Partial<T>;
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
        sort?: Mongo.SortSpecifier | undefined;
        skip?: number | undefined;
        fields?: Mongo.FieldSpecifier | undefined;
        reactive?: boolean | undefined;
        transform?: ((...args: any[]) => any) | undefined;
        disableEvents?: boolean | undefined;
        children?: number | undefined;
        defaults?: boolean | undefined;
    }

    interface FindOptions extends FindOneOptions {
        limit?: number | undefined;
    }

    interface UpsertOptions {
        multi?: boolean | undefined;
    }

    interface UpdateOptions extends UpsertOptions {
        upsert?: boolean | undefined;
    }

    type MongoQuery<T> = Mongo.Selector<T> | Mongo.ObjectID | string;

    interface Class<T> {
        new(data?: Partial<T>): Model<T>;

        findOne(selector?: MongoQuery<T>, options?: FindOneOptions): Model<T>;
        find(selector?: MongoQuery<T>, options?: FindOptions): Mongo.Cursor<Model<T>>;
        insert(doc: T, callback?: () => void): string;
        update(
            selector: MongoQuery<T>,
            modifier: Mongo.Modifier<T>,
            options?: UpdateOptions,
            callback?: () => void,
        ): number;
        upsert(
            selector: MongoQuery<T>,
            modifier: Mongo.Modifier<T>,
            options?: UpsertOptions,
            callback?: () => void,
        ): number;
        remove(selector: MongoQuery<T>, callback?: () => void): number;
    }

    type Enum<T> = T & {
        getValues(): any[];
        getIdentifier(identifier: any): string;
    };
}

declare module "meteor/jagi:astronomy" { // eslint-disable-line @definitelytyped/no-single-declare-module
    namespace Class {
        function create<T extends {}>(model: MeteorAstronomy.ClassModel<T>): MeteorAstronomy.Class<T>;
    }

    namespace Enum {
        function create<T>(model: MeteorAstronomy.EnumModel<T>): MeteorAstronomy.Enum<T>;
    }
}
