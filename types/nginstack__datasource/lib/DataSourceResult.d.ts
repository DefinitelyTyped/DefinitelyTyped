export = DataSourceResult;
declare function DataSourceResult(
    dataSource: DataSource,
    filters: DataSourceFilterDef[] | any[] | DataSourceFilters,
    columns: DataSourceColumnDef[] | any[] | DataSourceColumns
): void;
declare class DataSourceResult {
    constructor(
        dataSource: DataSource,
        filters: DataSourceFilterDef[] | any[] | DataSourceFilters,
        columns: DataSourceColumnDef[] | any[] | DataSourceColumns
    );
    private dataSource_;
    private filters_;
    private columns_;
    dataSource: DataSource;
    filters: DataSourceFilters;
    columns: DataSourceColumns;
    getDataSet(): DataSet;
}
declare namespace DataSourceResult {
    export { DataSet, DataSource, DataSourceFilterDef, DataSourceColumnDef };
}
type DataSource = import('./DataSource');
type DataSourceFilterDef = import('./DataSourceFilterDef');
import DataSourceFilters = require('./DataSourceFilters.js');
type DataSourceColumnDef = import('./DataSourceColumnDef');
import DataSourceColumns = require('./DataSourceColumns.js');
type DataSet = import('@nginstack/engine/lib/dataset/DataSet');
