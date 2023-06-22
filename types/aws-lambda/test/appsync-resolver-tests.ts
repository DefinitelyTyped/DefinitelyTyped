import {
    AppSyncBatchResolverHandler,
    AppSyncIdentityCognito,
    AppSyncIdentityIAM,
    AppSyncIdentityLambda,
    AppSyncIdentityOIDC,
    AppSyncResolverHandler,
} from 'aws-lambda';

declare let objectOrNull: {} | null;
declare let prevResultOrNull: { result: { [key: string]: any } } | null;

interface TestArguments {
    id: string;
    query: string;
}

interface TestEntity {
    id: string;
    name: string;
    check: boolean;
}

interface TestSource {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
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

    str = (event.identity as AppSyncIdentityOIDC).sub;
    str = (event.identity as AppSyncIdentityOIDC).issuer;
    anyObj = (event.identity as AppSyncIdentityOIDC).claims;

    anyObj = (event.identity as AppSyncIdentityLambda).resolverContext;

    strOrUndefined = event.request.headers.host;
    strOrNull = event.request.domainName;

    str = event.info.fieldName;
    str = event.info.parentTypeName;
    str = event.info.selectionSetGraphQL;
    anyObj = event.info.variables;
    str = event.info.selectionSetList[0];

    objectOrNull = event.source;
    prevResultOrNull = event.prev;
    anyObj = (event.prev as { result: { [key: string]: any } }).result;
    anyObj = event.stash;

    return {
        id: '',
        name: '',
        check: true,
    };
};

const batchHandler: AppSyncBatchResolverHandler<TestArguments, TestEntity> = async (events, context) => {
    array = events;
    events.forEach(event => {
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

        str = (event.identity as AppSyncIdentityOIDC).sub;
        str = (event.identity as AppSyncIdentityOIDC).issuer;
        anyObj = (event.identity as AppSyncIdentityOIDC).claims;

        anyObj = (event.identity as AppSyncIdentityLambda).resolverContext;

        strOrUndefined = event.request.headers.host;
        strOrNull = event.request.domainName;

        str = event.info.fieldName;
        str = event.info.parentTypeName;
        str = event.info.selectionSetGraphQL;
        anyObj = event.info.variables;
        str = event.info.selectionSetList[0];

        objectOrNull = event.source;
        prevResultOrNull = event.prev;
        anyObj = (event.prev as { result: { [key: string]: any } }).result;
        anyObj = event.stash;
    });

    return [
        {
            id: '',
            name: '',
            check: true,
        },
    ];
};

const handlerWithDefinedSourceTypes: AppSyncResolverHandler<TestArguments, TestEntity, TestSource> = async (
    event,
    context,
) => {
    strOrUndefined = event.source ? event.source.id : undefined;
    strOrUndefined = event.source ? event.source.firstName : undefined;
    strOrUndefined = event.source ? event.source.lastName : undefined;
    numOrUndefined = event.source ? event.source.age : undefined;

    return {
        id: '',
        name: '',
        check: true,
    };
};

const batchHandlerWithDefinedSourceTypes: AppSyncBatchResolverHandler<TestArguments, TestEntity, TestSource> = async (
    events,
    context,
) => {
    array = events;
    events.forEach(event => {
        strOrUndefined = event.source ? event.source.id : undefined;
        strOrUndefined = event.source ? event.source.firstName : undefined;
        strOrUndefined = event.source ? event.source.lastName : undefined;
        numOrUndefined = event.source ? event.source.age : undefined;
    });

    return [
        {
            id: '',
            name: '',
            check: true,
        },
    ];
};
