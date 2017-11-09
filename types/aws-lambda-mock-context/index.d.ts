// Type definitions for AWS Lambda Mock Context SDK 1.0
// Project: https://github.com/moskalyk/typed-aws-lambda-mock-context
// Definitions by: Morgan Moskalyk <morgan.moskalyk@gmail.com>, Anand Nimkar <anand.a.nimkar@gmail.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare function context(options?: Options): Context;

export = context;

interface Context {
    Promise: Promise<any>;
    callbackWaitsForEmptyEventLoop: boolean;
    functionName: string;
    functionVersion: string;
    invokedFunctionArn: string;
    memoryLimitInMB: string;
    awsRequestId: string;
    invokeid: string;
    logGroupName: string;
    logStreamName: string;
    getRemainingTimeInMillis: number;
    succeed(result: any): Promise<any>;
    fail(err: any): Promise<any>;
    done(err: any, result: any): Promise<any>;
}

interface Options {
    region: string;
    account: string;
    functionName: string;
    functionVersion: string;
    memoryLimitInMB: string;
    alias?: string;
}
