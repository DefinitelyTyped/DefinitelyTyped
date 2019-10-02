import { MutableRecordSource, RecordMap, Record } from './RelayStoreTypes';
import { DataID } from '../util/RelayRuntimeTypes';
import { RecordState } from './RelayRecordState';

export class RelayRecordSource {
    constructor(records?: RecordMap);

    static create(records?: RecordMap): MutableRecordSource;

    clear(): void;
    delete(dataID: DataID): void;
    get(dataID: DataID): Record;
    getRecordIDs(): string[];
    getStatus(dataID: DataID): RecordState;
    has(dataID: DataID): boolean;
    load(dataID: DataID, callback: (error: Error | null | undefined, record: Record | null | undefined) => void): void;
    remove(dataID: DataID): void;
    set(dataID: DataID, record: Record): void;
    size(): number;
    toJSON(): Record;
}
