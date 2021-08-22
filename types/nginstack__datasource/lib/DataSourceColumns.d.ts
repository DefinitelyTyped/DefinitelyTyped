export = DataSourceColumns;
declare function DataSourceColumns(
    opt_dataSource?: any,
    opt_colsDefs?: DataSourceColumnDef[]
): void;
declare class DataSourceColumns {
    constructor(opt_dataSource?: any, opt_colsDefs?: DataSourceColumnDef[]);
    private columnsArray_;
    private columnsByName_;
    private columnsByAlias_;
    private indexByName_;
    private postProcessingInfo_;
    private newDynColumn_;
    private unshare_;
    getLength(): number;
    private importAndMixin_;
    importFields(
        classKey: number,
        prefix: string,
        opt_options?:
            | {
                  includeFieldNames: string;
                  excludeFieldNames: string;
                  children: boolean;
                  onlyVisible: boolean;
                  onlyIncludedFieldNames: boolean;
              }
            | Record<any, any>
    ): void;
    importVisibleFields(
        classKey: number,
        fieldNamesPrefix?: string,
        includeFieldNames?: string,
        excludeFieldNames?: string
    ): void;
    parseDynColumnExpr(columnName: any): {
        derivedFrom: any;
        dynColumns: any[];
    };
    private aliasChangeListener_;
    column(indexOrName: number | string, opt_type?: string): DataSourceColumn;
    toString(): string;
    indexOf(aliasOrName: string): number;
    private parseColumnsExpression_;
    getColumns(columnsSelection: string): DataSourceColumns;
    getIQueryColumns(columnsSelection: string, iquery?: IQuery): any[];
    private add;
    hasColumn(name: string): boolean;
    findByName(name: string): DataSourceColumn;
    findByAlias(alias: string): DataSourceColumn;
    getPostProcessingInfo(): any;
}
declare namespace DataSourceColumns {
    export { DataSourceColumnDef, IQuery };
}
type DataSourceColumnDef = import('./DataSourceColumnDef');
import DataSourceColumn = require('./DataSourceColumn.js');
type IQuery = import('@nginstack/iquery/lib/IQuery');
