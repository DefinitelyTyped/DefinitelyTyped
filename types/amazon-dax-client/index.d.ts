/// <reference types="node"/>
import * as AWS from "aws-sdk2-types";

declare class AmazonDaxClient {
    constructor(options: AmazonDaxClientOptions);
    createCluster(params?: object, callback?: (err: any, data: object) => void): AWS.Request<object, any>;
}

interface AmazonDaxClientOptions {
    params?: Map<string, any> | undefined;
    endpoint?: string | undefined;
    endpoints?: ReadonlyArray<string> | undefined;
    accessKeyId?: string | undefined;
    secretAccessKey?: string | undefined;
    sessionToken?: string | undefined;
    region?: string | undefined;
    maxRetries?: number | undefined;
    maxRedirects?: number | undefined;
    apiVersion?: string | Date | undefined;
    httpOptions?: AmazonDaxClientHttpOptions | undefined;
}

interface AmazonDaxClientHttpOptions {
    proxy?: string | undefined;
    agent?: any;
    connectTimeout?: number | undefined;
    timeout?: number | undefined;
    xhrAsync?: boolean | undefined;
    xhrWithCredentials?: boolean | undefined;
}

export = AmazonDaxClient;
