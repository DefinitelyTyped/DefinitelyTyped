// Type definitions for Knex.js
// Project: https://github.com/tgriesser/knex
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../bluebird/bluebird.d.ts" />
/// <reference path="../node/node.d.ts" />

declare module "knex" {
  import Promise = require("bluebird");
  import * as events from "events";

  type Callback = Function;
  type Client = Function;
  type Value = string|number|boolean|Date|Array<string>|Array<number>|Array<Date>|Array<boolean>;
  type ColumnName<T> = string|Knex.Raw<T>|Knex.QueryBuilder<T>;
  type TableName<T> = string|Knex.Raw<T>|Knex.QueryBuilder<T>;

  interface Knex extends Knex.QueryInterface {
	<T>(tableName?: string): Knex.QueryBuilder<T>;
    VERSION: string;
    __knex__: string;

    raw: Knex.RawBuilder;
    transaction: <T>(transactionScope: ((trx: Knex.Transaction<T>) => void)) => Promise<any>;
    destroy(callback: Function): void;
    destroy(): Promise<void>;

    schema: Knex.SchemaBuilder;

    client: any;
    migrate: Knex.Migrator;
    seed: any;
    fn: any;
    on<T>(eventName: string, callback: Function): Knex.QueryBuilder<T>;
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
      unionAll<T>(callback: Function): QueryBuilder<T>;

      // Having
      having: Having;
      andHaving: Having;
      havingRaw: RawQueryBuilder;
      orHaving: Having;
      orHavingRaw: RawQueryBuilder;

      // Paging
      offset<T>(offset: number): QueryBuilder<T>;
      limit<T>(limit: number): QueryBuilder<T>;

      // Aggregation
      count<T>(columnName?: string): QueryBuilder<T>;
      min<T>(columnName: string): QueryBuilder<T>;
      max<T>(columnName: string): QueryBuilder<T>;
      sum<T>(columnName: string): QueryBuilder<T>;
      avg<T>(columnName: string): QueryBuilder<T>;
      increment<T>(columnName: string, amount?: number): QueryBuilder<T>;
      decrement<T>(columnName: string, amount?: number): QueryBuilder<T>;

      // Others
      first<T>(...columns: string[]): QueryBuilder<T>;

      debug<T>(enabled?: boolean): QueryBuilder<T>;
      pluck<T>(column: string): QueryBuilder<T>;

      insert<T>(data: any, returning?: string | string[]): QueryBuilder<T>;
      update<T>(data: any, returning?: string | string[]): QueryBuilder<T>;
      update<T>(columnName: string, value: Value, returning?: string | string[]): QueryBuilder<T>;
      returning<T>(column: string | string[]): QueryBuilder<T>;

      del<T>(returning?: string | string[]): QueryBuilder<T>;
      delete<T>(returning?: string | string[]): QueryBuilder<T>;
      truncate<T>(): QueryBuilder<T>;

      transacting<T>(trx: Transaction<T>): QueryBuilder<T>;
      connection<T>(connection: any): QueryBuilder<T>;

      clone<T>(): QueryBuilder<T>;
    }

    interface As {
      <T>(columnName: string): QueryBuilder<T>;
    }

    interface Select extends ColumnNameQueryBuilder {
    }

    interface Table {
      <T>(tableName: string): QueryBuilder<T>;
      <T>(callback: Function): QueryBuilder<T>;
    }

    interface Distinct extends ColumnNameQueryBuilder {
    }

    interface Join {
      <T>(raw: Raw<T>): QueryBuilder<T>;
      <T>(tableName: TableName<T>, callback: (joinClause: JoinClause) => any): QueryBuilder<T>;
      <T>(tableName: TableName<T>, columns: {[key: string]: string|Raw<T>}): QueryBuilder<T>;
      <T>(tableName: TableName<T>, raw: Raw<T>): QueryBuilder<T>;
      <T>(tableName: TableName<T>, column1: string, column2: string): QueryBuilder<T>;
      <T>(tableName: TableName<T>, column1: string, raw: Raw<T>): QueryBuilder<T>;
      <T>(tableName: TableName<T>, column1: string, operator: string, column2: string): QueryBuilder<T>;
    }

    interface JoinClause {
      on<T>(raw: Raw<T>): JoinClause;
      on(callback: Function): JoinClause;
      on<T>(columns: {[key: string]: string|Raw<T>}): JoinClause;
      on(column1: string, column2: string): JoinClause;
      on<T>(column1: string, raw: Raw<T>): JoinClause;
      on(column1: string, operator: string, column2: string): JoinClause;
      andOn<T>(raw: Raw<T>): JoinClause;
      andOn(callback: Function): JoinClause;
      andOn<T>(columns: {[key: string]: string|Raw<T>}): JoinClause;
      andOn(column1: string, column2: string): JoinClause;
      andOn<T>(column1: string, raw: Raw<T>): JoinClause;
      andOn(column1: string, operator: string, column2: string): JoinClause;
      orOn<T>(raw: Raw<T>): JoinClause;
      orOn(callback: Function): JoinClause;
      orOn<T>(columns: {[key: string]: string|Raw<T>}): JoinClause;
      orOn(column1: string, column2: string): JoinClause;
      orOn<T>(column1: string, raw: Raw<T>): JoinClause;
      orOn(column1: string, operator: string, column2: string): JoinClause;
      using<T>(column: string|string[]|Raw<T>|{[key: string]: string|Raw<T>}): JoinClause;
      type(type: string): JoinClause;
    }

    interface JoinRaw {
      <T>(tableName: string, binding?: Value): QueryBuilder<T>;
    }

    interface Where extends WhereRaw, WhereWrapped, WhereNull {
      <T>(raw: Raw<T>): QueryBuilder<T>;
      <T>(callback: (queryBuilder: QueryBuilder<T>) => any): QueryBuilder<T>;
      <T>(object: Object): QueryBuilder<T>;
      <T>(columnName: string, value: Value): QueryBuilder<T>;
      <T>(columnName: string, operator: string, value: Value): QueryBuilder<T>;
      <T>(columnName: string, operator: string, query: QueryBuilder<T>): QueryBuilder<T>;
    }

    interface WhereRaw extends RawQueryBuilder {
      <T>(condition: boolean): QueryBuilder<T>;
    }

    interface WhereWrapped {
      <T>(callback: Function): QueryBuilder<T>;
    }

    interface WhereNull {
      <T>(columnName: string): QueryBuilder<T>;
    }

    interface WhereIn {
      <T>(columnName: string, values: Value[]): QueryBuilder<T>;
      <T>(columnName: string, callback: Function): QueryBuilder<T>;
      <T>(columnName: string, query: QueryBuilder<T>): QueryBuilder<T>;
    }

    interface WhereBetween {
      <T>(columnName: string, range: [Value, Value]): QueryBuilder<T>;
    }

    interface WhereExists {
      <T>(callback: Function): QueryBuilder<T>;
      <T>(query: QueryBuilder<T>): QueryBuilder<T>;
    }

    interface WhereNull {
      <T>(columnName: string): QueryBuilder<T>;
    }

    interface WhereIn {
      <T>(columnName: string, values: Value[]): QueryBuilder<T>;
    }

    interface GroupBy extends RawQueryBuilder, ColumnNameQueryBuilder {
    }

    interface OrderBy {
      <T>(columnName: string, direction?: string): QueryBuilder<T>;
    }

    interface Union {
      <T>(callback: Function, wrap?: boolean): QueryBuilder<T>;
      <T>(callbacks: Function[], wrap?: boolean): QueryBuilder<T>;
      <T>(...callbacks: Function[]): QueryBuilder<T>;
      // (...callbacks: Function[], wrap?: boolean): QueryInterface;
    }

    interface Having extends RawQueryBuilder, WhereWrapped {
      <T>(tableName: string, column1: string, operator: string, column2: string): QueryBuilder<T>;
    }

    // commons

    interface ColumnNameQueryBuilder {
      <T>(...columnNames: ColumnName<T>[]): QueryBuilder<T>;
      <T>(columnNames: ColumnName<T>[]): QueryBuilder<T>;
    }

    interface RawQueryBuilder {
      <T>(sql: string, ...bindings: Value[]): QueryBuilder<T>;
      <T>(sql: string, bindings: Value[]): QueryBuilder<T>;
      <T>(raw: Raw<T>): QueryBuilder<T>;
    }

    // Raw

	type RawResult<T> = { rows: T };
    interface Raw<T> extends events.EventEmitter, ChainableInterface<RawResult<T>> {
      wrap(before: string, after: string): Raw<T>;
    }

    interface RawBuilder {
      <T>(value: Value): Raw<T>;
      <T>(sql: string, ...bindings: Value[]): Raw<T>;
      <T>(sql: string, bindings: Value[]): Raw<T>;
      <T>(sql: string, bindings: Object): Raw<T>;
    }

    //
    // QueryBuilder
    //

    interface QueryBuilder<T> extends QueryInterface, ChainableInterface<T> {
      or: QueryBuilder<T>;
      and: QueryBuilder<T>;

      //TODO: Promise?
      columnInfo(column?: string): Promise<ColumnInfo>;

      forUpdate(): QueryBuilder<T>;
      forShare(): QueryBuilder<T>;

      toSQL(): Sql;

      on(event: string, callback: Function): QueryBuilder<T>;
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

    interface ChainableInterface<T> extends Promise<T> {
      toQuery(): string;
      options(options: any): QueryBuilder<T>;
      stream(options?: any, callback?: (builder: QueryBuilder<T>) => any): QueryBuilder<T>;
      stream(callback?: (builder: QueryBuilder<T>) => any): QueryBuilder<T>;
      pipe(writable: any): QueryBuilder<T>;
      exec(callback: Function): QueryBuilder<T>;
    }

    interface Transaction<T> extends QueryBuilder<T> {
      commit: any;
      rollback: any;
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
      database?: string;
      directory?: string;
      extension?: string;
      tableName?: string;
    }

    interface Migrator {
      make(name:string, config?: MigratorConfig):Promise<string>;
      latest(config?: MigratorConfig):Promise<any>;
      rollback(config?: MigratorConfig):Promise<any>;
      status(config?: MigratorConfig):Promise<number>;
      currentVersion(config?: MigratorConfig):Promise<string>;
    }
  }

  export = Knex;
}
