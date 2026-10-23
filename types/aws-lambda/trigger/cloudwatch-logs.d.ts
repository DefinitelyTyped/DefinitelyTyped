import { AsyncHandler, Handler } from "../handler";

/**
 * {@link CloudWatchLogsAsyncHandler} Is the new version of this
 * @deprecated No longer available as of Node.js 24 Runtime {@link https://aws.amazon.com/blogs/compute/node-js-24-runtime-now-available-in-aws-lambda/}
 */
export type CloudWatchLogsHandler = Handler<CloudWatchLogsEvent, void>;
export type CloudWatchLogsAsyncHandler = AsyncHandler<CloudWatchLogsEvent, void>;

/**
 * See http://docs.aws.amazon.com/lambda/latest/dg/eventsources.html#eventsources-cloudwatch-logs
 */
export interface CloudWatchLogsEvent {
    awslogs: CloudWatchLogsEventData;
}

export interface CloudWatchLogsEventData {
    data: string;
}

export interface CloudWatchLogsDecodedData {
    owner: string;
    logGroup: string;
    logStream: string;
    subscriptionFilters: string[];
    messageType: string;
    logEvents: CloudWatchLogsLogEvent[];
}

export interface CloudWatchLogsLogEventExtractedFields {
    [name: string]: string | undefined;
}

/**
 * See http://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/SubscriptionFilters.html#LambdaFunctionExample
 */
export interface CloudWatchLogsLogEvent {
    id: string;
    timestamp: number;
    message: string;
    extractedFields?: CloudWatchLogsLogEventExtractedFields | undefined;
}
