import { SObjectCreateOptions } from './create-options';
import { DescribeSObjectResult } from './describe-result';
import { Query, QueryResult } from './query';
import { RecordResult } from './record-result';
import { SObject } from './salesforce-object';

// These are pulled out because according to http://jsforce.github.io/jsforce/doc/connection.js.html#line49
//the oauth options can either be in the `oauth2` proeprty OR spread across the main connection
interface OAuth2Options {
    clientId: string;
    clientSecret: string;
    loginUrl: string;
    redirectUri?: string;
}

export interface ConnectionOptions extends Partial<OAuth2Options> {
    accessToken?: string;
    callOptions?: Object;
    instanceUrl?: string;
    loginUrl?: string;
    logLevel?: string;
    maxRequest?: number;
    oauth2?: OAuth2Options;
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

export class Connection {
    constructor(params: ConnectionOptions)

    accessToken: string;
    query<T>(soql: string, callback?: (err: Error, result: QueryResult<T>) => void): QueryResult<T>;
    sobject(resource: string): SObject;
    login(user: string, password: string, callback?: (err: Error, res: UserInfo) => void): Promise<UserInfo>;
    loginByOAuth2(user: string, password: string, callback?: (err: Error, res: UserInfo) => void): Promise<UserInfo>;
    loginBySoap(user: string, password: string, callback?: (err: Error, res: UserInfo) => void): Promise<UserInfo>;
    logout(callback?: (err: Error, res: undefined) => void): Promise<void>;
    logoutByOAuth2(callback?: (err: Error, res: undefined) => void): Promise<void>;
    logoutBySoap(callback?: (err: Error, res: undefined) => void): Promise<void>;
    on(eventName: ConnectionEvent, callback: Function): void;
}
