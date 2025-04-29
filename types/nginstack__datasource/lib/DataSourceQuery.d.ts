export = DataSourceQuery;
declare function DataSourceQuery(definition: Record<any, any> | number): void;
declare class DataSourceQuery {
    constructor(definition: Record<any, any> | number);
    definition: any;
    dataSource: number | Record<any, any>;
    dataSourceKey: number;
    filters: any;
    columns: any;
    orderBy: string;
    help: string;
    includes: any;
    private dataSourceInstance_;
    dataSourceInstance: any;
    createFilters(filters: any[]): any;
    createColumns(columns: any[]): any;
    execute(filters: any[], columns: any[]): DataSet;
}
declare namespace DataSourceQuery {
    export { DataSet };
}
type DataSet = import("@nginstack/engine/lib/dataset/DataSet");
