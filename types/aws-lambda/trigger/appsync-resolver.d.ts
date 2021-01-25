import { Handler } from '../handler';

export type AppSyncResolverHandler<T, V> = Handler<AppSyncResolverEvent<T>, V | V[]>;

export interface AppSyncResolverEventHeaders {
    [name: string]: string | undefined;
}

/**
 * See https://docs.aws.amazon.com/appsync/latest/devguide/resolver-context-reference.html
 *
 * @param T type of the arguments
 */
export interface AppSyncResolverEvent<T> {
    arguments: T;
    identity?: AppSyncIdentityIAM | AppSyncIdentityCognito;
    source?: { [key: string]: any };
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
}
