import { MSKEvent, MSKHandler, MSKRecord, MSKRecordHeader } from 'aws-lambda';

declare let headers: MSKRecordHeader[];
declare let header: MSKRecordHeader;
declare let key: string;
declare let value: number[];

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
    headers = record.headers;
    header = headers[0];
    key = Object.keys(header)[0];
    value = header[key];

    callback();
    callback(new Error());
};
