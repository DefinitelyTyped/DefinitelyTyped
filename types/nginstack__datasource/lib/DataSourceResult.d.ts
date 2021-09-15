export = DataSourceResult;
declare function DataSourceResult(
    dataSource: any,
    filters: any[] | any[] | DataSourceFilters,
    columns: any[] | any[] | DataSourceColumns
): void;
declare class DataSourceResult {
    constructor(
        dataSource: any,
        filters: any[] | any[] | DataSourceFilters,
        columns: any[] | any[] | DataSourceColumns
    );
    private dataSource_;
    private filters_;
    private columns_;
    dataSource: any;
    filters: DataSourceFilters;
    columns: DataSourceColumns;
    getDataSet(): any;
}
import DataSourceFilters = require('./DataSourceFilters.js');
import DataSourceColumns = require('./DataSourceColumns.js');
