export = MaxFieldAggregator;
declare function MaxFieldAggregator(fieldName: any, dataSet: any): void;
declare class MaxFieldAggregator {
    constructor(fieldName: any, dataSet: any);
    supportsCalculatedFields: boolean;
    getValue(): any;
    getDescription(): any;
    setDescription(...args: any[]): void;
    setReadOnly(...args: any[]): void;
    getReadOnly(): any;
    previewValue(recNo: any, newValue: any): void;
    fValue: any;
    clone(): MaxFieldAggregator;
}
