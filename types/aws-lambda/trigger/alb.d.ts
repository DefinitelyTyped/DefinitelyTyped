import { Handler, Callback } from '../handler';

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
    queryStringParameters?: ALBEventQueryStringParameters | undefined; // URL encoded
    headers?: ALBEventHeaders | undefined;
    multiValueQueryStringParameters?: ALBEventMultiValueQueryStringParameters | undefined; // URL encoded
    multiValueHeaders?: ALBEventMultiValueHeaders | undefined;
    body: string | null;
    isBase64Encoded: boolean;
}

export interface ALBResult {
    statusCode: number;
    statusDescription?: string | undefined;
    headers?: { [header: string]: boolean | number | string } | undefined;
    multiValueHeaders?: { [header: string]: Array<boolean | number | string> } | undefined;
    body?: string | undefined;
    isBase64Encoded?: boolean | undefined;
}
