// Types shared between trigger/api-gateway-authorizer.d.ts and api-gateway-proxy.d.ts

// Legacy default type used for APIGatewayProxyEvent["requestContext"]["authorizer"]
// Prefer using stronger types.
export interface AuthResponseContext {
    [name: string]: any;
}

export type APIGatewayEventRequestContext =
    APIGatewayEventRequestContextWithAuthorizer<AuthResponseContext | null | undefined>;

export interface APIGatewayEventRequestContextWithAuthorizer<TAuthorizer> {
    accountId: string;
    apiId: string;
    // This one is a bit confusing: it is not actually present in authorizer calls
    // and proxy calls without an authorizer. We model this by allowing undefined in the type,
    // since it ends up the same and avoids breaking users that are testing the property.
    // This lets us allow parameterizing the authorizer for proxy events that know what authorizer
    // context values they have.
    authorizer: TAuthorizer;
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
