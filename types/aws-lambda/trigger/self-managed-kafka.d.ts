import { AsyncHandler, Handler } from "../handler";

/**
 * {@link SelfManagedKafkaAsyncHandler} Is the new version of this
 * @deprecated No longer available as of Node.js 24 Runtime {@link https://aws.amazon.com/blogs/compute/node-js-24-runtime-now-available-in-aws-lambda/}
 */
export type SelfManagedKafkaHandler = Handler<SelfManagedKafkaEvent, void>;
export type SelfManagedKafkaAsyncHandler = AsyncHandler<SelfManagedKafkaEvent, void>;

export interface SelfManagedKafkaRecordHeader {
    [headerKey: string]: number[];
}

export interface SelfManagedKafkaRecord {
    topic: string;
    partition: number;
    offset: number;
    timestamp: number;
    timestampType: "CREATE_TIME" | "LOG_APPEND_TIME";
    key: string;
    value: string;
    headers: SelfManagedKafkaRecordHeader[];
}

// https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html
export interface SelfManagedKafkaEvent {
    eventSource: "SelfManagedKafka";
    bootstrapServers: string;
    records: {
        [topic: string]: SelfManagedKafkaRecord[];
    };
}
