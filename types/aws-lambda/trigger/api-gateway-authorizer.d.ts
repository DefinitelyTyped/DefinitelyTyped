import { APIGatewayEventRequestContext, AuthResponseContext } from "../common/api-gateway";
import { Callback, Handler } from "../handler";

export type CustomAuthorizerHandler = Handler<CustomAuthorizerEvent, CustomAuthorizerResult>;
export type CustomAuthorizerCallback = Callback<CustomAuthorizerResult>;

// API Gateway CustomAuthorizer "event"
export interface CustomAuthorizerEvent {
    type: string;
    methodArn: string;
    authorizationToken?: string;
    resource?: string;
    path?: string;
    httpMethod?: string;
    headers?: { [name: string]: string };
    multiValueHeaders?: { [name: string]: string[] };
    pathParameters?: { [name: string]: string } | null;
    queryStringParameters?: { [name: string]: string } | null;
    multiValueQueryStringParameters?: { [name: string]: string[] } | null;
    stageVariables?: { [name: string]: string };
    requestContext?: APIGatewayEventRequestContext;
    domainName?: string;
    apiId?: string;
}

/**
 * API Gateway CustomAuthorizer AuthResponse.
 * http://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html#api-gateway-custom-authorizer-output
 */
export interface CustomAuthorizerResult {
    principalId: string;
    policyDocument: PolicyDocument;
    context?: AuthResponseContext;
    usageIdentifierKey?: string;
}
export type AuthResponse = CustomAuthorizerResult;

/**
 * API Gateway CustomAuthorizer AuthResponse.PolicyDocument.
 * https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-lambda-authorizer-output.html
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Condition
 */
export interface PolicyDocument {
    Version: string;
    Id?: string;
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

export interface BaseStatement {
    Effect: string;
    Sid?: string;
    Condition?: ConditionBlock;
}

export type PrincipalValue = { [key: string]: string | string[] } | string | string[];
export interface MaybeStatementPrincipal {
    Principal?: PrincipalValue;
    NotPrincipal?: PrincipalValue;
}
export interface MaybeStatementResource {
    Resource?: string | string[];
    NotResource?: string | string[];
}
export type StatementAction = { Action: string | string[] } | { NotAction: string | string[] };
export type StatementResource = MaybeStatementPrincipal &
    ({ Resource: string | string[] } | { NotResource: string | string[] });
export type StatementPrincipal = MaybeStatementResource &
    ({ Principal: PrincipalValue } | { NotPrincipal: PrincipalValue });
