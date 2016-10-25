// Type definitions for AWS Lambda
// Project: http://docs.aws.amazon.com/lambda
// Definitions by: James Darbyshire <https://github.com/darbio/aws-lambda-typescript>, Michael Skarum <https://github.com/skarum>, Stef Heyenrath <https://github.com/StefH/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "aws-lambda" {
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
    
    /**
     * Optional callback parameter.
     * http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
     *
     * @param error – an optional parameter that you can use to provide results of the failed Lambda function execution.
     * @param result – an optional parameter that you can use to provide the result of a successful function execution. The result provided must be JSON.stringify compatible.
     */
    export type Callback = (error?: Error, result?: any) => void;
}