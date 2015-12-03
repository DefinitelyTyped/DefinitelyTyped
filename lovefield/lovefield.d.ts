// Type definitions for Lovefield v2.0.62
// Project: http://google.github.io/lovefield/
// Definitions by: freshp86 <https://github.com/freshp86>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../es6-promise/es6-promise.d.ts"/>

declare module lf {
  export enum Order { ASC, DESC }

  export enum Type {
    ARRAY_BUFFER,
    BOOLEAN,
    DATE_TIME,
    INTEGER,
    NUMBER,
    OBJECT,
    STRING
  }

  export enum ConstraintAction {
    RESTRICT,
    CASCADE
  }

  export enum ConstraintTiming {
    IMMEDIATE,
    DEFERRABLE
  }

  export interface Binder {
    getIndex(): number
  }

  export interface Predicate {}
  export interface Row {}
  type ValueLiteral = string|number|boolean|Date;

  export interface PredicateProvider {
    eq(operand: ValueLiteral|schema.Column|Binder): Predicate
    neq(operand: ValueLiteral|schema.Column|Binder): Predicate
    lt(operand: ValueLiteral|schema.Column|Binder): Predicate
    lte(operand: ValueLiteral|schema.Column|Binder): Predicate
    gt(operand: ValueLiteral|schema.Column|Binder): Predicate
    gte(operand: ValueLiteral|schema.Column|Binder): Predicate
    match(operand: RegExp|Binder): Predicate
    between(from: ValueLiteral|Binder, to: ValueLiteral|Binder): Predicate
    in(values: Binder|Array<ValueLiteral>): Predicate
    isNull(): Predicate
    isNotNull(): Predicate
  }

  function bind(index: number): Binder;

  export interface Transaction {
    attach(query: query.Builder): Promise<Array<Object>>
    begin(scope: Array<schema.Table>): Promise<void>
    commit(): Promise<void>
    exec(queries: Array<query.Builder>): Promise<Array<Array<Object>>>
    rollback(): Promise<void>
  }

  export enum TransactionType { READ_ONLY, READ_WRITE }

  export interface Database {
    close(): void
    createTransaction(type?: TransactionType): Transaction
    delete(): query.Delete
    export(): Promise<Object>
    getSchema(): schema.Database
    import(data: Object): Promise<void>
    insertOrReplace(): query.Insert
    insert(): query.Insert
    observe(query: query.Select, callback: Function): void
    select(...columns: schema.Column[]): query.Select
    unobserve(query: query.Select, callback: Function): void
    update(table: schema.Table): query.Update
  }

  module query {
    export interface Builder {
      bind(...values: any[]): Builder
      exec(): Promise<Array<Object>>
      explain(): string
      toSql(): string
    }

    export interface Delete extends Builder {
      from(table: schema.Table): Delete
      where(predicate: Predicate): Delete
    }

    export interface Insert extends Builder {
      into(table: schema.Table): Insert
      values(rows: Array<Row>|Binder|Array<Binder>): Insert
    }

    export interface Select extends Builder {
      from(...tables: schema.Table[]): Select
      groupBy(...columns: schema.Column[]): Select
      innerJoin(table: schema.Table, predicate: Predicate): Select
      leftOuterJoin(table: schema.Table, predicate: Predicate): Select
      limit(numberOfRows: Binder|number): Select
      orderBy(column: schema.Column, order?: Order): Select
      skip(numberOfRows: Binder|number): Select
      where(predicate: Predicate): Select
    }

    export interface Update extends Builder {
      set(column: schema.Column, value: any): Update
      where(predicate: Predicate): Update
    }

  }  // module query


  module raw {
    export interface BackStore {
      getRawDBInstance(): any
      getRawTransaction(): any
      dropTable(tableName: string): Promise<void>
      addTableColumn(
          tableName: string, columnName: string,
          defaultValue: string|boolean|number|Date|ArrayBuffer): Promise<void>
      dropTableColumn(tableName: string, columnName:string): Promise<void>
      renameTableColumn(
          tableName: string, oldColumnName: string,
          newColumnName:string) : Promise<void>
      createRow(payload: Object): Row
      getVersion(): number
      dump(): Array<Object>
    }
  }  // module raw


  module schema {
    export enum DataStoreType {
      FIREBASE,
      INDEXED_DB,
      LOCAL_STORAGE,
      MEMORY,
      WEB_SQL
    }

    export interface DatabasePragma {
      enableBundledMode: boolean
    }

    export interface Database {
      name(): string
      pragma(): DatabasePragma
      tables(): Array<schema.Table>
      table(tableName: string): schema.Table
      version(): number
    }

    export interface Column extends PredicateProvider {
      as(name: string): Column
      getName(): string
      getNormalizedName(): string
    }

    export interface Table {
      as(name: string): Table
      createRow(value: Object): Row
      getName(): string
    }

    export interface ConnectOptions {
      onUpgrade?: (rawDb: raw.BackStore) => Promise<void>
      storeType?: DataStoreType
      webSqlDbSize?: number
      // TODO(dpapad): firebase?
    }

    export interface Builder {
      connect(options: ConnectOptions): Promise<lf.Database>
      createTable(tableName: string): TableBuilder
      getSchema(): Database
      setPragma(pragma: DatabasePragma): void
    }

    export interface IndexedColumn {
      autoIncrement: boolean
      name: string
      order: Order
    }

    type RawForeignKeySpec = {
      local: string
      ref: string
      action: lf.ConstraintAction
      timing: lf.ConstraintAction
    }

    export interface TableBuilder {
      addColumn(name: string, type: lf.Type): TableBuilder
      addForeignKey(name: string, spec: RawForeignKeySpec): TableBuilder
      addIndex(
          name: string, columns: Array<string>|Array<IndexedColumn>,
          unique?: boolean, order?: Order): TableBuilder
      addNullable(columns: Array<string>): TableBuilder
      addPrimaryKey(
          columns: Array<string>|Array<IndexedColumn>,
          autoInc?: boolean): TableBuilder
      addUnique(name: string, columns: Array<string>): TableBuilder
    }

    function create(dbName: string, dbVersion: number): Builder
  }  // module schema


  module op {
    function and(...args: Predicate[]): Predicate;
    function not(operand: Predicate): Predicate;
    function or(...args: Predicate[]): Predicate;
  }  // module op


  module fn {
    function avg(column: schema.Column): schema.Column
    function count(column?: schema.Column): schema.Column
    function distinct(column: schema.Column): schema.Column
    function geomean(column: schema.Column): schema.Column
    function max(column: schema.Column): schema.Column
    function min(column: schema.Column): schema.Column
    function stddev(column: schema.Column): schema.Column
    function sum(column: schema.Column): schema.Column
  }  // module fn

}  // module lf

declare module 'lf' {
  export = lf;
}
