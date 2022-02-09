import { MSKHandler, MSKEvent, MSKRecord } from 'aws-lambda';

const handler: MSKHandler = (_event, context, callback) => {
    const event: MSKEvent = _event;
    str = event.eventSource;
    str = event.eventSourceArn;

    const record: MSKRecord = event.records[str][num];
    str = record.topic;
    num = record.partition;
    num = record.offset;
    num = record.timestamp;
    str = record.timestampType;
    str = record.key;
    str = record.value;

    callback();
    callback(new Error());
};
