import { SObjectCreateOptions } from './create-options';
import { DescribeSObjectResult } from './describe-result';
import { Query } from './query';
import { RecordResult } from './record-result';
import { SObject } from './salesforce-object';

export interface ConnectionOptions {
    instanceUrl?: string;
    accessToken?: string;
    refreshToken?: string;
    oauth2?: {
        clientId: string,
        clientSecret: string,
        redirectUri?: string,
    };
    sessionId?: string;
    serverUrl?: string;
    redirectUri?: string;
}

export type ConnectionEvent = "refresh";

export class Connection {
    constructor(params: ConnectionOptions)

    sobject(resource: string): SObject;
    on(eventName: ConnectionEvent, callback: Function): void;
}
