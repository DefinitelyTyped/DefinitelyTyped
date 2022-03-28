// Type definitions for @happyguestmx/web-utilities 3.17
// Project: https://github.com/HappyGuest/happyguestmx-web-utilities
// Definitions by: HappyGuest <https://github.com/HappyGuest>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line:no-single-declare-module
declare module '@happyguestmx/web-utilities' {
    import * as AWS from 'aws-sdk';
    import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

    // shared
    interface QueryOutput {
        Items: any[];
        Count: number;
    }

    // activityLogHandler
    interface LogEntry {
        type: string;
        current: {};
        updated: {};
        company_uuid: string;
        hotel_uuid: string | null | undefined;
        category: string | null | undefined;
        item: string | null | undefined;
        user_uuid: string | null | undefined;
        sourceIp: string;
    }
    interface ActivityLogHandler {
        logEntry: (params: LogEntry) => Promise<AWS.DynamoDB.DocumentClient.PutItemOutput>;
    }

    // assetsHandler
    interface StoreImageRequestPath {
        public: string;
        bucket: string;
    }
    type StoreGalleryRequestPath = StoreImageRequestPath;
    interface StoreImageRequest {
        image: string;
        format: string;
        key: string;
        path: StoreImageRequestPath;
    }
    interface StoreGalleryRequest {
        photo_gallery: string[];
        format: string;
        path: StoreGalleryRequestPath;
    }
    interface AmazonS3UriOutput {
        region: string;
        bucket: string;
        key: string;
    }
    interface AssetsHandler {
        getImage: (url: string, format: string) => Promise<string>;
        storeImage: (request: StoreImageRequest) => Promise<AWS.S3.PutObjectOutput>;
        storeGallery: (request: StoreGalleryRequest) => Promise<string[]>;
        amazonS3Uri: (url: string) => Promise<AmazonS3UriOutput>;
    }

    // common
    interface Common {
        uuidRegex: string;
        emailRegex: string;
        urlReGex: string;
        base64Regex: string;
        isURL: (string: string) => boolean;
        cleanFields: (item: {}) => Promise<{}>;
        notUndefined: (value: any) => boolean;
        isEmpty: (value: {}) => boolean;
        getCleanedString: (string: string) => string;
        cleanedObject: (obj: {}) => Promise<{}>;
        isBase64: (string: string) => boolean;
    }

    // errorsHandler
    interface FormErrorFields {
        label: string;
        name: string;
        error: any;
    }
    interface FormError {
        fields: { [key: string]: { fields: FormErrorFields } };
    }
    interface FormErrorHandlerOutput {
        message: string;
        code: string;
        statusCode: number;
        full_error_message: string;
    }
    interface ErrorsHandler {
        caolanFormErrorHandler: (form: FormError) => FormErrorHandlerOutput;
    }

    // paramsHandler
    interface ParamsHandler {
        requestHandler: (event: APIGatewayProxyEvent) => Promise<APIGatewayProxyResult>;
    }

    // response
    interface Response {
        success: (body: {}) => APIGatewayProxyResult;
        badRequest: (body: {}) => APIGatewayProxyResult;
        notFound: (body: {}) => APIGatewayProxyResult;
        failure: (body: {}) => APIGatewayProxyResult;
    }

    // fsp
    interface FspPaginOutput {
        start: number;
        end: number;
    }
    interface FspPaginationOutput {
        items: any[];
        total: number;
        pageTop: number;
        page: number;
        indexBegin: number;
        indexEnd: number;
    }
    interface FspQuery {
        queryString: string;
        orderBy: string;
        sortType: 'asc' | 'desc';
        size: number;
        page: number;
    }
    interface FSP {
        filter: boolean;
        should_sort: boolean;
        data: any[];
        filterColums: any[];
        Filter: (term: string | string[]) => boolean;
        Sort: (orderBy: string, sortType: 'asc' | 'desc') => any[];
        Pagin: (page: number, size: number) => FspPaginOutput;
        FSP: (query: FspQuery) => FspPaginationOutput;
    }
    interface FSPConstructor {
        new (fullData: any[], filterColums: any[], filter: boolean, sort: boolean): FSP;
    }

    // ddbHelper
    interface DdbHelper {
        recursiveQuery: (
            params: AWS.DynamoDB.DocumentClient.QueryInput | AWS.DynamoDB.DocumentClient.ScanInput,
            method: 'query' | 'scan',
            xray?: boolean,
        ) => Promise<QueryOutput>;
    }
    // userHandler
    interface User {
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
    interface CognitoAttributes {
        Name: string;
        Value: any;
    }
    interface UserHandler {
        getUserFromJWT: (AccessToken: string) => Promise<AWS.CognitoIdentityServiceProvider.GetUserResponse>;
        getCognitoUser: (AccessToken: string) => Promise<AWS.CognitoIdentityServiceProvider.GetUserResponse>;
        findUserInDB: (sub: string) => Promise<any>;
        findUserInConciergeUsers: (sub: string) => Promise<QueryOutput>;
        findUserInAdminUsers: (sub: string) => Promise<QueryOutput>;
        findUserInCoStaffUsers: (sub: string) => Promise<QueryOutput>;
        findUserInStaffUsers: (sub: string) => Promise<QueryOutput>;
        permissionsValidate: (user: User, level: string, company_uuid?: string, hotel_uuid?: string) => Promise<string>;
        cognitoAttributesToJson: (sub: CognitoAttributes[]) => Promise<{}>;
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
    const activityLogHandler: ActivityLogHandler;
    const assetsHandler: AssetsHandler;
    const common: Common;
    const errorsHandler: ErrorsHandler;
    const paramsHandler: ParamsHandler;
    const response: Response;
    const fsp: { FSP: FSPConstructor };
    const ddbHelper: DdbHelper;
    class WithDataError extends Error {}
    const userHandler: UserHandler;
}
