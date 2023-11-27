import { Handler } from "../handler";

export type AppSyncResolverHandler<TArguments, TResult, TSource = Record<string, any> | null> = Handler<
    AppSyncResolverEvent<TArguments, TSource>,
    TResult
>;

// https:docs.aws.amazon.com/appsync/latest/devguide/tutorial-lambda-resolvers.html#advanced-use-case-batching
export type AppSyncBatchResolverHandler<TArguments, TResult, TSource = Record<string, any> | null> = Handler<
    Array<AppSyncResolverEvent<TArguments, TSource>>,
    TResult[]
>;

/**
 * @deprecated Use {@link AppSyncAuthorizerHandler}
 */
export type AppSyncAuthorizerHander<TResolverContext = undefined> = AppSyncAuthorizerHandler<TResolverContext>;

/**
 * See https://docs.aws.amazon.com/appsync/latest/devguide/security-authz.html#aws-lambda-authorization
 *
 * @param TResolverContext type of the resolverContext object that you can return from the handler
 */
export type AppSyncAuthorizerHandler<TResolverContext = undefined> = Handler<
    AppSyncAuthorizerEvent,
    AppSyncAuthorizerResult<TResolverContext>
>;

export interface AppSyncResolverEventHeaders {
    [name: string]: string | undefined;
}

export type AppSyncIdentity =
    | AppSyncIdentityIAM
    | AppSyncIdentityCognito
    | AppSyncIdentityOIDC
    | AppSyncIdentityLambda
    | undefined
    | null;

/**
 * See https://docs.aws.amazon.com/appsync/latest/devguide/resolver-context-reference.html
 *
 * @param TArguments type of the arguments
 * @param TSource type of the source
 */
// Maintainer's note: Some of these properties are shared with the Amplify resolver.
// It may be worth checking if changes here may be applicable there too.
export interface AppSyncResolverEvent<TArguments, TSource = Record<string, any> | null> {
    arguments: TArguments;
    identity?: AppSyncIdentity;
    source: TSource;
    request: {
        headers: AppSyncResolverEventHeaders;
        /** The API's custom domain if used for the request. */
        domainName: string | null;
    };
    info: {
        selectionSetList: string[];
        selectionSetGraphQL: string;
        parentTypeName: string;
        fieldName: string;
        variables: { [key: string]: any };
    };
    prev: { result: { [key: string]: any } } | null;
    stash: { [key: string]: any };
}

export interface AppSyncAuthorizerEvent {
    authorizationToken: string;
    requestContext: {
        apiId: string;
        accountId: string;
        requestId: string;
        queryString: string;
        operationName?: string;
        variables: { [key: string]: any };
    };
}

export interface AppSyncAuthorizerResult<TResolverContext = undefined> {
    isAuthorized: boolean;
    resolverContext?: TResolverContext;
    deniedFields?: string[];
    ttlOverride?: number;
}
export interface AppSyncIdentityIAM {
    accountId: string;
    cognitoIdentityPoolId: string;
    cognitoIdentityId: string;
    sourceIp: string[];
    username: string;
    userArn: string;
    cognitoIdentityAuthType: string;
    cognitoIdentityAuthProvider: string;
}

export interface AppSyncIdentityCognito {
    sub: string;
    issuer: string;
    username: string;
    claims: any;
    sourceIp: string[];
    defaultAuthStrategy: string;
    groups: string[] | null;
}

export interface AppSyncIdentityOIDC {
    claims: any;
    issuer: string;
    sub: string;
}

export interface AppSyncIdentityLambda {
    resolverContext: any;
}
