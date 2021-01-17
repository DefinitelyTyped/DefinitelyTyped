import { DocumentClient } from 'aws-sdk/clients/dynamodb';

type Key = any;
type GenericCallback = (err: Error, data: any) => void;
type DeleteCallback = GenericCallback;
type GetCallback = GenericCallback;
type PutCallback = GenericCallback;
type QueryCallback = GenericCallback;
type ScanCallback = GenericCallback;
type UpdateCallback = GenericCallback;

interface ArcTable {
    delete(key: Key, callback: DeleteCallback): void;
    get(key: Key, callback: GetCallback): void;
    put(key: Key, callback: PutCallback): void;
    query(params: any, callback: QueryCallback): void;
    scan(params: any, callback: ScanCallback): void;
    update(params: any, callback: UpdateCallback): void;
}

type ArcDataIndexable = ArcData & {
    [tableName: string]: ArcTable;
};

interface ArcData {
    _name(tableName: string): string;
}

export interface ArcTables {
    (): Promise<ArcDataIndexable>;
    doc: DocumentClient;
}
