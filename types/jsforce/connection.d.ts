import { EventEmitter } from 'events';
import { BatchDescribeSObjectOptions, DescribeSObjectOptions, DescribeSObjectResult, DescribeGlobalResult } from './describe-result';
import { Query, QueryResult, ExecuteOptions } from './query';
import { Record } from './record';
import { RecordResult } from './record-result';
import { SObject } from './salesforce-object';
import { Analytics } from './api/analytics';
import { Chatter } from './api/chatter';
import { Metadata } from './api/metadata';
import { Apex } from './api/apex';
import { Bulk } from './bulk';
import { Cache } from './cache'
import { OAuth2, Streaming } from '.';
import { HttpApiOptions } from './http-api'
import { LimitsInfo } from './limits-info';

export type Callback<T> = (err: Error | null, result: T) => void;
// The type for these options was determined by looking at the usage
// of the options object in Connection.create and other methods
// go to http://jsforce.github.io/jsforce/doc/connection.js.html#line568
// and search for options
export interface RestApiOptions {
    headers?: { [x: string]: string }
    allowRecursive?: boolean;
    allOrNone?: boolean;
}

// These are pulled out because according to http://jsforce.github.io/jsforce/doc/connection.js.html#line49
// the oauth options can either be in the `oauth2` property OR spread across the main connection
export interface PartialOAuth2Options {
    clientId?: string;
    clientSecret?: string;
    loginUrl?: string;
    redirectUri?: string;
    tokenServiceUrl?: string;
    authzServiceUrl?: string;
}

export interface RequestInfo {
    body?: string;
    headers?: object;
    method?: string;
    url?: string;
}

export interface ConnectionOptions extends PartialOAuth2Options {
    accessToken?: string;
    callOptions?: Object;
    instanceUrl?: string;
    loginUrl?: string;
    logLevel?: string;
    maxRequest?: number;
    oauth2?: Partial<PartialOAuth2Options>;
    proxyUrl?: string;
    httpProxy?: string;
    redirectUri?: string;
    refreshToken?: string;
    refreshFn?: (conn: Connection, callback: Callback<UserInfo>) => Promise<UserInfo>;
    serverUrl?: string;
    sessionId?: string;
    signedRequest?: string | Object;
    version?: string;
}

export interface UserInfo {
    id: string;
    organizationId: string;
    url: string;
}

// The identity URL is a RESTful API to query for additional information
// about users, such as their username, email address, and org ID.
// It also returns endpoints that the client can talk to,
// such as photos for profiles and accessible API endpoints.
// https://help.salesforce.com/articleView?id=remoteaccess_using_openid.htm
// https://jsforce.github.io/jsforce/doc/Connection.html#identity
export interface IdentityInfo {
    id: string;
    asserted_user: boolean;
    user_id: string;
    organization_id: string;
    username: string;
    nick_name: string;
    display_name: string;
    email: string;
    email_verified: boolean;
    first_name: string | null;
    last_name: string;
    timezone: string;
    photos: {
        picture: string;
        thumbnail: string;
    };
    addr_street: string | null;
    addr_city: string | null;
    addr_state: string | null;
    addr_country: string | null;
    addr_zip: string | null;
    mobile_phone: string | null;
    mobile_phone_verified: boolean;
    is_lightning_login_user: boolean;
    status: {
        created_date: Date | null;
        body: string | null;
    };
    urls: {
        enterprise: string;
        metadata: string;
        partner: string;
        rest: string;
        sobjects: string;
        search: string;
        query: string;
        recent: string;
        tooling_soap: string;
        tooling_rest: string;
        profile: string;
        feeds: string;
        groups: string;
        users: string;
        feed_items: string;
        feed_elements: string;
        custom_domain?: string;
    };
    active: boolean;
    user_type: string;
    language: string;
    locale: string;
    utcOffset: number;
    last_modified_date: Date;
    is_app_installed: boolean;
    // And possible other attributes.
    [key: string]: any;
}

export abstract class RestApi {
    get(path: string, options: object, callback: () => object): Promise<object>;
    post(path: string, body: object, options: object, callback: () => object): Promise<object>;
    put(path: string, body: object, options: object, callback: () => object): Promise<object>;
    patch(path: string, body: object, options: object, callback: () => object): Promise<object>;
    del(path: string, options: object, callback: () => object): Promise<object>;
}

export interface ExecuteAnonymousResult {
    compiled: boolean;
    compileProblem: string;
    success: boolean;
    line: number;
    column: number;
    exceptionMessage: string;
    exceptionStackTrace: string;
}

export type ConnectionEvent = "refresh";

/**
 * the methods exposed here are done so that a client can use 'declaration augmentation' to get intellisense on their own projects.
 * for example, given a type
 *
 * interface Foo {
 *  thing: string;
 *  yes: boolean;
 * }
 *
 * you can write
 *
 * declare module "jsforce" {
 *  interface Connection {
 *    sobject(type: 'Foo'): SObject<Foo>
 *  }
 * }
 *
 * to ensure that you have the correct data types for the various collection names.
 */
export abstract class BaseConnection extends EventEmitter {
    _baseUrl(): string;
    request(info: RequestInfo | string, options?: HttpApiOptions, callback?: (err: Error, Object: object) => void): Promise<Object>;
    query<T>(soql: string, options?: ExecuteOptions, callback?: (err: Error, result: QueryResult<T>) => void): Query<QueryResult<T>>;
    queryMore<T>(locator: string, options?: ExecuteOptions, callback?: (err: Error, result: QueryResult<T>) => void): Promise<QueryResult<T>>;
    create<T>(type: string, records: Record<T> | Array<Record<T>>, options?: RestApiOptions,
        callback?: (err: Error, result: RecordResult | RecordResult[]) => void): Promise<(RecordResult | RecordResult[])>;
    create<T>(records: Record<T> | Array<Record<T>>, options?: RestApiOptions,
        callback?: (err: Error, result: RecordResult | RecordResult[]) => void): Promise<(RecordResult | RecordResult[])>;
    insert<T>(type: string, records: Record<T> | Array<Record<T>>, options?: RestApiOptions,
        callback?: (err: Error, result: RecordResult | RecordResult[]) => void): Promise<(RecordResult | RecordResult[])>;
    retrieve<T>(type: string, ids: string | string[], options?: RestApiOptions,
        callback?: (err: Error, result: Record<T> | Array<Record<T>>) => void): Promise<(Record<T> | Array<Record<T>>)>;
    update<T>(type: string, records: Record<T> | Array<Record<T>>, options?: RestApiOptions,
        callback?: (err: Error, result: RecordResult | Array<Record<T>>) => void): Promise<(RecordResult | RecordResult[])>;
    update<T>(records: Record<T> | Array<Record<T>>, options?: RestApiOptions,
        callback?: (err: Error, result: RecordResult | Array<Record<T>>) => void): Promise<(RecordResult | RecordResult[])>;
    upsert<T>(type: string, records: Record<T> | Array<Record<T>>, extIdField: string, options?: RestApiOptions,
        callback?: (err: Error, result: RecordResult | RecordResult[]) => void): Promise<(RecordResult | RecordResult[])>;
    upsert<T>(records: Record<T> | Array<Record<T>>, extIdField: string, options?: RestApiOptions,
        callback?: (err: Error, result: RecordResult | RecordResult[]) => void): Promise<(RecordResult | RecordResult[])>;
    del<T>(type: string, ids: string | string[], options?: RestApiOptions,
        callback?: (err: Error, result: RecordResult | RecordResult[]) => void): Promise<(RecordResult | RecordResult[])>;
    delete<T>(type: string, ids: string | string[], options?: RestApiOptions,
        callback?: (err: Error, result: RecordResult | RecordResult[]) => void): Promise<(RecordResult | RecordResult[])>;
    destroy<T>(type: string, ids: string | string[], options?: RestApiOptions,
        callback?: (err: Error, result: RecordResult | RecordResult[]) => void): Promise<(RecordResult | RecordResult[])>;
    describe$: {
        /** Returns a value from the cache if it exists, otherwise calls Connection.describe */
        (type: string|DescribeSObjectOptions, callback?: (err: Error, result: DescribeSObjectResult) => void): DescribeSObjectResult;
        clear(): void;
    }
    describe(type: string|DescribeSObjectOptions, callback?: (err: Error, result: DescribeSObjectResult) => void): Promise<DescribeSObjectResult>;
    batchDescribe(options: BatchDescribeSObjectOptions, callback?: (err: Error, result: DescribeSObjectResult[]) => void): Promise<DescribeSObjectResult[]>;
    describeGlobal$: {
        /** Returns a value from the cache if it exists, otherwise calls Connection.describeGlobal */
        (callback?: (err: Error, result: DescribeGlobalResult) => void): DescribeGlobalResult;
        clear(): void;
    }
    describeGlobal<T>(callback?: (err: Error, result: DescribeGlobalResult) => void): Promise<DescribeGlobalResult>;
    // we want any object to be accepted if the user doesn't decide to give an explicit type
    sobject<T = object>(resource: string): SObject<T>;
    recent(callback?: (err: Error, result: RecordResult[]) => void): Promise<(RecordResult[])>;
    recent(param: number | string, callback?: (err: Error, result: RecordResult[]) => void): Promise<(RecordResult[])>;
    recent(type: string, limit: number, callback?: (err: Error, result: RecordResult[]) => void): Promise<(RecordResult[])>;
}

export class Connection extends BaseConnection {
    constructor(params: ConnectionOptions)

    tooling: Tooling;
    analytics: Analytics;
    apex: Apex;
    chatter: Chatter;
    metadata: Metadata;
    bulk: Bulk;
    oauth2: OAuth2;
    streaming: Streaming;
    cache: Cache;

    // Specific to Connection
    instanceUrl: string;
    version: string;
    accessToken: string;
    refreshToken?: string;
    userInfo?: UserInfo;
    initialize(options?: ConnectionOptions): void;
    queryAll<T>(soql: string, options?: object, callback?: (err: Error, result: QueryResult<T>) => void): Query<QueryResult<T>>;
    authorize(code: string, callback?: (err: Error, res: UserInfo) => void): Promise<UserInfo>;
    login(user: string, password: string, callback?: (err: Error, res: UserInfo) => void): Promise<UserInfo>;
    loginByOAuth2(user: string, password: string, callback?: (err: Error, res: UserInfo) => void): Promise<UserInfo>;
    loginBySoap(user: string, password: string, callback?: (err: Error, res: UserInfo) => void): Promise<UserInfo>;
    logout(revoke: boolean, callback?: (err: Error, res: undefined) => void): Promise<void>;
    logout(callback?: (err: Error, res: undefined) => void): Promise<void>;
    logoutByOAuth2(revoke: boolean, callback?: (err: Error, res: undefined) => void): Promise<void>;
    logoutByOAuth2(callback?: (err: Error, res: undefined) => void): Promise<void>;
    logoutBySoap(revoke: boolean, callback?: (err: Error, res: undefined) => void): Promise<void>;
    logoutBySoap(callback?: (err: Error, res: undefined) => void): Promise<void>;
    limits(callback?: (err: Error, res: undefined) => void): Promise<LimitsInfo>;
    identity(callback?: (err: Error, res: IdentityInfo) => void): Promise<IdentityInfo>;
}

export class Tooling extends BaseConnection {
    _logger: any;

    // Specific to tooling
    executeAnonymous(body: string, callback?: (err: Error, res: any) => void): Promise<ExecuteAnonymousResult>;
}
