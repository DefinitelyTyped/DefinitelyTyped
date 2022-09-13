export = DataSourceDef;
declare function DataSourceDef(): void;
declare class DataSourceDef {
    public: boolean;
    securityMode: any;
    includes: Array<number | string>;
    help: string;
    availableFilters: any[];
    availableColumns: any[];
    onDefineFilters: ((arg0: DataSourceDef, arg1: any) => any) | null;
    onDefineColumns: ((arg0: DataSourceDef, arg1: any) => any) | null;
    onCreate: ((arg0: any) => any) | null;
    onGetQuery: (arg0: any, arg1: any, arg2: any) => string;
    onMountDataSet: ((arg0: any, arg1: any) => any) | null;
    private autoPurgeUnsolicitedColumns;
}
