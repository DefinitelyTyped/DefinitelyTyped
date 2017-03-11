// Type definitions for Knex 0.12
// Project: https://github.com/tgriesser/knex
// Definitions by: Qubo <https://github.com/tkQubo>, Nospamas <https://github.com/nospamas>, Baronfel <https://github.com/baronfel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import events = require("events");
import Promise = require("bluebird");

type GenericCallback<T> = (err: any, result?: T) => any;
type ResultCallback<T> = (result?: T) => void;
type Value = string | number | boolean | Date | string[] | number[] | Date[] | boolean[] | Buffer | Knex.Raw;
type ColumnName = string | Knex.Raw | Knex.QueryBuilder;
type TableName = string | Knex.Raw | Knex.QueryBuilder;

interface Knex extends Knex.QueryInterface {
    (tableName?: string): Knex.QueryBuilder;
    VERSION: string;
    __knex__: string;

    raw: Knex.RawBuilder;
    transaction: (transactionScope: ((trx: Knex.Transaction) => void)) => Promise<any>;
    // TODO: no examples of this in the docs, maybe better type info?
    destroy(callback: (...args: any[]) =>  any): void;
    destroy(): Promise<void>;
    batchInsert(tableName : TableName, data: any[], chunkSize : number) : Knex.QueryBuilder;
    schema: Knex.SchemaBuilder;

    client: any;
    migrate: Knex.Migrator;
    seed: any;
    fn: Knex.FunctionHelper;
    // TODO: these are the same functions on the querybuilder interface, find a way to de-dupe
    on(event: 'query', callback: ResultCallback<any>): Knex.QueryBuilder;
    on(event: 'query-error', callback: GenericCallback<any>): Knex.QueryBuilder;
    on(event: 'query-response', callback: (response: any, obj: any, builder: Knex.QueryBuilder) => void): Knex.QueryBuilder;
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
        unionAll: Union;

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

    type TableCallback = (this: QueryBuilder) => any;

    type Table = (tableNameOrCallback: string | TableCallback) => QueryBuilder;

    interface Distinct extends ColumnNameQueryBuilder {
    }

    type JoinFunction = (this: JoinClause) => void;

    interface Join {
        (raw: Raw): QueryBuilder;
        (tableName: string, columns: {[key: string]: string | number | Raw }): QueryBuilder;
        (tableName: string, callback: JoinFunction): QueryBuilder;
        (tableName: TableName, raw: Raw): QueryBuilder;
        (tableName: TableName, column1: string, column2: string): QueryBuilder;
        (tableName: TableName, column1: string, raw: Raw): QueryBuilder;
        (tableName: TableName, column1: string, operator: string, column2: string): QueryBuilder;
    }

    interface JoinClause {
        on(raw: Raw): JoinClause;
        on(callback: JoinFunction): JoinClause;
        on(columns: {[key: string]: string | Raw}): JoinClause;
        on(column1: string, column2: string): JoinClause;
        on(column1: string, raw: Raw): JoinClause;
        on(column1: string, operator: string, column2: string): JoinClause;
        andOn(raw: Raw): JoinClause;
        andOn(callback: JoinFunction): JoinClause;
        andOn(columns: {[key: string]: string | Raw}): JoinClause;
        andOn(column1: string, column2: string): JoinClause;
        andOn(column1: string, raw: Raw): JoinClause;
        andOn(column1: string, operator: string, column2: string): JoinClause;
        orOn(raw: Raw): JoinClause;
        orOn(callback: JoinFunction): JoinClause;
        orOn(columns: {[key: string]: string | Raw}): JoinClause;
        orOn(column1: string, column2: string): JoinClause;
        orOn(column1: string, raw: Raw): JoinClause;
        orOn(column1: string, operator: string, column2: string): JoinClause;
        using(column: string | string[] | Raw | {[key: string]: string | Raw}): JoinClause;
        type(type: string): JoinClause;
    }

    interface JoinRaw {
        (tableName: string, binding?: Value): QueryBuilder;
    }


    // additional info: http://knexjs.org/#Builder-wheres

    // http://knexjs.org/#Builder-where
    // http://knexjs.org/#Builder-whereNot
    interface Where extends WhereRaw, WhereWrapped, WhereNull {
        (raw: Raw): QueryBuilder;
        (callback: (queryBuilder: QueryBuilder) => any): QueryBuilder;
        (object: {}): QueryBuilder;
        (columnName: string, value: Value): QueryBuilder;
        (columnName: string, operator: string, value: Value): QueryBuilder;
        (columnName: string, operator: string, query: QueryBuilder): QueryBuilder;
    }

    interface WhereRaw extends RawQueryBuilder {
        (condition: boolean): QueryBuilder;
    }

    type  WhereCallback = (this: QueryBuilder) => any;

    interface WhereWrapped {
        (callback: WhereCallback): QueryBuilder;
    }

    interface WhereNull {
        (columnName: string): QueryBuilder;
    }

    interface WhereIn {
        (columnName: string, arrayCallbackBuilder: Value[] | WhereCallback | QueryBuilder): QueryBuilder;
    }

    interface WhereBetween {
        (columnName: string, range: [Value, Value]): QueryBuilder;
    }

    interface WhereExists {
        (queryOrCallback: WhereCallback | QueryBuilder): QueryBuilder;
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

    type UnionFunction = (this: QueryBuilder) => void;

    interface Union {
        // the below is the "true" method signature but is incompatible with current typescript
        // typescript does not support spread operator with optional types in this order
        // (...callbacks: Function[], wrap?: boolean): QueryInterface;
        // we can cover most of the use case of the function with the below types
        (callback: UnionFunction | UnionFunction[], wrap?: boolean): QueryBuilder;
        (...callbacks: UnionFunction[]): QueryBuilder;
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
        (sql: string, bindings: Value[] | {}): Raw;
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
        // callback type depends on the event listened for http://knexjs.org/#events
        on(event: 'query', callback: ResultCallback<any>): QueryBuilder;
        on(event: 'query-error', callback: GenericCallback<any>): QueryBuilder;
        on(event: 'query-response', callback: (response: any, obj: any, builder: QueryBuilder) => void): QueryBuilder;

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
        // from bluebird, deprecated, use asCallback
        exec(callback: GenericCallback<any>): QueryBuilder;
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
        decimal(columnName: string, precision?: number, scale?: number): ColumnBuilder;
        boolean(columnName: string): ColumnBuilder;
        date(columnName: string): ColumnBuilder;
        dateTime(columnName: string): ColumnBuilder;
        time(columnName: string): ColumnBuilder;
        timestamp(columnName: string): ColumnBuilder;
        timestamps(useTimestampType?: boolean, makeDefaultNow?: boolean): ColumnBuilder;
        binary(columnName: string): ColumnBuilder;
        enum(columnName: string, values: Value[]): ColumnBuilder;
        enu(columnName: string, values: Value[]): ColumnBuilder;
        json(columnName: string): ColumnBuilder;
        jsonb(columnName: string): ColumnBuilder;
        uuid(columnName: string): ColumnBuilder;
        comment(val: string): TableBuilder;
        specificType(columnName: string, type: string): ColumnBuilder;
        primary(columnNames: string[]): TableBuilder;
        index(columnNames: string[], indexName?: string, indexType?: string): TableBuilder;
        unique(columnNames: string[], indexName?: string): TableBuilder;
        foreign(column: string): ForeignConstraintBuilder;
        foreign(columns: string[]): MultikeyForeignConstraintBuilder;
        dropForeign(columnNames: string[], foreignKeyName?: string): TableBuilder;
        dropUnique(columnNames: string[], indexName?: string): TableBuilder;
        dropPrimary(constraintName?: string): TableBuilder;
        dropIndex(columnNames: string[], indexName?: string): TableBuilder;
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
        connection?: string | ConnectionConfig | MariaSqlConnectionConfig |
            MySqlConnectionConfig | Sqlite3ConnectionConfig | SocketConnectionConfig;
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
        domain?: string;
        instanceName?: string;
        debug?: boolean;
        requestTimeout?: number;
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
        typeCast?: boolean;
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

    interface SocketConnectionConfig {
        socketPath: string;
        user: string;
        password: string;
        database: string;
        debug?: boolean;
    }

    // types from generic-pool library ^2.4.2, types do not exist at current time of writing
    // some of these are any types for current convenience
    interface PoolConfig {
        name?: string;
        create?: GenericCallback<any>;
        afterCreate?: (connection: any, callback?: GenericCallback<any>) => any;
        destroy?: (resource: any) => void;
        // deprecated
        beforeDestroy?: (connection: any, callback?: GenericCallback<any>) => any;
        min?: number;
        max?: number;
        refreshIdle?: boolean;
        idleTimeoutMillis?: number;
        reapIntervalMillis?: number;
        returnToHead?: boolean;
        priorityRange?: number;
        validate?: (connection: any) => boolean;
        log?: boolean;
    }

    interface MigratorConfig {
        database?: string;
        directory?: string;
        extension?: string;
        tableName?: string;
        disableTransactions?: boolean;
    }

    interface Migrator {
        make(name: string, config?: MigratorConfig): Promise<string>;
        latest(config?: MigratorConfig): Promise<any>;
        rollback(config?: MigratorConfig): Promise<any>;
        status(config?: MigratorConfig): Promise<number>;
        currentVersion(config?: MigratorConfig): Promise<string>;
    }

    interface FunctionHelper {
        now(): Raw;
    }
}

export = Knex;
