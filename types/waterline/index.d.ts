/// <reference types="node" />

import BluebirdPromise = require("bluebird");
declare namespace Waterline {
    type Adapter = Object;

    /** The configuration for a Datastore (MongoDb, Postgres, etc.) */
    interface DatastoreConfig {
        adapter: string;
    }

    /** An DatastoreConfig thats been Initalized */
    interface DatastoreConfigInstance extends DatastoreConfig {
        identity: string;
    }

    /** Represents a Datastore (Connection) */
    interface Datastore {
        /** A datastore adapter (MySQL, MongoDB, Postgres, etc.) */
        adapter: any;
        /** A list of collections that have been initlized using this datastore */
        collections: string[];
        /** A instance of the datastore configuration */
        config: DatastoreConfigInstance;
    }

    /** Waterline Configration */
    interface Config {
        /** A set of adapters to configure */
        adapters: { [index: string]: Adapter };
        /** A set of datastores to configure */
        datastores: { [index: string]: DatastoreConfig };
    }

    type Ontology = {
        collections: any;
        /** A set of datastores */
        datastores: { [index: string]: Datastore };
    };

    interface Waterline {
        loadCollection(collection: CollectionClass): void;
        registerModel(collection: CollectionClass): void;
        initialize: (config: Config, cb: (err: Error, ontology: Ontology) => any) => any;
        teardown(done?: Function): void;
        collections: any;
    }

    interface CollectionClass {
        (): Collection;
    }

    // used this comment https://github.com/balderdashy/waterline/issues/1154#issuecomment-167262575
    export type LifecycleCallbacks = {
        beforeValidate?: { (vaues: any, next: Function): void }[] | { (vaues: any, next: Function): void } | undefined;
        beforeCreate?: { (values: any, next: Function): void }[] | { (vaues: any, next: Function): void } | undefined;
        afterCreate?:
            | { (newlyCreatedRecord: any, next: Function): void }[]
            | { (newlyCreatedRecord: any, next: Function): void }
            | undefined;
        beforeUpdate?:
            | { (valuesToUpdate: any, next: Function): void }[]
            | { (valuesToUpdate: any, next: Function): void }
            | undefined;
        afterUpdate?:
            | { (valuesToUpdate: any, next: Function): void }[]
            | { (valuesToUpdate: any, next: Function): void }
            | undefined;
        beforeDestroy?:
            | { (criteria: any, next: Function): void }[]
            | { (valuesToUpdate: any, next: Function): void }
            | undefined;
        afterDestroy?:
            | { (destroyedInstance: any, next: Function): void }[]
            | { (destroyedInstance: any, next: Function): void }
            | undefined;
    };

    export type CollectionDefinition = LifecycleCallbacks & {
        attributes?: Attributes | undefined;
        connection?: string | undefined;
        identity?: string | undefined;
        tableName?: string | undefined;
        migrate?: "alter" | "drop" | "safe" | undefined;
        schema?: boolean | undefined;
        types?: any;
        datastore?: string | undefined;
        primaryKey?: string | undefined;
        dataEncryptionKeys?: any;
    };

    export type Collection = CollectionDefinition;

    export type Attributes = { [index: string]: Attribute } & {
        toJSON?: (() => string) | undefined;
        toObject?: (() => any) | undefined;
    };

    export type FunctionAttribute = () => any;

    // Data types https://github.com/balderdashy/waterline-docs/blob/master/models/data-types-attributes.md#data-types
    export type AttributeType =
        | "string"
        | "text"
        | "number"
        | "integer"
        | "float"
        | "date"
        | "time"
        | "datetime"
        | "boolean"
        | "binary"
        | "array"
        | "json";

    export type Attribute =
        | string
        | StringAttribute
        | EmailAttribute
        | IntegerAttribute
        | NumberAttribute
        | FloatAttribute
        | DateAttribute
        | TimeAttribute
        | DatetimeAttribute
        | BooleanAttribute
        | BinaryAttribute
        | ArrayAttribute
        | JsonAttribute
        | OneToOneAttribute
        | OneToManyAttribute
        | ManyToManyAttribute
        | FunctionAttribute;

    export type DefaultsToFn<T> = () => T;

    export type BaseAttribute<T> = {
        type?: string | undefined;
        primaryKey?: boolean | undefined;
        unique?: boolean | undefined;
        required?: boolean | undefined;
        enum?: Array<T> | undefined;
        size?: number | undefined;
        columnName?: string | undefined;
        index?: boolean | undefined;
        defaultsTo?: T | DefaultsToFn<T> | undefined;
        allowNull?: boolean | undefined;
        validations?: AttributeValidations | undefined;
        autoCreatedAt?: boolean | undefined;
        autoUpdatedAt?: boolean | undefined;
    };

    export type StringAttribute = BaseAttribute<string> & {
        type: "string";
    };

    export type EmailAttribute = BaseAttribute<string> & {
        type: "email";
    };

    export type TextAttribute = BaseAttribute<string> & {
        type: "text";
    };

    export type IntegerAttribute = BaseAttribute<number> & {
        type: "integer";
        autoIncrement?: boolean | undefined;
    };

    export type NumberAttribute = BaseAttribute<number> & {
        type: "number";
        autoIncrement?: boolean | undefined;
    };

    export type FloatAttribute = BaseAttribute<number> & {
        type: "float";
    };

    export type DateAttribute = BaseAttribute<Date> & {
        type: "date";
    };

    export type TimeAttribute = BaseAttribute<Date> & {
        type: "time";
    };

    export type DatetimeAttribute = BaseAttribute<Date> & {
        type: "datetime";
    };

    export type BooleanAttribute = BaseAttribute<boolean> & {
        type: "boolean";
    };

    export type BinaryAttribute = BaseAttribute<any> & {
        type: "binary";
    };

    export type ArrayAttribute = BaseAttribute<any> & {
        type: "array";
    };

    export type JsonAttribute = BaseAttribute<any> & {
        type: "json";
    };

    export type OneToOneAttribute = BaseAttribute<any> & {
        model: string;
    };

    export type OneToManyAttribute = BaseAttribute<any> & {
        collection: string;
        via: string;
    };

    export type ManyToManyAttribute = BaseAttribute<any> & {
        collection: string;
        via: string;
        dominant?: boolean | undefined;
    };

    type AttributeValidationSyncFn<T> = () => T;

    type AttributeValidationAsyncFn<T> = (cb: (value: T) => any) => void;

    export type AttributeValidation<T> = T | AttributeValidationSyncFn<T> | AttributeValidationAsyncFn<T>;

    export interface AttributeValidations {
        custom?: AttributeValidation<Function> | undefined;
        isAfter?: AttributeValidation<Date> | undefined;
        isBefore?: AttributeValidation<Date> | undefined;
        isBoolean?: AttributeValidation<boolean> | undefined;
        isCreditCard?: AttributeValidation<boolean> | undefined;
        isEmail?: AttributeValidation<boolean> | undefined;
        isHexColor?: AttributeValidation<boolean> | undefined;
        isIn?: AttributeValidation<string[]> | undefined;
        isInteger?: AttributeValidation<boolean> | undefined;
        isIP?: AttributeValidation<boolean> | undefined;
        isNotEmptyString?: AttributeValidation<boolean> | undefined;
        isNotIn?: AttributeValidation<string[]> | undefined;
        isNumber?: AttributeValidation<boolean> | undefined;
        isString?: AttributeValidation<boolean> | undefined;
        isURL?: AttributeValidation<boolean> | undefined;
        isUUID?: AttributeValidation<boolean> | undefined;
        max?: AttributeValidation<number> | undefined;
        maxLength?: AttributeValidation<number> | undefined;
        min?: AttributeValidation<number> | undefined;
        minLength?: AttributeValidation<number> | undefined;
        regex?: AttributeValidation<RegExp> | undefined;
    }

    type WaterlinePromise<T> = BluebirdPromise<T> & {
        exec(cb: (err: Error, result: T) => any): void;
    };

    type QueryBuilder<T> = WaterlinePromise<T> & {
        where(condition: any): QueryBuilder<T>;
        limit(lim: number): QueryBuilder<T>;
        skip(num: number): QueryBuilder<T>;
        sort(criteria: string | { [attribute: string]: string } | { [attribute: string]: string }[]): QueryBuilder<T>;
        paginate(pagination?: { page: number; limit: number }): QueryBuilder<T>;
        populate(association: string): QueryBuilder<T>;
        populate(association: string, filter: any): QueryBuilder<T>;
        groupBy(attrOrExpr: string): QueryBuilder<T>;
        max(attribute: string): QueryBuilder<T>;
        min(attribute: string): QueryBuilder<T>;
        sum(attribute: string): QueryBuilder<T>;
        average(attribute: string): QueryBuilder<T>;
        meta(options: any): QueryBuilder<T>;
    };

    type CRUDBuilder<T> = WaterlinePromise<T> & {
        fetch(): CRUDBuilder<T>;
    };

    type UpdateBuilder<T> = CRUDBuilder<T> & {
        set(criteria: any): UpdateBuilder<T>;
    };

    interface ModelInstance {
        id?: number | string | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        toJSON(): any;
        save(): WaterlinePromise<this>;
    }

    export interface Callback<T> {
        (err: any, result: T): any;
    }
    export interface Model extends ModelInstance {
        create(params: any, cb?: Callback<any>): CRUDBuilder<any>;
        create(params: any[], cb?: Callback<any>): CRUDBuilder<any[]>;
        createEach(params: any[], cb?: Callback<any>): CRUDBuilder<any[]>;
        find(criteria?: any, cb?: Callback<any[]>): QueryBuilder<any[]>;
        findOne(criteria?: any, cb?: Callback<any>): QueryBuilder<any>;
        findOrCreate(criteria?: any, values?: any, cb?: Callback<any>): QueryBuilder<any>;
        update(criteria: any, changes?: any, cb?: Callback<any>): UpdateBuilder<any>;
        update(criteria: any, changes?: any[], cb?: Callback<any[]>): UpdateBuilder<any[]>;
        updateOne(criteria: any, changes?: any, cb?: Callback<any>, meta?: any): UpdateBuilder<any>;
        destroy(criteria: any, cb?: Callback<any>): CRUDBuilder<any[]>;
        destroy(criteria: any[], cb?: Callback<any[]>): CRUDBuilder<any[]>;
        destroyOne(criteria: any, cb?: Callback<any>): CRUDBuilder<any>;
        count(criteria: any): WaterlinePromise<number>;
        count(criteria: any[]): WaterlinePromise<number>;
        query(sqlQuery: string, cb: Callback<any>): void;
        query(sqlQuery: string, data: any, cb: Callback<any>): void;
        native(cb: (err: Error, collection: any) => void): void;
        stream(criteria: any, writeEnd: any): NodeJS.WritableStream | Error;
    }

    export interface StartOptions {
        adapters: Record<string, Adapter>;
        datastores: Record<string, DatastoreConfig & { identity?: undefined }>;
        models: Record<string, CollectionDefinition>;
        defaultModelSettings?: CollectionDefinition;
    }
}

declare interface WaterlineStatic {
    Model: {
        extend: (params: Waterline.CollectionDefinition) => Waterline.CollectionClass;
    };
    Collection: {
        extend: (params: Waterline.CollectionDefinition) => Waterline.CollectionClass;
    };
    new(): Waterline.Waterline;
    start<CB extends (err: Error | undefined, orm: Waterline.Waterline) => unknown>(
        options: Waterline.StartOptions,
        done: CB,
    ): CB;
    stop<CB extends (err: Error | undefined) => unknown>(orm: Waterline.Waterline, done: CB): ReturnType<CB>;
}

declare var Waterline: WaterlineStatic;

export = Waterline;
