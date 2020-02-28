// Used by both APIGatewayProxyEvent and APIGatewayAuthorizerEvent
export interface APIGatewayEventRequestContext {
    accountId: string;
    apiId: string;
    authorizer?: AuthResponseContext | null;
    connectedAt?: number;
    connectionId?: string;
    domainName?: string;
    domainPrefix?: string;
    eventType?: string;
    extendedRequestId?: string;
    protocol: string;
    httpMethod: string;
    identity: APIGatewayEventIdentity;
    messageDirection?: string;
    messageId?: string | null;
    path: string;
    stage: string;
    requestId: string;
    requestTime?: string;
    requestTimeEpoch: number;
    resourceId: string;
    resourcePath: string;
    routeKey?: string;
}

export interface APIGatewayEventIdentity {
    accessKey: string | null;
    accountId: string | null;
    apiKey: string | null;
    apiKeyId: string | null;
    caller: string | null;
    cognitoAuthenticationProvider: string | null;
    cognitoAuthenticationType: string | null;
    cognitoIdentityId: string | null;
    cognitoIdentityPoolId: string | null;
    principalOrgId: string | null;
    sourceIp: string;
    user: string | null;
    userAgent: string | null;
    userArn: string | null;
}

/**
 * http://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html#api-gateway-custom-authorizer-output
 */
export interface AuthResponseContext {
    [name: string]: any;
}
