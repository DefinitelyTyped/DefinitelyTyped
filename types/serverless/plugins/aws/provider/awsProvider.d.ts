import Serverless = require('../../../index');

declare namespace Aws {
    /*
        Types based on https://github.com/serverless/serverless/blob/master/docs/providers/aws/guide/serverless.yml.md
    */
    interface Serverless {
        service: Service | string;
        useDotenv?: boolean | undefined;
        frameworkVersion?: string | undefined;
        enableLocalInstallationFallback?: boolean | undefined;
        variablesResolutionMode?: '20210219' | '20210326' | undefined;
        unresolvedVariablesNotificationMode?: 'warn' | 'error' | undefined;
        deprecationNotificationMode?: 'warn' | 'warn:summary' | 'error' | undefined;
        disabledDeprecations?: string[] | undefined;
        configValidationMode?: 'warn' | 'error' | 'off' | undefined;
        provider: Provider;
        package?: Package | undefined;
        functions?: Functions | undefined;
        layers?: Layers | undefined;
        resources?: Resources | undefined;
        plugins?: string[] | undefined;
        org?: string | undefined;
        app?: string | undefined;
        tenant?: string | undefined;
        custom?: Custom | undefined;
    }

    interface Service {
        name: string;
        /** @deprecated in favor of `kmsKeyArn` at the provider level  */
        awsKmsKeyArn?: string | undefined;
    }

    interface Provider {
        name: 'aws';
        runtime?: string | undefined;
        stage?: string | undefined;
        region?: string | undefined;
        stackName?: string | undefined;
        apiName?: string | undefined;
        lambdaHashingVersion?: number | undefined;
        websocketsApiName?: string | undefined;
        websocketsApiRouteSelectionExpression?: string | undefined;
        profile?: string | undefined;
        memorySize?: number | string | undefined;
        reservedConcurrency?: number | string | undefined;
        timeout?: number | string | undefined;
        logRetentionInDays?: number | string | undefined;
        deploymentBucket?: DeploymentBucket | undefined;
        deploymentPrefix?: string | undefined;
        /** @deprecated in favor of `iam.role` */
        role?: string | undefined;
        /** @deprecated in favor of `iam.role.permissionsBoundary` */
        rolePermissionsBoundary?: string | undefined;
        /** @deprecated in favor of `iam.role.statements` */
        iamRoleStatements?: IamRoleStatement[] | undefined;
        /** @deprecated in favor of `iam.role.managedPolicies` */
        iamManagedPolicies?: string[] | undefined;
        /** @deprecated in favor of `iam.deploymentRole` */
        cfnRole?: string | undefined;
        iam?: IamSettings | undefined;
        versionFunctions?: boolean | undefined;
        architecture?: 'x86_64' | 'arm64' | undefined;
        environment?: Environment | string | undefined;
        endpointType?: 'regional' | 'edge' | 'private' | undefined;
        apiKeys?: string[] | undefined;
        apiGateway?: ApiGateway | undefined;
        alb?: Alb | undefined;
        httpApi?: HttpApi | undefined;
        usagePlan?: UsagePlan | undefined;
        stackTags?: Tags | undefined;
        stackPolicy?: ResourcePolicy[] | undefined;
        vpc?: string | Vpc | undefined;
        notificationArns?: string[] | undefined;
        stackParameters?: StackParameters[] | undefined;
        resourcePolicy?: ResourcePolicy[] | undefined;
        rollbackConfiguration?: RollbackConfiguration | undefined;
        tags?: Tags | undefined;
        tracing?: Tracing | undefined;
        logs?: Logs | undefined;
        kmsKeyArn?: string | undefined;
        eventBridge?: EventBridge | undefined;
        layers?: Array<string | Record<string, string>> | undefined;
    }

    interface EventBridge {
        useCloudFormation?: boolean;
    }

    interface IamSettings {
        role?: string | IamRole | undefined;
        deploymentRole?: string | undefined;
    }

    interface IamRole {
        name?: string | undefined;
        permissionBoundary?: string | undefined;
        statements?: IamRoleStatement[] | undefined;
        managedPolicies?: string[] | undefined;
        tags?: Tags | undefined;
    }

    interface Tags {
        [key: string]: string;
    }

    interface DeploymentBucket {
        name?: string | undefined;
        maxPreviousDeploymentArtifacts?: number | string | undefined;
        blockPublicAccess?: boolean | undefined;
        serverSideEncryption?: string | undefined;
        skipPolicySetup?: boolean | undefined;
        sseKMSKeyId?: string | undefined;
        sseCustomerAlgorithim?: string | undefined;
        sseCustomerKey?: string | undefined;
        sseCustomerKeyMD5?: string | undefined;
        tags?: Tags | undefined;
    }

    interface Environment {
        [key: string]: any;
    }

    interface ApiGateway {
        restApiId?: string | undefined;
        restApiRootResourceId?: string | undefined;
        restApiResources?: {
            [key: string]: string;
        } | undefined;
        websocketApiId?: any;
        apiKeySourceType?: 'HEADER' | 'AUTHORIZER' | 'header' | 'authorizer' | undefined;
        minimumCompressionSize?: number | string | undefined;
        description?: string | undefined;
        binaryMediaTypes?: string[] | undefined;
        metrics?: boolean | undefined;
        shouldStartNameWithService?: boolean | undefined;
        apiKeys?: string[] | undefined;
        resourcePolicy?: ResourcePolicy[] | undefined;
        usagePlan?: UsagePlan | undefined;
    }

    interface CognitoAuthorizer {
        type: 'cognito';
        userPoolArn: string;
        userPoolClientId: string;
        userPoolDomain: string;
        allowUnauthenticated?: boolean | undefined;
        requestExtraParams?: {
            prompt?: string | undefined;
            redirect?: boolean | undefined;
        } | undefined;
        scope?: string | undefined;
        sessionCookieName?: string | undefined;
        sessionTimeout?: number | string | undefined;
    }

    interface OidcAuthorizer {
        type: 'oidc';
        authorizationEndpoint: string;
        clientId: string;
        clientSecret?: string | undefined;
        useExistingClientSecret?: boolean | undefined;
        issuer: string;
        tokenEndpoint: string;
        userInfoEndpoint: string;
        allowUnauthenticated?: boolean | undefined;
        requestExtraParams?: {
            prompt?: string | undefined;
            redirect?: boolean | undefined;
        } | undefined;
        scope?: string | undefined;
        sessionCookieName?: string | undefined;
        sessionTimeout?: number | string | undefined;
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
        targetGroupPrefix?: string | undefined;
        authorizers?: Authorizers | undefined;
    }

    interface HttpApiCors {
        allowedOrigins: string[];
        allowedHeaders?: string[] | undefined;
        allowedMethods?: string[] | undefined;
        allowCredentials?: boolean | undefined;
        exposedResponseHeaders?: string[] | undefined;
        maxAge?: number | undefined;
    }

    interface HttpApi {
        id?: string | undefined;
        name?: string | undefined;
        payload?: string | undefined;
        cors?: boolean | HttpApiCors | undefined;
        authorizers?: Authorizers | undefined;
        useProviderTags?: boolean | undefined;
    }

    interface Quota {
        limit?: number | string | undefined;
        offset?: number | string | undefined;
        period?: string | undefined;
    }

    interface Throttle {
        burstLimit?: number | string | undefined;
        rateLimit?: number | string | undefined;
    }

    interface UsagePlan {
        quota?: Quota | undefined;
        throttle?: Throttle | undefined;
    }

    interface IamRoleStatement {
        Effect: 'Allow' | 'Deny';
        Sid?: string | undefined;
        Condition?: {
            [key: string]: any;
        } | undefined;
        Action?: string | string[] | { [key: string]: any } | undefined;
        NotAction?: string | string[] | { [key: string]: any } | undefined;
        Resource?: string | string[] | { [key: string]: any } | undefined;
        NotResource?: string | string[] | { [key: string]: any } | undefined;
    }

    interface ResourcePolicy {
        Effect: 'Allow' | 'Deny';
        Principal?: string | string[] | { [key: string]: any } | undefined;
        Action?: string | string[] | { [key: string]: any } | undefined;
        Resource?: string | string[] | { [key: string]: any } | undefined;
        Condition?: {
            [key: string]: any;
        } | undefined;
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
        lambda?: 'Active' | 'PassThrough' | boolean | undefined;
    }

    interface RestApiLogs {
        accessLogging?: boolean | undefined;
        format?: string | undefined;
        executionLogging?: boolean | undefined;
        level?: 'INFO' | 'ERROR' | undefined;
        fullExecutionData?: boolean | undefined;
        role?: string | undefined;
        roleManagedExternally?: boolean | undefined;
    }

    interface WebsocketLogs {
        level?: 'INFO' | 'ERROR' | undefined;
    }

    interface HttpApiLogs {
        format?: string | undefined;
    }

    interface Logs {
        restApi?: true | RestApiLogs | undefined;
        websocket?: WebsocketLogs | undefined;
        httpApi?: boolean | HttpApiLogs | undefined;
        frameworkLambda?: boolean | undefined;
    }

    interface Package {
        /** @deprecated use `patterns` instead */
        include?: string[] | undefined;
        /** @deprecated use `patterns` instead */
        exclude?: string[] | undefined;
        patterns?: string[] | undefined;
        excludeDevDependencies?: boolean | undefined;
        artifact?: string | undefined;
        individually?: boolean | undefined;
    }

    interface Destinations {
        onSuccess?: string | undefined;
        onFailure?: string | undefined;
    }

    interface HttpAuthorizer {
        name?: string | undefined;
        arn?: string | undefined;
        resultTtlInSeconds?: number | string | undefined;
        identitySource?: string | undefined;
        identityValidationExpression?: string | undefined;
        type?: string | undefined;
    }

    interface HttpCors {
        origins?: string | string[] | undefined;
        headers?: string | string[] | undefined;
        allowCredentials?: boolean | undefined;
        maxAge?: number | undefined;
        cacheControl?: string | undefined;
    }

    interface HttpRequestParametersValidation {
        querystrings?: { [key: string]: boolean } | undefined;
        headers?: { [key: string]: boolean } | undefined;
        paths?: { [key: string]: boolean } | undefined;
    }

    interface HttpRequestValidation {
        parameters?: HttpRequestParametersValidation | undefined;
        schemas?: { [key: string]: Record<string, unknown> } | undefined;
    }

    interface Http {
        path: string;
        method: string;
        cors?: boolean | HttpCors | undefined;
        private?: boolean | undefined;
        async?: boolean | undefined;
        authorizer?: HttpAuthorizer | string | undefined;
        request?: HttpRequestValidation | undefined;
        integration?: 'lambda' | 'mock' | undefined;
    }

    interface NamedHttpApiEventAuthorizer {
        name: string;
        scopes?: string[] | undefined;
    }

    interface IdRefHttpApiEventAuthorizer {
        id: string;
        scopes?: string[] | undefined;
    }

    interface HttpApiEvent {
        method: string;
        path: string;
        authorizer?: NamedHttpApiEventAuthorizer | IdRefHttpApiEventAuthorizer | undefined;
    }

    interface WebsocketAuthorizer {
        name?: string | undefined;
        arn?: string | undefined;
        identitySource?: string[] | undefined;
    }

    interface Websocket {
        route: string;
        routeResponseSelectionExpression?: string | undefined;
        authorizer?: WebsocketAuthorizer | undefined;
    }

    interface S3Rule {
        prefix?: string | undefined;
        suffix?: string | undefined;
    }

    interface S3 {
        bucket: string;
        event: string;
        rules?: S3Rule[] | undefined;
        existing?: boolean | undefined;
    }

    interface Input {
        [key: string]: any;
    }

    interface InputTransformer {
        inputPathsMap: { [key: string]: string };
        inputTemplate: string;
    }

    interface Schedule {
        name?: string | undefined;
        description?: string | undefined;
        rate: string | string[];
        enabled?: boolean | undefined;
        input?: Input | undefined;
        inputPath?: string | undefined;
        inputTransformer?: InputTransformer | undefined;
    }

    interface DeadLetterTargetImport {
        arn: string;
        url: string;
    }

    interface RedrivePolicy {
        deadLetterTargetArn?: string | undefined;
        deadLetterTargetRef?: string | undefined;
        deadLetterTargetImport?: DeadLetterTargetImport | undefined;
    }

    interface Sns {
        arn?: string | undefined;
        topicName?: string | undefined;
        displayName?: string | undefined;
        filterPolicy?: Record<string, unknown> | undefined;
        redrivePolicy?: RedrivePolicy | undefined;
    }

    interface Sqs {
        arn: string | { [key: string]: any };
        /**
         * minimum: 1, maximum: 10000
         */
        batchSize?: number | undefined;
        /**
         * minimum: 0, maximum: 300
         */
        maximumBatchingWindow?: number | undefined;
        functionResponseType?: 'ReportBatchItemFailures' | undefined;
        enabled?: boolean | undefined;
        filterPatterns?: FilterPattern[] | undefined;
    }

    interface ActiveMq {
        arn: string;
        basicAuthArn: string;
        queue: string;
        batchSize?: number;
        enabled?: boolean | undefined;
    }

    interface RabbitMq {
        arn: string;
        basicAuthArn: string;
        queue: string;
        batchSize?: number;
        enabled?: boolean | undefined;
    }

    type NumericFilter =
        | ['=', number]
        | ['<', number]
        | ['<=', number]
        | ['>', number]
        | ['>=', number]
        | ['>', number, '<', number]
        | ['>=', number, '<', number]
        | ['>', number, '<=', number]
        | ['>=', number, '<=', number];

    type Filter =
        /* Null */
        | null
        /* Empty */
        | ""
        /* String equality */
        | string
        /* Not */
        | { 'anything-but': Filter[] }
        /* Numeric */
        | { numeric: NumericFilter }
        /* Exists */
        | { exists: boolean }
        /* Begins with */
        | { prefix: string };

    interface FilterPattern {
        [k: string]: FilterPattern | Filter[];
    }

    interface Stream {
        arn: string | { [key: string]: any };
        batchSize?: number | string | undefined;
        startingPosition?: number | string | undefined;
        enabled?: boolean | undefined;
        type?: 'dynamodb' | 'kinesis' | undefined;
        filterPatterns?: FilterPattern[] | undefined;
    }

    interface Msk {
        arn: string;
        topic: string;
        batchSize?: number | undefined;
        enabled?: boolean | undefined;
        startingPosition?: 'LATEST' | 'TRIM_HORIZON' | undefined;
    }

    interface AlexaSkill {
        appId: string;
        enabled?: boolean | undefined;
    }

    interface AlexaSmartHome {
        appId: string;
        enabled?: boolean | undefined;
    }

    interface Iot {
        name: string;
        description?: string | undefined;
        enabled?: boolean | undefined;
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
        event: CloudwatchEventInternalEvent | string;
        name?: string | undefined;
        description?: string | undefined;
        enabled?: boolean | undefined;
        input?: Input | undefined;
        inputPath?: string | undefined;
        inputTransformer?: InputTransformer | undefined;
    }

    interface CloudwatchEventInternalEvent {
        source: string | string[];
        "detail-type"?: string | string[];
        detail?: object;
        region?: string;
        /**
         * Supposed to be array of ARNs but needs more info
         */
        resources?: string[];
        version?: string;
        id?: string;
        time?: string;
        account?: string;
    }

    interface CloudwatchLog {
        logGroup: string;
        filter: string;
    }

    interface CognitoUserPool {
        pool: string;
        trigger: string;
        existing?: boolean | undefined;
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
        schedule?: string | undefined;
        eventBus?: string | undefined;
        pattern?: PatternExisting | PatternInput | undefined;
        input?: Input | undefined;
        inputPath?: string | undefined;
        inputTransformer?: InputTransformer | undefined;
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
        http?: Http | undefined;
        httpApi?: HttpApiEvent | undefined;
        websocket?: Websocket | undefined;
        s3?: S3 | undefined;
        schedule?: string | Schedule | undefined;
        sns?: Sns | undefined;
        sqs?: Sqs | undefined;
        stream?: Stream | undefined;
        msk?: Msk | undefined;
        alexaSkill?: AlexaSkill | undefined;
        alexaSmartHome?: AlexaSmartHome | undefined;
        iot?: Iot | undefined;
        cloudwatchEvent?: CloudwatchEvent | undefined;
        cloudwatchLog?: CloudwatchLog | undefined;
        cognitoUserPool?: CognitoUserPool | undefined;
        alb?: AlbEvent | undefined;
        eventBridge?: EventBridge | undefined;
        cloudFront?: CloudFront | undefined;
        activemq?: ActiveMq | undefined;
        rabbitmq?: RabbitMq | undefined;
    }

    interface FileSystemConfig {
        arn: string;
        localMountPath: string;
    }

    interface FunctionUrlConfigCors {
        allowCredentials?: boolean | undefined;
        allowedHeaders?: boolean | string[] | undefined;
        allowedMethods?: boolean | string[] | undefined;
        allowedOrigins?: boolean | string[] | undefined;
        exposedResponseHeaders?: boolean | string[] | undefined;
        maxAge?: number | undefined;
    }

    interface FunctionUrlConfig {
        authorizer?: 'aws_iam' | undefined;
        cors?: boolean | FunctionUrlConfigCors | undefined;
    }

    interface AwsFunction {
        name?: string | undefined;
        description?: string | undefined;
        memorySize?: number | string | undefined;
        reservedConcurrency?: number | string | undefined;
        provisionedConcurrency?: number | string | undefined;
        runtime?: string | undefined;
        timeout?: number | string | undefined;
        role?: string | undefined;
        onError?: string | undefined;
        /** @deprecated in favor of `kmsKeyArn` */
        awsKmsKeyArn?: string | undefined;
        kmsKeyArn?: string | undefined;
        environment?: Environment | undefined;
        tags?: Tags | undefined;
        vpc?: string | Vpc | undefined;
        package?: Package | undefined;
        layers?: Array<string | Record<string, string>> | undefined;
        tracing?: 'Active' | 'PassThrough' | boolean | undefined;
        condition?: string | undefined;
        dependsOn?: string[] | undefined;
        fileSystemConfig?: FileSystemConfig | undefined;
        destinations?: Destinations | undefined;
        events?: Event[] | undefined;
        disableLogs?: boolean | undefined;
        url?: boolean | FunctionUrlConfig | undefined;
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
        name?: string | undefined;
        description?: string | undefined;
        compatibleRuntimes?: string[] | undefined;
        licenseInfo?: string | undefined;
        allowedAccounts?: string[] | undefined;
        retain?: boolean | undefined;
    }

    interface Layers {
        [key: string]: Layer;
    }

    interface CloudFormationResource {
        Type: string;
        Properties: { [key: string]: any };
        Condition?: string | undefined;
        DependsOn?: string | { [key: string]: any } | undefined;
        DeletionPolicy?: string | undefined;
    }

    interface CloudFormationResources {
        [key: string]: CloudFormationResource;
    }

    interface Output {
        Description?: string | undefined;
        Value?: any;
        Export?: {
            Name: any;
        } | undefined;
        Condition?: any;
    }

    interface Outputs {
        [key: string]: Output;
    }

    interface ResourcesConditions {
        [key: string]: any;
    }

    interface Resources {
        Description?: string | undefined;
        Conditions?: ResourcesConditions;
        Resources: CloudFormationResources;
        extensions?: CloudFormationResources | undefined;
        Outputs?: Outputs | undefined;
    }

    interface Custom {
        [key: string]: any;
    }

    interface Credentials {
        [key: string]: any;
    }
}

declare class Aws {
    constructor(serverless: Serverless, options: Serverless.Options);

    naming: { [key: string]: () => string };
    getCredentials(): Aws.Credentials;
    getProviderName(): string;
    getRegion(): string;
    getServerlessDeploymentBucketName(): Promise<string>;
    getStage(): string;
    getAccountId(): Promise<string>;
    request(
        service: string,
        method: string,
        params?: {},
        options?: { useCache?: boolean | undefined; region?: string | undefined },
    ): Promise<any>;
}

export = Aws;
