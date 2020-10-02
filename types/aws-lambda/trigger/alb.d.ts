import { Handler, Callback } from "../handler";

export type ALBHandler = Handler<ALBEvent, ALBResult>;
export type ALBCallback = Callback<ALBResult>;

// https://docs.aws.amazon.com/elasticloadbalancing/latest/application/lambda-functions.html
export interface ALBEventRequestContext {
    elb: {
        targetGroupArn: string;
    };
}

export interface ALBEvent {
    requestContext: ALBEventRequestContext;
    httpMethod: string;
    path: string;
    queryStringParameters?: { [parameter: string]: string }; // URL encoded
    headers?: { [header: string]: string };
    multiValueQueryStringParameters?: { [parameter: string]: string[] }; // URL encoded
    multiValueHeaders?: { [header: string]: string[] };
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
