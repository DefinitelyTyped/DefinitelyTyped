// Type definitions for slonik 15.4
// Project: https://github.com/gajus/slonik#readme
// Definitions by: Sebastian Sebald <https://github.com/sebald>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0
import * as SlonikSymbol from './symbols';

//
// HELPER
// ----------------------------------------------------------------------
// This is `roarr` (https://github.com/gajus/roarr) in flow
export type LoggerType = (...args: string[]) => never;
export type MaybePromiseType<T> = T | Promise<T>;

//
// EXPRESSIONS AND TOKENS
// ----------------------------------------------------------------------
export type PrimitiveValueExpressionType = string | number | boolean | null;

export type ValueExpressionType =
    | PrimitiveValueExpressionType
    | IdentifierTokenType
    | RawSqlTokenType
    | SqlSqlTokenType
    | TupleListSqlTokenType
    | TupleSqlTokenType
    | UnnestSqlTokenType
    | ValueListSqlTokenType;

export interface IdentifierTokenType {
    names: ReadonlyArray<string>;
    type: typeof SlonikSymbol.IdentifierTokenSymbol;
}

export interface SqlSqlTokenType {
    sql: string;
    type: typeof SlonikSymbol.SqlTokenSymbol;
    values: PrimitiveValueExpressionType[];
}

export interface RawSqlTokenType {
    sql: string;
    type: typeof SlonikSymbol.RawSqlTokenSymbol;
    values: PrimitiveValueExpressionType[];
}

export interface ValueListSqlTokenType {
    values: PrimitiveValueExpressionType[];
    type: typeof SlonikSymbol.ValueListTokenSymbol;
}

export interface TupleSqlTokenType {
    values: PrimitiveValueExpressionType[];
    type: typeof SlonikSymbol.TupleTokenSymbol;
}

export interface TupleListSqlTokenType {
    tuples: PrimitiveValueExpressionType[];
    type: typeof SlonikSymbol.TupleListTokenSymbol;
}

export interface UnnestSqlTokenType {
    columnTypes: string[];
    tuples: PrimitiveValueExpressionType[][];
    type: typeof SlonikSymbol.UnnestTokenSymbol;
}

//
// DATABASE
// ----------------------------------------------------------------------
export interface FieldType {
    columnID: number;
    dataTypeID: number;
    dataTypeModifier: number;
    dataTypeSize: number;
    format: string;
    name: string;
    tableID: number;
}

export type DatabaseTransactionConnectionType = CommonQueryMethodsType & {
    transaction: (handler: TransactionFunctionType) => Promise<unknown>;
};

export type DatabasePoolConnectionType = CommonQueryMethodsType & {
    transaction: (handler: TransactionFunctionType) => Promise<unknown>;
};

export type ConnectionRoutineType = (connection: DatabasePoolConnectionType) => Promise<unknown>;

export type DatabasePoolType = CommonQueryMethodsType & {
    connect: (connectionRoutine: ConnectionRoutineType) => Promise<unknown>;
    transaction: (handler: TransactionFunctionType) => Promise<unknown>;
};

export type DatabaseConfigurationType =
    | string
    | {
        database?: string;
        host?: string;
        idleTimeoutMillis?: number;
        max?: number;
        password?: string;
        port?: number;
        user?: string;
    };

export type ConnectionTypeType =
    | 'EXPLICIT'
    | 'IMPLICIT_QUERY'
    | 'IMPLICIT_TRANSACTION';

export interface ConnectionContextType {
    /**
     * Unique connection ID
     */
    connectionId: string;
    connectionType: ConnectionTypeType;
    /**
     * Instance of Roarr logger with bound connection context parameters
     */
    log: LoggerType;
    /**
     * Unique connection pool ID
     */
    poolId: string;
}

export type DatabaseConnectionType = DatabasePoolConnectionType & DatabasePoolType;

//
// QUERY
// ----------------------------------------------------------------------
export type QueryIdType = string;

export interface QueryType {
    sql: string;
    values?: ReadonlyArray<PrimitiveValueExpressionType>;
}

export type QueryMethodType<R> = (
    sql: TaggedTemplateLiteralInvocationType,
    values?: PrimitiveValueExpressionType[]
) => Promise<R>;

export interface NoticeType {
    code: string;
    length: number;
    message: string;
    name: string;
    severity: string;
    where: string;
}

export type QueryResultType<T> = Readonly<{
    command: 'DELETE' | 'INSERT' | 'SELECT' | 'UPDATE';
    fields: ReadonlyArray<FieldType>;
    notices: ReadonlyArray<NoticeType>,
    oid: number | null;
    rowAsArray: boolean;
    rowCount: number;
    rows: ReadonlyArray<T>;
}>;

export type QueryResultRowColumnType = string | number;
export type QueryResultRowType<ColumnName extends string = string> = {
    [name in  ColumnName]: QueryResultRowColumnType;
};

// TODO: Infer column names via generic
export type QueryAnyFirstFunctionType       = QueryMethodType<QueryResultRowColumnType[]>;
export type QueryAnyFunctionType            = QueryMethodType<QueryResultRowType[]>;
export type QueryFunctionType               = QueryMethodType<QueryResultRowType>;
export type QueryManyFirstFunctionType      = QueryMethodType<QueryResultRowColumnType[]>;
export type QueryManyFunctionType           = QueryMethodType<QueryResultRowType[]>;
export type QueryMaybeOneFirstFunctionType  = QueryMethodType<QueryResultRowColumnType>;
export type QueryMaybeOneFunctionType       = QueryMethodType<QueryResultRowType | null>;
export type QueryOneFirstFunctionType       = QueryMethodType<QueryResultRowColumnType>;
export type QueryOneFunctionType            = QueryMethodType<QueryResultRowType>;

export interface CommonQueryMethodsType {
    any: QueryAnyFunctionType;
    anyFirst: QueryAnyFirstFunctionType;
    many: QueryManyFunctionType;
    manyFirst: QueryManyFirstFunctionType;
    maybeOne: QueryMaybeOneFunctionType;
    maybeOneFirst: QueryMaybeOneFirstFunctionType;
    one: QueryOneFunctionType;
    oneFirst: QueryOneFirstFunctionType;
    query: QueryFunctionType;
}

export interface CallSiteType {
    columnNumber: number;
    fileName: string | null;
    lineNumber: number;
}

export interface QueryContextType {
    /**
     * Unique connection ID
     */
    connectionId: string;
    /**
     * Instance of Roarr logger with bound query context parameters
     */
    log: LoggerType;
    /**
     * A copy of the query before `transformQuery` middleware
     */
    originalQuery: QueryType;
    /**
     * Unique connection pool ID
     */
    poolId: string;
    /**
     * Unique query ID
     */
    queryId: QueryIdType;
    stackTrace: CallSiteType[] | null;
    /**
     * `process.hrtime.bigint()` for when query was received.
     */
    queryInputTime: number;
    /**
     * Unique transaction ID
     */
    transactionId?: string;
}

//
// SQL (TAGGED TEMPLATE)
// ----------------------------------------------------------------------
export interface TaggedTemplateLiteralInvocationType {
    sql: string;
    type: typeof SlonikSymbol.SqlTokenSymbol;
    values: ValueExpressionType[];
}

export const sql: SqlTaggedTemplateType;

export interface SqlTaggedTemplateType {
    (template: TemplateStringsArray, ...vals: ValueExpressionType[]): SqlSqlTokenType;
    identifier: (names: string[]) => IdentifierTokenType;
    raw: (rawSql: string, values?: PrimitiveValueExpressionType[]) => RawSqlTokenType;
    tuple: (values: PrimitiveValueExpressionType[]) => TupleSqlTokenType;
    tupleList: (tuples: PrimitiveValueExpressionType[][]) => TupleListSqlTokenType;
    unnest: (tuples: PrimitiveValueExpressionType[][], columnTypes: string[]) => UnnestSqlTokenType;
    valueList: (values: PrimitiveValueExpressionType[]) => ValueListSqlTokenType;
}

export interface SqlFragmentType {
    parameters: PrimitiveValueExpressionType[];
    sql: string;
}

//
// POOL
// ----------------------------------------------------------------------
export interface PoolContextType {
    /**
     * Instance of Roarr logger with bound connection context parameters
     */
    log: LoggerType;
    /**
     * Unique connection pool ID
     */
    poolId: string;
    /**
     * The query that is initiating the connection
     */
    query: TaggedTemplateLiteralInvocationType | null;
}

export function createPool(
    connectionConfiguration: DatabaseConfigurationType,
    clientUserConfiguration?: ClientUserConfigurationType
): DatabasePoolType;

//
// TRANSACTION
// ----------------------------------------------------------------------
export type TransactionFunctionType = (
    connection: DatabaseTransactionConnectionType
) => Promise<unknown>;

//
// INTERCEPTOR
// ----------------------------------------------------------------------
export interface InterceptorType {
    afterPoolConnection?: (
        connectionContext: ConnectionContextType,
        connection: DatabasePoolConnectionType
    ) => MaybePromiseType<void>;
    afterQueryExecution?: (
        queryContext: QueryContextType,
        query: QueryType,
        result: QueryResultType<QueryResultRowType>
    ) => MaybePromiseType<QueryResultType<QueryResultRowType>>;
    beforePoolConnection?: (
        connectionContext: PoolContextType
    ) => MaybePromiseType<DatabasePoolType | null | undefined>;
    beforePoolConnectionRelease?: (
        connectionContext: ConnectionContextType,
        connection: DatabasePoolConnectionType
    ) => MaybePromiseType<void>;
    beforeQueryExecution?: (
        queryContext: QueryContextType,
        query: QueryType
    ) => MaybePromiseType<QueryResultType<QueryResultRowType> | undefined>;
    transformQuery?: (
        queryContext: QueryContextType,
        query: QueryType
    ) => MaybePromiseType<QueryType>;
}

/**
 * Default interceptors:
 * - [Field name transformation interceptor](https://github.com/gajus/slonik#field-name-transformation-interceptor)
 * - [Query normalization interceptor](https://github.com/gajus/slonik#query-normalization-interceptor)
 *
 * See official [readme](https://github.com/gajus/slonik#default-interceptors) for more information.
 */
export function createInterceptorPreset(): InterceptorType[];

export function createFieldNameTransformationInterceptor(configuration: {
    format: string,
    test?: (field: FieldType) => boolean
}): InterceptorType;
export function createQueryNormalizationInterceptor(configuration?: {
    stripComments?: boolean;
}): InterceptorType;
export function createBenchmarkingInterceptor(): InterceptorType;

//
// TYPE PARSER
// ----------------------------------------------------------------------
export interface TypeParserType<T = unknown> {
    /**
     * Value of "pg_type"."typname" (e.g. "int8", "timestamp", "timestamptz")
     */
    name: string;
    parse: (value: string) => T;
}

export function createBigintTypeParser(): TypeParserType<number>;
export function createTimestampTypeParser(): TypeParserType<number | null>;
export function createTimestampWithTimeZoneTypeParser(): TypeParserType<number | null>;

/**
 * Default type parsers.
 *
 * These interceptors are enabled by default:
 * - `int8`: Produces an integer.
 * - `timestamp`: Produces a unix timestamp (in milliseconds).
 * - `timestamptz`: Produces a unix timestamp (in milliseconds).
 */
export function createTypeParserPreset(): TypeParserType[];

//
// CLIENT
// ----------------------------------------------------------------------
export interface ClientConfigurationType {
    captureStackTrace?: boolean;
    /**
     * An array of [Slonik interceptors](https://github.com/gajus/slonik#slonik-interceptors)
     */
    interceptors?: InterceptorType[];
    /**
     * An array of [Slonik type parsers](https://github.com/gajus/slonik#slonik-type-parsers)
     */
    typeParsers?: TypeParserType[];
}

export interface ClientUserConfigurationType<T = unknown> {
    /**
     * An array of [Slonik interceptors](https://github.com/gajus/slonik#slonik-interceptors)
     */
    interceptors?: InterceptorType[];
    /**
     * An array of [Slonik type parsers](https://github.com/gajus/slonik#slonik-type-parsers)
     */
    typeParsers?: TypeParserType[];
}

//
// ERRORS
// ----------------------------------------------------------------------
export class SlonikError extends Error {}
export class NotFoundError extends SlonikError {}
export class DataIntegrityError extends SlonikError {}
export class IntegrityConstraintViolationError extends SlonikError {}
export class NotNullIntegrityConstraintViolationError extends IntegrityConstraintViolationError {}
export class ForeignKeyIntegrityConstraintViolationError extends IntegrityConstraintViolationError {}
export class UniqueIntegrityConstraintViolationError extends IntegrityConstraintViolationError {}
export class CheckIntegrityConstraintViolationError extends IntegrityConstraintViolationError {}
