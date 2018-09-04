// Type definitions for Knex.js 0.14
// Project: https://github.com/tgriesser/knex
// Definitions by: Qubo <https://github.com/tkQubo>
//                 Pablo Rodríguez <https://github.com/MeLlamoPablo>
//                 Matt R. Wilson <https://github.com/mastermatt>
//                 Satana Charuwichitratana <https://github.com/micksatana>
//                 Shrey Jain <https://github.com/shreyjain1994>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import events = require("events");
import stream = require ("stream");
import Bluebird = require("bluebird");

type Callback = Function;
type Client = Function;
type Value = string | number | boolean | Date | Array<string> | Array<number> | Array<Date> | Array<boolean> | Buffer | Knex.Raw;
type ValueMap = { [key: string]: Value | Knex.QueryBuilder };
type ColumnName = string | Knex.Raw | Knex.QueryBuilder | {[key: string]: string };
type TableName = string | Knex.Raw | Knex.QueryBuilder;
type Identifier = { [alias: string]: string };

interface Knex extends Knex.QueryInterface {
    (tableName?: TableName | Identifier): Knex.QueryBuilder;
    VERSION: string;
    __knex__: string;

    raw: Knex.RawBuilder;
    transaction<T>(transactionScope: (trx: Knex.Transaction) => Promise<T> | Bluebird<T> | void): Bluebird<T>;
    destroy(callback: Function): void;
    destroy(): Bluebird<void>;
    batchInsert(tableName: TableName, data: any[], chunkSize?: number): Knex.QueryBuilder;
    schema: Knex.SchemaBuilder;
    queryBuilder(): Knex.QueryBuilder;

    client: any;
    migrate: Knex.Migrator;
    seed: any;
    fn: Knex.FunctionHelper;
    on(eventName: string, callback: Function): Knex.QueryBuilder;
}

declare function Knex(config: Knex.Config): Knex;

declare namespace Knex {
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

        // Withs
        with: With;
        withRaw: WithRaw;
        withSchema: WithSchema;
        withWrapped: WithWrapped;

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
        unionAll(callback: QueryCallback): QueryBuilder;

        // Having
        having: Having;
        andHaving: Having;
        havingRaw: RawQueryBuilder;
        orHaving: Having;
        orHavingRaw: RawQueryBuilder;
        havingIn: HavingIn;

        // Clear
        clearSelect(): QueryBuilder;
        clearWhere(): QueryBuilder;

        // Paging
        offset(offset: number): QueryBuilder;
        limit(limit: number): QueryBuilder;

        // Aggregation
        count(...columnNames: string[]): QueryBuilder;
        count(columnName: Record<string, string | string[] | Knex.Raw> | Knex.Raw): QueryBuilder;
        countDistinct(columnName: string | Record<string, string | Knex.Raw> | Knex.Raw): QueryBuilder;
        min(columnName: string, ...columnNames: string[]): QueryBuilder;
        min(columnName: Record<string, string | string[] | Knex.Raw> | Knex.Raw): QueryBuilder;
        max(columnName: string, ...columnNames: string[]): QueryBuilder;
        max(columnName: Record<string, string | string[] | Knex.Raw> | Knex.Raw): QueryBuilder;
        sum(columnName: string, ...columnNames: string[]): QueryBuilder;
        sum(columnName: Record<string, string | string[] | Knex.Raw> | Knex.Raw): QueryBuilder;
        sumDistinct(columnName: string | Record<string, string | Knex.Raw> | Knex.Raw): QueryBuilder;
        avg(columnName: string, ...columnNames: string[]): QueryBuilder;
        avg(columnName: Record<string, string | string[] | Knex.Raw> | Knex.Raw): QueryBuilder;
        avgDistinct(columnName: string | Record<string, string | Knex.Raw> | Knex.Raw): QueryBuilder;
        increment(columnName: string, amount?: number): QueryBuilder;
        decrement(columnName: string, amount?: number): QueryBuilder;

        // Others
        first: Select;

        debug(enabled?: boolean): QueryBuilder;
        pluck(column: string): QueryBuilder;

        insert(data: any, returning?: string | string[]): QueryBuilder;
        modify(callback: QueryCallbackWithArgs, ...args: any[]): QueryBuilder;
        update(data: any, returning?: string | string[]): QueryBuilder;
        update(columnName: string, value: Value, returning?: string | string[]): QueryBuilder;
        returning(column: string | string[]): QueryBuilder;

        del(returning?: string | string[]): QueryBuilder;
        delete(returning?: string | string[]): QueryBuilder;
        truncate(): QueryBuilder;

        transacting(trx?: Transaction): QueryBuilder;
        connection(connection: any): QueryBuilder;

        clone(): QueryBuilder;
    }

    interface As {
        (columnName: string): QueryBuilder;
    }

    interface Select extends ColumnNameQueryBuilder {
        (aliases: { [alias: string]: string }): QueryBuilder;
    }

    interface Table {
        (tableName: TableName | Identifier): QueryBuilder;
        (callback: Function): QueryBuilder;
        (raw: Raw): QueryBuilder;
    }

    interface Distinct extends ColumnNameQueryBuilder {
    }

    interface Join {
        (raw: Raw): QueryBuilder;
        (tableName: TableName | QueryCallback, clause: (this: JoinClause, join: JoinClause) => void): QueryBuilder;
        (tableName: TableName | QueryCallback, columns: { [key: string]: string | number | Raw }): QueryBuilder;
        (tableName: TableName | QueryCallback, raw: Raw): QueryBuilder;
        (tableName: TableName | QueryCallback, column1: string, column2: string): QueryBuilder;
        (tableName: TableName | QueryCallback, column1: string, raw: Raw): QueryBuilder;
        (tableName: TableName | QueryCallback, column1: string, operator: string, column2: string): QueryBuilder;
    }

    interface JoinClause {
        on(raw: Raw): JoinClause;
        on(callback: QueryCallback): JoinClause;
        on(columns: { [key: string]: string | Raw }): JoinClause;
        on(column1: string, column2: string): JoinClause;
        on(column1: string, raw: Raw): JoinClause;
        on(column1: string, operator: string, column2: string | Raw): JoinClause;
        andOn(raw: Raw): JoinClause;
        andOn(callback: QueryCallback): JoinClause;
        andOn(columns: { [key: string]: string | Raw }): JoinClause;
        andOn(column1: string, column2: string): JoinClause;
        andOn(column1: string, raw: Raw): JoinClause;
        andOn(column1: string, operator: string, column2: string | Raw): JoinClause;
        orOn(raw: Raw): JoinClause;
        orOn(callback: QueryCallback): JoinClause;
        orOn(columns: { [key: string]: string | Raw }): JoinClause;
        orOn(column1: string, column2: string): JoinClause;
        orOn(column1: string, raw: Raw): JoinClause;
        orOn(column1: string, operator: string, column2: string | Raw): JoinClause;
        onIn(column1: string, values: any[]): JoinClause;
        andOnIn(column1: string, values: any[]): JoinClause;
        orOnIn(column1: string, values: any[]): JoinClause;
        onNotIn(column1: string, values: any[]): JoinClause;
        andOnNotIn(column1: string, values: any[]): JoinClause;
        orOnNotIn(column1: string, values: any[]): JoinClause;
        onNull(column1: string): JoinClause;
        andOnNull(column1: string): JoinClause;
        orOnNull(column1: string): JoinClause;
        onNotNull(column1: string): JoinClause;
        andOnNotNull(column1: string): JoinClause;
        orOnNotNull(column1: string): JoinClause;
        onExists(callback: QueryCallback): JoinClause;
        andOnExists(callback: QueryCallback): JoinClause;
        orOnExists(callback: QueryCallback): JoinClause;
        onNotExists(callback: QueryCallback): JoinClause;
        andOnNotExists(callback: QueryCallback): JoinClause;
        orOnNotExists(callback: QueryCallback): JoinClause;
        onBetween(column1: string, range: [any, any]): JoinClause;
        andOnBetween(column1: string, range: [any, any]): JoinClause;
        orOnBetween(column1: string, range: [any, any]): JoinClause;
        onNotBetween(column1: string, range: [any, any]): JoinClause;
        andOnNotBetween(column1: string, range: [any, any]): JoinClause;
        orOnNotBetween(column1: string, range: [any, any]): JoinClause;
        using(column: string | string[] | Raw | { [key: string]: string | Raw }): JoinClause;
        type(type: string): JoinClause;
    }

    interface JoinRaw {
        (tableName: string, binding?: Value): QueryBuilder;
    }

    interface With extends WithRaw, WithWrapped {
    }

    interface WithRaw {
        (alias: string, raw: Raw): QueryBuilder;
        (alias: string, sql: string, bindings?: Value[] | Object): QueryBuilder;
    }

    interface WithSchema {
        (schema: string): QueryBuilder;
    }

    interface WithWrapped {
        (alias: string, callback: (queryBuilder: QueryBuilder) => any): QueryBuilder;
    }

    interface Where extends WhereRaw, WhereWrapped, WhereNull {
        (raw: Raw): QueryBuilder;
        (callback: QueryCallback): QueryBuilder;
        (object: Object): QueryBuilder;
        (columnName: string, value: Value | null): QueryBuilder;
        (columnName: string, operator: string, value: Value | QueryBuilder | null): QueryBuilder;
        (left: Raw, operator: string, right: Value | QueryBuilder | null): QueryBuilder;
    }

    interface WhereRaw extends RawQueryBuilder {
        (condition: boolean): QueryBuilder;
    }

    interface WhereWrapped {
        (callback: QueryCallback): QueryBuilder;
    }

    interface WhereNull {
        (columnName: string): QueryBuilder;
    }

    interface WhereBetween {
        (columnName: string, range: [Value, Value]): QueryBuilder;
    }

    interface WhereExists {
        (callback: QueryCallback): QueryBuilder;
        (query: QueryBuilder): QueryBuilder;
    }

    interface WhereNull {
        (columnName: string): QueryBuilder;
    }

    interface WhereIn {
        (columnName: string, values: Value[] | QueryBuilder | QueryCallback): QueryBuilder;
        (columnNames: string[], values: Value[][] | QueryBuilder | QueryCallback): QueryBuilder;
    }

    interface GroupBy extends RawQueryBuilder, ColumnNameQueryBuilder {
    }

    interface OrderBy {
        (columnName: string, direction?: string): QueryBuilder;
    }

    interface Union {
        (callback: QueryCallback | QueryBuilder | Raw, wrap?: boolean): QueryBuilder;
        (callbacks: (QueryCallback | QueryBuilder | Raw)[], wrap?: boolean): QueryBuilder;
        (...callbacks: (QueryCallback | QueryBuilder | Raw)[]): QueryBuilder;
        // (...callbacks: QueryCallback[], wrap?: boolean): QueryInterface;
    }

    interface Having extends RawQueryBuilder, WhereWrapped {
        (tableName: string, column1: string, operator: string, column2: string): QueryBuilder;
    }

    interface HavingIn {
        (columnName: string, values: Value[]): QueryBuilder;
    }

    // commons

    interface ColumnNameQueryBuilder {
        (...columnNames: ColumnName[]): QueryBuilder;
        (columnNames: ColumnName[]): QueryBuilder;
    }

    interface RawQueryBuilder {
        (sql: string, ...bindings: (Value | QueryBuilder)[]): QueryBuilder;
        (sql: string, bindings: (Value | QueryBuilder)[] | ValueMap): QueryBuilder;
        (raw: Raw): QueryBuilder;
    }

    // Raw

    interface Raw extends events.EventEmitter, ChainableInterface {
        wrap(before: string, after: string): Raw;
    }

    interface RawBuilder {
        (value: Value): Raw;
        (sql: string, ...bindings: (Value | QueryBuilder)[]): Raw;
        (sql: string, bindings: (Value | QueryBuilder)[] | ValueMap): Raw;
    }

    //
    // QueryBuilder
    //

    type QueryCallback = (this: QueryBuilder, builder: QueryBuilder) => void;
    type QueryCallbackWithArgs = (this: QueryBuilder, builder: QueryBuilder, ...args: any[]) => void;

    interface QueryBuilder extends QueryInterface, ChainableInterface {
        or: QueryBuilder;
        and: QueryBuilder;

        //TODO: Promise?
        columnInfo(column?: string): Bluebird<ColumnInfo>;

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

    interface ChainableInterface extends Bluebird<any> {
        toQuery(): string;
        options(options: any): QueryBuilder;
        stream(callback: (readable: stream.PassThrough) => any): Bluebird<any>;
        stream(options?: { [key: string]: any }): stream.PassThrough;
        stream(options: { [key: string]: any }, callback: (readable: stream.PassThrough) => any): Bluebird<any>;
        pipe(writable: any): stream.PassThrough;
        exec(callback: Function): QueryBuilder;
    }

    interface Transaction extends Knex {
        savepoint(transactionScope: (trx: Transaction) => any): Bluebird<any>;
        commit(value?: any): QueryBuilder;
        rollback(error?: any): QueryBuilder;
    }

    //
    // Schema builder
    //

    interface SchemaBuilder extends Bluebird<any> {
        createTable(tableName: string, callback: (tableBuilder: CreateTableBuilder) => any): SchemaBuilder;
        createTableIfNotExists(tableName: string, callback: (tableBuilder: CreateTableBuilder) => any): SchemaBuilder;
        alterTable(tableName: string, callback: (tableBuilder: CreateTableBuilder) => any): SchemaBuilder;
        renameTable(oldTableName: string, newTableName: string): Bluebird<void>;
        dropTable(tableName: string): SchemaBuilder;
        hasTable(tableName: string): Bluebird<boolean>;
        hasColumn(tableName: string, columnName: string): Bluebird<boolean>;
        table(tableName: string, callback: (tableBuilder: AlterTableBuilder) => any): Bluebird<void>;
        dropTableIfExists(tableName: string): SchemaBuilder;
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
        decimal(columnName: string, precision?: number | null, scale?: number): ColumnBuilder;
        boolean(columnName: string): ColumnBuilder;
        date(columnName: string): ColumnBuilder;
        dateTime(columnName: string): ColumnBuilder;
        time(columnName: string): ColumnBuilder;
        timestamp(columnName: string, standard?: boolean): ColumnBuilder;
        timestamps(useTimestampType?: boolean, makeDefaultNow?: boolean): ColumnBuilder;
        binary(columnName: string, length?: number): ColumnBuilder;
        enum(columnName: string, values: Value[]): ColumnBuilder;
        enu(columnName: string, values: Value[]): ColumnBuilder;
        json(columnName: string): ColumnBuilder;
        jsonb(columnName: string): ColumnBuilder;
        uuid(columnName: string): ColumnBuilder;
        comment(val: string): TableBuilder;
        specificType(columnName: string, type: string): ColumnBuilder;
        primary(columnNames: string[]): TableBuilder;
        index(columnNames: (string | Raw)[], indexName?: string, indexType?: string): TableBuilder;
        unique(columnNames: (string | Raw)[], indexName?: string): TableBuilder;
        foreign(column: string, foreignKeyName?: string): ForeignConstraintBuilder;
        foreign(columns: string[], foreignKeyName?: string): MultikeyForeignConstraintBuilder;
        dropForeign(columnNames: string[], foreignKeyName?: string): TableBuilder;
        dropUnique(columnNames: (string | Raw)[], indexName?: string): TableBuilder;
        dropPrimary(constraintName?: string): TableBuilder;
        dropIndex(columnNames: (string | Raw)[], indexName?: string): TableBuilder;
        dropTimestamps(): ColumnBuilder;
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
        primary(constraintName?: string): ColumnBuilder;
        unique(indexName?: string): ColumnBuilder;
        references(columnName: string): ReferencingColumnBuilder;
        onDelete(command: string): ColumnBuilder;
        onUpdate(command: string): ColumnBuilder;
        defaultTo(value: Value): ColumnBuilder;
        unsigned(): ColumnBuilder;
        notNullable(): ColumnBuilder;
        nullable(): ColumnBuilder;
        comment(value: string): ColumnBuilder;
        alter(): ColumnBuilder;
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

    interface ReferencingColumnBuilder extends ColumnBuilder {
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
        client?: string | typeof Client;
        dialect?: string;
        version?: string;
        connection?: string | ConnectionConfig | MariaSqlConnectionConfig |
            MySqlConnectionConfig | MsSqlConnectionConfig | Sqlite3ConnectionConfig | SocketConnectionConfig;
        pool?: PoolConfig;
        migrations?: MigratorConfig;
        postProcessResponse?: (result: any, queryContext: any) => any;
        wrapIdentifier?: (value: string, origImpl: (value: string) => string, queryContext: any) => string;
        seeds?: SeedsConfig;
        acquireConnectionTimeout?: number;
        useNullAsDefault?: boolean;
        searchPath?: string | string[];
        asyncStackTraces?: boolean;
    }

    interface ConnectionConfig {
        host: string;
        user: string;
        password: string;
        database: string;
        domain?: string;
        instanceName?: string;
        debug?: boolean;
        requestTimeout?: number;
    }

    interface MsSqlConnectionConfig {
        user: string;
        password: string;
        server: string;
        database: string;
        options: MsSqlOptionsConfig;
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
        ssl?: boolean | MariaSslConfiguration;
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

    // Config object for mysql: https://github.com/mysqljs/mysql#connection-options
    interface MySqlConnectionConfig {
        host?: string;
        port?: number;
        localAddress?: string;
        socketPath?: string;
        user?: string;
        password?: string;
        database?: string;
        charset?: string;
        timezone?: string;
        connectTimeout?: number;
        stringifyObjects?: boolean;
        insecureAuth?: boolean;
        typeCast?: any;
        queryFormat?: (query: string, values: any) => string;
        supportBigNumbers?: boolean;
        bigNumberStrings?: boolean;
        dateStrings?: boolean;
        debug?: boolean;
        trace?: boolean;
        multipleStatements?: boolean;
        flags?: string;
        ssl?: string | MariaSslConfiguration;
    }

    /** Used with SQLite3 adapter */
    interface Sqlite3ConnectionConfig {
        filename: string;
        debug?: boolean;
    }

    interface MsSqlOptionsConfig {
        encrypt?: boolean;
        port?: number;
        domain?: string;
        connectionTimeout?: number;
        requestTimeout?: number;
        stream?: boolean;
        parseJSON?: boolean;
        pool?: PoolConfig;
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

        // generic-pool v3 configs
        maxWaitingClients?: number;
        testOnBorrow?: boolean;
        acquireTimeoutMillis?: number;
        fifo?: boolean;
        autostart?: boolean;
        evictionRunIntervalMillis?: number;
        numTestsPerRun?: number;
        softIdleTimeoutMillis?: number;
        Promise?: any;
    }

    interface MigratorConfig {
        database?: string;
        directory?: string;
        extension?: string;
        tableName?: string;
        disableTransactions?: boolean;
    }

    interface SeedsConfig {
        directory?: string;
    }

    interface Migrator {
        make(name: string, config?: MigratorConfig): Bluebird<string>;
        latest(config?: MigratorConfig): Bluebird<any>;
        rollback(config?: MigratorConfig): Bluebird<any>;
        status(config?: MigratorConfig): Bluebird<number>;
        currentVersion(config?: MigratorConfig): Bluebird<string>;
    }

    interface FunctionHelper {
        now(): Raw;
    }

    //
    // Clients
    //

    class Client extends events.EventEmitter {
      constructor(config: Config);
      config: Config;
      dialect: string;
      driverName: string;
      connectionSettings: object;

      acquireRawConnection(): Promise<any>;
      destroyRawConnection(connection: any): Promise<void>;
      validateConnection(connection: any): Promise<boolean>;
    }
}

export = Knex;
