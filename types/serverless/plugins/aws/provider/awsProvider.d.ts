import Serverless = require('../../../index');

declare namespace Aws {
    /*
        Types based on https://github.com/serverless/serverless/blob/master/docs/providers/aws/guide/serverless.yml.md
    */
    interface Serverless {
        service: Service | string;
        useDotenv?: boolean;
        frameworkVersion?: string;
        enableLocalInstallationFallback?: boolean;
        variablesResolutionMode?: '20210219';
        unresolvedVariablesNotificationMode?: 'warn' | 'error';
        disabledDeprecations?: string[];
        configValidationMode?: 'warn' | 'error' | 'off';
        provider: Provider;
        package?: Package;
        functions?: Functions;
        layers?: Layers;
        resources?: Resources;
        plugins?: string[];
        org?: string;
        app?: string;
        tenant?: string;
        custom?: Custom;
    }

    interface Service {
        name: string;
        /** @deprecated in favor of `kmsKeyArn` at the provider level  */
        awsKmsKeyArn?: string;
    }

    interface Provider {
        name: 'aws';
        runtime?: string;
        stage?: string;
        region?: string;
        stackName?: string;
        apiName?: string;
        lambdaHashingVersion?: number;
        websocketsApiName?: string;
        websocketsApiRouteSelectionExpression?: string;
        profile?: string;
        memorySize?: number | string;
        reservedConcurrency?: number | string;
        timeout?: number | string;
        logRetentionInDays?: number | string;
        deploymentBucket?: DeploymentBucket;
        deploymentPrefix?: string;
        /** @deprecated in favor of `iam.role` */
        role?: string;
        /** @deprecated in favor of `iam.role.permissionsBoundary` */
        rolePermissionsBoundary?: string;
        /** @deprecated in favor of `iam.role.statements` */
        iamRoleStatements?: IamRoleStatement[];
        /** @deprecated in favor of `iam.role.managedPolicies` */
        iamManagedPolicies?: string[];
        /** @deprecated in favor of `iam.deploymentRole` */
        cfnRole?: string;
        iam?: IamSettings;
        versionFunctions?: boolean;
        environment?: Environment | string;
        endpointType?: 'regional' | 'edge' | 'private';
        apiKeys?: string[];
        apiGateway?: ApiGateway;
        alb?: Alb;
        httpApi?: HttpApi;
        usagePlan?: UsagePlan;
        stackTags?: Tags;
        stackPolicy?: ResourcePolicy[];
        vpc?: string | Vpc;
        notificationArns?: string[];
        stackParameters?: StackParameters[];
        resourcePolicy?: ResourcePolicy[];
        rollbackConfiguration?: RollbackConfiguration;
        tags?: Tags;
        tracing?: Tracing;
        logs?: Logs;
        kmsKeyArn?: string;
    }

    interface IamSettings {
        role?: string | IamRole;
        deploymentRole?: string;
    }

    interface IamRole {
        name?: string;
        permissionBoundary?: string;
        statements?: IamRoleStatement[];
        managedPolicies?: string[];
        tags?: Tags;
    }

    interface Tags {
        [key: string]: string;
    }

    interface DeploymentBucket {
        name?: string;
        maxPreviousDeploymentArtifacts?: number | string;
        blockPublicAccess?: boolean;
        serverSideEncryption?: string;
        sseKMSKeyId?: string;
        sseCustomerAlgorithim?: string;
        sseCustomerKey?: string;
        sseCustomerKeyMD5?: string;
        tags?: Tags;
    }

    interface Environment {
        [key: string]: any;
    }

    interface ApiGateway {
        restApiId?: string;
        restApiRootResourceId?: string;
        restApiResources?: {
            [key: string]: string;
        };
        websocketApiId?: any;
        apiKeySourceType?: 'HEADER' | 'AUTHORIZER' | 'header' | 'authorizer';
        minimumCompressionSize?: number | string;
        description?: string;
        binaryMediaTypes?: string[];
        metrics?: boolean;
        shouldStartNameWithService?: boolean;
    }

    interface CognitoAuthorizer {
        type: 'cognito';
        userPoolArn: string;
        userPoolClientId: string;
        userPoolDomain: string;
        allowUnauthenticated?: boolean;
        requestExtraParams?: {
            prompt?: string;
            redirect?: boolean;
        };
        scope?: string;
        sessionCookieName?: string;
        sessionTimeout?: number | string;
    }

    interface OidcAuthorizer {
        type: 'oidc';
        authorizationEndpoint: string;
        clientId: string;
        clientSecret?: string;
        useExistingClientSecret?: boolean;
        issuer: string;
        tokenEndpoint: string;
        userInfoEndpoint: string;
        allowUnauthenticated?: boolean;
        requestExtraParams?: {
            prompt?: string;
            redirect?: boolean;
        };
        scope?: string;
        sessionCookieName?: string;
        sessionTimeout?: number | string;
    }

    interface JwtAuthorizer {
        identitySource: string;
        issuerUrl: string;
        audience: string[];
    }

    interface Authorizers {
        [key: string]: CognitoAuthorizer | OidcAuthorizer | JwtAuthorizer;
    }

    interface Alb {
        targetGroupPrefix?: string;
        authorizers?: Authorizers;
    }

    interface HttpApi {
        id?: string;
        name?: string;
        payload?: string;
        cors?: boolean;
        authorizers?: Authorizers;
    }

    interface Quota {
        limit?: number | string;
        offset?: number | string;
        period?: string;
    }

    interface Throttle {
        burstLimit?: number | string;
        rateLimit?: number | string;
    }

    interface UsagePlan {
        quota?: Quota;
        throttle?: Throttle;
    }

    interface IamRoleStatement {
        Effect: 'Allow' | 'Deny';
        Sid?: string;
        Condition?: {
            [key: string]: any;
        };
        Action?: string | string[] | { [key: string]: any };
        NotAction?: string | string[] | { [key: string]: any };
        Resource?: string | string[] | { [key: string]: any };
        NotResource?: string | string[] | { [key: string]: any };
    }

    interface ResourcePolicy {
        Effect: 'Allow' | 'Deny';
        Principal?: string | string[] | { [key: string]: any };
        Action?: string | string[] | { [key: string]: any };
        Resource?: string | string[] | { [key: string]: any };
        Condition?: {
            [key: string]: any;
        };
    }

    interface Vpc {
        securityGroupIds: string[];
        subnetIds: string[] | string;
    }

    interface StackParameters {
        ParameterKey: string;
        ParameterValue: string;
    }

    interface RollbackTrigger {
        Arn: string;
        Type: string;
    }

    interface RollbackConfiguration {
        MonitoringTimeInMinutes: number | string;
        RollbackTriggers: RollbackTrigger[];
    }

    interface Tracing {
        apiGateway: boolean;
        lambda?: 'Active' | 'PassThrough' | boolean;
    }

    interface RestApiLogs {
        accessLogging?: boolean;
        format?: string;
        executionLogging?: boolean;
        level?: 'INFO' | 'ERROR';
        fullExecutionData?: boolean;
        role?: string;
        roleManagedExternally?: boolean;
    }

    interface WebsocketLogs {
        level?: 'INFO' | 'ERROR';
    }

    interface HttpApiLogs {
        format?: string;
    }

    interface Logs {
        restApi?: true | RestApiLogs;
        websocket?: WebsocketLogs;
        httpApi?: boolean | HttpApiLogs;
        frameworkLambda?: boolean;
    }

    interface Package {
        /** @deprecated use `patterns` instead */
        include?: string[];
        /** @deprecated use `patterns` instead */
        exclude?: string[];
        patterns?: string[];
        excludeDevDependencies?: boolean;
        artifact?: string;
        individually?: boolean;
    }

    interface Destinations {
        onSuccess?: string;
        onFailure?: string;
    }

    interface HttpAuthorizer {
        name?: string;
        arn?: string;
        resultTtlInSeconds?: number | string;
        identitySource?: string;
        identityValidationExpression?: string;
        type?: string;
    }

    interface HttpCors {
        origins?: string | string[];
        headers?: string | string[];
        allowCredentials?: boolean;
        maxAge?: number;
        cacheControl?: string;
    }

    interface HttpRequestParametersValidation {
        querystrings?: { [key: string]: boolean };
        headers?: { [key: string]: boolean };
        paths?: { [key: string]: boolean };
    }

    interface HttpRequestValidation {
        parameters?: HttpRequestParametersValidation;
        schema?: { [key: string]: Record<string, unknown> };
    }

    interface Http {
        path: string;
        method: string;
        cors?: boolean | HttpCors;
        private?: boolean;
        async?: boolean;
        authorizer?: HttpAuthorizer | string;
        request?: HttpRequestValidation;
        integration?: 'lambda' | 'mock';
    }

    interface NamedHttpApiEventAuthorizer {
        name: string;
        scopes?: string[];
    }

    interface IdRefHttpApiEventAuthorizer {
        id: string;
        scopes?: string[];
    }

    interface HttpApiEvent {
        method: string;
        path: string;
        authorizer?: NamedHttpApiEventAuthorizer | IdRefHttpApiEventAuthorizer;
    }

    interface WebsocketAuthorizer {
        name?: string;
        arn?: string;
        identitySource?: string[];
    }

    interface Websocket {
        route: string;
        routeResponseSelectionExpression?: string;
        authorizer?: WebsocketAuthorizer;
    }

    interface S3Rule {
        prefix: string;
        suffix: string;
    }

    interface S3 {
        bucket: string;
        event: string;
        rules?: S3Rule[];
        existing?: boolean;
    }

    interface Input {
        [key: string]: any;
    }

    interface InputTransformer {
        inputPathsMap: { [key: string]: string };
        inputTemplate: string;
    }

    interface Schedule {
        name?: string;
        description?: string;
        rate: string;
        enabled?: boolean;
        input?: Input;
        inputPath?: string;
        inputTransformer?: InputTransformer;
    }

    interface DeadLetterTargetImport {
        arn: string;
        url: string;
    }

    interface RedrivePolicy {
        deadLetterTargetArn?: string;
        deadLetterTargetRef?: string;
        deadLetterTargetImport?: DeadLetterTargetImport;
    }

    interface Sns {
        arn?: string;
        topicName?: string;
        displayName?: string;
        filterPolicy?: Record<string, unknown>;
        redrivePolicy?: RedrivePolicy;
    }

    interface Sqs {
        arn: string | { [key: string]: any };
        batchSize?: number | string;
        maximumRetryAttempts?: number | string;
        enabled?: boolean;
    }

    interface Stream {
        arn: string | { [key: string]: any };
        batchSize?: number | string;
        startingPosition?: number | string;
        enabled?: boolean;
        type?: 'dynamodb' | 'kinesis';
    }

    interface Msk {
        arn: string;
        topic: string;
        batchSize?: number;
        enabled?: boolean;
        startingPosition?: 'LATEST' | 'TRIM_HORIZON';
    }

    interface AlexaSkill {
        appId: string;
        enabled?: boolean;
    }

    interface AlexaSmartHome {
        appId: string;
        enabled?: boolean;
    }

    interface Iot {
        name: string;
        description?: string;
        enabled?: boolean;
        sql: string;
        sqlVersion: string;
    }

    interface Detail {
        [key: string]: string[];
    }

    interface CloudwatchEventType {
        source: string[];
        'detail-type': string[];
        detail: Detail;
    }

    interface CloudwatchEvent {
        event: string;
        name?: string;
        description?: string;
        enabled?: boolean;
        input?: Input;
        inputPath?: string;
        inputTransformer?: InputTransformer;
    }

    interface CloudwatchLog {
        logGroup: string;
        filter: string;
    }

    interface CognitoUserPool {
        pool: string;
        trigger: string;
        existing?: boolean;
    }

    interface AlbEvent {
        listenerArn: string;
        priority: number | string;
        conditions: {
            host: string;
            path: string;
        };
    }

    interface PatternExisting {
        source: string[];
    }

    interface PatternInput {
        source: string[];
        'detail-type': string[];
        detail: Detail;
    }

    interface EventBridge {
        schedule?: string;
        eventBus?: string;
        pattern?: PatternExisting | PatternInput;
        input?: Input;
        inputPath?: string;
        inputTransformer?: InputTransformer;
    }

    interface Origin {
        DomainName: string;
        OriginPath: string;
        CustomOriginConfig: {
            OriginProtocolPolicy: string;
        };
    }

    interface CloudFront {
        eventType: string;
        includeBody: boolean;
        pathPattern: string;
        origin: Origin;
    }

    interface Event {
        http?: Http;
        httpApi?: HttpApiEvent;
        websocket?: Websocket;
        s3?: S3;
        schedule?: string | Schedule;
        sns?: Sns;
        sqs?: Sqs;
        stream?: Stream;
        msk?: Msk;
        alexaSkill?: AlexaSkill;
        alexaSmartHome?: AlexaSmartHome;
        iot?: Iot;
        cloudwatchEvent?: CloudwatchEvent;
        cloudwatchLog?: CloudwatchLog;
        cognitoUserPool?: CognitoUserPool;
        alb?: AlbEvent;
        eventBridge?: EventBridge;
        cloudFront?: CloudFront;
    }

    interface FileSystemConfig {
        arn: string;
        localMountPath: string;
    }

    interface AwsFunction {
        name?: string;
        description?: string;
        memorySize?: number | string;
        reservedConcurrency?: number | string;
        provisionedConcurrency?: number | string;
        runtime?: string;
        timeout?: number | string;
        role?: string;
        onError?: string;
        /** @deprecated in favor of `kmsKeyArn` */
        awsKmsKeyArn?: string;
        kmsKeyArn?: string;
        environment?: Environment;
        tags?: Tags;
        vpc?: string | Vpc;
        package?: Package;
        layers?: Array<string | Record<string, string>>;
        tracing?: 'Active' | 'PassThrough' | boolean;
        condition?: string;
        dependsOn?: string[];
        fileSystemConfig?: FileSystemConfig;
        destinations?: Destinations;
        events?: Event[];
        disableLogs?: boolean;
    }

    interface AwsFunctionHandler extends AwsFunction {
        handler: string;
    }

    interface AwsFunctionImage extends AwsFunction {
        image: string;
    }

    interface Functions {
        [key: string]: AwsFunctionHandler | AwsFunctionImage;
    }

    interface Layer {
        path: string;
        name?: string;
        description?: string;
        compatibleRuntimes?: string[];
        licenseInfo?: string;
        allowedAccounts?: string[];
        retain?: boolean;
    }

    interface Layers {
        [key: string]: Layer;
    }

    interface CloudFormationResource {
        Type: string;
        Properties: { [key: string]: any };
        DependsOn?: string | { [key: string]: any };
        DeletionPolicy?: string;
    }

    interface CloudFormationResources {
        [key: string]: CloudFormationResource;
    }

    interface Output {
        Description?: string;
        Value?: any;
        Export?: {
            Name: any;
        };
        Condition?: any;
    }

    interface Outputs {
        [key: string]: Output;
    }

    interface Resources {
        Description?: string;
        Resources: CloudFormationResources;
        extensions?: CloudFormationResources;
        Outputs?: Outputs;
    }

    interface Custom {
        [key: string]: any;
    }
}

declare class Aws {
    constructor(serverless: Serverless, options: Serverless.Options);

    naming: { [key: string]: () => string };
    getProviderName(): string;
    getRegion(): string;
    getServerlessDeploymentBucketName(): Promise<string>;
    getStage(): string;
    getAccountId(): Promise<string>;
    request(
        service: string,
        method: string,
        params?: {},
        options?: { useCache?: boolean; region?: string },
    ): Promise<any>;
}

export = Aws;
