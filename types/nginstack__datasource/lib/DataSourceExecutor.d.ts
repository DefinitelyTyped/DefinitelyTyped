export = DataSourceExecutor;
declare function DataSourceExecutor(): void;
declare class DataSourceExecutor {
    private dataSources_;
    private addDataSource;
    execute(): void;
    getDataSet(index: number): DataSet;
}
declare namespace DataSourceExecutor {
    export { DataSet };
}
type DataSet = import('@nginstack/engine/lib/dataset/DataSet');
