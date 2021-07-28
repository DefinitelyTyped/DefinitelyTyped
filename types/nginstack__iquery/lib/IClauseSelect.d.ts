export = IClauseSelect;
declare function IClauseSelect(iQuery: IQuery): void;
declare class IClauseSelect {
    constructor(iQuery: IQuery);
    _iQuery: import('./IQuery');
    _columns: any[];
    _aggregateColumns: any[];
    _columnsNames: string[];
    _aggregateColumnsNames: string[];
    _joinManager: import('./IJoinManager.js');
    _columnCount: number;
    isSubSelect: boolean;
    explicitGroupBy_: any[];
    private _useDistinct;
    _exprs: string[];
    _colsToHide: string[];
    iQuery: IQuery;
    columnsCount: number;
    getColumnByIndex(index: number): IColumn;
    columns(...args: any[]): void;
    column(fields: Record<any, any> | string): IClauseSelect;
    private _convertObjectToColumn;
    columnsToSqlArray(): any[];
    columnsToSql(toGroupBy: boolean): string;
    private _convertColumnsToSql;
    private _getColumnFields;
    execute(): DataSet;
    _generateAvgTerms(colAvg: IColumn): {
        expr: string;
        colName: string;
    };
    _splitExpressionTerms(colExpr: IColumn): {
        expr: string;
        colName: string;
    };
    toSql(): string;
    distinct(): IClauseSelect;
    equals(obj: any): boolean;
    groupBy(fields: any): IClauseSelect;
    fetchGroupByArr_(field: any): void;
}
declare namespace IClauseSelect {
    export { _controlFieldsSuffix, IQuery, DataSet };
}
type IQuery = import('./IQuery');
import IColumn = require('./IColumn.js');
type DataSet = import('@nginstack/engine/lib/dataset/DataSet');
declare var _controlFieldsSuffix: string;
