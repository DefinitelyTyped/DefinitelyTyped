// Type definitions for @happyguestmx/web-utilities x.x
// Project: https://github.com/HappyGuest/happyguestmx-web-utilities
// Definitions by: HappyGuest <https://github.com/HappyGuest>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace WebUtilities;
import * as AWS from 'aws-sdk'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

// activityLogHandler
export interface ILogEntry {
    type: string;
    current: object;
    updated: object;
    company_uuid: string;
    hotel_uuid: string | null | undefined;
    category: string | null | undefined;
    item: string | null | undefined;
    user_uuid: string;
    sourceIp: string;
}
export interface IActivityLogHandler {
    logEntry: (params: ILogEntry) => Promise<AWS.DynamoDB.DocumentClient.PutItemOutput>;
}

// assetsHandler
export interface IStoreImageRequestPath {
    public: string;
    bucket: string;
}
export interface IStoreGalleryRequestPath extends IStoreImageRequestPath { }
export interface IStoreImageRequest {
    image: string;
    format: string;
    key: string;
    path: IStoreImageRequestPath;
}
export interface IStoreGalleryRequest {
    photo_gallery: string[];
    format: string;
    path: IStoreGalleryRequestPath;
}
export interface IAmazonS3UriOutput {
    region: string;
    bucket: string;
    key: string;
}
export interface IAssetsHandler {
    getImage: (url: string, format: string) => Promise<string>;
    storeImage: (request: IStoreImageRequest) => Promise<AWS.S3.PutObjectOutput>;
    storeGallery: (request: IStoreGalleryRequest) => Promise<string[]>;
    amazonS3Uri: (url: string) => Promise<IAmazonS3UriOutput>;
}

// common
export interface ICommon {
    uuidRegex: string;
    emailRegex: string;
    urlReGex: string;
    base64Regex: string;
    isURL: (string: string) => boolean;
    cleanFields: (item: object) => Promise<object>;
    notUndefined: (value: any) => boolean;
    isEmpty: (value: object) => boolean;
    getCleanedString: (string: string) => string;
    cleanedObject: (obj: object) => Promise<object>;
    isBase64: (string: string) => boolean;
}

// errorsHandler
export interface IFormErrorFields {
    label: string;
    name: string;
    error: any;
}
export interface IFormError {
    fields: { [key: string]: IFormErrorFields };
}
export interface IFormErrorHandlerOutput {
    message: string;
    code: string;
    statusCode: number;
    full_error_message: string
}
export interface IErrorsHandler {
    caolanFormErrorHandler: (form: IFormError) => IFormErrorHandlerOutput;
}

// paramsHandler
export interface ILogEntry {
    type: string;
    current: object;
    updated: object;
    company_uuid: string;
    hotel_uuid: string | null | undefined;
    category: string | null | undefined;
    item: string | null | undefined;
    user_uuid: string;
    sourceIp: string;
}
export interface IParamsHandler {
    requestHandler: (event: APIGatewayProxyEvent) => Promise<APIGatewayProxyResult>;
}

// response
export interface IResponse {
    success: (body: object) => APIGatewayProxyResult;
    badRequest: (body: object) => APIGatewayProxyResult;
    notFound: (body: object) => APIGatewayProxyResult;
    failure: (body: object) => APIGatewayProxyResult;
}

// fsp
interface IFspPaginOutput {
    start: number,
    end: number
}
interface IFspPaginationOutput {
    items: [],
    total: number,
    pageTop: number,
    page: number,
    indexBegin: number,
    indexEnd: number
}
interface IFspQuery {
    queryString: string,
    orderBy: string,
    sortType: 'asc' | 'desc',
    size: number,
    page: number
}
interface FSP {
    filter: boolean,
    should_sort: boolean,
    data: any[],
    filterColums: any[],
    Filter:(term: string | string[]) => boolean,
    Sort:(orderBy: string, sortType: 'asc' | 'desc') => any[],
    Pagin:(page: number, size: number) => IFspPaginOutput,
    FSP:(query: IFspQuery) => IFspPaginationOutput,
}
interface FSPConstructor {
    new(fullData: any[], filterColums: any[], filter: boolean, sort: boolean): FSP;
}

// ddbHelper #
export interface IRecursiveQueryOutput {
    type: string;
    current: object;
    updated: object;
    company_uuid: string;
    hotel_uuid: string | null | undefined;
    category: string | null | undefined;
    item: string | null | undefined;
    user_uuid: string;
    sourceIp: string;
}
// #
export interface IDdbHelper {
    recursiveQuery: (params: object, method: 'query' | 'scan', xray?: boolean) => Promise<IQueryOutput>;
}

// userHandler #
export interface IQueryUserOutput {
    company_uuid: string;
    name: string;
    email: string;
    employee_number: string;
    picture: string;
    uuid: string;
    status: string;
    last_name: string;
    role_key: string;
    enabled: string;
    hotel_uuids: string;
    locale: string;
    notifications: string;
    updated_at: string;
}
export interface IQueryOutput {
    Items: any[];
    Count: number
}
export interface IUserHandler {
    getUserFromJWT: (AccessToken: string) => Promise<AWS.CognitoIdentityServiceProvider.GetUserResponse>;
    getCognitoUser: (AccessToken: string) => Promise<AWS.CognitoIdentityServiceProvider.GetUserResponse>;
    findUserInDB: (sub: string) => Promise<IQueryOutput>;
    findUserInConciergeUsers: (sub: string) => Promise<IQueryOutput>;
    findUserInAdminUsers: (sub: string) => Promise<IQueryOutput>;
    findUserInCoStaffUsers: (sub: string) => Promise<IQueryOutput>;
    findUserInStaffUsers: (sub: string) => Promise<IQueryOutput>;
    permissionsValidate: (sub: string) => Promise<IQueryOutput>;
    cognitoAttributesToJson: (sub: { Name: string, Value: any }[]) => Promise<object>;
    findUserByEmail: (email: string) => Promise<object>;
    findAdminUserByEmail: (email: string) => Promise<IQueryUserOutput>;
    findCoStaffUserByEmail: (email: string) => Promise<IQueryOutput>;
    findStaffUserByEmail: (email: string) => Promise<IQueryOutput>;
    findUserByEmployeeNumber: (employee_number: string) => Promise<IQueryOutput>;
    findConciergeByEmplNumber: (employee_number: string) => Promise<IQueryOutput>;
    findCoStaffUserByEmplNumber: (employee_number: string) => Promise<IQueryOutput>;
}

/*************************************
 *              EXPORTS
*************************************/
export const activityLogHandler: IActivityLogHandler
export const assetsHandler: IAssetsHandler
export const common: ICommon;
export const errorsHandler: IErrorsHandler
export const paramsHandler: IParamsHandler
export const response: IResponse
export const fsp: { FSP: FSPConstructor }
export const ddbHelper: IDdbHelper;
export class WithDataError extends Error {}
export const userHandler: IUserHandler;
