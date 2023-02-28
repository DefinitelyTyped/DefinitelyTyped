import { Handler } from '../handler';

export type MSKHandler = Handler<MSKEvent, void>;

export interface MSKRecordHeader {
    [headerKey: string]: number[];
}

export interface MSKRecord {
    topic: string;
    partition: number;
    offset: number;
    timestamp: number;
    timestampType: 'CREATE_TIME' | 'LOG_APPEND_TIME';
    key: string;
    value: string;
    headers: MSKRecordHeader[];
}

export interface MSKEvent {
    eventSource: 'aws:kafka';
    eventSourceArn: string;
    records: {
        [topic: string]: MSKRecord[];
    };
}
