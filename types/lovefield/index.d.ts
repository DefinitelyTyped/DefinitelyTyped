// Type definitions for Lovefield 2.1
// Project: http://google.github.io/lovefield/
// Definitions by: freshp86 <https://github.com/freshp86>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace lf {
  enum Order { ASC, DESC }

  enum Type {
    ARRAY_BUFFER,
    BOOLEAN,
    DATE_TIME,
    INTEGER,
    NUMBER,
    OBJECT,
    STRING
  }

  enum ConstraintAction {
    RESTRICT,
    CASCADE
  }

  enum ConstraintTiming {
    IMMEDIATE,
    DEFERRABLE
  }

  interface Binder {
    getIndex(): number;
  }

  interface Predicate {}
  interface Row {}
  type ValueLiteral = string|number|boolean|Date;

  interface PredicateProvider {
    eq(operand: ValueLiteral|schema.Column|Binder): Predicate;
    neq(operand: ValueLiteral|schema.Column|Binder): Predicate;
    lt(operand: ValueLiteral|schema.Column|Binder): Predicate;
    lte(operand: ValueLiteral|schema.Column|Binder): Predicate;
    gt(operand: ValueLiteral|schema.Column|Binder): Predicate;
    gte(operand: ValueLiteral|schema.Column|Binder): Predicate;
    match(operand: RegExp|Binder): Predicate;
    between(from: ValueLiteral|Binder, to: ValueLiteral|Binder): Predicate;
    in(values: Binder|ValueLiteral[]): Predicate;
    isNull(): Predicate;
    isNotNull(): Predicate;
  }

  function bind(index: number): Binder;

  interface TransactionStats {
    success(): boolean;
    insertedRowCount(): number;
    updatedRowCount(): number;
    deletedRowCount(): number;
    changedTableCount(): number;
  }

  interface Transaction {
    attach(query: query.Builder): Promise<Object[]>;
    begin(scope: schema.Table[]): Promise<void>;
    commit(): Promise<void>;
    exec(queries: query.Builder[]): Promise<Object[][]>;
    rollback(): Promise<void>;
    stats(): TransactionStats;
  }

  enum TransactionType { READ_ONLY, READ_WRITE }

  interface Database {
    close(): void;
    createTransaction(type?: TransactionType): Transaction;
    delete(): query.Delete;
    export(): Promise<Object>;
    getSchema(): schema.Database;
    import(data: Object): Promise<void>;
    insertOrReplace(): query.Insert;
    insert(): query.Insert;
    observe(query: query.Select, callback: Function): void;
    select(...columns: schema.Column[]): query.Select;
    unobserve(query: query.Select, callback: Function): void;
    update(table: schema.Table): query.Update;
  }

  namespace query {
    interface Builder {
      bind(...values: any[]): Builder;
      exec(): Promise<Object[]>;
      explain(): string;
      toSql(): string;
    }

    interface Delete extends Builder {
      from(table: schema.Table): Delete;
      where(predicate: Predicate): Delete;
    }

    interface Insert extends Builder {
      into(table: schema.Table): Insert;
      values(rows: Row[]|Binder|Binder[]): Insert;
    }

    interface Select extends Builder {
      from(...tables: schema.Table[]): Select;
      groupBy(...columns: schema.Column[]): Select;
      innerJoin(table: schema.Table, predicate: Predicate): Select;
      leftOuterJoin(table: schema.Table, predicate: Predicate): Select;
      limit(numberOfRows: Binder|number): Select;
      orderBy(column: schema.Column, order?: Order): Select;
      skip(numberOfRows: Binder|number): Select;
      where(predicate: Predicate): Select;
    }

    interface Update extends Builder {
      set(column: schema.Column, value: any): Update;
      where(predicate: Predicate): Update;
    }
  }  // module query

  namespace raw {
    interface BackStore {
      getRawDBInstance(): any;
      getRawTransaction(): any;
      dropTable(tableName: string): Promise<void>;
      addTableColumn(
          tableName: string, columnName: string,
          defaultValue: string|boolean|number|Date|ArrayBuffer): Promise<void>;
      dropTableColumn(tableName: string, columnName: string): Promise<void>;
      renameTableColumn(
          tableName: string, oldColumnName: string,
          newColumnName: string): Promise<void>;
      createRow(payload: Object): Row;
      getVersion(): number;
      dump(): Object[];
    }
  }  // module raw

  namespace schema {
    enum DataStoreType {
      INDEXED_DB,
      MEMORY,
      LOCAL_STORAGE,
      FIREBASE,
      WEB_SQL
    }

    interface DatabasePragma {
      enableBundledMode: boolean;
    }

    interface Database {
      name(): string;
      pragma(): DatabasePragma;
      tables(): Table[];
      table(tableName: string): Table;
      version(): number;
    }

    interface Column extends PredicateProvider {
      as(name: string): Column;
      getName(): string;
      getNormalizedName(): string;
    }

    interface ITable {
      as(name: string): Table;
      createRow(value: Object): Row;
      getName(): string;
    }

    type Table = ITable & { [index: string]: Column };

    interface ConnectOptions {
      onUpgrade?: (rawDb: raw.BackStore) => Promise<void>;
      storeType?: DataStoreType;
      webSqlDbSize?: number;
      // TODO(dpapad): firebase?
    }

    interface Builder {
      connect(options?: ConnectOptions): Promise<lf.Database>;
      createTable(tableName: string): TableBuilder;
      getSchema(): Database;
      setPragma(pragma: DatabasePragma): void;
    }

    interface IndexedColumn {
      autoIncrement: boolean;
      name: string;
      order: Order;
    }

    type RawForeignKeySpec = {
      local: string
      ref: string
      action?: ConstraintAction
      timing?: ConstraintTiming
    };

    interface TableBuilder {
      addColumn(name: string, type: Type): TableBuilder;
      addForeignKey(name: string, spec: RawForeignKeySpec): TableBuilder;
      addIndex(
          name: string, columns: string[]|IndexedColumn[],
          unique?: boolean, order?: Order): TableBuilder;
      addNullable(columns: string[]): TableBuilder;
      addPrimaryKey(
          columns: string[]|IndexedColumn[],
          autoInc?: boolean): TableBuilder;
      addUnique(name: string, columns: string[]): TableBuilder;
    }

    function create(dbName: string, dbVersion: number): Builder;
  }  // module schema

  namespace op {
    function and(...args: Predicate[]): Predicate;
    function not(operand: Predicate): Predicate;
    function or(...args: Predicate[]): Predicate;
  }  // module op

  namespace fn {
    function avg(column: schema.Column): schema.Column;
    function count(column?: schema.Column): schema.Column;
    function distinct(column: schema.Column): schema.Column;
    function geomean(column: schema.Column): schema.Column;
    function max(column: schema.Column): schema.Column;
    function min(column: schema.Column): schema.Column;
    function stddev(column: schema.Column): schema.Column;
    function sum(column: schema.Column): schema.Column;
  }  // module fn
}  // module lf

export = lf;
export as namespace lf;
