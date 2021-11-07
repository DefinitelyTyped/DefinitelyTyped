export = IClauseSelect;
declare function IClauseSelect(iQuery: IQuery): void;
declare class IClauseSelect {
    constructor(iQuery: IQuery);
    private _iQuery;
    private _columns;
    private _aggregateColumns;
    private _columnsNames;
    private _aggregateColumnsNames;
    private _joinManager;
    private _columnCount;
    isSubSelect: boolean;
    private explicitGroupBy_;
    private _useDistinct;
    private _exprs;
    private _colsToHide;
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
    private _generateAvgTerms;
    private _splitExpressionTerms;
    toSql(): string;
    distinct(): IClauseSelect;
    equals(obj: any): boolean;
    groupBy(fields: any): IClauseSelect;
    private fetchGroupByArr_;
}
declare namespace IClauseSelect {
    export { IQuery, DataSet };
}
type IQuery = import('./IQuery');
import IColumn = require('./IColumn.js');
type DataSet = import('@nginstack/engine/lib/dataset/DataSet');
