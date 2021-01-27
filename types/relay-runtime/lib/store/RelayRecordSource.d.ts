import { MutableRecordSource, RecordMap, Record } from './RelayStoreTypes';
import { DataID } from '../util/RelayRuntimeTypes';
import { RecordState } from './RelayRecordState';

export class RelayRecordSource implements MutableRecordSource {
    constructor(records?: RecordMap);

    static create(records?: RecordMap): MutableRecordSource;
    // tslint:disable-next-line:no-unnecessary-generics
    get<T extends object = {}>(dataID: DataID): Record<T> | null | undefined;
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
