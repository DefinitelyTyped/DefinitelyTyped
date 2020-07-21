// Type definitions for deta 0.0
// Project: https://github.com/deta/deta-javascript
// Definitions by: Felix Mattick <https://github.com/kognise>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Deta {
    export type Serializable = { [key: string]: Serializable } | string | number | boolean | Serializable[];

    export interface DetaInstance {
        Base(db: string): DetaBase;
    }

    export interface TrimUpdate {}
    export interface IncrementUpdate {}
    export interface AppendUpdate {}
    export interface PrependUpdate {}

    export interface DetaBaseUpdates {
        [key: string]: Serializable | TrimUpdate | AppendUpdate | PrependUpdate | IncrementUpdate;
    }

    export interface DetaBaseQuery {
        [key: string]: string | number | boolean | DetaBaseQuery;
    }

    export interface DetaBaseUtil {
        trim(): TrimUpdate;
        increment(amount?: number): IncrementUpdate;
        append(value: Serializable): AppendUpdate;
        prepend(value: Serializable): PrependUpdate;
    }

    export interface DetaBase {
        put<Data = Serializable>(data: Data, key?: string): Promise<Data>;
        putMany<Items = Serializable[]>(items: Items): Promise<Items>;
        insert<Data = Serializable>(data: Data, key: string): Promise<Data>;
        get(key: string): Promise<Serializable | null>;
        delete(key: string): Promise<void>;
        fetch(query?: DetaBaseQuery, limit?: number, buffer?: number): Promise<AsyncIterable<Serializable[]>>;
        update(updates: DetaBaseUpdates, key: string): Promise<void>;

        util: DetaBaseUtil;
    }

    export function Deta(projectKey: string): Deta.DetaInstance;
}

export = Deta;
