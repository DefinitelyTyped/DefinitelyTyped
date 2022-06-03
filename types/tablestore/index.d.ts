// Type definitions for tablestore 5.1
// Project: https://github.com/aliyun/aliyun-tablestore-nodejs-sdk
// Definitions by: craigwu <https://github.com/waynecraig>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

// ---------- metadata ----------
export enum rowExistenceExpectation {
    IGNORE,
    EXPECT_EXIST,
    EXPECT_NOT_EXIST,
}

export enum Direction {
    FORWARD,
    BACKWARD,
}

export enum UpdateType {
    PUT,
    DELETE,
    DELETE_ALL,
    INCREMENT,
}

export enum BatchWriteType {
    PUT,
    UPDATE,
    DELETE,
}

export enum ReturnType {
    NONE,
    Primarykey,
    AfterModify,
}

export enum DefinedColumnType {
    DCT_INTEGER,
    DCT_DOUBLE,
    DCT_BOOLEAN,
    DCT_STRING,
}

export enum PrimaryKeyType {
    INTEGER,
    STRING,
    BINARY,
}

export enum PrimaryKeyOption {
    AUTO_INCREMENT,
}

export enum IndexUpdateMode {
    IUM_ASYNC_INDEX,
    IUM_SYNC_INDEX,
}

export enum IndexType {
    IT_GLOBAL_INDEX,
    IT_LOCAL_INDEX,
}

export type VirtualData = {
    [K in any]: never;
};
export const INF_MIN: VirtualData;
export const INF_MAX: VirtualData;
export const PK_AUTO_INCR: VirtualData;

// ---------- long ----------
export interface int64 {
    toBuffer: () => Buffer;
    toNumber: () => number;
}
export const Long: {
    fromNumber: (num: number) => int64;
    fromString: (str: string) => int64;
};

// ---------- protocol ----------
export type CellValue = string | Buffer | int64 | boolean | number | null;

export type PrimaryKeyInput = Array<{ [name: string]: CellValue | VirtualData }>;
export type PrimaryKeyOutput = Array<{ name: string; value: CellValue }>;
export type AttributesInput = Array<{
    [name: string]: CellValue | VirtualData | undefined;
    timestamp?: number;
}>;
export type AttributesOutput = Array<{
    columnName: string;
    columnValue: CellValue;
    timestamp: int64 | number;
}>;

export interface Row {
    primaryKey: PrimaryKeyOutput | null;
    attributes: AttributesOutput | null;
}

export interface RowInBatch extends Row, Consumed {
    isOk: boolean;
    errorCode: string | null;
    errorMessage: string | null;
    tableName: string;
}

export type TimeRange = Partial<{
    startTime: number;
    endTime: number;
    specificTime: number;
}>;

export type FilterParams = Partial<{
    columnsToGet: string[];
    columnFilter: ColumnCondition;
    timeRange: TimeRange;
    maxVersions: number;
    startColumn: string;
    endColumn: string;
}>;

export type RowParamsInBatchGet = FilterParams & {
    tableName: string;
    primaryKey: PrimaryKeyInput[];
};

export interface TableMeta {
    tableName: string;
    primaryKey: Array<{
        name: string;
        type: PrimaryKeyType | keyof typeof PrimaryKeyType;
        option?: PrimaryKeyOption | keyof typeof PrimaryKeyOption;
    }>;
    definedColumn?: Array<{
        name: string;
        type: DefinedColumnType | keyof typeof DefinedColumnType;
    }>;
}

export interface TableOptions {
    timeToLive: number;
    maxVersions: number;
    maxTimeDeviation?: number;
}

export interface ReservedThroughput {
    capacityUnit: {
        read: number;
        write: number;
    };
}

export interface StreamSpecification {
    enableStream: boolean;
    expirationTime?: number;
}

export interface IndexMeta {
    name: string;
    primaryKey: string[];
    definedColumn: string[];
    indexUpdateMode?: IndexUpdateMode;
    indexType?: IndexType;
}

export interface ReturnContent {
    returnType: ReturnType;
    returnColumns?: string[];
}

export interface JustTableName {
    tableName: string;
}

// ---------- protocol: pramas ----------
export interface CreateTableParams {
    tableMeta: TableMeta;
    tableOptions: TableOptions;
    reservedThroughput: ReservedThroughput;
    streamSpecification?: StreamSpecification;
    indexMetas?: IndexMeta[];
}

export interface UpdateTableParams {
    tableName: string;
    tableOptions: Partial<TableOptions>;
    reservedThroughput?: ReservedThroughput;
    streamSpecification?: StreamSpecification;
}

export type DescribeTableParams = JustTableName;

export type DeleteTableParams = JustTableName;

export type GetRowParams = FilterParams & {
    tableName: string;
    primaryKey: PrimaryKeyInput;
};
export interface PutRowParams {
    tableName: string;
    primaryKey: PrimaryKeyInput;
    condition: Condition;
    attributeColumns: AttributesInput;
    returnContent?: ReturnContent;
}
export interface UpdateRowParams {
    tableName: string;
    primaryKey: PrimaryKeyInput;
    condition: Condition;
    updateOfAttributeColumns: Array<{
        PUT?: AttributesInput;
        DELETE?: Array<{ [name: string]: int64 }>;
        DELETE_ALL?: string[];
        INCREMENT?: Array<{ [name: string]: int64 }>;
    }>;
    returnContent?: ReturnContent;
}
export interface DeleteRowParams {
    tableName: string;
    primaryKey: PrimaryKeyInput;
    condition: Condition;
}
export type GetRangeParams = FilterParams & {
    tableName: string;
    direction: Direction;
    inclusiveStartPrimaryKey: PrimaryKeyInput;
    exclusiveEndPrimaryKey: PrimaryKeyInput;
    limit?: number;
};
export interface BatchGetRowParams {
    tables: RowParamsInBatchGet[];
}
export interface BatchWriteRowParams {
    tables: Array<{
        tableName: string;
        rows: Array<
            | {
                  type: 'UPDATE';
                  condition: Condition;
                  primaryKey: PrimaryKeyInput;
                  attributeColumns: Array<{
                      PUT?: AttributesInput;
                      DELETE?: Array<{ [name: string]: int64 }>;
                      DELETE_ALL?: string[];
                  }>;
                  returnContent?: ReturnContent;
              }
            | {
                  type: 'PUT';
                  condition: Condition;
                  primaryKey: PrimaryKeyInput;
                  attributeColumns?: AttributesInput;
                  returnContent?: ReturnContent;
              }
            | {
                  type: 'DELETE';
                  condition: Condition;
                  primaryKey: PrimaryKeyInput;
              }
        >;
    }>;
}

/*
    type ListSearchIndexParams = JustTableName;
    type DescribeSearchIndexParams = JustTableName & {
        indexName: string;
    };
    type CreateSearchIndexParams = {
        tableName: string;
        indexName: string;
    }
    */

// ---------- protocol: results ----------
export interface ListTableResult {
    tableNames: string[];
}

export interface DescribeTableResult {
    tableMeta: TableMeta;
    reservedThroughputDetails: ReservedThroughput;
    tableOptions: TableOptions;
    streamDetails: StreamSpecification;
    shard_splits: any;
}

export interface Consumed {
    capacityUnit: {
        read: number;
        write: number;
    };
}
export interface SingleRowResult {
    consumed: Consumed;
    row?: Row;
    RequestId: string;
}
export interface GetRangeResult {
    consumed: Consumed;
    rows: Row[];
    nextStartPrimaryKey?: PrimaryKeyOutput;
    compressType?: number;
    dataBlockType?: number;
    nextToken?: Buffer;
    RequestId: string;
}
export interface BatchGetRowResult {
    tables: RowInBatch[][];
    RequestId: string;
}
export interface BatchWriteRowResult {
    tables: RowInBatch[];
    RequestId: string;
}

// ---------- filter ----------
export enum LogicalOperator {
    NOT,
    AND,
    OR,
}

export enum ColumnConditionType {
    COMPOSITE_COLUMN_CONDITION,
    SINGLE_COLUMN_CONDITION,
}

export enum ComparatorType {
    EQUAL,
    NOT_EQUAL,
    GREATER_THAN,
    GREATER_EQUAL,
    LESS_THAN,
    LESS_EQUAL,
}

export enum RowExistenceExpectation {
    IGNORE,
    EXPECT_EXIST,
    EXPECT_NOT_EXIST,
}

export class ColumnCondition {}
export class CompositeCondition extends ColumnCondition {
    constructor(combinator: LogicalOperator);
    addSubCondition: (condition: ColumnCondition) => void;
    sub_conditions: ColumnCondition[];
}
export class SingleColumnCondition extends ColumnCondition {
    constructor(
        columnName: string,
        columnValue: CellValue,
        comparator: ComparatorType,
        passIfMissing?: boolean,
        latestVersionOnly?: boolean,
    );
    columnName: string;
    columnValue: CellValue;
    comparator: ComparatorType;
    passIfMissing?: boolean;
    latestVersionOnly?: boolean;
}
export class Condition {
    constructor(rowExistenceExpectation: RowExistenceExpectation, columnCondition: ColumnCondition | null);
    columnCondition: ColumnCondition;
}
export class ColumnPaginationFilter {
    constructor(limit: number, offset: number);
    getType(): number;
}

// ---------- config ----------
export type ConfigOptions = Partial<{
    accessKeyId: string;
    secretAccessKey: string;
    accessKeySecret: string;
    stsToken: string;
    securityToken: string;
    logger: unknown;
    endpoint: string;
    httpOptions: {
        timeout: number;
        maxSockets: number;
    };
    maxRetries: number;
    instancename: string;
    computeChecksums: boolean;
}>;

// ---------- events ----------
export class SequentialExecutor {
    constructor();
    on(eventName: string, listener: () => void): SequentialExecutor;
    onAsync(eventName: string, listener: () => void): SequentialExecutor;
    removeListener(eventName: string, listener: () => void): SequentialExecutor;
    removeAllListeners(eventName: string): SequentialExecutor;
}

export const events: SequentialExecutor;

// ---------- client ----------
export class Client {
    constructor(config: ConfigOptions);
    createTable(params: CreateTableParams, callback?: (err: Error | null, data: unknown) => void): Promise<unknown>;
    updateTable(params: UpdateTableParams, callback?: (err: Error | null, data: unknown) => void): Promise<unknown>;
    listTable(params: unknown, callback?: (err: Error | null, data: ListTableResult) => void): Promise<ListTableResult>;
    describeTable(
        params: DescribeTableParams,
        callback?: (err: Error | null, data: DescribeTableResult) => void,
    ): Promise<DescribeTableResult>;
    deleteTable(params: DeleteTableParams, callback?: (error: Error | null, data: unknown) => void): Promise<unknown>;
    getRow(
        params: GetRowParams,
        callback?: (error: Error | null, result: SingleRowResult) => void,
    ): Promise<SingleRowResult>;
    putRow(
        params: PutRowParams,
        callback?: (error: Error | null, result: SingleRowResult) => void,
    ): Promise<SingleRowResult>;
    updateRow(
        params: UpdateRowParams,
        callback?: (error: Error | null, result: SingleRowResult) => void,
    ): Promise<SingleRowResult>;
    deleteRow(
        params: DeleteRowParams,
        callback?: (error: Error | null, result: SingleRowResult) => void,
    ): Promise<SingleRowResult>;
    getRange(
        params: GetRangeParams,
        callback?: (error: Error | null, result: GetRangeResult) => void,
    ): Promise<GetRangeResult>;
    batchGetRow(
        params: BatchGetRowParams,
        callback?: (error: Error | null, result: BatchGetRowResult) => void,
    ): Promise<BatchGetRowResult>;
    batchWriteRow(
        params: BatchWriteRowParams,
        callback?: (error: Error | null, result: BatchWriteRowResult) => void,
    ): Promise<BatchWriteRowResult>;
    /*
        listSearchIndex(
            params: ListSearchIndexParams,
            callback?: (error: Error | null, result: unknown) => void,
        ): Promise<unknown>;
        describeSearchIndex(
            params: DescribeSearchIndexParams,
            callback?: (error: Error | null, result: unknown) => void,
        ): Promise<unknown>;
        createSearchIndex(
            params: CreateSearchIndexParams,
            callback?: (error: Error | null, result: unknown) => void,
        ): Promise<unknown>;
        */
}

// ---------- search ----------
export enum QueryType {
    MATCH_QUERY,
    MATCH_PHRASE_QUERY,
    TERM_QUERY,
    RANGE_QUERY,
    PREFIX_QUERY,
    BOOL_QUERY,
    CONST_SCORE_QUERY,
    FUNCTION_SCORE_QUERY,
    NESTED_QUERY,
    WILDCARD_QUERY,
    MATCH_ALL_QUERY,
    GEO_BOUNDING_BOX_QUERY,
    GEO_DISTANCE_QUERY,
    GEO_POLYGON_QUERY,
    TERMS_QUERY,
    EXISTS_QUERY,
}

export enum ScoreMode {
    SCORE_MODE_NONE,
    SCORE_MODE_AVG,
    SCORE_MODE_MAX,
    SCORE_MODE_TOTAL,
    SCORE_MODE_MIN,
}

export enum SortOrder {
    SORT_ORDER_ASC,
    SORT_ORDER_DESC,
}

export enum SortMode {
    SORT_MODE_MIN,
    SORT_MODE_MAX,
    SORT_MODE_AVG,
}

export enum FieldType {
    LONG,
    DOUBLE,
    BOOLEAN,
    KEYWORD,
    TEXT,
    NESTED,
    GEO_POINT,
    DATE,
}

export enum ColumnReturnType {
    RETURN_ALL,
    RETURN_SPECIFIED,
    RETURN_NONE,
}

export enum GeoDistanceType {
    GEO_DISTANCE_ARC,
    GEO_DISTANCE_PLANE,
}

export enum IndexOptions {
    DOCS,
    FREQS,
    POSITIONS,
    OFFSETS,
}

export enum QueryOperator {
    OR,
    AND,
}
