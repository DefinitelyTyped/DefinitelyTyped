// Type definitions for AWS Lambda
// Project: http://docs.aws.amazon.com/lambda
// Definitions by: Michael Skarum <https://github.com/skarum>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
}

export type Callback = (error?: Error, message?: string) => void;
