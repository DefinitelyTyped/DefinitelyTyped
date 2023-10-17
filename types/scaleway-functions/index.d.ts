export type Handler<TResult = Response | object> = (
    event: Event,
    context: Context,
    callback: Callback<TResult>,
) => void | TResult | Promise<TResult>;

export type Callback<TResult = Response | object> = (error?: Error | string | null, result?: TResult) => void;

// https://github.com/scaleway/scaleway-functions-runtimes/blob/master/events/context.go
export interface Context {
    memoryLimitInMb: number;
    functionName: string;
    functionVersion: string;
}

// https://github.com/scaleway/scaleway-functions-runtimes/blob/master/events/http.go
export interface Event {
    path: string;
    httpMethod: string;
    headers: Record<string, string>;
    queryStringParameters: Record<string, string>;
    stageVariables: Record<string, string>;
    body: string;
    isBase64Encoded: boolean;
    requestContext: RequestContext;
}

export interface RequestContext {
    stage: string;
    httpMethod: string;
}

// https://github.com/scaleway/scaleway-functions-runtimes/blob/master/handler/utils.go
export interface Response {
    statusCode: number;
    body?: string | object;
    headers?: Record<string, string>;
    isBase64Encoded?: boolean;
}
