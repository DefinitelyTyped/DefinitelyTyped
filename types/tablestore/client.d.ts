declare namespace TableStore {
    class Client {
        constructor(config: ConfigOptions);
        createTable(params: CreateTableParams, callback?: (err: Error | null, data: unknown) => void): Promise<unknown>;
        updateTable(params: UpdateTableParams, callback?: (err: Error | null, data: unknown) => void): Promise<unknown>;
        listTable(
            params: unknown,
            callback?: (err: Error | null, data: ListTableResult) => void,
        ): Promise<ListTableResult>;
        describeTable(
            params: DescribeTableParams,
            callback?: (err: Error | null, data: DescribeTableResult) => void,
        ): Promise<DescribeTableResult>;
        deleteTable(
            params: DeleteTableParams,
            callback?: (error: Error | null, data: unknown) => void,
        ): Promise<unknown>;
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
}
