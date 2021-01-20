import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export type Key = any;
export type GenericCallback = (err: Error, data: any) => void;
export type DeleteCallback = GenericCallback;
export type GetCallback = GenericCallback;
export type PutCallback = GenericCallback;
export type QueryCallback = GenericCallback;
export type ScanCallback = GenericCallback;
export type UpdateCallback = GenericCallback;

export interface ArcTable {
    delete(key: Key, callback: DeleteCallback): void;
    get(key: Key, callback: GetCallback): void;
    put(key: Key, callback: PutCallback): void;
    query(params: any, callback: QueryCallback): void;
    scan(params: any, callback: ScanCallback): void;
    update(params: any, callback: UpdateCallback): void;
}

export type ArcDataIndexable = ArcData & {
    [tableName: string]: ArcTable;
};

export interface ArcData {
    _name(tableName: string): string;
}

export interface ArcTables {
    (): Promise<ArcDataIndexable>;
    doc: DocumentClient;
}
