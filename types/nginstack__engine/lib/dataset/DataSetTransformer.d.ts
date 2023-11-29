export = DataSetTransformer;
declare function DataSetTransformer(): void;
declare class DataSetTransformer {
    pivot(
        ds: DataSet,
        pivotFieldName: string,
        totalFieldsNames: string | any[],
        options?: {
            noGroupingColumns?: string[];
            totalizePivot?: boolean;
            defaultNumeric?: number;
            defaultDate?: number;
            defaultString?: number;
            pivotFormatter: (arg0: any) => string;
        }
    ): PivotResult;
    aggregate(ds: DataSet, groupColumns: any[], aggregateColumns: any): DataSet;
    calculate(ds: DataSet, exprs: any[], hiddenFields?: any[]): DataSet;
}
declare namespace DataSetTransformer {
    export { PIVOT_NULL_VALUE_LABEL, PIVOT_TOTAL_LABEL, DistinctController, PivotResult };
}
import DataSet = require('./DataSet.js');
declare let PIVOT_NULL_VALUE_LABEL: string;
declare let PIVOT_TOTAL_LABEL: string;
declare function DistinctController(ds: DataSet, groupColumns: any[]): void;
declare class DistinctController {
    private constructor();
    private isDistinct;
    private addRecord;
}
interface PivotResult {
    pivotDS: DataSet;
    pivotFieldName: string;
    groupFieldsNames: string[];
    totalFieldsNames: string[];
    dynamicFieldsNames: string[];
}
