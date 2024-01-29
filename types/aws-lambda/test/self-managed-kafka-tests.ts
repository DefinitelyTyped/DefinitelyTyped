import {
    SelfManagedKafkaEvent,
    SelfManagedKafkaHandler,
    SelfManagedKafkaRecord,
    SelfManagedKafkaRecordHeader,
} from "aws-lambda";

declare let headers: SelfManagedKafkaRecordHeader[];
declare let header: SelfManagedKafkaRecordHeader;
declare let key: string;
declare let value: number[];

const handler: SelfManagedKafkaHandler = (_event, context, callback) => {
    const event: SelfManagedKafkaEvent = _event;
    str = event.eventSource;
    str = event.bootstrapServers;

    const record: SelfManagedKafkaRecord = event.records[str][num];
    str = record.topic;
    num = record.partition;
    num = record.offset;
    num = record.timestamp;
    str = record.timestampType;
    str = record.key;
    str = record.value;
    headers = record.headers;
    header = headers[0];
    key = Object.keys(header)[0];
    value = header[key];

    callback();
    callback(new Error());
};
