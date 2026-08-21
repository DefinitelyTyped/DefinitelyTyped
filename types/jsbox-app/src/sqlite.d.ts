// JSBox Sqlite API TypeScript Declaration

declare namespace SqliteTypes {
    interface SqliteInstance {
        update(sql: string | UpdateQuery): UpdateResult;
        query(sql: string | Query, callback: (rs: ResultSet, err: NSError) => void): void;
        beginTransaction(): void;
        commit(): void;
        rollback(): void;
        close(): void;
    }

    interface SqliteQueueInstance {
        operations(callback: (db: SqliteInstance) => void): void;
        /**
         * Return true from the callback to commit; false (or no return value at runtime)
         * rolls back the transaction.
         *
         * This behavior was verified on a real device. The JSBox documentation is
         * incorrect: despite naming the returned value `rollback`, returning true
         * actually commits, while returning false rolls back.
         */
        transaction(callback: (db: SqliteInstance) => boolean): void;
        close(): void;
    }

    interface UpdateQuery {
        sql: string;
        args: any[];
    }

    interface UpdateResult {
        result: boolean;
        error: NSError;
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
