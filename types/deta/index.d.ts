// Type definitions for deta 0.0
// Project: https://github.com/deta/deta-javascript
// Definitions by: Felix Mattick <https://github.com/kognise>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Serializable = { [key: string]: any } | string | number | boolean | ReadonlyArray<any>;

export interface DetaInstance {
    Base(db: string): DetaBase;
}

export interface DetaBaseUpdates {
    [key: string]: Serializable | {};
}

export interface DetaBaseQuery {
    [key: string]: string | number | boolean | DetaBaseQuery;
}

export interface DetaBaseUtil {
    trim(): {};
    increment(amount?: number): {};
    append(value: Serializable): {};
    prepend(value: Serializable): {};
}

export interface DetaBase {
    put<Data = Serializable>(data: Data, key?: string): Promise<Data>;
    putMany<Items = ReadonlyArray<Serializable>>(items: Items): Promise<Items>;
    insert<Data = Serializable>(data: Data, key: string): Promise<Data>;
    get(key: string): Promise<Serializable | null>;
    delete(key: string): Promise<void>;
    fetch(query?: DetaBaseQuery, limit?: number, buffer?: number): Promise<AsyncIterable<ReadonlyArray<Serializable>>>;
    update(updates: DetaBaseUpdates, key: string): Promise<void>;

    util: DetaBaseUtil;
}

export function Deta(projectKey: string, host?: string): DetaInstance;
