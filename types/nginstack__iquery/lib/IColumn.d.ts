export = IColumn;
declare function IColumn(column: ColumnConfig, tableName: string): void;
declare class IColumn {
    constructor(column: ColumnConfig, tableName: string);
    private _tableName;
    private _cast;
    isSubQuery: boolean;
    coalesceValue: string | number;
    useCoalesce: boolean;
    private _useDistinct;
    private _castValue;
    private _literal;
    private _field;
    private _aggregate;
    private _weight;
    private _alias;
    private _show;
    private namePattern_;
    private sanitizeName_;
    private checkColumnCollection_;
    isOperator: boolean;
    isLiteral: boolean;
    private _getAggregate;
    isAggregate: boolean;
    field: string | IClauseSelect;
    fieldName: string;
    aggregate: string;
    private getDistinct;
    alias: string;
    show: boolean;
    literal: string;
    weight: string;
    private _validate;
    toSql(noAlias: boolean): string;
    private _naturalColumnToSql;
    private _arrayColumnToSql;
}
declare namespace IColumn {
    export { ColumnConfig };
}
interface ColumnConfig {
    alias: string;
    cast: string;
    castValue: string | number;
    coalesceValue: string | number;
    distinct: boolean;
    field: string | IClauseSelect;
    isSubQuery: boolean;
    literal: string;
    show: boolean;
    useCoalesce: boolean;
    weight: string;
}
import IClauseSelect = require('./IClauseSelect.js');
