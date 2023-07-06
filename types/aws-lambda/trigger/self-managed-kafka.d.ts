import { Handler } from '../handler';

export type SelfManagedKafkaHandler = Handler<SelfManagedKafkaEvent, void>;

export interface SelfManagedKafkaRecordHeader {
    [headerKey: string]: number[];
}

export interface SelfManagedKafkaRecord {
    topic: string;
    partition: number;
    offset: number;
    timestamp: number;
    timestampType: 'CREATE_TIME' | 'LOG_APPEND_TIME';
    key: string;
    value: string;
    headers: SelfManagedKafkaRecordHeader[];
}

// https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html
export interface SelfManagedKafkaEvent {
    eventSource: 'SelfManagedKafka';
    bootstrapServers: string;
    records: {
        [topic: string]: SelfManagedKafkaRecord[];
    };
}
