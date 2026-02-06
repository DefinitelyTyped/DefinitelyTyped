import Serverless from "serverless";
import Aws from "serverless/aws";
import Plugin from "serverless/classes/Plugin";
import PluginManager from "serverless/classes/PluginManager";
import { getHttp } from "serverless/plugins/aws/package/compile/events/apiGateway/lib/validate";

const options: Serverless.Options = {
    noDeploy: false,
    stage: "prod",
    region: "",
};

const serverless = new Serverless();

class CustomPlugin implements Plugin {
    commands = {
        command: {
            usage: "description",
            lifecycleEvents: ["start"],
            options: {
                option: {
                    usage: `description`,
                    required: false,
                    shortcut: "o",
                    type: "multiple" as "multiple",
                    default: ["value1", "value2"],
                },
            },
        },
    };

    provider = "aws";

    customProp = {};

    hooks: Plugin.Hooks;
    variableResolvers: Plugin.VariableResolvers;
    configurationVariablesSources: Plugin.ConfigurationVariablesSources;

    constructor(serverless: Serverless, options: Serverless.Options, logging: Plugin.Logging) {
        this.hooks = {
            "command:start": () => {},
        };
        // Both sync and async variable resolvers are supported
        this.configurationVariablesSources = {
            sync: {
                resolve: () => {},
            },
            async: {
                resolve: async () => {},
            },
        };
        this.variableResolvers = {
            echo: async (source) => source.slice(5),
        };

        logging.log.info("logging some text");
        logging.log.info("logging with %i format %s", 2, "parameters");
        logging.log.info("logging with lots of different arguments", 123, ["ah"], { thing: true });

        const myProgress = logging.progress.create({
            message: "Doing extra work in custom-plugin",
            name: "custom-plugin-progress",
        });
        myProgress.update("Almost finished");
        logging.progress.get("custom-plugin-progress").remove();
    }
}

// Test a plugin with missing 'hooks' property
// @ts-expect-error
class BadPlugin implements Plugin {
    hoooks!: Plugin.Hooks; // emulate a bad 'hooks' definition with a typo
    constructor(badArg: number) {}
}

// Test a plugin that throws an user error exception
class ThrowUserErrorPlugin implements Plugin {
    hooks!: Plugin.Hooks;
    constructor(serverless: Serverless, options: Serverless.Options, logging: Plugin.Logging) {
        this.hooks = {
            "command:start": () => {},
        };
        // $ExpectType ServerlessError
        const errorWithoutMessage = new serverless.classes.Error();
        // $ExpectType ServerlessError
        const errorWithMessage = new serverless.classes.Error("an error message");
        throw new serverless.classes.Error("Invalid configuration in X");
    }
}

const manager = new PluginManager(serverless);
manager.addPlugin(CustomPlugin);
// Test adding a plugin with an incorrect constructor
// prettier-ignore
// @ts-expect-error
manager.addPlugin(BadPlugin);
// Test adding a plugin that throws an user error exception
manager.addPlugin(ThrowUserErrorPlugin);

// Test a plugin with bad arguments for a variable resolver
class BadVariablePlugin1 implements Plugin {
    hooks!: Plugin.Hooks;
    // @ts-expect-error
    variableResolvers = {
        badEchoArgs: async (badArg: number) => {},
    };
}

// Test a plugin with non-async variable resolver
class BadVariablePlugin implements Plugin {
    hooks!: Plugin.Hooks;
    // @ts-expect-error
    variableResolvers = {
        badEchoNotAsync: (source: string) => {},
    };
}

// Test serverless cli log with no message
// @ts-expect-error
serverless.cli.log();

// Test serverless cli log with no entity
serverless.cli.log("updating stack...");

// Test serverless cli log with no options
serverless.cli.log("updating stack...", "serverless");

// Test serverless cli log with all args supplied
serverless.cli.log("updating stack...", "serverless", {
    color: "orange",
    bold: true,
    underline: true,
    entity: "serverless",
});

// Test provider's 'request' method
const provider = serverless.getProvider("aws");
provider.request("AccessAnalyzer", "createAnalyzer");
provider.request("CloudFormation", "deleteStack", {
    StackName: "stack",
});
provider.request(
    "CloudFormation",
    "deleteStack",
    {
        StackName: "stack",
    },
    {
        useCache: true,
        region: "us-east-1",
    },
);

// Test provider's 'getServerlessDeploymentBucketName'
provider.getServerlessDeploymentBucketName().then(bucketName => {});

// $ExpectType Credentials
provider.getCredentials();

// Test ApiGateway validator
// Valid usage. "Method" is supposed to be recognized here.
// Valid usage. "method" is spelled correctly here:
getHttp(
    {
        http: {
            path: "myPath",
            method: "get",
        },
    },
    "myFunction",
);

getHttp(
    {
        http: {
            path: "myPath",
            mehtod: "get",
        },
    },
    "myFunction",
);

// 1) Convert "type" to an "interface" to satisfy ESLint rule
interface CustomEvent {
    path: string;
    method: "get" | "post";
    extraData: number;
}

// 2) We'll store the result in 'customResult'. Because getHttp returns a union
//    ({ path: string; method: string } | T), we must type-guard before 'extraData' usage.
const customResult = getHttp<CustomEvent>(
    {
        http: {
            path: "customPath",
            method: "post",
            extraData: 42,
        },
    },
    "myFunction",
);

// Use a type-guard to confirm "extraData" is accessible:
if (typeof customResult === "object" && "extraData" in customResult) {
    customResult.extraData; // number
    customResult.path; // string
    customResult.method; // "get" | "post"
}

// could cast:
// (customResult as CustomEvent).extraData;

// Test "getHttp" WITHOUT a generic:
const defaultResult = getHttp(
    {
        http: {
            path: "somePath",
            method: "get",
        },
    },
    "myFunction",
);

// return union.
if (typeof defaultResult !== "string") {
    defaultResult.path; // string
    defaultResult.method; // string
}

// Check some of the existing tests
getHttp(
    {
        http: "GET mypath",
    },
    "myFunction",
);
getHttp(
    {
        // @ts-expect-error
        sqs: "arn",
    },
    "myFunction",
);

// Test entire Aws Serverless type
const awsServerless: Aws.Serverless = {
    service: {
        name: "testName1",
        awsKmsKeyArn: "testAwsKmsKeyArn",
    },
    frameworkVersion: "testFrameworkVersion",
    configValidationMode: "error",
    variablesResolutionMode: "20210219",
    provider: {
        name: "aws",
        runtime: "testRuntime",
        stage: "testStage",
        region: "testRegion",
        stackName: "testStackName",
        apiName: "testapiName",
        websocketsApiName: "testwebsocketsApiName",
        websocketsApiRouteSelectionExpression: "testwebsocketsApiRouteSelectionExpression",
        profile: "testprofile",
        memorySize: 1,
        ephemeralStorageSize: 1,
        reservedConcurrency: 1,
        timeout: 1,
        logRetentionInDays: 1,
        deploymentBucket: {
            name: "testname",
            maxPreviousDeploymentArtifacts: 1,
            blockPublicAccess: true,
            serverSideEncryption: "testserverSideEncryption",
            skipPolicySetup: true,
            sseKMSKeyId: "testsseKMSKeyId",
            sseCustomerAlgorithim: "testsseCustomerAlgorithim",
            sseCustomerKey: "testsseCustomerKey",
            sseCustomerKeyMD5: "testsseCustomerKeyMD5",
            tags: {
                testtagkey: "testtagvalue",
            },
        },
        deploymentPrefix: "testdeploymentPrefix",
        role: "testrole",
        rolePermissionsBoundary: "testrolePermissionsBoundary",
        cfnRole: "testcfnRole",
        versionFunctions: true,
        architecture: "x86_64",
        environment: {
            testenvironmentkey: "testenvironmentvalue",
        },
        endpointType: "regional",
        apiKeys: [{
            name: "testApiKeyName",
            value: "testApiKeyValue",
            description: "testApiKeyDescription",
            customerId: "testApiKeyCustomerId",
            enabled: true,
        }, "testApiKeys"],
        apiGateway: {
            apiKeys: [{
                name: "testApiKeyName",
                value: "testApiKeyValue",
                description: "testApiKeyDescription",
                customerId: "testApiKeyCustomerId",
                enabled: true,
            }, "testApiKeys"],
            restApiId: "testrestApiId",
            restApiRootResourceId: "testrestApiRootResourceId",
            restApiResources: {
                testrestapiresource: "testrestapiresource",
            },
            websocketApiId: "testwebsocketApiId",
            apiKeySourceType: "HEADER",
            minimumCompressionSize: 1,
            description: "testdescription",
            binaryMediaTypes: ["testbinaryMediaTypes"],
            usagePlan: {
                quota: {
                    limit: 1,
                    offset: 1,
                    period: "20",
                },
                throttle: {
                    burstLimit: 1,
                    rateLimit: 1,
                },
            },
            resourcePolicy: [
                {
                    Effect: "Allow",
                    Principal: "testPrincipal",
                    Action: "testAction",
                    Resource: "testResource",
                    Condition: {
                        testcondition: "testconditionvalue",
                    },
                },
            ],
        },
        alb: {
            targetGroupPrefix: "testtargetGroupPrefix",
            authorizers: {
                testCognitoAuthorizer: {
                    type: "cognito",
                    userPoolArn: "testuserPoolArn",
                    userPoolClientId: "testuserPoolClientId",
                    userPoolDomain: "testuserPoolDomain",
                    allowUnauthenticated: false,
                    requestExtraParams: {
                        prompt: "testprompt",
                        redirect: false,
                    },
                    scope: "testscope",
                    sessionCookieName: "testsessionCookieName",
                    sessionTimeout: 1,
                },
                testOidcAuthorizer: {
                    type: "oidc",
                    authorizationEndpoint: "testauthorizationEndpoint",
                    clientId: "testclientId",
                    clientSecret: "testclientSecret",
                    useExistingClientSecret: false,
                    issuer: "testissuer",
                    tokenEndpoint: "testtokenEndpoint",
                    userInfoEndpoint: "testuserInfoEndpoint",
                    allowUnauthenticated: false,
                    requestExtraParams: {
                        prompt: "testprompt",
                        redirect: false,
                    },
                    scope: "testscope",
                    sessionCookieName: "testsessionCookieName",
                    sessionTimeout: 1,
                },
                testJwtAuthorizer: {
                    identitySource: "testidentitySource",
                    issuerUrl: "testissuerUrl",
                    audience: ["testaudience"],
                },
            },
        },
        httpApi: {
            id: "testid",
            name: "testname",
            payload: "testpayload",
            cors: false,
            authorizers: {
                testJwtAuthorizer: {
                    identitySource: "testidentitySource",
                    issuerUrl: "testissuerUrl",
                    audience: ["testaudience"],
                },
                testCustomAuthorizer: {
                    type: "request",
                    functionName: "testCustomAuthorizer",
                },
            },
            useProviderTags: true,
            metrics: true,
            disableDefaultEndpoint: true,
            shouldStartNameWithService: true,
        },
        usagePlan: {
            quota: {
                limit: 1,
                offset: 1,
                period: "20",
            },
            throttle: {
                burstLimit: 1,
                rateLimit: 1,
            },
        },
        stackTags: {
            testtagkey: "testtagvalue",
        },
        iamManagedPolicies: ["testiamManagedPolicies"],
        iamRoleStatements: [
            {
                Effect: "Allow",
                Sid: "testSid",
                Condition: {
                    testcondition: "testconditionvalue",
                },
                Action: "testAction",
                NotAction: "testNotAction",
                Resource: "testResource",
                NotResource: "testNotResource",
            },
        ],
        stackPolicy: [
            {
                Effect: "Allow",
                Principal: "testPrincipal",
                Action: "testAction",
                Resource: "testResource",
                Condition: {
                    testcondition: "testconditionvalue",
                },
            },
        ],
        vpc: {
            securityGroupIds: ["testsecurityGroupIds"],
            subnetIds: ["testsubnetIds"],
        },
        notificationArns: ["testnotificationArns"],
        stackParameters: [
            {
                ParameterKey: "testParameterKey",
                ParameterValue: "testParameterValue",
            },
        ],
        resourcePolicy: [
            {
                Effect: "Allow",
                Principal: "testPrincipal",
                Action: "testAction",
                Resource: "testResource",
                Condition: {
                    testcondition: "testconditionvalue",
                },
            },
        ],
        rollbackConfiguration: {
            MonitoringTimeInMinutes: 1,
            RollbackTriggers: [
                {
                    Arn: "testArn",
                    Type: "testType",
                },
            ],
        },
        tags: {
            testtagkey: "testtagvalue",
        },
        tracing: {
            apiGateway: false,
            lambda: false,
        },
        logs: {
            restApi: {
                accessLogging: false,
                format: "testformat",
                executionLogging: false,
                level: "ERROR",
                fullExecutionData: false,
                role: "testrole",
                roleManagedExternally: false,
            },
            websocket: {
                level: "INFO",
            },
            httpApi: {
                format: "testformat",
            },
            frameworkLambda: false,
        },
        eventBridge: {
            useCloudFormation: true,
        },
        layers: ["arn:aws:lambda:us-east-2:451483290750:layer:NewRelicNodeJS14X:45"],
    },
    package: {
        include: ["testinclude"],
        exclude: ["testexclude"],
        patterns: ["!testpatternexclude", "testpatterninclude"],
        excludeDevDependencies: false,
        artifact: "testartifact",
        individually: true,
    },
    functions: {
        testFunction: {
            handler: "testhandler",
            architecture: "x86_64",
            name: "testname",
            description: "testdescription",
            memorySize: 1,
            ephemeralStorageSize: 1,
            reservedConcurrency: 1,
            provisionedConcurrency: 1,
            runtime: "testruntime",
            timeout: 1,
            role: "testrole",
            onError: "testonError",
            awsKmsKeyArn: "testawsKmsKeyArn",
            environment: {
                testenvironment: "testenvironmentvalue",
                testRefEnvironment: {
                    Ref: "MyRessource",
                },
            },
            tags: {
                testtagkey: "testtagvalue",
            },
            vpc: {
                securityGroupIds: ["testsecurityGroupIds"],
                subnetIds: ["testsubnetIds"],
            },
            package: {
                include: ["testinclude"],
                exclude: ["testexclude"],
                patterns: ["!testpatternexclude", "testpatterninclude"],
                excludeDevDependencies: false,
                artifact: "testartifact",
                individually: true,
            },
            layers: ["testlayers"],
            tracing: "PassThrough",
            condition: "testcondition",
            dependsOn: ["testdependson"],
            destinations: {
                onSuccess: "testonSuccess",
                onFailure: "testonFailure",
            },
            events: [
                {
                    http: {
                        path: "testpath",
                        method: "testmethod",
                        cors: {
                            allowCredentials: true,
                            cacheControl: "cacheControl",
                            headers: ["header1", "header2"],
                            origins: ["origin1", "origin2"],
                            maxAge: 1000,
                        },
                        async: false,
                        private: false,
                        authorizer: {
                            name: "testname",
                            arn: "testarn",
                            resultTtlInSeconds: 1,
                            identitySource: "testidentitySource",
                            identityValidationExpression: "testidentityValidationExpression",
                            type: "testtype",
                        },
                        request: {
                            parameters: {
                                querystrings: {
                                    param1: true,
                                    param2: true,
                                },
                                headers: {
                                    header1: true,
                                    header2: true,
                                },
                                paths: {
                                    path1: true,
                                    path2: true,
                                },
                            },
                            schemas: {
                                "application/json": {
                                    type: "object",
                                    properties: {
                                        productId: {
                                            type: "integer",
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                {
                    httpApi: {
                        method: "testmethod",
                        path: "testpath",
                        authorizer: {
                            name: "testname",
                            scopes: ["testscopes"],
                        },
                    },
                },
                {
                    httpApi: {
                        method: "testmethod",
                        path: "testpath",
                        authorizer: {
                            id: "testid",
                            scopes: ["testscopes"],
                        },
                    },
                },
                {
                    websocket: {
                        route: "testroute",
                        routeResponseSelectionExpression: "testrouteResponseSelectionExpression",
                        authorizer: {
                            name: "testname",
                            arn: "testarn",
                            identitySource: ["testidentitysource"],
                        },
                    },
                },
                {
                    s3: {
                        bucket: "testbucket",
                        event: "testevent",
                        rules: [
                            {
                                prefix: "testprefix",
                                suffix: "testsuffix",
                            },
                        ],
                        existing: false,
                    },
                },
                {
                    s3: {
                        bucket: "testbucket",
                        event: "testevent",
                        rules: [
                            {
                                prefix: "testprefix",
                            },
                        ],
                        existing: false,
                    },
                },
                {
                    s3: {
                        bucket: "testbucket",
                        event: "testevent",
                        rules: [
                            {
                                suffix: "testsuffix",
                            },
                        ],
                        existing: false,
                    },
                },
                {
                    schedule: "1",
                },
                {
                    sns: {
                        arn: "testarn",
                        topicName: "testtopicName",
                        displayName: "testdisplayName",
                        filterPolicy: { testFilterPolicy: "testfilterpolicy" },
                        redrivePolicy: {
                            deadLetterTargetArn: "testdeadLetterTargetArn",
                            deadLetterTargetRef: "testdeadLetterTargetRef",
                            deadLetterTargetImport: {
                                arn: "testarn",
                                url: "testurl",
                            },
                        },
                    },
                },
                {
                    sqs: {
                        arn: "testarn",
                        batchSize: 1,
                        maximumBatchingWindow: 10,
                        enabled: true,
                        functionResponseType: "ReportBatchItemFailures",
                        filterPatterns: [
                            {
                                UserID: [null],
                            },
                            {
                                LastName: [""],
                            },
                            {
                                Name: ["Alice"],
                            },
                            {
                                Location: ["New York"],
                                Day: ["Monday"],
                            },
                            {
                                PaymentType: ["Credit", "Debit"],
                            },
                            {
                                Weather: [
                                    {
                                        "anything-but": ["Raining"],
                                    },
                                ],
                            },
                            {
                                Price: [
                                    {
                                        numeric: ["=", 100],
                                    },
                                ],
                            },
                            {
                                ProductName: [
                                    {
                                        exists: true,
                                    },
                                ],
                            },
                            {
                                Region: [
                                    {
                                        prefix: "us-",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    activemq: {
                        arn: "testarn",
                        basicAuthArn: "testBasicAuthArn",
                        queue: "testQueue",
                        batchSize: 1,
                        enabled: true,
                    },
                },
                {
                    rabbitmq: {
                        arn: "testarn",
                        basicAuthArn: "testBasicAuthArn",
                        queue: "testQueue",
                        batchSize: 1,
                        enabled: true,
                    },
                },
                {
                    stream: {
                        arn: "testarn",
                        batchSize: 1,
                        startingPosition: 1,
                        enabled: true,
                        filterPatterns: [
                            {
                                UserID: [null],
                            },
                            {
                                LastName: [""],
                            },
                            {
                                Name: ["Alice"],
                            },
                            {
                                Location: ["New York"],
                                Day: ["Monday"],
                            },
                            {
                                PaymentType: ["Credit", "Debit"],
                            },
                            {
                                Weather: [
                                    {
                                        "anything-but": ["Raining"],
                                    },
                                ],
                            },
                            {
                                Price: [
                                    {
                                        numeric: ["=", 100],
                                    },
                                ],
                            },
                            {
                                ProductName: [
                                    {
                                        exists: true,
                                    },
                                ],
                            },
                            {
                                Region: [
                                    {
                                        prefix: "us-",
                                    },
                                ],
                            },
                        ],
                        functionResponseType: "ReportBatchItemFailures",
                        parallelizationFactor: 2,
                    },
                },
                {
                    msk: {
                        arn: "testarn",
                        topic: "testTopic",
                        batchSize: 1,
                        startingPosition: "LATEST",
                        enabled: true,
                    },
                },
                {
                    alexaSkill: {
                        appId: "testappId",
                        enabled: true,
                    },
                },
                {
                    alexaSmartHome: {
                        appId: "testappId",
                        enabled: true,
                    },
                },
                {
                    iot: {
                        name: "testname",
                        description: "testdescription",
                        enabled: true,
                        sql: "testsql",
                        sqlVersion: "testsqlVersion",
                    },
                },
                {
                    cloudwatchEvent: {
                        event: "testevent",
                        name: "testname",
                        description: "testdescription",
                        enabled: true,
                        input: {
                            testinputkey: "testinputvalue",
                        },
                        inputPath: "testinputPath",
                        inputTransformer: {
                            inputPathsMap: {
                                testinputpathsmap: "testinputpathsmapvalue",
                            },
                            inputTemplate: "testinputTemplate",
                        },
                    },
                },
                {
                    cloudwatchLog: {
                        logGroup: "testlogGroup",
                        filter: "testfilter",
                    },
                },
                {
                    cognitoUserPool: {
                        pool: "testpool",
                        trigger: "testtrigger",
                        existing: false,
                    },
                },
                {
                    alb: {
                        listenerArn: "testlistenerArn",
                        priority: 1,
                        conditions: {
                            host: "testhost",
                            path: "testpath",
                        },
                    },
                },
                {
                    eventBridge: {
                        schedule: "testschedule",
                        eventBus: "testeventBus",
                        pattern: {
                            source: ["testsource"],
                            "detail-type": ["testdetailtype"],
                            detail: {
                                testdetailkey: ["testdetailvalue"],
                            },
                        },
                        input: {
                            testinputkey: "testinputvalue",
                        },
                        inputPath: "testinputPath",
                        inputTransformer: {
                            inputPathsMap: {
                                testinputpathsmap: "testinputpathsmapvalue",
                            },
                            inputTemplate: "testinputTemplate",
                        },
                    },
                },
                {
                    cloudFront: {
                        eventType: "testeventType",
                        includeBody: false,
                        pathPattern: "testpathPattern",
                        origin: {
                            DomainName: "testDomainName",
                            OriginPath: "testOriginPath",
                            CustomOriginConfig: {
                                OriginProtocolPolicy: "testOriginProtocolPolicy",
                            },
                        },
                    },
                },
                {
                    kafka: {
                        accessConfigurations: {
                            saslPlainAuth: "mySecretManagerARN",
                        },
                        bootstrapServers: [
                            "abc3.xyz.com:9092",
                            "abc2.xyz.com:9092",
                        ],
                        topic: "MySelfManagedKafkaTopic",
                        batchSize: 100,
                        maximumBatchingWindow: 30,
                        enabled: true,
                        consumerGroupId: "MyConsumerGroupId",
                    },
                },
            ],
            url: {
                cors: {
                    allowedOrigins: ["https://url1.com", "https://url2.com"],
                    allowedHeaders: ["Content-Type", "Authorization"],
                    allowedMethods: ["GET"],
                    allowCredentials: true,
                    exposedResponseHeaders: ["Special-Response-Header"],
                    maxAge: 6000,
                },
                authorizer: "aws_iam",
            },
        },
        testCustomAuthorizer: {
            handler: "testauthorizer",
        },
    },
    layers: {
        testLayer: {
            path: "testpath",
            name: "testname",
            description: "testdescription",
            compatibleRuntimes: ["testcompatibleruntimes"],
            licenseInfo: "testlicenseInfo",
            allowedAccounts: ["testallowedaccounts"],
            retain: false,
        },
    },
    resources: {
        Description: "testStackDescription",
        Conditions: {
            TestCondition: {
                "Fn::Equals": ["testcond", "testcond"],
            },
        },
        Resources: {
            testcloudformationresource: {
                Type: "testType",
                Condition: "TestCondition",
                Properties: {
                    testpropertykey: "testpropertyvalue",
                },
                DependsOn: "testdependson",
                DeletionPolicy: "testDeletionPolicy",
            },
        },
        extensions: {
            testcloudformationresource: {
                Type: "testType",
                Properties: {
                    testpropertykey: "testpropertyvalue",
                },
                DependsOn: "testdependson",
                DeletionPolicy: "testDeletionPolicy",
            },
        },
        Outputs: {
            testoutput: {
                Description: "testDescription",
                Value: "testValue",
                Export: {
                    Name: "testname",
                },
                Condition: "testcondition",
            },
            testFunctionLambdaFunctionQualifiedArn: {
                Description: "testDescription",
                Export: {
                    Name: "testFunctionLambdaFunctionQualifiedArn",
                },
            },
        },
    },
};

// vpc can be set as a reference to some section of the config file
// e.g. ${self:custom.vpc.${self:provider.stage}}
awsServerless.provider.vpc = "serverless reference";
awsServerless.functions![0].vpc = "serverless reference";

const bunchOfConfigs: Aws.Serverless[] = [
    {
        service: "users",
        provider: { name: "aws" },
        functions: {},
    },
    {
        service: "users",
        useDotenv: true,
        provider: { name: "aws" },
        functions: {},
    },
    {
        service: "users",
        configValidationMode: "off",
        unresolvedVariablesNotificationMode: "error",
        deprecationNotificationMode: "error",
        provider: { name: "aws" },
        functions: {},
    },
    {
        service: "users",
        disabledDeprecations: [
            "*",
        ],
        provider: { name: "aws" },
        functions: {},
    },
    {
        service: "users",
        provider: {
            name: "aws",
            iam: {
                role: {
                    name: "aws",
                    permissionBoundary: "testpermissionsBoundary",
                    managedPolicies: ["testmanagedPolicies"],
                    statements: [
                        {
                            Effect: "Allow",
                            Sid: "testSid",
                            Condition: {
                                testcondition: "testconditionvalue",
                            },
                            Action: "testAction",
                            NotAction: "testNotAction",
                            Resource: "testResource",
                            NotResource: "testNotResource",
                        },
                    ],
                    tags: {
                        testtagkey: "testtagvalue",
                    },
                },
            },
        },
        functions: {},
    },
    {
        service: "users",
        provider: {
            name: "aws",
            iam: {
                role: "testrole",
            },
        },
        functions: {},
    },
    {
        service: "users",
        provider: {
            name: "aws",
            iam: {
                deploymentRole: "testdeploymentRole",
            },
        },
        functions: {},
    },
    {
        service: "users",
        provider: {
            name: "aws",
            httpApi: {
                cors: {
                    allowedOrigins: ["https://example.com"],
                    allowedHeaders: [
                        "Content-Type",
                        "X-Amz-Date",
                        "Authorization",
                        "X-Api-Key",
                        "X-Amz-Security-Token",
                        "X-Amz-User-Agent",
                    ],
                    allowedMethods: ["OPTIONS", "GET", "POST"],
                    allowCredentials: false,
                    exposedResponseHeaders: ["x-wp-total", "x-wp-totalpages"],
                    maxAge: 86400,
                },
            },
        },
        functions: {},
    },
    {
        service: "users",
        provider: {
            name: "aws",
        },
        functions: {
            basicLambdaFnUrl: {
                handler: "main.js",
                url: true,
            },
        },
    },
];

// Test Aws Class
const aws = new Aws(serverless, options);

class PluginAddingComponentsInConstructor implements Plugin {
    hooks: Plugin.Hooks;
    constructor(serverless: Serverless) {
        this.hooks = {};
        if (typeof serverless.service === "string") {
            throw new Error();
        }
        serverless.service.functions["myNewFunction"] = {
            events: [
                {
                    sqs: {
                        arn: { "Fn::GetAtt": ["myQueue", "Arn"] },
                        batchSize: 1,
                    },
                },
            ],
            handler: "myLambda.handler",
            reservedConcurrency: 2,
            timeout: 300,
        };
        serverless.service.resources.Resources["myDLQ"] = {
            Properties: {
                QueueName: "myDLQ",
            },
            Type: "AWS::SQS::Queue",
        };
        serverless.service.resources.Resources["myQueue"] = {
            Properties: {
                DelaySeconds: 60,
                QueueName: "myQueue",
                RedrivePolicy: {
                    deadLetterTargetArn: { "Fn::GetAtt": ["myDLQ", "Arn"] },
                    maxReceiveCount: 3,
                },
                VisibilityTimeout: 360,
            },
            Type: "AWS::SQS::Queue",
        };
        serverless.service.resources.Resources["myPolicy"] = {
            Properties: {
                PolicyDocument: {
                    Statement: [
                        {
                            Action: "SQS:SendMessage",
                            Condition: {
                                ArnEquals: {
                                    "aws:SourceArn": "my-sns-topic-arn",
                                },
                            },
                            Effect: "Allow",
                            Principal: "*",
                            Resource: { "Fn::GetAtt": ["myQueue", "Arn"] },
                            Sid: "allow-sns-messages",
                        },
                    ],
                    Version: "2012-10-17",
                },
                Queues: [
                    {
                        Ref: "myQueue",
                    },
                ],
            },
            Type: "AWS::SQS::QueuePolicy",
        };
        if (serverless.service.resources.Resources === undefined) {
            serverless.service.resources.Resources = {};
        }
        serverless.service.resources.Resources["mySubscription"] = {
            Properties: {
                Endpoint: { "Fn::GetAtt": ["myQueue", "Arn"] },
                FilterPolicy: { MyAttribute: "myValue" },
                Protocol: "sqs",
                RawMessageDelivery: "true",
                TopicArn: "my-sns-topic-arn",
            },
            Type: "AWS::SNS::Subscription",
        };
    }
}

// =============================================================================
// Serverless Framework v4 Types Tests
// =============================================================================

// Test v4 stages configuration
const awsServerlessWithStages: Aws.Serverless = {
    service: "my-service",
    provider: {
        name: "aws",
    },
    stages: {
        default: {
            params: {
                tableName: "default-table",
                apiUrl: "https://api.example.com",
            },
            observability: true,
        },
        dev: {
            params: {
                tableName: "dev-table",
                logLevel: "debug",
            },
            observability: false,
        },
        prod: {
            params: {
                tableName: "prod-table",
                logLevel: "error",
            },
            observability: true,
            resolvers: {
                vault: {
                    address: "https://vault.example.com:8200",
                    token: "${env:VAULT_TOKEN}",
                    version: "v1",
                    path: "secret/data/myapp",
                },
                terraform: {
                    type: "s3",
                    bucket: "my-terraform-state",
                    key: "prod/terraform.tfstate",
                    region: "us-east-1",
                },
            },
        },
    },
};

// Test v4 build configuration with esbuild
const awsServerlessWithBuild: Aws.Serverless = {
    service: "my-service",
    provider: {
        name: "aws",
    },
    build: {
        esbuild: {
            configFile: "./esbuild.config.js",
            bundle: true,
            minify: true,
            sourcemap: true,
            external: ["aws-sdk", "@aws-sdk/*"],
            target: "node18",
            platform: "node",
        },
    },
};

// Test v4 build disabled (for migration from v3 with bundler plugins)
const awsServerlessWithBuildDisabled: Aws.Serverless = {
    service: "my-service",
    provider: {
        name: "aws",
    },
    build: false,
};

// Test v4 license key (root-level property, not provider-level)
// Example from: https://www.serverless.com/framework/docs/guides/license-keys
const awsServerlessWithLicenseKey: Aws.Serverless = {
    service: "my-service",
    // AWS SSM Params & AWS Secrets Manager Example
    licenseKey: "${ssm:/path/to/serverless-framework-license-key}",
    provider: {
        name: "aws",
        runtime: "nodejs20.x",
    },
    functions: {
        hello: {
            handler: "handler.hello",
            events: [],
        },
    },
};

// Test HashiCorp Vault resolver configuration
const stageWithVaultResolver: Aws.StageConfig = {
    params: {
        myParam: "value",
    },
    resolvers: {
        vault: {
            address: "https://vault.company.com:8200",
            token: "${env:VAULT_TOKEN}",
            version: "v1",
            path: "secret/data/myapp",
        },
    },
};

// Test Terraform S3 backend resolver
const stageWithTerraformS3Resolver: Aws.StageConfig = {
    resolvers: {
        terraform: {
            type: "s3",
            bucket: "my-tf-state-bucket",
            key: "env/prod/terraform.tfstate",
            region: "us-east-1",
        },
    },
};

// Test Terraform Cloud/HCP backend resolver
const stageWithTerraformCloudResolver: Aws.StageConfig = {
    resolvers: {
        terraform: {
            type: "cloud",
            organization: "my-org",
            workspaces: {
                name: "my-workspace",
            },
        },
    },
};

// Test Terraform remote backend resolver
const stageWithTerraformRemoteResolver: Aws.StageConfig = {
    resolvers: {
        terraform: {
            type: "remote",
            organization: "my-org",
            workspaces: {
                name: "my-workspace",
            },
        },
    },
};

// Test Terraform HTTP backend resolver
const stageWithTerraformHttpResolver: Aws.StageConfig = {
    resolvers: {
        terraform: {
            type: "http",
            address: "https://terraform-state.example.com/state",
        },
    },
};

// Test custom named resolvers
const stageWithCustomResolvers: Aws.StageConfig = {
    resolvers: {
        vault: {
            address: "https://vault.example.com",
        },
        terraform: {
            type: "s3",
            bucket: "state-bucket",
            key: "state.tfstate",
        },
        // Custom named resolvers
        myVault: {
            address: "https://my-custom-vault.example.com",
            token: "${env:MY_VAULT_TOKEN}",
        },
        infraState: {
            type: "s3",
            bucket: "infra-state-bucket",
            key: "infra.tfstate",
            region: "eu-west-1",
        },
    },
};

// Test EsBuild configuration options
const esBuildConfig: Aws.EsBuildConfig = {
    configFile: "./custom-esbuild.config.js",
    bundle: true,
    minify: true,
    sourcemap: true,
    external: ["aws-sdk", "@aws-sdk/client-s3", "@aws-sdk/client-dynamodb"],
    target: "node20",
    platform: "node",
};

// Test Build interface
const buildConfig: Aws.Build = {
    esbuild: {
        bundle: true,
        minify: false,
    },
};

// Test Stages interface
const stagesConfig: Aws.Stages = {
    default: {
        params: {
            region: "us-east-1",
        },
    },
    dev: {
        params: {
            logLevel: "debug",
        },
        observability: false,
    },
    staging: {
        params: {
            logLevel: "info",
        },
        observability: true,
    },
    prod: {
        params: {
            logLevel: "error",
        },
        observability: true,
        resolvers: {
            vault: {
                address: "https://vault.prod.example.com",
            },
        },
    },
};

// Test VaultResolver interface
const vaultResolver: Aws.VaultResolver = {
    address: "https://vault.example.com:8200",
    token: "s.abcdefghijklmnop",
    version: "v1",
    path: "secret/data/myapp/config",
};

// Test TerraformResolver with all backend types
const terraformS3Resolver: Aws.TerraformResolver = {
    type: "s3",
    bucket: "my-terraform-state-bucket",
    key: "environments/prod/terraform.tfstate",
    region: "us-east-1",
};

const terraformCloudResolver: Aws.TerraformResolver = {
    type: "cloud",
    organization: "my-organization",
    workspaces: {
        name: "production-workspace",
    },
};

const terraformHttpResolver: Aws.TerraformResolver = {
    type: "http",
    address: "https://terraform-backend.example.com/state",
};

// Test StageResolvers interface
const stageResolvers: Aws.StageResolvers = {
    vault: {
        address: "https://vault.example.com",
        path: "secret/data",
    },
    terraform: {
        type: "s3",
        bucket: "state-bucket",
        key: "terraform.tfstate",
    },
};

// Test complete v4 configuration combining all features
const completeV4Config: Aws.Serverless = {
    service: "complete-v4-service",
    frameworkVersion: "4",
    licenseKey: "${env:SERVERLESS_LICENSE_KEY}",
    provider: {
        name: "aws",
        runtime: "nodejs20.x",
        stage: "${opt:stage, 'dev'}",
        region: "us-east-1",
        architecture: "arm64",
        memorySize: 1024,
        timeout: 30,
        iam: {
            role: {
                statements: [
                    {
                        Effect: "Allow",
                        Action: ["dynamodb:GetItem", "dynamodb:PutItem"],
                        Resource: "*",
                    },
                ],
            },
        },
    },
    stages: {
        default: {
            params: {
                tableName: "default-table",
            },
        },
        dev: {
            params: {
                tableName: "dev-table",
            },
            observability: false,
        },
        prod: {
            params: {
                tableName: "prod-table",
            },
            observability: true,
            resolvers: {
                vault: {
                    address: "https://vault.prod.example.com",
                    token: "${env:VAULT_TOKEN}",
                },
                terraform: {
                    type: "s3",
                    bucket: "prod-tf-state",
                    key: "terraform.tfstate",
                    region: "us-east-1",
                },
            },
        },
    },
    build: {
        esbuild: {
            bundle: true,
            minify: true,
            sourcemap: true,
            external: ["@aws-sdk/*"],
            target: "node20",
            platform: "node",
        },
    },
    functions: {
        hello: {
            handler: "src/handlers/hello.handler",
            events: [
                {
                    httpApi: {
                        method: "GET",
                        path: "/hello",
                    },
                },
            ],
        },
    },
    custom: {
        myCustomValue: "test",
    },
};

// Test deprecated properties still work (backward compatibility)
const backwardCompatibleConfig: Aws.Serverless = {
    service: "backward-compatible-service",
    variablesResolutionMode: "20210219", // deprecated but should still work
    provider: {
        name: "aws",
        lambdaHashingVersion: 20201221, // deprecated but should still work
        role: "arn:aws:iam::123456789:role/my-role", // deprecated, use iam.role
        rolePermissionsBoundary: "arn:aws:iam::123456789:policy/boundary", // deprecated
        iamRoleStatements: [ // deprecated, use iam.role.statements
            {
                Effect: "Allow",
                Action: ["s3:GetObject"],
                Resource: "*",
            },
        ],
        iamManagedPolicies: ["arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess"], // deprecated
        cfnRole: "arn:aws:iam::123456789:role/cfn-role", // deprecated, use iam.deploymentRole
    },
    package: {
        include: ["src/**"], // deprecated, use patterns
        exclude: ["node_modules/**"], // deprecated, use patterns
    },
};

// Test Kafka event with consumerGroupId
const kafkaEventConfig: Aws.Serverless = {
    service: "kafka-service",
    provider: {
        name: "aws",
    },
    functions: {
        kafkaConsumer: {
            handler: "src/handlers/kafka.handler",
            events: [
                {
                    kafka: {
                        accessConfigurations: {
                            saslScram512Auth: "arn:aws:secretsmanager:us-east-1:123456789:secret:kafka-auth",
                            vpcSubnet: ["subnet-12345678", "subnet-87654321"],
                            vpcSecurityGroup: "sg-12345678",
                        },
                        bootstrapServers: [
                            "broker1.kafka.example.com:9092",
                            "broker2.kafka.example.com:9092",
                        ],
                        topic: "my-topic",
                        batchSize: 100,
                        maximumBatchingWindow: 5,
                        startingPosition: "LATEST",
                        enabled: true,
                        consumerGroupId: "my-consumer-group",
                    },
                },
            ],
        },
    },
};

// Test type-only declarations (no runtime usage, just type checking)
type StagesType = Aws.Stages;
type StageConfigType = Aws.StageConfig;
type BuildType = Aws.Build;
type EsBuildConfigType = Aws.EsBuildConfig;
type ObservabilityConfigType = Aws.ObservabilityConfig;
type SourcemapConfigType = Aws.SourcemapConfig;

// Ensure types are assignable correctly
const _stages: StagesType = stagesConfig;
const _stageConfig: StageConfigType = stageWithVaultResolver;
const _build: BuildType = buildConfig;
const _esbuild: EsBuildConfigType = esBuildConfig;

// =============================================================================
// Additional v4 Types Tests (PR Feedback)
// =============================================================================

// Test build string variant (e.g., build: 'esbuild')
const awsServerlessWithBuildString: Aws.Serverless = {
    service: "my-service",
    provider: { name: "aws" },
    build: "esbuild",
};

// Test observability with string variants
const stageWithObservabilityAxiom: Aws.StageConfig = {
    params: { env: "prod" },
    observability: "axiom",
};

const stageWithObservabilityDashboard: Aws.StageConfig = {
    params: { env: "staging" },
    observability: "dashboard",
};

// Test observability with object form
const stageWithObservabilityObject: Aws.StageConfig = {
    params: { env: "prod" },
    observability: {
        provider: "axiom",
        dataset: "my-application-logs",
    },
};

// Test ObservabilityConfig interface directly
const observabilityConfig: Aws.ObservabilityConfig = {
    provider: "axiom",
    dataset: "my-logs-dataset",
};

// Test SourcemapConfig interface
const sourcemapConfig: Aws.SourcemapConfig = {
    type: "linked",
    setNodeOptions: true,
};

// Test EsBuildConfig with all new properties
const esBuildConfigExtended: Aws.EsBuildConfig = {
    configFile: "./esbuild.config.js",
    bundle: true,
    minify: true,
    sourcemap: {
        type: "inline",
        setNodeOptions: true,
    },
    external: ["aws-sdk"],
    exclude: ["@aws-sdk/*"],
    packages: "external",
    buildConcurrency: 10,
    target: "node20",
    platform: "node",
};

// Test resolvers as open object (13 built-in resolver types)
const stageWithOpenResolvers: Aws.StageConfig = {
    params: { env: "prod" },
    resolvers: {
        // Built-in resolvers with varying shapes
        vault: { address: "https://vault.example.com" },
        terraform: { type: "s3", bucket: "state" },
        env: {},
        file: { path: "./config.json" },
        param: {},
        self: {},
        git: {},
        sls: {},
        strToBool: {},
        output: {},
        doppler: { project: "my-project", config: "prod" },
        opt: {},
        aws: {},
    },
};

// Test complete v4 config with all new features
const completeV4ConfigWithNewFeatures: Aws.Serverless = {
    service: "complete-v4-new-features",
    frameworkVersion: "4",
    licenseKey: "${env:SERVERLESS_LICENSE_KEY}",
    provider: { name: "aws" },
    build: {
        esbuild: {
            bundle: true,
            minify: true,
            sourcemap: {
                type: "linked",
                setNodeOptions: true,
            },
            exclude: ["aws-sdk"],
            packages: "external",
            buildConcurrency: 5,
        },
    },
    stages: {
        default: {
            observability: true,
        },
        dev: {
            observability: false,
        },
        staging: {
            observability: "dashboard",
        },
        prod: {
            observability: {
                provider: "axiom",
                dataset: "prod-logs",
            },
            resolvers: {
                vault: { address: "https://vault.prod.example.com" },
                doppler: { project: "my-app", config: "prod" },
            },
        },
    },
};
