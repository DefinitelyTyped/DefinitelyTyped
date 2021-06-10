import { Handler, Callback } from "../handler";

export type ALBHandler = Handler<ALBEvent, ALBResult>;
export type ALBCallback = Callback<ALBResult>;

// https://docs.aws.amazon.com/elasticloadbalancing/latest/application/lambda-functions.html
export interface ALBEventRequestContext {
    elb: {
        targetGroupArn: string;
    };
}

export interface ALBEventQueryStringParameters {
    [name: string]: string | undefined;
}

export interface ALBEventHeaders {
    [name: string]: string | undefined;
}

export interface ALBEventMultiValueHeaders {
    [name: string]: string[] | undefined;
}

export interface ALBEventMultiValueQueryStringParameters {
    [name: string]: string[] | undefined;
}

export interface ALBEvent {
    requestContext: ALBEventRequestContext;
    httpMethod: string;
    path: string;
    queryStringParameters?: ALBEventQueryStringParameters; // URL encoded
    headers?: ALBEventHeaders;
    multiValueQueryStringParameters?: ALBEventMultiValueQueryStringParameters; // URL encoded
    multiValueHeaders?: ALBEventMultiValueHeaders;
    body: string | null;
    isBase64Encoded: boolean;
}

export interface ALBResult {
    statusCode: number;
    statusDescription?: string;
    headers?: { [header: string]: boolean | number | string };
    multiValueHeaders?: { [header: string]: Array<boolean | number | string> };
    body?: string;
    isBase64Encoded?: boolean;
}
