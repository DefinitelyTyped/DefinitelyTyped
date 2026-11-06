import { AsyncHandler, Handler } from "../handler";

/**
 * {@link MSKAsyncHandler} Is the new version of this
 * @deprecated No longer available as of Node.js 24 Runtime {@link https://aws.amazon.com/blogs/compute/node-js-24-runtime-now-available-in-aws-lambda/}
 */
export type MSKHandler = Handler<MSKEvent, void>;
export type MSKAsyncHandler = AsyncHandler<MSKEvent, void>;

export interface MSKRecordHeader {
    [headerKey: string]: number[];
}

export interface MSKRecord {
    topic: string;
    partition: number;
    offset: number;
    timestamp: number;
    timestampType: "CREATE_TIME" | "LOG_APPEND_TIME";
    key: string;
    value: string;
    headers: MSKRecordHeader[];
}

// https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html
export interface MSKEvent {
    eventSource: "aws:kafka";
    eventSourceArn: string;
    bootstrapServers: string;
    records: {
        [topic: string]: MSKRecord[];
    };
}
