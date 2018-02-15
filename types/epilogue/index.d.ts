// Type definitions for epilogue 0.7
// Project: https://github.com/dchester/epilogue
// Definitions by: Satana Charuwichitratana <https://github.com/micksatana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import {
    Sequelize,
    AssociationOptions,
    DataTypeAbstract,
    DataTypeString,
    DataTypeChar,
    DataTypeText,
    DataTypeNumber,
    DataTypeInteger,
    DataTypeBigInt,
    DataTypeFloat,
    DataTypeTime,
    DataTypeDate,
    DataTypeDateOnly,
    DataTypeBoolean,
    DataTypeNow,
    DataTypeBlob,
    DataTypeDecimal,
    DataTypeUUID,
    DataTypeUUIDv1,
    DataTypeUUIDv4,
    DataTypeHStore,
    DataTypeJSONType,
    DataTypeJSONB,
    DataTypeVirtual,
    DataTypeArray,
    DataTypeEnum,
    DataTypeRange,
    DataTypeReal,
    DataTypeDouble,
    DataTypeGeometry
} from 'sequelize';

import { Express, Request, Response } from 'express';

export class Endpoint {
    constructor(endpoint: string);
    string: string;
    attributes: string[];
}

export class Resource {
    constructor(options: ResourceOptions);
    app: Express;
    sequelize: Sequelize;
    model: any;
    include: Array<{ model: any } | string>;
    associationOptions: ResourceAssociationOptions;
    readOnlyAttributes: string[];
    excludeAttributes: string[];
    attributes: string[];
    actions: string[];
    endpoints: {
        singular: string;
        plural: string;
    };
    updateMethod: string;
    pagination: boolean;
    search: ResourceSearchOption;
    sort: ResourceSortOption;
    reloadInstances: boolean;
    controllers: Controllers;
}

export interface Controllers {
    base: BaseController;
    create: CreateController;
    read: ReadController;
    update: UpdateController;
    delete: DeleteController;
    list: ListController;
}

export namespace Errors {
    class EpilogueError extends Error {
        constructor(status: number | EpilogueError, message?: string, errors?: string[], cause?: Error);

        name: string;
        message: string;
        errors: string[];
        status: number | EpilogueError;
        cause: Error;
    }

    class NotFoundError extends EpilogueError {
        constructor(message?: string, errors?: string[], cause?: Error);
    }

    class BadRequestError extends EpilogueError {
        constructor(message?: string, errors?: string[], cause?: Error);
    }

    class ForbiddenError extends EpilogueError {
        constructor(message?: string, errors?: string[], cause?: Error);
    }

    class RequestCompleted extends Error {
        constructor();
    }
}

export interface ResourceAssociationOptions extends AssociationOptions {
    removeForeignKeys: boolean;
}

export interface ResourceSearchOption {
    param: string;
    operator: string;
    attributes: string[];
}

export interface ResourceSortOption {
    param: string;
    default: string;
}

export interface InitializeOptions {
    app: Express;
    sequelize: Sequelize;
    base?: string;
    updateMethod?: string;
}

export interface BaseContollerOptions {
    endpoint: string;
    model: any;
    app: Express;
    resource: Resource;
    include: Array<{ model: any } | string>;
}

export interface Context {
    instance: Resource;
    criteria: any;
    attributes: any;
    options: any;
    continue: () => void;
    skip: () => void;
    stop: () => void;
    error: (status: number | Errors.EpilogueError, message?: string, errorList?: string[], cause?: Error) => void;
}

export class BaseController {
    constructor(options: BaseContollerOptions);
    endpoint: Endpoint;
    model: any;
}

export class CreateController extends BaseController {
    write: (req: Request, res: Response, context: Context) => Promise<() => void>;
}

export class ReadController extends BaseController {
    fetch: (req: Request, res: Response, context: Context) => Promise<() => void>;
}

export class UpdateController extends BaseController {
    fetch: (req: Request, res: Response, context: Context) => Promise<() => void>;
    write: (req: Request, res: Response, context: Context) => Promise<() => void>;
}

export class DeleteController extends BaseController {
    fetch: (req: Request, res: Response, context: Context) => Promise<() => void>;
    write: (req: Request, res: Response, context: Context) => Promise<() => void>;
}

export class ListController extends BaseController {
    fetch: (req: Request, res: Response, context: Context) => Promise<() => void>;
    _safeishParse: (value: any, type: DataTypeAbstract | DataTypeString | DataTypeChar | DataTypeText | DataTypeNumber |
                        DataTypeInteger | DataTypeBigInt | DataTypeFloat | DataTypeTime | DataTypeDate | DataTypeDateOnly |
                        DataTypeBoolean | DataTypeNow | DataTypeBlob | DataTypeDecimal | DataTypeUUID | DataTypeUUIDv1 |
                        DataTypeUUIDv4 | DataTypeHStore | DataTypeJSONType | DataTypeJSONB | DataTypeVirtual |
                        DataTypeArray | DataTypeEnum | DataTypeRange | DataTypeReal | DataTypeDouble | DataTypeGeometry,
                    sequelize: Sequelize) => any;
}

export interface ResourceOptions {
    model: any;
    endpoints: string[];
    actions?: string[];
    include?: Array<{ model: any } | string>;
    pagination?: boolean;
    search?: ResourceSearchOption;
    sort?: ResourceSortOption;
    reloadInstances?: boolean;
    associations?: AssociationOptions;
    excludeAttributes?: string[];
    readOnlyAttributes?: string[];
    updateMethod?: string;
}

export function initialize(options?: InitializeOptions): void;
export function resource(options?: ResourceOptions): Resource;
