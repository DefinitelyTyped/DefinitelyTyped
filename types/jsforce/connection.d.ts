import { SObjectCreateOptions } from './create-options';
import { DescribeSObjectResult } from './describe-result';
import { Query, QueryResult } from './query';
import { RecordResult } from './record-result';
import { SObject } from './salesforce-object';

// These are pulled out because according to http://jsforce.github.io/jsforce/doc/connection.js.html#line49
// the oauth options can either be in the `oauth2` proeprty OR spread across the main connection
export interface OAuth2Options {
    clientId?: string;
    clientSecret?: string;
    loginUrl?: string;
    redirectUri?: string;
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
export interface Connection {
    query<T>(soql: string, callback?: (err: Error, result: QueryResult<T>) => void): Query<QueryResult<T>>;
    sobject<T>(resource: string): SObject<T>;
}

export class Connection implements Connection {
    constructor(params: ConnectionOptions)
    accessToken: string;
    login(user: string, password: string, callback?: (err: Error, res: UserInfo) => void): Promise<UserInfo>;
    loginByOAuth2(user: string, password: string, callback?: (err: Error, res: UserInfo) => void): Promise<UserInfo>;
    loginBySoap(user: string, password: string, callback?: (err: Error, res: UserInfo) => void): Promise<UserInfo>;
    logout(callback?: (err: Error, res: undefined) => void): Promise<void>;
    logoutByOAuth2(callback?: (err: Error, res: undefined) => void): Promise<void>;
    logoutBySoap(callback?: (err: Error, res: undefined) => void): Promise<void>;
    on(eventName: ConnectionEvent, callback: Function): void;
}
