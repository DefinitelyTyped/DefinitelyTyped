// Type definitions for @happyguestmx/web-utilities 3.17
// Project: https://github.com/HappyGuest/happyguestmx-web-utilities
// Definitions by: HappyGuest <https://github.com/HappyGuest>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace WebUtilities;
import * as AWS from 'aws-sdk';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

// shared
export interface QueryOutput {
    Items: any[];
    Count: number;
}

// activityLogHandler
export interface LogEntry {
    type: string;
    current: object;
    updated: object;
    company_uuid: string;
    hotel_uuid: string | null | undefined;
    category: string | null | undefined;
    item: string | null | undefined;
    user_uuid: string | null | undefined;
    sourceIp: string;
}
export interface ActivityLogHandler {
    logEntry: (params: LogEntry) => Promise<AWS.DynamoDB.DocumentClient.PutItemOutput>;
}

// assetsHandler
export interface StoreImageRequestPath {
    public: string;
    bucket: string;
}
export type StoreGalleryRequestPath = StoreImageRequestPath;
export interface StoreImageRequest {
    image: string;
    format: string;
    key: string;
    path: StoreImageRequestPath;
}
export interface StoreGalleryRequest {
    photo_gallery: string[];
    format: string;
    path: StoreGalleryRequestPath;
}
export interface AmazonS3UriOutput {
    region: string;
    bucket: string;
    key: string;
}
export interface AssetsHandler {
    getImage: (url: string, format: string) => Promise<string>;
    storeImage: (request: StoreImageRequest) => Promise<AWS.S3.PutObjectOutput>;
    storeGallery: (request: StoreGalleryRequest) => Promise<string[]>;
    amazonS3Uri: (url: string) => Promise<AmazonS3UriOutput>;
}

// common
export interface Common {
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
export interface FormErrorFields {
    label: string;
    name: string;
    error: any;
}
export interface FormError {
    fields: { [key: string]: { fields: FormErrorFields } };
}
export interface FormErrorHandlerOutput {
    message: string;
    code: string;
    statusCode: number;
    full_error_message: string;
}
export interface ErrorsHandler {
    caolanFormErrorHandler: (form: FormError) => FormErrorHandlerOutput;
}

// paramsHandler
export interface ParamsHandler {
    requestHandler: (event: APIGatewayProxyEvent) => Promise<APIGatewayProxyResult>;
}

// response
export interface Response {
    success: (body: object) => APIGatewayProxyResult;
    badRequest: (body: object) => APIGatewayProxyResult;
    notFound: (body: object) => APIGatewayProxyResult;
    failure: (body: object) => APIGatewayProxyResult;
}

// fsp
export interface FspPaginOutput {
    start: number;
    end: number;
}
export interface FspPaginationOutput {
    items: any[];
    total: number;
    pageTop: number;
    page: number;
    indexBegin: number;
    indexEnd: number;
}
export interface FspQuery {
    queryString: string;
    orderBy: string;
    sortType: 'asc' | 'desc';
    size: number;
    page: number;
}
export interface FSP {
    filter: boolean;
    should_sort: boolean;
    data: any[];
    filterColums: any[];
    Filter: (term: string | string[]) => boolean;
    Sort: (orderBy: string, sortType: 'asc' | 'desc') => any[];
    Pagin: (page: number, size: number) => FspPaginOutput;
    FSP: (query: FspQuery) => FspPaginationOutput;
}
export interface FSPConstructor {
    new(fullData: any[], filterColums: any[], filter: boolean, sort: boolean): FSP;
}

// ddbHelper
export interface DdbHelper {
    recursiveQuery: (
        params: AWS.DynamoDB.DocumentClient.QueryInput | AWS.DynamoDB.DocumentClient.ScanInput,
        method: 'query' | 'scan',
        xray?: boolean
    ) => Promise<QueryOutput>;
}
// userHandler
export interface User {
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
export interface CognitoAttributes {
    Name: string;
    Value: any;
}
export interface UserHandler {
    getUserFromJWT: (AccessToken: string) => Promise<AWS.CognitoIdentityServiceProvider.GetUserResponse>;
    getCognitoUser: (AccessToken: string) => Promise<AWS.CognitoIdentityServiceProvider.GetUserResponse>;
    findUserInDB: (sub: string) => Promise<any>;
    findUserInConciergeUsers: (sub: string) => Promise<QueryOutput>;
    findUserInAdminUsers: (sub: string) => Promise<QueryOutput>;
    findUserInCoStaffUsers: (sub: string) => Promise<QueryOutput>;
    findUserInStaffUsers: (sub: string) => Promise<QueryOutput>;
    permissionsValidate: (user: User, level: string, company_uuid?: string, hotel_uuid?: string) => Promise<string>;
    cognitoAttributesToJson: (sub: CognitoAttributes[]) => Promise<object>;
    findUserByEmail: (email: string) => Promise<any>;
    findAdminUserByEmail: (email: string) => Promise<any>;
    findCoStaffUserByEmail: (email: string) => Promise<QueryOutput>;
    findStaffUserByEmail: (email: string) => Promise<QueryOutput>;
    findUserByEmployeeNumber: (employee_number: string) => Promise<any>;
    findConciergeByEmplNumber: (employee_number: string) => Promise<QueryOutput>;
    findCoStaffUserByEmplNumber: (employee_number: string) => Promise<QueryOutput>;
}

/*************************************
                EXPORTS
*************************************/
export const activityLogHandler: ActivityLogHandler;
export const assetsHandler: AssetsHandler;
export const common: Common;
export const errorsHandler: ErrorsHandler;
export const paramsHandler: ParamsHandler;
export const response: Response;
export const fsp: { FSP: FSPConstructor };
export const ddbHelper: DdbHelper;
export class WithDataError extends Error { }
export const userHandler: UserHandler;
