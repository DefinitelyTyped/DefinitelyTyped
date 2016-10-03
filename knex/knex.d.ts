// Type definitions for Knex.js
// Project: https://github.com/tgriesser/knex
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../bluebird/bluebird-2.0.d.ts" />
/// <reference path="../node/node.d.ts" />

declare module "knex" {
  import Promise = require("bluebird");
  import * as events from "events";

  type Callback = Function;
  type Client = Function;
  type Value = string|number|boolean|Date|Array<string>|Array<number>|Array<Date>|Array<boolean>|Buffer|Knex.Raw;
  type ColumnName = string|Knex.Raw|Knex.QueryBuilder;
  type TableName = string|Knex.Raw|Knex.QueryBuilder;

  interface Knex extends Knex.QueryInterface {
    (tableName?: string): Knex.QueryBuilder;
    VERSION: string;
    __knex__: string;

    raw: Knex.RawBuilder;
    transaction: <R>(transactionScope: ((trx: Knex.Transaction) => void)) => Promise<any>;
    destroy(callback: Function): void;
    destroy(): Promise<void>;

    schema: Knex.SchemaBuilder;

    client: any;
    migrate: Knex.Migrator;
    seed: any;
    fn: Knex.FunctionHelper;
    on(eventName: string, callback: Function): Knex.QueryBuilder;
  }

  function Knex(config: Knex.Config) : Knex;

  namespace Knex {
    //
    // QueryInterface
    //

    interface QueryInterface {
      select: Select;
      as: As;
      columns: Select;
      column: Select;
      from: Table;
      into: Table;
      table: Table;
      distinct: Distinct;

      // Joins
      join: Join;
      joinRaw: JoinRaw;
      innerJoin: Join;
      leftJoin: Join;
      leftOuterJoin: Join;
      rightJoin: Join;
      rightOuterJoin: Join;
      outerJoin: Join;
      fullOuterJoin: Join;
      crossJoin: Join;

      // Wheres
      where: Where;
      andWhere: Where;
      orWhere: Where;
      whereNot: Where;
      andWhereNot: Where;
      orWhereNot: Where;
      whereRaw: WhereRaw;
      orWhereRaw: WhereRaw;
      andWhereRaw: WhereRaw;
      whereWrapped: WhereWrapped;
      havingWrapped: WhereWrapped;
      whereExists: WhereExists;
      orWhereExists: WhereExists;
      whereNotExists: WhereExists;
      orWhereNotExists: WhereExists;
      whereIn: WhereIn;
      orWhereIn: WhereIn;
      whereNotIn: WhereIn;
      orWhereNotIn: WhereIn;
      whereNull: WhereNull;
      orWhereNull: WhereNull;
      whereNotNull: WhereNull;
      orWhereNotNull: WhereNull;
      whereBetween: WhereBetween;
      orWhereBetween: WhereBetween;
      andWhereBetween: WhereBetween;
      whereNotBetween: WhereBetween;
      orWhereNotBetween: WhereBetween;
      andWhereNotBetween: WhereBetween;

      // Group by
      groupBy: GroupBy;
      groupByRaw: RawQueryBuilder;

      // Order by
      orderBy: OrderBy;
      orderByRaw: RawQueryBuilder;

      // Union
      union: Union;
      unionAll(callback: Function): QueryBuilder;

      // Having
      having: Having;
      andHaving: Having;
      havingRaw: RawQueryBuilder;
      orHaving: Having;
      orHavingRaw: RawQueryBuilder;

      // Paging
      offset(offset: number): QueryBuilder;
      limit(limit: number): QueryBuilder;

      // Aggregation
      count(columnName?: string): QueryBuilder;
      min(columnName: string): QueryBuilder;
      max(columnName: string): QueryBuilder;
      sum(columnName: string): QueryBuilder;
      avg(columnName: string): QueryBuilder;
      increment(columnName: string, amount?: number): QueryBuilder;
      decrement(columnName: string, amount?: number): QueryBuilder;

      // Others
      first(...columns: string[]): QueryBuilder;

      debug(enabled?: boolean): QueryBuilder;
      pluck(column: string): QueryBuilder;

      insert(data: any, returning?: string | string[]): QueryBuilder;
      update(data: any, returning?: string | string[]): QueryBuilder;
      update(columnName: string, value: Value, returning?: string | string[]): QueryBuilder;
      returning(column: string | string[]): QueryBuilder;

      del(returning?: string | string[]): QueryBuilder;
      delete(returning?: string | string[]): QueryBuilder;
      truncate(): QueryBuilder;

      transacting(trx: Transaction): QueryBuilder;
      connection(connection: any): QueryBuilder;

      clone(): QueryBuilder;
    }

    interface As {
      (columnName: string): QueryBuilder;
    }

    interface Select extends ColumnNameQueryBuilder {
    }

    interface Table {
      (tableName: string): QueryBuilder;
      (callback: Function): QueryBuilder;
    }

    interface Distinct extends ColumnNameQueryBuilder {
    }

    interface Join {
      (raw: Raw): QueryBuilder;
      (tableName: TableName, callback: (joinClause: JoinClause) => any): QueryBuilder;
      (tableName: TableName, columns: {[key: string]: string|Raw}): QueryBuilder;
      (tableName: TableName, raw: Raw): QueryBuilder;
      (tableName: TableName, column1: string, column2: string): QueryBuilder;
      (tableName: TableName, column1: string, raw: Raw): QueryBuilder;
      (tableName: TableName, column1: string, operator: string, column2: string): QueryBuilder;
    }

    interface JoinClause {
      on(raw: Raw): JoinClause;
      on(callback: Function): JoinClause;
      on(columns: {[key: string]: string|Raw}): JoinClause;
      on(column1: string, column2: string): JoinClause;
      on(column1: string, raw: Raw): JoinClause;
      on(column1: string, operator: string, column2: string): JoinClause;
      andOn(raw: Raw): JoinClause;
      andOn(callback: Function): JoinClause;
      andOn(columns: {[key: string]: string|Raw}): JoinClause;
      andOn(column1: string, column2: string): JoinClause;
      andOn(column1: string, raw: Raw): JoinClause;
      andOn(column1: string, operator: string, column2: string): JoinClause;
      orOn(raw: Raw): JoinClause;
      orOn(callback: Function): JoinClause;
      orOn(columns: {[key: string]: string|Raw}): JoinClause;
      orOn(column1: string, column2: string): JoinClause;
      orOn(column1: string, raw: Raw): JoinClause;
      orOn(column1: string, operator: string, column2: string): JoinClause;
      using(column: string|string[]|Raw|{[key: string]: string|Raw}): JoinClause;
      type(type: string): JoinClause;
    }

    interface JoinRaw {
      (tableName: string, binding?: Value): QueryBuilder;
    }

    interface Where extends WhereRaw, WhereWrapped, WhereNull {
      (raw: Raw): QueryBuilder;
      (callback: (queryBuilder: QueryBuilder) => any): QueryBuilder;
      (object: Object): QueryBuilder;
      (columnName: string, value: Value): QueryBuilder;
      (columnName: string, operator: string, value: Value): QueryBuilder;
      (columnName: string, operator: string, query: QueryBuilder): QueryBuilder;
    }

    interface WhereRaw extends RawQueryBuilder {
      (condition: boolean): QueryBuilder;
    }

    interface WhereWrapped {
      (callback: Function): QueryBuilder;
    }

    interface WhereNull {
      (columnName: string): QueryBuilder;
    }

    interface WhereIn {
      (columnName: string, values: Value[]): QueryBuilder;
      (columnName: string, callback: Function): QueryBuilder;
      (columnName: string, query: QueryBuilder): QueryBuilder;
    }

    interface WhereBetween {
      (columnName: string, range: [Value, Value]): QueryBuilder;
    }

    interface WhereExists {
      (callback: Function): QueryBuilder;
      (query: QueryBuilder): QueryBuilder;
    }

    interface WhereNull {
      (columnName: string): QueryBuilder;
    }

    interface WhereIn {
      (columnName: string, values: Value[]): QueryBuilder;
    }

    interface GroupBy extends RawQueryBuilder, ColumnNameQueryBuilder {
    }

    interface OrderBy {
      (columnName: string, direction?: string): QueryBuilder;
    }

    interface Union {
      (callback: Function, wrap?: boolean): QueryBuilder;
      (callbacks: Function[], wrap?: boolean): QueryBuilder;
      (...callbacks: Function[]): QueryBuilder;
      // (...callbacks: Function[], wrap?: boolean): QueryInterface;
    }

    interface Having extends RawQueryBuilder, WhereWrapped {
      (tableName: string, column1: string, operator: string, column2: string): QueryBuilder;
    }

    // commons

    interface ColumnNameQueryBuilder {
      (...columnNames: ColumnName[]): QueryBuilder;
      (columnNames: ColumnName[]): QueryBuilder;
    }

    interface RawQueryBuilder {
      (sql: string, ...bindings: Value[]): QueryBuilder;
      (sql: string, bindings: Value[]): QueryBuilder;
      (raw: Raw): QueryBuilder;
    }

    // Raw

    interface Raw extends events.EventEmitter, ChainableInterface {
      wrap(before: string, after: string): Raw;
    }

    interface RawBuilder {
      (value: Value): Raw;
      (sql: string, ...bindings: Value[]): Raw;
      (sql: string, bindings: Value[]): Raw;
      (sql: string, bindings: Object): Raw;
    }

    //
    // QueryBuilder
    //

    interface QueryBuilder extends QueryInterface, ChainableInterface {
      or: QueryBuilder;
      and: QueryBuilder;

      //TODO: Promise?
      columnInfo(column?: string): Promise<ColumnInfo>;

      forUpdate(): QueryBuilder;
      forShare(): QueryBuilder;

      toSQL(): Sql;

      on(event: string, callback: Function): QueryBuilder;
    }

    interface Sql {
      method: string;
      options: any;
      bindings: Value[];
      sql: string;
    }

    //
    // Chainable interface
    //

    interface ChainableInterface extends Promise<any> {
      toQuery(): string;
      options(options: any): QueryBuilder;
      stream(options?: any, callback?: (builder: QueryBuilder) => any): QueryBuilder;
      stream(callback?: (builder: QueryBuilder) => any): QueryBuilder;
      pipe(writable: any): QueryBuilder;
      exec(callback: Function): QueryBuilder;
    }

    interface Transaction extends QueryBuilder {
      commit: any;
      rollback: any;
      raw: Knex.RawBuilder;
    }

    //
    // Schema builder
    //

    interface SchemaBuilder extends Promise<any> {
      createTable(tableName: string, callback: (tableBuilder: CreateTableBuilder) => any): SchemaBuilder;
      createTableIfNotExists(tableName: string, callback: (tableBuilder: CreateTableBuilder) => any): SchemaBuilder;
      renameTable(oldTableName: string, newTableName: string): Promise<void>;
      dropTable(tableName: string): SchemaBuilder;
      hasTable(tableName: string): Promise<boolean>;
      hasColumn(tableName: string, columnName: string): Promise<boolean>;
      table(tableName: string, callback: (tableBuilder: AlterTableBuilder) => any): Promise<void>;
      dropTableIfExists(tableName: string): Promise<void>;
      raw(statement: string): SchemaBuilder;
      withSchema(schemaName: string): SchemaBuilder;
    }

    interface TableBuilder {
      increments(columnName?: string): ColumnBuilder;
      bigIncrements(columnName?: string): ColumnBuilder;
      dropColumn(columnName: string): TableBuilder;
      dropColumns(...columnNames: string[]): TableBuilder;
      renameColumn(from: string, to: string): ColumnBuilder;
      integer(columnName: string): ColumnBuilder;
      bigInteger(columnName: string): ColumnBuilder;
      text(columnName: string, textType?: string): ColumnBuilder;
      string(columnName: string, length?: number): ColumnBuilder;
      float(columnName: string, precision?: number, scale?: number): ColumnBuilder;
      decimal(columnName: string, precision?: number, scale?: number): ColumnBuilder;
      boolean(columnName: string): ColumnBuilder;
      date(columnName: string): ColumnBuilder;
      dateTime(columnName: string): ColumnBuilder;
      time(columnName: string): ColumnBuilder;
      timestamp(columnName: string): ColumnBuilder;
      timestamps(): ColumnBuilder;
      binary(columnName: string): ColumnBuilder;
      enum(columnName: string, values: Value[]): ColumnBuilder;
      enu(columnName: string, values: Value[]): ColumnBuilder;
      json(columnName: string): ColumnBuilder;
      jsonb(columnName: string): ColumnBuilder;
      uuid(columnName: string): ColumnBuilder;
      comment(val: string): TableBuilder;
      specificType(columnName: string, type: string): ColumnBuilder;
      primary(columnNames: string[]) : TableBuilder;
      index(columnNames: string[], indexName?: string, indexType?: string) : TableBuilder;
      unique(columnNames: string[], indexName?: string) : TableBuilder;
      foreign(column: string): ForeignConstraintBuilder;
      foreign(columns: string[]): MultikeyForeignConstraintBuilder;
      dropForeign(columnNames: string[], foreignKeyName?: string): TableBuilder;
    }

    interface CreateTableBuilder extends TableBuilder {
    }

    interface MySqlTableBuilder extends CreateTableBuilder {
      engine(val: string): CreateTableBuilder;
      charset(val: string): CreateTableBuilder;
      collate(val: string): CreateTableBuilder;
    }

    interface AlterTableBuilder extends TableBuilder {
    }

    interface MySqlAlterTableBuilder extends AlterTableBuilder {
    }

    interface ColumnBuilder {
      index(indexName?: string): ColumnBuilder;
      primary(): ColumnBuilder;
      unique(): ColumnBuilder;
      references(columnName: string): ReferencingColumnBuilder;
      onDelete(command: string): ColumnBuilder;
      onUpdate(command: string): ColumnBuilder;
      defaultTo(value: Value): ColumnBuilder;
      unsigned(): ColumnBuilder;
      notNullable(): ColumnBuilder;
      nullable(): ColumnBuilder;
      comment(value: string): ColumnBuilder;
    }

    interface ForeignConstraintBuilder {
        references(columnName: string): ReferencingColumnBuilder;
    }

    interface MultikeyForeignConstraintBuilder {
        references(columnNames: string[]): ReferencingColumnBuilder;
    }

    interface PostgreSqlColumnBuilder extends ColumnBuilder {
      index(indexName?: string, indexType?: string): ColumnBuilder;
    }

    interface ReferencingColumnBuilder {
      inTable(tableName: string): ColumnBuilder;
    }

    interface AlterColumnBuilder extends ColumnBuilder {
    }

    interface MySqlAlterColumnBuilder extends AlterColumnBuilder {
      first(): AlterColumnBuilder;
      after(columnName: string): AlterColumnBuilder;
    }

    //
    // Configurations
    //

    interface ColumnInfo {
      defaultValue: Value;
      type: string;
      maxLength: number;
      nullable: boolean;
    }

    interface Config {
      debug?: boolean;
      client?: string;
      dialect?: string;
      connection?: string|ConnectionConfig|MariaSqlConnectionConfig|
        Sqlite3ConnectionConfig|SocketConnectionConfig;
      pool?: PoolConfig;
      migrations?: MigratorConfig;
      acquireConnectionTimeout?: number;
      useNullAsDefault?: boolean;
      searchPath?: string;
    }

    interface ConnectionConfig {
      host: string;
      user: string;
      password: string;
      database: string;
      debug?: boolean;
    }

    // Config object for mariasql: https://github.com/mscdex/node-mariasql#client-methods
    interface MariaSqlConnectionConfig {
      user?: string;
      password?: string;
      host?: string;
      port?: number;
      unixSocket?: string;
      protocol?: string;
      db?: string;
      keepQueries?: boolean;
      multiStatements?: boolean;
      connTimeout?: number;
      pingInterval?: number;
      secureAuth?: boolean;
      compress?: boolean;
      ssl?: boolean|MariaSslConfiguration;
      local_infile?: boolean;
      read_default_file?: string;
      read_default_group?: string;
      charset?: string;
      streamHWM?: number;
    }

    interface MariaSslConfiguration {
      key?: string;
      cert?: string;
      ca?: string;
      capath?: string;
      cipher?: string;
      rejectUnauthorized?: boolean;
    }

    /** Used with SQLite3 adapter */
    interface Sqlite3ConnectionConfig {
      filename: string;
      debug?: boolean;
    }

    interface SocketConnectionConfig {
      socketPath: string;
      user: string;
      password: string;
      database: string;
      debug?: boolean;
    }

    interface PoolConfig {
      name?: string;
      create?: Function;
      afterCreate?: Function;
      destroy?: Function;
      beforeDestroy?: Function;
      min?: number;
      max?: number;
      refreshIdle?: boolean;
      idleTimeoutMillis?: number;
      reapIntervalMillis?: number;
      returnToHead?: boolean;
      priorityRange?: number;
      validate?: Function;
      log?: boolean;
    }

    interface MigratorConfig {
      directory?: string;
      extension?: string;
      tableName?: string;
      disableTransactions?: boolean;
    }

    interface Migrator {
      make(name:string, config?: MigratorConfig):Promise<string>;
      latest(config?: MigratorConfig):Promise<any>;
      rollback(config?: MigratorConfig):Promise<any>;
      status(config?: MigratorConfig):Promise<number>;
      currentVersion(config?: MigratorConfig):Promise<string>;
    }

    interface FunctionHelper {
      now(): Raw;
    }
  }

  export = Knex;
}
