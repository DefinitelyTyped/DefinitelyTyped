// Type definitions for db-migrate-base
// Project: https://github.com/db-migrate/db-migrate-base
// Definitions by: nickiannone <https://github.com/nickiannone>
// Definitions: https://github.com/nickiannone/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="node"/>

import * as Promise from "bluebird";

declare namespace Base {
    interface CallbackFunction { (err: any, response: any): void; }

    interface InternalModule {
        log: any;
        type: any;
    }

    interface InternalOptions {
        mod: InternalModule;
    }

    interface ColumnSpec {
        length?: number;
        type: string;
        unsigned?: boolean;
        primaryKey?: boolean;
        autoIncrement?: boolean;
        notNull?: boolean;
        unique?: boolean;
        defaultValue?: any;
        foreignKey?: ForeignKeySpec;
    }

    interface ForeignKeySpec {
        name: string;
        table: string;
        rules?: ForeignKeyRules;
        mapping: string | any;
    }

    interface ForeignKeyRules {
        onDelete: string;
        onUpdate: string;
    }

    interface RemoveForeignKeyOptions {
        dropIndex?: boolean;
    }

    interface ColumnDef {
        foreignKey?: any; // TODO Figure this out!
        constraints: string;
    }

    interface CreateTableOptions {
        columns?: Array<ColumnSpec>;
        ifNotExists?: boolean;
    }

    interface DropTableOptions {
        ifExists?: boolean;
    }
}

declare class Base {
  constructor(intern: Base.InternalOptions);

  close(callback?: Base.CallbackFunction): void;
  mapDataType(str: string): string;
  truncate(tableName: string, callback: Base.CallbackFunction): void;
  checkDBMS(dbms: any, callback: Base.CallbackFunction): void;
  createDatabase(...options: any[]): void;
  switchDatabase(...options: any[]): void;
  dropDatabase(...options: any[]): void;
  recurseCallbackArray(foreignKeys: Array<string>, callback: Base.CallbackFunction): void;
  bindForeignKey(tableName: string, columnName: string, fkOptions: Base.ForeignKeySpec): (callback: Base.CallbackFunction) => void;
  createColumnDef(name: string, spec: Base.ColumnSpec, options?: any): Base.ColumnDef;  // TODO Figure out a type for `options`!
  //createColumnConstraint(spec: Base.ColumnSpec, options?: any, ...implementationDefinedOptions: any[]): string;
  createMigrationsTable(callback: Base.CallbackFunction): void;
  createSeedsTable(callback: Base.CallbackFunction): void;
  createTable(tableName: string, options: any | Base.CreateTableOptions, callback: Base.CallbackFunction): void;
  dropTable(tableName: string, optionsOrCb?: Base.DropTableOptions | Base.CallbackFunction, callback?: Base.CallbackFunction): void;
  renameTable(tableName: string, newTableName: string, callback: Base.CallbackFunction): void;
  addColumn(tableName: string, columnName: string, columnSpec: Base.ColumnSpec, callback: Base.CallbackFunction): void;
  removeColumn(tableName: string, columnName: string, callback: Base.CallbackFunction): void;
  renameColumn(tableName: string, oldColumnName: string, newColumnName: string, callback: Base.CallbackFunction): void;
  changeColumn(tableName: string, columnName: string, columnSpec: Base.ColumnSpec, callback: Base.CallbackFunction): void;
  quoteDDLArr(arr: Array<string>): Array<string>;
  quoteArr(arr: Array<string>): Array<string>;
  addIndex(tableName: string, indexName: string, columns: string | Array<string>, uniqueOrCb?: boolean | Base.CallbackFunction, callback?: Base.CallbackFunction): void;
  insert(tableName: string, columnNameOrValueArray: any, valueArrayOrCb?: any | Base.CallbackFunction, callback?: Base.CallbackFunction): void;
  update(tableName: string, columnNameOrValueArray: any, valueArrayOrIds?: any, idsOrCb?: any | Base.CallbackFunction, callback?: Base.CallbackFunction): void;
  lookup(tableName: string, column: string, id?: any, callback?: Base.CallbackFunction): void;
  removeIndex(tableNameOrIndexName: string, indexNameOrCb?: string | Base.CallbackFunction, callback?: Base.CallbackFunction): void;
  addForeignKey(tableName: string, referencedTableName: string, keyName: string, fieldMapping: any, rules: Base.ForeignKeyRules, callback: Base.CallbackFunction): void;
  removeForeignKey(tableName: string, keyName: string, optionsOrCb?: Base.RemoveForeignKeyOptions | Base.CallbackFunction, callback?: Base.CallbackFunction): void;
  normalizeColumnSpec(spec: string | Base.ColumnSpec): Base.ColumnSpec;
  addMigrationRecord(name: string, callback: Base.CallbackFunction): void;
  addSeedRecord(name: string, callback: Base.CallbackFunction): void;
  startMigration(callback: Base.CallbackFunction): void;
  endMigration(callback: Base.CallbackFunction): void;
  runSql(sql?: string, paramsOrCb?: Array<any> | Base.CallbackFunction, callback?: Base.CallbackFunction): void;
  allLoadedMigrations(callback: Base.CallbackFunction): void;
  allLoadedSeeds(callback: Base.CallbackFunction): void;
  deleteMigration(migrationName: string, callback: Base.CallbackFunction): void;
  remove(table: string, ids: any, callback: Base.CallbackFunction): void;  // TODO Make ids match the type of ids in buildWhereClause(ids);
  buildWhereClause(ids: any): string;
  deleteSeed(seedName: string, callback: Base.CallbackFunction): void;
  all(sql: string, paramsOrCb?: Array<any> | Base.CallbackFunction, callback?: Base.CallbackFunction): void;
  escape(str: string): string;
  escapeString(str: string): string;
  escapeDDL(str: string): string;

  // Promisified methods
  closeAsync(): Promise<any>;
  truncateAsync(tableName: string): Promise<any>;
  checkDBMSAsync(dbms: any): Promise<any>;
  createDatabaseAsync(...options: any[]): Promise<any>;
  switchDatabaseAsync(...options: any[]): Promise<any>;
  dropDatabaseAsync(...options: any[]): Promise<any>;
  recurseCallbackArrayAsync(foreignKeys: Array<string>): Promise<any>;
  createMigrationsTableAsync(): Promise<any>;
  createSeedsTableAsync(): Promise<any>;
  createTableAsync(tableName: string, options: any | Base.CreateTableOptions): Promise<any>;
  dropTableAsync(tableName: string, options?: Base.DropTableOptions): Promise<any>;
  renameTableAsync(tableName: string, newTableName: string): Promise<any>;
  addColumnAsync(tableName: string, columnName: string, columnSpec: Base.ColumnSpec): Promise<any>;
  removeColumnAsync(tableName: string, columnName: string): Promise<any>;
  renameColumnAsync(tableName: string, oldColumnName: string, newColumnName: string): Promise<any>;
  changeColumnAsync(tableName: string, columnName: string, columnSpec: Base.ColumnSpec): Promise<any>;
  addIndexAsync(tableName: string, indexName: string, columns: string | Array<string>, unique?: boolean): Promise<any>;
  insertAsync(tableName: string, columnNameOrValueArray: any, valueArrayOrCb?: any | Base.CallbackFunction, callback?: Base.CallbackFunction): Promise<any>;
  updateAsync(tableName: string, columnNameOrValueArray: any, valueArrayOrIds?: any, idsOrCb?: any | Base.CallbackFunction, callback?: Base.CallbackFunction): Promise<any>;
  lookupAsync(tableName: string, column: string, id?: any, callback?: Base.CallbackFunction): Promise<any>;
  removeIndexAsync(tableNameOrIndexName: string, indexName?: string): Promise<any>;
  addForeignKeyAsync(tableName: string, referencedTableName: string, keyName: string, fieldMapping: any, rules: Base.ForeignKeyRules): Promise<any>;
  removeForeignKeyAsync(tableName: string, keyName: string, options?: Base.RemoveForeignKeyOptions): Promise<any>;
  addMigrationRecordAsync(name: string): Promise<any>;
  addSeedRecordAsync(name: string): Promise<any>;
  startMigrationAsync(): Promise<any>;
  endMigrationAsync(callback: Base.CallbackFunction): Promise<any>;
  runSqlAsync(sql?: string, params?: Array<any>): Promise<any>;
  allLoadedMigrationsAsync(): Promise<any>;
  allLoadedSeedsAsync(): Promise<any>;
  deleteMigrationAsync(migrationName: string): Promise<any>;
  removeAsync(table: string, ids: any): Promise<any>;
  deleteSeedAsync(seedName: string): Promise<any>;
  allAsync(sql: string, params?: Array<any>): Promise<any>;
}

export = Base;
