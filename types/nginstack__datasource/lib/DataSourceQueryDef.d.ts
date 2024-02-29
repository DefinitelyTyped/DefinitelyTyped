export = DataSourceQueryDef;
declare function DataSourceQueryDef(): void;
declare class DataSourceQueryDef {
    dataSourceKey: number;
    dataSource: Record<any, any> | number;
    filters: any[];
    includes: Array<number | string>;
    help: string | null;
    onCreate: ((arg0: DataSourceQuery) => any) | null;
    orderBy: string | null;
    columns: any[];
}
declare namespace DataSourceQueryDef {
    export { DataSourceQuery };
}
type DataSourceQuery = import("./DataSourceQuery");
