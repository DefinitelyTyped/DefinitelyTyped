// JSBox Sqlite API TypeScript Declaration

declare namespace SqliteTypes {
    interface SqliteInstance {
        update(sql: string | UpdateQuery): UpdateResult;
        query(sql: string | Query, callback: (rs: ResultSet, err: string) => void): void;
        beginTransaction(): void;
        commit(): void;
        rollback(): void;
        close(): void;
    }

    interface SqliteQueueInstance {
        operations(callback: (db: SqliteInstance) => void): void;
        transaction(callback: (db: SqliteInstance) => void): void;
        close(): void;
    }

    interface UpdateQuery {
        sql: string;
        args: any[];
    }

    interface UpdateResult {
        result: boolean;
        error: string;
    }

    interface Query {
        sql: string;
        args: any[];
    }

    interface ResultSet {
        next(): boolean;
        get(column: string | number): any;
        close(): void;
        readonly columnCount: number;
        readonly values: any[];
        nameForIndex(index: number): string;
        indexForName(name: string): number;
        readonly query: string;
        isNull(indexOrName: number | string): boolean;
    }
}

interface JBSqlite {
    open(path: string): SqliteTypes.SqliteInstance;
    dbQueue(path: string): SqliteTypes.SqliteQueueInstance;
    close(db: SqliteTypes.SqliteInstance): void;
}

declare const $sqlite: JBSqlite;
