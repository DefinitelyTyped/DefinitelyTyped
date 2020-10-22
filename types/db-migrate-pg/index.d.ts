// Type definitions for db-migrate-pg
// Project: https://github.com/db-migrate/pg
// Definitions by: nickiannone <https://github.com/nickiannone>
// Definitions: https://github.com/nickiannone/DefinitelyTyped
// TypeScript Version: 3.2

import * as pg from "pg";
import DbMigrateBase = require("db-migrate-base");
import * as Promise from "bluebird";

// Yes, this is a dummy interface for now; the current implementation of the pg driver doesn't need any options.
export interface CreateDatabaseOptions {}

export interface DropDatabaseOptions {
  ifExists?: boolean;
}

export interface CreateSequenceOptions {
  temp?: boolean;
}

export interface SwitchDatabaseOptions {
  database?: string;
}

export interface DropSequenceOptions {
  ifExists?: boolean;
  cascade?: boolean;
  restrict?: boolean;
}

export interface ColumnConstraint {
  foreignKey: (callback: DbMigrateBase.CallbackFunction) => void;
  constraints: string;
}

export interface ColumnConstraintOptions {
  emitPrimaryKey?: boolean;
}

export class PgDriver extends DbMigrateBase {
  constructor(connection: pg.Client, schema: string, intern: DbMigrateBase.InternalOptions);
  createDatabase(dbName: string, optionsOrCb: CreateDatabaseOptions | DbMigrateBase.CallbackFunction, callback?: DbMigrateBase.CallbackFunction): void;
  dropDatabase(dbName: string, optionsOrCb: DropDatabaseOptions | DbMigrateBase.CallbackFunction, callback?: DbMigrateBase.CallbackFunction): void;
  createSequence(sqName: string, optionsOrCb: CreateSequenceOptions | DbMigrateBase.CallbackFunction, callback?: DbMigrateBase.CallbackFunction): void;
  switchDatabase(options: string | SwitchDatabaseOptions, callback: DbMigrateBase.CallbackFunction): void;
  dropSequence(dbName: string, optionsOrCb: DropSequenceOptions | DbMigrateBase.CallbackFunction, callback?: DbMigrateBase.CallbackFunction): void;
  createColumnConstraint(spec: DbMigrateBase.ColumnSpec, options: ColumnConstraintOptions, tableName: string, columnName: string): ColumnConstraint;

  createDatabaseAsync(dbName: string, options?: CreateDatabaseOptions): Promise<any>;
  dropDatabaseAsync(dbName: string, options?: DropDatabaseOptions): Promise<any>;
  createSequenceAsync(sqName: string, options?: CreateSequenceOptions): Promise<any>;
  switchDatabaseAsync(options: string | SwitchDatabaseOptions): Promise<any>;
  dropSequenceAsync(dbName: string, options?: DropSequenceOptions): Promise<any>;
}
