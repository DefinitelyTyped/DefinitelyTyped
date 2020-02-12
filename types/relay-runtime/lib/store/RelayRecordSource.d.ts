import { MutableRecordSource, RecordMap, Record } from './RelayStoreTypes';
import { DataID } from '../util/RelayRuntimeTypes';
import { RecordState } from './RelayRecordState';

export class RelayRecordSource implements MutableRecordSource {
    constructor(records?: RecordMap);

    static create(records?: RecordMap): MutableRecordSource;

    get(dataID: DataID): Record | null | undefined;
    getRecordIDs(): DataID[];
    getStatus(dataID: DataID): RecordState;
    has(dataID: DataID): boolean;
    size(): number;
    toJSON(): { [key: string]: Record };
    clear(): void;
    delete(dataID: DataID): void;
    remove(dataID: DataID): void;
    set(dataID: DataID, record: Record): void;
}
