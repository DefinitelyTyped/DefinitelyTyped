export = DataSource;
declare function DataSource(
    definition: DataSourceDef | Record<any, any> | number,
    opt_options?: Record<any, any>
): void;
declare class DataSource {
    constructor(
        definition: DataSourceDef | Record<any, any> | number,
        opt_options?: Record<any, any>
    );
    private iKey_;
    private iUrl_;
    definition: any;
    public: boolean;
    filters: DataSourceFilters;
    columns: DataSourceColumns;
    help: string;
    autoPurgeUnsolicitedColumns: boolean;
    private logger_;
    private validateAvailableFilter_;
    private validateAvailableColumn_;
    private specializeFiltersAndColumns_;
    getQuery(filters: DataSourceFilters, columns: DataSourceColumns): string;
    mountDataSet(ds: DataSet): DataSet;
    createFilters(jsonFilters: DataSourceFilterDef[] | any[]): DataSourceFilters;
    createFiltersFromMap(filtersMap: { [x: string]: any }): DataSourceFilters;
    createColumns(jsonColumns: DataSourceColumnDef[] | any[]): DataSourceColumns;
    private checkFilterClassKey_;
    private checkFilters_;
    private validadeGetQueryReturn_;
    getDataSet(filters: DataSourceFilters, columns: DataSourceColumns): DataSet;
    private processDimensionLevels_;
    private processAggregate_;
    private convertFilters_;
    private convertColumns_;
    getKey(): number;
    getUrl(): string;
    purgeUnsolicitedColumns(ds: DataSet, columns: DataSourceColumns): DataSet;
    getResult(
        filters: DataSourceFilterDef[] | any[],
        columns: DataSourceColumnDef[] | any[]
    ): DataSourceResult;
}
declare namespace DataSource {
    export {
        ColumnOps,
        loadDefinitionFile,
        list,
        DataSourceDef,
        DataSourceColumnDef,
        DataSourceFilterDef,
    };
}
type DataSourceDef = import('./DataSourceDef');
import DataSourceFilters = require('./DataSourceFilters.js');
import DataSourceColumns = require('./DataSourceColumns.js');
import DataSet = require('@nginstack/engine/lib/dataset/DataSet.js');
type DataSourceFilterDef = import('./DataSourceFilterDef');
type DataSourceColumnDef = import('./DataSourceColumnDef');
import DataSourceResult = require('./DataSourceResult.js');
declare namespace ColumnOps {
    const DIMENSION: string;
    const DERIVATION: string;
}
type ColumnOps = string;
declare function loadDefinitionFile(fileId: number | string): any;
declare function list(): DataSet;
