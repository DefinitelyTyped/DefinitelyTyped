import { AppSyncResolverHandler, AppSyncIdentityIAM, AppSyncIdentityCognito } from "aws-lambda";

interface TestArguments {
    id: string;
    query: string;
}

interface TestEntity {
    id: string;
    name: string;
    check: boolean;
}

const handler: AppSyncResolverHandler<TestArguments, TestEntity> = async (event, context) => {
    str = event.arguments.id;
    str = event.arguments.query;

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

    str = event.request.headers.host;

    str = event.info.fieldName;
    str = event.info.parentTypeName;
    str = event.info.selectionSetGraphQL;
    anyObj = event.info.variables;
    str = event.info.selectionSetList[0];

    objectOrUndefined = event.source;

    return {
        id: '',
        name: '',
        check: true,
    };
};
