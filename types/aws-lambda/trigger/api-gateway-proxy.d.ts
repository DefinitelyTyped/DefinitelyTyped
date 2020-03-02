import {
    APIGatewayEventDefaultAuthorizerContext,
    APIGatewayEventRequestContextWithAuthorizer,
} from "../common/api-gateway";
import { Callback, Handler } from "../handler";

export type APIGatewayProxyHandler = Handler<APIGatewayProxyEvent, APIGatewayProxyResult>;
export type APIGatewayProxyCallback = Callback<APIGatewayProxyResult>;

export type APIGatewayProxyEvent = APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>;

export type APIGatewayProxyWithLambdaAuthorizerHandler<TAuthorizerContext> =
    Handler<APIGatewayProxyWithLambdaAuthorizerEvent<TAuthorizerContext>, APIGatewayProxyResult>;

export type APIGatewayProxyWithCognitoAuthorizerHandler =
    Handler<APIGatewayProxyWithCognitoAuthorizerEvent, APIGatewayProxyResult>;

export type APIGatewayProxyWithLambdaAuthorizerEvent<TAuthorizerContext> =
    APIGatewayProxyEventBase<APIGatewayEventLambdaAuthorizerContext<TAuthorizerContext>>;

export type APIGatewayProxyWithLambdaAuthorizerEventRequestContext<TAuthorizerContext> =
    APIGatewayEventRequestContextWithAuthorizer<APIGatewayEventLambdaAuthorizerContext<TAuthorizerContext>>;

// API Gateway proxy integration mangles the context from a custom authorizer,
// converting all number or boolean properties to string, and adding some extra properties.
export type APIGatewayEventLambdaAuthorizerContext<TAuthorizerContext> = {
    [P in keyof TAuthorizerContext]: TAuthorizerContext[P] extends null ? null : string;
} & {
    principalId: string;
    integrationLatency: number;
};

export type APIGatewayProxyWithCognitoAuthorizerEvent = APIGatewayProxyEventBase<APIGatewayProxyCognitoAuthorizer>;

// All claims are coerced into strings.
export interface APIGatewayProxyCognitoAuthorizer {
    claims: {
        [name: string]: string;
    };
}

export interface APIGatewayProxyEventBase<TAuthorizerContext> {
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
    requestContext: APIGatewayEventRequestContextWithAuthorizer<TAuthorizerContext>;
    resource: string;
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

// Legacy names
export type ProxyHandler = APIGatewayProxyHandler;
export type ProxyCallback = APIGatewayProxyCallback;
export type APIGatewayEvent = APIGatewayProxyEvent;
export type ProxyResult = APIGatewayProxyResult;
