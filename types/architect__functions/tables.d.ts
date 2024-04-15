import * as DDB from "aws-sdk/clients/dynamodb";

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
    delete(key: Key): Promise<any>;
    get(key: Key, callback: GetCallback): void;
    get(key: Key): Promise<any>;
    put(key: Key, callback: PutCallback): void;
    put(key: Key): Promise<any>;
    query(params: any, callback: QueryCallback): void;
    query(params: any): Promise<any>;
    scan(params: any, callback: ScanCallback): void;
    scan(params: any): Promise<any>;
    update(params: any, callback: UpdateCallback): void;
    update(params: any): Promise<any>;
}

export type ArcDataIndexable = ArcData & {
    [tableName: string]: ArcTable;
};

export interface ArcData {
    _name(tableName: string): string | undefined;
    name(tableName: string): string | undefined;
}

export interface ArcTables {
    (): Promise<ArcDataIndexable>;
    doc: DDB.DocumentClient;
    db: DDB;
}
