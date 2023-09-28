export = AvgFieldAggregator;
declare function AvgFieldAggregator(fieldName: any, dataSet: any): void;
declare class AvgFieldAggregator {
    constructor(fieldName: any, dataSet: any);
    supportsCalculatedFields: boolean;
    getValue(): number;
    getDescription(): any;
    setDescription(...args: any[]): void;
    setReadOnly(...args: any[]): void;
    getReadOnly(): any;
    previewValue(recNo: any, newValue: any): void;
    fValue: any;
    clone(): AvgFieldAggregator;
}
