export = FieldAggregator;
declare function FieldAggregator(fieldName: any, dataSet: any): void;
declare class FieldAggregator {
    constructor(fieldName: any, dataSet: any);
    fieldName: any;
    dataSet: DataSet;
    originalDataSet: any;
    private lastRangeValues;
    private lastSentValue;
    private lastDataSetVersion;
    private readOnlyModified;
    decimalPrecision: number | null;
    supportsCalculatedFields: boolean;
    value: number;
    description: string;
    readOnly: boolean;
    lastValue: number;
    reset(): void;
    fValue: number;
    formatValue(value: number | Date): string;
    private getFormatedValue;
    previewValue(recNo: any, newValue: any): void;
    checkRecNo(recNo: number): void;
    private checkDataSetFilters;
    assign(obj: FieldAggregator): void;
    toString(): string;
}
import DataSet = require("@nginstack/engine/lib/dataset/DataSet.js");
