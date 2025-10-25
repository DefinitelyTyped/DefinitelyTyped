// Types shared between trigger/api-gateway-authorizer.d.ts and api-gateway-proxy.d.ts

// Poorly documented, but API Gateway will just fail internally if
// the context type does not match this.
// Note that although non-string types will be accepted, they will be
// coerced to strings on the other side.
export interface APIGatewayAuthorizerResultContext {
    [name: string]: string | number | boolean | null | undefined;
}

// Default authorizer type, prefer using a specific type with the "...WithAuthorizer..." variant types.
// Note that this doesn't have to be a context from a custom lambda outhorizer, AWS also has a cognito
// authorizer type and could add more, so the property won't always be a string.
export type APIGatewayEventDefaultAuthorizerContext =
    | undefined
    | null
    | {
        [name: string]: any;
    };

export type APIGatewayEventRequestContext = APIGatewayEventRequestContextWithAuthorizer<
    APIGatewayEventDefaultAuthorizerContext
>;

// The requestContext property of both request authorizer and proxy integration events.
export interface APIGatewayEventRequestContextWithAuthorizer<TAuthorizerContext> {
    accountId: string;
    apiId: string;
    // This one is a bit confusing: it is not actually present in authorizer calls
    // and proxy calls without an authorizer. We model this by allowing undefined in the type,
    // since it ends up the same and avoids breaking users that are testing the property.
    // This lets us allow parameterizing the authorizer for proxy events that know what authorizer
    // context values they have.
    authorizer: TAuthorizerContext;
    connectedAt?: number | undefined;
    connectionId?: string | undefined;
    domainName?: string | undefined;
    domainPrefix?: string | undefined;
    eventType?: string | undefined;
    extendedRequestId?: string | undefined;
    protocol: string;
    httpMethod: string;
    identity: APIGatewayEventIdentity;
    messageDirection?: string | undefined;
    messageId?: string | null | undefined;
    path: string;
    stage: string;
    requestId: string;
    requestTime?: string | undefined;
    requestTimeEpoch: number;
    resourceId: string;
    resourcePath: string;
    routeKey?: string | undefined;
}

export interface APIGatewayEventClientCertificate {
    clientCertPem: string;
    serialNumber: string;
    subjectDN: string;
    issuerDN: string;
    validity: {
        notAfter: string;
        notBefore: string;
    };
}

export interface APIGatewayEventIdentity {
    accessKey: string | null;
    accountId: string | null;
    apiKey: string | null;
    apiKeyId: string | null;
    caller: string | null;
    clientCert: APIGatewayEventClientCertificate | null;
    cognitoAuthenticationProvider: string | null;
    cognitoAuthenticationType: string | null;
    cognitoIdentityId: string | null;
    cognitoIdentityPoolId: string | null;
    principalOrgId: string | null;
    sourceIp: string;
    user: string | null;
    userAgent: string | null;
    userArn: string | null;
    vpcId: string | null;
    vpceId: string | null;
}
