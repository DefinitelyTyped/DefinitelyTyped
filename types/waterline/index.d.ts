// Type definitions for waterline 0.13
// Project: https://github.com/balderdashy/waterline
// Definitions by: Alexandro Libertino <https://github.com/arvitaly>
//                 Keith Kikta <https://github.com/newbish>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="node" />

import BluebirdPromise = require('bluebird');
declare namespace Waterline {
    type Adapter = Object;
    type Connection = {
        adapter: string;
    };
    interface Config {
        adapters: { [index: string]: Adapter };
        connections: { [index: string]: Connection };
    }
    type Ontology = {
        collections: any;
        datastores: any;
    };
    interface Waterline {
        loadCollection(collection: CollectionClass): void;
        registerModel(collection: CollectionClass): void;
        initialize: (config: Config, cb: (err: Error, ontology: Ontology) => any) => any;
        collections: any;
    }
    interface CollectionClass {
        (): Collection;
    }
    // used this comment https://github.com/balderdashy/waterline/issues/1154#issuecomment-167262575
    export type LifecycleCallbacks = {
        beforeValidate?: { (vaues: any, next: Function): void }[] | { (vaues: any, next: Function): void };
        beforeCreate?: { (values: any, next: Function): void }[] | { (vaues: any, next: Function): void };
        afterCreate?:
        | { (newlyCreatedRecord: any, next: Function): void }[]
        | { (newlyCreatedRecord: any, next: Function): void };
        beforeUpdate?:
        | { (valuesToUpdate: any, next: Function): void }[]
        | { (valuesToUpdate: any, next: Function): void };
        afterUpdate?:
        | { (valuesToUpdate: any, next: Function): void }[]
        | { (valuesToUpdate: any, next: Function): void };
        beforeDestroy?: { (criteria: any, next: Function): void }[] | { (valuesToUpdate: any, next: Function): void };
        afterDestroy?:
        | { (destroyedInstance: any, next: Function): void }[]
        | { (destroyedInstance: any, next: Function): void };
    };
    export type CollectionDefinition = LifecycleCallbacks & {
        attributes?: Attributes;
        connection?: string;
        identity?: string;
        tableName?: string;
        migrate?: 'alter' | 'drop' | 'safe';
        schema?: boolean;
        types?: any;
        datastore?: string;
        primaryKey?: string;
        dataEncryptionKeys?: any;
    };
    export type Collection = CollectionDefinition;
    export type Attributes = { [index: string]: Attribute } & {
        toJSON?: () => string;
        toObject?: () => any;
    };
    export type FunctionAttribute = () => any;
    // Data types https://github.com/balderdashy/waterline-docs/blob/master/models/data-types-attributes.md#data-types
    export type AttributeType =
        | 'string'
        | 'text'
        | 'number'
        | 'integer'
        | 'float'
        | 'date'
        | 'time'
        | 'datetime'
        | 'boolean'
        | 'binary'
        | 'array'
        | 'json';
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
        type?: string;
        primaryKey?: boolean;
        unique?: boolean;
        required?: boolean;
        enum?: Array<T>;
        size?: number;
        columnName?: string;
        index?: boolean;
        defaultsTo?: T | DefaultsToFn<T>;
        allowNull?: boolean;
        validations?: AttributeValidations;
        autoCreatedAt?: boolean;
        autoUpdatedAt?: boolean;
    };
    export type StringAttribute = BaseAttribute<string> & {
        type: 'string';
    };
    export type EmailAttribute = BaseAttribute<string> & {
        type: 'email';
    };
    export type TextAttribute = BaseAttribute<string> & {
        type: 'text';
    };
    export type IntegerAttribute = BaseAttribute<number> & {
        type: 'integer';
        autoIncrement?: boolean;
    };
    export type NumberAttribute = BaseAttribute<number> & {
        type: 'number';
        autoIncrement?: boolean;
    };
    export type FloatAttribute = BaseAttribute<number> & {
        type: 'float';
    };
    export type DateAttribute = BaseAttribute<Date> & {
        type: 'date';
    };
    export type TimeAttribute = BaseAttribute<Date> & {
        type: 'time';
    };
    export type DatetimeAttribute = BaseAttribute<Date> & {
        type: 'datetime';
    };
    export type BooleanAttribute = BaseAttribute<boolean> & {
        type: 'boolean';
    };
    export type BinaryAttribute = BaseAttribute<any> & {
        type: 'binary';
    };
    export type ArrayAttribute = BaseAttribute<any> & {
        type: 'array';
    };
    export type JsonAttribute = BaseAttribute<any> & {
        type: 'json';
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
        dominant?: boolean;
    };
    type AttributeValidationSyncFn<T> = () => T;
    type AttributeValidationAsyncFn<T> = (cb: (value: T) => any) => void;

    export type AttributeValidation<T> = T | AttributeValidationSyncFn<T> | AttributeValidationAsyncFn<T>;
    export interface AttributeValidations {
        custom?: AttributeValidation<Function>;
        isAfter?: AttributeValidation<Date>;
        isBefore?: AttributeValidation<Date>;
        isBoolean?: AttributeValidation<boolean>;
        isCreditCard?: AttributeValidation<boolean>;
        isEmail?: AttributeValidation<boolean>;
        isHexColor?: AttributeValidation<boolean>;
        isIn?: AttributeValidation<string[]>;
        isInteger?: AttributeValidation<boolean>;
        isIP?: AttributeValidation<boolean>;
        isNotEmptyString?: AttributeValidation<boolean>;
        isNotIn?: AttributeValidation<string[]>;
        isNumber?: AttributeValidation<boolean>;
        isString?: AttributeValidation<boolean>;
        isURL?: AttributeValidation<boolean>;
        isUUID?: AttributeValidation<boolean>;
        max?: AttributeValidation<number>;
        maxLength?: AttributeValidation<number>;
        min?: AttributeValidation<number>;
        minLength?: AttributeValidation<number>;
        regex?: AttributeValidation<RegExp>;
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
        id?: number | string;
        createdAt?: Date;
        updatedAt?: Date;
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
}
declare interface WaterlineStatic {
    Model: {
        extend: (params: Waterline.CollectionDefinition) => Waterline.CollectionClass;
    };
    Collection: {
        extend: (params: Waterline.CollectionDefinition) => Waterline.CollectionClass;
    };
    new(): Waterline.Waterline;
}
declare var Waterline: WaterlineStatic;
export = Waterline;
