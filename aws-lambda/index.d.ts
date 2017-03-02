// Type definitions for AWS Lambda
// Project: http://docs.aws.amazon.com/lambda
// Definitions by: James Darbyshire <https://github.com/darbio/aws-lambda-typescript>, Michael Skarum <https://github.com/skarum>, Stef Heyenrath <https://github.com/StefH/DefinitelyTyped>, Toby Hede <https://github.com/tobyhede>, Rich Buggy <https://github.com/buggy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// API Gateway "event"
interface APIGatewayEvent {
    body: string | null;
    headers: { [name: string]: string };
    httpMethod: string;
    isBase64Encoded: boolean;
    path: string;
    pathParameters: { [name: string]: string } | null;
    queryStringParameters: { [name: string]: string } | null;
    stageVariables: { [name: string]: string } | null;
    requestContext: {
        accountId: string;
        apiId: string;
        httpMethod: string;
        identity: {
            accessKey: string | null;
            accountId: string | null;
            apiKey: string | null;
            caller: string | null;
            cognitoAuthenticationProvider: string | null;
            cognitoAuthenticationType: string | null;
            cognitoIdentityId: string | null;
            cognitoIdentityPoolId: string | null;
            sourceIp: string;
            user: string | null;
            userAgent: string | null;
            userArn: string | null;
        },
        stage: string;
        requestId: string;
        resourceId: string;
        resourcePath: string;
    };
    resource: string;
}

// Context
// http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
interface Context {
    // Properties
    callbackWaitsForEmptyEventLoop: boolean;
    functionName: string;
    functionVersion: string;
    invokedFunctionArn: string;
    memoryLimitInMB: number;
    awsRequestId: string;
    logGroupName: string;
    logStreamName: string;
    identity?: CognitoIdentity;
    clientContext?: ClientContext;

    // Functions
    getRemainingTimeInMillis(): number;

    // Functions for compatibility with earlier Node.js Runtime v0.10.42
    // For more details see http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-using-old-runtime.html#nodejs-prog-model-oldruntime-context-methods
    done(error?: Error, result?: any): void;
    fail(error: Error): void;
    fail(message: string): void;
    succeed(message: string): void;
    succeed(object: any): void;
    succeed(message: string, object: any): void;
}

interface CognitoIdentity {
    cognitoIdentityId: string;
    cognitoIdentityPoolId: string;
}

interface ClientContext {
    client: ClientContextClient;
    Custom?: any;
    env: ClientContextEnv;
}

interface ClientContextClient {
    installationId: string;
    appTitle: string;
    appVersionName: string;
    appVersionCode: string;
    appPackageName: string;
}

interface ClientContextEnv {
    platformVersion: string;
    platform: string;
    make: string;
    model: string;
    locale: string;
}

interface ProxyResult {
    statusCode: number;
    headers?: {
      [header: string]: string;
    },
    body: string;
}

/**
 * AWS Lambda handler function.
 * http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
 *
 * @param event – event data.
 * @param context – runtime information of the Lambda function that is executing.
 * @param callback – optional callback to return information to the caller, otherwise return value is null.
 */
export type Handler = (event: any, context: Context, callback?: Callback)  => void;
export type ProxyHandler = (event: APIGatewayEvent, context: Context, callback?: ProxyCallback)  => void;

/**
 * Optional callback parameter.
 * http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
 *
 * @param error – an optional parameter that you can use to provide results of the failed Lambda function execution.
 * @param result – an optional parameter that you can use to provide the result of a successful function execution. The result provided must be JSON.stringify compatible.
 */
export type Callback = (error?: Error, result?: any) => void;
export type ProxyCallback = (error?: Error, result?: ProxyResult) => void;

export as namespace AWSLambda;
