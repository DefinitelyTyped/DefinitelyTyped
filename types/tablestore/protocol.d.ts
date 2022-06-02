declare namespace TableStore {
    type CellValue = string | Buffer | int64 | boolean | number | null;

    type PrimaryKeyInput = Array<{ [name: string]: CellValue | VirtualData }>;
    type PrimaryKeyOutput = Array<{ name: string; value: CellValue }>;
    type AttributesInput = Array<{
        [name: string]: CellValue | VirtualData | undefined;
        timestamp?: number;
    }>;
    type AttributesOutput = Array<{
        columnName: string;
        columnValue: CellValue;
        timestamp: int64 | number;
    }>;

    interface Row {
        primaryKey: PrimaryKeyOutput | null;
        attributes: AttributesOutput | null;
    }

    interface RowInBatch extends Row, Consumed {
        isOk: boolean;
        errorCode: string | null;
        errorMessage: string | null;
        tableName: string;
    }

    type TimeRange = Partial<{
        startTime: number;
        endTime: number;
        specificTime: number;
    }>;

    type FilterParams = Partial<{
        columnsToGet: string[];
        columnFilter: ColumnCondition;
        timeRange: TimeRange;
        maxVersions: number;
        startColumn: string;
        endColumn: string;
    }>;

    type RowParamsInBatchGet = FilterParams & {
        tableName: string;
        primaryKey: PrimaryKeyInput[];
    };

    interface TableMeta {
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

    interface TableOptions {
        timeToLive: number;
        maxVersions: number;
        maxTimeDeviation?: number;
    }

    interface ReservedThroughput {
        capacityUnit: {
            read: number;
            write: number;
        };
    }

    interface StreamSpecification {
        enableStream: boolean;
        expirationTime?: number;
    }

    interface IndexMeta {
        name: string;
        primaryKey: string[];
        definedColumn: string[];
        indexUpdateMode?: IndexUpdateMode;
        indexType?: IndexType;
    }

    interface ReturnContent {
        returnType: ReturnType;
        returnColumns?: string[];
    }

    interface JustTableName {
        tableName: string;
    }

    // Params start
    interface CreateTableParams {
        tableMeta: TableMeta;
        tableOptions: TableOptions;
        reservedThroughput: ReservedThroughput;
        streamSpecification?: StreamSpecification;
        indexMetas?: IndexMeta[];
    }

    interface UpdateTableParams {
        tableName: string;
        tableOptions: Partial<TableOptions>;
        reservedThroughput?: ReservedThroughput;
        streamSpecification?: StreamSpecification;
    }

    type DescribeTableParams = JustTableName;

    type DeleteTableParams = JustTableName;

    type GetRowParams = FilterParams & {
        tableName: string;
        primaryKey: PrimaryKeyInput;
    };
    interface PutRowParams {
        tableName: string;
        primaryKey: PrimaryKeyInput;
        condition: Condition;
        attributeColumns: AttributesInput;
        returnContent?: ReturnContent;
    }
    interface UpdateRowParams {
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
    interface DeleteRowParams {
        tableName: string;
        primaryKey: PrimaryKeyInput;
        condition: Condition;
    }
    type GetRangeParams = FilterParams & {
        tableName: string;
        direction: Direction;
        inclusiveStartPrimaryKey: PrimaryKeyInput;
        exclusiveEndPrimaryKey: PrimaryKeyInput;
        limit?: number;
    };
    interface BatchGetRowParams {
        tables: RowParamsInBatchGet[];
    }
    interface BatchWriteRowParams {
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
    // Params end

    interface ListTableResult {
        tableNames: string[];
    }

    interface DescribeTableResult {
        tableMeta: TableMeta;
        reservedThroughputDetails: ReservedThroughput;
        tableOptions: TableOptions;
        streamDetails: StreamSpecification;
        shard_splits: any;
    }

    interface Consumed {
        capacityUnit: {
            read: number;
            write: number;
        };
    }
    interface SingleRowResult {
        consumed: Consumed;
        row?: Row;
        RequestId: string;
    }
    interface GetRangeResult {
        consumed: Consumed;
        rows: Row[];
        nextStartPrimaryKey?: PrimaryKeyOutput;
        compressType?: number;
        dataBlockType?: number;
        nextToken?: Buffer;
        RequestId: string;
    }
    interface BatchGetRowResult {
        tables: RowInBatch[][];
        RequestId: string;
    }
    interface BatchWriteRowResult {
        tables: RowInBatch[];
        RequestId: string;
    }
}
