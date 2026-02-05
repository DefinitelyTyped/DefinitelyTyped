import Serverless = require("../../../index");

declare namespace Aws {
    /*
        Types based on https://github.com/serverless/serverless/blob/master/docs/providers/aws/guide/serverless.yml.md
    */
    /**
     * Root configuration interface for a Serverless Framework service.
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml
     * @example
     * ```yaml
     * service: my-service
     * frameworkVersion: '3'
     * provider:
     *   name: aws
     *   runtime: nodejs18.x
     * functions:
     *   hello:
     *     handler: handler.hello
     * ```
     */
    interface Serverless {
        /** Service name or configuration object */
        service: Service | string;
        /**
         * Enable loading environment variables from .env files.
         * @see https://www.serverless.com/framework/docs/environment-variables
         */
        useDotenv?: boolean | undefined;
        /**
         * Serverless Framework version constraint (e.g., '3', '>=2.0.0 <4.0.0').
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml#frameworkversion
         */
        frameworkVersion?: string | undefined;
        /** Falls back to locally installed Serverless if available */
        enableLocalInstallationFallback?: boolean | undefined;
        /**
         * @deprecated Variables resolution mode - only relevant for v2 migrations
         */
        variablesResolutionMode?: "20210219" | "20210326" | undefined;
        /** How to handle unresolved variables: 'warn' logs, 'error' throws */
        unresolvedVariablesNotificationMode?: "warn" | "error" | undefined;
        /** How to handle deprecation warnings */
        deprecationNotificationMode?: "warn" | "warn:summary" | "error" | undefined;
        /**
         * Array of deprecation codes to suppress.
         * @example ['LAMBDA_HASHING_VERSION_V2']
         */
        disabledDeprecations?: string[] | undefined;
        /** Config validation strictness: 'warn', 'error', or 'off' */
        configValidationMode?: "warn" | "error" | "off" | undefined;
        /** AWS provider configuration */
        provider: Provider;
        /**
         * Packaging configuration for deployment artifacts.
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/packaging
         */
        package?: Package | undefined;
        /**
         * Function definitions for the service.
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/functions
         */
        functions?: Functions | undefined;
        /**
         * Lambda layer definitions.
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/layers
         */
        layers?: Layers | undefined;
        /**
         * CloudFormation resources to include.
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/resources
         */
        resources?: Resources | undefined;
        /**
         * Plugins to extend Serverless functionality.
         * @example ['serverless-offline', 'serverless-webpack']
         */
        plugins?: string[] | undefined;
        /**
         * Serverless Dashboard organization name.
         * @see https://www.serverless.com/framework/docs/guides/dashboard
         */
        org?: string | undefined;
        /** Serverless Dashboard app name */
        app?: string | undefined;
        /** @deprecated Use 'org' instead */
        tenant?: string | undefined;
        /**
         * Custom variables accessible via ${self:custom.xxx}.
         * @example
         * ```yaml
         * custom:
         *   tableName: users-${self:provider.stage}
         *   webpack:
         *     webpackConfig: ./webpack.config.js
         * ```
         */
        custom?: Custom | undefined;
        /**
         * Stage-specific configuration for parameters, observability, and integrations.
         * @since v4
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/stages
         * @example
         * ```yaml
         * stages:
         *   default:
         *     params:
         *       tableName: my-table
         *   prod:
         *     params:
         *       tableName: my-prod-table
         * ```
         */
        stages?: Stages | undefined;
        /**
         * Native build configuration for TypeScript/JavaScript bundling.
         * @since v4
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/building
         * @example
         * ```yaml
         * build:
         *   esbuild:
         *     bundle: true
         *     minify: true
         * ```
         */
        build?: Build | undefined;
    }

    interface Service {
        name: string;
        /** @deprecated in favor of `kmsKeyArn` at the provider level  */
        awsKmsKeyArn?: string | undefined;
    }

    /**
     * API Gateway API key configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/apigateway#setting-api-keys-for-your-rest-api
     */
    interface ApiKey {
        /** API key name */
        name: string;
        /** API key value (20-128 characters) */
        value: string;
        /** Description of the API key */
        description?: string | undefined;
        /** Customer ID for usage tracking */
        customerId?: string | undefined;
        /**
         * Whether the API key is enabled.
         * @default true
         */
        enabled?: boolean | undefined;
    }

    /**
     * AWS provider configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml
     * @example
     * ```yaml
     * provider:
     *   name: aws
     *   runtime: nodejs18.x
     *   stage: ${opt:stage, 'dev'}
     *   region: us-east-1
     *   memorySize: 512
     *   timeout: 30
     *   environment:
     *     TABLE_NAME: ${self:custom.tableName}
     * ```
     */
    interface Provider {
        /** Must be 'aws' for AWS provider */
        name: "aws";
        /**
         * Default Lambda runtime for all functions.
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/functions#runtime
         * @example 'nodejs18.x' | 'nodejs20.x' | 'python3.11' | 'java21'
         */
        runtime?: string | undefined;
        /**
         * Deployment stage name. Defaults to 'dev'.
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/variables#referencing-cli-options
         * @example '${opt:stage, "dev"}'
         */
        stage?: string | undefined;
        /**
         * AWS region for deployment.
         * @see https://docs.aws.amazon.com/general/latest/gr/lambda-service.html
         * @example 'us-east-1' | 'eu-west-1' | 'ap-southeast-2'
         */
        region?: string | undefined;
        /**
         * Custom CloudFormation stack name. Defaults to service-stage.
         * @example 'my-custom-stack-name'
         */
        stackName?: string | undefined;
        /**
         * Custom API Gateway REST API name.
         * @see https://www.serverless.com/framework/docs/providers/aws/events/apigateway
         */
        apiName?: string | undefined;
        /**
         * @deprecated No longer needed in v3+. Lambda hashing version for deployment.
         */
        lambdaHashingVersion?: number | undefined;
        /**
         * Serverless Framework license key for v4+.
         * @since v4
         * @see https://www.serverless.com/framework/docs/guides/license-keys
         * @example '${env:SERVERLESS_LICENSE_KEY}'
         */
        licenseKey?: string | undefined;
        /**
         * Custom WebSocket API name.
         * @see https://www.serverless.com/framework/docs/providers/aws/events/websocket
         */
        websocketsApiName?: string | undefined;
        /**
         * WebSocket route selection expression.
         * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-route-keys-connect-disconnect.html
         * @default 'request.body.action'
         */
        websocketsApiRouteSelectionExpression?: string | undefined;
        /**
         * AWS credentials profile name from ~/.aws/credentials.
         * @example 'my-company-profile'
         */
        profile?: string | undefined;
        /**
         * Default memory size in MB for all functions (128-10240).
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/functions#memory-size
         * @default 1024
         * @example 256 | 512 | 1024 | 2048
         */
        memorySize?: number | string | undefined;
        /**
         * Ephemeral storage size in MB for /tmp (512-10240).
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/functions#ephemeral-storage
         * @default 512
         */
        ephemeralStorageSize?: number | string | undefined;
        /**
         * Reserved concurrent executions for all functions.
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/functions#reserved-concurrency
         */
        reservedConcurrency?: number | string | undefined;
        /**
         * Default timeout in seconds for all functions (1-900).
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/functions#timeout
         * @default 6
         */
        timeout?: number | string | undefined;
        /**
         * CloudWatch log retention in days.
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/functions#log-retention
         * @example 7 | 14 | 30 | 60 | 90 | 365
         */
        logRetentionInDays?: number | string | undefined;
        /**
         * S3 deployment bucket configuration.
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml#deployment-bucket
         */
        deploymentBucket?: DeploymentBucket | undefined;
        /**
         * Prefix for deployment artifacts in S3 bucket.
         * @default 'serverless'
         */
        deploymentPrefix?: string | undefined;
        /**
         * @deprecated Use `iam.role` instead.
         * ARN of an existing IAM role for Lambda execution.
         */
        role?: string | undefined;
        /**
         * @deprecated Use `iam.role.permissionsBoundary` instead.
         */
        rolePermissionsBoundary?: string | undefined;
        /**
         * @deprecated Use `iam.role.statements` instead.
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/iam
         */
        iamRoleStatements?: IamRoleStatement[] | undefined;
        /**
         * @deprecated Use `iam.role.managedPolicies` instead.
         */
        iamManagedPolicies?: string[] | undefined;
        /**
         * @deprecated Use `iam.deploymentRole` instead.
         * ARN of IAM role for CloudFormation to assume.
         */
        cfnRole?: string | undefined;
        /**
         * IAM configuration for Lambda execution and deployment roles.
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/iam
         * @example
         * ```yaml
         * iam:
         *   role:
         *     statements:
         *       - Effect: Allow
         *         Action:
         *           - dynamodb:Query
         *         Resource: '*'
         * ```
         */
        iam?: IamSettings | undefined;
        /**
         * Whether to version Lambda functions. Set false for faster deploys.
         * @default true
         */
        versionFunctions?: boolean | undefined;
        /**
         * Default Lambda architecture.
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/functions#architecture
         * @default 'x86_64'
         */
        architecture?: "x86_64" | "arm64" | undefined;
        /**
         * Environment variables for all functions.
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/functions#environment-variables
         * @example
         * ```yaml
         * environment:
         *   NODE_ENV: production
         *   TABLE_NAME: ${self:custom.tableName}
         * ```
         */
        environment?: Environment | string | undefined;
        /**
         * API Gateway endpoint type.
         * @see https://www.serverless.com/framework/docs/providers/aws/events/apigateway#configuring-endpoint-types
         * @default 'edge'
         */
        endpointType?: "regional" | "edge" | "private" | undefined;
        /**
         * API Gateway API keys configuration.
         * @see https://www.serverless.com/framework/docs/providers/aws/events/apigateway#setting-api-keys-for-your-rest-api
         */
        apiKeys?: Array<ApiKey | string> | undefined;
        /**
         * REST API Gateway (v1) configuration.
         * @see https://www.serverless.com/framework/docs/providers/aws/events/apigateway
         */
        apiGateway?: ApiGateway | undefined;
        /**
         * Application Load Balancer configuration.
         * @see https://www.serverless.com/framework/docs/providers/aws/events/alb
         */
        alb?: Alb | undefined;
        /**
         * HTTP API Gateway (v2) configuration.
         * @see https://www.serverless.com/framework/docs/providers/aws/events/http-api
         * @example
         * ```yaml
         * httpApi:
         *   cors: true
         *   authorizers:
         *     myAuthorizer:
         *       type: jwt
         *       identitySource: request.header.Authorization
         *       issuerUrl: https://cognito-idp.region.amazonaws.com/poolId
         *       audience:
         *         - myClientId
         * ```
         */
        httpApi?: HttpApi | undefined;
        /**
         * API Gateway usage plan configuration.
         * @see https://www.serverless.com/framework/docs/providers/aws/events/apigateway#usage-plan
         */
        usagePlan?: UsagePlan | undefined;
        /**
         * Tags applied to the CloudFormation stack.
         * @example { Environment: 'production', Team: 'backend' }
         */
        stackTags?: Tags | undefined;
        /** CloudFormation stack policy statements */
        stackPolicy?: ResourcePolicy[] | undefined;
        /**
         * VPC configuration for all functions.
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/functions#vpc-configuration
         * @example
         * ```yaml
         * vpc:
         *   securityGroupIds:
         *     - sg-12345678
         *   subnetIds:
         *     - subnet-12345678
         *     - subnet-87654321
         * ```
         */
        vpc?: string | Vpc | undefined;
        /**
         * SNS topic ARNs for CloudFormation stack notifications.
         * @example ['arn:aws:sns:us-east-1:123456789:my-topic']
         */
        notificationArns?: string[] | undefined;
        /** CloudFormation stack parameters */
        stackParameters?: StackParameters[] | undefined;
        /**
         * API Gateway resource policy for access control.
         * @see https://www.serverless.com/framework/docs/providers/aws/events/apigateway#resource-policy
         */
        resourcePolicy?: ResourcePolicy[] | undefined;
        /**
         * CloudFormation rollback configuration.
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html
         */
        rollbackConfiguration?: RollbackConfiguration | undefined;
        /**
         * Tags applied to all Lambda functions.
         * @example { Project: 'my-project', CostCenter: 'engineering' }
         */
        tags?: Tags | undefined;
        /**
         * X-Ray tracing configuration.
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/functions#aws-x-ray-tracing
         */
        tracing?: Tracing | undefined;
        /**
         * CloudWatch logging configuration.
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml#logs
         */
        logs?: Logs | undefined;
        /**
         * KMS key ARN for encrypting environment variables.
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/functions#kms-keys
         */
        kmsKeyArn?: string | undefined;
        /**
         * EventBridge configuration options.
         * @see https://www.serverless.com/framework/docs/providers/aws/events/event-bridge
         */
        eventBridge?: EventBridge | undefined;
        /**
         * Lambda layers to apply to all functions.
         * @see https://www.serverless.com/framework/docs/providers/aws/guide/layers
         * @example
         * ```yaml
         * layers:
         *   - arn:aws:lambda:region:account:layer:name:version
         *   - { Ref: MyLayerLambdaLayer }
         * ```
         */
        layers?: Array<string | Record<string, string>> | undefined;
    }

    /**
     * EventBridge provider-level configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/event-bridge
     */
    interface EventBridge {
        /**
         * Use CloudFormation for EventBridge rules instead of direct AWS API.
         * @default false
         */
        useCloudFormation?: boolean;
    }

    /**
     * IAM configuration for Lambda execution and deployment.
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/iam
     * @example
     * ```yaml
     * iam:
     *   role:
     *     name: my-custom-role
     *     statements:
     *       - Effect: Allow
     *         Action:
     *           - s3:GetObject
     *         Resource: '*'
     *   deploymentRole: arn:aws:iam::123456789:role/deploy-role
     * ```
     */
    interface IamSettings {
        /**
         * Lambda execution role ARN or inline configuration.
         * @example 'arn:aws:iam::123456789:role/my-role'
         */
        role?: string | IamRole | undefined;
        /**
         * IAM role ARN for CloudFormation to assume during deployment.
         * @example 'arn:aws:iam::123456789:role/cloudformation-role'
         */
        deploymentRole?: string | undefined;
    }

    /**
     * Inline IAM role configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/iam#custom-iam-roles
     */
    interface IamRole {
        /** Custom name for the IAM role */
        name?: string | undefined;
        /**
         * ARN of the permissions boundary to attach.
         * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html
         */
        permissionBoundary?: string | undefined;
        /**
         * IAM policy statements for the role.
         * @example
         * ```yaml
         * statements:
         *   - Effect: Allow
         *     Action:
         *       - dynamodb:GetItem
         *       - dynamodb:PutItem
         *     Resource:
         *       - arn:aws:dynamodb:*:*:table/my-table
         * ```
         */
        statements?: IamRoleStatement[] | undefined;
        /**
         * ARNs of managed policies to attach.
         * @example ['arn:aws:iam::aws:policy/AmazonDynamoDBReadOnlyAccess']
         */
        managedPolicies?: string[] | undefined;
        /** Tags to apply to the IAM role */
        tags?: Tags | undefined;
    }

    /**
     * Key-value pairs for AWS resource tagging.
     * @example { Environment: 'production', Team: 'backend' }
     */
    interface Tags {
        [key: string]: string;
    }

    /**
     * IAM policy statement.
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/iam
     * @example
     * ```yaml
     * - Effect: Allow
     *   Action:
     *     - dynamodb:Query
     *     - dynamodb:Scan
     *   Resource:
     *     - arn:aws:dynamodb:*:*:table/my-table
     *   Condition:
     *     StringEquals:
     *       aws:RequestTag/Environment: production
     * ```
     */
    interface IamRoleStatement {
        /** Allow or Deny the actions */
        Effect: "Allow" | "Deny";
        /** Optional statement ID */
        Sid?: string | undefined;
        /** Conditions for when the policy applies */
        Condition?: {
            [key: string]: any;
        } | undefined;
        /** Actions this statement applies to */
        Action?: string | string[] | { [key: string]: any } | undefined;
        /** Actions this statement does NOT apply to */
        NotAction?: string | string[] | { [key: string]: any } | undefined;
        /** Resources this statement applies to */
        Resource?: string | string[] | { [key: string]: any } | undefined;
        /** Resources this statement does NOT apply to */
        NotResource?: string | string[] | { [key: string]: any } | undefined;
    }

    /**
     * S3 deployment bucket configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml#deployment-bucket
     * @example
     * ```yaml
     * deploymentBucket:
     *   name: my-deployment-bucket
     *   maxPreviousDeploymentArtifacts: 5
     *   blockPublicAccess: true
     *   serverSideEncryption: AES256
     * ```
     */
    interface DeploymentBucket {
        /**
         * Existing S3 bucket name for deployments.
         * @example 'my-company-deployments-${aws:region}'
         */
        name?: string | undefined;
        /**
         * Number of previous deployment artifacts to keep.
         * @default 5
         */
        maxPreviousDeploymentArtifacts?: number | string | undefined;
        /**
         * Block all public access to the bucket.
         * @default false
         */
        blockPublicAccess?: boolean | undefined;
        /**
         * Server-side encryption algorithm.
         * @example 'AES256' | 'aws:kms'
         */
        serverSideEncryption?: string | undefined;
        /** Skip automatic bucket policy setup */
        skipPolicySetup?: boolean | undefined;
        /** KMS key ID for SSE-KMS encryption */
        sseKMSKeyId?: string | undefined;
        /** SSE-C algorithm (for customer-provided keys) */
        sseCustomerAlgorithim?: string | undefined;
        /** Base64-encoded SSE-C key */
        sseCustomerKey?: string | undefined;
        /** MD5 digest of the SSE-C key */
        sseCustomerKeyMD5?: string | undefined;
        /** Tags to apply to the bucket */
        tags?: Tags | undefined;
    }

    /**
     * Environment variables map.
     * @example { NODE_ENV: 'production', TABLE_NAME: 'users' }
     */
    interface Environment {
        [key: string]: any;
    }

    /**
     * REST API Gateway (v1) configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/apigateway
     * @example
     * ```yaml
     * apiGateway:
     *   restApiId: abcd1234
     *   restApiRootResourceId: xyz789
     *   description: My REST API
     *   binaryMediaTypes:
     *     - 'image/png'
     *   minimumCompressionSize: 1024
     * ```
     */
    interface ApiGateway {
        /**
         * ID of an existing REST API to extend.
         * @example 'abcd1234xy'
         */
        restApiId?: string | undefined;
        /** Root resource ID of existing REST API */
        restApiRootResourceId?: string | undefined;
        /**
         * Map of resource paths to IDs for existing API.
         * @example { '/users': 'abc123', '/orders': 'def456' }
         */
        restApiResources?: {
            [key: string]: string;
        } | undefined;
        /** ID of existing WebSocket API */
        websocketApiId?: any;
        /**
         * Source for API key validation.
         * @default 'HEADER'
         */
        apiKeySourceType?: "HEADER" | "AUTHORIZER" | "header" | "authorizer" | undefined;
        /**
         * Minimum response size in bytes to compress (0-10485760).
         * @example 1024
         */
        minimumCompressionSize?: number | string | undefined;
        /** API description */
        description?: string | undefined;
        /**
         * MIME types to treat as binary.
         * @example ['image/*', 'application/pdf']
         */
        binaryMediaTypes?: string[] | undefined;
        /** Enable CloudWatch metrics for API Gateway */
        metrics?: boolean | undefined;
        /** Prefix API name with service name */
        shouldStartNameWithService?: boolean | undefined;
        /** API keys configuration */
        apiKeys?: Array<ApiKey | string> | undefined;
        /** Resource-based access policy */
        resourcePolicy?: ResourcePolicy[] | undefined;
        /** Usage plan configuration */
        usagePlan?: UsagePlan | undefined;
    }



    /**
     * Cognito User Pool authorizer for ALB.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/alb#cognito-authentication
     */
    interface CognitoAuthorizer {
        type: "cognito";
        /** ARN of the Cognito User Pool */
        userPoolArn: string;
        /** Cognito app client ID */
        userPoolClientId: string;
        /** Cognito User Pool domain */
        userPoolDomain: string;
        /** Allow unauthenticated requests to pass through */
        allowUnauthenticated?: boolean | undefined;
        /** Extra parameters for the authorization request */
        requestExtraParams?: {
            prompt?: string | undefined;
            redirect?: boolean | undefined;
        } | undefined;
        /** OAuth scopes to request */
        scope?: string | undefined;
        /** Name of the session cookie */
        sessionCookieName?: string | undefined;
        /** Session timeout in seconds */
        sessionTimeout?: number | string | undefined;
    }

    /**
     * OIDC authorizer for ALB.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/alb#oidc-authentication
     */
    interface OidcAuthorizer {
        type: "oidc";
        /** OIDC authorization endpoint URL */
        authorizationEndpoint: string;
        /** OIDC client ID */
        clientId: string;
        /** OIDC client secret (use SSM or secrets manager in production) */
        clientSecret?: string | undefined;
        /** Use existing client secret from Secrets Manager */
        useExistingClientSecret?: boolean | undefined;
        /** OIDC issuer identifier */
        issuer: string;
        /** OIDC token endpoint URL */
        tokenEndpoint: string;
        /** OIDC user info endpoint URL */
        userInfoEndpoint: string;
        /** Allow unauthenticated requests */
        allowUnauthenticated?: boolean | undefined;
        requestExtraParams?: {
            prompt?: string | undefined;
            redirect?: boolean | undefined;
        } | undefined;
        /** OAuth scopes to request */
        scope?: string | undefined;
        sessionCookieName?: string | undefined;
        sessionTimeout?: number | string | undefined;
    }

    /**
     * JWT authorizer for HTTP API.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/http-api#jwt-authorizers
     * @example
     * ```yaml
     * authorizers:
     *   myJwtAuthorizer:
     *     identitySource: request.header.Authorization
     *     issuerUrl: https://cognito-idp.region.amazonaws.com/poolId
     *     audience:
     *       - myClientId
     * ```
     */
    interface JwtAuthorizer {
        /**
         * Identity source expression.
         * @example 'request.header.Authorization'
         */
        identitySource: string;
        /**
         * JWT issuer URL.
         * @example 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_abc123'
         */
        issuerUrl: string;
        /** Valid audience values for the JWT */
        audience: string[];
    }

    /**
     * Lambda request authorizer for HTTP API.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/http-api#lambda-request-authorizers
     */
    interface CustomAuthorizer {
        type: "request";
        /** Name of the authorizer function defined in this service */
        functionName?: string;
        /** ARN of an external authorizer function */
        functionArn?: string;
        /** Authorizer name */
        name?: string;
        /**
         * Cache TTL in seconds (0 to disable).
         * @default 0
         */
        resultTtlInSeconds?: number;
        /** Enable simple response format (true/false) */
        enableSimpleResponses?: boolean;
        /**
         * Payload format version.
         * @example '2.0'
         */
        payloadVersion?: string;
        /**
         * Identity sources for caching.
         * @example ['request.header.Authorization']
         */
        identitySource?: string[];
        /** Set true if authorizer is managed outside this service */
        managedExternally?: boolean;
    }

    /**
     * Map of authorizer definitions.
     * @example
     * ```yaml
     * authorizers:
     *   myAuth:
     *     type: jwt
     *     identitySource: request.header.Authorization
     *     issuerUrl: https://example.com
     *     audience:
     *       - myApp
     * ```
     */
    interface Authorizers {
        [key: string]: CognitoAuthorizer | OidcAuthorizer | JwtAuthorizer | CustomAuthorizer;
    }

    /**
     * Application Load Balancer configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/alb
     */
    interface Alb {
        /**
         * Prefix for target group names (max 6 chars).
         * @example 'myapp'
         */
        targetGroupPrefix?: string | undefined;
        /** Authorizer definitions for ALB */
        authorizers?: Authorizers | undefined;
    }

    /**
     * HTTP API CORS configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/http-api#cors-setup
     * @example
     * ```yaml
     * cors:
     *   allowedOrigins:
     *     - https://example.com
     *   allowedHeaders:
     *     - Content-Type
     *     - Authorization
     *   allowedMethods:
     *     - GET
     *     - POST
     *   allowCredentials: true
     *   maxAge: 86400
     * ```
     */
    interface HttpApiCors {
        /**
         * Allowed origins.
         * @example ['https://example.com', 'https://app.example.com']
         */
        allowedOrigins: string[];
        /** Allowed request headers */
        allowedHeaders?: string[] | undefined;
        /** Allowed HTTP methods */
        allowedMethods?: string[] | undefined;
        /** Allow credentials (cookies, authorization headers) */
        allowCredentials?: boolean | undefined;
        /** Headers to expose in response */
        exposedResponseHeaders?: string[] | undefined;
        /**
         * Preflight cache max age in seconds.
         * @example 86400
         */
        maxAge?: number | undefined;
    }

    /**
     * HTTP API Gateway (v2) configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/http-api
     * @example
     * ```yaml
     * httpApi:
     *   name: my-http-api
     *   cors: true
     *   metrics: true
     *   authorizers:
     *     myAuth:
     *       type: jwt
     *       issuerUrl: https://example.com
     *       audience:
     *         - myApp
     * ```
     */
    interface HttpApi {
        /** ID of an existing HTTP API to extend */
        id?: string | undefined;
        /** Custom name for the HTTP API */
        name?: string | undefined;
        /**
         * Payload format version.
         * @default '2.0'
         * @example '1.0' | '2.0'
         */
        payload?: string | undefined;
        /** CORS configuration (true for defaults, or detailed config) */
        cors?: boolean | HttpApiCors | undefined;
        /** Authorizer definitions */
        authorizers?: Authorizers | undefined;
        /** Apply provider-level tags to HTTP API */
        useProviderTags?: boolean | undefined;
        /** Enable CloudWatch metrics */
        metrics?: boolean | undefined;
        /** Disable the default execute-api endpoint */
        disableDefaultEndpoint?: boolean | undefined;
        /** Prefix name with service name */
        shouldStartNameWithService?: boolean | undefined;
    }

    /**
     * API Gateway usage plan quota configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/apigateway#usage-plan
     */
    interface Quota {
        /** Maximum requests allowed in the period */
        limit?: number | string | undefined;
        /** Number of requests to subtract from limit at start */
        offset?: number | string | undefined;
        /**
         * Quota period.
         * @example 'DAY' | 'WEEK' | 'MONTH'
         */
        period?: string | undefined;
    }

    /**
     * API Gateway usage plan throttling configuration.
     */
    interface Throttle {
        /** Maximum concurrent requests */
        burstLimit?: number | string | undefined;
        /** Steady-state request rate (requests/second) */
        rateLimit?: number | string | undefined;
    }

    /**
     * API Gateway usage plan configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/apigateway#usage-plan
     * @example
     * ```yaml
     * usagePlan:
     *   quota:
     *     limit: 1000
     *     period: DAY
     *   throttle:
     *     burstLimit: 100
     *     rateLimit: 50
     * ```
     */
    interface UsagePlan {
        /** Request quota limits */
        quota?: Quota | undefined;
        /** Request throttling limits */
        throttle?: Throttle | undefined;
    }

    /**
     * API Gateway resource policy statement.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/apigateway#resource-policy
     * @example
     * ```yaml
     * - Effect: Allow
     *   Principal: '*'
     *   Action: execute-api:Invoke
     *   Resource:
     *     - execute-api:/*
     *   Condition:
     *     IpAddress:
     *       aws:SourceIp:
     *         - 10.0.0.0/8
     * ```
     */
    interface ResourcePolicy {
        Effect: "Allow" | "Deny";
        /** Who this policy applies to */
        Principal?: string | string[] | { [key: string]: any } | undefined;
        /** Actions this policy applies to */
        Action?: string | string[] | { [key: string]: any } | undefined;
        /** Resources this policy applies to */
        Resource?: string | string[] | { [key: string]: any } | undefined;
        /** Conditions for this policy */
        Condition?: {
            [key: string]: any;
        } | undefined;
    }

    /**
     * VPC configuration for Lambda functions.
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/functions#vpc-configuration
     * @example
     * ```yaml
     * vpc:
     *   securityGroupIds:
     *     - sg-12345678
     *   subnetIds:
     *     - subnet-12345678
     *     - subnet-87654321
     * ```
     */
    interface Vpc {
        /** Security group IDs for the Lambda ENIs */
        securityGroupIds: string[];
        /** Subnet IDs where Lambda ENIs are created */
        subnetIds: string[] | string;
    }

    /**
     * CloudFormation stack parameter.
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html
     */
    interface StackParameters {
        /** Parameter name */
        ParameterKey: string;
        /** Parameter value */
        ParameterValue: string;
    }

    /**
     * CloudFormation rollback trigger.
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html
     */
    interface RollbackTrigger {
        /** ARN of the CloudWatch alarm or event rule */
        Arn: string;
        /** Type of trigger: 'AWS::CloudWatch::Alarm' */
        Type: string;
    }

    /**
     * CloudFormation rollback configuration.
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html
     */
    interface RollbackConfiguration {
        /** Monitoring period in minutes */
        MonitoringTimeInMinutes: number | string;
        /** Rollback triggers */
        RollbackTriggers: RollbackTrigger[];
    }

    /**
     * X-Ray tracing configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/functions#aws-x-ray-tracing
     * @example
     * ```yaml
     * tracing:
     *   apiGateway: true
     *   lambda: Active
     * ```
     */
    interface Tracing {
        /** Enable API Gateway X-Ray tracing */
        apiGateway: boolean;
        /**
         * Lambda tracing mode.
         * - 'Active': Lambda samples and records traces
         * - 'PassThrough': Lambda only records if upstream sampled
         */
        lambda?: "Active" | "PassThrough" | boolean | undefined;
    }

    /**
     * REST API CloudWatch logging configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/apigateway#logs
     */
    interface RestApiLogs {
        /** Enable access logging */
        accessLogging?: boolean | undefined;
        /**
         * Custom access log format.
         * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-logging.html
         */
        format?: string | undefined;
        /** Enable execution logging */
        executionLogging?: boolean | undefined;
        /** Execution log level */
        level?: "INFO" | "ERROR" | undefined;
        /** Log full request/response data */
        fullExecutionData?: boolean | undefined;
        /** Custom IAM role ARN for logging */
        role?: string | undefined;
        /** Set true if role is managed externally */
        roleManagedExternally?: boolean | undefined;
    }

    /**
     * WebSocket API logging configuration.
     */
    interface WebsocketLogs {
        /** Log level */
        level?: "INFO" | "ERROR" | undefined;
    }

    /**
     * HTTP API logging configuration.
     */
    interface HttpApiLogs {
        /**
         * Custom access log format.
         * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-logging.html
         */
        format?: string | undefined;
    }

    /**
     * CloudWatch logging configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml#logs
     * @example
     * ```yaml
     * logs:
     *   restApi:
     *     accessLogging: true
     *     executionLogging: true
     *     level: INFO
     *   httpApi: true
     *   frameworkLambda: true
     * ```
     */
    interface Logs {
        /** REST API Gateway logging (true for all, or detailed config) */
        restApi?: true | RestApiLogs | undefined;
        /** WebSocket API logging */
        websocket?: WebsocketLogs | undefined;
        /** HTTP API logging (true or detailed config) */
        httpApi?: boolean | HttpApiLogs | undefined;
        /** Enable logging for framework-internal Lambda */
        frameworkLambda?: boolean | undefined;
    }

    /**
     * Packaging configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/packaging
     * @example
     * ```yaml
     * package:
     *   patterns:
     *     - '!node_modules/**'
     *     - '!.git/**'
     *     - 'src/**'
     *   individually: true
     * ```
     */
    interface Package {
        /**
         * @deprecated Use `patterns` instead. Files to include.
         */
        include?: string[] | undefined;
        /**
         * @deprecated Use `patterns` instead. Files to exclude.
         */
        exclude?: string[] | undefined;
        /**
         * Glob patterns for including/excluding files.
         * Prefix with '!' to exclude.
         * @example ['!node_modules/**', 'src/**']
         */
        patterns?: string[] | undefined;
        /**
         * Exclude devDependencies from package.
         * @default true
         */
        excludeDevDependencies?: boolean | undefined;
        /**
         * Pre-built deployment artifact path.
         * @example '.serverless/my-artifact.zip'
         */
        artifact?: string | undefined;
        /**
         * Package each function separately.
         * @default false
         */
        individually?: boolean | undefined;
    }

    /**
     * Lambda destination configuration for async invocations.
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/functions#destinations
     * @example
     * ```yaml
     * destinations:
     *   onSuccess: arn:aws:sqs:region:account:success-queue
     *   onFailure: arn:aws:sns:region:account:failure-topic
     * ```
     */
    interface Destinations {
        /** ARN of destination for successful invocations */
        onSuccess?: string | undefined;
        /** ARN of destination for failed invocations */
        onFailure?: string | undefined;
    }

    /**
     * REST API Gateway Lambda authorizer configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/apigateway#http-endpoints-with-custom-authorizers
     */
    interface HttpAuthorizer {
        /** Authorizer function name or reference */
        name?: string | undefined;
        /** Authorizer function ARN */
        arn?: string | undefined;
        /**
         * Cache TTL in seconds (0 to disable).
         * @default 300
         */
        resultTtlInSeconds?: number | string | undefined;
        /**
         * Identity source header.
         * @default 'method.request.header.Authorization'
         */
        identitySource?: string | undefined;
        /** Regex to validate identity */
        identityValidationExpression?: string | undefined;
        /**
         * Authorizer type.
         * @example 'token' | 'request' | 'cognito_user_pools'
         */
        type?: string | undefined;
    }

    /**
     * REST API Gateway CORS configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/apigateway#enabling-cors
     * @example
     * ```yaml
     * cors:
     *   origins:
     *     - https://example.com
     *   headers:
     *     - Content-Type
     *     - Authorization
     *   allowCredentials: true
     * ```
     */
    interface HttpCors {
        /**
         * Allowed origins (can use '*').
         * @example ['https://example.com'] | '*'
         */
        origins?: string | string[] | undefined;
        /** Allowed headers */
        headers?: string | string[] | undefined;
        /** Allow credentials */
        allowCredentials?: boolean | undefined;
        /** Preflight cache max age in seconds */
        maxAge?: number | undefined;
        /** Cache-Control header for preflight response */
        cacheControl?: string | undefined;
    }

    /**
     * Request parameter validation for REST API.
     */
    interface HttpRequestParametersValidation {
        /** Required query string parameters */
        querystrings?: { [key: string]: boolean } | undefined;
        /** Required headers */
        headers?: { [key: string]: boolean } | undefined;
        /** Required path parameters */
        paths?: { [key: string]: boolean } | undefined;
    }

    /**
     * Request validation configuration for REST API.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/apigateway#request-validation
     */
    interface HttpRequestValidation {
        /** Parameter validation */
        parameters?: HttpRequestParametersValidation | undefined;
        /**
         * Request body schemas by content type.
         * @example { 'application/json': { type: 'object', properties: { name: { type: 'string' } } } }
         */
        schemas?: { [key: string]: Record<string, unknown> } | undefined;
    }

    /**
     * REST API Gateway event configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/apigateway
     * @example
     * ```yaml
     * events:
     *   - http:
     *       path: users/{id}
     *       method: get
     *       cors: true
     *       authorizer: myAuthorizer
     * ```
     */
    interface Http {
        /**
         * URL path for the endpoint.
         * @example 'users/{id}'
         */
        path: string;
        /**
         * HTTP method.
         * @example 'get' | 'post' | 'put' | 'delete' | 'any'
         */
        method: string;
        /** CORS configuration (true for defaults) */
        cors?: boolean | HttpCors | undefined;
        /** Require API key for access */
        private?: boolean | undefined;
        /** Enable async Lambda invocation */
        async?: boolean | undefined;
        /** Authorizer configuration */
        authorizer?: HttpAuthorizer | string | undefined;
        /** Request validation */
        request?: HttpRequestValidation | undefined;
        /**
         * Integration type.
         * @default 'lambda'
         */
        integration?: "lambda" | "mock" | undefined;
    }

    /**
     * HTTP API authorizer reference by name.
     */
    interface NamedHttpApiEventAuthorizer {
        /** Name of authorizer defined in httpApi.authorizers */
        name: string;
        /** OAuth scopes required */
        scopes?: string[] | undefined;
    }

    /**
     * HTTP API authorizer reference by ID.
     */
    interface IdRefHttpApiEventAuthorizer {
        /** ID of external authorizer */
        id: string;
        /** OAuth scopes required */
        scopes?: string[] | undefined;
    }

    /**
     * HTTP API Gateway event configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/http-api
     * @example
     * ```yaml
     * events:
     *   - httpApi:
     *       path: /users/{id}
     *       method: GET
     *       authorizer:
     *         name: myAuth
     * ```
     */
    interface HttpApiEvent {
        /**
         * HTTP method.
         * @example 'GET' | 'POST' | 'PUT' | 'DELETE' | '*'
         */
        method: string;
        /**
         * URL path.
         * @example '/users/{id}'
         */
        path: string;
        /** Authorizer configuration */
        authorizer?: NamedHttpApiEventAuthorizer | IdRefHttpApiEventAuthorizer | undefined;
    }

    /**
     * WebSocket API authorizer configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/websocket#routes-and-authorizers
     */
    interface WebsocketAuthorizer {
        /** Authorizer function name */
        name?: string | undefined;
        /** Authorizer function ARN */
        arn?: string | undefined;
        /** Identity sources for caching */
        identitySource?: string[] | undefined;
    }

    /**
     * WebSocket API event configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/websocket
     * @example
     * ```yaml
     * events:
     *   - websocket:
     *       route: $connect
     *       authorizer: myAuth
     *   - websocket:
     *       route: sendMessage
     * ```
     */
    interface Websocket {
        /**
         * WebSocket route key.
         * @example '$connect' | '$disconnect' | '$default' | 'sendMessage'
         */
        route: string;
        /** Route response selection expression */
        routeResponseSelectionExpression?: string | undefined;
        /** Authorizer configuration */
        authorizer?: WebsocketAuthorizer | undefined;
    }

    /**
     * S3 event filter rule.
     */
    interface S3Rule {
        /** Object key prefix filter */
        prefix?: string | undefined;
        /** Object key suffix filter */
        suffix?: string | undefined;
    }

    /**
     * S3 event configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/s3
     * @example
     * ```yaml
     * events:
     *   - s3:
     *       bucket: my-bucket
     *       event: s3:ObjectCreated:*
     *       rules:
     *         - prefix: uploads/
     *         - suffix: .jpg
     * ```
     */
    interface S3 {
        /** S3 bucket name */
        bucket: string;
        /**
         * S3 event type.
         * @example 's3:ObjectCreated:*' | 's3:ObjectRemoved:*'
         */
        event: string;
        /** Event filter rules */
        rules?: S3Rule[] | undefined;
        /** Set true if bucket already exists */
        existing?: boolean | undefined;
    }

    /**
     * Event input payload.
     */
    interface Input {
        [key: string]: any;
    }

    /**
     * EventBridge/CloudWatch input transformer.
     * @see https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-transform-target-input.html
     */
    interface InputTransformer {
        /**
         * Map of JSON path expressions to variable names.
         * @example { 'instance': '$.detail.instance-id' }
         */
        inputPathsMap: { [key: string]: string };
        /**
         * Template for the transformed input.
         * @example '{"instance": <instance>}'
         */
        inputTemplate: string;
    }

    /**
     * Schedule event configuration (EventBridge Scheduler).
     * @see https://www.serverless.com/framework/docs/providers/aws/events/schedule
     * @example
     * ```yaml
     * events:
     *   - schedule:
     *       rate: rate(5 minutes)
     *       enabled: true
     *       input:
     *         key: value
     *   - schedule: cron(0 12 * * ? *)
     * ```
     */
    interface Schedule {
        /** Schedule name */
        name?: string | undefined;
        /** Schedule description */
        description?: string | undefined;
        /**
         * Schedule expression.
         * @example 'rate(5 minutes)' | 'cron(0 12 * * ? *)'
         */
        rate: string | string[];
        /**
         * Whether the schedule is enabled.
         * @default true
         */
        enabled?: boolean | undefined;
        /** Input payload to pass to Lambda */
        input?: Input | undefined;
        /** JSON path to extract input from event */
        inputPath?: string | undefined;
        /** Input transformation configuration */
        inputTransformer?: InputTransformer | undefined;
    }

    /**
     * Dead letter queue target import configuration.
     */
    interface DeadLetterTargetImport {
        /** ARN of the DLQ */
        arn: string;
        /** URL of the DLQ (SQS) */
        url: string;
    }

    /**
     * SNS redrive (dead letter queue) policy.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/sns#redrive-policy-dead-letter-queue
     */
    interface RedrivePolicy {
        /** ARN of the dead letter queue */
        deadLetterTargetArn?: string | undefined;
        /** CloudFormation Ref to the dead letter queue */
        deadLetterTargetRef?: string | undefined;
        /** Import existing dead letter queue */
        deadLetterTargetImport?: DeadLetterTargetImport | undefined;
    }

    /**
     * SNS event configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/sns
     * @example
     * ```yaml
     * events:
     *   - sns:
     *       arn: arn:aws:sns:region:account:topic
     *       filterPolicy:
     *         type:
     *           - order
     * ```
     */
    interface Sns {
        /** ARN of existing SNS topic */
        arn?: string | undefined;
        /** Name for new SNS topic */
        topicName?: string | undefined;
        /** Display name for the topic */
        displayName?: string | undefined;
        /**
         * Message attribute filter policy.
         * @see https://docs.aws.amazon.com/sns/latest/dg/sns-subscription-filter-policies.html
         */
        filterPolicy?: Record<string, unknown> | undefined;
        /** Dead letter queue configuration */
        redrivePolicy?: RedrivePolicy | undefined;
    }

    /**
     * SQS event configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/sqs
     * @example
     * ```yaml
     * events:
     *   - sqs:
     *       arn: arn:aws:sqs:region:account:queue
     *       batchSize: 10
     *       functionResponseType: ReportBatchItemFailures
     * ```
     */
    interface Sqs {
        /** SQS queue ARN or CloudFormation reference */
        arn: string | { [key: string]: any };
        /**
         * Number of messages to retrieve per batch.
         * @minimum 1
         * @maximum 10000
         * @default 10
         */
        batchSize?: number | undefined;
        /**
         * Maximum time to wait for a full batch (seconds).
         * @minimum 0
         * @maximum 300
         */
        maximumBatchingWindow?: number | undefined;
        /** Enable partial batch failure reporting */
        functionResponseType?: "ReportBatchItemFailures" | undefined;
        /** Enable/disable the event source mapping */
        enabled?: boolean | undefined;
        /** Event filter patterns */
        filterPatterns?: FilterPattern[] | undefined;
    }

    /**
     * ActiveMQ event configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/activemq
     */
    interface ActiveMq {
        /** ActiveMQ broker ARN */
        arn: string;
        /** Secrets Manager ARN for credentials */
        basicAuthArn: string;
        /** Queue name to consume from */
        queue: string;
        /** Batch size (1-10000) */
        batchSize?: number;
        /** Enable/disable the event source */
        enabled?: boolean | undefined;
    }

    /**
     * RabbitMQ event configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/rabbitmq
     */
    interface RabbitMq {
        /** RabbitMQ broker ARN */
        arn: string;
        /** Secrets Manager ARN for credentials */
        basicAuthArn: string;
        /** Queue name to consume from */
        queue: string;
        /** Batch size (1-10000) */
        batchSize?: number;
        /** Enable/disable the event source */
        enabled?: boolean | undefined;
    }

    /**
     * Numeric filter comparison for event filtering.
     * @see https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html
     */
    type NumericFilter =
        | ["=", number]
        | ["<", number]
        | ["<=", number]
        | [">", number]
        | [">=", number]
        | [">", number, "<", number]
        | [">=", number, "<", number]
        | [">", number, "<=", number]
        | [">=", number, "<=", number];

    /**
     * Event filter pattern value types.
     * @see https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html
     */
    type Filter =
        /* Null */
        | null
        /* Empty */
        | ""
        /* String equality */
        | string
        /* Not */
        | { "anything-but": Filter[] }
        /* Numeric */
        | { numeric: NumericFilter }
        /* Exists */
        | { exists: boolean }
        /* Begins with */
        | { prefix: string };

    /**
     * Event filter pattern for SQS, DynamoDB Streams, Kinesis.
     * @see https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html
     */
    interface FilterPattern {
        [k: string]: FilterPattern | Filter[];
    }

    /**
     * DynamoDB/Kinesis stream event configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/streams
     * @example
     * ```yaml
     * events:
     *   - stream:
     *       arn: arn:aws:dynamodb:region:account:table/name/stream/timestamp
     *       type: dynamodb
     *       batchSize: 100
     *       startingPosition: LATEST
     *       functionResponseType: ReportBatchItemFailures
     * ```
     */
    interface Stream {
        /** Stream ARN or CloudFormation reference */
        arn: string | { [key: string]: any };
        /** Number of records per batch */
        batchSize?: number | string | undefined;
        /**
         * Where to start reading.
         * @example 'LATEST' | 'TRIM_HORIZON'
         */
        startingPosition?: number | string | undefined;
        /** Enable/disable the event source */
        enabled?: boolean | undefined;
        /** Stream type */
        type?: "dynamodb" | "kinesis" | undefined;
        /** Event filter patterns */
        filterPatterns?: FilterPattern[] | undefined;
        /** Enable partial batch failure reporting */
        functionResponseType?: "ReportBatchItemFailures" | undefined;
        /**
         * Number of concurrent batches per shard (1-10).
         * @default 1
         */
        parallelizationFactor?: number | undefined;
    }

    /**
     * Amazon MSK (Managed Streaming for Kafka) event configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/msk
     */
    interface Msk {
        /** MSK cluster ARN */
        arn: string;
        /** Kafka topic to consume from */
        topic: string;
        /** Batch size (1-10000) */
        batchSize?: number | undefined;
        /** Enable/disable the event source */
        enabled?: boolean | undefined;
        /** Where to start reading */
        startingPosition?: "LATEST" | "TRIM_HORIZON" | undefined;
    }

    /**
     * Self-managed Kafka access configuration.
     */
    interface KafkaAccessConfiguration {
        /** Secrets Manager ARN for SASL/PLAIN auth */
        saslPlainAuth?: string | undefined;
        /** Secrets Manager ARN for SASL/SCRAM-256 auth */
        saslScram256Auth?: string | undefined;
        /** Secrets Manager ARN for SASL/SCRAM-512 auth */
        saslScram512Auth?: string | undefined;
        /** Secrets Manager ARN for client TLS certificate */
        clientCertificateTlsAuth?: string | undefined;
        /** Secrets Manager ARN for CA certificate */
        serverRootCaCertificate?: string | undefined;
        /** VPC subnet IDs */
        vpcSubnet?: string[] | undefined;
        /** VPC security group ID */
        vpcSecurityGroup?: string | undefined;
    }

    /**
     * Self-managed Apache Kafka event configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/kafka
     * @see https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html
     * @example
     * ```yaml
     * events:
     *   - kafka:
     *       accessConfigurations:
     *         saslScram512Auth: arn:aws:secretsmanager:region:account:secret:name
     *       bootstrapServers:
     *         - broker1.example.com:9092
     *       topic: my-topic
     *       batchSize: 100
     * ```
     */
    interface Kafka {
        /** Authentication configuration */
        accessConfigurations: KafkaAccessConfiguration;
        /** Kafka bootstrap servers */
        bootstrapServers: string[];
        /** Topic to consume from */
        topic: string;
        /** Batch size (1-10000) */
        batchSize?: number | undefined;
        /** Maximum batching window in seconds */
        maximumBatchingWindow?: number | undefined;
        /** Where to start reading */
        startingPosition?: "LATEST" | "TRIM_HORIZON";
        /** Enable/disable the event source */
        enabled?: boolean | undefined;
        /** Consumer group ID for the Kafka consumer */
        consumerGroupId?: string;
    }

    /**
     * Alexa Skill event configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/alexa-skill
     */
    interface AlexaSkill {
        /** Alexa Skill application ID */
        appId: string;
        /** Enable/disable the event source */
        enabled?: boolean | undefined;
    }

    /**
     * Alexa Smart Home event configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/alexa-smart-home
     */
    interface AlexaSmartHome {
        /** Alexa Smart Home application ID */
        appId: string;
        /** Enable/disable the event source */
        enabled?: boolean | undefined;
    }

    /**
     * AWS IoT event configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/iot
     */
    interface Iot {
        /** IoT rule name */
        name: string;
        /** Rule description */
        description?: string | undefined;
        /** Enable/disable the rule */
        enabled?: boolean | undefined;
        /** SQL statement for the rule query */
        sql: string;
        /** SQL version (e.g., '2016-03-23') */
        sqlVersion: string;
    }

    /**
     * EventBridge/CloudWatch event detail pattern.
     */
    interface Detail {
        [key: string]: string[];
    }

    /**
     * CloudWatch Events event type pattern.
     * @see https://docs.aws.amazon.com/eventbridge/latest/userguide/aws-events.html
     */
    interface CloudwatchEventType {
        /** AWS service sources */
        source: string[];
        /** Event detail types */
        "detail-type": string[];
        /** Event detail pattern */
        detail: Detail;
    }

    /**
     * CloudWatch Events event configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/cloudwatch-event
     */
    interface CloudwatchEvent {
        /** Event pattern or rule ARN */
        event: CloudwatchEventInternalEvent | string;
        /** Rule name */
        name?: string | undefined;
        /** Rule description */
        description?: string | undefined;
        /** Enable/disable the rule */
        enabled?: boolean | undefined;
        /** Static input to pass to Lambda */
        input?: Input | undefined;
        /** JSON path to extract input from event */
        inputPath?: string | undefined;
        /** Input transformation configuration */
        inputTransformer?: InputTransformer | undefined;
    }

    /**
     * CloudWatch Events internal event pattern.
     * @see https://docs.aws.amazon.com/eventbridge/latest/userguide/aws-events.html
     */
    interface CloudwatchEventInternalEvent {
        /** AWS service source(s) */
        source: string | string[];
        /** Event detail type(s) */
        "detail-type"?: string | string[];
        /** Event detail object */
        detail?: object;
        /** AWS region */
        region?: string;
        /** Resource ARNs that triggered the event */
        resources?: string[];
        /** Event schema version */
        version?: string;
        /** Unique event identifier */
        id?: string;
        /** Event timestamp (ISO 8601) */
        time?: string;
        /** AWS account ID */
        account?: string;
    }

    /**
     * CloudWatch Logs event configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/cloudwatch-log
     */
    interface CloudwatchLog {
        /** CloudWatch Log group name */
        logGroup: string;
        /** CloudWatch Logs filter pattern */
        filter: string;
    }

    /**
     * Cognito User Pool trigger event configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/cognito-user-pool
     */
    interface CognitoUserPool {
        /** User Pool name or ARN */
        pool: string;
        /** Trigger type (e.g., 'PreSignUp', 'PostConfirmation') */
        trigger: string;
        /** Set true if User Pool already exists */
        existing?: boolean | undefined;
    }

    /**
     * Application Load Balancer event configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/alb
     */
    interface AlbEvent {
        /** ALB listener ARN */
        listenerArn: string;
        /** Listener rule priority (1-50000) */
        priority: number | string;
        /** Routing conditions */
        conditions: {
            /** Host header condition */
            host: string;
            /** Path pattern condition */
            path: string;
        };
    }

    /**
     * EventBridge pattern for existing event sources.
     */
    interface PatternExisting {
        /** Event source identifiers */
        source: string[];
    }

    /**
     * EventBridge pattern with full event matching.
     */
    interface PatternInput {
        /** Event source identifiers */
        source: string[];
        /** Event detail types to match */
        "detail-type": string[];
        /** Detail object pattern */
        detail: Detail;
    }

    /**
     * EventBridge event configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/event-bridge
     */
    interface EventBridge {
        /** Schedule expression (rate or cron) */
        schedule?: string | undefined;
        /** Custom event bus name or ARN */
        eventBus?: string | undefined;
        /** Event pattern to match */
        pattern?: PatternExisting | PatternInput | undefined;
        /** Static input to pass to Lambda */
        input?: Input | undefined;
        /** JSON path to extract input from event */
        inputPath?: string | undefined;
        /** Input transformation configuration */
        inputTransformer?: InputTransformer | undefined;
    }

    /**
     * CloudFront origin configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/cloudfront
     */
    interface Origin {
        /** Origin domain name */
        DomainName: string;
        /** Path prefix for origin requests */
        OriginPath: string;
        /** Custom origin configuration */
        CustomOriginConfig: {
            /** Protocol policy: 'http-only', 'https-only', 'match-viewer' */
            OriginProtocolPolicy: string;
        };
    }

    /**
     * CloudFront Lambda@Edge event configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/events/cloudfront
     */
    interface CloudFront {
        /** Lambda@Edge trigger: 'viewer-request', 'origin-request', 'origin-response', 'viewer-response' */
        eventType: string;
        /** Include request body in Lambda event */
        includeBody: boolean;
        /** URL path pattern to match */
        pathPattern: string;
        /** Origin configuration */
        origin: Origin;
    }

    /**
     * Lambda function event trigger configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/events
     */
    interface Event {
        /** REST API Gateway (v1) event */
        http?: Http | undefined;
        /** HTTP API Gateway (v2) event */
        httpApi?: HttpApiEvent | undefined;
        /** WebSocket API event */
        websocket?: Websocket | undefined;
        /** S3 bucket event */
        s3?: S3 | undefined;
        /** Scheduled event (cron/rate) */
        schedule?: string | Schedule | undefined;
        /** SNS topic event */
        sns?: Sns | undefined;
        /** SQS queue event */
        sqs?: Sqs | undefined;
        /** DynamoDB/Kinesis stream event */
        stream?: Stream | undefined;
        /** Amazon MSK event */
        msk?: Msk | undefined;
        /** Alexa Skill event */
        alexaSkill?: AlexaSkill | undefined;
        /** Alexa Smart Home event */
        alexaSmartHome?: AlexaSmartHome | undefined;
        /** AWS IoT event */
        iot?: Iot | undefined;
        /** CloudWatch Events/EventBridge event */
        cloudwatchEvent?: CloudwatchEvent | undefined;
        /** CloudWatch Logs subscription event */
        cloudwatchLog?: CloudwatchLog | undefined;
        /** Cognito User Pool trigger */
        cognitoUserPool?: CognitoUserPool | undefined;
        /** Application Load Balancer event */
        alb?: AlbEvent | undefined;
        /** EventBridge event */
        eventBridge?: EventBridge | undefined;
        /** CloudFront Lambda@Edge event */
        cloudFront?: CloudFront | undefined;
        /** Amazon MQ (ActiveMQ) event */
        activemq?: ActiveMq | undefined;
        /** Amazon MQ (RabbitMQ) event */
        rabbitmq?: RabbitMq | undefined;
        /** Self-managed Kafka event */
        kafka?: Kafka | undefined;
    }

    /**
     * EFS file system configuration for Lambda.
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/functions#file-system-configuration
     */
    interface FileSystemConfig {
        /** EFS Access Point ARN */
        arn: string;
        /** Local mount path in Lambda (must start with /mnt/) */
        localMountPath: string;
    }

    /**
     * Lambda Function URL CORS configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/functions#function-urls
     */
    interface FunctionUrlConfigCors {
        /** Allow credentials (cookies, auth headers) */
        allowCredentials?: boolean | undefined;
        /** Allowed request headers (true for all) */
        allowedHeaders?: boolean | string[] | undefined;
        /** Allowed HTTP methods (true for all) */
        allowedMethods?: boolean | string[] | undefined;
        /** Allowed origins (true for all) */
        allowedOrigins?: boolean | string[] | undefined;
        /** Headers to expose in response */
        exposedResponseHeaders?: boolean | string[] | undefined;
        /** Preflight cache max age in seconds */
        maxAge?: number | undefined;
    }

    /**
     * Lambda Function URL configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/functions#function-urls
     */
    interface FunctionUrlConfig {
        /** Authorization type (IAM or none) */
        authorizer?: "aws_iam" | undefined;
        /** CORS configuration (true for defaults) */
        cors?: boolean | FunctionUrlConfigCors | undefined;
    }

    /**
     * AWS Lambda function configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/functions
     */
    interface AwsFunction {
        /** Custom function name (overrides generated name) */
        name?: string | undefined;
        /** Function description */
        description?: string | undefined;
        /** Memory size in MB (128-10240) */
        memorySize?: number | string | undefined;
        /** Ephemeral storage size in MB (512-10240) */
        ephemeralStorageSize?: number | string | undefined;
        /** Reserved concurrent executions */
        reservedConcurrency?: number | string | undefined;
        /** Provisioned concurrent executions */
        provisionedConcurrency?: number | string | undefined;
        /** Lambda runtime */
        runtime?: string | undefined;
        /** Timeout in seconds (1-900) */
        timeout?: number | string | undefined;
        /** IAM role ARN for execution */
        role?: string | undefined;
        /** Dead letter queue ARN for failed invocations */
        onError?: string | undefined;
        /** @deprecated Use `kmsKeyArn` instead */
        awsKmsKeyArn?: string | undefined;
        /** KMS key ARN for encrypting environment variables */
        kmsKeyArn?: string | undefined;
        /** Environment variables */
        environment?: Environment | undefined;
        /** Function tags */
        tags?: Tags | undefined;
        /** VPC configuration */
        vpc?: string | Vpc | undefined;
        /** Packaging configuration */
        package?: Package | undefined;
        /** Lambda layers */
        layers?: Array<string | Record<string, string>> | undefined;
        /** X-Ray tracing mode */
        tracing?: "Active" | "PassThrough" | boolean | undefined;
        /** CloudFormation condition for conditional deployment */
        condition?: string | undefined;
        /** CloudFormation resource dependencies */
        dependsOn?: string[] | undefined;
        /** EFS file system configuration */
        fileSystemConfig?: FileSystemConfig | undefined;
        /** Async invocation destinations */
        destinations?: Destinations | undefined;
        /** Event triggers */
        events?: Event[] | undefined;
        /** Disable CloudWatch Logs */
        disableLogs?: boolean | undefined;
        /** Function URL configuration */
        url?: boolean | FunctionUrlConfig | undefined;
        /** CPU architecture */
        architecture?: "x86_64" | "arm64" | undefined;
    }

    /**
     * Lambda function with code handler.
     */
    interface AwsFunctionHandler extends AwsFunction {
        /** Handler path (e.g., 'src/handler.main') */
        handler: string;
    }

    /**
     * Lambda function with container image.
     */
    interface AwsFunctionImage extends AwsFunction {
        /** ECR image URI or reference */
        image: string;
    }

    /**
     * Map of function names to configurations.
     */
    interface Functions {
        [key: string]: AwsFunctionHandler | AwsFunctionImage;
    }

    /**
     * Lambda layer configuration.
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/layers
     */
    interface Layer {
        /** Path to layer contents */
        path: string;
        /** Custom layer name */
        name?: string | undefined;
        /** Layer description */
        description?: string | undefined;
        /** Compatible Lambda runtimes */
        compatibleRuntimes?: string[] | undefined;
        /** License information */
        licenseInfo?: string | undefined;
        /** AWS account IDs allowed to use this layer */
        allowedAccounts?: string[] | undefined;
        /** Retain layer versions on delete */
        retain?: boolean | undefined;
    }

    /**
     * Map of layer names to configurations.
     */
    interface Layers {
        [key: string]: Layer;
    }

    /**
     * CloudFormation resource definition.
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html
     */
    interface CloudFormationResource {
        /** CloudFormation resource type (e.g., 'AWS::S3::Bucket') */
        Type: string;
        /** Resource properties */
        Properties: { [key: string]: any };
        /** Name of condition for conditional creation */
        Condition?: string | undefined;
        /** Resource dependencies */
        DependsOn?: string | { [key: string]: any } | undefined;
        /** Deletion policy: 'Delete', 'Retain', 'Snapshot' */
        DeletionPolicy?: string | undefined;
    }

    /**
     * Map of CloudFormation resource logical IDs to definitions.
     */
    interface CloudFormationResources {
        [key: string]: CloudFormationResource;
    }

    /**
     * CloudFormation stack output.
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/outputs-section-structure.html
     */
    interface Output {
        /** Output description */
        Description?: string | undefined;
        /** Output value */
        Value?: any;
        /** Cross-stack export configuration */
        Export?: {
            /** Export name for cross-stack references */
            Name: any;
        } | undefined;
        /** Condition for conditional output */
        Condition?: any;
    }

    /**
     * Map of output names to configurations.
     */
    interface Outputs {
        [key: string]: Output;
    }

    /**
     * CloudFormation conditions map.
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/conditions-section-structure.html
     */
    interface ResourcesConditions {
        [key: string]: any;
    }

    /**
     * CloudFormation resources section.
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/resources
     */
    interface Resources {
        /** Stack description */
        Description?: string | undefined;
        /** CloudFormation conditions */
        Conditions?: ResourcesConditions;
        /** CloudFormation resources */
        Resources: CloudFormationResources;
        /** Extensions to existing resources */
        extensions?: CloudFormationResources | undefined;
        /** Stack outputs */
        Outputs?: Outputs | undefined;
    }

    /**
     * Custom configuration section for plugins and user-defined variables.
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml#custom
     */
    interface Custom {
        [key: string]: any;
    }

    /**
     * AWS credentials object.
     */
    interface Credentials {
        [key: string]: any;
    }

    /**
     * Stage-specific configuration.
     * @since v4
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/stages
     */
    interface Stages {
        /** Default stage configuration */
        default?: StageConfig | undefined;
        [stageName: string]: StageConfig | undefined;
    }

    /**
     * Configuration for a specific stage.
     * @since v4
     */
    interface StageConfig {
        /** Stage-specific parameters */
        params?: { [key: string]: any } | undefined;
        /** Observability configuration */
        observability?: boolean | undefined;
    }

    /**
     * Native build configuration for TypeScript/JavaScript bundling.
     * @since v4
     * @see https://www.serverless.com/framework/docs/providers/aws/guide/building
     */
    interface Build {
        /** EsBuild configuration */
        esbuild?: EsBuildConfig | undefined;
    }

    /**
     * EsBuild bundler configuration.
     * @since v4
     */
    interface EsBuildConfig {
        /** Enable bundling */
        bundle?: boolean | undefined;
        /** Enable minification */
        minify?: boolean | undefined;
        /** Enable source maps */
        sourcemap?: boolean | undefined;
        /** External packages to exclude from bundle */
        external?: string[] | undefined;
        /** Target environment */
        target?: string | undefined;
        /** Platform: 'node' or 'browser' */
        platform?: "node" | "browser" | undefined;
    }
}

/**
 * AWS provider class for interacting with AWS services.
 * @see https://www.serverless.com/framework/docs/providers/aws
 */
declare class Aws {
    /**
     * Create a new AWS provider instance.
     * @param serverless - The Serverless Framework instance
     * @param options - Serverless options (stage, region, etc.)
     */
    constructor(serverless: Serverless, options: Serverless.Options);

    /**
     * Naming utilities for generating CloudFormation resource names.
     */
    naming: { [key: string]: (param?: string) => string };

    /**
     * Get AWS credentials for API requests.
     * @returns AWS credentials object
     */
    getCredentials(): Aws.Credentials;

    /**
     * Get the provider name.
     * @returns 'aws'
     */
    getProviderName(): string;

    /**
     * Get the AWS region for deployment.
     * @returns AWS region (e.g., 'us-east-1')
     */
    getRegion(): string;

    /**
     * Get the S3 bucket name for deployment artifacts.
     * @returns Promise resolving to the deployment bucket name
     */
    getServerlessDeploymentBucketName(): Promise<string>;

    /**
     * Get the deployment stage.
     * @returns Stage name (e.g., 'dev', 'prod')
     */
    getStage(): string;

    /**
     * Get the AWS account ID.
     * @returns Promise resolving to the 12-digit AWS account ID
     */
    getAccountId(): Promise<string>;

    /**
     * Make an AWS SDK request.
     * @param service - AWS service name (e.g., 'S3', 'Lambda')
     * @param method - Service method to call
     * @param params - Request parameters
     * @param options - Request options
     * @returns Promise resolving to the AWS response
     * @example
     * ```typescript
     * const result = await aws.request('S3', 'listBuckets', {});
     * ```
     */
    request(
        service: string,
        method: string,
        params?: {},
        options?: {
            /** Use cached response if available */
            useCache?: boolean | undefined;
            /** Override default region for this request */
            region?: string | undefined;
        },
    ): Promise<any>;
}

export = Aws;
