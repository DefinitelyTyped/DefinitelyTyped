import { EventEmitter } from 'events';
import { DescribeSObjectResult, DescribeGlobalResult } from './describe-result';
import { Query, QueryResult } from './query';
import { Record } from './record';
import { RecordResult } from './record-result';
import { SObject } from './salesforce-object';
import { Analytics } from './api/analytics';
import { Chatter } from './api/chatter';
import { Metadata } from './api/metadata';

export type callback<T> = (err: Error, result: T) => void;

// These are pulled out because according to http://jsforce.github.io/jsforce/doc/connection.js.html#line49
// the oauth options can either be in the `oauth2` proeprty OR spread across the main connection
export interface OAuth2Options {
    clientId?: string;
    clientSecret?: string;
    loginUrl?: string;
    redirectUri?: string;
}

export interface RequestInfo {
    method?: string;
    url?: string;
    headers?: object;
}

export interface ConnectionOptions extends OAuth2Options {
    accessToken?: string;
    callOptions?: Object;
    instanceUrl?: string;
    loginUrl?: string;
    logLevel?: string;
    maxRequest?: number;
    oauth2?: Partial<OAuth2Options>;
    proxyUrl?: string;
    redirectUri?: string;
    refreshToken?: string;
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

export abstract class RestApi {
    get(path: string, options: object, callback: () => object): Promise<object>;
    post(path: string, body: object, options: object, callback: () => object): Promise<object>;
    put(path: string, body: object, options: object, callback: () => object): Promise<object>;
    patch(path: string, body: object, options: object, callback: () => object): Promise<object>;
    del(path: string, options: object, callback: () => object): Promise<object>;
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
    request(info: RequestInfo | string, options?: Object, callback?: (err: Error, Object: object) => void): Promise<Object>;
    query<T>(soql: string, callback?: (err: Error, result: QueryResult<T>) => void): Query<QueryResult<T>>;
    queryMore<T>(locator: string, options?: object, callback?: (err: Error, result: QueryResult<T>) => void): Promise<QueryResult<T>>;
    create<T>(type: string, records: Record<T>|Array<Record<T>>, options?: Object,
        callback?: (err: Error, result: RecordResult | RecordResult[]) => void): Promise<(RecordResult | RecordResult[])>;
    insert<T>(type: string, records: Record<T>|Array<Record<T>>, options?: Object,
        callback?: (err: Error, result: RecordResult | RecordResult[]) => void): Promise<(RecordResult | RecordResult[])>;
    retrieve<T>(type: string, ids: string|string[], options?: Object,
        callback?: (err: Error, result: Record<T> | Array<Record<T>>) => void): Promise<(Record<T> | Array<Record<T>>)>;
    update<T>(type: string, records: Record<T>|Array<Record<T>>, options?: Object,
        callback?: (err: Error, result: RecordResult | Array<Record<T>>) => void): Promise<(RecordResult | RecordResult[])>;
    upsert<T>(type: string, records: Record<T>|Array<Record<T>>, extIdField: string, options?: Object,
        callback?: (err: Error, result: RecordResult | RecordResult[]) => void): Promise<(RecordResult | RecordResult[])>;
    del<T>(type: string, ids: string|string[], options?: Object,
        callback?: (err: Error, result: RecordResult | RecordResult[]) => void): Promise<(RecordResult | RecordResult[])>;
    delete<T>(type: string, ids: string|string[], options?: Object,
        callback?: (err: Error, result: RecordResult | RecordResult[]) => void): Promise<(RecordResult | RecordResult[])>;
    destroy<T>(type: string, ids: string|string[], options?: Object,
        callback?: (err: Error, result: RecordResult | RecordResult[]) => void): Promise<(RecordResult | RecordResult[])>;
    describe<T>(type: string, callback?: (err: Error, result: DescribeSObjectResult) => void): Promise<DescribeSObjectResult>;
    describeGlobal<T>(callback?: (err: Error, result: DescribeGlobalResult) => void): Promise<DescribeGlobalResult>;
    sobject<T>(resource: string): SObject<T>;
}

export class Connection extends BaseConnection {
    constructor(params: ConnectionOptions)

    tooling: Tooling;
    analytics: Analytics;
    chatter: Chatter;
    metadata: Metadata;

    // Specific to Connection
    instanceUrl: string;
    version: string;
    accessToken: string;
    initialize(options?: ConnectionOptions): void;
    queryAll<T>(soql: string, options?: object, callback?: (err: Error, result: QueryResult<T>) => void): Query<QueryResult<T>>;
    authorize(code: string, callback?: (err: Error, res: UserInfo) => void): Promise<UserInfo>;
    login(user: string, password: string, callback?: (err: Error, res: UserInfo) => void): Promise<UserInfo>;
    loginByOAuth2(user: string, password: string, callback?: (err: Error, res: UserInfo) => void): Promise<UserInfo>;
    loginBySoap(user: string, password: string, callback?: (err: Error, res: UserInfo) => void): Promise<UserInfo>;
    logout(callback?: (err: Error, res: undefined) => void): Promise<void>;
    logoutByOAuth2(callback?: (err: Error, res: undefined) => void): Promise<void>;
    logoutBySoap(callback?: (err: Error, res: undefined) => void): Promise<void>;
}

export class Tooling extends BaseConnection {
    _logger: any;

    // Specific to tooling
    executeAnonymous(body: string, callback?: (err: Error, res: any) => void): Promise<any>;
}
