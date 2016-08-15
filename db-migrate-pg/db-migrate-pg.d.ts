// Type definitions for db-migrate-pg
// Project: https://github.com/db-migrate/pg
// Definitions by: nickiannone https://github.com/nickiannone
// Definitions: https://github.com/nickiannone/DefinitelyTyped

/// <reference path="../db-migrate/db-migrate.d.ts"/>
/// <reference path="../pg/pg.d.ts" />

declare module "DbMigratePg" {

  import * as pg from "pg";
  import * as DbMigrate from "DbMigrate";

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
    foreignKey: (callback: DbMigrate.CallbackFunction) => void;
    constraints: string;
  }
  
  export interface ColumnConstraintOptions {
    emitPrimaryKey?: boolean;
  }

  export class PgDriver extends DbMigrate.Base {
    constructor(connection: pg.Client, schema: string, intern: DbMigrate.InternalOptions);
    createDatabase(dbName: string, optionsOrCb: CreateDatabaseOptions | DbMigrate.CallbackFunction, callback?: DbMigrate.CallbackFunction): void;
    dropDatabase(dbName: string, optionsOrCb: DropDatabaseOptions | DbMigrate.CallbackFunction, callback?: DbMigrate.CallbackFunction): void;
    createSequence(sqName: string, optionsOrCb: CreateSequenceOptions | DbMigrate.CallbackFunction, callback?: DbMigrate.CallbackFunction): void;
    switchDatabase(options: string | SwitchDatabaseOptions, callback: DbMigrate.CallbackFunction): void;
    dropSequence(dbName: string, optionsOrCb: DropSequenceOptions | DbMigrate.CallbackFunction, callback?: DbMigrate.CallbackFunction): void;
    createColumnConstraint(spec: DbMigrate.ColumnSpec, options: ColumnConstraintOptions, tableName: string, columnName: string): ColumnConstraint;

    createDatabaseAsync(dbName: string, options?: CreateDatabaseOptions): Promise<any>;
    dropDatabaseAsync(dbName: string, options?: DropDatabaseOptions): Promise<any>;
    createSequenceAsync(sqName: string, options?: CreateSequenceOptions): Promise<any>;
    switchDatabaseAsync(options: string | SwitchDatabaseOptions): Promise<any>;
    dropSequenceAsync(dbName: string, options?: DropSequenceOptions): Promise<any>;
  }
}