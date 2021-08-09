export = IColumn;
declare function IColumn(column: ColumnConfig, tableName: string): void;
declare class IColumn {
    constructor(column: ColumnConfig, tableName: string);
    _tableName: string;
    _cast: string;
    isSubQuery: boolean;
    coalesceValue: string | number;
    useCoalesce: boolean;
    _useDistinct: boolean;
    _castValue: string | number;
    _literal: string;
    _field: string | IClauseSelect;
    _aggregate: any;
    _weight: string;
    _alias: string;
    _show: boolean;
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
    export {
        _AGGREGATOR_SUM,
        _AGGREGATOR_COUNT,
        _AGGREGATOR_MAX,
        _AGGREGATOR_MIN,
        _AGGREGATOR_AVG,
        _AGGREGATORS,
        ColumnConfig,
    };
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
declare var _AGGREGATOR_SUM: string;
declare var _AGGREGATOR_COUNT: string;
declare var _AGGREGATOR_MAX: string;
declare var _AGGREGATOR_MIN: string;
declare var _AGGREGATOR_AVG: string;
declare var _AGGREGATORS: string[];
