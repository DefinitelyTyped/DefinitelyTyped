export = DataSourceColumn;
declare function DataSourceColumn(name: string, type: string): void;
declare class DataSourceColumn {
    constructor(name: string, type: string);
    private propertiesToAssign_;
    showGlobalActions: boolean;
    weight: string | null;
    coalesceValue: any;
    pivot: boolean;
    pathRoot: number | null;
    private dimensionDataType_;
    private dimensionDataSize_;
    pathDepth: number | null;
    pathHeight: number | null;
    private format_;
    sort: string;
    name: string;
    distinct: boolean;
    private notifyNameChange_;
    suggestAlias(): void;
    alias: string;
    private updateLevel_;
    private level_;
    onBeforeAliasChange: (arg0: DataSourceColumn, arg1: string) => any;
    getLevel(): string;
    private format;
    getDimensionDataType(): string;
    getDimensionDataSize(): string;
    private getDepth;
    private setDepth;
    private getBackDepth;
    private setBackDepth;
    private getSource_;
    formatDimension(value: any): string;
    private updateDimensionDataType_;
    private updatePrefix_;
    private prefix_;
    private updateFieldName_;
    private fieldName_;
    fieldName: string;
    canonicalName: string;
    private updateCanonicalName_;
    private canonicalName_;
    aggregate: string;
    toString(): string;
}
declare namespace DataSourceColumn {
    export {
        AGGREGATE_NONE,
        AGGREGATE_SUM,
        AGGREGATE_COUNT,
        AGGREGATE_AVG,
        AGGREGATE_MAX,
        AGGREGATE_MIN,
        SORT_NONE,
        SORT_ASC,
        SORT_DESC,
        DIMENSION_SEP,
        colNameFromField,
        fromField,
        getRootFromLeafNode,
        Field,
    };
}
declare var AGGREGATE_NONE: string;
declare var AGGREGATE_SUM: string;
declare var AGGREGATE_COUNT: string;
declare var AGGREGATE_AVG: string;
declare var AGGREGATE_MAX: string;
declare var AGGREGATE_MIN: string;
declare var SORT_NONE: string;
declare var SORT_ASC: string;
declare var SORT_DESC: string;
declare var DIMENSION_SEP: string;
declare function colNameFromField(fld: Field, prefix: string): string;
declare function fromField(fld: Field, prefix: string): DataSourceColumn;
declare function getRootFromLeafNode(leafNode: number, opt_suggestedRoot: number): number;
type Field = import('@nginstack/engine/lib/classdef/Field');
