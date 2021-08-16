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
    dataSource_: any;
    filters_: any;
    columns_: any;
    dataSource: any;
    filters: DataSourceFilters;
    columns: DataSourceColumns;
    getDataSet(): any;
}
import DataSourceFilters = require('./DataSourceFilters.js');
import DataSourceColumns = require('./DataSourceColumns.js');
