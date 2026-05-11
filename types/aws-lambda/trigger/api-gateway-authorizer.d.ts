import {
    APIGatewayAuthorizerResultContext,
    APIGatewayEventDefaultAuthorizerContext,
    APIGatewayEventRequestContextWithAuthorizer,
} from "../common/api-gateway";
import { Callback, Handler } from "../handler";
import { APIGatewayEventRequestContextV2 } from "./api-gateway-proxy";

export type APIGatewayAuthorizerHandler = Handler<APIGatewayAuthorizerEvent, APIGatewayAuthorizerResult>;
export type APIGatewayAuthorizerWithContextHandler<TAuthorizerContext extends APIGatewayAuthorizerResultContext> =
    Handler<APIGatewayAuthorizerEvent, APIGatewayAuthorizerWithContextResult<TAuthorizerContext>>;

export type APIGatewayAuthorizerCallback = Callback<APIGatewayAuthorizerResult>;
export type APIGatewayAuthorizerWithContextCallback<TAuthorizerContext extends APIGatewayAuthorizerResultContext> =
    Callback<APIGatewayAuthorizerWithContextResult<TAuthorizerContext>>;

export type APIGatewayTokenAuthorizerHandler = Handler<APIGatewayTokenAuthorizerEvent, APIGatewayAuthorizerResult>;
export type APIGatewayTokenAuthorizerWithContextHandler<TAuthorizerContext extends APIGatewayAuthorizerResultContext> =
    Handler<APIGatewayTokenAuthorizerEvent, APIGatewayAuthorizerWithContextResult<TAuthorizerContext>>;

export type APIGatewayRequestAuthorizerHandler = Handler<APIGatewayRequestAuthorizerEvent, APIGatewayAuthorizerResult>;
export type APIGatewayRequestAuthorizerWithContextHandler<
    TAuthorizerContext extends APIGatewayAuthorizerResultContext,
> = Handler<APIGatewayRequestAuthorizerEvent, APIGatewayAuthorizerWithContextResult<TAuthorizerContext>>;

export type APIGatewayAuthorizerEvent = APIGatewayTokenAuthorizerEvent | APIGatewayRequestAuthorizerEvent;

export interface APIGatewayTokenAuthorizerEvent {
    type: "TOKEN";
    methodArn: string;
    authorizationToken: string;
}

export interface APIGatewayRequestAuthorizerEventV2 {
    version: string;
    type: "REQUEST";
    routeArn: string;
    identitySource: string[];
    routeKey: string;
    rawPath: string;
    rawQueryString: string;
    cookies: string[];
    headers?: APIGatewayRequestAuthorizerEventHeaders;
    queryStringParameters?: APIGatewayRequestAuthorizerEventQueryStringParameters;
    requestContext: APIGatewayEventRequestContextV2;
    pathParameters?: APIGatewayRequestAuthorizerEventPathParameters;
    stageVariables?: APIGatewayRequestAuthorizerEventStageVariables;
}

export interface APIGatewayRequestAuthorizerEventHeaders {
    [name: string]: string | undefined;
}

export interface APIGatewayRequestAuthorizerEventMultiValueHeaders {
    [name: string]: string[] | undefined;
}

export interface APIGatewayRequestAuthorizerEventPathParameters {
    [name: string]: string | undefined;
}

export interface APIGatewayRequestAuthorizerEventQueryStringParameters {
    [name: string]: string | undefined;
}

export interface APIGatewayRequestAuthorizerEventMultiValueQueryStringParameters {
    [name: string]: string[] | undefined;
}

export interface APIGatewayRequestAuthorizerEventStageVariables {
    [name: string]: string | undefined;
}

// Note, when invoked by the tester in the AWS web console, the map values can be null,
// but they will be empty objects in the real object.
// Worse, it will include "body" and "isBase64Encoded" properties, unlike the real call!
// See https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-lambda-authorizer-input.html for the
// formal definition.
export interface APIGatewayRequestAuthorizerEvent {
    type: "REQUEST";
    methodArn: string;
    resource: string;
    path: string;
    httpMethod: string;
    headers: APIGatewayRequestAuthorizerEventHeaders | null;
    multiValueHeaders: APIGatewayRequestAuthorizerEventMultiValueHeaders | null;
    pathParameters: APIGatewayRequestAuthorizerEventPathParameters | null;
    queryStringParameters: APIGatewayRequestAuthorizerEventQueryStringParameters | null;
    multiValueQueryStringParameters: APIGatewayRequestAuthorizerEventMultiValueQueryStringParameters | null;
    stageVariables: APIGatewayRequestAuthorizerEventStageVariables | null;
    requestContext: APIGatewayEventRequestContextWithAuthorizer<undefined>;
}

export interface APIGatewayAuthorizerResult {
    principalId: string;
    policyDocument: PolicyDocument;
    context?: APIGatewayAuthorizerResultContext | null | undefined;
    usageIdentifierKey?: string | null | undefined;
}

// Separate type so the context property is required, without pulling complex type magic.
export interface APIGatewayAuthorizerWithContextResult<TAuthorizerContext extends APIGatewayAuthorizerResultContext> {
    principalId: string;
    policyDocument: PolicyDocument;
    context: TAuthorizerContext;
    usageIdentifierKey?: string | null | undefined;
}

/**
 * IAM Authorizer Types
 */
export interface APIGatewayIAMAuthorizerResult {
    principalId: string;
    policyDocument: PolicyDocument;
    context?: APIGatewayAuthorizerResultContext | null | undefined;
    usageIdentifierKey?: string | null | undefined;
}

export interface APIGatewayIAMAuthorizerWithContextResult<
    TAuthorizerContext extends APIGatewayAuthorizerResultContext,
> {
    principalId: string;
    policyDocument: PolicyDocument;
    context: TAuthorizerContext;
    usageIdentifierKey?: string | null | undefined;
}

export type APIGatewayRequestIAMAuthorizerHandlerV2 = Handler<
    APIGatewayRequestAuthorizerEventV2,
    APIGatewayIAMAuthorizerResult
>;

export type APIGatewayRequestIAMAuthorizerV2WithContextHandler<
    TAuthorizerContext extends APIGatewayAuthorizerResultContext,
> = Handler<APIGatewayRequestAuthorizerEventV2, APIGatewayIAMAuthorizerWithContextResult<TAuthorizerContext>>;

/**
 * Simple Lambda Authorizer Types V2 spec with simple response
 * @see - https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html
 */
export interface APIGatewaySimpleAuthorizerResult {
    isAuthorized: boolean;
}

export interface APIGatewaySimpleAuthorizerWithContextResult<TAuthorizerContext>
    extends APIGatewaySimpleAuthorizerResult
{
    context: TAuthorizerContext;
}

export type APIGatewayRequestSimpleAuthorizerHandlerV2 = Handler<
    APIGatewayRequestAuthorizerEventV2,
    APIGatewaySimpleAuthorizerResult
>;

export type APIGatewayRequestSimpleAuthorizerHandlerV2WithContext<TAuthorizerContext> = Handler<
    APIGatewayRequestAuthorizerEventV2,
    APIGatewaySimpleAuthorizerWithContextResult<TAuthorizerContext>
>;

// Legacy event / names

/** @deprecated Use APIGatewayAuthorizerHandler or a subtype */
export type CustomAuthorizerHandler = Handler<CustomAuthorizerEvent, APIGatewayAuthorizerResult>;

// This one is actually fine.
export type CustomAuthorizerCallback = APIGatewayAuthorizerCallback;

/** @deprecated Use APIGatewayAuthorizerEvent or a subtype */
export interface CustomAuthorizerEvent {
    type: string;
    methodArn: string;
    authorizationToken?: string | undefined;
    resource?: string | undefined;
    path?: string | undefined;
    httpMethod?: string | undefined;
    headers?: { [name: string]: string } | undefined;
    multiValueHeaders?: { [name: string]: string[] } | undefined;
    pathParameters?: { [name: string]: string } | null | undefined;
    queryStringParameters?: { [name: string]: string } | null | undefined;
    multiValueQueryStringParameters?: { [name: string]: string[] } | null | undefined;
    stageVariables?: { [name: string]: string } | undefined;
    requestContext?: APIGatewayEventRequestContextWithAuthorizer<APIGatewayEventDefaultAuthorizerContext> | undefined;
    domainName?: string | undefined;
    apiId?: string | undefined;
}

export type CustomAuthorizerResult = APIGatewayAuthorizerResult;
export type AuthResponse = APIGatewayAuthorizerResult;
export type AuthResponseContext = APIGatewayAuthorizerResultContext;

/**
 * API Gateway CustomAuthorizer AuthResponse.PolicyDocument.
 * https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-lambda-authorizer-output.html
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Condition
 */
export interface PolicyDocument {
    Version: string;
    Id?: string | undefined;
    Statement: Statement[];
}

/**
 * API Gateway CustomAuthorizer AuthResponse.PolicyDocument.Condition.
 * https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-policy-language-overview.html
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html
 */
export interface ConditionBlock {
    [condition: string]: Condition | Condition[];
}

export interface Condition {
    [key: string]: string | string[];
}

/**
 * API Gateway CustomAuthorizer AuthResponse.PolicyDocument.Statement.
 * https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-policy-language-overview.html
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html
 */
export type Statement = BaseStatement & StatementAction & (StatementResource | StatementPrincipal);

export type StatementEffect = "Allow" | "Deny";

export interface BaseStatement {
    Effect: StatementEffect;
    Sid?: string | undefined;
    Condition?: ConditionBlock | undefined;
}

export type PrincipalValue = { [key: string]: string | string[] } | string | string[];
export interface MaybeStatementPrincipal {
    Principal?: PrincipalValue | undefined;
    NotPrincipal?: PrincipalValue | undefined;
}
export interface MaybeStatementResource {
    Resource?: string | string[] | undefined;
    NotResource?: string | string[] | undefined;
}
export type StatementAction = { Action: string | string[] } | { NotAction: string | string[] };
export type StatementResource =
    & MaybeStatementPrincipal
    & ({ Resource: string | string[] } | { NotResource: string | string[] });
export type StatementPrincipal =
    & MaybeStatementResource
    & ({ Principal: PrincipalValue } | { NotPrincipal: PrincipalValue });
