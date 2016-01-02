// Type definitions for rest-io 4.0
// Project: https://github.com/EnoF/rest-io
// Definitions by: Andy Tang <https://github.com/EnoF>, Stefan Schacherl <https://github.com/TheBay0r>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />
/// <reference path="../mongoose/mongoose.d.ts" />


declare module 'rest-io' {
import {Router, Application, Response, Request} from 'express';

import {Mongoose, Schema, Model, Document, Types, Promise} from 'mongoose';

  function restIO(app: Application, config?: IRestIOConfig): RestIO;

  export interface RestIO {
    resource: ResourceModule
  }

  export interface IRestIOConfig {
    resources: string;
    db?: Mongoose;
  }

  export interface ResourceModule {
    Resource: Resource;
    AuthorizedResource: AuthorizedResource;
    authorizedResource: AuthorizedResourceModule;
    UserResource: UserResource;
    SubResource: SubResource;
  }

  export class Resource {
    baseUrl: string;
    url: string;
    parameterizedUrl: string;
    model: Model<Document>;
    resDef: IResource;
    parentResource: Resource;
    router: Router;
    app: Application;
    db: Mongoose;
    paramId: string;
    parentRef: string;
    populate: string;

    constructor(resDef: IResource);

    createModel(resDef: IResource): Model<Document>;

    toClassName(name: string): string;

    setupRoutes(): void;

    getAll(req: Request, res: Response): void;

    buildParentSearch(req: Request): any;

    getById(req: Request, res: Response): void;

    create(req: Request, res: Response): void;

    update(req: Request, res: Response): void;

    del(req: Request, res: Response): void;

    errorHandler(err: Error, res: Response): void;
  }

  export interface IResource {
    name: string;
    model: any;
    parentRef?: string;
    populate?: string;
    plural?: string;
    parentResource?: Resource;
  }

  export interface AuthorizedResourceModule {
    AuthorizedResource: AuthorizedResource
    ROLES: Roles
  }

  export interface Roles {
    USER: string;
    SUPER_USER: string;
    MODERATOR: string;
    ADMIN: string;
  }

  export class AuthorizedResource extends Resource {
    methodAccess: IMethodAccess;

    maxDays: number;

    permissions: IMethodAccess;

    isTokenExpired(createdAt: Date): boolean;

    getRoles(id: string): Promise<Document>;

    hasAuthorizedRole(roles: Array<any>, authorizedRoles: Array<string>): boolean;

    hasAccessRightsDefined(req: Request, authorizedRoles: Array<string>): boolean;

    isAuthorized(req: Request, authorizedRoles: Array<string>): boolean;

    sendUnauthorized(error: Error, res: Response): void;
  }

  export interface IMethodAccess {
    getAll: Array<string>;
    getById: Array<string>;
    create: Array<string>;
    update: Array<string>;
    del: Array<string>;
  }

  export class UserResource extends AuthorizedResource {
    ensureBaseUserModel(model: any): void;

    createRoleModel(): void;

    isSelf(req: Request): boolean;

    login(req: Request, res: Response): void;
  }

  export class SubResource extends Resource {
    constructor(resDef: ISubResource);

    createProjectionQuery(req: Request): any;

    createPullQuery(req: Request): any;

    createFindQuery(req: Request): any;

    createSubUpdateQuery(req: Request): any;
  }

  export interface ISubResource {
    name: string;
    plural?: string;
    parentResource: Resource;
    populate?: string;
  }
}