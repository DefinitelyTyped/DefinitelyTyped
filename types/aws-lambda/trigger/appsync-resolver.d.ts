import { Handler } from '../handler';

export type AppSyncResolverHandler<TArguments, TResults, TSource = Record<string, any> | null> = Handler<AppSyncResolverEvent<TArguments, TSource>, TResults | TResults[]>;

export interface AppSyncResolverEventHeaders {
    [name: string]: string | undefined;
}

/**
 * See https://docs.aws.amazon.com/appsync/latest/devguide/resolver-context-reference.html
 *
 * @param TArguments type of the arguments
 * @param TSource type of the source
 */
export interface AppSyncResolverEvent<TArguments, TSource = Record<string, any> | null> {
    arguments: TArguments;
    identity?: AppSyncIdentityIAM | AppSyncIdentityCognito | undefined;
    source: TSource;
    request: {
        headers: AppSyncResolverEventHeaders;
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
