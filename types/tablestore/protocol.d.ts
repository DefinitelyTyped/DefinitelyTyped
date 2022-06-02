declare namespace TableStore {
    type CellValue = string | Buffer | int64 | boolean | number | null;

    type PrimaryKeyInput = { [name: string]: CellValue | VirtualData }[];
    type PrimaryKeyOutput = { name: string; value: CellValue }[];
    type AttributesInput = {
        [name: string]: CellValue | VirtualData | undefined;
        timestamp?: number;
    }[];
    type AttributesOutput = {
        columnName: string;
        columnValue: CellValue;
        timestamp: int64 | number;
    }[];

    type Row = {
        primaryKey: PrimaryKeyOutput | null;
        attributes: AttributesOutput | null;
    };

    type RowInBatch = Row &
        Consumed & {
            isOk: boolean;
            errorCode: string | null;
            errorMessage: string | null;
            tableName: string;
        };

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

    type TableMeta = {
        tableName: string;
        primaryKey: {
            name: string;
            type: PrimaryKeyType | keyof typeof PrimaryKeyType;
            option?: PrimaryKeyOption | keyof typeof PrimaryKeyOption;
        }[];
        definedColumn?: {
            name: string;
            type: DefinedColumnType | keyof typeof DefinedColumnType;
        }[];
    };

    type TableOptions = {
        timeToLive: number;
        maxVersions: number;
        maxTimeDeviation?: number;
    };

    type ReservedThroughput = {
        capacityUnit: {
            read: number;
            write: number;
        };
    };

    type StreamSpecification = {
        enableStream: boolean;
        expirationTime?: number;
    };

    type IndexMeta = {
        name: string;
        primaryKey: string[];
        definedColumn: string[];
        indexUpdateMode?: IndexUpdateMode;
        indexType?: IndexType;
    };

    type ReturnContent = {
        returnType: ReturnType;
        returnColumns?: string[];
    };

    type JustTableName = {
        tableName: string;
    };

    // Params start
    type CreateTableParams = {
        tableMeta: TableMeta;
        tableOptions: TableOptions;
        reservedThroughput: ReservedThroughput;
        streamSpecification?: StreamSpecification;
        indexMetas?: IndexMeta[];
    };

    type UpdateTableParams = {
        tableName: string;
        tableOptions: Partial<TableOptions>;
        reservedThroughput?: ReservedThroughput;
        streamSpecification?: StreamSpecification;
    };

    type DescribeTableParams = JustTableName;

    type DeleteTableParams = JustTableName;

    type GetRowParams = FilterParams & {
        tableName: string;
        primaryKey: PrimaryKeyInput;
    };
    type PutRowParams = {
        tableName: string;
        primaryKey: PrimaryKeyInput;
        condition: Condition;
        attributeColumns: AttributesInput;
        returnContent?: ReturnContent;
    };
    type UpdateRowParams = {
        tableName: string;
        primaryKey: PrimaryKeyInput;
        condition: Condition;
        updateOfAttributeColumns: {
            PUT?: AttributesInput;
            DELETE?: { [name: string]: int64 }[];
            DELETE_ALL?: string[];
            INCREMENT?: { [name: string]: int64 }[];
        }[];
        returnContent?: ReturnContent;
    };
    type DeleteRowParams = {
        tableName: string;
        primaryKey: PrimaryKeyInput;
        condition: Condition;
    };
    type GetRangeParams = FilterParams & {
        tableName: string;
        direction: Direction;
        inclusiveStartPrimaryKey: PrimaryKeyInput;
        exclusiveEndPrimaryKey: PrimaryKeyInput;
        limit?: number;
    };
    type BatchGetRowParams = {
        tables: RowParamsInBatchGet[];
    };
    type BatchWriteRowParams = {
        tables: {
            tableName: string;
            rows: (
                | {
                      type: 'UPDATE';
                      condition: Condition;
                      primaryKey: PrimaryKeyInput;
                      attributeColumns: {
                          PUT?: AttributesInput;
                          DELETE?: { [name: string]: int64 }[];
                          DELETE_ALL?: string[];
                      }[];
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
            )[];
        }[];
    };

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

    type ListTableResult = {
        tableNames: string[];
    };

    type DescribeTableResult = {
        tableMeta: TableMeta;
        reservedThroughputDetails: ReservedThroughput;
        tableOptions: TableOptions;
        streamDetails: StreamSpecification;
        shard_splits: any;
    };

    type Consumed = {
        capacityUnit: {
            read: number;
            write: number;
        };
    };
    type SingleRowResult = {
        consumed: Consumed;
        row?: Row;
        RequestId: string;
    };
    type GetRangeResult = {
        consumed: Consumed;
        rows: Row[];
        nextStartPrimaryKey?: PrimaryKeyOutput;
        compressType?: number;
        dataBlockType?: number;
        nextToken?: Buffer;
        RequestId: string;
    };
    type BatchGetRowResult = {
        tables: RowInBatch[][];
        RequestId: string;
    };
    type BatchWriteRowResult = {
        tables: RowInBatch[];
        RequestId: string;
    };
}
