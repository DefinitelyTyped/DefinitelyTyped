// Types shared between trigger/api-gateway-authorizer.d.ts and api-gateway-proxy.d.ts

// Poorly documented, but API Gateway will just fail internally if
// the context type does not match this.
// Note that although non-string types will be accepted, they will be
// coerced to strings on the other side.
export interface APIGatewayAuthorizerResultContext {
    [name: string]: string | number | boolean | null | undefined;
}

export interface APIGatewayError {
  message: string;
  messageString: string;
  responseType: string;
  validationErrorString: string;
}

// Default authorizer type, prefer using a specific type with the "...WithAuthorizer..." variant types.
// Note that this doesn't have to be a context from a custom lambda outhorizer, AWS also has a cognito
// authorizer type and could add more, so the property won't always be a string.
export type APIGatewayEventDefaultAuthorizerContext = undefined | null | {
    [name: string]: any;
};

export type APIGatewayEventRequestContext =
    APIGatewayEventRequestContextWithAuthorizer<APIGatewayEventDefaultAuthorizerContext>;

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
    awsEndpointRequestId?: string;
    domainName?: string;
    domainPrefix?: string;
    error?: APIGatewayError;
    eventType?: string;
    extendedRequestId?: string;
    httpMethod: string;
    identity: APIGatewayEventIdentity;
    path: string;
    protocol: string;
    requestId: string;
    requestOverride?: APIGatewayEventRequestOverride;
    responseOverride?: APIGatewayEventResponseOverride;
    requestTime?: string;
    requestTimeEpoch: number;
    resourceId: string;
    resourcePath: string;
    stage: string;
    wafResponseCode?: string;
    webaclArn?: string;
    xrayTraceId?: string;
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

export interface APIGatewayEventRequestOverride {
  header: {
    [name: string]: string;
  };
  path: {
    [name: string]: string;
  };
  querystring: {
    [name: string]: string;
  };
}

export interface APIGatewayEventResponseOverride {
  header: {
    [name: string]: string;
  };
  status: string;
}
