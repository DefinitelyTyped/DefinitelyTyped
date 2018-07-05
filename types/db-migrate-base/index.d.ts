// Type definitions for db-migrate-base
// Project: https://github.com/db-migrate/db-migrate-base
// Definitions by: nickiannone <https://github.com/nickiannone>
// Definitions: https://github.com/nickiannone/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node"/>

import * as Promise from "bluebird";

export interface CallbackFunction { (err: any, response: any): void; }

export interface InternalModule {
  log: any;
  type: any;
}

export interface InternalOptions {
  mod: InternalModule;
}

export interface ColumnSpec {
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

export interface ForeignKeySpec {
  name: string;
  table: string;
  rules?: ForeignKeyRules;
  mapping: string | any;
}

export interface ForeignKeyRules {
  onDelete: string;
  onUpdate: string;
}

export interface RemoveForeignKeyOptions {
  dropIndex?: boolean;
}

export interface ColumnDef {
  foreignKey?: any; // TODO Figure this out!
  constraints: string;
}

export interface CreateTableOptions {
  columns?: Array<ColumnSpec>;
  ifNotExists?: boolean;
}

export interface DropTableOptions {
  ifExists?: boolean;
}

export class Base {
  constructor(intern: InternalOptions);

  close(callback?: CallbackFunction): void;
  mapDataType(str: string): string;
  truncate(tableName: string, callback: CallbackFunction): void;
  checkDBMS(dbms: any, callback: CallbackFunction): void;
  createDatabase(...options: any[]): void;
  switchDatabase(...options: any[]): void;
  dropDatabase(...options: any[]): void;
  recurseCallbackArray(foreignKeys: Array<string>, callback: CallbackFunction): void;
  bindForeignKey(tableName: string, columnName: string, fkOptions: ForeignKeySpec): (callback: CallbackFunction) => void;
  createColumnDef(name: string, spec: ColumnSpec, options?: any): ColumnDef;  // TODO Figure out a type for `options`!
  //createColumnConstraint(spec: ColumnSpec, options?: any, ...implementationDefinedOptions: any[]): string;
  createMigrationsTable(callback: CallbackFunction): void;
  createSeedsTable(callback: CallbackFunction): void;
  createTable(tableName: string, options: any | CreateTableOptions, callback: CallbackFunction): void;
  dropTable(tableName: string, optionsOrCb?: DropTableOptions | CallbackFunction, callback?: CallbackFunction): void;
  renameTable(tableName: string, newTableName: string, callback: CallbackFunction): void;
  addColumn(tableName: string, columnName: string, columnSpec: ColumnSpec, callback: CallbackFunction): void;
  removeColumn(tableName: string, columnName: string, callback: CallbackFunction): void;
  renameColumn(tableName: string, oldColumnName: string, newColumnName: string, callback: CallbackFunction): void;
  changeColumn(tableName: string, columnName: string, columnSpec: ColumnSpec, callback: CallbackFunction): void;
  quoteDDLArr(arr: Array<string>): Array<string>;
  quoteArr(arr: Array<string>): Array<string>;
  addIndex(tableName: string, indexName: string, columns: string | Array<string>, uniqueOrCb?: boolean | CallbackFunction, callback?: CallbackFunction): void;
  insert(tableName: string, columnNameOrValueArray: any, valueArrayOrCb?: any | CallbackFunction, callback?: CallbackFunction): void;
  update(tableName: string, columnNameOrValueArray: any, valueArrayOrIds?: any, idsOrCb?: any | CallbackFunction, callback?: CallbackFunction): void;
  lookup(tableName: string, column: string, id?: any, callback?: CallbackFunction): void;
  removeIndex(tableNameOrIndexName: string, indexNameOrCb?: string | CallbackFunction, callback?: CallbackFunction): void;
  addForeignKey(tableName: string, referencedTableName: string, keyName: string, fieldMapping: any, rules: ForeignKeyRules, callback: CallbackFunction): void;
  removeForeignKey(tableName: string, keyName: string, optionsOrCb?: RemoveForeignKeyOptions | CallbackFunction, callback?: CallbackFunction): void;
  normalizeColumnSpec(spec: string | ColumnSpec): ColumnSpec;
  addMigrationRecord(name: string, callback: CallbackFunction): void;
  addSeedRecord(name: string, callback: CallbackFunction): void;
  startMigration(callback: CallbackFunction): void;
  endMigration(callback: CallbackFunction): void;
  runSql(sql?: string, paramsOrCb?: Array<any> | CallbackFunction, callback?: CallbackFunction): void;
  allLoadedMigrations(callback: CallbackFunction): void;
  allLoadedSeeds(callback: CallbackFunction): void;
  deleteMigration(migrationName: string, callback: CallbackFunction): void;
  remove(table: string, ids: any, callback: CallbackFunction): void;  // TODO Make ids match the type of ids in buildWhereClause(ids);
  buildWhereClause(ids: any): string;
  deleteSeed(seedName: string, callback: CallbackFunction): void;
  all(sql: string, paramsOrCb?: Array<any> | CallbackFunction, callback?: CallbackFunction): void;
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
  createTableAsync(tableName: string, options: any | CreateTableOptions): Promise<any>;
  dropTableAsync(tableName: string, options?: DropTableOptions): Promise<any>;
  renameTableAsync(tableName: string, newTableName: string): Promise<any>;
  addColumnAsync(tableName: string, columnName: string, columnSpec: ColumnSpec): Promise<any>;
  removeColumnAsync(tableName: string, columnName: string): Promise<any>;
  renameColumnAsync(tableName: string, oldColumnName: string, newColumnName: string): Promise<any>;
  changeColumnAsync(tableName: string, columnName: string, columnSpec: ColumnSpec): Promise<any>;
  addIndexAsync(tableName: string, indexName: string, columns: string | Array<string>, unique?: boolean): Promise<any>;
  insertAsync(tableName: string, columnNameOrValueArray: any, valueArrayOrCb?: any | CallbackFunction, callback?: CallbackFunction): Promise<any>;
  updateAsync(tableName: string, columnNameOrValueArray: any, valueArrayOrIds?: any, idsOrCb?: any | CallbackFunction, callback?: CallbackFunction): Promise<any>;
  lookupAsync(tableName: string, column: string, id?: any, callback?: CallbackFunction): Promise<any>;
  removeIndexAsync(tableNameOrIndexName: string, indexName?: string): Promise<any>;
  addForeignKeyAsync(tableName: string, referencedTableName: string, keyName: string, fieldMapping: any, rules: ForeignKeyRules): Promise<any>;
  removeForeignKeyAsync(tableName: string, keyName: string, options?: RemoveForeignKeyOptions): Promise<any>;
  addMigrationRecordAsync(name: string): Promise<any>;
  addSeedRecordAsync(name: string): Promise<any>;
  startMigrationAsync(): Promise<any>;
  endMigrationAsync(callback: CallbackFunction): Promise<any>;
  runSqlAsync(sql?: string, params?: Array<any>): Promise<any>;
  allLoadedMigrationsAsync(): Promise<any>;
  allLoadedSeedsAsync(): Promise<any>;
  deleteMigrationAsync(migrationName: string): Promise<any>;
  removeAsync(table: string, ids: any): Promise<any>;
  deleteSeedAsync(seedName: string): Promise<any>;
  allAsync(sql: string, params?: Array<any>): Promise<any>;
}