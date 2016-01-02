// Type definitions for anydb-sql-migrations
// Project: https://github.com/spion/anydb-sql-migrations
// Definitions by: Gorgi Kosev <https://github.com/spion>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../bluebird/bluebird.d.ts" />
/// <reference path="../anydb-sql/anydb-sql.d.ts" />

declare module "anydb-sql-migrations" {
    import Promise = require('bluebird');
    import { Column, Table, Transaction, AnydbSql } from 'anydb-sql';
    export interface Migration {
        version: string;
    }
    export interface MigrationsTable extends Table<Migration> {
        version: Column<string>;
    }
    export interface MigFn {
        (tx: Transaction): Promise<any>;
    }
    export interface MigrationTask {
        up: MigFn;
        down: MigFn;
        name: string;
    }
    export function create(db: AnydbSql, tasks: any): {
        run: () => Promise<any>;
        migrateTo: (target?: string) => Promise<any>;
        check: (f: (m: {
            type: string;
            items: MigrationTask[];
        }) => any) => Promise<any>;
    };
}