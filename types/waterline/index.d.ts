// Type definitions for waterline 0.11
// Project: https://github.com/balderdashy/waterline
// Definitions by: Alexandro Libertino <https://github.com/arvitaly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import BluebirdPromise = require("bluebird");
declare namespace Waterline {
    type Adapter = Object;
    type Connection = {
        adapter: string;
    }
    type ConnectionV3 = {
        adapter: string;
        url?: string,
        host?: string,
        port?: number,
        schema?: boolean,
        user?: string,
        password?: string,
        database?: string
    }
    interface Config {
        adapters: { [index: string]: Adapter };
        connections: { [index: string]: Connection }
    }
    interface ConfigV3 {
        adapters: { [index: string]: Adapter };
        datastores: { [index: string]: ConnectionV3 }
    }
    type Ontology = {
        collections: any;
    }
    interface Waterline {
        registerModel(collection: CollectionClassV3): void;
        loadCollection(collection: CollectionClass): void;
        initialize: (config: Config | ConfigV3, cb: (err: Error, ontology: Ontology) => any) => any;
        collections: any;
    }
    interface CollectionClass {
        (): Collection
    }
    interface CollectionClassV3 {
        (): CollectionV3
    }

    // used this comment https://github.com/balderdashy/waterline/issues/1154#issuecomment-167262575
    export type LifecycleCallbacks = {
        beforeValidate?: { (vaues: any, next: Function): void }[] | { (vaues: any, next: Function): void };
        beforeCreate?: { (values: any, next: Function): void }[] | { (vaues: any, next: Function): void };
        afterCreate?: { (newlyCreatedRecord: any, next: Function): void }[] | { (newlyCreatedRecord: any, next: Function): void };
        beforeUpdate?: { (valuesToUpdate: any, next: Function): void }[] | { (valuesToUpdate: any, next: Function): void };
        afterUpdate?: { (valuesToUpdate: any, next: Function): void }[] | { (valuesToUpdate: any, next: Function): void };
        beforeDestroy?: { (criteria: any, next: Function): void }[] | { (valuesToUpdate: any, next: Function): void };
        afterDestroy?: { (destroyedInstance: any, next: Function): void }[] | { (destroyedInstance: any, next: Function): void };
    }
    export type CollectionDefinition = LifecycleCallbacks & {
        attributes?: Attributes;
        connection?: string;
        identity?: string;
        tableName?: string;
        migrate?: "alter" | "drop" | "safe";
        autoPK?: boolean;
        autoCreatedAt?: boolean;
        autoUpdatedAt?: boolean;
        schema?: boolean;
        types?: any;
    }
    export type CollectionDefinitionV3 = LifecycleCallbacks & {
        attributes?: AttributesV3;
        connection?: string;
        identity?: string;
        primaryKey?: string,
        tableName?: string;
        migrate?: "alter" | "drop" | "safe";
        autoPK?: boolean;
        schema?: boolean;
        types?: any;
    }

    export type CollectionV3 = CollectionDefinitionV3;
    export type Collection = CollectionDefinition;
    export type Attributes = { [index: string]: Attribute } & {
        toJSON?: () => string;
        toObject?: () => any;
    };
    export type AttributesV3 = { [index: string]: AttributeV3 } & {
        toJSON?: () => string;
        toObject?: () => any;
    };
    export type FunctionAttribute = () => any;
    // Data types https://github.com/balderdashy/waterline-docs/blob/master/models/data-types-attributes.md#data-types
    export type AttributeType = "string" | "text" | "integer" | "float" | "date" | "time"
        | "datetime" | "boolean" | "binary" | "array" | "json";
    export type AttributeTypeV3 = "string" | "number" | "boolean" | "json" | "ref";

    export type Attribute = string | StringAttribute | EmailAttribute |
        IntegerAttribute | FloatAttribute |
        DateAttribute | TimeAttribute | DatetimeAttribute |
        BooleanAttribute | BinaryAttribute | ArrayAttribute | JsonAttribute |
        OneToOneAttribute | OneToManyAttribute | ManyToManyAttribute |
        FunctionAttribute;

    export type AttributeV3 = string | StringAttributeV3 | NumberAttributeV3  |
        BooleanAttributeV3 | JsonAttributeV3 | RefAttributeV3 |
        OneToOneAttributeV3 | OneToManyAttributeV3 | ManyToManyAttributeV3 |
        FunctionAttribute;


    export type DefaultsToFn<T> = () => T;
    export type BaseAttribute<T> = AttributeValidations & {
        type?: string;
        primaryKey?: boolean;
        unique?: boolean;
        required?: boolean;
        enum?: Array<T>;
        size?: number;
        columnName?: string;
        index?: boolean;
        defaultsTo?: T | DefaultsToFn<T>;
    }
    export type BaseAttributeV3<T> =  {
        type?: string;
        autoMigrations?: AutoMigration;
        unique?: boolean;
        required?: boolean;
        columnName?: string;
        index?: boolean;
        allowNull?: boolean;
        autoCreatedAt?: boolean;
        autoUpdatedAt?: boolean;
        validations?: AttributeValidationsV3;
        defaultsTo?: T | DefaultsToFn<T>;
    }

    export interface AutoMigration  {
        autoIncrement?: boolean;
        columnType?: string;
    }


    export type StringAttribute = BaseAttribute<string> & {
        type: "string";
    }
    export type StringAttributeV3 = BaseAttributeV3<string> & {
        type: "string";
    }
    export type EmailAttribute = BaseAttribute<string> & {
        type: "email"
    }
    export type TextAttribute = BaseAttribute<string> & {
        type: "text";
    }
    export type IntegerAttribute = BaseAttribute<number> & {
        type: "integer";
        autoIncrement?: boolean;
    }
    export type NumberAttributeV3 = BaseAttributeV3<number> & {
        type: "number";
        autoIncrement?: boolean;
    }
    export type FloatAttribute = BaseAttribute<number> & {
        type: "float";
    }
    export type DateAttribute = BaseAttribute<Date> & {
        type: 'date';
    }
    export type TimeAttribute = BaseAttribute<Date> & {
        type: 'time';
    }
    export type DatetimeAttribute = BaseAttribute<Date> & {
        type: 'datetime';
    }
    export type BooleanAttribute = BaseAttribute<boolean> & {
        type: 'boolean';
    }
    export type BooleanAttributeV3 = BaseAttributeV3<boolean> & {
        type: "boolean";
      }
    export type BinaryAttribute = BaseAttribute<any> & {
        type: 'binary';
    }
    export type ArrayAttribute = BaseAttribute<any> & {
        type: 'array';
    }
    export type JsonAttribute = BaseAttribute<any> & {
        type: 'json';
    }
    export type JsonAttributeV3 = BaseAttributeV3<any> & {
        type: "json";
    }
    export type RefAttributeV3 = BaseAttributeV3<any> & {
        type: 'ref';
    }
    export type OneToOneAttribute = BaseAttribute<any> & {
        model: string;
    }
    export type OneToOneAttributeV3 = BaseAttributeV3<any> & {
        model: string;
    }
    export type OneToManyAttribute = BaseAttribute<any> & {
        collection: string;
        via: string;
    }
    export type OneToManyAttributeV3 = BaseAttributeV3<any> & {
        collection: string;
        via: string;
    }
    export type ManyToManyAttribute = BaseAttribute<any> & {
        collection: string;
        via: string;
        dominant?: boolean;
    }
    export type ManyToManyAttributeV3 = BaseAttributeV3<any> & {
        collection: string;
        via: string;
        dominant?: boolean;
    }
    type AttributeValidationSyncFn<T> = () => T;
    type AttributeValidationAsyncFn<T> = (cb: (value: T) => any) => void;

    export type AttributeValidation<T> = T | AttributeValidationSyncFn<T> | AttributeValidationAsyncFn<T>;
    export interface AttributeValidationsV3 {
        custom?: AttributeValidationAsyncFn<any>;
        isAfter?: AttributeValidation<Date>;
        isBefore?: AttributeValidation<Date>;
        isBoolean?: AttributeValidation<boolean>;
        isEmail?: AttributeValidation<boolean>;
        isCreditCard?:AttributeValidation<boolean>;
        isIP?: AttributeValidation<boolean>;
        isNotEmptyString?:AttributeValidation<boolean>;
        isNotIn?: AttributeValidation<string[]>;
        isNumber?: AttributeValidation<boolean>;
        isString?:AttributeValidation<boolean>;
        isURL?: AttributeValidation<boolean>;
        isUUID?: AttributeValidation<boolean>;
        max?: AttributeValidation<number>;
        min?: AttributeValidation<number>;
        maxLength?: AttributeValidation<number>;
        minLength?:  AttributeValidation<number>;
        regex?: AttributeValidation<RegExp>
    }
    export interface AttributeValidations {
        after?: AttributeValidation<string>;
        alpha?: AttributeValidation<boolean>;
        alphanumeric?: AttributeValidation<boolean>;
        array?: AttributeValidation<boolean>;
        before?: AttributeValidation<string>;
        boolean?: AttributeValidation<boolean>,
        contains?: AttributeValidation<string>,
        creditcard?: AttributeValidation<boolean>,
        date?: AttributeValidation<boolean>,
        decimal?: AttributeValidation<boolean>,
        email?: AttributeValidation<boolean>,
        empty?: AttributeValidation<boolean>,
        equals?: AttributeValidation<any>,
        falsey?: AttributeValidation<boolean>,
        finite?: AttributeValidation<boolean>,
        float?: AttributeValidation<boolean>,
        hexColor?: AttributeValidation<boolean>,
        hexadecimal?: AttributeValidation<boolean>,
        in?: AttributeValidation<string[]>,
        int?: AttributeValidation<boolean>,
        integer?: AttributeValidation<boolean>,
        ip?: AttributeValidation<boolean>,
        ipv4?: AttributeValidation<boolean>,
        ipv6?: AttributeValidation<boolean>,
        is?: AttributeValidation<RegExp>,
        len?: AttributeValidation<number>,
        lowercase?: AttributeValidation<boolean>,
        max?: AttributeValidation<number>,
        maxLength?: AttributeValidation<number>
        min?: AttributeValidation<number>,
        minLength?: AttributeValidation<number>,
        not?: AttributeValidation<RegExp>,
        notContains?: AttributeValidation<string>,
        notEmpty?: AttributeValidation<boolean>,
        notIn?: AttributeValidation<string[]>,
        notNull?: AttributeValidation<boolean>,
        notRegex?: AttributeValidation<RegExp>,
        null?: AttributeValidation<boolean>,
        number?: AttributeValidation<boolean>,
        numeric?: AttributeValidation<boolean>,
        regex?: AttributeValidation<RegExp>,
        required?: AttributeValidation<boolean>,
        string?: AttributeValidation<boolean>,
        truthy?: AttributeValidation<boolean>,
        undefined?: AttributeValidation<boolean>,
        uppercase?: AttributeValidation<boolean>,
        url?: AttributeValidation<boolean>,
        urlish?: AttributeValidation<boolean>,
        uuid?: AttributeValidation<boolean>,
        uuidv3?: AttributeValidation<boolean>,
        uuidv4?: AttributeValidation<boolean>,
    }

    type WaterlinePromise<T> = BluebirdPromise<T> & {
        exec(cb: (err: Error, result: T) => any): void;
    }
    type QueryBuilder<T> = WaterlinePromise<T> & {
        where(condition: any): QueryBuilder<T>;
        limit(lim: number): QueryBuilder<T>;
        skip(num: number): QueryBuilder<T>;
        sort(criteria: string | { [attribute: string]: string }): QueryBuilder<T>;
        paginate(pagination?: { page: number, limit: number }): QueryBuilder<T>;
        populate(association: string): QueryBuilder<T>;
        populate(association: string, filter: any): QueryBuilder<T>;
        groupBy(attrOrExpr: string): QueryBuilder<T>;
        max(attribute: string): QueryBuilder<T>;
        min(attribute: string): QueryBuilder<T>;
        sum(attribute: string): QueryBuilder<T>;
        average(attribute: string): QueryBuilder<T>;
    }
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
        create(params: any, cb?: Callback<any>): WaterlinePromise<any>;
        create(params: any[], cb?: Callback<any>): WaterlinePromise<any[]>;

        find(criteria?: any, cb?: Callback<any[]>): QueryBuilder<any[]>;

        findOne(criteria?: any, cb?: Callback<any>): QueryBuilder<any>;

        findOrCreate(criteria?: any, values?: any, cb?: Callback<any>): QueryBuilder<any>;

        update(criteria: any, changes: any, cb?: Callback<any>): WaterlinePromise<any[]>;
        update(criteria: any, changes: any[], cb?: Callback<any[]>): WaterlinePromise<any[]>;

        destroy(criteria: any, cb?: Callback<any>): WaterlinePromise<any[]>;
        destroy(criteria: any[], cb?: Callback<any[]>): WaterlinePromise<any[]>;

        count(criteria: any): WaterlinePromise<number>;
        count(criteria: any[]): WaterlinePromise<number>;

        query(sqlQuery: string, cb: Callback<any>): void;
        query(sqlQuery: string, data: any, cb: Callback<any>): void;

        native(cb: (err: Error, collection: any) => void): void;

        stream(criteria: any, writeEnd: any): NodeJS.WritableStream | Error;
    }
}
declare interface WaterlineStatic {
    Collection: {
        extend: (params: Waterline.CollectionDefinition) => Waterline.CollectionClass;
    }
    CollectionV3: {
        extend: (params: Waterline.CollectionDefinitionV3) => Waterline.CollectionClassV3;
    }
    new (): Waterline.Waterline;
}
declare var Waterline: WaterlineStatic;
export = Waterline;
