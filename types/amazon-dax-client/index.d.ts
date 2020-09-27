// Type definitions for amazon-dax-client 1.2
// Project: https://aws.amazon.com/dynamodb/dax/
// Definitions by: Courtney Pitcher <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>
import * as AWS from 'aws-sdk';

declare class AmazonDaxClient {
    constructor(options: AmazonDaxClientOptions);
    createCluster(params?: object, callback?: (err: any, data: object) => void): AWS.Request<object, any>;
}

interface AmazonDaxClientOptions {
    params?: Map<string, any>;
    endpoint?: string;
    endpoints?: ReadonlyArray<string>;
    accessKeyId?: string;
    secretAccessKey?: string;
    region?: string;
    maxRetries?: number;
    maxRedirects?: number;
    apiVersion?: string | Date;
    httpOptions?: AmazonDaxClientHttpOptions;
}

interface AmazonDaxClientHttpOptions {
    proxy?: string;
    agent?: any;
    connectTimeout?: number;
    timeout?: number;
    xhrAsync?: boolean;
    xhrWithCredentials?: boolean;
}

export = AmazonDaxClient;
