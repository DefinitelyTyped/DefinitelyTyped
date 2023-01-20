import {
    AppSyncIdentityIAM,
    AppSyncIdentityCognito,
    AppSyncIdentityOIDC,
    AppSyncIdentityLambda,
    AmplifyGraphQlResolverHandler,
} from 'aws-lambda';

const handler: AmplifyGraphQlResolverHandler = async (event, context) => {
    str = event.fieldName;
    str = event.typeName;

    obj = event.arguments;

    str = (event.identity as AppSyncIdentityIAM).accountId;
    str = (event.identity as AppSyncIdentityIAM).cognitoIdentityAuthProvider;
    str = (event.identity as AppSyncIdentityIAM).cognitoIdentityAuthType;
    str = (event.identity as AppSyncIdentityIAM).cognitoIdentityId;
    str = (event.identity as AppSyncIdentityIAM).cognitoIdentityPoolId;
    str = (event.identity as AppSyncIdentityIAM).sourceIp[0];
    str = (event.identity as AppSyncIdentityIAM).userArn;
    str = (event.identity as AppSyncIdentityIAM).username;

    str = (event.identity as AppSyncIdentityCognito).defaultAuthStrategy;
    str = (event.identity as AppSyncIdentityCognito).issuer;
    str = (event.identity as AppSyncIdentityCognito).sourceIp[0];
    str = (event.identity as AppSyncIdentityCognito).sub;
    str = (event.identity as AppSyncIdentityCognito).username;
    anyObj = (event.identity as AppSyncIdentityCognito).claims;

    str = (event.identity as AppSyncIdentityOIDC).sub;
    str = (event.identity as AppSyncIdentityOIDC).issuer;
    anyObj = (event.identity as AppSyncIdentityOIDC).claims;

    anyObj = (event.identity as AppSyncIdentityLambda).resolverContext;

    obj = event.source;

    strOrUndefined = event.request.headers.host;
    strOrNull = event.request.domainName;

    anyObj = (event.prev as { result: { [key: string]: any } }).result;

    return anyObj;
};

interface CustomArgs {
    arg1: string;
}
interface SourceType {
    source1: number;
}
const handlerWithArguments: AmplifyGraphQlResolverHandler<CustomArgs, SourceType> = async (event, context) => {
    str = event.arguments.arg1;
    num = event.source.source1;
};
