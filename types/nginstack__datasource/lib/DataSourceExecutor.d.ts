export = DataSourceExecutor;
declare function DataSourceExecutor(): void;
declare class DataSourceExecutor {
    dataSources_: any[];
    private addDataSource;
    execute(): void;
    getDataSet(index: number): any;
}
