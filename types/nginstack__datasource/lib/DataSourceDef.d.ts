export = DataSourceDef;
declare function DataSourceDef(): void;
declare class DataSourceDef {
    public: boolean;
    securityMode: DataSourceSecurityMode;
    includes: Array<number | string>;
    help: string;
    availableFilters: any[];
    availableColumns: any[];
    onDefineFilters: ((arg0: DataSourceDef, arg1: DataSource) => any) | null;
    onDefineColumns: ((arg0: DataSourceDef, arg1: DataSource) => any) | null;
    onCreate: ((arg0: DataSource) => any) | null;
    onGetQuery: (arg0: DataSource, arg1: DataSourceFilters, arg2: DataSourceColumns) => string;
    onMountDataSet: ((arg0: DataSource, arg1: DataSet) => DataSet) | null;
    private autoPurgeUnsolicitedColumns;
}
declare namespace DataSourceDef {
    export { DataSet, DataSource, DataSourceFilters, DataSourceColumns, DataSourceSecurityMode };
}
type DataSourceSecurityMode = any;
type DataSource = import('./DataSource');
type DataSourceFilters = import('./DataSourceFilters');
type DataSourceColumns = import('./DataSourceColumns');
type DataSet = import('@nginstack/engine/lib/dataset/DataSet');
