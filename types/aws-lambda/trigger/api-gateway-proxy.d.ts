import {
    APIGatewayEventDefaultAuthorizerContext,
    APIGatewayEventRequestContextWithAuthorizer,
} from "../common/api-gateway";
import { Callback, Handler } from "../handler";

/**
 * Works with Lambda Proxy Integration for Rest API or HTTP API integration Payload Format version 1.0
 * @see - https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
 */
export type APIGatewayProxyHandler = Handler<APIGatewayProxyEvent, APIGatewayProxyResult>;
/**
 * Works with Lambda Proxy Integration for Rest API or HTTP API integration Payload Format version 1.0
 * @see - https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
 */
export type APIGatewayProxyCallback = Callback<APIGatewayProxyResult>;

/**
 * Works with HTTP API integration Payload Format version 2.0
 * @see - https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
 */
export type APIGatewayProxyHandlerV2<T = never> = Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2<T>>;
/**
 * Works with HTTP API integration Payload Format version 2.0
 * @see - https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
 */
export type APIGatewayProxyCallbackV2 = Callback<APIGatewayProxyResultV2>;

/**
 * Works with Lambda Proxy Integration for Rest API or HTTP API integration Payload Format version 1.0
 * @see - https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
 */
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

export interface APIGatewayProxyEventHeaders {
    [name: string]: string | undefined;
}

export interface APIGatewayProxyEventMultiValueHeaders {
    [name: string]: string[] | undefined;
}

export interface APIGatewayProxyEventPathParameters {
    [name: string]: string | undefined;
}

export interface APIGatewayProxyEventQueryStringParameters {
    [name: string]: string | undefined;
}

export interface APIGatewayProxyEventMultiValueQueryStringParameters {
    [name: string]: string[] | undefined;
}

export interface APIGatewayProxyEventStageVariables {
    [name: string]: string | undefined;
}

export interface APIGatewayProxyEventBase<TAuthorizerContext> {
    body: string | null;
    headers: APIGatewayProxyEventHeaders;
    multiValueHeaders: APIGatewayProxyEventMultiValueHeaders;
    httpMethod: string;
    isBase64Encoded: boolean;
    path: string;
    pathParameters: APIGatewayProxyEventPathParameters | null;
    queryStringParameters: APIGatewayProxyEventQueryStringParameters | null;
    multiValueQueryStringParameters: APIGatewayProxyEventMultiValueQueryStringParameters | null;
    stageVariables: APIGatewayProxyEventStageVariables | null;
    requestContext: APIGatewayEventRequestContextWithAuthorizer<TAuthorizerContext>;
    resource: string;
}

/**
 * Works with Lambda Proxy Integration for Rest API or HTTP API integration Payload Format version 1.0
 * @see - https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
 */
export interface APIGatewayProxyResult {
    statusCode: number;
    headers?: {
        [header: string]: boolean | number | string;
    } | undefined;
    multiValueHeaders?: {
        [header: string]: Array<boolean | number | string>;
    } | undefined;
    body: string;
    isBase64Encoded?: boolean | undefined;
}

/**
 * Works with HTTP API integration Payload Format version 2.0
 * @see - https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
 */
export interface APIGatewayProxyEventV2 {
    version: string;
    routeKey: string;
    rawPath: string;
    rawQueryString: string;
    cookies?: string[] | undefined;
    headers: APIGatewayProxyEventHeaders;
    queryStringParameters?: APIGatewayProxyEventQueryStringParameters | undefined;
    requestContext: {
        accountId: string;
        apiId: string;
        authorizer?: {
            jwt: {
                claims: { [name: string]: string | number | boolean | string[] };
                scopes: string[];
            };
        } | undefined;
        domainName: string;
        domainPrefix: string;
        http: {
            method: string;
            path: string;
            protocol: string;
            sourceIp: string;
            userAgent: string;
        };
        requestId: string;
        routeKey: string;
        stage: string;
        time: string;
        timeEpoch: number;
    };
    body?: string | undefined;
    pathParameters?: APIGatewayProxyEventPathParameters | undefined;
    isBase64Encoded: boolean;
    stageVariables?: APIGatewayProxyEventStageVariables | undefined;
}

/**
 * Works with HTTP API integration Payload Format version 2.0
 * @see - https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
 */
export type APIGatewayProxyResultV2<T = never> = APIGatewayProxyStructuredResultV2 | string | T;

/**
 * Interface for structured response with `statusCode` and`headers`
 * Works with HTTP API integration Payload Format version 2.0
 * @see - https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
 */
export interface APIGatewayProxyStructuredResultV2 {
    statusCode?: number | undefined;
    headers?: {
        [header: string]: boolean | number | string;
    } | undefined;
    body?: string | undefined;
    isBase64Encoded?: boolean | undefined;
    cookies?: string[] | undefined;
}

// Legacy names
export type ProxyHandler = APIGatewayProxyHandler;
export type ProxyCallback = APIGatewayProxyCallback;
export type APIGatewayEvent = APIGatewayProxyEvent;
export type ProxyResult = APIGatewayProxyResult;
