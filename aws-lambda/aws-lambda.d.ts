// Type definitions for AWS Lambda
// Project: http://docs.aws.amazon.com/lambda
// Definitions by: Michael Skarum <https://github.com/skarum>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "aws-lambda" {

    export interface Records {
        Records: Record[];
    }
    interface Record {
        EventVersion: string;
        EventSubscriptionArn: string;
        EnventSource: string;
        Sns: SNS;
        kinesis: Kinesis;
    }
    interface SNS {
        Type: string;
        MessageId: string;
        TopicArn: string;
        Subject: string;
        Message: string;
        Timestamp: Date;
    }

    interface Kinesis {
        data: string;
    }

    export interface Context {
        log(message: string, object: any): void;
        fail(message: string): void;
        succeed(message: string): void;
        succeed(object: any): void;
        succeed(message: string, object: any): void;
        awsRequestId: string;
        getRemainingTimeInMillis(): number;
        /** Information about the Amazon Cognito identity provider when invoked through the AWS Mobile SDK. It can be null. */
        identity?: Identity;
    }

    interface Identity {
        cognitoIdentityId: string;
        cognitoIdentityPoolId: string;
    }

    /**
     * Optional callback parameter.
     *
     *  @param error – an optional parameter that you can use to provide results of the failed Lambda function execution.
     *  @param result – an optional parameter that you can use to provide the result of a successful function execution. The result provided must be JSON.stringify compatible.
     */
    export type Callback = (error?: Error, result?: any) => void;
}