import Serverless from 'serverless';
import Plugin from 'serverless/classes/Plugin';
import PluginManager from 'serverless/classes/PluginManager';
import { getHttp } from 'serverless/plugins/aws/package/compile/events/apiGateway/lib/validate';
import Aws from 'serverless/aws';

const options: Serverless.Options = {
    noDeploy: false,
    stage: null,
    region: '',
};

const serverless = new Serverless();

class CustomPlugin implements Plugin {
    commands = {
        command: {
            usage: 'description',
            lifecycleEvents: ['start'],
            options: {
                option: {
                    usage: `description`,
                    required: true,
                    shortcut: 'o',
                },
            },
        },
    };

    customProp = {};

    hooks: Plugin.Hooks;
    variableResolvers: Plugin.VariableResolvers;

    constructor(serverless: Serverless, options: Serverless.Options) {
        this.hooks = {
            'command:start': () => {},
        };
        this.variableResolvers = {
            echo: async (source) => source.slice(5)
        };
    }
}

// Test a plugin with missing 'hooks' property
// prettier-ignore
class BadPlugin implements Plugin { // $ExpectError
    hoooks: Plugin.Hooks; // emulate a bad 'hooks' definition with a typo
    constructor(badArg: number) {}
}

const manager = new PluginManager(serverless);
manager.addPlugin(CustomPlugin);
// Test adding a plugin with an incorrect constructor
// prettier-ignore
manager.addPlugin(BadPlugin); // $ExpectError

// Test a plugin with bad arguments for a variable resolver
class BadVariablePlugin1 implements Plugin {
    hooks: Plugin.Hooks;
    // $ExpectError
    variableResolvers = {
        badEchoArgs: async (badArg: number) => {},
    };
}

// Test a plugin with non-async variable resolver
class BadVariablePlugin implements Plugin {
    hooks: Plugin.Hooks;
    // $ExpectError
    variableResolvers = {
        badEchoNotAsync: (source: string) => {},
    };
}

// Test provider's 'request' method
const provider = serverless.getProvider('aws');
provider.request('AccessAnalyzer', 'createAnalyzer');
provider.request('CloudFormation', 'deleteStack', {
    StackName: 'stack',
});
provider.request(
    'CloudFormation',
    'deleteStack',
    {
        StackName: 'stack',
    },
    {
        useCache: true,
        region: 'us-east-1',
    },
);

// Test provider's 'getServerlessDeploymentBucketName'
provider.getServerlessDeploymentBucketName().then(bucketName => {});

// Test ApiGateway validator
getHttp(
    {
        http: {
            path: 'myPath',
            method: 'get',
        },
    },
    'myFunction',
);
getHttp(
    {
        http: 'GET mypath',
    },
    'myFunction',
);
getHttp(
    {
        sqs: 'arn', // $ExpectError
    },
    'myFunction',
);

// Test entire Aws Serverless type
const awsServerless: Aws.Serverless = {
    service: {
        name: 'testName1',
        awsKmsKeyArn: 'testAwsKmsKeyArn'
    },
    frameworkVersion: 'testFrameworkVersion',
    configValidationMode: 'error',
    variablesResolutionMode: '20210219',
    provider: {
        name: 'aws',
        runtime: 'testRuntime',
        stage: 'testStage',
        region: 'testRegion',
        stackName: 'testStackName',
        apiName: 'testapiName',
        websocketsApiName: 'testwebsocketsApiName',
        websocketsApiRouteSelectionExpression: 'testwebsocketsApiRouteSelectionExpression',
        profile: 'testprofile',
        memorySize: 1,
        reservedConcurrency: 1,
        timeout: 1,
        logRetentionInDays: 1,
        deploymentBucket: {
            name: 'testname',
            maxPreviousDeploymentArtifacts: 1,
            blockPublicAccess: true,
            serverSideEncryption: 'testserverSideEncryption',
            sseKMSKeyId: 'testsseKMSKeyId',
            sseCustomerAlgorithim: 'testsseCustomerAlgorithim',
            sseCustomerKey: 'testsseCustomerKey',
            sseCustomerKeyMD5: 'testsseCustomerKeyMD5',
            tags: {
                testtagkey: 'testtagvalue'
            }
        },
        deploymentPrefix: 'testdeploymentPrefix',
        role: 'testrole',
        rolePermissionsBoundary: 'testrolePermissionsBoundary',
        cfnRole: 'testcfnRole',
        versionFunctions: true,
        environment: {
            testenvironmentkey: 'testenvironmentvalue'
        },
        endpointType: 'regional',
        apiKeys: ['testApiKeys'],
        apiGateway: {
            restApiId: 'testrestApiId',
            restApiRootResourceId: 'testrestApiRootResourceId',
            restApiResources: {
                testrestapiresource: 'testrestapiresource'
            },
            websocketApiId: 'testwebsocketApiId',
            apiKeySourceType: 'HEADER',
            minimumCompressionSize: 1,
            description: 'testdescription',
            binaryMediaTypes: ['testbinaryMediaTypes']
        },
        alb: {
            targetGroupPrefix: 'testtargetGroupPrefix',
            authorizers: {
                testCognitoAuthorizer: {
                    type: 'cognito',
                    userPoolArn: 'testuserPoolArn',
                    userPoolClientId: 'testuserPoolClientId',
                    userPoolDomain: 'testuserPoolDomain',
                    allowUnauthenticated: false,
                    requestExtraParams: {
                        prompt: 'testprompt',
                        redirect: false
                    },
                    scope: 'testscope',
                    sessionCookieName: 'testsessionCookieName',
                    sessionTimeout: 1
                },
                testOidcAuthorizer: {
                    type: 'oidc',
                    authorizationEndpoint: 'testauthorizationEndpoint',
                    clientId: 'testclientId',
                    clientSecret: 'testclientSecret',
                    useExistingClientSecret: false,
                    issuer: 'testissuer',
                    tokenEndpoint: 'testtokenEndpoint',
                    userInfoEndpoint: 'testuserInfoEndpoint',
                    allowUnauthenticated: false,
                    requestExtraParams: {
                        prompt: 'testprompt',
                        redirect: false
                    },
                    scope: 'testscope',
                    sessionCookieName: 'testsessionCookieName',
                    sessionTimeout: 1
                },
                testJwtAuthorizer: {
                    identitySource: 'testidentitySource',
                    issuerUrl: 'testissuerUrl',
                    audience: ['testaudience']
                }
            }
        },
        httpApi: {
            id: 'testid',
            name: 'testname',
            payload: 'testpayload',
            cors: false,
            authorizers: {
                testJwtAuthorizer: {
                    identitySource: 'testidentitySource',
                    issuerUrl: 'testissuerUrl',
                    audience: ['testaudience']
                }
            }
        },
        usagePlan: {
            quota: {
                limit: 1,
                offset: 1,
                period: '20'
            },
            throttle: {
                burstLimit: 1,
                rateLimit: 1
            }
        },
        stackTags: {
            testtagkey: 'testtagvalue'
        },
        iamManagedPolicies: ['testiamManagedPolicies'],
        iamRoleStatements: [
            {
                Effect: 'Allow',
                Sid: 'testSid',
                Condition: {
                    testcondition: 'testconditionvalue'
                },
                Action: 'testAction',
                NotAction: 'testNotAction',
                Resource: 'testResource',
                NotResource: 'testNotResource'
            }
        ],
        stackPolicy: [
            {
                Effect: 'Allow',
                Principal: 'testPrincipal',
                Action: 'testAction',
                Resource: 'testResource',
                Condition: {
                    testcondition: 'testconditionvalue'
                }
            }
        ],
        vpc: {
            securityGroupIds: ['testsecurityGroupIds'],
            subnetIds: ['testsubnetIds']
        },
        notificationArns: ['testnotificationArns'],
        stackParameters: [
            {
                ParameterKey: 'testParameterKey',
                ParameterValue: 'testParameterValue',
            }
        ],
        resourcePolicy: [
            {
                Effect: 'Allow',
                Principal: 'testPrincipal',
                Action: 'testAction',
                Resource: 'testResource',
                Condition: {
                    testcondition: 'testconditionvalue'
                }
            }
        ],
        rollbackConfiguration: {
            MonitoringTimeInMinutes: 1,
            RollbackTriggers: [
                {
                    Arn: 'testArn',
                    Type: 'testType',
                }
            ]
        },
        tags: {
            testtagkey: 'testtagvalue'
        },
        tracing: {
            apiGateway: false,
            lambda: false
        },
        logs: {
            restApi: {
                accessLogging: false,
                format: 'testformat',
                executionLogging: false,
                level: 'ERROR',
                fullExecutionData: false,
                role: 'testrole',
                roleManagedExternally: false,
            },
            websocket: {
                level: 'INFO'
            },
            httpApi: {
                format: 'testformat'
            },
            frameworkLambda: false
        }
    },
    package: {
        include: ['testinclude'],
        exclude: ['testexclude'],
        patterns: ['!testpatternexclude', 'testpatterninclude'],
        excludeDevDependencies: false,
        artifact: 'testartifact',
        individually: true
    },
    functions: {
        testFunction: {
            handler: 'testhandler',
            name: 'testname',
            description: 'testdescription',
            memorySize: 1,
            reservedConcurrency: 1,
            provisionedConcurrency: 1,
            runtime: 'testruntime',
            timeout: 1,
            role: 'testrole',
            onError: 'testonError',
            awsKmsKeyArn: 'testawsKmsKeyArn',
            environment: {
                testenvironment: 'testenvironmentvalue',
                testRefEnvironment: {
                    Ref: 'MyRessource',
                }
            },
            tags: {
                testtagkey: 'testtagvalue'
            },
            vpc: {
                securityGroupIds: ['testsecurityGroupIds'],
                subnetIds: ['testsubnetIds']
            },
            package: {
                include: ['testinclude'],
                exclude: ['testexclude'],
                patterns: ['!testpatternexclude', 'testpatterninclude'],
                excludeDevDependencies: false,
                artifact: 'testartifact',
                individually: true
            },
            layers: ['testlayers'],
            tracing: 'PassThrough',
            condition: 'testcondition',
            dependsOn: ['testdependson'],
            destinations: {
                onSuccess: 'testonSuccess',
                onFailure: 'testonFailure',
            },
            events: [
                {
                    http: {
                        path: 'testpath',
                        method: 'testmethod',
                        cors: {
                          allowCredentials: true,
                          cacheControl: 'cacheControl',
                          headers: ['header1', 'header2'],
                          origins: ['origin1', 'origin2'],
                          maxAge: 1000,
                        },
                        async: false,
                        private: false,
                        authorizer: {
                            name: 'testname',
                            arn: 'testarn',
                            resultTtlInSeconds: 1,
                            identitySource: 'testidentitySource',
                            identityValidationExpression: 'testidentityValidationExpression',
                            type: 'testtype',
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
                            schema: {
                                'application/json': {
                                    type: 'object',
                                    properties: {
                                        productId: {
                                            type: 'integer'
                                        }
                                    }
                                }
                            },
                        }
                    },
                }, {
                    httpApi: {
                        method: 'testmethod',
                        path: 'testpath',
                        authorizer: {
                            name: 'testname',
                            scopes: ['testscopes']
                        }
                    }
                },
                {
                    httpApi: {
                        method: 'testmethod',
                        path: 'testpath',
                        authorizer: {
                            id: 'testid',
                            scopes: ['testscopes'],
                        },
                    },
                }, {
                    websocket: {
                        route: 'testroute',
                        routeResponseSelectionExpression: 'testrouteResponseSelectionExpression',
                        authorizer: {
                            name: 'testname',
                            arn: 'testarn',
                            identitySource: ['testidentitysource']
                        }
                    }
                }, {
                    s3: {
                        bucket: 'testbucket',
                        event: 'testevent',
                        rules: [
                            {
                                prefix: 'testprefix',
                                suffix: 'testsuffix',
                            }
                        ],
                        existing: false
                    }
                }, {
                    schedule: '1',
                }, {
                    sns: {
                        arn: 'testarn',
                        topicName: 'testtopicName',
                        displayName: 'testdisplayName',
                        filterPolicy: { testFilterPolicy: 'testfilterpolicy' },
                        redrivePolicy: {
                            deadLetterTargetArn: 'testdeadLetterTargetArn',
                            deadLetterTargetRef: 'testdeadLetterTargetRef',
                            deadLetterTargetImport: {
                                arn: 'testarn',
                                url: 'testurl',
                            }
                        }
                    }
                }, {
                    sqs: {
                        arn: 'testarn',
                        batchSize: 1,
                        maximumRetryAttempts: 1,
                        enabled: true
                    }
                }, {
                    stream: {
                        arn: 'testarn',
                        batchSize: 1,
                        startingPosition: 1,
                        enabled: true
                    }
                }, {
                    msk: {
                        arn: 'testarn',
                        topic: 'testTopic',
                        batchSize: 1,
                        startingPosition: 'LATEST',
                        enabled: true
                    }
                }, {
                    alexaSkill: {
                        appId: 'testappId',
                        enabled: true
                    }
                }, {
                    alexaSmartHome: {
                        appId: 'testappId',
                        enabled: true
                    }
                }, {
                    iot: {
                        name: 'testname',
                        description: 'testdescription',
                        enabled: true,
                        sql: 'testsql',
                        sqlVersion: 'testsqlVersion',
                    }
                }, {
                    cloudwatchEvent: {
                        event: 'testevent',
                        name: 'testname',
                        description: 'testdescription',
                        enabled: true,
                        input: {
                            testinputkey: 'testinputvalue'
                        },
                        inputPath: 'testinputPath',
                        inputTransformer: {
                            inputPathsMap: {
                                testinputpathsmap: 'testinputpathsmapvalue'
                            },
                            inputTemplate: 'testinputTemplate',
                        }
                    }
                }, {
                    cloudwatchLog: {
                        logGroup: 'testlogGroup',
                        filter: 'testfilter',
                    }
                }, {
                    cognitoUserPool: {
                        pool: 'testpool',
                        trigger: 'testtrigger',
                        existing: false
                    }
                }, {
                    alb: {
                        listenerArn: 'testlistenerArn',
                        priority: 1,
                        conditions: {
                            host: 'testhost',
                            path: 'testpath',
                        }
                    }
                }, {
                    eventBridge: {
                        schedule: 'testschedule',
                        eventBus: 'testeventBus',
                        pattern: {
                            source: ['testsource'],
                            'detail-type': ['testdetailtype'],
                            detail: {
                                testdetailkey: ['testdetailvalue']
                            }
                        },
                        input: {
                            testinputkey: 'testinputvalue'
                        },
                        inputPath: 'testinputPath',
                        inputTransformer: {
                            inputPathsMap: {
                                testinputpathsmap: 'testinputpathsmapvalue'
                            },
                            inputTemplate: 'testinputTemplate',
                        }
                    }
                }, {
                    cloudFront: {
                        eventType: 'testeventType',
                        includeBody: false,
                        pathPattern: 'testpathPattern',
                        origin: {
                            DomainName: 'testDomainName',
                            OriginPath: 'testOriginPath',
                            CustomOriginConfig: {
                                OriginProtocolPolicy: 'testOriginProtocolPolicy',
                            }
                        }
                    }
                }
            ]
        }
    },
    layers: {
        testLayer: {
            path: 'testpath',
            name: 'testname',
            description: 'testdescription',
            compatibleRuntimes: ['testcompatibleruntimes'],
            licenseInfo: 'testlicenseInfo',
            allowedAccounts: ['testallowedaccounts'],
            retain: false,
        }
    },
    resources: {
        Description: 'testStackDescription',
        Resources: {
            testcloudformationresource: {
                Type: 'testType',
                Properties: {
                    testpropertykey: 'testpropertyvalue'
                },
                DependsOn: 'testdependson',
                DeletionPolicy: 'testDeletionPolicy',
            }
        },
        extensions:  {
            testcloudformationresource: {
                Type: 'testType',
                Properties: {
                    testpropertykey: 'testpropertyvalue'
                },
                DependsOn: 'testdependson',
                DeletionPolicy: 'testDeletionPolicy',
            }
        },
        Outputs: {
            testoutput: {
                Description: 'testDescription',
                Value: 'testValue',
                Export: {
                    Name: 'testname',
                },
                Condition: 'testcondition',
            },
            testFunctionLambdaFunctionQualifiedArn: {
                Description: 'testDescription',
                Export: {
                    Name: 'testFunctionLambdaFunctionQualifiedArn',
                },
            },
        },
    },
};

// vpc can be set as a reference to some section of the config file
// e.g. ${self:custom.vpc.${self:provider.stage}}
awsServerless.provider.vpc = 'serverless reference';
awsServerless.functions![0].vpc = 'serverless reference';

const bunchOfConfigs: Aws.Serverless[] = [
    {
        service: 'users',
        provider: { name: 'aws' },
        functions: {}
    },
    {
        service: 'users',
        useDotenv: true,
        provider: { name: 'aws' },
        functions: {}
    },
    {
        service: 'users',
        configValidationMode: 'off',
        unresolvedVariablesNotificationMode: 'error',
        provider: { name: 'aws' },
        functions: {}
    },
    {
        service: 'users',
        disabledDeprecations: [
            '*'
        ],
        provider: { name: 'aws' },
        functions: {}
    },
    {
        service: 'users',
        provider: {
            name: 'aws',
            iam: {
                role: {
                    name: 'aws',
                    permissionBoundary: 'testpermissionsBoundary',
                    managedPolicies: ['testmanagedPolicies'],
                    statements: [
                        {
                            Effect: 'Allow',
                            Sid: 'testSid',
                            Condition: {
                                testcondition: 'testconditionvalue'
                            },
                            Action: 'testAction',
                            NotAction: 'testNotAction',
                            Resource: 'testResource',
                            NotResource: 'testNotResource'
                        }
                    ],
                    tags: {
                        testtagkey: 'testtagvalue'
                    }
                }
            }
        },
        functions: {}
    },
    {
        service: 'users',
        provider: {
            name: 'aws',
            iam: {
                role: 'testrole',
            }
        },
        functions: {}
    },
    {
        service: 'users',
        provider: {
            name: 'aws',
            iam: {
                deploymentRole: 'testdeploymentRole'
            }
        },
        functions: {}
    }
];

// Test Aws Class
const aws = new Aws(serverless, options);

class PluginAddingComponentsInConstructor implements Plugin {
    hooks: Plugin.Hooks;
    constructor(serverless: Serverless) {
        this.hooks = {};
        if (typeof serverless.service === 'string') {
            throw new Error();
        }
        serverless.service.functions['myNewFunction'] = {
            events: [
                {
                    sqs: {
                        arn: { 'Fn::GetAtt': ['myQueue', 'Arn'] },
                        batchSize: 1,
                    },
                },
            ],
            handler: 'myLambda.handler',
            reservedConcurrency: 2,
            timeout: 300,
        };
        serverless.service.resources.Resources['myDLQ'] = {
            Properties: {
                QueueName: 'myDLQ',
            },
            Type: 'AWS::SQS::Queue',
        };
        serverless.service.resources.Resources['myQueue'] = {
            Properties: {
                DelaySeconds: 60,
                QueueName: 'myQueue',
                RedrivePolicy: {
                    deadLetterTargetArn: { 'Fn::GetAtt': ['myDLQ', 'Arn'] },
                    maxReceiveCount: 3,
                },
                VisibilityTimeout: 360,
            },
            Type: 'AWS::SQS::Queue',
        };
        serverless.service.resources.Resources['myPolicy'] = {
            Properties: {
                PolicyDocument: {
                    Statement: [
                        {
                            Action: 'SQS:SendMessage',
                            Condition: {
                                ArnEquals: {
                                    'aws:SourceArn': 'my-sns-topic-arn',
                                },
                            },
                            Effect: 'Allow',
                            Principal: '*',
                            Resource: { 'Fn::GetAtt': ['myQueue', 'Arn'] },
                            Sid: 'allow-sns-messages',
                        },
                    ],
                    Version: '2012-10-17',
                },
                Queues: [
                    {
                        Ref: 'myQueue',
                    },
                ],
            },
            Type: 'AWS::SQS::QueuePolicy',
        };
        if (serverless.service.resources.Resources === undefined) {
            serverless.service.resources.Resources = {};
        }
        serverless.service.resources.Resources['mySubscription'] = {
            Properties: {
                Endpoint: { 'Fn::GetAtt': ['myQueue', 'Arn'] },
                FilterPolicy: { MyAttribute: 'myValue' },
                Protocol: 'sqs',
                RawMessageDelivery: 'true',
                TopicArn: 'my-sns-topic-arn',
            },
            Type: 'AWS::SNS::Subscription',
        };
    }
}
