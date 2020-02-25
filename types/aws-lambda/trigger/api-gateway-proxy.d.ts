import { APIGatewayEventRequestContextWithAuthorizer, AuthResponseContext } from "../common/api-gateway";
import { Callback, Handler } from "../handler";

export type APIGatewayProxyHandler = Handler<APIGatewayProxyEvent, APIGatewayProxyResult>;
export type APIGatewayProxyCallback = Callback<APIGatewayProxyResult>;

export type APIGatewayProxyWithAuthorizerHandler<TAuthorizer> = Handler<APIGatewayProxyEventWithAuthorizer<TAuthorizer>, APIGatewayProxyResult>;

export type ProxyHandler = APIGatewayProxyHandler; // Old name
export type ProxyCallback = APIGatewayProxyCallback; // Old name
export type APIGatewayEvent = APIGatewayProxyEvent; // Old name
export type ProxyResult = APIGatewayProxyResult; // Old name

export type APIGatewayProxyEvent = APIGatewayProxyEventWithAuthorizer<AuthResponseContext | null | undefined>;

export interface APIGatewayProxyEventWithAuthorizer<TAuthorizer> {
    body: string | null;
    headers: { [name: string]: string };
    multiValueHeaders: { [name: string]: string[] };
    httpMethod: string;
    isBase64Encoded: boolean;
    path: string;
    pathParameters: { [name: string]: string } | null;
    queryStringParameters: { [name: string]: string } | null;
    multiValueQueryStringParameters: { [name: string]: string[] } | null;
    stageVariables: { [name: string]: string } | null;
    requestContext: APIGatewayEventRequestContextWithAuthorizer<TAuthorizer>;
    resource: string;
}

export type APIGatewayProxyEventWithCognitoAuthorizer = APIGatewayProxyEventWithAuthorizer<APIGatewayProxyCognitoAuthorizer>;
export type APIGatewayEventRequestContextWithCognitoAuthorizer = APIGatewayEventRequestContextWithAuthorizer<APIGatewayProxyCognitoAuthorizer>;

export interface APIGatewayProxyCognitoAuthorizer {
    claims: {
        [name: string]: string | number | boolean,
    };
}

export interface APIGatewayProxyResult {
    statusCode: number;
    headers?: {
        [header: string]: boolean | number | string;
    };
    multiValueHeaders?: {
        [header: string]: Array<boolean | number | string>;
    };
    body: string;
    isBase64Encoded?: boolean;
}
