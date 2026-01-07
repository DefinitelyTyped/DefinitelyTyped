export = MinFieldAggregator;
declare function MinFieldAggregator(fieldName: any, dataSet: any): void;
declare class MinFieldAggregator {
    constructor(fieldName: any, dataSet: any);
    supportsCalculatedFields: boolean;
    previewValue(recNo: any, newValue: any): void;
    fValue: any;
    clone(): MinFieldAggregator;
}
