export = MinFieldAggregator;
declare function MinFieldAggregator(fieldName: any, dataSet: any): void;
declare class MinFieldAggregator {
    constructor(fieldName: any, dataSet: any);
    supportsCalculatedFields: boolean;
    getValue(): any;
    setReadOnly(...args: any[]): void;
    getReadOnly(): any;
    getDescription(): any;
    setDescription(...args: any[]): void;
    previewValue(recNo: any, newValue: any): void;
    fValue: any;
    clone(): MinFieldAggregator;
}
